class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  // 1) who fired the event?
  // 2) additional data (event args)
  fire(sender, args) {
    this.handlers.forEach((callback) => callback(sender, args));
  }
}

class PropertyChangedArgs {
  constructor(name, newValue) {
    this.name = name;
    this.newValue = newValue;
  }
}

class Person {
  constructor(age = 0) {
    this._age = age;
    this.propertyChanged = new Event();
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (!value || this._age === value) return;

    const oldCanVote = this.canVote;

    this._age = value;
    this.propertyChanged.fire(this, new PropertyChangedArgs("age", value));

    if (oldCanVote !== this.canVote)
      this.propertyChanged.fire(
        this,
        new PropertyChangedArgs("canVote", this.canVote)
      );
  }

  get canVote() {
    return this._age >= 16;
  }
}

class VotingChecker {
  constructor(person) {
    this.person = person;
    this.person.propertyChanged.subscribe(this.votingChanged.bind(this));
  }

  votingChanged(sender, args) {
    if (sender === this.person && args.name == "canVote") {
      console.log(`Voting status changed to ${args.newValue}`);
    }
  }
}

const yael = new Person();
const checker = new VotingChecker(yael);

for (let age = 10; age < 20; ++age) {
  console.log(`Changing age to ${age}`);
  yael.age = age;
}
