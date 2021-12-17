let counter = 0;

// Runs when this SW version is installed for the first time in the browser.
self.oninstall = (event) => {
  console.log('Service Worker Install');
};

// Event used for performing cleanup work when new versions of the SW are introduced.
self.onactivate = (event) => {
  console.log('Service Worker Activate');

  // Event for controlling the SW from the page that first instances it.
  event.waitUntil(self.clients.claim());
};

self.onfetch = (event) => {
  console.log('fetch', event.request.url);

  if (event.request.url.endsWith('/data.json')) {
    counter++;

    event.respondWith(
      new Response(JSON.stringify({ counter }), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );

    return;
  }

  // fallback to normal HTTP request
  event.respondWith(fetch(event.request));
};
