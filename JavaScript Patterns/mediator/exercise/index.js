class Participant {
  constructor(name) {
    this.name = name;
    this.value = 0;
  }

  say(value) {
    this.room.increaseOthersMembersValue(this.name, value);
  }

  increaseValue(source, value) {
    const currentValue = this.value;

    this.value += value;

    if (this.value > currentValue)
      console.log(
        `➜ ${source} has increased ${this.name}'s current value from ${currentValue} to ${this.value}. `
      );
  }
}

class IncreaserMediator {
  constructor() {
    this.participants = [];
  }

  join(person) {
    console.log(`[${person.name} has join with a value of ${person.value}]`);

    person.room = this;
    this.participants.push(person);
  }

  increaseOthersMembersValue(source, value) {
    for (let participant of this.participants) {
      if (participant.name !== source) participant.increaseValue(source, value);
    }
  }
}

const increaserMediator = new IncreaserMediator();

const john = new Participant("John");
const jane = new Participant("Jane");
const doe = new Participant("Doe");

increaserMediator.join(john);
increaserMediator.join(jane);
increaserMediator.join(doe);
console.log("——————————————————————————————————————————————————————————\n");

john.say(5);
console.log("\n");

jane.say(10);
console.log("\n");

doe.say(20);
console.log("\n");
