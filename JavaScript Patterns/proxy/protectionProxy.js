class Car {
  drive() {
    console.log("Car is being driven");
  }
}

// this is the proxy
class CarProxy {
  constructor(driver) {
    this.driver = driver;
    this._car = new Car();
  }

  drive() {
    if (this.driver.age >= 16) this._car.drive();
    else console.log("Driver too young");
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

const car = new Car();
car.drive();

const car2 = new CarProxy(new Driver(16));
car2.drive();
