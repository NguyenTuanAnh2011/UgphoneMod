const cacheName = 'ugphone-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/sw.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Orbitron&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});