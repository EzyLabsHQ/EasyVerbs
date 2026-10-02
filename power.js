// EasyVerbs
// Copyright (C) 2026 EzyLabsHQ
// This program is free software under GPL v3 - see LICENSE

// Определение мощности устройства (общий модуль для полной и Lite версий)

const POWER_THRESHOLDS = {
    high: 65,
    medium: 40
};

const POWER_PROMPT_VERSION = 3;

const POWER_LITE_URL = 'lite.html';
const POWER_FULL_URL = 'index.html';

function detectGpuInfo() {
    const fallback = { renderer: '', software: false, supported: false };
    let canvas;
    let gl = null;
    try {
        canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const names = ['webgl2', 'webgl', 'experimental-webgl'];
        for (let i = 0; i < names.length && !gl; i++) {
            try {
                gl = canvas.getContext(names[i], { failIfMajorPerformanceCaveat: false });
            } catch (e) {
                gl = null;
            }
        }
        if (!gl) return fallback;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const renderer = ext
            ? (gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || '')
            : (gl.getParameter(gl.RENDERER) || '');
        const name = String(renderer);
        const software = /swiftshader|llvmpipe|software|basic render|microsoft basic|mesa offscreen/i.test(name);
        return { renderer: name, software: software, supported: true };
    } catch (e) {
        return fallback;
    } finally {
        try {
            if (gl && gl.getExtension('WEBGL_lose_context')) gl.getExtension('WEBGL_lose_context').loseContext();
        } catch (e) {}
        if (canvas) canvas.width = canvas.height = 0;
    }
}

function getNetworkInfo() {
    const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!c) return { supported: false, saveData: false, effectiveType: '', downlink: 0 };
    return {
        supported: true,
        saveData: !!c.saveData,
        effectiveType: c.effectiveType || '',
        downlink: typeof c.downlink === 'number' ? c.downlink : 0
    };
}

function prefersReducedMotion() {
    try {
        return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    } catch (e) {
        return false;
    }
}

function getBatteryInfo() {
    return new Promise(function(resolve) {
        if (!navigator.getBattery) {
            resolve(null);
            return;
        }
        let done = false;
        const timer = setTimeout(function() {
            if (!done) { done = true; resolve(null); }
        }, 800);
        try {
            navigator.getBattery().then(function(b) {
                if (done) return;
                done = true;
                clearTimeout(timer);
                resolve({
                    level: typeof b.level === 'number' ? b.level : null,
                    charging: !!b.charging,
                    supported: true
                });
            }).catch(function() {
                if (done) return;
                done = true;
                clearTimeout(timer);
                resolve(null);
            });
        } catch (e) {
            clearTimeout(timer);
            done = true;
            resolve(null);
        }
    });
}

