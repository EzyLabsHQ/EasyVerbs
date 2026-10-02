// EasyVerbs — lite version
// Copyright (C) 2026 EzyLabsHQ
// This program is free software under GPL v3 - see LICENSE

// Lite версия: без внешних библиотек, шрифтов и тяжёлых эффектов.
// Настройки и статистика хранятся в тех же ключах localStorage, что и у полной версии.

const SETTINGS_KEY = 'verbTrainerSettings';
const ERRORS_KEY = 'verbTrainerErrors';

const LITE_DEFAULTS = {
    questionCount: '10',
    complexity: 'all',
    verbGroup: 'all',
    lang: 'ru',
    showTranslation: true,
    autoAdvance: false,
    shuffle: true,
    compact: false,
    darkMode: false,
    soundEnabled: true,
    showTimer: true,
    favorites: [],
    favOnly: false,
    customVerbs: [],
    verbsLearned: [],
    verbLastSeen: {},
    totalCorrect: 0,
    totalQuestions: 0,
    bestStreak: 0,
    sessionsCompleted: 0,
    powerMode: 'auto'
};

// ================= ХРАНИЛИЩЕ =================
function loadSettingsLite() {
    let saved = null;
    try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        if (raw) saved = JSON.parse(raw);
    } catch (e) {}
    const merged = Object.assign({}, LITE_DEFAULTS, saved || {});
    if (!saved) {
        merged.lang = detectLang();
        merged.darkMode = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return merged;
}

let settings = loadSettingsLite();
let errorStats = {};

