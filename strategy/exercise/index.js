const TypeOfDamage = Object.freeze({
  constantDamage: 0,
  growingDamage: 1,
});

class DamageStrategy {
  damage(creature) {}
}

class ConstantDamageStategy extends DamageStrategy {
  damage(creature) {
    creature.impacts += 1;
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

  toString() {
    return this.alive
      ? `[${this.name} Status]:\n  Attack: ${this.attack}\n  Health: ${this.health}`
      : `[${this.name} Status]: Dead due ${this.impacts} impacts with traps.`;
  }
}

const goblin = new Creature("Goblin", 10, 3);
const skeleton = new Creature("Skeleton", 10, 20);

goblin.setTypeOfDamage(TypeOfDamage.constantDamage);
goblin.impactWithTrap();
goblin.impactWithTrap();
goblin.impactWithTrap();

console.log(goblin.toString());

skeleton.setTypeOfDamage(TypeOfDamage.growingDamage);
skeleton.impactWithTrap();
skeleton.impactWithTrap();
skeleton.impactWithTrap();

console.log(skeleton.toString());
