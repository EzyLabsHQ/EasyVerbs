// EasyVerbs
// Copyright (C) 2026 EzyLabsHQ
// This program is free software under GPL v3 - see LICENSE

const APP_VERSION = 'v0.6.5-beta';

// База данных неправильных глаголов
const verbsData = [
    { v1: "be", v2: "was/were", v3: "been", translation: "быть", complexity: 1 },
    { v1: "bear", v2: "bore", v3: "born(e)", translation: "терпеть, выдерживать", complexity: 3 },
    { v1: "beat", v2: "beat", v3: "beaten", translation: "бить", complexity: 1 },
    { v1: "become", v2: "became", v3: "become", translation: "становиться", complexity: 1 },
    { v1: "begin", v2: "began", v3: "begun", translation: "начинать", complexity: 1 },
    { v1: "bite", v2: "bit", v3: "bitten", translation: "кусать", complexity: 2 },
    { v1: "blow", v2: "blew", v3: "blown", translation: "дуть", complexity: 2 },
    { v1: "break", v2: "broke", v3: "broken", translation: "ломать", complexity: 1 },
    { v1: "bring", v2: "brought", v3: "brought", translation: "приносить", complexity: 1 },
    { v1: "build", v2: "built", v3: "built", translation: "строить", complexity: 2 },
    { v1: "burn", v2: "burnt/burned", v3: "burnt/burned", translation: "гореть", complexity: 2 },
    { v1: "burst", v2: "burst", v3: "burst", translation: "взрывать(ся)", complexity: 3 },
    { v1: "buy", v2: "bought", v3: "bought", translation: "покупать", complexity: 1 },
    { v1: "can", v2: "could", v3: "been able", translation: "мочь; уметь", complexity: 1 },
    { v1: "catch", v2: "caught", v3: "caught", translation: "ловить", complexity: 2 },
    { v1: "choose", v2: "chose", v3: "chosen", translation: "выбирать", complexity: 2 },
    { v1: "come", v2: "came", v3: "come", translation: "приходить", complexity: 1 },
    { v1: "cost", v2: "cost", v3: "cost", translation: "стоить", complexity: 2 },
    { v1: "cut", v2: "cut", v3: "cut", translation: "резать", complexity: 1 },
    { v1: "deal", v2: "dealt", v3: "dealt", translation: "иметь дело", complexity: 3 },
    { v1: "dig", v2: "dug", v3: "dug", translation: "копать", complexity: 2 },
    { v1: "do", v2: "did", v3: "done", translation: "делать", complexity: 1 },
    { v1: "draw", v2: "drew", v3: "drawn", translation: "рисовать", complexity: 2 },
    { v1: "dream", v2: "dreamt/dreamed", v3: "dreamt/dreamed", translation: "мечтать", complexity: 2 },
    { v1: "drink", v2: "drank", v3: "drunk", translation: "пить", complexity: 1 },
    { v1: "drive", v2: "drove", v3: "driven", translation: "водить (авто)", complexity: 2 },
    { v1: "eat", v2: "ate", v3: "eaten", translation: "есть", complexity: 1 },
    { v1: "fall", v2: "fell", v3: "fallen", translation: "падать", complexity: 2 },
    { v1: "feed", v2: "fed", v3: "fed", translation: "кормить", complexity: 2 },
    { v1: "feel", v2: "felt", v3: "felt", translation: "чувствовать", complexity: 1 },
    { v1: "fight", v2: "fought", v3: "fought", translation: "сражаться; бороться", complexity: 2 },
    { v1: "find", v2: "found", v3: "found", translation: "находить", complexity: 1 },
    { v1: "fly", v2: "flew", v3: "flown", translation: "летать", complexity: 2 },
    { v1: "forbid", v2: "forbade", v3: "forbidden", translation: "запрещать", complexity: 3 },
    { v1: "forget", v2: "forgot", v3: "forgotten", translation: "забывать", complexity: 2 },
    { v1: "forgive", v2: "forgave", v3: "forgiven", translation: "прощать", complexity: 2 },
    { v1: "freeze", v2: "froze", v3: "frozen", translation: "замерзать", complexity: 3 },
    { v1: "get", v2: "got/gotten", v3: "got/gotten", translation: "получать", complexity: 1 },
    { v1: "give", v2: "gave", v3: "given", translation: "давать", complexity: 1 },
    { v1: "go", v2: "went", v3: "gone", translation: "идти", complexity: 1 },
    { v1: "grow", v2: "grew", v3: "grown", translation: "расти", complexity: 2 },
    { v1: "have", v2: "had", v3: "had", translation: "иметь", complexity: 1 },
    { v1: "hear", v2: "heard", v3: "heard", translation: "слышать", complexity: 2 },
    { v1: "hide", v2: "hid", v3: "hidden", translation: "прятать(ся)", complexity: 2 },
    { v1: "hit", v2: "hit", v3: "hit", translation: "бить", complexity: 1 },
    { v1: "hold", v2: "held", v3: "held", translation: "держать", complexity: 2 },
    { v1: "hurt", v2: "hurt", v3: "hurt", translation: "обижать, делать больно", complexity: 2 },
    { v1: "keep", v2: "kept", v3: "kept", translation: "хранить", complexity: 2 },
    { v1: "know", v2: "knew", v3: "known", translation: "знать", complexity: 1 },
    { v1: "lead", v2: "led", v3: "led", translation: "вести", complexity: 2 },
    { v1: "learn", v2: "learnt/learned", v3: "learnt/learned", translation: "учить(ся)", complexity: 1 },
    { v1: "leave", v2: "left", v3: "left", translation: "оставлять, покидать", complexity: 1 },
    { v1: "lend", v2: "lent", v3: "lent", translation: "одалживать", complexity: 3 },
    { v1: "let", v2: "let", v3: "let", translation: "позволять", complexity: 1 },
    { v1: "light", v2: "lit", v3: "lit", translation: "зажигать", complexity: 2 },
    { v1: "lose", v2: "lost", v3: "lost", translation: "терять", complexity: 1 },
    { v1: "make", v2: "made", v3: "made", translation: "делать", complexity: 1 },
    { v1: "mean", v2: "meant", v3: "meant", translation: "подразумевать", complexity: 2 },
    { v1: "meet", v2: "met", v3: "met", translation: "встречать", complexity: 1 },
    { v1: "pay", v2: "paid", v3: "paid", translation: "платить", complexity: 2 },
    { v1: "put", v2: "put", v3: "put", translation: "класть", complexity: 1 },
    { v1: "read", v2: "read", v3: "read", translation: "читать", complexity: 1 },
    { v1: "ride", v2: "rode", v3: "ridden", translation: "ездить (верхом)", complexity: 3 },
    { v1: "ring", v2: "rang", v3: "rung", translation: "звонить", complexity: 2 },
    { v1: "rise", v2: "rose", v3: "risen", translation: "поднимать", complexity: 3 },
    { v1: "run", v2: "ran", v3: "run", translation: "бежать", complexity: 1 },
    { v1: "say", v2: "said", v3: "said", translation: "говорить", complexity: 1 },
    { v1: "see", v2: "saw", v3: "seen", translation: "видеть", complexity: 1 },
    { v1: "sell", v2: "sold", v3: "sold", translation: "продавать", complexity: 2 },
    { v1: "send", v2: "sent", v3: "sent", translation: "отправлять", complexity: 2 },
    { v1: "set", v2: "set", v3: "set", translation: "устанавливать", complexity: 3 },
    { v1: "sew", v2: "sewed", v3: "sewn", translation: "шить", complexity: 3 },
    { v1: "shake", v2: "shook", v3: "shaken", translation: "трясти", complexity: 2 },
    { v1: "shine", v2: "shone", v3: "shone", translation: "светить", complexity: 2 },
    { v1: "shoot", v2: "shot", v3: "shot", translation: "стрелять", complexity: 3 },
    { v1: "show", v2: "showed", v3: "shown", translation: "показывать", complexity: 2 },
    { v1: "shut", v2: "shut", v3: "shut", translation: "закрывать", complexity: 3 },
    { v1: "sing", v2: "sang", v3: "sung", translation: "петь", complexity: 2 },
    { v1: "sit", v2: "sat", v3: "sat", translation: "сидеть", complexity: 1 },
    { v1: "sleep", v2: "slept", v3: "slept", translation: "спать", complexity: 1 },
    { v1: "smell", v2: "smelt/smelled", v3: "smelt/smelled", translation: "пахнуть, нюхать", complexity: 3 },
    { v1: "speak", v2: "spoke", v3: "spoken", translation: "говорить", complexity: 2 },
    { v1: "spell", v2: "spelt/spelled", v3: "spelt/spelled", translation: "называть по буквам", complexity: 3 },
    { v1: "spend", v2: "spent", v3: "spent", translation: "тратить", complexity: 2 },
    { v1: "stand", v2: "stood", v3: "stood", translation: "стоять", complexity: 2 },
    { v1: "steal", v2: "stole", v3: "stolen", translation: "воровать", complexity: 2 },
    { v1: "stick", v2: "stuck", v3: "stuck", translation: "приклеивать(ся)", complexity: 3 },
    { v1: "sting", v2: "stung", v3: "stung", translation: "жалить", complexity: 3 },
    { v1: "swear", v2: "swore", v3: "sworn", translation: "клясться", complexity: 3 },
    { v1: "sweep", v2: "swept", v3: "swept", translation: "подметать", complexity: 3 },
    { v1: "swim", v2: "swam", v3: "swum", translation: "плавать", complexity: 2 },
    { v1: "take", v2: "took", v3: "taken", translation: "брать", complexity: 1 },
    { v1: "teach", v2: "taught", v3: "taught", translation: "обучать", complexity: 2 },
    { v1: "tear", v2: "tore", v3: "torn", translation: "рвать", complexity: 3 },
    { v1: "tell", v2: "told", v3: "told", translation: "рассказывать", complexity: 1 },
    { v1: "think", v2: "thought", v3: "thought", translation: "думать", complexity: 1 },
    { v1: "throw", v2: "threw", v3: "thrown", translation: "бросать", complexity: 2 },
    { v1: "understand", v2: "understood", v3: "understood", translation: "понимать", complexity: 2 },
    { v1: "wake", v2: "woke", v3: "woken", translation: "просыпаться; будить", complexity: 2 },
    { v1: "wear", v2: "wore", v3: "worn", translation: "носить (одежду)", complexity: 2 },
    { v1: "win", v2: "won", v3: "won", translation: "выигрывать", complexity: 2 },
    { v1: "write", v2: "wrote", v3: "written", translation: "писать", complexity: 1 }
];

const verbTranslations = {
    es: {
        be: 'ser, estar',
        bear: 'soportar, aguantar',
        beat: 'golpear, vencer',
        become: 'convertirse en',
        begin: 'empezar',
        bite: 'morder',
        blow: 'soplar',
        break: 'romper',
        bring: 'traer',
        build: 'construir',
        burn: 'quemar(se)',
        burst: 'explotar, reventar',
        buy: 'comprar',
        can: 'poder; saber',
        catch: 'atrapar',
        choose: 'elegir',
        come: 'venir',
        cost: 'costar',
        cut: 'cortar',
        deal: 'tratar, tener que ver',
        dig: 'cavar',
        do: 'hacer',
        draw: 'dibujar',
        dream: 'soñar',
        drink: 'beber',
        drive: 'conducir',
        eat: 'comer',
        fall: 'caer',
        feed: 'alimentar',
        feel: 'sentir',
        fight: 'pelear; luchar',
        find: 'encontrar',
        fly: 'volar',
        forbid: 'prohibir',
        forget: 'olvidar',
        forgive: 'perdonar',
        freeze: 'congelar(se)',
        get: 'obtener',
        give: 'dar',
        go: 'ir',
        grow: 'crecer',
        have: 'tener',
        hear: 'oír',
        hide: 'esconder(se)',
        hit: 'golpear',
        hold: 'sostener',
        hurt: 'lastimar, hacer daño',
        keep: 'guardar',
        know: 'saber, conocer',
        lead: 'conducir, guiar',
        learn: 'aprender',
        leave: 'dejar, salir de',
        lend: 'prestar',
        let: 'permitir',
        light: 'encender',
        lose: 'perder',
        make: 'hacer',
        mean: 'significar',
        meet: 'encontrarse con',
        pay: 'pagar',
        put: 'poner',
        read: 'leer',
        ride: 'montar (a caballo)',
        ring: 'sonar, llamar',
        rise: 'subir, elevarse',
        run: 'correr',
        say: 'decir',
        see: 'ver',
        sell: 'vender',
        send: 'enviar',
        set: 'fijar, establecer',
        sew: 'coser',
        shake: 'sacudir',
        shine: 'brillar',
        shoot: 'disparar',
        show: 'mostrar',
        shut: 'cerrar',
        sing: 'cantar',
        sit: 'sentarse',
        sleep: 'dormir',
        smell: 'oler, olfatear',
        speak: 'hablar',
        spell: 'deletrear',
        spend: 'gastar',
        stand: 'estar de pie',
        steal: 'robar',
        stick: 'pegar(se)',
        sting: 'picar',
        swear: 'jurar',
        sweep: 'barrer',
        swim: 'nadar',
        take: 'tomar',
        teach: 'enseñar',
        tear: 'rasgar',
        tell: 'contar, decir',
        think: 'pensar',
        throw: 'tirar, lanzar',
        understand: 'entender',
        wake: 'despertar(se)',
        wear: 'llevar (ropa)',
        win: 'ganar',
        write: 'escribir',
    },
    de: {
        be: 'sein',
        bear: 'ertragen, aushalten',
        beat: 'schlagen',
        become: 'werden',
        begin: 'beginnen',
        bite: 'beißen',
        blow: 'blasen',
        break: 'brechen',
        bring: 'bringen',
        build: 'bauen',
        burn: 'brennen',
        burst: 'platzen, bersten',
        buy: 'kaufen',
        can: 'können',
        catch: 'fangen',
        choose: 'wählen',
        come: 'kommen',
        cost: 'kosten',
        cut: 'schneiden',
        deal: 'zu tun haben mit',
        dig: 'graben',
        do: 'machen, tun',
        draw: 'zeichnen',
        dream: 'träumen',
        drink: 'trinken',
        drive: 'fahren',
        eat: 'essen',
        fall: 'fallen',
        feed: 'füttern',
        feel: 'fühlen',
        fight: 'kämpfen',
        find: 'finden',
        fly: 'fliegen',
        forbid: 'verbieten',
        forget: 'vergessen',
        forgive: 'vergeben',
        freeze: 'einfrieren',
        get: 'bekommen',
        give: 'geben',
        go: 'gehen',
        grow: 'wachsen',
        have: 'haben',
        hear: 'hören',
        hide: 'verstecken (sich)',
        hit: 'schlagen, treffen',
        hold: 'halten',
        hurt: 'verletzen, wehtun',
        keep: 'behalten, aufbewahren',
        know: 'wissen, kennen',
        lead: 'führen',
        learn: 'lernen',
        leave: 'verlassen',
        lend: 'verleihen, leihen',
        let: 'lassen, erlauben',
        light: 'anzünden',
        lose: 'verlieren',
        make: 'machen',
        mean: 'bedeuten',
        meet: 'treffen',
        pay: 'bezahlen',
        put: 'legen, stellen',
        read: 'lesen',
        ride: 'reiten',
        ring: 'klingeln, läuten',
        rise: 'steigen, aufgehen',
        run: 'rennen, laufen',
        say: 'sagen',
        see: 'sehen',
        sell: 'verkaufen',
        send: 'senden, schicken',
        set: 'setzen, festlegen',
        sew: 'nähen',
        shake: 'schütteln',
        shine: 'scheinen',
        shoot: 'schießen',
        show: 'zeigen',
        shut: 'schließen',
        sing: 'singen',
        sit: 'sitzen',
        sleep: 'schlafen',
        smell: 'riechen',
        speak: 'sprechen',
        spell: 'buchstabieren',
        spend: 'ausgeben',
        stand: 'stehen',
        steal: 'stehlen',
        stick: 'kleben, stecken',
        sting: 'stechen',
        swear: 'schwören',
        sweep: 'fegen',
        swim: 'schwimmen',
        take: 'nehmen',
        teach: 'lehren, unterrichten',
        tear: 'reißen',
        tell: 'erzählen, sagen',
        think: 'denken',
        throw: 'werfen',
        understand: 'verstehen',
        wake: 'aufwachen; wecken',
        wear: 'tragen (Kleidung)',
        win: 'gewinnen',
        write: 'schreiben',
    },
    fr: {
        be: 'être',
        bear: 'supporter, endurer',
        beat: 'battre',
        become: 'devenir',
        begin: 'commencer',
        bite: 'mordre',
        blow: 'souffler',
        break: 'casser',
        bring: 'apporter',
        build: 'construire',
        burn: 'brûler',
        burst: 'éclater, exploser',
        buy: 'acheter',
        can: 'pouvoir; savoir',
        catch: 'attraper',
        choose: 'choisir',
        come: 'venir',
        cost: 'coûter',
        cut: 'couper',
        deal: 'avoir affaire à',
        dig: 'creuser',
        do: 'faire',
        draw: 'dessiner',
        dream: 'rêver',
        drink: 'boire',
        drive: 'conduire',
        eat: 'manger',
        fall: 'tomber',
        feed: 'nourrir',
        feel: 'sentir',
        fight: 'se battre; lutter',
        find: 'trouver',
        fly: 'voler',
        forbid: 'interdire',
        forget: 'oublier',
        forgive: 'pardonner',
        freeze: 'geler',
        get: 'obtenir',
        give: 'donner',
        go: 'aller',
        grow: 'pousser, grandir',
        have: 'avoir',
        hear: 'entendre',
        hide: 'cacher (se)',
        hit: 'frapper',
        hold: 'tenir',
        hurt: 'blesser, faire mal',
        keep: 'garder',
        know: 'savoir, connaître',
        lead: 'mener, diriger',
        learn: 'apprendre',
        leave: 'quitter, laisser',
        lend: 'prêter',
        let: 'permettre, laisser',
        light: 'allumer',
        lose: 'perdre',
        make: 'faire',
        mean: 'signifier',
        meet: 'rencontrer',
        pay: 'payer',
        put: 'mettre, poser',
        read: 'lire',
        ride: 'monter (à cheval)',
        ring: 'sonner',
        rise: 'se lever, monter',
        run: 'courir',
        say: 'dire',
        see: 'voir',
        sell: 'vendre',
        send: 'envoyer',
        set: 'fixer, établir',
        sew: 'coudre',
        shake: 'secouer',
        shine: 'briller',
        shoot: 'tirer',
        show: 'montrer',
        shut: 'fermer',
        sing: 'chanter',
        sit: 's\'asseoir, être assis',
        sleep: 'dormir',
        smell: 'sentir, flairer',
        speak: 'parler',
        spell: 'épeler',
        spend: 'dépenser',
        stand: 'être debout',
        steal: 'voler',
        stick: 'coller (se)',
        sting: 'piquer',
        swear: 'jurer',
        sweep: 'balayer',
        swim: 'nager',
        take: 'prendre',
        teach: 'enseigner',
        tear: 'déchirer',
        tell: 'raconter, dire',
        think: 'penser',
        throw: 'jeter, lancer',
        understand: 'comprendre',
        wake: 'se réveiller; réveiller',
        wear: 'porter (vêtement)',
        win: 'gagner',
        write: 'écrire',
    },
    pt: {
        be: 'ser, estar',
        bear: 'suportar, aguentar',
        beat: 'bater, derrotar',
        become: 'tornar-se',
        begin: 'começar',
        bite: 'morder',
        blow: 'soprar',
        break: 'quebrar',
        bring: 'trazer',
        build: 'construir',
        burn: 'queimar(-se)',
        burst: 'explodir, arrebentar',
        buy: 'comprar',
        can: 'poder; saber',
        catch: 'pegar, capturar',
        choose: 'escolher',
        come: 'vir',
        cost: 'custar',
        cut: 'cortar',
        deal: 'lidar com',
        dig: 'cavar',
        do: 'fazer',
        draw: 'desenhar',
        dream: 'sonhar',
        drink: 'beber',
        drive: 'dirigir',
        eat: 'comer',
        fall: 'cair',
        feed: 'alimentar',
        feel: 'sentir',
        fight: 'lutar; brigar',
        find: 'encontrar',
        fly: 'voar',
        forbid: 'proibir',
        forget: 'esquecer',
        forgive: 'perdoar',
        freeze: 'congelar(-se)',
        get: 'obter, conseguir',
        give: 'dar',
        go: 'ir',
        grow: 'crescer',
        have: 'ter',
        hear: 'ouvir',
        hide: 'esconder(-se)',
        hit: 'bater, atingir',
        hold: 'segurar',
        hurt: 'machucar, ferir',
        keep: 'guardar',
        know: 'saber, conhecer',
        lead: 'conduzir, liderar',
        learn: 'aprender',
        leave: 'deixar, partir de',
        lend: 'emprestar',
        let: 'permitir, deixar',
        light: 'acender',
        lose: 'perder',
        make: 'fazer',
        mean: 'significar',
        meet: 'encontrar-se com',
        pay: 'pagar',
        put: 'colocar',
        read: 'ler',
        ride: 'andar (a cavalo)',
        ring: 'tocar, soar',
        rise: 'subir, elevar-se',
        run: 'correr',
        say: 'dizer',
        see: 'ver',
        sell: 'vender',
        send: 'enviar',
        set: 'definir, estabelecer',
        sew: 'costurar',
        shake: 'sacudir',
        shine: 'brilhar',
        shoot: 'atirar',
        show: 'mostrar',
        shut: 'fechar',
        sing: 'cantar',
        sit: 'sentar-se',
        sleep: 'dormir',
        smell: 'cheirar, sentir o cheiro',
        speak: 'falar',
        spell: 'soletrar',
        spend: 'gastar',
        stand: 'ficar em pé',
        steal: 'roubar',
        stick: 'colar(-se)',
        sting: 'picar',
        swear: 'jurar',
        sweep: 'varrer',
        swim: 'nadar',
        take: 'pegar, levar',
        teach: 'ensinar',
        tear: 'rasgar',
        tell: 'contar, dizer',
        think: 'pensar',
        throw: 'jogar, lançar',
        understand: 'entender',
        wake: 'acordar; despertar',
        wear: 'usar (roupa)',
        win: 'vencer, ganhar',
        write: 'escrever',
    }
};

function getVerbTranslation(verb) {
    const lang = settings && settings.lang ? settings.lang : getSystemLang();
    if (verbTranslations[lang] && verbTranslations[lang][verb.v1] !== undefined) {
        return verbTranslations[lang][verb.v1];
    }
    if (lang === 'en') return verb.v1;
    return verb.translation;
}

function uiLocale() {
    const map = { en: 'en-US', es: 'es-ES', de: 'de-DE', fr: 'fr-FR', pt: 'pt-PT', ru: 'ru-RU' };
    return map[settings.lang] || map[getSystemLang()] || 'ru-RU';
}

