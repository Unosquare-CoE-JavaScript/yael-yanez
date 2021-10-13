/*

  * Ordernary statements are perishable
    * Cannot undo member assigment
    * Cannot directly seralize a sequence of actions (calls)
  * Want an object that represents an operation
    * person should change its age to value 22
    * car should do explode()
  * Uses: GUI Commands, multi-level undo/redo, macro recording and more!
  
  An object which represents an instruction to perform a particular action.
  Contains all the information necessary for the action to be taken.

*/

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposite(amount) {
    this.balance += amount;

    console.log(`Deposited ${amount}, balance is now ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}, balance is now ${this.balance}`);

      return true;
    }

    return false;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

BankAccount.overdraftLimit = -500;

let Action = Object.freeze({
  deposit: 1,
  withdraw: 2,
});

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
    this.succeeded = false;
  }

  call() {
    if (this.action === Action.deposit) {
      this.account.deposite(this.amount);
      this.succeeded = true;
    }
    if (this.action === Action.withdraw) {
      this.succeeded = this.account.withdraw(this.amount);
    }
  }

  undo() {
    if (!this.succeeded) return;

    if (this.action === Action.deposit) this.account.withdraw(this.amount);
    if (this.action === Action.withdraw) this.account.deposite(this.amount);
  }
}

const bankAccount = new BankAccount(100);

const bankAccountCommand = new BankAccountCommand(
  bankAccount,
  Action.withdraw,
  650
);

bankAccountCommand.call();
console.log(bankAccount.toString());

bankAccountCommand.undo();
console.log(bankAccount.toString());
