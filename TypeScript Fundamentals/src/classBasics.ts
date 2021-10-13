import type { HasEmail, HasPhoneNumber } from "./index";

export class Contact implements HasEmail {
  email: string;
  name: string;

  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}

class ParamPropContact implements HasEmail {
  constructor(public name: string, public email: string = "no email") {
    // Nothing needed
  }
}

const x = new ParamPropContact("a", "b");

class OtherContact implements HasEmail, HasPhoneNumber {
  protected age: number = 0;
  private password: string;

  constructor(public name: string, public email: string, public phone: number) {
    this.age = 35;
  }
}
