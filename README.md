<div align="center">

# EasyVerbs

### Irregular English Verbs Trainer

Vanilla JS · PWA · No frameworks · No ads

[![Version](https://img.shields.io/badge/Version-v0.6.7--beta-blueviolet?style=for-the-badge&logo=semver)](https://github.com/kik4311/EasyVerbs/releases)
[![License](https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge&logo=gnu)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Yes-ff69b4?style=for-the-badge&logo=pwa)](manifest.json)
[![Status](https://img.shields.io/badge/Status-Ready-28a745?style=for-the-badge&logo=checkmarx)](https://kik4311.github.io/EasyVerbs/)

![JavaScript](https://img.shields.io/badge/JavaScript-354.8k-F7DF1E?style=for-the-badge&logo=javascript)
![HTML](https://img.shields.io/badge/HTML-177.2k-orange?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/CSS-52.2k-1572B6?style=for-the-badge&logo=css3)

[**Open the site →**](https://kik4311.github.io/EasyVerbs/)

</div>

---

## Features

| Category | What it does |
|----------|--------------|
| **Dictionary** | 100+ verbs V1/V2/V3, search, favorites, group filters |
| **Flashcards** | 3D flip cards with a quiz |
| **Letters** | Fill in the missing letters of the verb form |
| **Forms** | 6 training modes: form input, translation, sentences, audio, match, marathon |
| **Sprint** | 60-second timed race with a leaderboard |
| **Mistakes** | Work on your mistakes with 3 modes |
| **Prepositions** | Practice verb prepositions |
| **Statistics** | Accuracy, sessions, 30-day activity, top mistakes, group progress |
| **Dark mode** | Auto by system / manual, animated gradient blobs |
| **Accents** | 7 presets + custom color picker |
| **Sound** | Pronunciation via Web Speech API |
| **Spaced repetition** | Smart review of problem verbs |
| **Achievements** | 9 badges for your progress |
| **Custom verbs** | Add / export / import |
| **Export statistics** | JSON and CSV |
| **PWA** | Works offline, installable on your phone |
| **i18n** | 6 interface languages |
| **Device power check** | Auto-detects cores, RAM, GPU, network, battery and FPS, then suggests the lite version |
| **Lite version** | `lite.html` — no external libraries, no animations, opens instantly, shares progress with the full version |

## Lite version

`lite.html` is a stripped-down build for slow devices and slow networks. It has no CDN
dependencies (no Tailwind, Font Awesome or Google Fonts), no animations and no glass effects,
so it loads instantly and keeps CPU load low.

| | Full | Lite |
|---|---|---|
| Files | `index.html` + Tailwind/Font Awesome/Google Fonts | `lite.html` + own CSS |
| Size | ~180 kB translations, heavy visuals | 28 kB translations, no external requests |
| Trainer / Dictionary / Flashcards / Mistakes | yes | yes |
| Letters / Prepositions / Sprint / Exam / Stats / Achievements | yes | — |

Progress is **shared**: both versions read and write the same `verbTrainerSettings` and
`verbTrainerErrors` localStorage keys, so favorites, statistics and mistakes are the same
wherever you train.

Switch manually at any time: *Настройки → Производительность* in the full version, or the
footer link in the lite version. On first visit the app measures the device (cores, RAM,
GPU, network, battery, reduced motion and measured FPS), scores it from 0 to 100 and offers
the lite version once if the score is below 65 — then never again for 14 days. Choose
*Больше не предлагать* to disable the check permanently.

## Stack

Vanilla JS · CSS Custom Properties · Web Speech API · Web Audio API · Font Awesome 6 · localStorage · GitHub Pages

## Getting Started

No build tools — open `index.html` in your browser and you're done.

```sh
git clone https://github.com/kik4311/EasyVerbs.git
cd EasyVerbs
# open index.html
```

## License

Distributed under the [GPL-3.0](LICENSE) license.

## Authors

- [kik4311](https://github.com/kik4311)

We in Discord: https://discord.gg/uCyCA6FE3N