function loadErrors() {
    try {
        const raw = localStorage.getItem(ERRORS_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

errorStats = loadErrors();

function saveSettingsLite() {
    try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {}
}

function saveErrors() {
    try {
        localStorage.setItem(ERRORS_KEY, JSON.stringify(errorStats));
    } catch (e) {}
}

// ================= ЛОКАЛИЗАЦИЯ =================
// Переводы лежат в lite-i18n.js (только нужные ключи, 6 языков) и грузятся синхронно,
// поэтому интерфейс всегда сразу на нужном языке — без «сырых» ключей.

function detectLang() {
    const l = (navigator.language || 'ru').toLowerCase();
    if (l.indexOf('en') === 0) return 'en';
    if (l.indexOf('es') === 0) return 'es';
    if (l.indexOf('de') === 0) return 'de';
    if (l.indexOf('fr') === 0) return 'fr';
    if (l.indexOf('pt') === 0) return 'pt';
    return 'ru';
}

function __(key) {
    const lang = settings.lang || 'ru';
    const table = window.liteTranslations || {};
    if (table[lang] && table[lang][key] !== undefined) return table[lang][key];
    if (table.en && table.en[key] !== undefined) return table.en[key];
    return key;
}

function applyI18n() {
    document.documentElement.lang = settings.lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        el.textContent = __(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        el.setAttribute('placeholder', __(el.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
        el.setAttribute('title', __(el.getAttribute('data-i18n-title')));
    });
    document.title = 'EasyVerbs — ' + __('liteTag');
}

function changeLang(lang) {
    settings.lang = lang;
    saveSettingsLite();
    applyI18n();
    syncSettingsUI();
    renderStatsBar();
    renderGroupChips();
    renderDictionary();
    renderFlashcard();
    renderMistakes();
}

function refreshAll() {
    renderStatsBar();
    renderGroupChips();
    renderDictionary();
    renderFlashcard();
    renderMistakes();
    syncSettingsUI();
}
// ================= ТЕМА =================
function applyTheme() {
    document.body.classList.toggle('dark', !!settings.darkMode);
    document.body.classList.toggle('compact', !!settings.compact);
}

function toggleTheme() {
    settings.darkMode = !settings.darkMode;
    saveSettingsLite();
    applyTheme();
    syncSettingsUI();
}

// ================= ДАННЫЕ И ГЛАГОЛЫ =================
const GROUP_LABELS = ['', 'AAA', 'ABB', 'ABA', 'ABC'];

function getBaseForm(form) {
    let n = String(form).toLowerCase().trim();
    if (n.indexOf('/') > -1) n = n.split('/')[0].trim();
    return n.replace(/\(.*?\)/g, '').trim();
}

function classifyVerb(verb) {
    const v1 = getBaseForm(verb.v1);
    const v2 = getBaseForm(verb.v2);
    const v3 = getBaseForm(verb.v3);
    if (v1 === v2 && v2 === v3) return 1;
    if (v2 === v3) return 2;
    if (v1 === v3) return 3;
    return 4;
}

const HOMOGLYPH_MAP = { 'а': 'a', 'е': 'e', 'о': 'o', 'р': 'p', 'с': 'c', 'х': 'x', 'у': 'y', 'і': 'i', 'ѕ': 's', 'һ': 'h' };

function normalizeTyped(value) {
    if (!value) return '';
    return String(value).toLowerCase().trim().replace(/[аеорсхуіѕһ]/g, function(ch) {
        return HOMOGLYPH_MAP[ch] || ch;
    });
}

function getAcceptedVariations(formStr) {
    let normalized = String(formStr).toLowerCase().trim();
    const out = new Set([normalized]);
    if (normalized.indexOf('/') > -1) {
        normalized.split('/').forEach(function(part) { out.add(part.trim()); });
    }
    const match = normalized.match(/([a-z]+)\s*\(([a-z/]+)\)/i);
    if (match) {
        out.add(match[1].trim());
        match[2].trim().split('/').forEach(function(part) { out.add(part.trim()); });
    }
    if (normalized.indexOf('(') > -1 && normalized.indexOf(')') > -1) {
        out.add(normalized.replace(/\(.*?\)/g, '').trim());
        out.add(normalized.replace(/\((.*?)\)/g, '$1').trim());
    }
    if (normalized === 'was/were') {
        out.add('was');
        out.add('were');
        out.add('was were');
    }
    return Array.from(out).map(function(v) { return v.trim(); }).filter(Boolean);
}

function shuffleArray(list) {
    const arr = list.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

function getFullVerbList() {
    const custom = settings.customVerbs || [];
    return custom.length ? custom.concat(verbsData) : verbsData;
}

function getVerbTranslation(verb) {
    const lang = settings.lang || 'ru';
    if (typeof verbTranslations !== 'undefined' && verbTranslations[lang] && verbTranslations[lang][verb.v1] !== undefined) {
        return verbTranslations[lang][verb.v1];
    }
    if (lang === 'en') return verb.v1;
    return verb.translation;
}

function getMistakeList() {
    return Object.keys(errorStats)
        .map(function(key) { return errorStats[key].verb; })
        .filter(Boolean);
}

function getFilteredVerbs(mistakesOnly) {
    if (mistakesOnly) return getMistakeList();
    let list = getFullVerbList();
    if (settings.complexity && settings.complexity !== 'all') {
        const c = parseInt(settings.complexity, 10);
        if (!isNaN(c)) list = list.filter(function(v) { return v.complexity === c; });
    }
    if (settings.verbGroup && settings.verbGroup !== 'all') {
        const g = parseInt(settings.verbGroup, 10);
        if (!isNaN(g)) list = list.filter(function(v) { return classifyVerb(v) === g; });
    }
    if (settings.favOnly && (settings.favorites || []).length) {
        list = list.filter(function(v) { return settings.favorites.indexOf(v.v1) > -1; });
    }
    return list;
}

function isFavorite(v1) {
    return (settings.favorites || []).indexOf(v1) > -1;
}

function toggleFavorite(v1) {
    if (!settings.favorites) settings.favorites = [];
    const pos = settings.favorites.indexOf(v1);
    if (pos > -1) settings.favorites.splice(pos, 1);
    else settings.favorites.push(v1);
    saveSettingsLite();
    renderDictionary();
}

// ================= ЗВУК И ОЗВУЧКА =================
let audioCtx = null;

function getAudioCtx() {
    if (!settings.soundEnabled) return null;
    try {
        if (!audioCtx) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (!Ctx) return null;
            audioCtx = new Ctx();
        }
        if (audioCtx.state === 'suspended' && audioCtx.resume) audioCtx.resume();
        return audioCtx;
    } catch (e) {
        return null;
    }
}

function playTone(ok) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        const notes = ok ? [660, 880] : [220, 180];
        let t = ctx.currentTime + 0.01;
        notes.forEach(function(freq) {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.0001, t);
            gain.gain.linearRampToValueAtTime(0.12, t + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.16);
            t += 0.13;
        });
    } catch (e) {}
}

function speakNow(text, lang) {
    if (!text || !('speechSynthesis' in window)) return;
    try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = lang || 'en-US';
        utter.rate = 0.95;
        window.speechSynthesis.speak(utter);
    } catch (e) {}
}

