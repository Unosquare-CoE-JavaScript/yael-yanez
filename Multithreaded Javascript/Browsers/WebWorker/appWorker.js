const rangeSliderWorker = document.getElementById('rangeWorker');
const generateFibBtnWorker = document.getElementById('generateFibBtnWorker');
const fibInputWorker = document.getElementById('fibonacciWorker');
const rangeValueWorker = document.getElementById('rangeValueWorker');
const fibResultWorker = document.getElementById('fib-resultWorker');

const worker = new window.Worker('worker.js');

worker.onmessage = (evt) => {
  const { index, number } = evt.data;
  fibResultWorker.innerText = `${index}  => ${number}`;
};

rangeSliderWorker.oninput = ({ target }) => {
  rangeValueWorker.innerText = target.value;
};

generateFibBtnWorker.onclick = () => {
  worker.postMessage({ index: fibInputWorker.value });
};
