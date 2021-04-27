class ToUpper {
  constructor(capitalize = false) {
    this.capitalize = capitalize;
  }
}

class Sentence {
  constructor(sentence) {
    this.sentence = sentence.split(" ");
    this.wordPositionToCapitalize = {};
  }

  at(index) {
    this.wordPositionToCapitalize[index] = new ToUpper();
    return this.wordPositionToCapitalize[index];
  }

  toString() {
    const formattedSentence = this.sentence
      .map((word, i) =>
        this.wordPositionToCapitalize[i] &&
        this.wordPositionToCapitalize[i].capitalize
          ? word.toUpperCase()
          : word
      )
      .join(" ");

    return formattedSentence;
  }
}

const plainText = "Hello world";
const sentence = new Sentence(plainText);

sentence.at(0).capitalize = true;
console.log(sentence.toString());
