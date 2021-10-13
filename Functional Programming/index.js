const _ = require("./underscore");

const createSuspectObjects = (suspectName) => ({
  name: suspectName,
  color: suspectName.split(" ")[0],
  speak: () => console.log(`My name is ${suspectName}`),
});

const suspects = ["Yael Yañez", "Alan Yañez", "Elliot Yañez"];

const suspectsObj = _.map(suspects, (suspect) => createSuspectObjects(suspect));
const [{ color: color1 }, { color: color2 }] = suspectsObj;

const filteredSuspects = _.fiter(
  suspectsObj,
  (suspect) => suspect.color === "Alan"
);

const constArray = function () {
  const arr = Array.prototype.slice.call(arguments);
  arr.push("!");
  return arr.join(" ");
};

const args = constArray("hello", "world");
const from = _.from(["hello", "world"]);
const reducer = _.reduce([1, 2, 3, 10], (result, value) => result + value, 0);
const forEachRight = _.forEachRight([1, 2, 3], (name) => console.log(name));
