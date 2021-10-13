class IntegerExpression {
  constructor(value) {
    this.value = value;
  }

  accept(visitor) {
    visitor.visitNumber(this);
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  accept(visitor) {
    visitor.visitAddition(this);
  }
}

class MultiplicationExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  accept(visitor) {
    visitor.visitMultiplication(this);
  }
}

class Visitor {
  constructor() {
    this.buffer = [];
  }

  visitNumber(expression) {}

  visitAddition(expression) {}
}

class ExpressionPrinter extends Visitor {
  constructor() {
    super();
  }

  visitNumber(expression) {
    this.buffer.push(expression.value);
  }

  visitAddition(expression) {
    this.buffer = [];

    this.buffer.push("(");
    expression.left.accept(this);

    this.buffer.push("+");
    expression.right.accept(this);

    this.buffer.push(")");
  }

  visitMultiplication(expression) {
    this.buffer = [];

    expression.left.accept(this);
    this.buffer.push("*");
    expression.right.accept(this);
  }

  toString() {
    return this.buffer.join("");
  }
}

// (2 + 3)
const expPrinter = new ExpressionPrinter();
const exp = new AdditionExpression(
  new IntegerExpression(2),
  new IntegerExpression(3)
);

expPrinter.visitAddition(exp);
console.log(expPrinter.toString());
expPrinter.visitMultiplication(exp);
console.log(expPrinter.toString());
