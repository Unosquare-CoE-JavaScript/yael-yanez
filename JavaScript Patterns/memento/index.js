/*

  * An object or system goes through changes
    * e.g., a bank account gets deposits and withdrawls
  * There are different ways of navigating those changes
  * One way is to record every change (Command) and teach a commant to 'undo' itself
  
  A token/handle representing the system state.
  Lets us roll back to the state when the token was generated. May or may not directly expose 
  state information.
  
*/

// ➜ object account snapshot
class Memento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return new Memento(this.balance);
  }

  restore(memento) {
    this.balance = memento.balance;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

const bankAccount = new BankAccount(100);

const memento1 = bankAccount.deposit(50);
const memento2 = bankAccount.deposit(25);

console.log(bankAccount.toString());

bankAccount.restore(memento1);
console.log(bankAccount.toString());

bankAccount.restore(memento2);
console.log(bankAccount.toString());