function measureFrameRate(duration) {
    duration = duration || 900;
    return new Promise(function(resolve) {
        if (typeof requestAnimationFrame !== 'function') {
            resolve(null);
            return;
        }
        let frames = 0;
        let start = 0;
        let finished = false;
        function step(now) {
            if (!start) start = now;
            frames++;
            const elapsed = now - start;
            if (elapsed >= duration) {
                if (finished) return;
                finished = true;
                resolve(Math.round((frames - 1) / (elapsed / 1000)));
                return;
            }
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    });
}

async function detectDevicePower(options) {
    options = options || {};
    const gpu = detectGpuInfo();
    const net = getNetworkInfo();
    const reduced = prefersReducedMotion();
    const battery = await getBatteryInfo();
    const fps = options.measureFps ? await measureFrameRate(options.fpsDuration) : null;

    const cores = navigator.hardwareConcurrency || 0;
    const memory = typeof navigator.deviceMemory === 'number' ? navigator.deviceMemory : null;

    const signals = [];
    let score = 50;

    function add(id, impact) {
        if (impact !== 0) score += impact;
        signals.push({ id: id, impact: impact });
    }

    if (cores >= 8) add('cores8', 16);
    else if (cores >= 4) add('cores4', 10);
    else if (cores >= 2) add('cores2', 2);
    else add('cores1', -8);

    if (memory === null) signals.push({ id: 'memUnknown', impact: 0 });
    else if (memory >= 8) add('mem8', 16);
    else if (memory >= 4) add('mem4', 11);
    else if (memory >= 2) add('mem2', 2);
    else add('mem1', -8);

    if (!gpu.supported) signals.push({ id: 'gpuUnknown', impact: 0 });
    else if (gpu.software) add('gpuSoftware', -18);
    else add('gpuHardware', 8);

    if (!net.supported) signals.push({ id: 'netUnknown', impact: 0 });
    else if (net.saveData) add('netSaveData', -14);
    else if (net.effectiveType === 'slow-2g' || net.effectiveType === '2g') add('net2g', -16);
    else if (net.effectiveType === '3g') add('net3g', -7);
    else add('net4g', 0);

    if (reduced) add('reducedMotion', -8);

    if (!battery) signals.push({ id: 'batteryUnknown', impact: 0 });
    else if (!battery.charging && battery.level !== null && battery.level <= 0.2) add('batteryLow', -5);
    else add('batteryOk', 0);

    if (fps !== null && fps > 0) {
        if (fps < 20) add('fpsVeryLow', -16);
        else if (fps < 30) add('fpsLow', -9);
        else if (fps < 45) add('fpsMid', -4);
        else add('fpsGood', 3);
    }

    score = Math.max(0, Math.min(100, Math.round(score)));
    const level = score >= POWER_THRESHOLDS.high ? 'high' : (score >= POWER_THRESHOLDS.medium ? 'medium' : 'low');

    return {
        score: score,
        level: level,
        cores: cores,
        memory: memory,
        gpu: gpu,
        network: net,
        reducedMotion: reduced,
        battery: battery,
        fps: fps,
        signals: signals
    };
}

function getPowerLevelText(report) {
    if (!report) return '';
    if (report.level === 'high') return __('powerHigh');
    if (report.level === 'medium') return __('powerMedium');
    return __('powerLow');
}

function shouldOfferLite(report) {
    return !!report && report.level !== 'high';
}

function shouldShowPowerPrompt(report) {
    const mode = (settings && settings.powerMode) || 'auto';
    if (mode !== 'auto') return false;
    if (report.level === 'high') return false;
    const stamp = (settings && settings.powerPromptStamp) || 0;
    if (Date.now() - stamp < 14 * 24 * 3600 * 1000) return false;
    return true;
}

function rememberPowerPrompt() {
    if (!settings) return;
    settings.powerPromptStamp = Date.now();
    try {
        localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    } catch (e) {}
}

function goToLite() {
    if (settings) {
        settings.powerMode = 'lite';
        try {
            localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
        } catch (e) {}
    }
    window.location.href = POWER_LITE_URL;
}

function goToFull() {
    if (settings) {
        settings.powerMode = 'full';
        try {
            localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
        } catch (e) {}
    }
    window.location.href = POWER_FULL_URL;
}

function renderPowerSignal(signal, report) {
    const map = {
        cores8: 'powerCoreHigh',
        cores4: 'powerCoreMid',
        cores2: 'powerCoreLow',
        cores1: 'powerCoreMinimal',
        mem8: 'powerMemHigh',
        mem4: 'powerMemMid',
        mem2: 'powerMemLow',
        mem1: 'powerMemMinimal',
        memUnknown: 'powerMemUnknown',
        gpuHardware: 'powerGpuHardware',
        gpuSoftware: 'powerGpuSoftware',
        gpuUnknown: 'powerGpuUnknown',
        netSaveData: 'powerNetSaveData',
        net2g: 'powerNet2g',
        net3g: 'powerNet3g',
        net4g: 'powerNetFast',
        netUnknown: 'powerNetUnknown',
        reducedMotion: 'powerReducedMotion',
        batteryLow: 'powerBatteryLow',
        batteryOk: 'powerBatteryOk',
        batteryUnknown: 'powerBatteryUnknown',
        fpsVeryLow: 'powerFpsVeryLow',
        fpsLow: 'powerFpsLow',
        fpsMid: 'powerFpsMid',
        fpsGood: 'powerFpsGood'
    };
    const key = map[signal.id] || 'powerUnknown';
    return __(key);
}

function renderPowerReport(container, report) {
    if (!container || !report) return;
    const levelClass = report.level === 'high' ? 'text-emerald-600' : (report.level === 'medium' ? 'text-amber-600' : 'text-red-600');
    const levelSemantic = 'power-level-' + report.level;
    const rows = report.signals.map(function(signal) {
        const impact = signal.impact;
        const mark = impact > 0 ? '+' + impact : (impact < 0 ? String(impact) : '0');
        const markClass = impact > 0 ? 'text-emerald-600' : (impact < 0 ? 'text-red-500' : 'text-slate-400');
        const markSemantic = impact > 0 ? 'power-impact-pos' : (impact < 0 ? 'power-impact-neg' : 'power-impact-zero');
        return '<div class="power-row">' +
            '<span class="power-row-label">' + escapeHtml(renderPowerSignal(signal, report)) + '</span>' +
            '<span class="power-row-impact ' + markClass + ' ' + markSemantic + '">' + mark + '</span>' +
        '</div>';
    }).join('');
    container.innerHTML =
        '<div class="power-score"><span class="' + levelClass + ' ' + levelSemantic + '">' + getPowerLevelText(report) + '</span>' +
        '<span class="power-score-value">' + report.score + '/100</span></div>' +
        '<div class="power-rows">' + rows + '</div>';
}

function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function(ch) {
        return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
}

const EasyVerbsPower = {
    detect: detectDevicePower,
    measureFrameRate: measureFrameRate,
    getLevelText: getPowerLevelText,
    shouldOfferLite: shouldOfferLite,
    shouldShowPrompt: shouldShowPowerPrompt,
    rememberPrompt: rememberPowerPrompt,
    goToLite: goToLite,
    goToFull: goToFull,
    renderReport: renderPowerReport,
    thresholds: POWER_THRESHOLDS,
    promptVersion: POWER_PROMPT_VERSION
};

window.EasyVerbsPower = EasyVerbsPower;