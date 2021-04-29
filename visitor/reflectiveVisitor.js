class NumberExpression {
  constructor(value) {
    this.value = value;
  }
}

class ExpresionPrinter {
  print(e, buffer) {
    if (e instanceof NumberExpression) buffer.push(e.value);
    else if (e instanceof AdditionExpression) {
      buffer.push("(");
      this.print(e.left, buffer);
      buffer.push("+");
      this.print(e.right, buffer);
      buffer.push(")");
    }
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.right = right;
    this.left = left;
  }
}

// 1 + (2+3)
const buffer = [];
const expressionPrinter = new ExpresionPrinter();
const expression = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(new NumberExpression(2), new NumberExpression(3))
);

expressionPrinter.print(expression, buffer);

console.log(buffer.join(""));
