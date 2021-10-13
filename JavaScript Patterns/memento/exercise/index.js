class Token {
  constructor(value = 0) {
    this.value = value;
  }
}

class Memento {
  constructor() {
    this.tokens = [];
  }
}

class MachineToken {
  constructor() {
    this.tokens = [];
  }

  addTokenByValue(value) {
    const token = new Token(value);
    this.addTokenByReference(token);
  }

  addTokenByReference(token) {
    const memento = new Memento();

    this.tokens.push(token);
    memento.tokens = this.tokens.map((token) => new Token(token.value));

    return memento;
  }

  revert(memento) {
    this.tokens = memento.tokens.map((token) => new Token(token.value));
  }
}

let tokenValue = 22;
const token = new Token(tokenValue);
const machineToken = new MachineToken();

machineToken.addTokenByValue(tokenValue);
const memento = machineToken.addTokenByReference(token);

token.value = tokenValue += tokenValue;

console.log(machineToken.tokens);

machineToken.revert(memento);
console.log(machineToken.tokens);
