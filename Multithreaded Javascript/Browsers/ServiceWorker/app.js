// Register service worker and defines scope.
navigator.serviceWorker.register('/Browsers/ServiceWorker/service-worker.js', {
  scope: '/Browsers/ServiceWorker/',
});

// Listens for a controllerchange event
navigator.serviceWorker.oncontrollerchange = () => {
  console.log('controller change');
};

// Function for initiate request
async function makeRequest() {
  const result = await fetch('/data.json');
  const payload = await result.json();

  console.log(payload);
}

const makeRequestBtn = document.getElementById('makeRequestBtn');

makeRequestBtn.onclick = () => {
  makeRequest();
};
