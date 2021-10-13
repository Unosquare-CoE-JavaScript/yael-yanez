//* Defines relationship between low level modules and high level modules

let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

//* LOW-LEVEL MODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser")
      throw new Error("RelationshipBrowser is abstract!");
  }

  findAllChildrenOf(name) {}
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({ from: parent, type: Relationship.parent, to: child });
  }

  findAllChildrenOf(name) {
    return this.data
      .filter(
        (relation) =>
          relation.from.name === name && relation.type === Relationship.parent
      )
      .map((relation) => relation.to);
  }
}

//* HIGH-LEVEL MODULE
//! Wrong
class Research {
  // Abstract classes or interfaces
  // constructor(relationships) {
  // Find all children of John
  // let relations = relationships.data; //! <----- using low level
  //   for (let rel of relations.filter(
  //     (relation) =>
  //       relation.from.name === "John" && relation.type === Relationship.parent
  //   )) {
  //     console.log(`John has a child named ${rel.to.name}`);
  //   }
  // }

  constructor(browser) {
    for (let p of browser.findAllChildrenOf("John"))
      console.log(`John has a child called ${p.name}`);
  }
}

let parent = new Person("John");
let child1 = new Person("Chris");
let child2 = new Person("Matt");

let rels = new Relationships();

rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
