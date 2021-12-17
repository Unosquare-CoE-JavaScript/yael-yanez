const fibWorker = (n) => (n < 2 ? n : fibWorker(n - 1) + fibWorker(n - 2));

self.onmessage = (evt) => {
  const { index } = evt.data;
  const number = fibWorker(index);

  self.postMessage({ index, number });
};