// ================= СТАТИСТИКА =================
function renderStatsBar() {
    const bar = document.getElementById('lite-stats');
    if (!bar) return;
    const total = settings.totalQuestions || 0;
    const accuracy = total ? Math.round((settings.totalCorrect || 0) / total * 100) : 0;
    const parts = [
        __('statsQuestions') + ': ' + total,
        __('statsAccuracy') + ': ' + accuracy + '%',
        __('statsBestStreak') + ': ' + (settings.bestStreak || 0),
        __('navMistakes') + ': ' + getMistakeList().length,
        __('homeLearned') + ': ' + (settings.verbsLearned || []).length + '/' + getFullVerbList().length
    ];
    bar.textContent = '';
    parts.forEach(function(text) {
        const span = document.createElement('span');
        span.textContent = text;
        bar.appendChild(span);
    });
}

// ================= НАВИГАЦИЯ =================
function switchTab(tab) {
    ['trainer', 'dictionary', 'flashcards', 'mistakes'].forEach(function(name) {
        const view = document.getElementById('view-' + name);
        const btn = document.getElementById('tab-' + name);
        if (view) view.classList.toggle('hidden', name !== tab);
        if (btn) {
            btn.classList.toggle('active', name === tab);
            btn.setAttribute('aria-selected', name === tab ? 'true' : 'false');
        }
    });
    window.scrollTo(0, 0);
}

// ================= ТРЕНАЖЁР ФОРМ =================
let trainerMode = 'normal';
let queue = [];
let questionIndex = 0;
let score = 0;
let wrongCount = 0;
let streak = 0;
let answered = false;
let mistakesOnly = false;
let timerInterval = null;
let sessionStart = 0;

function setMode(mode) {
    trainerMode = mode;
    document.getElementById('mode-normal').classList.toggle('active', mode === 'normal');
    document.getElementById('mode-reverse').classList.toggle('active', mode === 'reverse');
}

function getQuestionCount() {
    const available = getFilteredVerbs(mistakesOnly).length || 1;
    if (settings.questionCount === 'all') return available;
    const n = parseInt(settings.questionCount, 10) || 10;
    return Math.min(n, available);
}

function startSession(onlyMistakes) {
    mistakesOnly = !!onlyMistakes;
    let pool = getFilteredVerbs(mistakesOnly);
    if (pool.length === 0) {
        if (mistakesOnly) {
            switchTab('trainer');
            showStart();
            return;
        }
        pool = getFullVerbList();
    }
    if (settings.shuffle !== false || mistakesOnly) pool = shuffleArray(pool);
    const total = mistakesOnly ? pool.length : getQuestionCount();
    queue = pool.slice(0, total);

    questionIndex = 0;
    score = 0;
    wrongCount = 0;
    streak = 0;
    sessionStart = Date.now();

    document.getElementById('tr-start').classList.add('hidden');
    document.getElementById('tr-results').classList.add('hidden');
    document.getElementById('tr-active').classList.remove('hidden');
    startTimer();
    loadQuestion();
}

function showStart() {
    document.getElementById('tr-active').classList.add('hidden');
    document.getElementById('tr-results').classList.add('hidden');
    document.getElementById('tr-start').classList.remove('hidden');
}