function refreshLanguageUI() {
    const dictBody = document.getElementById('dictionary-body');
    if (dictBody && dictBody.children.length > 0) renderDictionary();

    const fcView = document.getElementById('view-flashcards');
    if (fcView && !fcView.classList.contains('hidden')) updateFlashcard();

    const stats = getMistakeStats();
    const statsDisplay = document.getElementById('error-stats-display');
    const btnMistakes = document.getElementById('btn-mistakes');
    if (statsDisplay) {
        if (stats && stats.total > 0) {
            statsDisplay.innerHTML = `${__('setMistakes')}: ${stats.total} ${__('setExportDesc')}`;
            if (btnMistakes) btnMistakes.classList.remove('hidden');
        } else {
            statsDisplay.innerHTML = __('setMistakesDesc');
            if (btnMistakes) btnMistakes.classList.add('hidden');
        }
    }

    renderAchievements();
    renderCustomVerbsList();
    renderVerbOfDay();
    renderSpeedLeaderboard();

    const lettersActive = document.getElementById('letters-active');
    if (lettersActive && !lettersActive.classList.contains('hidden')) renderLettersWord();

    const trainerActive = document.getElementById('trainer-active');
    if (trainerActive && !trainerActive.classList.contains('hidden')) loadTrainerQuestion();

    const mistakesActive = document.getElementById('mistakes-active');
    if (mistakesActive && !mistakesActive.classList.contains('hidden')) loadMistakesQuestion();

    const prepActive = document.getElementById('prep-active');
    if (prepActive && !prepActive.classList.contains('hidden')) loadPrepQuestion();

    const speedActive = document.getElementById('speed-active');
    if (speedActive && !speedActive.classList.contains('hidden')) loadSpeedQuestion();
}

// ================= НАСТРОЙКИ ПО УМОЛЧАНИЮ =================
const defaultSettings = {
    questionCount: '10',
    formsV1: true,
    formsV2: true,
    formsV3: true,
    darkMode: false,
    complexity: 'all',
    gradientFrom: '#4f46e5',
    gradientTo: '#7c3aed',
    showTranslation: true,
    autoAdvance: false,
    shuffle: true,
    compact: false,
    welcomeShown: false,
    lang: 'ru',
    favorites: [],
    favOnly: false,
    achievements: {},
    sessionsCompleted: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    bestStreak: 0,
    verbsLearned: [],
    customVerbs: [],
    showTimer: true,
    soundEnabled: true,
    useSpacedRep: false,
    verbLastSeen: {},
    speedHighScore: 0,
    verbGroup: 'all',
    confidence: {},
    activityLog: {},
    speedHighScores: [],
    verbOfDayDate: '',
    verbOfDay: null,
    accentPreset: 'indigo',
    smartOrder: true,
    haptics: true,
    lastActiveTab: null,
    alignRight: false
};

let settings = loadSettings();
let errorStats = {};
let mistakesList = [];
let practiceMode = 'normal';

// ================= ПРЕСЕТЫ АКЦЕНТОВ =================
const accentPresets = {
    indigo: { from: '#4f46e5', to: '#7c3aed', label: 'Indigo' },
    emerald: { from: '#059669', to: '#10b981', label: 'Emerald' },
    rose: { from: '#e11d48', to: '#f43f5e', label: 'Rose' },
    amber: { from: '#d97706', to: '#f59e0b', label: 'Amber' },
    sky: { from: '#0284c7', to: '#06b6d4', label: 'Sky' },
    violet: { from: '#7c3aed', to: '#a855f7', label: 'Violet' },
    slate: { from: '#475569', to: '#64748b', label: 'Slate' }
};

// ================= НАСТРОЙКИ =================
function loadSettings() {
    let loaded;
    let hadSaved = false;
    try {
        const saved = localStorage.getItem('verbTrainerSettings');
        if (saved) {
            hadSaved = true;
            loaded = { ...defaultSettings, ...JSON.parse(saved) };
        }
    } catch (e) {}
    if (!loaded) {
        loaded = { ...defaultSettings };
    }
    loadErrorStats();
    ['gradientFrom', 'gradientTo', 'showTranslation', 'autoAdvance', 'shuffle', 'compact', 'welcomeShown', 'lang', 'favOnly', 'favorites', 'customVerbs', 'achievements', 'sessionsCompleted', 'totalCorrect', 'totalQuestions', 'bestStreak', 'verbsLearned', 'showTimer', 'soundEnabled', 'useSpacedRep', 'verbLastSeen', 'speedHighScore', 'verbGroup', 'confidence', 'accentPreset', 'smartOrder', 'haptics', 'lastActiveTab', 'alignRight'].forEach(k => {
        if (loaded[k] === undefined) loaded[k] = defaultSettings[k];
    });
    if (!hadSaved) {
        loaded.lang = getSystemLang();
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            loaded.darkMode = true;
        }
    }
    return loaded;
}

function loadErrorStats() {
    try {
        const savedErrors = localStorage.getItem('verbTrainerErrors');
        if (savedErrors) {
            errorStats = JSON.parse(savedErrors);
            mistakesList = Object.values(errorStats).map(e => e.verb);
        }
    } catch (e) {}
}

function saveSettings() {
    settings.questionCount = document.getElementById('setting-question-count').value;
    settings.formsV1 = document.getElementById('form-v1').checked;
    settings.formsV2 = document.getElementById('form-v2').checked;
    settings.formsV3 = document.getElementById('form-v3').checked;
    if (document.getElementById('setting-complexity')) {
        settings.complexity = document.getElementById('setting-complexity').value;
    }
    settings.darkMode = document.getElementById('setting-dark-mode').checked;
    settings.gradientFrom = document.getElementById('setting-gradient-from').value;
    settings.gradientTo = document.getElementById('setting-gradient-to').value;
    settings.showTranslation = document.getElementById('setting-show-translation').checked;
    settings.autoAdvance = document.getElementById('setting-auto-advance').checked;
    settings.shuffle = document.getElementById('setting-shuffle').checked;
    settings.showTimer = document.getElementById('setting-timer')?.checked || false;
    settings.compact = document.getElementById('setting-compact').checked;
    settings.lang = document.getElementById('setting-lang').value;
    settings.favOnly = document.getElementById('setting-fav-only')?.checked || false;
    settings.soundEnabled = document.getElementById('setting-sound')?.checked ?? true;
    settings.useSpacedRep = document.getElementById('setting-spaced-rep')?.checked ?? false;
    settings.smartOrder = document.getElementById('setting-smart-order')?.checked ?? true;
    settings.haptics = document.getElementById('setting-haptics')?.checked ?? true;
    settings.alignRight = document.getElementById('setting-align-right')?.checked ?? false;
    settings.verbGroup = document.getElementById('setting-verb-group')?.value || 'all';
    applyCompactMode();
    applyWelcomeAlign();
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
}

// ================= НАВИГАЦИЯ =================
function switchTab(tabId) {
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.add('hidden');
    });
    document.querySelectorAll('.nav-btn').forEach(el => {
        el.classList.remove('active');
        el.setAttribute('aria-selected', 'false');
    });

    const targetSection = document.getElementById(`view-${tabId}`);
    targetSection.classList.remove('hidden');
    targetSection.classList.add('fade-enter');
    setTimeout(() => targetSection.classList.add('fade-enter-active'), 10);
    setTimeout(() => {
        targetSection.classList.remove('fade-enter', 'fade-enter-active');
    }, 300);

    const targetBtn = document.getElementById(`tab-${tabId}`);
    targetBtn.classList.add('active');
    targetBtn.setAttribute('aria-selected', 'true');

    const navRow = document.querySelector('.nav-tabs-row');
    if (navRow && navRow.scrollWidth > navRow.clientWidth) {
        const rowRect = navRow.getBoundingClientRect();
        const btnRect = targetBtn.getBoundingClientRect();
        const btnLeft = btnRect.left - rowRect.left + navRow.scrollLeft;
        const btnRight = btnLeft + btnRect.width;
        if (btnLeft < navRow.scrollLeft) {
            navRow.scrollLeft = btnLeft;
        } else if (btnRight > navRow.scrollLeft + navRow.clientWidth) {
            navRow.scrollLeft = btnRight - navRow.clientWidth;
        }
    }

    if (tabId === 'dictionary' && document.getElementById('dictionary-body').children.length === 0) {
        renderDictionary();
    } else if (tabId === 'flashcards') {
        updateFlashcard();
    } else if (tabId === 'about') {
        renderActivityGraph();
    }
}

// ================= ДАШБОРД (ГЛАВНАЯ) =================
function renderHome() {
    const greeting = document.getElementById('home-greeting');
    if (greeting) greeting.textContent = __('homeTitle');
    const subtitle = document.getElementById('home-subtitle');
    if (subtitle) subtitle.textContent = __('welcomeSubtitle');
    const contLabel = document.getElementById('home-continue-label');
    if (contLabel) contLabel.textContent = __('homeContinue');

    const container = document.getElementById('home-stats');
    if (container) {
        const totalQ = settings.totalQuestions || 0;
        const correct = settings.totalCorrect || 0;
        const accuracy = totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0;
        const learned = (settings.verbsLearned || []).length;
        const totalVerbs = getFullVerbList().length;
        const cards = [
            { label: __('homeLearned'), value: learned, suffix: ' ' + __('homeOf') + ' ' + totalVerbs, color: 'text-emerald-500' },
            { label: __('homeProgress'), value: totalQ, suffix: '', color: 'text-indigo-500' },
            { label: __('statsAccuracy'), value: accuracy, suffix: '%', color: accuracy >= 80 ? 'text-emerald-500' : accuracy >= 50 ? 'text-amber-500' : 'text-red-500' },
            { label: __('statsBestStreak'), value: settings.bestStreak || 0, suffix: '', color: 'text-orange-500' },
        ];
        container.innerHTML = cards.map((c, i) => `
            <div class="bg-white rounded-xl shadow-md p-4 text-center">
                <div class="text-xl sm:text-2xl font-bold ${c.color} home-stat-value" id="home-stat-${i}">0${c.suffix}</div>
                <div class="text-xs text-slate-400 mt-1">${c.label}</div>
            </div>
        `).join('');
        cards.forEach((c, i) => {
            const el = document.getElementById('home-stat-' + i);
            if (el) animateCount(el, c.value, c.suffix);
        });
    }

    const vod = document.getElementById('home-verb-of-day');
    if (vod) {
        const verb = getVerbOfDay();
        if (verb) {
            vod.innerHTML = `
                <div class="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="text-center sm:text-left">
                        <div class="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1"><i class="fas fa-sun mr-1"></i> ${__('verbOfDay')}</div>
                        <div class="text-2xl font-extrabold text-amber-800">${verb.v1}</div>
                        <div class="text-sm text-amber-600">${verb.v2} → ${verb.v3}</div>
                        <div class="text-xs text-amber-500 mt-1">${getVerbTranslation(verb)}</div>
                    </div>
                    <button onclick="homeStart('trainer')" class="bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow transition-colors">
                        <i class="fas fa-dumbbell mr-1"></i> ${__('navTrainer')}
                    </button>
                </div>`;
        }
    }

    const mis = document.getElementById('home-mistakes');
    if (mis) {
        const stats = getMistakeStats();
        if (stats && stats.total > 0) {
            const verbs = mistakesList.length;
            mis.innerHTML = `
                <div class="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500"><i class="fas fa-exclamation-triangle"></i></div>
                        <div>
                            <div class="text-sm font-bold text-slate-700">${__('misProgressWords')} ${verbs} (${__('misProgressTotal')} ${stats.total} ${__('misProgressErrors')})</div>
                            <div class="text-xs text-slate-400">${__('smartOrderDesc')}</div>
                        </div>
                    </div>
                    <button onclick="switchTab('mistakes')" class="bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow transition-colors">
                        <i class="fas fa-tasks mr-1"></i> ${__('navMistakes')}
                    </button>
                </div>`;
        } else {
            mis.innerHTML = `
                <div class="bg-white rounded-xl shadow-md p-6 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500"><i class="fas fa-check-circle"></i></div>
                    <div>
                        <div class="text-sm font-bold text-slate-700">${__('statsNoMistakes')}</div>
                        <div class="text-xs text-slate-400">${__('misEmpty')}</div>
                    </div>
                </div>`;
        }
    }
}

function homeContinue() {
    switchTab(settings.lastActiveTab || 'trainer');
}

function homeStart(mode) {
    if (mode === 'trainer') {
        switchTab('trainer');
    } else if (mode === 'flashcards') {
        switchTab('flashcards');
    } else if (mode === 'letters') {
        switchTab('letters');
        const start = document.getElementById('letters-start');
        if (start && !start.classList.contains('hidden')) startLettersTrainer();
    } else if (mode === 'speed') {
        switchTab('speed');
        startSpeedRun();
    }
}

// ================= UX-ХЕЛПЕРЫ =================
function animateCount(el, target, suffix, duration) {
    if (!el) return;
    duration = duration || 700;
    const startTime = performance.now();
    function step(now) {
        const p = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + (suffix || '');
        if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

function vibrate(pattern) {
    if (settings.haptics === false) return;
    try {
        const v = navigator.vibrate || navigator.webkitVibrate || navigator.msVibrate;
        if (typeof v === 'function') {
            v.call(navigator, pattern);
        } else {
            buzzHaptic(pattern);
        }
    } catch (e) {
        buzzHaptic(pattern);
    }
}

function buzzHaptic(pattern) {
    if (!settings.soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const times = Array.isArray(pattern) && pattern.length ? pattern : [pattern];
        let t = ctx.currentTime + 0.02;
        times.forEach(function(dur) {
            const ms = typeof dur === 'number' ? dur : 80;
            if (ms <= 0) { t += 0.01; return; }
            const d = Math.min(ms / 1000, 0.15);
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.value = 90;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.12, t + 0.012);
            gain.gain.setValueAtTime(0.12, t + Math.max(d - 0.02, 0.01));
            gain.gain.exponentialRampToValueAtTime(0.001, t + d);
            osc.connect(gain);
            gain.connect(sharedAudioGain);
            osc.start(t);
            osc.stop(t + d + 0.01);
            t += d + 0.02;
        });
    } catch (e) {}
}

function toggleHaptics() {
    saveSettings();
    if (settings.haptics) vibrate([30, 50, 30]);
}

function burstConfetti(container) {
    if (!container) return;
    const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#f472b6'];
    for (let i = 0; i < 22; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = (20 + Math.random() * 60) + '%';
        piece.style.background = colors[i % colors.length];
        piece.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
        piece.style.animationDelay = (Math.random() * 0.25) + 's';
        container.appendChild(piece);
        setTimeout(() => piece.remove(), 1900);
    }
}

function answerFeedback(correct, feedbackEl) {
    if (!feedbackEl) return;
    if (correct) {
        vibrate(30);
        feedbackEl.classList.remove('shake');
        feedbackEl.classList.add('pop');
        burstConfetti(feedbackEl);
        setTimeout(() => feedbackEl.classList.remove('pop'), 400);
    } else {
        vibrate([60, 40, 60]);
        feedbackEl.classList.remove('pop');
        feedbackEl.classList.add('shake');
        setTimeout(() => feedbackEl.classList.remove('shake'), 500);
    }
}

function toggleFocusMode(force) {
    const on = force !== undefined ? !!force : !document.body.classList.contains('focus-mode');
    document.body.classList.toggle('focus-mode', on);
    const btn = document.getElementById('btn-focus-mode');
    if (btn) {
        const label = btn.querySelector('.focus-label');
        if (label) label.textContent = on ? __('focusExit') : __('focusMode');
        btn.setAttribute('title', on ? __('focusExit') : __('focusMode'));
    }
}

// ================= СЛОВАРЬ =================
function renderDictionary() {
    const tbody = document.getElementById('dictionary-body');
    tbody.innerHTML = '';

    let fullList = getFullVerbList();
    const grp = settings.verbGroup || 'all';
    if (grp !== 'all') {
        const g = parseInt(grp);
        if (!isNaN(g)) {
            fullList = fullList.filter(v => classifyVerb(v) === g);
        }
    }
    const favOnly = document.getElementById('dict-fav-toggle')?.checked;
    const data = favOnly ? fullList.filter(v => isFavorite(v.v1)) : fullList;

    data.forEach((verb, index) => {
        const tr = document.createElement('tr');
        tr.className = index % 2 === 0 ? 'bg-white hover:bg-indigo-50/50 transition-colors cursor-pointer' : 'bg-slate-50 hover:bg-indigo-50/50 transition-colors cursor-pointer';
        tr.onclick = () => showVerbDetail(verb.v1);
        const isFav = isFavorite(verb.v1);
        const v1Key = verb.v1.replace(/'/g, "\\'");
        const groupLabels = ['', 'AAA', 'ABB', 'ABA', 'ABC'];
        const group = classifyVerb(verb);
        tr.innerHTML = `
            <td class="p-4 border-b border-slate-200 font-bold text-indigo-700">
                <div class="flex items-center gap-1">
                    <button onclick="event.stopPropagation(); toggleFavorite('${v1Key}')" class="fav-btn" title="${isFav ? __('favRemove') : __('favAdd')}" aria-label="${isFav ? __('favRemove') : __('favAdd')}">
                        <i class="fas fa-star${isFav ? '' : '-regular'} ${isFav ? 'text-yellow-400' : 'text-slate-300'}"></i>
                    </button>
                    ${verb.v1}
                    <button onclick="event.stopPropagation(); speak('${verb.v1}', 'en-US')" class="tts-btn" title="${__('ttsListen')}" aria-label="${__('ttsListen')}">
                        <i class="fas fa-volume-up text-sm"></i>
                    </button>
                </div>
            </td>
            <td class="p-4 border-b border-slate-200 font-medium">${verb.v2}</td>
            <td class="p-4 border-b border-slate-200 font-medium">${verb.v3}</td>
            <td class="p-4 border-b border-slate-200 text-slate-600">${getVerbTranslation(verb)}</td>
            <td class="p-4 border-b border-slate-200 text-center">
                <span class="text-xs font-mono text-slate-400 mr-1">${groupLabels[group]}</span>
                ${getVerbProgress(verb.v1)}
                ${getSpacedStatus(verb.v1)}
            </td>
        `;
        tbody.appendChild(tr);
    });

    if (data.length === 0) {
        const tr = document.createElement('tr');
        tr.id = 'dict-empty-row';
        tr.innerHTML = '<td colspan="5" class="p-8 text-center text-slate-400">' + (favOnly ? __('emptyDictFav') : __('emptyDictSearch')) + '</td>';
        tbody.appendChild(tr);
    }
}

function highlightDictRow(row, term) {
    row.querySelectorAll('mark.search-hit').forEach(function(m) {
        const parent = m.parentNode;
        parent.replaceChild(document.createTextNode(m.textContent), m);
        parent.normalize();
    });
    if (!term) return;
    row.querySelectorAll('td').forEach(function(td) {
        const textNodes = [];
        const walker = document.createTreeWalker(td, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            const parent = node.parentNode;
            if (!parent || parent.nodeType !== 1) continue;
            const tag = parent.tagName;
            if (tag === 'BUTTON' || tag === 'I' || tag === 'MARK' || tag === 'SCRIPT' || tag === 'STYLE') continue;
            if (!node.nodeValue.trim()) continue;
            textNodes.push(node);
        }
        textNodes.forEach(function(textNode) {
            const text = textNode.nodeValue;
            const lower = text.toLowerCase();
            let idx = lower.indexOf(term);
            if (idx === -1) return;
            const frag = document.createDocumentFragment();
            let last = 0;
            while (idx !== -1) {
                if (idx > last) frag.appendChild(document.createTextNode(text.slice(last, idx)));
                const mark = document.createElement('mark');
                mark.className = 'search-hit';
                mark.textContent = text.slice(idx, idx + term.length);
                frag.appendChild(mark);
                last = idx + term.length;
                idx = lower.indexOf(term, last);
            }
            if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
            textNode.parentNode.replaceChild(frag, textNode);
        });
    });
}

function setDictGroup(group) {
    settings.verbGroup = group;
    document.querySelectorAll('.dict-group-btn').forEach(btn => {
        btn.className = "dict-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50";
    });
    const activeBtn = document.getElementById(`dict-group-${group}`);
    if (activeBtn) {
        activeBtn.className = "dict-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-indigo-600 text-white shadow-sm";
    }
    renderDictionary();
}

function setTrainerGroup(group) {
    settings.verbGroup = group;
    document.querySelectorAll('.trainer-group-btn').forEach(btn => {
        btn.className = "trainer-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50";
    });
    ['let', 'tr', 'speed', 'mistakes'].forEach(prefix => {
        const activeBtn = document.getElementById(`${prefix}-group-${group}`);
        if (activeBtn) {
            activeBtn.className = "trainer-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-indigo-600 text-white shadow-sm";
        }
    });
}

function printDictionary() {
    let html = '<html><head><meta charset="UTF-8"><title>EasyVerbs Dictionary</title>';
    html += '<style>body{font-family:Inter,sans-serif;padding:40px;color:#0f172a}';
    html += 'h1{font-size:24px;margin-bottom:8px;color:#4f46e5}';
    html += 'p.sub{font-size:12px;color:#94a3b8;margin-bottom:24px}';
    html += 'table{width:100%;border-collapse:collapse;font-size:13px}';
    html += 'th{text-align:left;padding:8px 12px;border-bottom:2px solid #e2e8f0;color:#475569;text-transform:uppercase;font-size:11px;letter-spacing:0.05em}';
    html += 'td{padding:8px 12px;border-bottom:1px solid #e2e8f0}';
    html += 'tr:nth-child(even){background:#f8fafc}';
    html += '.v1{font-weight:700;color:#4f46e5}.group{font-size:10px;color:#94a3b8;margin-left:4px}';
    html += '@media print{body{padding:20px}}';
    html += '</style></head><body>';
    html += '<h1>EasyVerbs — Dictionary</h1>';
    html += '<p class="sub">' + getFullVerbList().length + ' verbs · ' + new Date().toLocaleDateString() + '</p>';
    html += '<table><thead><tr><th>V1 (Infinitive)</th><th>V2 (Past Simple)</th><th>V3 (Past Participle)</th><th>Translation</th></tr></thead><tbody>';
    const groupLabels = ['', 'AAA', 'ABB', 'ABA', 'ABC'];
    getFullVerbList().forEach(v => {
        const g = classifyVerb(v);
        html += '<tr><td class="v1">' + v.v1 + '<span class="group">' + groupLabels[g] + '</span></td><td>' + v.v2 + '</td><td>' + v.v3 + '</td><td>' + getVerbTranslation(v) + '</td></tr>';
    });
    html += '</tbody></table></body></html>';
    const win = window.open('', '_blank');
    if (!win) { showToast('Разрешите всплывающие окна для печати'); return; }
    win.document.write(html);
    win.document.close();
    setTimeout(() => { win.print(); }, 500);
}

function filterDictionary() {
    const raw = document.getElementById('searchInput').value.toLowerCase().trim();
    const rows = document.getElementById('dictionary-body').getElementsByTagName('tr');
    let anyVisible = false;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row.id === 'dict-empty-row') continue;
        const textContent = (row.textContent || '').toLowerCase();
        if (raw === '' || textContent.indexOf(raw) > -1) {
            row.style.display = "";
            anyVisible = true;
            highlightDictRow(row, raw);
        } else {
            row.style.display = "none";
        }
    }

    const tbody = document.getElementById('dictionary-body');
    let emptyRow = document.getElementById('dict-empty-row');
    if (!anyVisible) {
        if (!emptyRow) {
            emptyRow = document.createElement('tr');
            emptyRow.id = 'dict-empty-row';
            emptyRow.innerHTML = '<td colspan="5" class="p-8 text-center text-slate-400">' + __('emptyDictSearch') + '</td>';
            tbody.appendChild(emptyRow);
        }
        emptyRow.style.display = "";
    } else if (emptyRow) {
        emptyRow.remove();
    }
}

// ================= КАРТОЧКИ =================
let flashcardIndex = 0;
let flashcardFilteredData = [];
let flashcardGroup = 'all';

