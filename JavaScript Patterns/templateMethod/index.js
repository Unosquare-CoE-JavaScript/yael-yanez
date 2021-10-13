/*

  * Algorithms can be decomposed into common parts + specifics
  * Strategy pattern does this through composition
    * High-level algorithm uses an interface
    * Concrete implementations impletement the interface
  * Template method does the same thing through inheritance
    * Overall algorithm makes use of empty ('abstract') members
    * Inheritors override those members
    * Parent template method invoked

  Allows us to define the 'skeleton' of the algorithm, with concrete 
  implementations defined in subclasses

*/

class Game {
  constructor(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    this.currentPlayer = 0;
  }

  // Template method is simply a method which defines the overall
  // structure of what needs to be done without defining the concrete parts.
  run() {
    this.start();

    while (!this.haveWinner) {
      this.takeTurn();
    }

    console.log(`Player ${this.winningPlayer} wins`);
  }

  // Template
  start() {}

  takeTurn() {}

  get haveWinner() {}

  get winningPlayer() {}
}

class Chess extends Game {
  constructor() {
    super(2);

    this.maxTurns = 10;
    this.turn = 1;
  }

  start() {
    console.log(
      `Starting a game of chess with ${this.numberOfPlayers} players`
    );
  }

  takeTurn() {
    console.log(`Turn ${this.turn++} taken by player ${this.currentPlayer}`);
    this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers;
  }

  get haveWinner() {
    return this.turn === this.maxTurns;
  }

  get winningPlayer() {
    return this.currentPlayer;
  }
}

const chess = new Chess();
chess.run();
