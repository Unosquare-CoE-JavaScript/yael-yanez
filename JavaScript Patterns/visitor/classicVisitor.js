class Visitor {
  constructor() {
    this.buffer = [];
  }

  visitNumber(expression) {}

  visitAddition(expression) {}
}

class ExpresionPrinter extends Visitor {
  constructor() {
    super();
  }

  visitNumber(expression) {
    this.buffer.push(expression.value);
  }

  visitAddition(expression) {
    this.buffer.push("(");
    expression.left.accept(this);

    this.buffer.push("+");
    expression.right.accept(this);

    this.buffer.push(")");
  }

  toString() {
    return this.buffer.join("");
  }
}

class ExpressionCalculator extends Visitor {
  constructor() {
    super();
    this.result = 0;
  }

  visitNumber(expression) {
    this.result = expression.value;
  }

  visitAddition(expression) {
    expression.left.accept(this);
    let temp = this.result;
    expression.right.accept(this);
    this.result += temp;
  }
}

class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  accept(visitor) {
    visitor.visitNumber(this);
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.right = right;
    this.left = left;
  }

  accept(visitor) {
    visitor.visitAddition(this);
  }
}

// 1 + (2+3)
const expCalculator = new ExpressionCalculator();
const expressionPrinter = new ExpresionPrinter();
const expression = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(new NumberExpression(2), new NumberExpression(3))
);

expressionPrinter.visitAddition(expression);
expCalculator.visitAddition(expression);

console.log(`${expressionPrinter.toString()} = ${expCalculator.result}`);