function setFlashcardGroup(group) {
    flashcardGroup = group;

    document.querySelectorAll('.fc-group-btn').forEach(btn => {
        btn.className = "fc-group-btn px-4 py-2 rounded-full text-sm font-semibold transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50";
    });
    const activeBtn = document.getElementById(`fc-group-${group}`);
    if (activeBtn) {
        activeBtn.className = "fc-group-btn px-4 py-2 rounded-full text-sm font-semibold transition-colors bg-indigo-600 text-white shadow-md";
    }

    const fullList = getFullVerbList();
    if (group === 'all') {
        flashcardFilteredData = fullList;
    } else {
        flashcardFilteredData = fullList.filter(v => classifyVerb(v) === parseInt(group));
    }

    flashcardFilteredData = shuffleArray(flashcardFilteredData);
    flashcardIndex = 0;
    updateFlashcard();
}

function flipCard() {
    document.querySelector('.flip-card').classList.toggle('flipped');
}

function updateFlashcard() {
    const cardElement = document.querySelector('.flip-card');
    if (!cardElement) return;
    if (cardElement.classList.contains('flipped')) {
        cardElement.classList.remove('flipped');
    }
    setFlashcardData();
}

function setFlashcardData() {
    const total = flashcardFilteredData.length;
    if (total === 0) {
        document.getElementById('flashcard-v1').textContent = '—';
        document.getElementById('flashcard-v2').textContent = '—';
        document.getElementById('flashcard-v3').textContent = '—';
        document.getElementById('flashcard-translation').textContent = __('fcNoVerbs');
        document.getElementById('flashcard-counter').textContent = '0 / 0';
        return;
    }
    const verb = flashcardFilteredData[flashcardIndex];
    document.getElementById('flashcard-v1').textContent = verb.v1;
    document.getElementById('flashcard-v2').textContent = verb.v2;
    document.getElementById('flashcard-v3').textContent = verb.v3;
    document.getElementById('flashcard-translation').textContent = getVerbTranslation(verb);
    document.getElementById('flashcard-counter').textContent = `${flashcardIndex + 1} / ${total}`;
}

function nextCard() {
    const total = flashcardFilteredData.length;
    if (total === 0) return;
    if (flashcardIndex < total - 1) {
        flashcardIndex++;
    } else {
        flashcardIndex = 0;
    }
    updateFlashcard();
}

function prevCard() {
    const total = flashcardFilteredData.length;
    if (total === 0) return;
    if (flashcardIndex > 0) {
        flashcardIndex--;
    } else {
        flashcardIndex = total - 1;
    }
    updateFlashcard();
}

// ================= КАРТОЧКИ — СВАЙП =================
let touchStartX = 0;
let touchStartY = 0;
let touchMoved = false;

document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    if (!flipCard) return;

    flipCard.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        touchMoved = false;
    }, { passive: true });

    flipCard.addEventListener('touchmove', function(e) {
        touchMoved = true;
    }, { passive: true });

    flipCard.addEventListener('touchend', function(e) {
        if (!touchMoved) return;
        const dx = e.changedTouches[0].screenX - touchStartX;
        const dy = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return;
        if (dx > 0) prevCard();
        else nextCard();
    }, { passive: true });
});

// ================= КАРТОЧКИ — РЕЖИМ ПРОВЕРКИ =================
let fcQuizQueue = [];
let fcQuizIndex = 0;
let fcQuizScore = 0;
let fcQuizTotal = 0;

function startFlashcardQuiz() {
    if (flashcardFilteredData.length === 0) {
        showToast(__('fcNoVerbs'), 'error');
        return;
    }
    fcQuizQueue = shuffleArray([...flashcardFilteredData]);
    fcQuizIndex = 0;
    fcQuizScore = 0;
    fcQuizTotal = fcQuizQueue.length;
    document.getElementById('fc-start-btn').classList.add('hidden');
    document.getElementById('fc-quiz-area').classList.remove('hidden');
    document.getElementById('fc-quiz-results').classList.add('hidden');
    loadFlashcardQuestion();
}

function loadFlashcardQuestion() {
    if (fcQuizIndex >= fcQuizQueue.length) {
        finishFlashcardQuiz();
        return;
    }
    const verb = fcQuizQueue[fcQuizIndex];
    document.getElementById('fc-quiz-v1').textContent = verb.v1;
    document.getElementById('fc-quiz-v2-input').value = '';
    document.getElementById('fc-quiz-v3-input').value = '';
    document.getElementById('fc-quiz-progress').textContent = `${fcQuizIndex + 1} / ${fcQuizTotal}`;
    document.getElementById('fc-quiz-result').classList.add('hidden');
    hideConfidenceBar();
    document.getElementById('fc-quiz-v2-input').focus();
}

function checkFlashcardAnswer() {
    const verb = fcQuizQueue[fcQuizIndex];
    if (!verb) return;
    const v2Input = normalizeTyped(document.getElementById('fc-quiz-v2-input').value);
    const v3Input = normalizeTyped(document.getElementById('fc-quiz-v3-input').value);
    const v2Forms = getAcceptedVariations(verb.v2).map(f => f.toLowerCase());
    const v3Forms = getAcceptedVariations(verb.v3).map(f => f.toLowerCase());
    const v2Correct = v2Forms.some(f => f === v2Input);
    const v3Correct = v3Forms.some(f => f === v3Input);
    const resultEl = document.getElementById('fc-quiz-result');
    resultEl.classList.remove('hidden');
    markVerbSeen(verb.v1);
    if (v2Correct && v3Correct) {
        fcQuizScore++;
        playSound('correct');
        resultEl.textContent = '✓ ' + __('fcQuizCorrect');
        resultEl.className = 'mt-4 text-center text-lg font-bold text-emerald-600';
    } else {
        if (!v2Correct) recordMistake(verb, 'v2');
        if (!v3Correct) recordMistake(verb, 'v3');
        playSound('wrong');
        resultEl.textContent = '✗ ' + __('fcQuizWrong') + ': ' + verb.v1 + ' → ' + verb.v2 + ' / ' + verb.v3;
        resultEl.className = 'mt-4 text-center text-lg font-bold text-red-500';
    }
    document.getElementById('fc-quiz-score').textContent = __('fcQuizScore') + ': ' + fcQuizScore;
    showConfidenceButtons(verb.v1);
    fcQuizIndex++;
    setTimeout(loadFlashcardQuestion, 1500);
}

function skipFlashcardQuestion() {
    fcQuizIndex++;
    loadFlashcardQuestion();
}

function finishFlashcardQuiz() {
    document.getElementById('fc-quiz-area').classList.add('hidden');
    document.getElementById('fc-quiz-results').classList.remove('hidden');
    document.getElementById('fc-quiz-final-score').textContent = `${fcQuizScore} / ${fcQuizTotal}`;
    document.getElementById('fc-start-btn').classList.remove('hidden');
    trackSessionEnd(fcQuizScore, fcQuizTotal);
    checkAchievements();
}

// ================= УВЕРЕННОСТЬ (EASY/MEDIUM/HARD) =================
function showConfidenceButtons(v1Key) {
    const existing = document.getElementById('confidence-bar');
    if (existing) existing.remove();
    const bar = document.createElement('div');
    bar.id = 'confidence-bar';
    bar.className = 'flex items-center justify-center gap-2 mt-3';
    bar.innerHTML = `
        <span class="text-xs text-slate-400 mr-1">${__('easyLabel')}?</span>
        <button onclick="saveConfidence('${v1Key}', 3)" class="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 font-medium transition-colors">${__('easyLabel')}</button>
        <button onclick="saveConfidence('${v1Key}', 2)" class="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 font-medium transition-colors">${__('mediumLabel')}</button>
        <button onclick="saveConfidence('${v1Key}', 1)" class="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 hover:bg-red-200 font-medium transition-colors">${__('hardLabel')}</button>
    `;
    const fcResult = document.getElementById('fc-quiz-result');
    if (fcResult && !fcResult.classList.contains('hidden')) {
        fcResult.parentNode.appendChild(bar);
        return;
    }
    const trainerFeedback = document.getElementById('trainer-feedback');
    if (trainerFeedback && !trainerFeedback.classList.contains('hidden')) {
        trainerFeedback.parentNode.appendChild(bar);
        return;
    }
    const lettersCard = document.getElementById('letters-verb-card');
    if (lettersCard && !lettersCard.classList.contains('hidden')) {
        lettersCard.parentNode.appendChild(bar);
    }
}

function saveConfidence(v1Key, level) {
    if (!settings.confidence) settings.confidence = {};
    settings.confidence[v1Key] = level;
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    const bar = document.getElementById('confidence-bar');
    if (bar) bar.remove();
    showToast(__('confidenceSaved'), 'success');
}

function hideConfidenceBar() {
    const bar = document.getElementById('confidence-bar');
    if (bar) bar.remove();
}

// ================= АНКЕТА =================
const SURVEY_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe904y7agGjGRNohCUWyQCajiEKA2RJdxXR4k8eXgQ5GMkqeQ/viewform?embedded=true';

function toggleSurvey() {
    const wrap = document.getElementById('survey-frame-wrap');
    if (!wrap) return;
    const frame = document.getElementById('survey-frame');
    const willShow = wrap.classList.contains('hidden');
    if (willShow && frame && !frame.src) {
        frame.src = SURVEY_EMBED_URL;
    }
    wrap.classList.toggle('hidden', !willShow);
}

function getConfidence(v1Key) {
    return settings.confidence?.[v1Key] || 0;
}

