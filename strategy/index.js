/*

  * Many algorithms can be depomposed into high and lower level parts
  * Making tea cab be decomposed into
    * The process of making a hot beverage (boil water, pout into cup);
    * Tea-specific things (put teabag into water)
  * The high-level algorithm can then be reused of making coffee or hot chocolate
    * Supported by beverage-specific strategies
  
  Enables the exact behaviour of a system to be selected at run-time

*/

// <ul><li>hello</li></ul
// * hello
// * word

const OutputFormat = Object.freeze({
  markdown: 0,
  html: 1,
});

class ListStategy {
  start(buffer) {}

  end(buffer) {}

  addListItemMethod(buffer, item) {}
}

class MarkdownListStrategy extends ListStategy {
  addListItemMethod(buffer, item) {
    buffer.push(` * ${item}`);
  }
}

class HmtlListStrategy extends ListStategy {
  start(buffer) {
    buffer.push("<ul>");
  }

  end(buffer) {
    buffer.push("</ul>");
  }

  addListItemMethod(buffer, item) {
    buffer.push(`  <li>${item}</li>`);
  }
}

class TextProcessor {
  constructor(outputFormat) {
    this.buffer = [];
    this.setOutputFormat(outputFormat);
  }

  setOutputFormat(format) {
    if (format === OutputFormat.markdown)
      this.listStategy = new MarkdownListStrategy();
    else if (format === OutputFormat.html)
      this.listStategy = new HmtlListStrategy();
  }

  appendList(items) {
    this.listStategy.start(this.buffer);

    for (let item of items)
      this.listStategy.addListItemMethod(this.buffer, item);

    this.listStategy.end(this.buffer);
  }

  clear() {
    this.buffer = [];
  }

  toString() {
    return this.buffer.join("\n");
  }
}

const textProcessor = new TextProcessor(OutputFormat.markdown);
textProcessor.appendList(["foo", "bar", "baz"]);
console.log(textProcessor.toString());

textProcessor.clear();
console.log("\n");

textProcessor.setOutputFormat(OutputFormat.html);
textProcessor.appendList(["alpha", "beta", "gamma"]);
console.log(textProcessor.toString());
