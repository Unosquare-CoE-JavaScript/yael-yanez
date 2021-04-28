/*

  * Given sufficient complexity, it pays to formally define possible states and events/triggers
  * Can define 
    * State entry/exit behaviours
    * Action when a particular event causes a transition
    * Guard coditions enabling/disabling a transition
    * Default action when no transitions are found for an event

*/

class Switch {
  constructor() {
    this.state = new OffState();
  }

  on() {
    this.state.on(this);
  }

  off() {
    this.state.off(this);
  }
}

class State {
  constructor() {
    if (this.constructor === State) throw new Error("abstract!");
  }

  on(sw) {
    console.log("Light is already on.");
  }

  off(sw) {
    console.log("Light is already off.");
  }
}

class OnState extends State {
  constructor() {
    super();
    console.log("Light turned on.");
  }

  off(sw) {
    console.log("Turning light off...");
    sw.state = new OffState();
  }
}

class OffState extends State {
  constructor() {
    super();
    console.log("Light turned off.");
  }

  on(sw) {
    console.log("Turning light on...");
    sw.state = new OnState();
  }
}

let sw = new Switch();
sw.on();
sw.off();
sw.off();
