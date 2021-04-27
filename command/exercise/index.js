let Action = Object.freeze({
  deposit: 0,
  withdraw: 1,
});

class Command {
  constructor(action, ammount) {
    this.action = action;
    this.ammount = ammount;
    this.success = false;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  process(command) {
    if (command.action === Action.deposit) {
      this.balance += command.ammount;
      command.success = true;

      return this;
    }

    if (command.action === Action.withdraw) {
      command.success = this.balance >= command.ammount;
      if (command.success) this.balance -= command.ammount;

      return this;
    }
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

const account = new BankAccount();

const depositCmd = new Command(Action.deposit, 500);
const withdrawCmd = new Command(Action.withdraw, 50);

account.process(depositCmd).process(withdrawCmd);

console.log(account.toString());
