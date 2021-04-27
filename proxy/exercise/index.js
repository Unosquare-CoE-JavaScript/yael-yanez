class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  drive() {
    return `${this.name} is driving`;
  }

  drink() {
    return `${this.name} is driking`;
  }

  drinkingAndDriving() {
    return `${this.name} is dead`;
  }
}

class ResponsablePerson {
  constructor(person) {
    this.person = person;
    this.isDriving = false;
    this.isDrinking = false;
  }

  drive() {
    if (this.person.age < 16)
      return `${this.person.name} is too young for driving`;

    return this.person.drive();
  }

  drink() {
    if (this.person.age < 18)
      return `${this.person.name} is too young for drinking`;

    return this.person.drink();
  }

  drinkingAndDriving() {
    return this.person.drinkingAndDriving();
  }
}

const person1 = new ResponsablePerson(new Person(22, "Yael"));
console.log(person1.drink());
console.log(person1.drive());
console.log(person1.drinkingAndDriving());

const person2 = new ResponsablePerson(new Person(17, "Antonio"));
console.log(person2.drink());
console.log(person2.drive());
console.log(person2.drinkingAndDriving());
