const TypeOfDamage = Object.freeze({
  constantDamage: 0,
  growingDamage: 1,
});

class DamageStrategy {
  damage(creature) {}
}

class ConstantDamageStategy extends DamageStrategy {
  damage(creature) {
    creature.health -= 1;
    creature.alive = creature.health > 0;
  }
}

class GrowingDamageStategy extends DamageStrategy {
  damage(creature) {
    creature.impacts += 1;
    creature.health = creature.health - creature.impacts;
    creature.alive = creature.health > 0;
  }
}

class Creature {
  constructor(name, attack, health) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.alive = health > 0;
    this.impacts = 0;
  }

  setTypeOfDamage(typeOfDamage) {
    if (typeOfDamage === TypeOfDamage.constantDamage)
      this.damageStrategy = new ConstantDamageStategy(this);
    else if (typeOfDamage === TypeOfDamage.growingDamage)
      this.damageStrategy = new GrowingDamageStategy(this);
  }

  impactWithTrap() {
    if (this.alive) this.damageStrategy.damage(this);
  }

  restoreHealth(newHealth) {
    this.health = newHealth;
    return `\n${this.name}'s health has recieve ${newHealth} points of health.\n`;
  }

  toString() {
    return this.alive
      ? `[${this.name} Status]:\n  Attack: ${this.attack}\n  Health: ${this.health}.`
      : `[${this.name} Status]: Dead.`;
  }
}

const goblin = new Creature("Goblin", 10, 20);

goblin.setTypeOfDamage(TypeOfDamage.constantDamage);
goblin.impactWithTrap();
goblin.impactWithTrap();

console.log(goblin.toString());
console.log(goblin.restoreHealth(20));

goblin.setTypeOfDamage(TypeOfDamage.growingDamage);
goblin.impactWithTrap();
goblin.impactWithTrap();
goblin.impactWithTrap();
goblin.impactWithTrap();
goblin.impactWithTrap();

console.log(goblin.toString());