function startTimer() {
    stopTimer();
    const el = document.getElementById('tr-timer');
    if (!settings.showTimer) {
        el.textContent = '';
        return;
    }
    sessionStart = Date.now();
    function render() {
        const sec = Math.floor((Date.now() - sessionStart) / 1000);
        const mm = Math.floor(sec / 60);
        const ss = sec % 60;
        el.textContent = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    }
    render();
    timerInterval = setInterval(render, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function renderInputs() {
    const box = document.getElementById('tr-inputs');
    box.innerHTML = '';
    const fields = trainerMode === 'normal'
        ? [{ id: 'in-v2', label: 'V2 (Past Simple)' }, { id: 'in-v3', label: 'V3 (Past Participle)' }]
        : [{ id: 'in-v1', label: 'V1 (Infinitive)' }];
    fields.forEach(function(field) {
        const wrap = document.createElement('div');
        wrap.className = 'field';
        const label = document.createElement('label');
        label.textContent = field.label;
        label.setAttribute('for', field.id);
        const input = document.createElement('input');
        input.type = 'text';
        input.id = field.id;
        input.autocomplete = 'off';
        input.autocapitalize = 'off';
        input.spellcheck = false;
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (answered) nextQuestion();
                else checkAnswer();
            }
        });
        wrap.appendChild(label);
        wrap.appendChild(input);
        box.appendChild(wrap);
    });
}

function loadQuestion() {
    if (questionIndex >= queue.length) {
        finishSession();
        return;
    }
    answered = false;
    const verb = queue[questionIndex];
    currentVerb = verb;

    document.getElementById('tr-check').classList.remove('hidden');
    document.getElementById('tr-next').classList.add('hidden');
    document.getElementById('tr-feedback').classList.add('hidden');
    renderInputs();

    const word = document.getElementById('tr-word');
    const label = document.getElementById('tr-label');
    const trans = document.getElementById('tr-translation');

    if (trainerMode === 'normal') {
        word.textContent = verb.v1;
        label.textContent = 'V1 (Infinitive)';
        trans.textContent = getVerbTranslation(verb);
        trans.classList.toggle('hidden', settings.showTranslation === false);
        speakNow(verb.v1, 'en-US');
    } else {
        word.textContent = getVerbTranslation(verb);
        label.textContent = __('trModeRevV1');
        trans.textContent = '';
        trans.classList.add('hidden');
    }

    const total = queue.length;
    document.getElementById('tr-progress').textContent = (questionIndex + 1) + '/' + total;
    document.getElementById('tr-bar').style.width = Math.round((questionIndex + 1) / total * 100) + '%';
    document.getElementById('tr-score').textContent = score;
    document.getElementById('tr-mistakes').textContent = wrongCount;

    const first = document.getElementById('in-v1') || document.getElementById('in-v2');
    if (first) first.focus();
}

function markInput(id, ok) {
    const input = document.getElementById(id);
    if (!input) return;
    input.classList.remove('ok', 'no');
    input.classList.add(ok ? 'ok' : 'no');
    input.disabled = true;
}

function checkAnswer() {
    if (answered) return;
    const verb = currentVerb;
    if (!verb) return;
    answered = true;

    let ok = true;
    let detail = '';

    if (trainerMode === 'normal') {
        const v2El = document.getElementById('in-v2');
        const v3El = document.getElementById('in-v3');
        if (!v2El || !v3El) return;
        const v2 = normalizeTyped(v2El.value);
        const v3 = normalizeTyped(v3El.value);
        const okV2 = v2 !== '' && getAcceptedVariations(verb.v2).indexOf(v2) > -1;
        const okV3 = v3 !== '' && getAcceptedVariations(verb.v3).indexOf(v3) > -1;
        markInput('in-v2', okV2);
        markInput('in-v3', okV3);
        ok = okV2 && okV3;
        if (!okV2) detail = 'V2: ' + verb.v2;
        else if (!okV3) detail = 'V3: ' + verb.v3;
        recordAnswer(verb, ok, okV2 ? (okV3 ? null : 'v3') : 'v2');
    } else {
        const v1El = document.getElementById('in-v1');
        if (!v1El) return;
        const v1 = normalizeTyped(v1El.value);
        const okV1 = v1 !== '' && getAcceptedVariations(verb.v1).indexOf(v1) > -1;
        markInput('in-v1', okV1);
        ok = okV1;
        if (!ok) detail = 'V1: ' + verb.v1;
        recordAnswer(verb, ok, 'spelling');
    }

    const feedback = document.getElementById('tr-feedback');
    feedback.className = 'feedback ' + (ok ? 'ok' : 'no');
    feedback.textContent = ok ? '✓ ' + __('trCorrect') : ('✗ ' + (detail || ''));
    playTone(ok);

    if (ok) {
        document.getElementById('tr-check').classList.add('hidden');
        document.getElementById('tr-next').classList.remove('hidden');
        if (settings.autoAdvance) {
            setTimeout(function() {
                if (answered) nextQuestion();
            }, 700);
        }
    } else {
        document.getElementById('tr-check').classList.add('hidden');
        document.getElementById('tr-next').classList.remove('hidden');
    }

    document.getElementById('tr-score').textContent = score;
    document.getElementById('tr-mistakes').textContent = wrongCount;
    renderStatsBar();
    renderMistakes();
}

