/*

  * Need to define a new operation on an entire class hierarchy
    * E.g., make a document model printable to HTML/Markdown
  * Do not want to keep modifying every class in the hierarcht
  * Need access to the non-common aspects of classes in the hierarchy
  * Create an external component to hanldle rendering
    * But avoid explicit type checks
  
  A component (visitor) that knows how to traverse a data structure 
  composed of (possibly related) types.

*/

class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  print(buffer) {
    buffer.push(this.value.toString());
  }
}

class AdditionExpression {
  constructor(left, rigth) {
    this.rigth = rigth;
    this.left = left;
  }

  print(buffer) {
    buffer.push("(");
    this.left.print(buffer);
    buffer.push("+");
    this.rigth.print(buffer);
    buffer.push(")");
  }
}

// 1 + (2+3)
const expression = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(new NumberExpression(2), new NumberExpression(3))
);

const buffer = [];
expression.print(buffer);
console.log(buffer.join(""));
