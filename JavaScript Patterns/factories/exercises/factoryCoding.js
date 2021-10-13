class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class PersonFactory {
  constructor() {
    this.id = 0;
  }

  createPerson(name) {
    this.person = new Person(name, this.id);
    this.id = this.id + 1;

    return this.person;
  }
}

const personFactory = new PersonFactory();

let person0 = personFactory.createPerson("Yael");
let person1 = personFactory.createPerson("Alan");
let person2 = personFactory.createPerson("Elliot");

console.log(person0);
console.log(person1);
console.log(person2);
