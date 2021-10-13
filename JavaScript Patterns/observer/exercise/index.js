class Event {
  constructor() {
    this.callbacks = new Map();
    this.callbacksLength = 0;
  }

  subscribe(callback) {
    this.callbacks.set(++this.callbacksLength, callback);
    return this.callbacksLength;
  }

  unsubscribe(idx) {
    this.callbacks.delete(idx);
  }

  fire(sender, args = null) {
    this.callbacks.forEach((callback) => callback(sender, args));
  }
}

class Game {
  constructor() {
    this.ratJoins = new Event();
    this.ratDies = new Event();
    this.anotherRatJoins = new Event();
  }

  fireRatJoins(sender) {
    this.ratJoins.fire(sender);
  }

  fireRatDies(sender) {
    this.ratDies.fire(sender);
  }

  fireAnotherRatJoins(sender, rat) {
    this.anotherRatJoins.fire(sender, rat);
  }
}

class Rat {
  constructor(name, game) {
    this.name = name;
    this.game = game;
    this.attack = 1;

    this.game.ratJoins.subscribe(this.ratJoins);
    this.game.anotherRatJoins.subscribe(this.anotherRatJoins);
    this.game.ratDies.subscribe(this.ratDies);

    game.fireRatJoins(this);
  }

  ratJoins = (sender) => {
    if (sender !== this) {
      this.attack++;
      this.game.fireAnotherRatJoins(null, sender);
    }
  };

  anotherRatJoins = (sender, rat) => {
    if (rat === this) this.attack++;
  };

  ratDies = () => this.attack--;

  die = () => this.game.fireRatDies(this);
}

const game = new Game();

const rat1 = new Rat("John", game);
const rat2 = new Rat("Jane", game);

console.log(rat1.attack);
console.log(rat2.attack);

rat2.die();

console.log(rat1.attack);
console.log(rat2.attack);
