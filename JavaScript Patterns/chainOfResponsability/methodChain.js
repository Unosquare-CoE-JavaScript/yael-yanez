/*

  A chain of components who all gets a chance to process a command
  or a query, optionally having default processing implementation
  and ability to terminate the processing chain.
  
*/

class Creature {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name} (${this.attack}/${this.defense})`;
  }
}

// * Method Chain
class CreatureModifier {
  constructor(creature) {
    this.creature = creature;
    this.next = null; // linked list
  }

  add(modifier) {
    if (this.next) this.next.add(modifier);
    else this.next = modifier;

    console.log(this.next);
  }

  handle() {
    if (this.next) this.next.handle();
  }
}

class NoBonusesModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log("No bonuses for you");
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log(`Doubling ${this.creature.name}'s attack`);
    this.creature.attack *= 2;

    super.handle();
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    if (this.creature.attack <= 2) {
      console.log(`Increasing ${this.creature.name}'s defense value`);
      this.creature.defense++;
    }

    super.handle();
  }
}

const goblin = new Creature("Goblin", 1, 1);
console.log(goblin.toString());

let root = new CreatureModifier(goblin);

// root.add(new NoBonusesModifier(goblin));

root.add(new DoubleAttackModifier(goblin));
root.add(new DoubleAttackModifier(goblin));

root.add(new IncreaseDefenseModifier(goblin));

root.handle();
console.log(goblin.toString());
