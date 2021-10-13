// ➜ object account snapshot
class Memento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance) {
    this.balance = balance;
    this.changes = [new Memento(balance)];
    this.currentState = 0;
  }

  deposit(amount) {
    this.balance += amount;

    const snapshot = new Memento(this.balance);
    this.changes.push(snapshot);
    this.currentState++;

    return snapshot;
  }

  restore(memento) {
    if (memento) {
      this.balance = memento.balance;
      this.push.push(memento);
      this.currentState = this.changes.count - 1;
    }
  }

  undo() {
    if (this.currentState > 0) {
      const memento = this.changes[--this.currentState];
      this.balance = memento.balance;

      return memento;
    }

    return null;
  }

  redo() {
    if (this.currentState + 1 < this.changes.length) {
      const memento = this.changes[++this.currentState];
      this.balance = memento.balance;

      return memento;
    }

    return null;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

const bankAccount = new BankAccount(100);

const memento1 = bankAccount.deposit(50);
const memento2 = bankAccount.deposit(25);
console.log(bankAccount.toString()); // 175

bankAccount.undo(); // 150
console.log("Undo 1: " + bankAccount.toString());

bankAccount.undo(); // 100
console.log("Undo 2: " + bankAccount.toString());

bankAccount.redo(); // 150
console.log("Redo 1: " + bankAccount.toString());
