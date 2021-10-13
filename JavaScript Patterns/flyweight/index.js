/*
  * Avoid redudancy when storing data
  * Store common data externally
  * Specify and index or a reference into the external data store
  * Define the idea of 'ranges' on homogeneous collections and stores data related to those ranges

  A space optimization technique that let us use 
  less memory by storing externally the data associeted with similar objects
*/

class FormatterText {
  constructor(plainText) {
    this.plainText = plainText;
    this.caps = new Array(plainText.length).map(() => false);
  }

  capitalize(start, end) {
    for (let i = start; i <= end; ++i) this.caps[i] = true;
  }

  toString() {
    let buffer = [];

    for (const i in this.plainText) {
      const c = this.plainText[i];
      buffer.push(this.caps[i] ? c.toUpperCase() : c);
    }

    return buffer.join("");
  }
}

class TextRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.capitalize = false;
  }

  covers(position) {
    return position >= this.start && position <= this.end;
  }
}

class BetterFormatteedText {
  constructor(plainText) {
    this.plainText = plainText;
    this.formatting = [];
  }

  getRange(start, end) {
    const range = new TextRange(start, end);

    this.formatting.push(range);

    return range;
  }

  toString() {
    const buffer = [];

    for (let index in this.plainText) {
      let char = this.plainText[index];

      for (let range of this.formatting)
        if (range.covers(index) && range.capitalize) char = char.toUpperCase();

      buffer.push(char);
    }

    return buffer.join("");
  }
}

const text = "This a brave new world";

const formattedText = new FormatterText(text);
formattedText.capitalize(7, 11);

console.log(formattedText.toString());

const betterFormattedText = new BetterFormatteedText(text);
betterFormattedText.getRange(13, 15).capitalize = true;
console.log(betterFormattedText.toString());