// ================= КЛАССИФИКАЦИЯ =================
function getBaseForm(form) {
    let normalized = form.toLowerCase().trim();
    if (normalized.includes('/')) {
        normalized = normalized.split('/')[0].trim();
    }
    normalized = normalized.replace(/\(.*?\)/g, '').trim();
    return normalized;
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

function updateNavProgress() {
    const total = getFullVerbList().length;
    const learned = (settings.verbsLearned || []).length;
    const pct = Math.min(100, Math.round((learned / total) * 100));
    const bar = document.getElementById('nav-prog-dictionary');
    if (bar) bar.style.width = pct + '%';
}

function showVerbDetail(v1Key) {
    const verb = getFullVerbList().find(v => v.v1 === v1Key);
    if (!verb) return;
    const err = errorStats[v1Key];
    const lastSeen = settings.verbLastSeen?.[v1Key];
    document.getElementById('verb-detail-title').textContent = verb.v1 + ' — ' + getVerbTranslation(verb);
    let html = '';
    html += '<div class="bg-indigo-50 rounded-xl p-4 grid grid-cols-3 gap-3 text-center">';
    html += '<div><div class="text-lg font-bold text-indigo-600">' + verb.v1 + '</div><div class="text-xs text-indigo-400">V1</div></div>';
    html += '<div><div class="text-lg font-bold text-indigo-600">' + verb.v2 + '</div><div class="text-xs text-indigo-400">V2</div></div>';
    html += '<div><div class="text-lg font-bold text-indigo-600">' + verb.v3 + '</div><div class="text-xs text-indigo-400">V3</div></div>';
    html += '</div>';
    const groupLabels = ['', 'AAA', 'ABB', 'ABA', 'ABC'];
    const group = classifyVerb(verb);
    html += '<div class="flex justify-between items-center px-3 py-2 bg-slate-50 rounded-lg"><span class="text-slate-500">' + __('dictGroup') + '</span><span class="font-bold text-slate-700">' + groupLabels[group] + '</span></div>';
    html += '<div class="flex justify-between items-center px-3 py-2 bg-slate-50 rounded-lg"><span class="text-slate-500">' + __('dictComplexity') + '</span><span class="font-bold text-slate-700">' + verb.complexity + '</span></div>';
    if (err) {
        const forms = err.forms || {};
        html += '<div class="border-t border-slate-200 pt-3"><div class="text-sm font-bold text-slate-700 mb-2">' + __('dictErrorsByForm') + '</div>';
        html += '<div class="space-y-1.5">';
        html += '<div class="flex justify-between px-3 py-1.5 bg-red-50 rounded-lg"><span>V2</span><span class="font-bold text-red-600">' + (forms.v2 || 0) + '</span></div>';
        html += '<div class="flex justify-between px-3 py-1.5 bg-red-50 rounded-lg"><span>V3</span><span class="font-bold text-red-600">' + (forms.v3 || 0) + '</span></div>';
        html += '<div class="flex justify-between px-3 py-1.5 bg-red-50 rounded-lg"><span>' + __('dictSpelling') + '</span><span class="font-bold text-red-600">' + (forms.spelling || 0) + '</span></div>';
        html += '<div class="flex justify-between px-3 py-1.5 bg-red-100 rounded-lg font-bold"><span>' + __('dictTotal') + '</span><span class="text-red-700">' + (err.mistakes || 0) + '</span></div>';
        html += '</div></div>';
        if (err.lastMistake) {
            html += '<div class="flex justify-between px-3 py-2 bg-slate-50 rounded-lg"><span class="text-slate-500">' + __('dictLastError') + '</span><span class="text-xs text-slate-600">' + err.lastMistake + '</span></div>';
        }
    } else {
        html += '<div class="p-4 bg-green-50 rounded-lg text-center text-green-700 font-medium"><i class="fas fa-check-circle mr-2"></i>' + __('dictNoErrors') + '</div>';
    }
    if (lastSeen) {
        const d = new Date(lastSeen);
        html += '<div class="flex justify-between px-3 py-2 bg-slate-50 rounded-lg"><span class="text-slate-500">' + __('dictLastRepeat') + '</span><span class="text-xs text-slate-600">' + d.toLocaleString(uiLocale()) + '</span></div>';
    }
    const isFav = isFavorite(v1Key);
    html += '<div class="flex justify-between px-3 py-2 bg-slate-50 rounded-lg"><span class="text-slate-500">' + __('dictInFavorites') + '</span><span class="font-bold ' + (isFav ? 'text-yellow-500' : 'text-slate-400') + '"><i class="fas fa-star' + (isFav ? '' : '-regular') + '"></i></span></div>';

    const shuffledTemplates = [...sentenceTemplates].sort(() => Math.random() - 0.5).slice(0, 2);
    let examplesHtml = '<div class="border-t border-slate-200 pt-3 mt-2"><div class="text-sm font-bold text-slate-700 mb-2"><i class="fas fa-quote-right mr-1"></i>' + __('dictExamples') + '</div><div class="space-y-2">';
    shuffledTemplates.forEach(function(t) {
        const formKey = t.form;
        const correctForm = verb[formKey] || '';
        const sent = t.text.replace('{v1}', verb.v1).replace('___', '<b>' + correctForm + '</b>');
        examplesHtml += '<div class="px-3 py-2 bg-indigo-50 rounded-lg text-sm text-slate-700 leading-relaxed">' + sent + '</div>';
    });
    examplesHtml += '</div></div>';
    html += examplesHtml;

    document.getElementById('verb-detail-body').innerHTML = html;
    document.getElementById('verb-detail-modal').classList.add('open');
}

function closeVerbDetail() {
    document.getElementById('verb-detail-modal').classList.remove('open');
}

function getVerbProgress(v1Key) {
    const stat = errorStats[v1Key];
    if (!stat || stat.mistakes === 0) return '<span class="text-xs text-slate-300">—</span>';
    const count = stat.mistakes;
    if (count <= 2) return '<span class="text-green-500 text-sm font-bold"><i class="fas fa-check-circle"></i></span>';
    if (count <= 5) return '<span class="text-amber-500 text-sm font-bold"><i class="fas fa-exclamation-circle"></i> ' + count + '</span>';
    return '<span class="text-red-500 text-sm font-bold"><i class="fas fa-times-circle"></i> ' + count + '</span>';
}

function getSpacedStatus(v1Key) {
    if (!settings.useSpacedRep || !settings.verbLastSeen) return '';
    const lastSeen = settings.verbLastSeen[v1Key];
    if (!lastSeen) return '<span class="text-xs text-slate-400 ml-1" title="' + __('fcNoVerbs') + '">🆕</span>';
    const daysAgo = (Date.now() - lastSeen) / 86400000;
    if (daysAgo > 7) return '<span class="text-xs text-red-500 ml-1" title="' + __('spacedOverdue') + ' (' + Math.floor(daysAgo) + 'd)">⚠️</span>';
    if (daysAgo > 3) return '<span class="text-xs text-amber-500 ml-1" title="' + __('spacedDue') + '">🔄</span>';
    return '<span class="text-xs text-green-500 ml-1" title="' + __('spacedRecent') + '">✓</span>';
}

// ================= УМНАЯ СИСТЕМА СЛИЧЕНИЯ ОТВЕТОВ =================
// Визуально одинаковые кириллические символы (случайная раскладка) → латиница
const HOMOGLYPH_MAP = { 'а': 'a', 'е': 'e', 'о': 'o', 'р': 'p', 'с': 'c', 'х': 'x', 'у': 'y', 'і': 'i', 'ѕ': 's', 'һ': 'h' };

function normalizeTyped(s) {
    if (!s) return '';
    return String(s).toLowerCase().trim().replace(/[аеорсхуіѕһ]/g, ch => HOMOGLYPH_MAP[ch] || ch);
}

function getAcceptedVariations(formStr) {
    let normalized = formStr.toLowerCase().trim();
    let variations = new Set();
    variations.add(normalized);

    if (normalized.includes('/')) {
        normalized.split('/').forEach(p => variations.add(p.trim()));
    }

    const parentheticalRegex = /([a-z]+)\s*\(([a-z/]+)\)/i;
    const match = normalized.match(parentheticalRegex);
    if (match) {
        const base = match[1].trim();
        const alt = match[2].trim();

        variations.add(base);
        if (alt.includes('/')) {
            alt.split('/').forEach(p => variations.add(p.trim()));
        } else {
            variations.add(alt);
        }

        if (normalized.includes(base + '(' + alt + ')')) {
            variations.add(base + alt);
        }
    }

    if (normalized.includes('(') && normalized.includes(')')) {
        let stripped = normalized.replace(/\(.*?\)/g, '').trim();
        let expanded = normalized.replace(/\((.*?)\)/g, '$1').trim();
        variations.add(stripped);
        variations.add(expanded);
    }

    if (normalized === "was/were") {
        variations.add("was");
        variations.add("were");
        variations.add("was were");
    }

    return Array.from(variations).map(v => v.trim()).filter(Boolean);
}

// ================= ИНТЕРВАЛЬНЫЕ ПОВТОРЕНИЯ =================
function markVerbSeen(v1) {
    if (!settings.verbLastSeen) settings.verbLastSeen = {};
    settings.verbLastSeen[v1] = Date.now();
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
}

// ================= ТАЙМЕР СЕССИИ =================
let sessionStartTime = null;
let sessionTimerInterval = null;

function startSessionTimer(displayId) {
    stopSessionTimer();
    sessionStartTime = Date.now();
    const timerId = displayId;
    const timerEl = document.getElementById(timerId);
    const rowId = timerId + '-row';
    const rowEl = document.getElementById(rowId);
    if (settings.showTimer) {
        if (rowEl) rowEl.classList.remove('hidden');
        if (timerEl) {
            timerEl.classList.remove('hidden');
            timerEl.textContent = '00:00';
        }
    } else {
        if (rowEl) rowEl.classList.add('hidden');
    }
    if (settings.showTimer) {
        sessionTimerInterval = setInterval(() => updateTimerDisplay(timerId), 1000);
    }
}

function stopSessionTimer() {
    if (sessionTimerInterval) {
        clearInterval(sessionTimerInterval);
        sessionTimerInterval = null;
    }
}

function updateTimerDisplay(displayId) {
    if (!sessionStartTime) return;
    const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    const text = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const el = document.getElementById(displayId);
    if (el) el.textContent = text;
    return text;
}

function getSessionDuration() {
    if (!sessionStartTime) return '00:00';
    const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ================= ТРЕНАЖЕР БУКВ =================
let lettersQueue = [];
let currentLettersIdx = 0;
let lettersScore = 0;
let lettersMistakes = 0;
let currentLettersWord = "";
let currentLettersSchema = [];

function startLettersTrainer() {
    document.getElementById('letters-start').classList.add('hidden');
    document.getElementById('letters-results').classList.add('hidden');
    document.getElementById('letters-active').classList.remove('hidden');

    const filteredVerbs = getFilteredVerbs();
    lettersQueue = shuffleArray(filteredVerbs).slice(0, getQuestionCount());
    currentLettersIdx = 0;
    lettersScore = 0;
    lettersMistakes = 0;

    updateLettersScoreboard();
    startSessionTimer('letters-timer');
    loadLettersQuestion();
}

function updateLettersScoreboard() {
    document.getElementById('letters-score').textContent = lettersScore;
    document.getElementById('letters-mistakes').textContent = lettersMistakes;
    const totalQuestions = getQuestionCount();
    const progress = Math.round(((currentLettersIdx + 1) / totalQuestions) * 100);
    document.getElementById('letters-progress-bar').style.width = progress + '%';
    document.getElementById('letters-progress').textContent = __('trQuestion') + ' ' + (currentLettersIdx + 1) + ' ' + __('trOf') + ' ' + totalQuestions;
}

function loadLettersQuestion() {
    const verb = lettersQueue[currentLettersIdx];
    document.getElementById('letters-translation').textContent = getVerbTranslation(verb);

    const activeForms = getActiveForms();
    if (activeForms.length === 0) activeForms.push(0);
    const formChoice = activeForms[Math.floor(Math.random() * activeForms.length)];
    const formLabels = ["V1 (Infinitive)", "V2 (Past Simple)", "V3 (Past Participle)"];
    document.getElementById('letters-form-label').textContent = formLabels[formChoice];

    let targetWord = "";
    if (formChoice === 0) targetWord = verb.v1;
    else if (formChoice === 1) targetWord = verb.v2;
    else targetWord = verb.v3;

    if (targetWord.includes('/')) {
        targetWord = targetWord.split('/')[0].trim();
    }
    if (targetWord.includes('(')) {
        targetWord = targetWord.replace(/\(.*?\)/g, '').trim();
    }

    currentLettersWord = targetWord.toLowerCase();
    generateWordSchema(currentLettersWord);
    renderLettersWord();

    document.getElementById('letters-feedback').classList.add('hidden');
    document.getElementById('letters-verb-card').classList.add('hidden');
    hideConfidenceBar();
    document.getElementById('btn-letters-check').classList.remove('hidden');
    document.getElementById('btn-letters-next').classList.add('hidden');

    focusFirstEmptyLetter();
}

function generateWordSchema(word) {
    currentLettersSchema = [];
    const len = word.length;
    let hideCount = Math.max(1, Math.floor(len * 0.4));

    const hiddenIndices = new Set();
    while (hiddenIndices.size < hideCount) {
        const randIdx = Math.floor(Math.random() * len);
        hiddenIndices.add(randIdx);
    }

    for (let i = 0; i < len; i++) {
        const char = word[i];
        const isHidden = hiddenIndices.has(i);
        currentLettersSchema.push({
            originalChar: char,
            isHidden: isHidden,
            enteredChar: ""
        });
    }
}

function renderLettersWord() {
    const container = document.getElementById('letters-word-container');
    container.innerHTML = '';

    currentLettersSchema.forEach((item, index) => {
        if (!item.isHidden) {
            const el = document.createElement('div');
            el.className = "w-12 h-14 bg-slate-100 border border-slate-300 rounded-xl flex items-center justify-center text-2xl font-bold text-slate-700 shadow-sm";
            el.textContent = item.originalChar;
            container.appendChild(el);
        } else {
            const input = document.createElement('input');
            input.type = "text";
            input.maxLength = 1;
            input.autocomplete = "off";
            input.id = `let-input-${index}`;
            input.className = "letter-input w-12 h-14 border-2 border-indigo-400 focus:border-indigo-600 bg-indigo-50/50 rounded-xl text-center text-2xl font-bold text-indigo-700 outline-none transition-all shadow-sm";

            input.addEventListener('input', (e) => {
                const val = e.target.value.toLowerCase();
                item.enteredChar = val;
                if (val.length === 1) {
                    focusNextEmptyLetter(index);
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value === '') {
                    focusPrevEmptyLetter(index);
                }
            });

            container.appendChild(input);
        }
    });
}

function focusFirstEmptyLetter() {
    const firstEmpty = currentLettersSchema.findIndex(item => item.isHidden);
    if (firstEmpty !== -1) {
        const el = document.getElementById(`let-input-${firstEmpty}`);
        if (el) el.focus();
    }
}

function focusNextEmptyLetter(currentIndex) {
    for (let i = currentIndex + 1; i < currentLettersSchema.length; i++) {
        if (currentLettersSchema[i].isHidden) {
            const el = document.getElementById(`let-input-${i}`);
            if (el) { el.focus(); return; }
        }
    }
}

function focusPrevEmptyLetter(currentIndex) {
    for (let i = currentIndex - 1; i >= 0; i--) {
        if (currentLettersSchema[i].isHidden) {
            const el = document.getElementById(`let-input-${i}`);
            if (el) { el.focus(); return; }
        }
    }
}

function checkLettersAnswer() {
    let isAllCorrect = true;

    currentLettersSchema.forEach((item, index) => {
        if (item.isHidden) {
            const inputEl = document.getElementById(`let-input-${index}`);
            const val = normalizeTyped(inputEl.value);
            item.enteredChar = val;
            inputEl.disabled = true;

            if (val === item.originalChar) {
                inputEl.className = "w-12 h-14 border-2 border-green-500 bg-green-50 text-green-700 rounded-xl text-center text-2xl font-bold outline-none shadow-sm";
            } else {
                inputEl.className = "w-12 h-14 border-2 border-red-500 bg-red-50 text-red-600 rounded-xl text-center text-2xl font-bold outline-none shadow-sm";
                inputEl.value = item.originalChar;
                isAllCorrect = false;
            }
        }
    });

    const feedback = document.getElementById('letters-feedback');
    feedback.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');

    if (isAllCorrect) {
        lettersScore++;
        playSound('correct');
        feedback.classList.add('bg-green-100', 'text-green-800');
        feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('misCorrectShort') + ' ' + __('letPerfect');
    } else {
        lettersMistakes++;
        playSound('wrong');
        recordMistake(lettersQueue[currentLettersIdx], 'spelling');
        feedback.classList.add('bg-red-100', 'text-red-800');
        feedback.innerHTML = '<i class="fas fa-times-circle mr-2"></i> ' + __('misLetterError') + ' "' + document.getElementById('letters-form-label').textContent + '". ' + __('misWrongFeedback') + ' <span class="font-bold text-lg">' + currentLettersWord + '</span>';
    }

    const verb = lettersQueue[currentLettersIdx];
    markVerbSeen(verb.v1);
    answerFeedback(isAllCorrect, feedback);
    document.getElementById('letters-card-v1').textContent = verb.v1;
    document.getElementById('letters-card-v2').textContent = verb.v2;
    document.getElementById('letters-card-v3').textContent = verb.v3;
    document.getElementById('letters-card-translation').textContent = getVerbTranslation(verb);

    const cardIcon = document.getElementById('letters-card-icon');
    const cardTitle = document.getElementById('letters-card-title');
    if (isAllCorrect) {
        cardIcon.innerHTML = '<i class="fas fa-check-circle text-green-500"></i>';
        cardTitle.innerHTML = __('misCorrectShort');
        cardTitle.className = 'text-lg font-bold text-green-700';
    } else {
        cardIcon.innerHTML = '<i class="fas fa-times-circle text-red-500"></i>';
        cardTitle.innerHTML = __('letCardError');
        cardTitle.className = 'text-lg font-bold text-red-700';
    }
    document.getElementById('letters-verb-card').classList.remove('hidden');

    updateLettersScoreboard();
    document.getElementById('btn-letters-check').classList.add('hidden');
    document.getElementById('btn-letters-next').classList.remove('hidden');
    document.getElementById('btn-letters-next').focus();
    showConfidenceButtons(verb.v1);
}

function nextLettersQuestion() {
    currentLettersIdx++;
    const questionCount = getQuestionCount();
    if (currentLettersIdx < questionCount) {
        loadLettersQuestion();
    } else {
        showLettersResults();
    }
}

function showLettersResults() {
    document.getElementById('letters-active').classList.add('hidden');
    document.getElementById('letters-results').classList.remove('hidden');
    document.getElementById('letters-result-correct').textContent = lettersScore;
    document.getElementById('letters-result-wrong').textContent = lettersMistakes;
    const lettersTime = document.getElementById('letters-result-time');
    if (lettersTime) lettersTime.textContent = getSessionDuration();
    stopSessionTimer();
    const reviewBtn = document.getElementById('btn-letters-review');
    if (reviewBtn) reviewBtn.classList.toggle('hidden', lettersMistakes === 0);
    trackSessionEnd(lettersScore, lettersScore + lettersMistakes);
}

// ================= ТРЕНАЖЕР ФОРМ =================
let trainerQueue = [];
let currentQuestionIndex = 0;
let trainerScore = 0;
let trainerMistakes = 0;
let currentVerb = null;
let trainerMode = 'normal';
let isMarathon = false;
let trainerTotalAnswered = 0;

function setTrainerMode(mode) {
    trainerMode = mode;
    document.querySelectorAll('.tr-mode-btn').forEach(btn => {
        btn.className = "tr-mode-btn px-4 py-2 rounded-full text-sm font-semibold transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50";
    });
    const activeBtn = document.getElementById(`tr-mode-${mode}`);
    if (activeBtn) {
        activeBtn.className = "tr-mode-btn px-4 py-2 rounded-full text-sm font-semibold transition-colors bg-indigo-600 text-white shadow-md";
    }
}

function startTrainer() {
    document.getElementById('trainer-start').classList.add('hidden');
    document.getElementById('trainer-results').classList.add('hidden');
    document.getElementById('trainer-active').classList.remove('hidden');

    const filteredVerbs = getFilteredVerbs();
    trainerQueue = shuffleArray(filteredVerbs).slice(0, getQuestionCount());
    currentQuestionIndex = 0;
    trainerScore = 0;
    trainerMistakes = 0;
    isMarathon = false;
    trainerTotalAnswered = 0;

    document.getElementById('btn-marathon-finish').classList.add('hidden');
    document.getElementById('marathon-result-total').classList.add('hidden');

    updateTrainerScoreboard();
    startSessionTimer('trainer-timer');
    loadTrainerQuestion();
}

function startMarathon() {
    document.getElementById('trainer-start').classList.add('hidden');
    document.getElementById('trainer-results').classList.add('hidden');
    document.getElementById('trainer-active').classList.remove('hidden');

    const filteredVerbs = getFilteredVerbs();
    trainerQueue = shuffleArray(filteredVerbs);
    currentQuestionIndex = 0;
    trainerScore = 0;
    trainerMistakes = 0;
    isMarathon = true;
    trainerTotalAnswered = 0;

    document.getElementById('btn-marathon-finish').classList.remove('hidden');
    document.getElementById('marathon-result-total').classList.add('hidden');

    updateTrainerScoreboard();
    startSessionTimer('trainer-timer');
    loadTrainerQuestion();
}

function finishMarathon() {
    showTrainerResults();
}

function updateTrainerScoreboard() {
    document.getElementById('trainer-score').textContent = trainerScore;
    document.getElementById('trainer-mistakes').textContent = trainerMistakes;
    if (isMarathon) {
        document.getElementById('trainer-progress').textContent = __('trQuestion') + ' ' + (currentQuestionIndex + 1);
        document.getElementById('trainer-progress-bar').style.width = '100%';
    } else {
        const totalQuestions = getQuestionCount();
        const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
        document.getElementById('trainer-progress-bar').style.width = progress + '%';
        document.getElementById('trainer-progress').textContent = __('trQuestion') + ' ' + (currentQuestionIndex + 1) + ' ' + __('trOf') + ' ' + totalQuestions;
    }
}

const sentenceTemplates = [
    { form: 'v2', text: 'Yesterday I ___ (to {v1})' },
    { form: 'v2', text: 'She ___ ({v1}) last week' },
    { form: 'v2', text: 'They ___ ({v1}) yesterday' },
    { form: 'v2', text: 'He ___ ({v1}) two days ago' },
    { form: 'v2', text: 'We ___ ({v1}) last night' },
    { form: 'v3', text: 'I have ___ ({v1}) it' },
    { form: 'v3', text: 'She has ___ ({v1}) the work' },
    { form: 'v3', text: 'It was ___ ({v1}) by hand' },
    { form: 'v3', text: 'They have ___ ({v1}) everything' },
    { form: 'v3', text: 'I had ___ ({v1}) it before' }
];

let currentSentenceForm = 'v2';
let currentSentenceTemplate = '';
let matchForms = [];
let matchSelectedForm = null;
let matchSlots = { v1: '', v2: '', v3: '' };

function matchSelect(formKey) {
    matchSelectedForm = formKey;
    document.querySelectorAll('.match-form-btn').forEach(b => {
        b.className = 'match-form-btn px-5 py-3 rounded-xl text-lg font-bold border-2 border-slate-200 hover:border-indigo-400 transition-all bg-white text-slate-700';
    });
    const btns = document.querySelectorAll('.match-form-btn');
    for (let b of btns) {
        if (b.dataset.form === formKey) {
            b.className = 'match-form-btn px-5 py-3 rounded-xl text-lg font-bold border-2 border-indigo-500 transition-all bg-indigo-50 text-indigo-700 ring-2 ring-indigo-300';
        }
    }
}

function matchPlace(slot) {
    if (!matchSelectedForm) return;
    const slotEl = document.querySelector(`#match-slot-${slot} .match-value`);
    if (!slotEl) return;
    const btn = document.querySelector(`.match-form-btn[data-form="${matchSelectedForm}"]`);
    const label = btn ? btn.dataset.label : '';
    matchSlots[slot] = matchSelectedForm;
    slotEl.textContent = label;
    const prevSlot = Object.keys(matchSlots).find(k => matchSlots[k] === matchSelectedForm && k !== slot);
    if (prevSlot !== undefined) {
        matchSlots[prevSlot] = '';
        const prevSlotEl = document.querySelector(`#match-slot-${prevSlot} .match-value`);
        if (prevSlotEl) prevSlotEl.textContent = '';
    }
    matchSelectedForm = null;
    document.querySelectorAll('.match-form-btn').forEach(b => {
        b.className = 'match-form-btn px-5 py-3 rounded-xl text-lg font-bold border-2 border-slate-200 hover:border-indigo-400 transition-all bg-white text-slate-700';
    });
    matchCheckCompletion();
}

function matchCheckCompletion() {
    const allFilled = matchSlots.v1 && matchSlots.v2 && matchSlots.v3;
    const btn = document.getElementById('btn-check');
    if (allFilled && btn) {
        btn.classList.remove('hidden');
    }
}

function loadTrainerQuestion() {
    currentVerb = trainerQueue[currentQuestionIndex];
    hideConfidenceBar();

    const transEl = document.getElementById('trainer-translation');
    const v1El = document.getElementById('trainer-v1');
    const v1Row = document.getElementById('trainer-v1-row');
    const v2Row = document.getElementById('trainer-v2-row');
    const v3Row = document.getElementById('trainer-v3-row');
    const inputV1 = document.getElementById('input-v1');
    const inputV2 = document.getElementById('input-v2');
    const inputV3 = document.getElementById('input-v3');
    const sentenceArea = document.getElementById('trainer-sentence-area');
    const sentenceText = document.getElementById('trainer-sentence-text');

    inputV1.value = '';
    inputV2.value = '';
    inputV3.value = '';

    [inputV1, inputV2, inputV3].forEach(inp => {
        if (!inp) return;
        inp.className = "w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-lg";
        inp.disabled = false;
    });

    const matchArea = document.getElementById('trainer-match-area');
    const audioArea = document.getElementById('trainer-audio-area');
    const v2InputWrapper = document.getElementById('trainer-v2-input-wrapper');
    const v2DisplayWrapper = document.getElementById('trainer-v2-display-wrapper');
    const v3InputWrapper = document.getElementById('trainer-v3-input-wrapper');
    const v3DisplayWrapper = document.getElementById('trainer-v3-display-wrapper');
    [v2InputWrapper, v2DisplayWrapper, v3InputWrapper, v3DisplayWrapper].forEach(el => { if (el) el.classList.add('hidden'); });
    if (sentenceArea) sentenceArea.classList.add('hidden');
    if (audioArea) audioArea.classList.add('hidden');
    if (matchArea) matchArea.classList.add('hidden');

    if (trainerMode === 'normal') {
        transEl.textContent = getVerbTranslation(currentVerb);
        transEl.style.display = (settings.showTranslation !== false) ? '' : 'none';
        v1El.textContent = currentVerb.v1;
        if (v1Row) v1Row.classList.add('hidden');
        if (v2Row) v2Row.classList.remove('hidden');
        if (v3Row) v3Row.classList.remove('hidden');
        if (v2InputWrapper) v2InputWrapper.classList.remove('hidden');
        if (v3InputWrapper) v3InputWrapper.classList.remove('hidden');
        document.getElementById('trainer-feedback-area').className = 'space-y-6';
        inputV2.focus();
    } else if (trainerMode === 'reverse-v1') {
        transEl.textContent = getVerbTranslation(currentVerb);
        transEl.style.display = '';
        v1El.textContent = '';
        if (v1Row) v1Row.classList.remove('hidden');
        if (v2Row) v2Row.classList.add('hidden');
        if (v3Row) v3Row.classList.add('hidden');
        document.getElementById('trainer-feedback-area').className = 'space-y-6';
        inputV1.focus();
    } else if (trainerMode === 'reverse-forms') {
        transEl.textContent = getVerbTranslation(currentVerb);
        transEl.style.display = (settings.showTranslation !== false) ? '' : 'none';
        v1El.textContent = '';
        if (v1Row) v1Row.classList.remove('hidden');
        if (v2Row) v2Row.classList.remove('hidden');
        if (v3Row) v3Row.classList.remove('hidden');
        document.getElementById('trainer-feedback-area').className = 'space-y-6';
        document.getElementById('trainer-v2-input-wrapper').classList.add('hidden');
        document.getElementById('trainer-v2-display-wrapper').classList.remove('hidden');
        document.getElementById('trainer-v2-display').textContent = currentVerb.v2;
        document.getElementById('trainer-v3-input-wrapper').classList.add('hidden');
        document.getElementById('trainer-v3-display-wrapper').classList.remove('hidden');
        document.getElementById('trainer-v3-display').textContent = currentVerb.v3;
        inputV1.focus();
    } else if (trainerMode === 'sentences') {
        transEl.textContent = getVerbTranslation(currentVerb);
        transEl.style.display = (settings.showTranslation !== false) ? '' : 'none';
        v1El.textContent = '';
        if (v1Row) v1Row.classList.add('hidden');
        const template = sentenceTemplates[Math.floor(Math.random() * sentenceTemplates.length)];
        currentSentenceForm = template.form;
        currentSentenceTemplate = template.text;
        const sent = template.text.replace('{v1}', currentVerb.v1);
        if (sentenceText) sentenceText.textContent = sent;
        if (sentenceArea) sentenceArea.classList.remove('hidden');
        document.getElementById('trainer-feedback-area').className = 'space-y-6';
        const correctForm = currentSentenceForm === 'v2' ? currentVerb.v2 : currentVerb.v3;
        const expectV2 = currentSentenceForm === 'v2';
        if (expectV2) {
            if (v2Row) v2Row.classList.remove('hidden');
            if (v3Row) v3Row.classList.add('hidden');
            if (v2InputWrapper) { v2InputWrapper.classList.remove('hidden'); v2InputWrapper.querySelector('input').focus(); }
        } else {
            if (v3Row) v3Row.classList.remove('hidden');
            if (v2Row) v2Row.classList.add('hidden');
            if (v3InputWrapper) { v3InputWrapper.classList.remove('hidden'); v3InputWrapper.querySelector('input').focus(); }
        }
    } else if (trainerMode === 'match') {
        transEl.textContent = getVerbTranslation(currentVerb);
        transEl.style.display = (settings.showTranslation !== false) ? '' : 'none';
        v1El.textContent = currentVerb.v1;
        if (v1Row) v1Row.classList.add('hidden');
        if (v2Row) v2Row.classList.add('hidden');
        if (v3Row) v3Row.classList.add('hidden');
        if (matchArea) matchArea.classList.remove('hidden');
        const forms = [
            { label: currentVerb.v1, form: 'v1' },
            { label: currentVerb.v2, form: 'v2' },
            { label: currentVerb.v3, form: 'v3' }
        ];
        matchForms = shuffleArray(forms);
        matchSlots = { v1: '', v2: '', v3: '' };
        matchSelectedForm = null;
        document.querySelectorAll('.match-value').forEach(el => el.textContent = '');
        const container = document.getElementById('match-forms-container');
        container.innerHTML = '';
        matchForms.forEach(f => {
            const btn = document.createElement('button');
            btn.className = 'match-form-btn px-5 py-3 rounded-xl text-lg font-bold border-2 border-slate-200 hover:border-indigo-400 transition-all bg-white text-slate-700';
            btn.textContent = f.label;
            btn.dataset.form = f.form;
            btn.dataset.label = f.label;
            btn.onclick = () => matchSelect(f.form);
            container.appendChild(btn);
        });
        document.getElementById('btn-check').classList.add('hidden');
        document.getElementById('trainer-feedback-area').className = 'space-y-6';
        document.getElementById('trainer-feedback').classList.add('hidden');
        document.getElementById('btn-next').classList.add('hidden');
        return;
    } else if (trainerMode === 'audio') {
        transEl.textContent = '';
        transEl.style.display = 'none';
        v1El.textContent = '';
        if (v1Row) v1Row.classList.add('hidden');
        if (v2Row) v2Row.classList.add('hidden');
        if (v3Row) v3Row.classList.add('hidden');
        const formKeys = ['v1', 'v2', 'v3'];
        const formIdx = Math.floor(Math.random() * 3);
        currentSentenceForm = formKeys[formIdx];
        const labels = ['V1', 'V2', 'V3'];
        document.getElementById('trainer-audio-v1').textContent = currentVerb.v1;
        document.getElementById('trainer-audio-form-label').textContent = labels[formIdx];
        if (audioArea) audioArea.classList.remove('hidden');
        document.getElementById('trainer-feedback-area').className = 'space-y-6';
        if (v1Row) { v1Row.classList.remove('hidden'); document.getElementById('input-v1').placeholder = __('trV1Placeholder'); document.getElementById('input-v1').focus(); }
        setTimeout(() => playTrainerAudio(), 300);
    }

    document.getElementById('trainer-feedback').classList.add('hidden');
    document.getElementById('btn-check').classList.remove('hidden');
    document.getElementById('btn-next').classList.add('hidden');
}

function playTrainerAudio() {
    if (!currentVerb) return;
    let text = currentVerb[currentSentenceForm];
    if (text.includes('/')) text = text.split('/')[0].trim();
    if (text.includes('(')) text = text.replace(/\(.*?\)/g, '').trim();
    speak(text, 'en-US');
    const btn = document.getElementById('btn-trainer-play');
    if (btn) {
        btn.innerHTML = '<i class="fas fa-volume-up"></i>';
        setTimeout(() => { btn.innerHTML = '<i class="fas fa-play"></i>'; }, 1000);
    }
}

function checkTrainerAnswer() {
    const isCorrect = (userInput, expectedForm) => {
        const variations = getAcceptedVariations(expectedForm);
        return variations.includes(userInput);
    };

    const successClass = "w-full px-4 py-3 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-bold text-lg";
    const errorClass = "w-full px-4 py-3 bg-red-50 border-2 border-red-500 rounded-lg text-red-700 font-bold text-lg";

    const feedback = document.getElementById('trainer-feedback');
    feedback.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');

    let allCorrect = false;

    if (trainerMode === 'normal') {
        const inputV2 = document.getElementById('input-v2');
        const inputV3 = document.getElementById('input-v3');
        const val2 = normalizeTyped(inputV2.value);
        const val3 = normalizeTyped(inputV3.value);
        const v2Correct = isCorrect(val2, currentVerb.v2);
        const v3Correct = isCorrect(val3, currentVerb.v3);

        inputV2.className = v2Correct ? successClass : errorClass;
        inputV3.className = v3Correct ? successClass : errorClass;
        inputV2.disabled = true;
        inputV3.disabled = true;

        if (v2Correct && v3Correct) {
            allCorrect = true;
            playSound('correct');
            feedback.classList.add('bg-green-100', 'text-green-800');
            feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('trCorrect');
        } else {
            trainerMistakes++;
            playSound('wrong');
            if (!v2Correct) recordMistake(currentVerb, 'v2');
            if (!v3Correct) recordMistake(currentVerb, 'v3');
            feedback.classList.add('bg-red-100', 'text-red-800');
            feedback.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('trError') + ' <b>' + currentVerb.v2 + '</b> ' + __('trOf') + ' <b>' + currentVerb.v3 + '</b>';
            if (!v2Correct) inputV2.value = currentVerb.v2;
            if (!v3Correct) inputV3.value = currentVerb.v3;
        }
    } else if (trainerMode === 'reverse-v1') {
        const inputV1 = document.getElementById('input-v1');
        const val1 = normalizeTyped(inputV1.value);
        const v1Correct = isCorrect(val1, currentVerb.v1);

        inputV1.className = v1Correct ? successClass : errorClass;
        inputV1.disabled = true;

        if (v1Correct) {
            allCorrect = true;
            playSound('correct');
            feedback.classList.add('bg-green-100', 'text-green-800');
            feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('trCorrect');
        } else {
            trainerMistakes++;
            playSound('wrong');
            recordMistake(currentVerb, 'v1');
            feedback.classList.add('bg-red-100', 'text-red-800');
            feedback.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('trError') + ' <b>' + currentVerb.v1 + '</b>';
            inputV1.value = currentVerb.v1;
        }
    } else if (trainerMode === 'reverse-forms') {
        const inputV1 = document.getElementById('input-v1');
        const val1 = normalizeTyped(inputV1.value);
        const v1Correct = isCorrect(val1, currentVerb.v1);

        inputV1.className = v1Correct ? successClass : errorClass;
        inputV1.disabled = true;

        if (v1Correct) {
            allCorrect = true;
            playSound('correct');
            feedback.classList.add('bg-green-100', 'text-green-800');
            feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('trCorrect');
        } else {
            trainerMistakes++;
            playSound('wrong');
            recordMistake(currentVerb, 'v1');
            feedback.classList.add('bg-red-100', 'text-red-800');
            feedback.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('trError') + ' <b>' + currentVerb.v1 + '</b>';
            inputV1.value = currentVerb.v1;
        }
    } else if (trainerMode === 'sentences') {
        const expectedForm = currentSentenceForm === 'v2' ? currentVerb.v2 : currentVerb.v3;
        const inputField = currentSentenceForm === 'v2' ? document.getElementById('input-v2') : document.getElementById('input-v3');
        const val = normalizeTyped(inputField.value);
        const correct = isCorrect(val, expectedForm);

        inputField.className = correct ? successClass : errorClass;
        inputField.disabled = true;

        if (correct) {
            allCorrect = true;
            playSound('correct');
            feedback.classList.add('bg-green-100', 'text-green-800');
            feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('trCorrect');
        } else {
            trainerMistakes++;
            playSound('wrong');
            recordMistake(currentVerb, currentSentenceForm);
            feedback.classList.add('bg-red-100', 'text-red-800');
            feedback.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('trError') + ' <b>' + expectedForm + '</b>';
            const sent = currentSentenceTemplate.replace('{v1}', currentVerb.v1);
            feedback.innerHTML += '<br><span class="text-sm">' + __('trSentenceContext') + ': ' + sent.replace('___', '<b>' + expectedForm + '</b>') + '</span>';
            inputField.value = expectedForm;
        }
    } else if (trainerMode === 'audio') {
        const inputV1 = document.getElementById('input-v1');
        const val = normalizeTyped(inputV1.value);
        let expectedForm = '';
        if (currentSentenceForm === 'v1') expectedForm = currentVerb.v1;
        else if (currentSentenceForm === 'v2') expectedForm = currentVerb.v2;
        else expectedForm = currentVerb.v3;
        const correct = isCorrect(val, expectedForm);

        inputV1.className = correct ? successClass : errorClass;
        inputV1.disabled = true;

        if (correct) {
            allCorrect = true;
            playSound('correct');
            feedback.classList.add('bg-green-100', 'text-green-800');
            feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('trCorrect');
        } else {
            trainerMistakes++;
            playSound('wrong');
            recordMistake(currentVerb, currentSentenceForm);
            feedback.classList.add('bg-red-100', 'text-red-800');
            feedback.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('trError') + ' <b>' + expectedForm + '</b>';
            inputV1.value = expectedForm;
        }
    } else if (trainerMode === 'match') {
        const getSlotValue = s => document.querySelector(`#match-slot-${s} .match-value`)?.textContent || '';
        const v1ok = getAcceptedVariations(currentVerb.v1).some(v => v === normalizeTyped(getSlotValue('v1')));
        const v2ok = getAcceptedVariations(currentVerb.v2).some(v => v === normalizeTyped(getSlotValue('v2')));
        const v3ok = getAcceptedVariations(currentVerb.v3).some(v => v === normalizeTyped(getSlotValue('v3')));
        const allOk = v1ok && v2ok && v3ok;

        ['v1', 'v2', 'v3'].forEach(slot => {
            const el = document.getElementById(`match-slot-${slot}`);
            if (el) {
                const ok = getAcceptedVariations(currentVerb[slot]).some(v => v === normalizeTyped(getSlotValue(slot)));
                el.style.borderColor = ok ? '#10b981' : '#ef4444';
                el.style.backgroundColor = ok ? '#ecfdf5' : '#fef2f2';
            }
        });

        if (allOk) {
            allCorrect = true;
            playSound('correct');
            feedback.classList.add('bg-green-100', 'text-green-800');
            feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('trCorrect');
        } else {
            trainerMistakes++;
            playSound('wrong');
            feedback.classList.add('bg-red-100', 'text-red-800');
            feedback.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('trError') + ' V1: <b>' + currentVerb.v1 + '</b>, V2: <b>' + currentVerb.v2 + '</b>, V3: <b>' + currentVerb.v3 + '</b>';
            const correctMap = { v1: currentVerb.v1, v2: currentVerb.v2, v3: currentVerb.v3 };
            Object.keys(correctMap).forEach(slot => {
                const slotEl = document.querySelector(`#match-slot-${slot} .match-value`);
                if (slotEl) slotEl.textContent = correctMap[slot];
            });
        }
        document.getElementById('match-forms-container').innerHTML = '';
        document.querySelectorAll('.match-form-btn').forEach(b => b.disabled = true);
    }

    if (allCorrect) trainerScore++;
    markVerbSeen(currentVerb.v1);
    answerFeedback(allCorrect, document.getElementById('trainer-feedback'));

    updateTrainerScoreboard();
    document.getElementById('btn-check').classList.add('hidden');
    document.getElementById('btn-next').classList.remove('hidden');
    document.getElementById('btn-next').focus();
    showConfidenceButtons(currentVerb.v1);
}

function nextTrainerQuestion() {
    currentQuestionIndex++;
    if (isMarathon) {
        trainerTotalAnswered = Math.max(trainerTotalAnswered, currentQuestionIndex);
        if (currentQuestionIndex >= trainerQueue.length) {
            trainerQueue = shuffleArray(getFilteredVerbs());
            currentQuestionIndex = 0;
        }
        loadTrainerQuestion();
    } else {
        const questionCount = getQuestionCount();
        if (currentQuestionIndex < questionCount) {
            loadTrainerQuestion();
        } else {
            showTrainerResults();
        }
    }
}

function showTrainerResults() {
    document.getElementById('trainer-active').classList.add('hidden');
    document.getElementById('trainer-results').classList.remove('hidden');

    document.getElementById('result-correct').textContent = trainerScore;
    document.getElementById('result-wrong').textContent = trainerMistakes;
    const trainerTime = document.getElementById('result-time');
    if (trainerTime) trainerTime.textContent = getSessionDuration();
    stopSessionTimer();

    document.getElementById('btn-marathon-finish').classList.add('hidden');

    if (isMarathon) {
        const totalDone = Math.max(trainerTotalAnswered, currentQuestionIndex);
        document.getElementById('marathon-result-total').classList.remove('hidden');
        document.getElementById('marathon-total-verbs').textContent = totalDone;
    } else {
        document.getElementById('marathon-result-total').classList.add('hidden');
    }

    const reviewBtn = document.getElementById('btn-trainer-review');
    if (reviewBtn) {
        reviewBtn.classList.toggle('hidden', trainerMistakes === 0);
    }

    trackSessionEnd(trainerScore, trainerScore + trainerMistakes);
    practiceMode = 'normal';
}

// ================= ФИНАЛЬНЫЙ ЭКЗАМЕН =================
let examQueue = [];
let examIdx = 0;
let examScore = 0;
let examMistakes = 0;
let examCurrentVerb = null;
let examQuestionType = 'forms';
let examWrongList = [];
let examGroup = 'all';
let examCount = '20';

function setExamGroup(group) {
    examGroup = group;
    document.querySelectorAll('#view-exam .trainer-group-btn').forEach(btn => {
        btn.className = "trainer-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50";
    });
    const btn = document.getElementById('exam-group-' + group);
    if (btn) btn.className = "trainer-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-indigo-600 text-white shadow-sm";
}

function setExamCount(count) {
    examCount = count;
    document.querySelectorAll('#view-exam .tr-mode-btn').forEach(btn => {
        btn.className = "tr-mode-btn px-4 py-2 rounded-full text-sm font-semibold transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50";
    });
    const btn = document.getElementById('exam-count-' + count);
    if (btn) btn.className = "tr-mode-btn px-4 py-2 rounded-full text-sm font-semibold transition-colors bg-indigo-600 text-white shadow-md";
}

function getExamVerbs() {
    let verbs = getFullVerbList();
    const grp = parseInt(examGroup);
    if (!isNaN(grp)) {
        verbs = verbs.filter(v => classifyVerb(v) === grp);
    }
    let list = shuffleArray(verbs);
    if (examCount === 'all') return list;
    const count = Math.min(parseInt(examCount) || 20, list.length);
    return list.slice(0, count);
}

function examQuestionTypes() {
    return ['forms', 'forms', 'v1', 'translation', 'v2', 'v3'];
}

function loadExamQuestion() {
    examCurrentVerb = examQueue[examIdx];
    const typeEl = document.getElementById('exam-type-label');
    const wordEl = document.getElementById('exam-word');
    const transEl = document.getElementById('exam-translation');
    const inputArea = document.getElementById('exam-input-area');
    const mcqArea = document.getElementById('exam-mcq-area');
    const v2Row = document.getElementById('exam-v2-row');
    const v3Row = document.getElementById('exam-v3-row');
    const inputV2 = document.getElementById('exam-input-v2');
    const inputV3 = document.getElementById('exam-input-v3');

    examQuestionType = examQuestionTypes()[examIdx % examQuestionTypes().length];
    inputV2.value = '';
    inputV3.value = '';
    [inputV2, inputV3].forEach(inp => {
        inp.className = "w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-lg";
        inp.disabled = false;
    });

    inputArea.classList.remove('hidden');
    mcqArea.classList.add('hidden');

    if (examQuestionType === 'forms') {
        typeEl.textContent = __('examTypeForms');
        transEl.textContent = getVerbTranslation(examCurrentVerb);
        wordEl.textContent = examCurrentVerb.v1;
        v2Row.classList.remove('hidden');
        v3Row.classList.remove('hidden');
        inputV2.focus();
    } else if (examQuestionType === 'v1') {
        typeEl.textContent = __('examTypeV1');
        transEl.textContent = getVerbTranslation(examCurrentVerb);
        wordEl.textContent = examCurrentVerb.v2 + ' / ' + examCurrentVerb.v3;
        v2Row.classList.add('hidden');
        v3Row.classList.add('hidden');
        showExamMCQ(examCurrentVerb.v1, [examCurrentVerb.v1]);
        inputArea.classList.add('hidden');
        mcqArea.classList.remove('hidden');
    } else if (examQuestionType === 'v2') {
        typeEl.textContent = __('examTypeV2');
        transEl.textContent = getVerbTranslation(examCurrentVerb);
        wordEl.textContent = examCurrentVerb.v1;
        v2Row.classList.add('hidden');
        v3Row.classList.add('hidden');
        showExamMCQ(examCurrentVerb.v2, [examCurrentVerb.v2]);
        inputArea.classList.add('hidden');
        mcqArea.classList.remove('hidden');
    } else if (examQuestionType === 'v3') {
        typeEl.textContent = __('examTypeV3');
        transEl.textContent = getVerbTranslation(examCurrentVerb);
        wordEl.textContent = examCurrentVerb.v1;
        v2Row.classList.add('hidden');
        v3Row.classList.add('hidden');
        showExamMCQ(examCurrentVerb.v3, [examCurrentVerb.v3]);
        inputArea.classList.add('hidden');
        mcqArea.classList.remove('hidden');
    } else if (examQuestionType === 'translation') {
        typeEl.textContent = __('examTypeTranslation');
        transEl.textContent = '';
        wordEl.textContent = examCurrentVerb.v1;
        v2Row.classList.add('hidden');
        v3Row.classList.add('hidden');
        showExamMCQ(getVerbTranslation(examCurrentVerb), [getVerbTranslation(examCurrentVerb)]);
        inputArea.classList.add('hidden');
        mcqArea.classList.remove('hidden');
    }

    document.getElementById('exam-feedback').classList.add('hidden');
    document.getElementById('btn-exam-check').classList.remove('hidden');
    document.getElementById('btn-exam-next').classList.add('hidden');
}

function showExamMCQ(correctAnswer, correctArr) {
    const container = document.getElementById('exam-options');
    container.innerHTML = '';
    const wrongOptions = new Set();
    const allVerbs = getFullVerbList();
    while (wrongOptions.size < 3) {
        const rand = allVerbs[Math.floor(Math.random() * allVerbs.length)];
        let val;
        if (examQuestionType === 'translation') {
            val = getVerbTranslation(rand);
        } else {
            val = rand[examQuestionType];
        }
        if (!val) continue;
        if (!correctArr.includes(val) && !wrongOptions.has(val)) {
            wrongOptions.add(val);
        }
    }
    const options = shuffleArray([correctAnswer, ...Array.from(wrongOptions)]);
    options.forEach(function(opt) {
        const btn = document.createElement('button');
        btn.className = 'px-4 py-3 rounded-xl text-base font-semibold border-2 border-slate-200 hover:border-indigo-400 transition-all bg-white text-slate-700 text-left';
        btn.textContent = opt;
        btn.onclick = function() {
            document.querySelectorAll('#exam-options button').forEach(b => {
                b.className = 'px-4 py-3 rounded-xl text-base font-semibold border-2 border-slate-200 bg-white text-slate-700 text-left';
            });
            btn.className = 'px-4 py-3 rounded-xl text-base font-semibold border-2 border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-300 text-left';
            btn.dataset.selected = 'true';
        };
        container.appendChild(btn);
    });
}

function checkExamAnswer() {
    const isCorrect = (userInput, expectedForm) => {
        const variations = getAcceptedVariations(expectedForm);
        return variations.includes(normalizeTyped(userInput));
    };

    const successClass = "w-full px-4 py-3 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-bold text-lg";
    const errorClass = "w-full px-4 py-3 bg-red-50 border-2 border-red-500 rounded-lg text-red-700 font-bold text-lg";

    let userCorrect = false;
    let expectedText = '';

    if (examQuestionType === 'forms') {
        const inputV2 = document.getElementById('exam-input-v2');
        const inputV3 = document.getElementById('exam-input-v3');
        const v2Ok = isCorrect(inputV2.value, examCurrentVerb.v2);
        const v3Ok = isCorrect(inputV3.value, examCurrentVerb.v3);
        userCorrect = v2Ok && v3Ok;
        expectedText = examCurrentVerb.v2 + ' / ' + examCurrentVerb.v3;
        inputV2.className = v2Ok ? successClass : errorClass;
        inputV3.className = v3Ok ? successClass : errorClass;
        inputV2.value = v2Ok ? inputV2.value.trim() : examCurrentVerb.v2;
        inputV3.value = v3Ok ? inputV3.value.trim() : examCurrentVerb.v3;
        inputV2.disabled = true;
        inputV3.disabled = true;
        if (!v2Ok) recordMistake(examCurrentVerb, 'v2');
        if (!v3Ok) recordMistake(examCurrentVerb, 'v3');
    } else {
        const selectedBtn = document.querySelector('#exam-options button[data-selected="true"]');
        if (examQuestionType === 'v1') {
            expectedText = examCurrentVerb.v1;
            userCorrect = selectedBtn !== null && selectedBtn.textContent.trim() === examCurrentVerb.v1;
        } else if (examQuestionType === 'v2') {
            expectedText = examCurrentVerb.v2;
            userCorrect = selectedBtn !== null && selectedBtn.textContent.trim() === examCurrentVerb.v2;
        } else if (examQuestionType === 'v3') {
            expectedText = examCurrentVerb.v3;
            userCorrect = selectedBtn !== null && selectedBtn.textContent.trim() === examCurrentVerb.v3;
        } else if (examQuestionType === 'translation') {
            expectedText = getVerbTranslation(examCurrentVerb);
            userCorrect = selectedBtn !== null && selectedBtn.textContent.trim() === expectedText;
        }
        if (!userCorrect) {
            recordMistake(examCurrentVerb, examQuestionType === 'translation' ? 'spelling' : examQuestionType);
        }
    }

    if (userCorrect) {
        examScore++;
    } else {
        examMistakes++;
        examWrongList.push({ verb: examCurrentVerb, type: examQuestionType, expected: expectedText });
    }

    document.getElementById('exam-score').textContent = examScore;
    document.getElementById('exam-mistakes').textContent = examMistakes;
    document.getElementById('exam-feedback').textContent = userCorrect ? __('letCorrect') : __('letWrong') + ': ' + expectedText;
    document.getElementById('exam-feedback').className = 'mt-6 p-4 rounded-lg text-center font-medium ' + (userCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700');
    document.getElementById('exam-feedback').classList.remove('hidden');
    document.getElementById('btn-exam-check').classList.add('hidden');
    document.getElementById('btn-exam-next').classList.remove('hidden');
}

function nextExamQuestion() {
    examIdx++;
    if (examIdx < examQueue.length) {
        updateExamProgress();
        loadExamQuestion();
    } else {
        showExamResults();
    }
}

function updateExamProgress() {
    const total = examQueue.length;
    const progress = Math.round(((examIdx + 1) / total) * 100);
    document.getElementById('exam-progress-bar').style.width = progress + '%';
    document.getElementById('exam-progress').textContent = __('trQuestion') + ' ' + (examIdx + 1) + ' ' + __('trOf') + ' ' + total;
}

function calcExamGrade(percent) {
    if (percent === 100) return { grade: 'A+', label: __('examGradePerfect') };
    if (percent >= 90) return { grade: 'A', label: __('examGradeExcellent') };
    if (percent >= 75) return { grade: 'B', label: __('examGradeGood') };
    if (percent >= 60) return { grade: 'C', label: __('examGradeFair') };
    return { grade: 'D', label: __('examGradePoor') };
}

function showExamResults() {
    document.getElementById('exam-active').classList.add('hidden');
    document.getElementById('exam-results').classList.remove('hidden');

    document.getElementById('exam-result-correct').textContent = examScore;
    document.getElementById('exam-result-wrong').textContent = examMistakes;
    document.getElementById('exam-result-time').textContent = getSessionDuration();
    stopSessionTimer();

    const total = examQueue.length;
    const percent = total > 0 ? Math.round((examScore / total) * 100) : 0;
    const grade = calcExamGrade(percent);
    document.getElementById('exam-grade').textContent = grade.grade;
    document.getElementById('exam-grade-label').textContent = grade.label;

    const reviewBtn = document.getElementById('btn-exam-review');
    reviewBtn.classList.toggle('hidden', examWrongList.length === 0);

    const emptyEl = document.getElementById('exam-review-empty');
    const listEl = document.getElementById('exam-review-list');
    emptyEl.classList.toggle('hidden', examWrongList.length > 0);
    listEl.innerHTML = '';
    examWrongList.forEach(function(item) {
        const row = document.createElement('div');
        row.className = 'flex justify-between items-center gap-3 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-sm';
        row.innerHTML = '<span class="font-semibold text-slate-700">' + item.verb.v1 + '</span><span class="text-slate-500">' + (item.expected || '') + '</span>';
        listEl.appendChild(row);
    });

    trackSessionEnd(examScore, total);
}

function startExam() {
    examQueue = getExamVerbs();
    if (examQueue.length === 0) return;
    examIdx = 0;
    examScore = 0;
    examMistakes = 0;
    examWrongList = [];

    document.getElementById('exam-start').classList.add('hidden');
    document.getElementById('exam-results').classList.add('hidden');
    document.getElementById('exam-active').classList.remove('hidden');

    updateExamProgress();
    startSessionTimer('exam-timer');
    loadExamQuestion();
}

function resetExam() {
    document.getElementById('exam-results').classList.add('hidden');
    document.getElementById('exam-start').classList.remove('hidden');
}

// ================= РАБОТА НАД ОШИБКАМИ =================
let mistakesMode = 'forms';
let mistakesQueue = [];
let mistakesLastQueue = [];
let mistakesIdx = 0;
let mistakesScore = 0;
let mistakesTotal = 0;
let mistakesCurrentVerb = null;
let mistakesCurrentWord = "";
let mistakesCurrentSchema = [];
let mistakesQuizAnswer = "";

function openMistakesTab() {
    const stats = getMistakeStats();
    const startScreen = document.getElementById('mistakes-start');
    const emptyMsg = document.getElementById('mistakes-empty');
    const statsDiv = document.getElementById('mistakes-stats');
    const countText = document.getElementById('mistakes-count-text');

    if (!stats || stats.total === 0) {
        emptyMsg.classList.remove('hidden');
        statsDiv.classList.add('hidden');
        document.getElementById('btn-mistakes-forms').disabled = true;
        document.getElementById('btn-mistakes-letters').disabled = true;
        document.getElementById('btn-mistakes-quiz').disabled = true;
        document.getElementById('btn-mistakes-forms').classList.add('opacity-50', 'cursor-not-allowed');
        document.getElementById('btn-mistakes-letters').classList.add('opacity-50', 'cursor-not-allowed');
        document.getElementById('btn-mistakes-quiz').classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        emptyMsg.classList.add('hidden');
        statsDiv.classList.remove('hidden');
        countText.textContent = __('misProgressWords') + ' ' + mistakesList.length + ' (' + __('misProgressTotal') + ' ' + stats.total + ' ' + __('misProgressErrors') + ')';
        document.getElementById('btn-mistakes-forms').disabled = false;
        document.getElementById('btn-mistakes-letters').disabled = false;
        document.getElementById('btn-mistakes-quiz').disabled = false;
        document.getElementById('btn-mistakes-forms').classList.remove('opacity-50', 'cursor-not-allowed');
        document.getElementById('btn-mistakes-letters').classList.remove('opacity-50', 'cursor-not-allowed');
        document.getElementById('btn-mistakes-quiz').classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

function startMistakesMode(mode) {
    mistakesMode = mode;
    const filtered = settings.smartOrder !== false ? getSmartMistakesList() : shuffleArray([...mistakesList]);
    if (filtered.length === 0) return;

    mistakesQueue = filtered;
    mistakesLastQueue = filtered;
    mistakesIdx = 0;
    mistakesScore = 0;
    mistakesTotal = filtered.length;

    document.getElementById('mistakes-start').classList.add('hidden');
    document.getElementById('mistakes-results').classList.add('hidden');
    document.getElementById('mistakes-active').classList.remove('hidden');

    document.getElementById('mistakes-forms-mode').classList.add('hidden');
    document.getElementById('mistakes-letters-mode').classList.add('hidden');
    document.getElementById('mistakes-quiz-mode').classList.add('hidden');

    if (mode === 'forms') {
        document.getElementById('mistakes-forms-mode').classList.remove('hidden');
    } else if (mode === 'letters') {
        document.getElementById('mistakes-letters-mode').classList.remove('hidden');
    } else if (mode === 'quiz') {
        document.getElementById('mistakes-quiz-mode').classList.remove('hidden');
    }

    updateMistakesScoreboard();
    startSessionTimer('mistakes-timer');
    loadMistakesQuestion();
}

function exitMistakesMode() {
    document.getElementById('mistakes-active').classList.add('hidden');
    document.getElementById('mistakes-results').classList.add('hidden');
    document.getElementById('mistakes-start').classList.remove('hidden');
    openMistakesTab();
}

function repeatMistakesMode() {
    if (mistakesLastQueue.length === 0) {
        exitMistakesMode();
        return;
    }
    mistakesQueue = mistakesLastQueue;
    mistakesIdx = 0;
    mistakesScore = 0;
    mistakesTotal = mistakesLastQueue.length;

    document.getElementById('mistakes-results').classList.add('hidden');
    document.getElementById('mistakes-active').classList.remove('hidden');

    document.getElementById('mistakes-forms-mode').classList.add('hidden');
    document.getElementById('mistakes-letters-mode').classList.add('hidden');
    document.getElementById('mistakes-quiz-mode').classList.add('hidden');
    if (mistakesMode === 'forms') {
        document.getElementById('mistakes-forms-mode').classList.remove('hidden');
    } else if (mistakesMode === 'letters') {
        document.getElementById('mistakes-letters-mode').classList.remove('hidden');
    } else if (mistakesMode === 'quiz') {
        document.getElementById('mistakes-quiz-mode').classList.remove('hidden');
    }

    updateMistakesScoreboard();
    startSessionTimer('mistakes-timer');
    loadMistakesQuestion();
}

function updateMistakesScoreboard() {
    const total = mistakesTotal;
    document.getElementById('mistakes-score').textContent = mistakesScore;
    document.getElementById('mistakes-progress').textContent = __('trQuestion') + ' ' + (mistakesIdx + 1) + ' ' + __('trOf') + ' ' + total;
    const progress = Math.round(((mistakesIdx + 1) / total) * 100);
    document.getElementById('mistakes-progress-bar').style.width = progress + '%';
}

function loadMistakesQuestion() {
    mistakesCurrentVerb = mistakesQueue[mistakesIdx];

    if (mistakesMode === 'forms') {
        loadMistakesFormsQuestion();
    } else if (mistakesMode === 'letters') {
        loadMistakesLettersQuestion();
    } else if (mistakesMode === 'quiz') {
        loadMistakesQuizQuestion();
    }

    updateMistakesScoreboard();
}

function loadMistakesFormsQuestion() {
    const tr = document.getElementById('mistakes-translation');
    tr.textContent = getVerbTranslation(mistakesCurrentVerb);
    tr.style.display = (settings.showTranslation !== false) ? '' : 'none';
    document.getElementById('mistakes-v1').textContent = mistakesCurrentVerb.v1;

    const inpV2 = document.getElementById('mistakes-input-v2');
    const inpV3 = document.getElementById('mistakes-input-v3');
    inpV2.value = '';
    inpV3.value = '';
    inpV2.className = "w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-lg";
    inpV3.className = "w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-lg";
    inpV2.disabled = false;
    inpV3.disabled = false;

    document.getElementById('mistakes-forms-feedback').classList.add('hidden');
    document.getElementById('btn-mistakes-forms-check').classList.remove('hidden');
    document.getElementById('btn-mistakes-forms-next').classList.add('hidden');
    inpV2.focus();
}

function checkMistakesFormsAnswer() {
    const inpV2 = document.getElementById('mistakes-input-v2');
    const inpV3 = document.getElementById('mistakes-input-v3');
    const val2 = normalizeTyped(inpV2.value);
    const val3 = normalizeTyped(inpV3.value);

    const isCorrect = (input, expected) => {
        return getAcceptedVariations(expected).includes(input);
    };

    const v2ok = isCorrect(val2, mistakesCurrentVerb.v2);
    const v3ok = isCorrect(val3, mistakesCurrentVerb.v3);

    const successClass = "w-full px-4 py-3 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-bold text-lg";
    const errorClass = "w-full px-4 py-3 bg-red-50 border-2 border-red-500 rounded-lg text-red-700 font-bold text-lg";

    inpV2.className = v2ok ? successClass : errorClass;
    inpV3.className = v3ok ? successClass : errorClass;
    inpV2.disabled = true;
    inpV3.disabled = true;

    const fb = document.getElementById('mistakes-forms-feedback');
    fb.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');

    if (v2ok && v3ok) {
        mistakesScore++;
        playSound('correct');
        fb.classList.add('bg-green-100', 'text-green-800');
        fb.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('misCorrectFeedback');
        clearMistake(mistakesCurrentVerb.v1);
    } else {
        playSound('wrong');
        fb.classList.add('bg-red-100', 'text-red-800');
        let msg = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('misWrongFeedback') + ' ';
        if (!v2ok) { msg += '<b>' + mistakesCurrentVerb.v2 + '</b>'; inpV2.value = mistakesCurrentVerb.v2; }
        if (!v2ok && !v3ok) msg += ' ' + __('trOf') + ' ';
        if (!v3ok) { msg += '<b>' + mistakesCurrentVerb.v3 + '</b>'; inpV3.value = mistakesCurrentVerb.v3; }
        fb.innerHTML = msg;
    }
    markVerbSeen(mistakesCurrentVerb.v1);

    document.getElementById('btn-mistakes-forms-check').classList.add('hidden');
    document.getElementById('btn-mistakes-forms-next').classList.remove('hidden');
    document.getElementById('btn-mistakes-forms-next').focus();
    updateMistakesScoreboard();
}

function loadMistakesLettersQuestion() {
    const verb = mistakesCurrentVerb;
    document.getElementById('mistakes-letters-translation').textContent = getVerbTranslation(verb);

    const activeForms = getActiveForms();
    const fc = activeForms.length > 0 ? activeForms[Math.floor(Math.random() * activeForms.length)] : 0;
    const labels = ["V1 (Infinitive)", "V2 (Past Simple)", "V3 (Past Participle)"];
    document.getElementById('mistakes-letters-form-label').textContent = labels[fc];

    let word = "";
    if (fc === 0) word = verb.v1;
    else if (fc === 1) word = verb.v2;
    else word = verb.v3;

    if (word.includes('/')) word = word.split('/')[0].trim();
    if (word.includes('(')) word = word.replace(/\(.*?\)/g, '').trim();

    mistakesCurrentWord = word.toLowerCase();
    mistakesCurrentSchema = [];
    const len = mistakesCurrentWord.length;
    let hideCount = Math.max(1, Math.floor(len * 0.5));
    const hiddenIndices = new Set();
    while (hiddenIndices.size < hideCount) {
        hiddenIndices.add(Math.floor(Math.random() * len));
    }
    for (let i = 0; i < len; i++) {
        mistakesCurrentSchema.push({
            originalChar: mistakesCurrentWord[i],
            isHidden: hiddenIndices.has(i),
            enteredChar: ""
        });
    }

    const container = document.getElementById('mistakes-letters-word-container');
    container.innerHTML = '';
    mistakesCurrentSchema.forEach((item, idx) => {
        if (!item.isHidden) {
            const el = document.createElement('div');
            el.className = "w-12 h-14 bg-slate-100 border border-slate-300 rounded-xl flex items-center justify-center text-2xl font-bold text-slate-700 shadow-sm";
            el.textContent = item.originalChar;
            container.appendChild(el);
        } else {
            const input = document.createElement('input');
            input.type = "text";
            input.maxLength = 1;
            input.autocomplete = "off";
            input.id = `mist-let-${idx}`;
            input.className = "letter-input w-12 h-14 border-2 border-purple-400 focus:border-purple-600 bg-purple-50/50 rounded-xl text-center text-2xl font-bold text-purple-700 outline-none transition-all shadow-sm";
            input.addEventListener('input', (e) => {
                item.enteredChar = e.target.value.toLowerCase();
                if (e.target.value.length === 1) {
                    for (let j = idx + 1; j < mistakesCurrentSchema.length; j++) {
                        if (mistakesCurrentSchema[j].isHidden) {
                            document.getElementById(`mist-let-${j}`)?.focus();
                            return;
                        }
                    }
                }
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value === '') {
                    for (let j = idx - 1; j >= 0; j--) {
                        if (mistakesCurrentSchema[j].isHidden) {
                            document.getElementById(`mist-let-${j}`)?.focus();
                            return;
                        }
                    }
                }
            });
            container.appendChild(input);
        }
    });

    const firstEmpty = mistakesCurrentSchema.findIndex(i => i.isHidden);
    if (firstEmpty !== -1) document.getElementById(`mist-let-${firstEmpty}`)?.focus();

    document.getElementById('mistakes-letters-feedback').classList.add('hidden');
    document.getElementById('mistakes-letters-verb-card').classList.add('hidden');
    document.getElementById('btn-mistakes-letters-check').classList.remove('hidden');
    document.getElementById('btn-mistakes-letters-next').classList.add('hidden');
}

function checkMistakesLettersAnswer() {
    let allOk = true;
    mistakesCurrentSchema.forEach((item, idx) => {
        if (item.isHidden) {
            const el = document.getElementById(`mist-let-${idx}`);
            const val = normalizeTyped(el.value);
            item.enteredChar = val;
            el.disabled = true;
            if (val === item.originalChar) {
                el.className = "w-12 h-14 border-2 border-green-500 bg-green-50 text-green-700 rounded-xl text-center text-2xl font-bold outline-none shadow-sm";
            } else {
                el.className = "w-12 h-14 border-2 border-red-500 bg-red-50 text-red-600 rounded-xl text-center text-2xl font-bold outline-none shadow-sm";
                el.value = item.originalChar;
                allOk = false;
            }
        }
    });

    const fb = document.getElementById('mistakes-letters-feedback');
    fb.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');

    if (allOk) {
        mistakesScore++;
        playSound('correct');
        fb.classList.add('bg-green-100', 'text-green-800');
        fb.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('misCorrectShort');
        clearMistake(mistakesCurrentVerb.v1);
    } else {
        playSound('wrong');
        fb.classList.add('bg-red-100', 'text-red-800');
        fb.innerHTML = '<i class="fas fa-times-circle mr-2"></i> ' + __('misLetterError') + ' "' + document.getElementById('mistakes-letters-form-label').textContent + '". ' + __('misWrongFeedback') + ' <b>' + mistakesCurrentWord + '</b>';
    }
    markVerbSeen(mistakesCurrentVerb.v1);

    const verb = mistakesCurrentVerb;
    document.getElementById('mistakes-letters-card-v1').textContent = verb.v1;
    document.getElementById('mistakes-letters-card-v2').textContent = verb.v2;
    document.getElementById('mistakes-letters-card-v3').textContent = verb.v3;
    document.getElementById('mistakes-letters-card-translation').textContent = getVerbTranslation(verb);
    document.getElementById('mistakes-letters-verb-card').classList.remove('hidden');

    document.getElementById('btn-mistakes-letters-check').classList.add('hidden');
    document.getElementById('btn-mistakes-letters-next').classList.remove('hidden');
    updateMistakesScoreboard();
}

function loadMistakesQuizQuestion() {
    const verb = mistakesCurrentVerb;
    document.getElementById('mistakes-quiz-v1').textContent = verb.v1;

    const formIdx = Math.floor(Math.random() * 3);
    const formNames = ["V2 (Past Simple)", "V3 (Past Participle)", "V1 (Infinitive)"];
    const formKeys = ["v2", "v3", "v1"];
    document.getElementById('mistakes-quiz-form-name').textContent = formNames[formIdx];

    let correctAnswer = verb[formKeys[formIdx]];
    if (correctAnswer.includes('/')) correctAnswer = correctAnswer.split('/')[0].trim();
    if (correctAnswer.includes('(')) correctAnswer = correctAnswer.replace(/\(.*?\)/g, '').trim();
    mistakesQuizAnswer = correctAnswer.toLowerCase();

    let options = [correctAnswer];
    const pool = shuffleArray(getFullVerbList()).filter(v => v.v1 !== verb.v1);
    while (options.length < 4 && pool.length > 0) {
        const pick = pool.pop();
        let wrong = pick[formKeys[formIdx]];
        if (wrong.includes('/')) wrong = wrong.split('/')[0].trim();
        if (wrong.includes('(')) wrong = wrong.replace(/\(.*?\)/g, '').trim();
        if (!options.includes(wrong)) options.push(wrong);
    }
    options = shuffleArray(options);

    const container = document.getElementById('mistakes-quiz-options');
    container.innerHTML = '';
    options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left px-5 py-4 border-2 border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all font-medium text-lg flex items-center";
        btn.innerHTML = `<span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 mr-3">${i + 1}</span> ${opt}`;
        btn.dataset.answer = opt;
        btn.onclick = () => checkMistakesQuizAnswer(btn, opt);
        container.appendChild(btn);
    });

    document.getElementById('mistakes-quiz-feedback').classList.add('hidden');
    document.getElementById('btn-mistakes-quiz-next').classList.add('hidden');
}

function checkMistakesQuizAnswer(btn, selected) {
    const allBtns = document.querySelectorAll('#mistakes-quiz-options button');
    allBtns.forEach(b => b.disabled = true);

    const fb = document.getElementById('mistakes-quiz-feedback');
    fb.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');

    if (selected.toLowerCase() === mistakesQuizAnswer) {
        mistakesScore++;
        playSound('correct');
        btn.className = "w-full text-left px-5 py-4 border-2 border-green-500 bg-green-50 rounded-xl font-bold text-lg flex items-center";
        btn.innerHTML += ' <i class="fas fa-check text-green-600 ml-auto"></i>';
        fb.classList.add('bg-green-100', 'text-green-800');
        fb.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('misCorrectShort');
        clearMistake(mistakesCurrentVerb.v1);
    } else {
        playSound('wrong');
        btn.className = "w-full text-left px-5 py-4 border-2 border-red-500 bg-red-50 rounded-xl font-bold text-lg flex items-center";
        btn.innerHTML += ' <i class="fas fa-times text-red-600 ml-auto"></i>';
        fb.classList.add('bg-red-100', 'text-red-800');
        fb.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('misQuizWrong') + ' <b>' + mistakesQuizAnswer + '</b>';

        allBtns.forEach(b => {
            if (b.dataset.answer && b.dataset.answer.toLowerCase() === mistakesQuizAnswer) {
                b.className = "w-full text-left px-5 py-4 border-2 border-green-500 bg-green-50 rounded-xl font-bold text-lg flex items-center";
                b.innerHTML += ' <i class="fas fa-check text-green-600 ml-auto"></i>';
            }
        });
    }
    markVerbSeen(mistakesCurrentVerb.v1);

    document.getElementById('btn-mistakes-quiz-next').classList.remove('hidden');
    document.getElementById('btn-mistakes-quiz-next').focus();
    updateMistakesScoreboard();
}

function nextMistakesQuestion() {
    mistakesIdx++;
    if (mistakesIdx < mistakesTotal) {
        loadMistakesQuestion();
    } else {
        showMistakesResults();
    }
}

function showMistakesResults() {
    document.getElementById('mistakes-active').classList.add('hidden');
    document.getElementById('mistakes-results').classList.remove('hidden');
    document.getElementById('mistakes-result-correct').textContent = mistakesScore;
    document.getElementById('mistakes-result-wrong').textContent = mistakesTotal - mistakesScore;
    const mistakesTime = document.getElementById('mistakes-result-time');
    if (mistakesTime) mistakesTime.textContent = getSessionDuration();
    stopSessionTimer();
    const reviewBtn = document.getElementById('btn-mistakes-review');
    if (reviewBtn) reviewBtn.classList.toggle('hidden', (mistakesTotal - mistakesScore) === 0);
    trackSessionEnd(mistakesScore, mistakesTotal);
}

function clearMistake(v1Key) {
    if (errorStats[v1Key]) {
        errorStats[v1Key].mistakes = Math.max(0, errorStats[v1Key].mistakes - 1);
        if (errorStats[v1Key].mistakes === 0) {
            delete errorStats[v1Key];
            const idx = mistakesList.findIndex(v => v.v1 === v1Key);
            if (idx !== -1) mistakesList.splice(idx, 1);
        }
        saveErrorStats();
    }
}

// ================= НАСТРОЙКИ ИНТЕРФЕЙСА =================
function openSettings() {
    document.getElementById('setting-question-count').value = settings.questionCount;
    document.getElementById('form-v1').checked = settings.formsV1;
    document.getElementById('form-v2').checked = settings.formsV2;
    document.getElementById('form-v3').checked = settings.formsV3;
    document.getElementById('setting-complexity').value = settings.complexity || 'all';
    document.getElementById('setting-dark-mode').checked = settings.darkMode;
    document.getElementById('setting-gradient-from').value = settings.gradientFrom || '#4f46e5';
    document.getElementById('setting-gradient-to').value = settings.gradientTo || '#7c3aed';
    document.getElementById('setting-show-translation').checked = settings.showTranslation !== false;
    document.getElementById('setting-auto-advance').checked = settings.autoAdvance === true;
    document.getElementById('setting-shuffle').checked = settings.shuffle !== false;
    document.getElementById('setting-compact').checked = settings.compact === true;
    document.getElementById('setting-lang').value = settings.lang || getSystemLang();
    const favOnlyEl = document.getElementById('setting-fav-only');
    if (favOnlyEl) favOnlyEl.checked = settings.favOnly === true;
    document.getElementById('setting-timer').checked = settings.showTimer === true;
    const soundEl = document.getElementById('setting-sound');
    if (soundEl) soundEl.checked = settings.soundEnabled !== false;
    const spacedEl = document.getElementById('setting-spaced-rep');
    if (spacedEl) spacedEl.checked = settings.useSpacedRep === true;
    const smartEl = document.getElementById('setting-smart-order');
    if (smartEl) smartEl.checked = settings.smartOrder !== false;
    const hapticsEl = document.getElementById('setting-haptics');
    if (hapticsEl) hapticsEl.checked = settings.haptics !== false;
    const verbGroupEl = document.getElementById('setting-verb-group');
    if (verbGroupEl) verbGroupEl.value = settings.verbGroup || 'all';
    const alignRightEl = document.getElementById('setting-align-right');
    if (alignRightEl) alignRightEl.checked = settings.alignRight === true;

    const stats = getMistakeStats();
    const statsDisplay = document.getElementById('error-stats-display');
    const btnMistakes = document.getElementById('btn-mistakes');

    renderAchievements();
    renderCustomVerbsList();

    if (stats && stats.total > 0) {
        statsDisplay.innerHTML = `${__('setMistakes')}: ${stats.total} ${__('setExportDesc')}`;
        btnMistakes.classList.remove('hidden');
    } else {
        statsDisplay.innerHTML = __('setMistakesDesc');
        btnMistakes.classList.add('hidden');
    }

    updateAccentPresetUI();
    applyLanguage();
    document.getElementById('settings-modal').classList.add('open');
}

function closeSettings() {
    saveSettings();
    document.getElementById('settings-modal').classList.remove('open');
}

function toggleDarkMode() {
    settings.darkMode = document.getElementById('setting-dark-mode').checked;
    document.body.classList.toggle('dark', settings.darkMode);
    setGradientCSS(settings.gradientFrom || '#4f46e5', settings.gradientTo || '#7c3aed');
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    updateAccentPresetUI();
}

function setAccentPreset(name) {
    const preset = accentPresets[name];
    if (!preset) return;
    settings.accentPreset = name;
    settings.gradientFrom = preset.from;
    settings.gradientTo = preset.to;
    document.getElementById('setting-gradient-from').value = preset.from;
    document.getElementById('setting-gradient-to').value = preset.to;
    setGradientCSS(preset.from, preset.to);
    saveSettings();
    updateAccentPresetUI();
    showToast(__('setAccentPresets') + ': ' + preset.label, 'success');
}

function updateAccentPresetUI() {
    document.querySelectorAll('.accent-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.preset === settings.accentPreset);
    });
}

function applyGradientColor() {
    const from = document.getElementById('setting-gradient-from').value;
    const to = document.getElementById('setting-gradient-to').value;
    settings.gradientFrom = from;
    settings.gradientTo = to;
    settings.accentPreset = '';
    setGradientCSS(from, to);
    saveSettings();
    updateAccentPresetUI();
}

function setGradientCSS(from, to) {
    const r = document.documentElement.style;
    const isDark = document.body.classList.contains('dark');
    if (isDark) {
        from = darkenColor(from, 20);
        to = darkenColor(to, 20);
    }
    r.setProperty('--gradient-from', from);
    r.setProperty('--gradient-to', to);
    r.setProperty('--primary', from);
    r.setProperty('--primary-light', blendColor(from, to, 0.5));
    r.setProperty('--primary-dark', darkenColor(from, 20));
    r.setProperty('--primary-bg', hexToRgba(from, isDark ? 0.12 : 0.08));
    r.setProperty('--primary-glow', hexToRgba(from, isDark ? 0.3 : 0.25));
    const alpha1 = isDark ? '0.10' : '0.04';
    const alpha2 = isDark ? '0.07' : '0.03';
    const alpha3 = isDark ? '0.07' : '0.03';
    r.setProperty('--bg-glow-1', hexToRgba(from, parseFloat(alpha1)));
    r.setProperty('--bg-glow-2', hexToRgba(to, parseFloat(alpha2)));
    r.setProperty('--bg-glow-3', hexToRgba(to, parseFloat(alpha3)));
    const blobAlpha1 = isDark ? '0.20' : '0.18';
    const blobAlpha2 = isDark ? '0.16' : '0.12';
    const blobAlpha3 = isDark ? '0.14' : '0.10';
    const blobAlpha4 = isDark ? '0.12' : '0.08';
    r.setProperty('--blob-1', hexToRgba(from, parseFloat(blobAlpha1)));
    r.setProperty('--blob-2', hexToRgba(to, parseFloat(blobAlpha2)));
    r.setProperty('--blob-3', hexToRgba(blendColor(from, to, 0.5), parseFloat(blobAlpha3)));
    r.setProperty('--blob-4', hexToRgba(from, parseFloat(blobAlpha4)));
}

function switchSettingsTab(tab, btn) {
    document.querySelectorAll('.settings-tab').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.settings-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`settings-${tab}`).classList.add('active');
    btn.classList.add('active');
}