function recordAnswer(verb, ok, field) {
    settings.totalQuestions = (settings.totalQuestions || 0) + 1;
    if (ok) {
        score++;
        settings.totalCorrect = (settings.totalCorrect || 0) + 1;
        streak++;
        if (streak > (settings.bestStreak || 0)) settings.bestStreak = streak;
        if (!settings.verbsLearned) settings.verbsLearned = [];
        if (settings.verbsLearned.indexOf(verb.v1) === -1) settings.verbsLearned.push(verb.v1);
        clearMistake(verb.v1);
    } else {
        wrongCount++;
        streak = 0;
        recordMistake(verb, field);
    }
    if (!settings.verbLastSeen) settings.verbLastSeen = {};
    settings.verbLastSeen[verb.v1] = Date.now();
    saveSettingsLite();
}

function nextQuestion() {
    questionIndex++;
    loadQuestion();
}

function finishSession() {
    stopTimer();
    settings.sessionsCompleted = (settings.sessionsCompleted || 0) + 1;
    saveSettingsLite();

    const total = queue.length;
    const accuracy = total ? Math.round(score / total * 100) : 0;
    document.getElementById('tr-active').classList.add('hidden');
    document.getElementById('tr-results').classList.remove('hidden');
    document.getElementById('tr-final').textContent = score + '/' + total;
    document.getElementById('tr-result-desc').textContent =
        __('statsAccuracy') + ': ' + accuracy + '% · ' + __('liteWrongCount') + ': ' + wrongCount;
    document.getElementById('tr-review-mistakes').classList.toggle('hidden', getMistakeList().length === 0);
    renderStatsBar();
    renderMistakes();
}

// ================= СЛОВАРЬ =================
let dictGroup = settings.verbGroup || 'all';
let dictTerm = '';

function renderGroupChips() {
    const groups = ['all', '1', '2', '3', '4'];
    [['tr-groups', settings.verbGroup || 'all', 'setTrainerGroup'],
     ['dict-groups', dictGroup, 'setDictGroup'],
     ['fc-groups', settings.fcGroup || 'all', 'setFcGroup']].forEach(function(item) {
        const box = document.getElementById(item[0]);
        if (!box) return;
        box.innerHTML = '';
        groups.forEach(function(g) {
            const btn = document.createElement('button');
            btn.className = 'chip' + (item[1] === g ? ' active' : '');
            btn.textContent = g === 'all' ? __('dictGroupAll') : GROUP_LABELS[parseInt(g, 10)];
            btn.onclick = function() { window[item[2]](g); };
            box.appendChild(btn);
        });
    });
}

function setTrainerGroup(group) {
    settings.verbGroup = group;
    saveSettingsLite();
    renderGroupChips();
    syncSettingsUI();
}

function setDictGroup(group) {
    dictGroup = group;
    renderGroupChips();
    renderDictionary();
}

function setFcGroup(group) {
    settings.fcGroup = group;
    saveSettingsLite();
    renderGroupChips();
    buildCardList();
}

