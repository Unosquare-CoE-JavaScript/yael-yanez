class Creature {
  constructor(name, attack, health) {
    this.name = name;
    this.attack = attack;
    this.health = health;
  }
}

class CardGame {
  constructor(fighter1, fighter2) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
  }

  combat() {
    this.hit(this.fighter1, this.fighter2);
    this.hit(this.fighter2, this.fighter1);
    this.hit(this.fighter1, this.fighter2);
    this.hit(this.fighter2, this.fighter1);
  }

  hit(attacker, defenser) {}
}

class TemporaryCardDamageGame extends CardGame {
  constructor(fighter1, fighter2) {
    super(fighter1, fighter2);
  }

  hit(attacker, defenser) {
    const oldDefenserHealth = defenser.health;

    defenser.health -= attacker.attack;

    console.log(
      `➜ ${attacker.name} has attacked ${defenser.name} causing a temporaly damage.\n` +
        `    - ${defenser.name}'s health went from ${oldDefenserHealth} to ${defenser.health}.`
    );

    if (defenser.health > 0) {
      defenser.health = oldDefenserHealth;
      console.log(
        `    + Restoring ${defenser.name}'s health to ${defenser.health}.`
      );
    }
  }
}

class PermanentCardDamageGame extends CardGame {
  constructor(fighter1, fighter2) {
    super(fighter1, fighter2);
  }

  hit(attacker, defenser) {
    const oldDefenserHealth = defenser.health;

    defenser.health -= attacker.attack;

    if (defenser.health <= 0) {
      defenser.isAlive = false;
      console.log(
        `➜ ${attacker.name} has attacked ${defenser.name} causing a permanent damage.\n` +
          `    - ${defenser.name} is dead.`
      );
    } else
      console.log(
        `➜ ${attacker.name} has attacked ${defenser.name} causing a permanent damage.\n` +
          `    - ${defenser.name}'s health went from ${oldDefenserHealth} to ${defenser.health}.`
      );
  }
}

const goblin = new Creature("Globlin", 10, 30);
const skeleton = new Creature("Skeleton", 20, 30);

console.log("Game With Temporaly Damage");
const gameWithTemporalyDamage = new TemporaryCardDamageGame(goblin, skeleton);
gameWithTemporalyDamage.combat();

console.log("\nGame With Permanent Damage");
const gameWithPermanentDamage = new PermanentCardDamageGame(goblin, skeleton);
gameWithPermanentDamage.combat();