function showWelcome() {
    document.getElementById('welcome-modal').classList.add('open');
    updateWelcomeLangButtons();
}

function setWelcomeLang(lang) {
    settings.lang = lang;
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    applyLanguage();
    updateWelcomeLangButtons();
}

function updateWelcomeLangButtons() {
    const current = settings.lang || getSystemLang();
    document.querySelectorAll('#welcome-lang-grid .welcome-lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === current);
    });
}

function dismissWelcome() {
    settings.welcomeShown = true;
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    document.getElementById('welcome-modal').classList.remove('open');
}

function showBetaInfo() {
    document.getElementById('beta-modal').classList.add('open');
}

function dismissBetaInfo() {
    document.getElementById('beta-modal').classList.remove('open');
}

function applyCompactMode() {
    const isCompact = settings.compact === true;
    document.body.classList.toggle('compact', isCompact);
}

function applyWelcomeAlign() {
    const card = document.getElementById('home-welcome-card');
    if (card) card.classList.toggle('welcome-right', settings.alignRight === true);
}

// ================= ЦВЕТОВЫЕ ФУНКЦИИ =================
function hexToRgba(hex, alpha) {
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}

function darkenColor(hex, percent) {
    const c = hex.replace('#', '');
    let r = parseInt(c.substring(0, 2), 16);
    let g = parseInt(c.substring(2, 4), 16);
    let b = parseInt(c.substring(4, 6), 16);
    r = Math.max(0, Math.min(255, Math.round(r * (100 - percent) / 100)));
    g = Math.max(0, Math.min(255, Math.round(g * (100 - percent) / 100)));
    b = Math.max(0, Math.min(255, Math.round(b * (100 - percent) / 100)));
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

function blendColor(c1, c2, ratio) {
    const a = c1.replace('#', ''), b = c2.replace('#', '');
    const r = Math.round(parseInt(a.substring(0,2),16) * (1-ratio) + parseInt(b.substring(0,2),16) * ratio);
    const g = Math.round(parseInt(a.substring(2,4),16) * (1-ratio) + parseInt(b.substring(2,4),16) * ratio);
    const bl = Math.round(parseInt(a.substring(4,6),16) * (1-ratio) + parseInt(b.substring(4,6),16) * ratio);
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${bl.toString(16).padStart(2,'0')}`;
}

// ================= КАСТОМНЫЙ ДИАЛОГ ПОДТВЕРЖДЕНИЯ =================
let confirmCallback = null;

function showConfirmDialog(title, desc) {
    return new Promise(function(resolve) {
        confirmCallback = resolve;
        document.getElementById('confirm-modal-title').textContent = title;
        document.getElementById('confirm-modal-desc').textContent = desc;
        document.getElementById('confirm-modal').classList.add('open');
    });
}

function confirmDialogOk() {
    document.getElementById('confirm-modal').classList.remove('open');
    if (confirmCallback) { confirmCallback(true); confirmCallback = null; }
}

function confirmDialogCancel() {
    document.getElementById('confirm-modal').classList.remove('open');
    if (confirmCallback) { confirmCallback(false); confirmCallback = null; }
}

// ================= СБРОС =================
function resetSettings() {
    showConfirmDialog(__('setResetConfirm'), '').then(function(ok) {
        if (!ok) return;
        settings = { ...defaultSettings };
        errorStats = {};
        mistakesList = [];
        localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
        localStorage.removeItem('verbTrainerErrors');
        document.body.classList.remove('dark');
        setGradientCSS(defaultSettings.gradientFrom, defaultSettings.gradientTo);
        applyCompactMode();
        updateAccentPresetUI();
        openSettings();
    });
}

// ================= ДОБАВЛЕНИЕ СВОИХ ГЛАГОЛОВ =================
function handleAddCustomVerb() {
    const v1 = document.getElementById('custom-v1').value.trim();
    const v2 = document.getElementById('custom-v2').value.trim();
    const v3 = document.getElementById('custom-v3').value.trim();
    const trans = document.getElementById('custom-trans').value.trim();
    const tag = document.getElementById('custom-tag')?.value.trim() || '';
    const msg = document.getElementById('custom-verbs-msg');
    if (!v1 || !v2 || !v3 || !trans) {
        msg.textContent = __('customFillAll');
        msg.classList.remove('hidden');
        return;
    }
    if (verbsData.find(v => v.v1 === v1) || (settings.customVerbs || []).find(v => v.v1 === v1)) {
        msg.textContent = __('customExists');
        msg.classList.remove('hidden');
        return;
    }
    if (addCustomVerb(v1, v2, v3, trans, tag)) {
        document.getElementById('custom-v1').value = '';
        document.getElementById('custom-v2').value = '';
        document.getElementById('custom-v3').value = '';
        document.getElementById('custom-trans').value = '';
        if (document.getElementById('custom-tag')) document.getElementById('custom-tag').value = '';
        msg.classList.add('hidden');
        renderDictionary();
    }
}

// ================= ХЕЛПЕРЫ =================
function getQuestionCount() {
    const val = settings.questionCount;
    const currentFilteredCount = getFilteredVerbs().length;
    if (val === 'all') return currentFilteredCount;
    return Math.min(parseInt(val) || 10, currentFilteredCount);
}

function getFullVerbList() {
    if (!settings.customVerbs) return verbsData;
    return [...settings.customVerbs, ...verbsData];
}

function getFilteredVerbs() {
    if (practiceMode === 'mistakes' && mistakesList.length > 0) {
        return mistakesList;
    }

    let filtered = getFullVerbList();
    const comp = settings.complexity || 'all';
    if (comp !== 'all') {
        const c = parseInt(comp);
        if (!isNaN(c)) {
            filtered = filtered.filter(v => v.complexity === c);
        }
    }
    const grp = settings.verbGroup || 'all';
    if (grp !== 'all') {
        const g = parseInt(grp);
        if (!isNaN(g)) {
            filtered = filtered.filter(v => classifyVerb(v) === g);
        }
    }
    if (settings.favOnly && settings.favorites.length > 0) {
        filtered = filtered.filter(v => settings.favorites.includes(v.v1));
    }
    if (settings.useSpacedRep) {
        filtered = [...filtered].sort((a, b) => {
            const errA = errorStats[a.v1]?.mistakes || 0;
            const errB = errorStats[b.v1]?.mistakes || 0;
            if (errB !== errA) return errB - errA;
            const seenA = settings.verbLastSeen?.[a.v1] || 0;
            const seenB = settings.verbLastSeen?.[b.v1] || 0;
            return seenA - seenB;
        });
    }
    return filtered;
}

function addCustomVerb(v1, v2, v3, translation, tag) {
    if (!settings.customVerbs) settings.customVerbs = [];
    if (settings.customVerbs.find(v => v.v1 === v1) || verbsData.find(v => v.v1 === v1)) return false;
    settings.customVerbs.push({ v1, v2, v3, translation, complexity: 1, tag: tag || '' });
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    renderCustomVerbsList();
    return true;
}

function removeCustomVerb(v1) {
    if (!settings.customVerbs) return;
    settings.customVerbs = settings.customVerbs.filter(v => v.v1 !== v1);
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    renderCustomVerbsList();
}

function renderCustomVerbsList() {
    const container = document.getElementById('custom-verbs-list');
    if (!container) return;
    if (!settings.customVerbs || settings.customVerbs.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-400" data-i18n="customNone">Нет добавленных глаголов</p>';
        return;
    }
    let html = '';
    settings.customVerbs.forEach(v => {
        html += '<div class="flex items-center gap-2 text-xs py-1 border-b border-slate-100 last:border-0">';
        html += '<span class="font-bold text-indigo-600 w-16">' + v.v1 + '</span>';
        html += '<span class="text-slate-600 w-20">' + v.v2 + '</span>';
        html += '<span class="text-slate-600 w-20">' + v.v3 + '</span>';
        html += '<span class="text-slate-400 flex-1">' + getVerbTranslation(v) + '</span>';
        html += '<button onclick="removeCustomVerb(\'' + v.v1.replace(/'/g, "\\'") + '\')" class="text-red-400 hover:text-red-600"><i class="fas fa-times"></i></button>';
        html += '</div>';
    });
    container.innerHTML = html;
}

function recordMistake(verb, field) {
    const key = verb.v1;
    if (!errorStats[key]) {
        errorStats[key] = { verb: verb, mistakes: 0, lastMistake: null, forms: { v2: 0, v3: 0, spelling: 0 } };
    }
    if (!errorStats[key].forms) errorStats[key].forms = { v2: 0, v3: 0, spelling: 0 };
    errorStats[key].mistakes++;
    errorStats[key].lastMistake = new Date().toLocaleString(uiLocale());
    if (field && errorStats[key].forms[field] !== undefined) {
        errorStats[key].forms[field]++;
    }

    if (!mistakesList.find(v => v.v1 === key)) {
        mistakesList.push(verb);
    }
    saveErrorStats();
}

function saveErrorStats() {
    localStorage.setItem('verbTrainerErrors', JSON.stringify(errorStats));
}

function showToast(msg, type) {
    const existing = document.getElementById('toast-msg');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'fixed top-4 right-4 z-[9999] px-4 py-2 rounded-lg text-sm font-medium shadow-lg text-white ' + (type === 'error' ? 'bg-red-500' : 'bg-emerald-500');
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function exportResults(format = 'json') {
    const results = {
        exportDate: new Date().toLocaleString(uiLocale()),
        errorStats: errorStats,
        totalMistakes: Object.values(errorStats).reduce((sum, v) => sum + v.mistakes, 0),
        totalErrors: Object.keys(errorStats).length
    };

    if (format === 'json') {
        const dataStr = JSON.stringify(results, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        downloadFile(dataBlob, `verb-trainer-errors-${new Date().getTime()}.json`);
    } else if (format === 'csv') {
        let csv = __('csvHeader') + '\n';
        Object.entries(errorStats).forEach(([key, data]) => {
            csv += `"${data.verb.v1}","${getVerbTranslation(data.verb)}",${data.mistakes},"${data.lastMistake}"\n`;
        });
        const dataBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        downloadFile(dataBlob, `verb-trainer-errors-${new Date().getTime()}.csv`);
    }
}

function downloadFile(blob, filename) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.errorStats && typeof data.errorStats === 'object') {
                errorStats = data.errorStats;
                localStorage.setItem('verbTrainerErrors', JSON.stringify(errorStats));
            }
            if (data.settings && typeof data.settings === 'object') {
                Object.assign(settings, data.settings);
                localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
            }
            if (data.customVerbs && Array.isArray(data.customVerbs)) {
                settings.customVerbs = data.customVerbs;
                localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
                renderCustomVerbsList();
            }
            renderDictionary();
            updateNavProgress();
            showToast(__('importSuccess'), 'success');
        } catch (err) {
            showToast(__('importError'), 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function exportCustomVerbs() {
    if (!settings.customVerbs || settings.customVerbs.length === 0) {
        showToast(__('customNone'), 'error');
        return;
    }
    const data = {
        exportDate: new Date().toLocaleString(),
        customVerbs: settings.customVerbs
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    downloadFile(blob, `custom-verbs-${new Date().getTime()}.json`);
}

function importCustomVerbs(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.customVerbs && Array.isArray(data.customVerbs)) {
                if (!settings.customVerbs) settings.customVerbs = [];
                data.customVerbs.forEach(v => {
                    if (v.v1 && v.v2 && v.v3 && !settings.customVerbs.find(c => c.v1 === v.v1) && !verbsData.find(c => c.v1 === v.v1)) {
                        settings.customVerbs.push(v);
                    }
                });
                localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
                renderCustomVerbsList();
                showToast(__('customImportSuccess'), 'success');
            }
        } catch (err) {
            showToast(__('importError'), 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function getMistakeStats() {
    const activeErrors = Object.values(errorStats).filter(e => e.mistakes > 0);
    if (activeErrors.length === 0) return null;
    const total = activeErrors.reduce((sum, v) => sum + v.mistakes, 0);
    const topMistakes = [...activeErrors].sort((a, b) => b.mistakes - a.mistakes);
    return { total, topMistakes };
}

function getSmartMistakesList() {
    return [...mistakesList].sort((a, b) => {
        const ea = errorStats[a.v1] || { mistakes: 0, lastMistake: null };
        const eb = errorStats[b.v1] || { mistakes: 0, lastMistake: null };
        if (eb.mistakes !== ea.mistakes) return eb.mistakes - ea.mistakes;
        return new Date(eb.lastMistake || 0) - new Date(ea.lastMistake || 0);
    });
}

function getActiveForms() {
    const forms = [];
    if (settings.formsV1) forms.push(0);
    if (settings.formsV2) forms.push(1);
    if (settings.formsV3) forms.push(2);
    return forms;
}

function shuffleArray(array) {
    const arr = [...array];
    if (settings.shuffle === false) return arr;
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ================= ИЗБРАННЫЕ =================
function toggleFavorite(v1Key) {
    const idx = settings.favorites.indexOf(v1Key);
    if (idx === -1) {
        settings.favorites.push(v1Key);
    } else {
        settings.favorites.splice(idx, 1);
    }
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    renderDictionary();
}

function isFavorite(v1Key) {
    return settings.favorites.indexOf(v1Key) !== -1;
}

// ================= ГЛАГОЛ ДНЯ =================
function getVerbOfDay() {
    const today = new Date().toISOString().slice(0, 10);
    if (settings.verbOfDayDate === today && settings.verbOfDay) {
        return settings.verbOfDay;
    }
    const allVerbs = getFullVerbList();
    const seed = today.split('-').reduce(function(a, b) { return a * 31 + parseInt(b); }, 1);
    const idx = seed % allVerbs.length;
    settings.verbOfDay = allVerbs[idx];
    settings.verbOfDayDate = today;
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    return settings.verbOfDay;
}

function renderVerbOfDay() {
    const container = document.getElementById('verb-of-day');
    if (!container) return;
    const verb = getVerbOfDay();
    if (!verb) return;
    container.innerHTML = '<div class="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4 text-center">' +
        '<div class="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2"><i class="fas fa-sun mr-1"></i> ' + __('verbOfDay') + '</div>' +
        '<div class="text-2xl font-extrabold text-amber-800 mb-1">' + verb.v1 + '</div>' +
        '<div class="text-sm text-amber-600">' + verb.v2 + ' → ' + verb.v3 + '</div>' +
        '<div class="text-xs text-amber-500 mt-1">' + getVerbTranslation(verb) + '</div>' +
        '</div>';
}

// ================= ПРАКТИКА С ПРЕДЛОГАМИ =================
const verbPrepositions = [
    { v1: 'depend', preposition: 'on', translation: 'зависеть от' },
    { v1: 'listen', preposition: 'to', translation: 'слушать' },
    { v1: 'look', preposition: 'at', translation: 'смотреть на' },
    { v1: 'look', preposition: 'for', translation: 'искать' },
    { v1: 'look', preposition: 'after', translation: 'присматривать за' },
    { v1: 'wait', preposition: 'for', translation: 'ждать' },
    { v1: 'apologize', preposition: 'for', translation: 'извиняться за' },
    { v1: 'belong', preposition: 'to', translation: 'принадлежать' },
    { v1: 'believe', preposition: 'in', translation: 'верить в' },
    { v1: 'consist', preposition: 'of', translation: 'состоять из' },
    { v1: 'dream', preposition: 'about/of', translation: 'мечтать о' },
    { v1: 'apply', preposition: 'for', translation: 'подавать на' },
    { v1: 'argue', preposition: 'with', translation: 'спорить с' },
    { v1: 'ask', preposition: 'for', translation: 'просить' },
    { v1: 'care', preposition: 'about', translation: 'заботиться о' },
    { v1: 'compare', preposition: 'with/to', translation: 'сравнивать с' },
    { v1: 'concentrate', preposition: 'on', translation: 'сосредоточиться на' },
    { v1: 'consist', preposition: 'of', translation: 'состоять из' },
    { v1: 'insist', preposition: 'on', translation: 'настаивать на' },
    { v1: 'laugh', preposition: 'at', translation: 'смеяться над' },
    { v1: 'pay', preposition: 'for', translation: 'платить за' },
    { v1: 'point', preposition: 'at', translation: 'указывать на' },
    { v1: 'refer', preposition: 'to', translation: 'ссылаться на' },
    { v1: 'rely', preposition: 'on', translation: 'полагаться на' },
    { v1: 'succeed', preposition: 'in', translation: 'преуспеть в' },
    { v1: 'suffer', preposition: 'from', translation: 'страдать от' },
    { v1: 'think', preposition: 'about/of', translation: 'думать о' },
    { v1: 'worry', preposition: 'about', translation: 'беспокоиться о' }
];

let prepQueue = [];
let prepIdx = 0;
let prepScore = 0;
let prepMistakes = 0;
let prepCurrentVerb = null;

function startPrepositionTrainer() {
    const filtered = shuffleArray([...verbPrepositions]).slice(0, Math.min(10, verbPrepositions.length));
    prepQueue = filtered;
    prepIdx = 0;
    prepScore = 0;
    prepMistakes = 0;

    document.getElementById('prep-start').classList.add('hidden');
    document.getElementById('prep-results').classList.add('hidden');
    document.getElementById('prep-active').classList.remove('hidden');

    loadPrepQuestion();
}

function loadPrepQuestion() {
    if (prepIdx >= prepQueue.length) {
        showPrepResults();
        return;
    }
    prepCurrentVerb = prepQueue[prepIdx];
    document.getElementById('prep-v1').textContent = prepCurrentVerb.v1;
    document.getElementById('prep-translation').textContent = getVerbTranslation(prepCurrentVerb);
    document.getElementById('prep-progress').textContent = (prepIdx + 1) + ' / ' + prepQueue.length;

    const input = document.getElementById('prep-input');
    input.value = '';
    input.className = "w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-lg";
    input.disabled = false;
    input.focus();

    document.getElementById('prep-feedback').classList.add('hidden');
    document.getElementById('btn-prep-check').classList.remove('hidden');
    document.getElementById('btn-prep-next').classList.add('hidden');
}

function checkPrepAnswer() {
    const input = document.getElementById('prep-input');
    const answer = normalizeTyped(input.value);
    const acceptable = prepCurrentVerb.preposition.toLowerCase().split('/').map(function(s) { return s.trim(); });
    const correct = acceptable.indexOf(answer) !== -1;

    const feedback = document.getElementById('prep-feedback');
    feedback.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');

    input.disabled = true;
    if (correct) {
        prepScore++;
        playSound('correct');
        input.className = "w-full px-4 py-3 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-bold text-lg";
        feedback.classList.add('bg-green-100', 'text-green-800');
        feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i> ' + __('trCorrect');
    } else {
        prepMistakes++;
        playSound('wrong');
        input.className = "w-full px-4 py-3 bg-red-50 border-2 border-red-500 rounded-lg text-red-700 font-bold text-lg";
        feedback.classList.add('bg-red-100', 'text-red-800');
        feedback.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> ' + __('trError') + ' <b>' + prepCurrentVerb.preposition + '</b>';
    }

    document.getElementById('btn-prep-check').classList.add('hidden');
    document.getElementById('btn-prep-next').classList.remove('hidden');
}

function nextPrepQuestion() {
    prepIdx++;
    loadPrepQuestion();
}

function showPrepResults() {
    document.getElementById('prep-active').classList.add('hidden');
    document.getElementById('prep-results').classList.remove('hidden');
    document.getElementById('prep-result-correct').textContent = prepScore;
    document.getElementById('prep-result-wrong').textContent = prepMistakes;
    trackSessionEnd(prepScore, prepScore + prepMistakes);
}

// ================= TTS (Text-to-Speech) =================
function speak(text, lang) {
    try {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang || 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;

        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
            const prefs = ['Microsoft Zira Desktop', 'Microsoft Zira', 'Microsoft David', 'Google UK English Female', 'Google UK English Male', 'Samantha', 'Google US English'];
            let found = null;
            for (const name of prefs) {
                found = voices.find(v => v.name === name);
                if (found) break;
            }
            if (!found) found = voices.find(v => v.lang.startsWith('en')) || null;
            if (found) utterance.voice = found;
        }

        utterance.onerror = function() {};
        window.speechSynthesis.speak(utterance);
    } catch (e) {}
}

function speakVerbForm(verb, formKey) {
    if (!verb || !verb[formKey]) return;
    let text = verb[formKey];
    if (text.includes('/')) text = text.split('/')[0].trim();
    if (text.includes('(')) text = text.replace(/\(.*?\)/g, '').trim();
    speak(text, 'en-US');
}

// ================= ДОСТИЖЕНИЯ =================
const achievementDefs = {
    firstSteps: { icon: 'fa-rocket' },
    perfect10: { icon: 'fa-star' },
    ironWill: { icon: 'fa-shield' },
    wordMaster: { icon: 'fa-graduation-cap' },
    persistent: { icon: 'fa-clock' },
    collector: { icon: 'fa-heart' },
    perfectionist: { icon: 'fa-crown' },
    easterEgg: { icon: 'fa-egg', isSecret: true },
    speedDemon: { icon: 'fa-person-running' }
};

function checkAchievements() {
    if (!settings.achievements) settings.achievements = {};
    Object.keys(achievementDefs).forEach(key => {
        if (settings.achievements[key]) return;
        let unlock = false;
        switch (key) {
            case 'firstSteps': unlock = settings.sessionsCompleted >= 1; break;
            case 'perfect10': unlock = settings.totalCorrect >= 10; break;
            case 'ironWill': unlock = settings.bestStreak >= 10; break;
            case 'wordMaster': unlock = (settings.verbsLearned || []).length >= 50; break;
            case 'persistent': unlock = settings.sessionsCompleted >= 5; break;
            case 'collector': unlock = (settings.favorites || []).length >= 10; break;
            case 'perfectionist': unlock = settings.totalQuestions > 0 && settings.totalCorrect === settings.totalQuestions && settings.totalQuestions >= 10; break;
            case 'speedDemon': unlock = (settings.speedHighScore || 0) >= 30; break;
        }
        if (unlock) {
            settings.achievements[key] = true;
            localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
            showAchievementToast(key);
        }
    });
}

function showAchievementToast(key) {
    const toast = document.getElementById('achievement-toast');
    const icon = achievementDefs[key].icon;
    toast.innerHTML = '<i class="fas ' + icon + ' text-yellow-300 mr-2"></i> <span class="font-bold">' + __('achUnlock') + ':</span> ' + __(key);
    toast.className = 'fixed bottom-6 right-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-5 py-3 rounded-xl shadow-2xl z-50 text-sm font-semibold flex items-center gap-2 transition-all duration-500 opacity-100 translate-y-0';
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => { toast.classList.add('hidden'); }, 500);
    }, 3000);
}

function renderAchievements() {
    renderAchievementsList();
}

function renderAchievementsList() {
    const container = document.getElementById('achievements-list');
    if (!container) return;
    let html = '';
    Object.keys(achievementDefs).forEach(key => {
        const unlocked = settings.achievements && settings.achievements[key];
        if (achievementDefs[key].isSecret && !unlocked) return;
        html += '<div class="flex items-center gap-3 p-2 rounded-lg ' + (unlocked ? 'bg-indigo-50' : 'bg-slate-50 opacity-50') + '">';
        html += '<div class="w-8 h-8 rounded-full ' + (unlocked ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-400') + ' flex items-center justify-center text-sm"><i class="fas ' + achievementDefs[key].icon + '"></i></div>';
        html += '<div class="flex-1"><div class="text-sm font-semibold ' + (unlocked ? 'text-indigo-700' : 'text-slate-500') + '">' + __(key) + '</div>';
        html += '<div class="text-xs text-slate-400">' + __(key + 'Desc') + '</div></div>';
        html += '<div class="text-lg ' + (unlocked ? 'text-green-500' : 'text-slate-300') + '"><i class="fas ' + (unlocked ? 'fa-check-circle' : 'fa-circle') + '"></i></div>';
        html += '</div>';
    });
    container.innerHTML = html || '<p class="text-sm text-slate-400">' + __('achNone') + '</p>';
}

function trackSessionEnd(correct, total) {
    settings.sessionsCompleted = (settings.sessionsCompleted || 0) + 1;
    settings.totalCorrect = (settings.totalCorrect || 0) + correct;
    settings.totalQuestions = (settings.totalQuestions || 0) + total;
    const streak = (correct === total) ? (settings.bestStreak || 0) + 1 : 0;
    settings.bestStreak = Math.max(settings.bestStreak || 0, streak);

    if (!settings.verbsLearned) settings.verbsLearned = [];
    Object.keys(errorStats).forEach(k => {
        const idx = settings.verbsLearned.indexOf(k);
        if (idx === -1) settings.verbsLearned.push(k);
    });

    if (!settings.activityLog) settings.activityLog = {};
    const today = new Date().toISOString().slice(0, 10);
    if (!settings.activityLog[today]) settings.activityLog[today] = { sessions: 0, correct: 0, total: 0 };
    settings.activityLog[today].sessions++;
    settings.activityLog[today].correct += correct;
    settings.activityLog[today].total += total;

    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    checkAchievements();
    updateNavProgress();
}

function getActivityDays() {
    if (!settings.activityLog) return [];
    return Object.keys(settings.activityLog).sort().slice(-30);
}

function renderActivityGraph() {
    const container = document.getElementById('activity-graph');
    if (!container) return;
    const days = getActivityDays();
    if (days.length === 0) {
        container.innerHTML = '<p class="text-sm text-slate-400 text-center">' + __('noActivity') + '</p>';
        return;
    }
    const maxTotal = Math.max(...days.map(d => settings.activityLog[d].total));
    let html = '<div class="flex items-end gap-1 justify-center" style="height:80px">';
    days.forEach(function(day) {
        const data = settings.activityLog[day];
        const pct = maxTotal > 0 ? Math.round((data.total / maxTotal) * 100) : 0;
        const accuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const color = accuracy >= 80 ? 'bg-emerald-400' : accuracy >= 50 ? 'bg-amber-400' : 'bg-red-400';
        html += '<div class="flex flex-col items-center gap-0.5" title="' + day + ': ' + data.sessions + ' ' + __('trOf') + ' ' + data.total + ' (' + accuracy + '%)">';
        html += '<div class="w-3 sm:w-4 rounded-t ' + color + '" style="height:' + Math.max(4, pct) + '%"></div>';
        html += '<div class="text-[8px] text-slate-400 -rotate-45 origin-left">' + day.slice(5) + '</div>';
        html += '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
}

// ================= СТАТИСТИКА =================
function renderStats() {
    renderStatsOverview();
    renderStatsActivity();
    renderStatsTopMistakes();
    renderStatsGroups();
    renderStatsAccuracy();
}

function renderStatsOverview() {
    const container = document.querySelector('#view-stats .stats-cards');
    if (!container) return;
    const totalQ = settings.totalQuestions || 0;
    const correct = settings.totalCorrect || 0;
    const accuracy = totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0;
    const cards = [
        { label: __('statsSessions'), value: settings.sessionsCompleted || 0, suffix: '', color: 'text-blue-500' },
        { label: __('statsQuestions'), value: totalQ, suffix: '', color: 'text-indigo-500' },
        { label: __('statsAccuracy'), value: accuracy, suffix: '%', color: accuracy >= 80 ? 'text-emerald-500' : accuracy >= 50 ? 'text-amber-500' : 'text-red-500' },
        { label: __('statsBestStreak'), value: settings.bestStreak || 0, suffix: ' ✅', color: 'text-orange-500' },
    ];
    container.innerHTML = cards.map((c, i) => `
        <div class="bg-slate-50 rounded-xl p-4 text-center">
            <div class="text-2xl font-bold ${c.color}" id="stat-card-${i}">0${c.suffix}</div>
            <div class="text-xs text-slate-400 mt-1">${c.label}</div>
        </div>
    `).join('');
    cards.forEach((c, i) => {
        const el = document.getElementById('stat-card-' + i);
        if (el) animateCount(el, c.value, c.suffix);
    });
}

function renderStatsActivity() {
    const container = document.getElementById('stats-activity-graph');
    if (!container) return;
    const days = getActivityDays();
    if (days.length === 0) {
        container.innerHTML = '<p class="text-sm text-slate-400 text-center w-full">' + __('noActivity') + '</p>';
        return;
    }
    const maxTotal = Math.max(...days.map(d => settings.activityLog[d].total));
    let html = '<div class="flex items-end gap-1 justify-center w-full" style="height:100px">';
    days.forEach(function(day) {
        const data = settings.activityLog[day];
        const pct = maxTotal > 0 ? Math.round((data.total / maxTotal) * 100) : 0;
        const h = Math.max(4, pct);
        html += `<div class="flex flex-col items-center gap-0.5 flex-1 max-w-[14px]" title="${day}: ${data.sessions} ${__('trOf')} ${data.total}">`;
        html += `<div class="w-full rounded-t bg-indigo-400" style="height:${h}%"></div>`;
        html += `<div class="text-[7px] text-slate-400">${day.slice(8)}</div>`;
        html += `</div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

function renderStatsTopMistakes() {
    const container = document.getElementById('stats-top-mistakes');
    if (!container) return;
    const stats = getMistakeStats();
    if (!stats || stats.topMistakes.length === 0) {
        container.innerHTML = '<p class="text-slate-400 text-sm">' + __('statsNoMistakes') + '</p>';
        return;
    }
    const maxM = stats.topMistakes[0].mistakes;
    const top = stats.topMistakes.slice(0, 10);
    container.innerHTML = top.map(function(v) {
        const pct = Math.round((v.mistakes / maxM) * 100);
        return `
            <div class="flex items-center gap-2">
                <span class="font-mono text-slate-500 w-5 text-right text-xs">${v.mistakes}</span>
                <div class="flex-1 bg-slate-100 rounded-full h-4 overflow-hidden">
                    <div class="h-full rounded-full bg-amber-400" style="width:${pct}%"></div>
                </div>
                <span class="text-slate-700 text-sm w-20 truncate text-right font-medium">${v.verb.v1}</span>
            </div>
        `;
    }).join('');
}

function renderStatsGroups() {
    const container = document.getElementById('stats-groups');
    if (!container) return;
    const groups = [
        { id: 1, label: 'AAA' },
        { id: 2, label: 'ABB' },
        { id: 3, label: 'ABA' },
        { id: 4, label: 'ABC' },
    ];
    const allVerbs = getFullVerbList();
    const learned = settings.verbsLearned || [];
    container.innerHTML = groups.map(function(g) {
        const groupVerbs = allVerbs.filter(v => classifyVerb(v) === g.id).length;
        const groupLearned = allVerbs.filter(v => classifyVerb(v) === g.id && learned.includes(v.v1)).length;
        const pct = groupVerbs > 0 ? Math.round((groupLearned / groupVerbs) * 100) : 0;
        return `
            <div>
                <div class="flex justify-between text-sm mb-1">
                    <span class="font-semibold text-slate-700">${g.label}</span>
                    <span class="text-slate-400">${groupLearned}/${groupVerbs}</span>
                </div>
                <div class="bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div class="h-full rounded-full bg-purple-400 transition-all" style="width:${pct}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

function renderStatsAccuracy() {
    const container = document.getElementById('stats-accuracy-graph');
    if (!container) return;
    const days = getActivityDays();
    if (days.length === 0) {
        container.innerHTML = '<p class="text-sm text-slate-400 text-center">' + __('noActivity') + '</p>';
        return;
    }
    const w = days.length;
    let html = '<div class="flex items-end gap-1 justify-center" style="height:80px">';
    days.forEach(function(day) {
        const data = settings.activityLog[day];
        const accuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const color = accuracy >= 80 ? 'bg-emerald-400' : accuracy >= 50 ? 'bg-amber-400' : 'bg-red-400';
        html += `<div class="flex flex-col items-center gap-0.5" style="width:calc(100%/${w})" title="${day}: ${accuracy}%">`;
        html += `<div class="w-3 sm:w-4 rounded-t ${color}" style="height:${Math.max(4, accuracy)}%"></div>`;
        html += `</div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

// ================= ЗВУКИ =================
let sharedAudioCtx = null;
let sharedAudioGain = null;

function getAudioCtx() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return null;
        if (!sharedAudioCtx) {
            sharedAudioCtx = new AudioCtx();
            sharedAudioGain = sharedAudioCtx.createGain();
            sharedAudioGain.connect(sharedAudioCtx.destination);
        }
        if (sharedAudioCtx.state !== 'running') sharedAudioCtx.resume();
        return sharedAudioCtx;
    } catch (e) { return null; }
}

function playSound(type) {
    if (!settings.soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(sharedAudioGain);
        if (type === 'correct') {
            osc.frequency.value = 880;
            gain.gain.value = 0.12;
        } else {
            osc.frequency.value = 330;
            gain.gain.value = 0.12;
        }
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.stop(ctx.currentTime + 0.15);
    } catch(e) {}
}

// ================= ПАСХАЛКА =================
let eggClicks = 0;

document.addEventListener('click', function(e) {
    if (e.target.closest('.egg-clickable')) {
        eggClicks++;
        if (eggClicks >= 5) {
            eggClicks = 0;
            triggerEasterEgg();
        }
        setTimeout(() => eggClicks = 0, 2000);
    }
});

let eggTimer = null;

function triggerEasterEgg() {
    if (eggTimer) return;
    if (!settings.achievements) settings.achievements = {};
    if (!settings.achievements.easterEgg) {
        settings.achievements.easterEgg = true;
        localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
        showAchievementToast('easterEgg');
    }
    const body = document.body;
    body.classList.add('egg-mode');
    playSound('correct');

    const toast = document.createElement('div');
    toast.className = 'egg-toast';
    toast.innerHTML = '<div class="egg-toast-icon">🦉</div><div>' + __('easterEggFound') + '</div>';
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('egg-visible'));
    eggTimer = setTimeout(() => {
        toast.classList.remove('egg-visible');
        body.classList.remove('egg-mode');
        setTimeout(() => toast.remove(), 400);
        eggTimer = null;
    }, 3000);
}

// ================= ПАСХАЛКА KONAMI =================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIdx = 0;

// ================= KEYBOARD EVENTS =================
document.addEventListener('keydown', function(event) {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    // Konami code check
    if (event.key === konamiCode[konamiIdx] || event.key.toLowerCase() === konamiCode[konamiIdx]) {
        konamiIdx++;
        if (konamiIdx === konamiCode.length) {
            konamiIdx = 0;
            triggerEasterEgg();
        }
    } else {
        konamiIdx = 0;
    }
    // Tab shortcuts 1-9
    const num = parseInt(event.key);
    if (num >= 1 && num <= 9) {
        const tabs = ['dashboard', 'dictionary', 'flashcards', 'letters', 'trainer', 'mistakes', 'speed', 'exam', 'stats'];
        switchTab(tabs[num - 1]);
        return;
    }
    if (event.key === 'Escape') {
        if (document.getElementById('settings-modal').classList.contains('open')) {
            closeSettings();
        } else if (document.body.classList.contains('focus-mode')) {
            toggleFocusMode(false);
        }
    } else if (event.key === 'ArrowLeft' && !document.getElementById('view-flashcards').classList.contains('hidden')) {
        prevCard();
    } else if (event.key === 'ArrowRight' && !document.getElementById('view-flashcards').classList.contains('hidden')) {
        nextCard();
    } else if (event.key === ' ' && !document.getElementById('view-flashcards').classList.contains('hidden')) {
        event.preventDefault();
        flipCard();
    } else if (event.key === 'Enter') {
        if (!document.getElementById('view-trainer').classList.contains('hidden')) {
            const btnCheck = document.getElementById('btn-check');
            const btnNext = document.getElementById('btn-next');
            if (!btnCheck.classList.contains('hidden')) {
                checkTrainerAnswer();
            } else if (!btnNext.classList.contains('hidden')) {
                nextTrainerQuestion();
            }
        }
        else if (!document.getElementById('view-letters').classList.contains('hidden')) {
            const btnCheck = document.getElementById('btn-letters-check');
            const btnNext = document.getElementById('btn-letters-next');
            if (!btnCheck.classList.contains('hidden') && document.getElementById('letters-active').classList.contains('hidden') === false) {
                checkLettersAnswer();
            } else if (!btnNext.classList.contains('hidden')) {
                nextLettersQuestion();
            }
        }
        else if (!document.getElementById('view-mistakes').classList.contains('hidden')) {
            const mistakesActive = document.getElementById('mistakes-active');
            if (mistakesActive.classList.contains('hidden')) return;

            if (mistakesMode === 'forms') {
                const ck = document.getElementById('btn-mistakes-forms-check');
                const nx = document.getElementById('btn-mistakes-forms-next');
                if (!ck.classList.contains('hidden')) checkMistakesFormsAnswer();
                else if (!nx.classList.contains('hidden')) nextMistakesQuestion();
            } else if (mistakesMode === 'letters') {
                const ck = document.getElementById('btn-mistakes-letters-check');
                const nx = document.getElementById('btn-mistakes-letters-next');
                if (!ck.classList.contains('hidden')) checkMistakesLettersAnswer();
                else if (!nx.classList.contains('hidden')) nextMistakesQuestion();
            } else if (mistakesMode === 'quiz') {
                const nx = document.getElementById('btn-mistakes-quiz-next');
                if (!nx.classList.contains('hidden')) nextMistakesQuestion();
            }
        }
        else if (!document.getElementById('view-exam').classList.contains('hidden')) {
            const examActive = document.getElementById('exam-active');
            if (examActive.classList.contains('hidden')) return;
            const ck = document.getElementById('btn-exam-check');
            const nx = document.getElementById('btn-exam-next');
            if (!ck.classList.contains('hidden')) checkExamAnswer();
            else if (!nx.classList.contains('hidden')) nextExamQuestion();
        }
        else if (!document.getElementById('view-speed').classList.contains('hidden')) {
            const speedCheck = document.getElementById('btn-speed-check');
            const speedNext = document.getElementById('btn-speed-next');
            if (!speedCheck.classList.contains('hidden')) checkSpeedAnswer();
            else if (!speedNext.classList.contains('hidden')) loadSpeedQuestion();
        }
    }
    if (event.key === 'Escape') {
        if (document.getElementById('confirm-modal').classList.contains('open')) {
            confirmDialogCancel();
        }
    }
});

// ================= SPEED RUN =================
let speedTimerInterval = null;
let speedRemaining = 60;
let speedScore = 0;
let speedTotal = 0;
let speedCurrentVerb = null;
let speedQuestionType = 0; // 0=V1->V2, 1=V1->V3, 2=Translation->V1, 3=V2->V1
let speedAnswered = false;
let speedEnded = false;
let speedQueue = [];

const speedQuestionTypes = ['speedTypeV2', 'speedTypeV3', 'speedTypeTrans', 'speedTypeV1'];

function startSpeedRun() {
    const filtered = getFilteredVerbs();
    if (filtered.length === 0) {
        showToast(__('noVerbs'), 'error');
        return;
    }
    speedQueue = shuffleArray([...filtered]);
    speedRemaining = 60;
    speedScore = 0;
    speedTotal = 0;
    speedAnswered = false;
    speedEnded = false;

    document.getElementById('speed-start').classList.add('hidden');
    document.getElementById('speed-results').classList.add('hidden');
    document.getElementById('speed-active').classList.remove('hidden');

    document.getElementById('speed-score').textContent = '0';
    document.getElementById('speed-timer-display').textContent = '60';
    updateTimerBar();

    loadSpeedQuestion();
    startSpeedTimer();
}

function startSpeedTimer() {
    clearInterval(speedTimerInterval);
    speedTimerInterval = setInterval(() => {
        speedRemaining--;
        document.getElementById('speed-timer-display').textContent = speedRemaining;
        updateTimerBar();

        if (speedRemaining <= 0) {
            endSpeedRun();
        }
    }, 1000);
}

function updateTimerBar() {
    const pct = Math.max(0, (speedRemaining / 60) * 100);
    const bar = document.getElementById('speed-timer-bar');
    bar.style.width = pct + '%';
    if (speedRemaining <= 5) bar.className = 'h-2 rounded-full bg-red-500 transition-all duration-1000';
    else if (speedRemaining <= 15) bar.className = 'h-2 rounded-full bg-orange-400 transition-all duration-1000';
    else bar.className = 'h-2 rounded-full bg-emerald-500 transition-all duration-1000';
}

function loadSpeedQuestion() {
    if (speedRemaining <= 0 || speedQueue.length === 0) {
        endSpeedRun();
        return;
    }

    speedCurrentVerb = speedQueue.shift();
    speedQuestionType = Math.floor(Math.random() * 4);
    speedAnswered = false;

    document.getElementById('btn-speed-check').classList.remove('hidden');
    document.getElementById('btn-speed-next').classList.add('hidden');
    document.getElementById('speed-feedback').classList.add('hidden');

    const input = document.getElementById('speed-input');
    input.value = '';
    input.classList.remove('border-green-500', 'border-red-500', 'border-amber-500');
    input.classList.add('border-slate-300');
    input.disabled = false;
    input.focus();

    document.getElementById('speed-question-type').textContent = __(speedQuestionTypes[speedQuestionType]);

    const label = document.getElementById('speed-prompt-label');
    const word = document.getElementById('speed-word');

    if (speedQuestionType === 0) {
        label.textContent = __('speedV2Prompt');
        word.textContent = speedCurrentVerb.v1;
        input.placeholder = __('speedV2Placeholder');
    } else if (speedQuestionType === 1) {
        label.textContent = __('speedV3Prompt');
        word.textContent = speedCurrentVerb.v1;
        input.placeholder = __('speedV3Placeholder');
    } else if (speedQuestionType === 2) {
        label.textContent = __('speedV1Prompt');
        word.textContent = getVerbTranslation(speedCurrentVerb);
        input.placeholder = __('speedV1Placeholder');
    } else {
        label.textContent = __('speedV1Prompt');
        word.textContent = speedCurrentVerb.v2;
        input.placeholder = __('speedV1Placeholder');
    }
}

function speedSpeak() {
    if (!speedCurrentVerb) return;
    const formKey = speedQuestionType <= 1 ? 'v1' : speedQuestionType === 3 ? 'v2' : 'v1';
    speakVerbForm(speedCurrentVerb, formKey);
}

function checkSpeedAnswer() {
    if (speedAnswered || speedRemaining <= 0) return;
    speedAnswered = true;

    const input = document.getElementById('speed-input');
    const feedback = document.getElementById('speed-feedback');
    const answer = normalizeTyped(input.value);
    let correct = false;
    let correctAnswer = '';

    if (!answer) {
        speedAnswered = false;
        input.focus();
        return;
    }

    if (speedQuestionType === 0) {
        correctAnswer = speedCurrentVerb.v2;
        correct = getAcceptedVariations(correctAnswer).includes(answer);
    } else if (speedQuestionType === 1) {
        correctAnswer = speedCurrentVerb.v3;
        correct = getAcceptedVariations(correctAnswer).includes(answer);
    } else if (speedQuestionType === 2) {
        correctAnswer = speedCurrentVerb.v1;
        correct = getAcceptedVariations(correctAnswer).includes(answer);
    } else {
        correctAnswer = speedCurrentVerb.v1;
        correct = getAcceptedVariations(correctAnswer).includes(answer);
    }

    input.disabled = true;
    speedTotal++;

    if (correct) {
        speedScore++;
        speedRemaining++;
        document.getElementById('speed-score').textContent = speedScore;
        document.getElementById('speed-timer-display').textContent = speedRemaining;
        feedback.textContent = '✓ ' + __('speedCorrect') + '!';
        feedback.className = 'p-4 rounded-lg text-center font-bold text-lg bg-green-50 text-green-700';
        input.classList.remove('border-slate-300', 'border-red-500');
        input.classList.add('border-green-500');
        playSound('correct');
        markVerbSeen(speedCurrentVerb.v1);
    } else {
        const form = speedQuestionType === 0 ? 'v2' : speedQuestionType === 1 ? 'v3' : 'spelling';
        recordMistake(speedCurrentVerb, form);
        document.getElementById('speed-timer-display').textContent = speedRemaining;
        feedback.innerHTML = '✗ ' + __('speedWrong') + ': <strong>' + correctAnswer + '</strong>';
        feedback.className = 'p-4 rounded-lg text-center font-bold text-lg bg-red-50 text-red-700';
        input.classList.remove('border-slate-300', 'border-green-500');
        input.classList.add('border-red-500');
        playSound('wrong');
        markVerbSeen(speedCurrentVerb.v1);
    }

    answerFeedback(correct, feedback);
    feedback.classList.remove('hidden');
    document.getElementById('btn-speed-check').classList.add('hidden');
    document.getElementById('btn-speed-next').classList.remove('hidden');

    setTimeout(loadSpeedQuestion, correct ? 600 : 900);
}

function endSpeedRun() {
    if (speedEnded) return;
    speedEnded = true;
    clearInterval(speedTimerInterval);
    speedTimerInterval = null;
    stopSessionTimer();

    document.getElementById('speed-active').classList.add('hidden');
    document.getElementById('speed-results').classList.remove('hidden');

    document.getElementById('speed-result-score').textContent = speedScore;
    document.getElementById('speed-result-correct').textContent = speedTotal;
    const accuracy = speedTotal > 0 ? Math.round((speedScore / speedTotal) * 100) : 0;
    document.getElementById('speed-result-accuracy').textContent = accuracy + '%';

    const prev = parseInt(settings.speedHighScore || 0);
    const isNewRecord = speedScore > prev;
    document.getElementById('speed-new-record').classList.toggle('hidden', !isNewRecord);
    if (isNewRecord) {
        settings.speedHighScore = speedScore;
        localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    }
    document.getElementById('speed-high-score-display').textContent = Math.max(prev, speedScore);

    if (!settings.speedHighScores) settings.speedHighScores = [];
    settings.speedHighScores.push({ score: speedScore, accuracy: accuracy, date: new Date().toLocaleDateString() });
    settings.speedHighScores.sort(function(a, b) { return b.score - a.score; });
    settings.speedHighScores = settings.speedHighScores.slice(0, 10);
    localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    renderSpeedLeaderboard();

    trackSessionEnd(speedScore, speedTotal);
    checkAchievements();
}

function renderSpeedLeaderboard() {
    const container = document.getElementById('speed-leaderboard');
    if (!container) return;
    const scores = settings.speedHighScores || [];
    if (scores.length === 0) {
        container.innerHTML = '<p class="text-sm text-slate-400 text-center">' + __('noRecords') + '</p>';
        return;
    }
    let html = '<div class="space-y-1.5">';
    scores.forEach(function(entry, i) {
        const medal = i === 0 ? '<i class="fas fa-trophy text-yellow-400"></i>' : i === 1 ? '<i class="fas fa-medal text-slate-400"></i>' : i === 2 ? '<i class="fas fa-medal text-amber-600"></i>' : '<span class="text-xs text-slate-400 w-5 text-center inline-block">' + (i + 1) + '</span>';
        html += '<div class="flex items-center justify-between text-xs px-3 py-1.5 rounded-lg bg-slate-50">';
        html += '<span class="flex items-center gap-2">' + medal + ' <span class="font-semibold">' + entry.score + '</span></span>';
        html += '<span class="text-slate-400">' + entry.accuracy + '% · ' + entry.date + '</span>';
        html += '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
}

function resetSpeedRun() {
    clearInterval(speedTimerInterval);
    speedTimerInterval = null;
    speedEnded = false;
    document.getElementById('speed-results').classList.add('hidden');
    document.getElementById('speed-active').classList.add('hidden');
    document.getElementById('speed-start').classList.remove('hidden');
    document.getElementById('speed-high-score-display').textContent = settings.speedHighScore || 0;
}
// ================= END SPEED RUN =================

// ================= PWA INSTALL =================
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById('pwa-install-btn');
    const installBtnAbout = document.getElementById('pwa-install-btn-about');
    if (installBtn) installBtn.classList.remove('hidden');
    if (installBtnAbout) installBtnAbout.classList.remove('hidden');
});

function installPWA() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function(result) {
        deferredPrompt = null;
        const installBtn = document.getElementById('pwa-install-btn');
        const installBtnAbout = document.getElementById('pwa-install-btn-about');
        if (installBtn) installBtn.classList.add('hidden');
        if (installBtnAbout) installBtnAbout.classList.add('hidden');
        if (result.outcome === 'accepted') {
            showToast(__('pwaInstalled'), 'success');
        }
    });
}