function renderDictionary() {
    const body = document.getElementById('dict-body');
    if (!body) return;
    const term = dictTerm;
    let list = getFullVerbList();
    if (dictGroup !== 'all') {
        const g = parseInt(dictGroup, 10);
        list = list.filter(function(v) { return classifyVerb(v) === g; });
    }
    if (term) {
        const lower = term.toLowerCase();
        list = list.filter(function(v) {
            return (v.v1 + ' ' + v.v2 + ' ' + v.v3 + ' ' + getVerbTranslation(v)).toLowerCase().indexOf(lower) > -1;
        });
    }

    if (!list.length) {
        body.innerHTML = '<tr><td colspan="6" class="empty">' + __('emptyDictSearch') + '</td></tr>';
    } else {
        const html = list.map(function(v) {
            const fav = isFavorite(v.v1);
            const label = fav ? '★' : '☆';
            return '<tr>' +
                '<td><button class="fav' + (fav ? ' on' : '') + '" onclick="toggleFavorite(\'' + v.v1.replace(/'/g, "\\'") + '\')" aria-label="fav">' + label + '</button></td>' +
                '<td class="v1">' + esc(v.v1) + '</td>' +
                '<td>' + esc(v.v2) + '</td>' +
                '<td>' + esc(v.v3) + '</td>' +
                '<td>' + esc(getVerbTranslation(v)) + '</td>' +
                '<td class="mono">' + GROUP_LABELS[classifyVerb(v)] + '</td>' +
            '</tr>';
        }).join('');
        body.innerHTML = html;
    }

    const counter = document.getElementById('dict-count');
    if (counter) counter.textContent = (__('dictCount') || '') + ' ' + list.length;
}

function esc(text) {
    return String(text).replace(/[&<>"]/g, function(ch) {
        return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch];
    });
}

// ================= КАРТОЧКИ =================
let cardList = [];
let cardIndex = 0;

function buildCardList() {
    let list = getFullVerbList();
    const group = settings.fcGroup || 'all';
    if (group !== 'all') {
        const g = parseInt(group, 10);
        list = list.filter(function(v) { return classifyVerb(v) === g; });
    }
    cardList = settings.shuffle === false ? list : shuffleArray(list);
    cardIndex = 0;
    renderFlashcard();
}

function renderFlashcard() {
    const card = document.getElementById('flashcard');
    if (!card) return;
    card.classList.remove('flipped');
    if (!cardList.length) {
        document.getElementById('fc-v1').textContent = '—';
        document.getElementById('fc-v2').textContent = '—';
        document.getElementById('fc-v3').textContent = '—';
        document.getElementById('fc-trans').textContent = __('fcNoVerbs');
        document.getElementById('fc-counter').textContent = '0/0';
        return;
    }
    const verb = cardList[cardIndex];
    document.getElementById('fc-v1').textContent = verb.v1;
    document.getElementById('fc-v2').textContent = verb.v2;
    document.getElementById('fc-v3').textContent = verb.v3;
    document.getElementById('fc-trans').textContent = getVerbTranslation(verb);
    document.getElementById('fc-counter').textContent = (cardIndex + 1) + '/' + cardList.length;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
        const verb = cardList[cardIndex];
        if (verb) speakNow(verb.v1, 'en-US');
    }
}

function nextCard() {
    if (!cardList.length) return;
    cardIndex = (cardIndex + 1) % cardList.length;
    renderFlashcard();
}

function prevCard() {
    if (!cardList.length) return;
    cardIndex = (cardIndex - 1 + cardList.length) % cardList.length;
    renderFlashcard();
}

// ================= ОШИБКИ =================
function recordMistake(verb, field) {
    const key = verb.v1;
    if (!errorStats[key]) {
        errorStats[key] = { verb: verb, mistakes: 0, lastMistake: null, forms: { v2: 0, v3: 0, spelling: 0 } };
    }
    if (!errorStats[key].forms) errorStats[key].forms = { v2: 0, v3: 0, spelling: 0 };
    errorStats[key].mistakes++;
    errorStats[key].lastMistake = new Date().toLocaleString();
    if (field && errorStats[key].forms[field] !== undefined) errorStats[key].forms[field]++;
    saveErrors();
}

function clearMistake(v1) {
    if (!errorStats[v1]) return;
    errorStats[v1].mistakes = Math.max(0, errorStats[v1].mistakes - 1);
    if (errorStats[v1].mistakes === 0) delete errorStats[v1];
    saveErrors();
}

function renderMistakes() {
    const box = document.getElementById('mist-list');
    if (!box) return;
    const list = getMistakeList();
    if (!list.length) {
        box.innerHTML = '<div class="empty">' + __('misEmpty') + '</div>';
    } else {
        box.innerHTML = list.map(function(verb) {
            const count = (errorStats[verb.v1] && errorStats[verb.v1].mistakes) || 0;
            return '<div class="mist">' +
                '<span class="v">' + esc(verb.v1) + '</span>' +
                '<span class="d">' + esc(verb.v2) + ' → ' + esc(verb.v3) + '</span>' +
                '<span class="n">×' + count + '</span>' +
            '</div>';
        }).join('');
    }
    const btn = document.getElementById('mist-start');
    if (btn) btn.classList.toggle('hidden', list.length === 0);
}

