const fs = require("fs");

//* Keeping class as simple and separate functionality as possible.

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(entryText) {
    let count = ++Journal.count;
    let entry = `${count}: ${entryText}`;

    this.entries[count] = entry;

    return count;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
}

class PersistenceManager {
  saveToFile(journal, fileName) {
    fs.writeFileSync(fileName, journal.toString());
  }
}

Journal.count = 0;

let journal = new Journal();

journal.addEntry("My name is Yael");
journal.addEntry("I like sports");

let ps = new PersistenceManager();
let fileName = "./javascript-patterns/journal.txt";

ps.saveToFile(journal, fileName);
