/*

  * Takes a function as an input (argument)
  * Return a function as a function
  
*/

const _ = require("./underscore");

/* Callbacks: functions we pass as parameters */
const ifElse = (condition, isTrue, isFalse, ...args) =>
  condition ? isTrue(...args) : isFalse(...args);

const logTrue = (...msg) => console.log(msg);
const logFalse = (...msg) => console.log(msg);

ifElse(true, logTrue, logFalse, "Hello", "Word"); // true

/* Passing Arguments */
const increment = (n) => ++n;
const square = (n) => n * n;

const doMathSoIDontHaveTo = (n, fn) => console.log(fn(n));

doMathSoIDontHaveTo(5, increment); //! 6
doMathSoIDontHaveTo(5, square); //! 25

/* Currying */
const abc = (a, b) => [a, b];
const curried = _.curry(abc);

console.log(curried(1)(2)); //! [1, 2]

/* Composing */
const consider = (name) => `I think it could be... ${name}`;
const explain = (statement) => `${statement.toUpperCase()}`;

const blame = _.compose(consider, explain);
console.log(blame("you")); //! I think it ocould be YOU

/* Clousure */
const myAlert = () => {
  const x = "Hello, there";
  let count = 0;

  const alerter = () => console.log(`${x} ${++count}`);

  return alerter;
};

const functAlert = myAlert();
const functAlert2 = myAlert();

functAlert();
functAlert();

const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

const didGreenDidItwithA = newClue("Green");
console.log(didGreenDidItwithA("gun"));
console.log(didGreenDidItwithA("lead pipe"));
