class Square {
  constructor(side) {
    this.side = side;
  }
}

class SquareToRectangleAdapter {
  constructor(square) {
    this.square = square;
  }

  get width() {
    return this.square.side;
  }

  get height() {
    return this.square.side;
  }
}

function calculateAreaFrom(rectangle) {
  return rectangle.width * rectangle.height;
}

const square = new Square(21);
const squareToRectangleAdapter = new SquareToRectangleAdapter(square);
const area = calculateAreaFrom(squareToRectangleAdapter);

console.log(area);
