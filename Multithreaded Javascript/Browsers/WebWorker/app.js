const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

const rangeSlider = document.getElementById('range');
const generateFibBtn = document.getElementById('generateFibBtn');
const fibInput = document.getElementById('fibonacci');
const rangeValue = document.getElementById('rangeValue');
const fibResult = document.getElementById('fib-result');

rangeSlider.oninput = ({ target }) => {
  rangeValue.innerText = target.value;
};

generateFibBtn.onclick = () => {
  fibResult.innerText = `${fibInput.value}  => ${fib(fibInput.value)}`;
};
