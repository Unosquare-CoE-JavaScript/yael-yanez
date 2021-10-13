//* Segregate (split up) interfaces into different parts so people don't implement more that what they need.

class Document {}

class Machine {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract!");
  }

  print(doc) {}

  fax(doc) {}

  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {
    // action
  }

  fax(doc) {
    // action
  }

  scan(doc) {
    // action
  }
}

class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not impletemented`;

    super(msg);

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, NotImplementedError);
  }
}

class OldFashionPrinter extends Machine {
  print(doc) {
    // ok
  }

  // fax(doc) {
  //   // do nothing
  //   // principle of least surprise
  // }

  scan(doc) {
    throw new NotImplementedError("OldFashionPrinter.scan");
  }
}

let printer = new OldFashionPrinter();
printer.scan();

//* Interface Segregation Principle
class Printer {
  constructor() {
    if (this.constructor.name === "Printer")
      throw new Error("Printer is abstract!");
  }

  print(doc) {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner")
      throw new Error("Scan is abstract!");
  }

  scan(doc) {}
}

class Photocopier {
  constructor() {
    if (this.constructor.name === "Scanner")
      throw new Error("Scan is abstract!");
  }

  print(doc) {}
  scan(doc) {}
}
