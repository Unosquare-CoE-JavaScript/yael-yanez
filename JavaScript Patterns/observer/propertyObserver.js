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

    this._age = value;
    this.propertyChanged.fire(this, new PropertyChangedArgs("age", value));
  }
}

class RegistrationChecker {
  constructor(person) {
    this.person = person;
    this.subscriptionToken = person.propertyChanged.subscribe(
      this.ageChanged.bind(this)
    );
  }

  ageChanged(sender, args) {
    if (sender === this.person && args.name === "age") {
      if (args.newValue < 13)
        console.log("➜ Sorry, you are still too young.\n");
      else {
        console.log("➜ Okay, you can register\n");

        sender.propertyChanged.unsubscribe(this.subscriptionToken);
      }
    }
  }
}

const yael = new Person();
const checker = new RegistrationChecker(yael);

for (let age = 10; age < 20; ++age) {
  console.log(`Changing age to ${age}`);
  yael.age = age;
}
