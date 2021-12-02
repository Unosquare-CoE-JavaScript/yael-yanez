const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

self.onmessage = (evt) => {
  const { index } = evt.data;
  const number = fib(index);

  self.postMessage({ index, number });
};
