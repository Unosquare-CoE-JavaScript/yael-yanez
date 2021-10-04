export class Contact {
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }
}
class ParamPropContact {
    constructor(name, email = "no email") {
        this.name = name;
        this.email = email;
        // Nothing needed
    }
}
const x = new ParamPropContact("a", "b");
class OtherContact {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = 0;
        this.age = 35;
    }
}
