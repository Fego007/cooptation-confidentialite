/* Prépa F4 2027 : cache hors ligne. Changer VERSION à chaque mise à jour des fichiers. */
const VERSION = "prepa-f4-2026-11-23c";
const ASSETS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png",
  "./fonts/barlow-400.woff2", "./fonts/barlow-500.woff2", "./fonts/barlow-600.woff2",
  "./fonts/barlow-condensed-600.woff2", "./fonts/barlow-condensed-700.woff2"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === "navigate") {
    // la page : réseau d'abord pour recevoir les mises à jour, cache si hors ligne
    e.respondWith(fetch(req).then((res) => { const cp = res.clone(); caches.open(VERSION).then((c) => c.put("./index.html", cp)); return res; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => { const cp = res.clone(); caches.open(VERSION).then((c) => c.put(req, cp)); return res; })));
});
