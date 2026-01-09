// TuxMate Service Worker
// caches the entire static app for offline use - perfect for those fresh installs with spotty wifi

const CACHE_NAME = 'tuxmate-v1';

// install: we'll cache on-demand instead of precaching
// Next.js dev mode doesn't have static files where we expect them
self.addEventListener('install', () => {
    // skipWaiting so updates apply immediately
    self.skipWaiting();
});

// activate: clean up old caches when we update
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => {
            // take control of all clients immediately
            return self.clients.claim();
        })
    );
});

// fetch: cache-first with network fallback
// cache everything we successfully fetch for offline use
self.addEventListener('fetch', (event) => {
    // only handle GET requests
    if (event.request.method !== 'GET') return;

    // skip chrome-extension, analytics, and other non-http requests
    const url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) return;

    // skip external requests (analytics, fonts CDN, etc.) - only cache our stuff
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // got it cached, serve it up
                return cachedResponse;
            }

            // not cached, fetch and cache it for next time
            return fetch(event.request).then((response) => {
                // don't cache non-ok responses
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // clone because response can only be consumed once
                const responseToCache = response.clone();

                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            });
        })
    );
});
