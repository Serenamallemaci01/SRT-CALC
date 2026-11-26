// SRT Calc 1.6: guarda la aplicación en el dispositivo para usarla sin internet.
// La página se pide primero a internet (así cada versión nueva se ve apenas se publica)
// y, si no hay conexión o tarda más de 3 segundos, se usa la copia guardada.
// Al publicar una versión nueva, cambiar CACHE para que se renueven también tipografías e íconos.
const CACHE = 'srtcalc-v1.6';
const NET_TIMEOUT = 3000;
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './qrcode.js',
  './icono-192.png',
  './icono-512.png',
  './icono-maskable-512.png',
  './apple-touch-icon.png',
  './fonts/atkinson-hyperlegible-latin-400-normal.woff2',
  './fonts/atkinson-hyperlegible-latin-700-normal.woff2',
  './fonts/barlow-condensed-latin-500-normal.woff2',
  './fonts/barlow-condensed-latin-600-normal.woff2',
  './fonts/barlow-condensed-latin-700-normal.woff2'
];

self.addEventListener('install', (event) => {
  // cache: 'reload' evita guardar una copia vieja que el navegador tenga en su memoria temporal
  event.waitUntil(caches.open(CACHE)
    .then((c) => c.addAll(ASSETS.map((u) => new Request(u, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});

function pageFromNetworkFirst(url) {
  return new Promise((resolve) => {
    let done = false;
    const finish = (res) => { if (!done) { done = true; clearTimeout(timer); resolve(res); } };
    const fromCache = () => caches.match('./index.html').then((r) => r || caches.match('./'));
    const timer = setTimeout(() => { fromCache().then((r) => { if (r) finish(r); }); }, NET_TIMEOUT);
    fetch(url, { cache: 'no-cache', credentials: 'same-origin' })
      .then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); }
        finish(res);
      })
      .catch(() => fromCache().then((r) => finish(r || Response.error())));
  });
}

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('srtcalc-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate' && (url.pathname.endsWith('/') || url.pathname.endsWith('/index.html'))) {
    event.respondWith(pageFromNetworkFirst(url.origin + url.pathname));
    return;
  }
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((r) => r || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