// ================= ИНИЦИАЛИЗАЦИЯ =================
const origSwitchTab = switchTab;
switchTab = function(tabId) {
    if (speedTimerInterval) {
        clearInterval(speedTimerInterval);
        speedTimerInterval = null;
    }
    origSwitchTab(tabId);
    if (tabId === 'mistakes') {
        openMistakesTab();
    } else if (tabId === 'speed') {
        resetSpeedRun();
    } else if (tabId === 'stats') {
        renderStats();
    } else if (tabId === 'dashboard') {
        renderHome();
    } else if (tabId === 'exam') {
        if (document.getElementById('exam-results').classList.contains('hidden') &&
            !document.getElementById('exam-active').classList.contains('hidden')) {
            // keep active exam state
        } else {
            resetExam();
        }
    }
    if (tabId !== 'dashboard') {
        settings.lastActiveTab = tabId;
        localStorage.setItem('verbTrainerSettings', JSON.stringify(settings));
    }
    if (document.body.classList.contains('focus-mode')) {
        toggleFocusMode(false);
    }
};

window.onload = () => {
    const versionEl = document.getElementById('app-version');
    if (versionEl) versionEl.textContent = APP_VERSION;
    if (settings.darkMode) {
        document.body.classList.add('dark');
    }
    setGradientCSS(settings.gradientFrom || '#4f46e5', settings.gradientTo || '#7c3aed');
    applyCompactMode();
    applyWelcomeAlign();
    renderDictionary();
    setFlashcardGroup('all');
    if (document.getElementById('setting-complexity')) {
        document.getElementById('setting-complexity').value = settings.complexity || 'all';
    }
    if (document.getElementById('setting-lang')) {
    document.getElementById('setting-lang').value = settings.lang || getSystemLang();
    const favOnlyEl = document.getElementById('setting-fav-only');
    if (favOnlyEl) favOnlyEl.checked = settings.favOnly === true;
    }
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(function() {});
    }
    applyLanguage();
    updateNavProgress();
    renderVerbOfDay();
    renderHome();
    renderSpeedLeaderboard();
    const savedGroup = settings.verbGroup || 'all';
    if (savedGroup !== 'all') {
        const dictBtn = document.getElementById(`dict-group-${savedGroup}`);
        if (dictBtn) {
            document.querySelectorAll('.dict-group-btn').forEach(b => b.className = "dict-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50");
            dictBtn.className = "dict-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-indigo-600 text-white shadow-sm";
        }
        ['let', 'tr', 'speed'].forEach(prefix => {
            const btn = document.getElementById(`${prefix}-group-${savedGroup}`);
            if (btn) {
                document.querySelectorAll(`#${prefix}-group-all, #${prefix}-group-1, #${prefix}-group-2, #${prefix}-group-3, #${prefix}-group-4`).forEach(b => {
                    if (b) b.className = "trainer-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50";
                });
                btn.className = "trainer-group-btn px-3 py-1 rounded-full text-xs font-semibold transition-colors bg-indigo-600 text-white shadow-sm";
            }
        });
    }
    if (!settings.welcomeShown) {
        setTimeout(showWelcome, 400);
    }
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (settings.darkMode === undefined || settings.darkMode === null) {
                document.body.classList.toggle('dark', e.matches);
                setGradientCSS(settings.gradientFrom || '#4f46e5', settings.gradientTo || '#7c3aed');
            }
        });
    }
};
