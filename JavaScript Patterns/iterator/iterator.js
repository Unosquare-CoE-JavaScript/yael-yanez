/*

  * Iteration (traversal) is a core functionality of various data structures
  * An iterator is a class that facilites the traversal
    * Keeps a reference to the current element
    * Knows hot to move to a different element
    * Knows when its done and there are no elements to move to
  * Javascript supports this through:
    * Symbol.iterator member that returns an iterator object with a function caled next() that returns:
      * the value being iterated
      * the done flag indicated whether iteration is finished
    * An iterator object itself can also be made iterable

  An object that facilities the traversal of a data structure

*/

class Stuff {
  constructor() {
    this.a = 11;
    this.b = 22;
  }

  [Symbol.iterator]() {
    let counter = 0;
    let self = this;

    return {
      next: function () {
        return {
          done: counter > 1,
          value: self[counter++ === 0 ? "a" : "b"],
        };
      },
    };
  }

  get backwards() {
    let counter = 0;
    let self = this;

    return {
      next: function () {
        return {
          done: counter > 1,
          value: self[counter++ === 0 ? "b" : "a"],
        };
      },
      [Symbol.iterator]: function () {
        return this;
      },
    };
  }
}

const values = [100, 200, 300];

// for (let idx in values) console.log(`Element at pos ${idx} is ${values[idx]}`);

// for (let value of values) console.log(`Value is ${value}`);

const stuff = new Stuff();

for (let item of stuff) console.log(item);

for (let item of stuff.backwards) console.log(item);
