/*
  * You are calling foo.Bar().
  * This assumes that foo is in the smae process as Bar().
  * What if, later on, you wnat to pull all Foo-realted operations into a separate process (can you avoid changing the code?)
  * Proxy to the rescue (same interface, entirely different bevaviour)
  * This is called communication proxy (other types: loggin, virtual, guarding)
  
  A class that functions as an interface to a particular resource. That resource may be remote, 
  expensive to constructor, or may require logging or some other added functionality.
*/

class Percentage {
  constructor(percent) {
    this.percent = percent; // 0 - 100
  }

  toString() {
    return `${this.percent}%`;
  }

  valueOf() {
    // * This is the proxy
    return this.percent / 100;
  }
}

const fivePercent = new Percentage(5);
console.log(fivePercent.toString());
console.log(`5% of 50 is ${50 * fivePercent}`);
