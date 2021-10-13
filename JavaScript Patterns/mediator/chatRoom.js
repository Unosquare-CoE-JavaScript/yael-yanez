/*

  * Components may go in and out of a system at any time
    * Chat room participants
    * Players in an MMORPG
  * It makes no sense for them to have direct references to one another
    * Those references may go dead
  * Solution: have them all refer to some central component that facilities communication
  
  A component that facilities communication between other components without them
  necessarily being aware of each other or having direct (references) access to 
  each other.

*/

class Person {
  constructor(name) {
    this.name = name;
    this.chatLog = [];
  }

  recieve(sender, message) {
    let _sender = `${sender}: '${message}'`;
    this.chatLog.push(_sender);

    console.log(`[${this.name}'s chat session] ${_sender}`);
  }

  say(message) {
    this.room.broadcast(this.name, message);
  }

  privateMessage(who, message) {
    this.room.message(this.name, who, message);
  }
}

// this is the mediator, is the central component that everyone has reference to
class ChatRoom {
  constructor() {
    this.people = [];
  }

  join(person) {
    let joinMsg = `${person.name} joins the chat`;

    this.broadcast("room", joinMsg);

    person.room = this;
    this.people.push(person);
  }

  broadcast(source, message) {
    for (let p of this.people)
      if (p.name !== source) p.recieve(source, message);
  }

  message(source, destination, message) {
    for (let p of this.people)
      if (p.name === destination) p.recieve(source, message);
  }
}

const room = new ChatRoom();

const john = new Person("John");
const jane = new Person("Jane");

room.join(john);
room.join(jane);

john.say("hi room");
john.say("hey, john");

const simon = new Person("Simon");
room.join(simon);

simon.say("Hi, everyone!");

jane.privateMessage("Simon", "Glad you could join us!");
