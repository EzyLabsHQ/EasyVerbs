// EasyVerbs
// Copyright (C) 2026 EzyLabsHQ
// This program is free software under GPL v3 - see LICENSE

const CACHE = 'easyverbs-v0.6.5';
const URLS = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'translations.js',
  'manifest.json',
  'logo.svg',
  'logo-dark.svg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(resp) {
      if (resp && resp.status === 200 && event.request.method === 'GET') {
        const copy = resp.clone();
        caches.open(CACHE).then(function(cache) {
          cache.put(event.request, copy);
        });
      }
      return resp;
    }).catch(function() {
      return caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
        return new Response('', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
