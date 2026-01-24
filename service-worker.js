const CACHE_NAME = "viewer-pwa-v1";
const ASSETS = [
  "/statistiche/viewer.html",
  "/statistiche/manifest.webmanifest",
  "/statistiche/icons/icon-192.png",
  "/statistiche/icons/icon-512.png",
  "/statistiche/icons/icon-192-maskable.png",
  "/statistiche/icons/icon-512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Cache-first per risorse della stessa origine
  if (new URL(req.url).origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req))
    );
  }
});