function clearAllMistakes() {
    if (!getMistakeList().length) return;
    if (!window.confirm(__('mistClearConfirm'))) return;
    errorStats = {};
    saveErrors();
    renderMistakes();
    renderStatsBar();
}

// ================= НАСТРОЙКИ =================
function syncSettingsUI() {
    const map = {
        'set-count': settings.questionCount,
        'set-complexity': settings.complexity,
        'set-group': settings.verbGroup,
        'set-lang': settings.lang
    };
    Object.keys(map).forEach(function(id) {
        const el = document.getElementById(id);
        if (el) el.value = map[id];
    });
    const toggles = {
        'set-translation': settings.showTranslation !== false,
        'set-auto': settings.autoAdvance === true,
        'set-timer': settings.showTimer !== false,
        'set-sound': settings.soundEnabled !== false,
        'set-dark': settings.darkMode === true,
        'set-compact': settings.compact === true
    };
    Object.keys(toggles).forEach(function(id) {
        const el = document.getElementById(id);
        if (el) el.checked = toggles[id];
    });
    renderGroupChips();
}

function save() {
    settings.questionCount = document.getElementById('set-count').value;
    settings.complexity = document.getElementById('set-complexity').value;
    settings.verbGroup = document.getElementById('set-group').value;
    settings.showTranslation = document.getElementById('set-translation').checked;
    settings.autoAdvance = document.getElementById('set-auto').checked;
    settings.showTimer = document.getElementById('set-timer').checked;
    settings.soundEnabled = document.getElementById('set-sound').checked;
    settings.darkMode = document.getElementById('set-dark').checked;
    settings.compact = document.getElementById('set-compact').checked;
    // Явный выбор полной версии не перебиваем: переключаем на Lite только если
    // пользователь сам этого не отменял.
    if (settings.powerMode !== 'full') settings.powerMode = 'lite';
    saveSettingsLite();
    applyTheme();
    renderGroupChips();
    renderDictionary();
}

function openSettings() {
    syncSettingsUI();
    document.getElementById('set-overlay').classList.remove('hidden');
}

function closeSettings() {
    save();
    document.getElementById('set-overlay').classList.add('hidden');
}

function resetProgress() {
    if (!window.confirm(__('setResetConfirm'))) return;
    settings.totalCorrect = 0;
    settings.totalQuestions = 0;
    settings.bestStreak = 0;
    settings.sessionsCompleted = 0;
    settings.verbsLearned = [];
    errorStats = {};
    saveSettingsLite();
    saveErrors();
    renderStatsBar();
    renderMistakes();
    renderDictionary();
}

function showPowerReport() {
    const box = document.getElementById('lite-power-report');
    const desc = document.getElementById('lite-power-desc');
    if (box) box.innerHTML = '<div class="feedback">' + __('powerDetecting') + '</div>';
    detectDevicePower({ measureFps: true, fpsDuration: 700 }).then(function(report) {
        if (desc) desc.textContent = getPowerLevelText(report) + ' · ' + report.score + '/100';
        renderPowerReport(box, report);
    });
}

// ================= СТАРТ =================
let currentVerb = null;

window.addEventListener('DOMContentLoaded', function() {
    applyTheme();
    applyI18n();
    renderStatsBar();
    renderGroupChips();
    renderDictionary();
    buildCardList();
    renderMistakes();
    syncSettingsUI();
    detectDevicePower({}).then(function(report) {
        const desc = document.getElementById('lite-power-desc');
        if (desc) desc.textContent = getPowerLevelText(report) + ' · ' + report.score + '/100';
    });
    // просим сервис-воркера сохранить файлы Lite-версии для работы офлайн
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        try {
            navigator.serviceWorker.controller.postMessage({ type: 'CACHE_LITE' });
        } catch (e) {}
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const overlay = document.getElementById('set-overlay');
        if (overlay && !overlay.classList.contains('hidden')) closeSettings();
    }
});