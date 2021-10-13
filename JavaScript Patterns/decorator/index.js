/* 
  * Want to augment an object with additional functionality
  * Do no want to rewrite or later existing code (OCP)
  * Want to keep new functionality separate (SRP)
  * Need to be able to interact with exiting structures
  * Two Options: Inherit from required object (if possible) or Build a decorator, which references the decorated object(s)

  * Facilities the addition of behaviors to individual objects without inheriting from them
*/

class Shape {}

class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }

  resize(factor) {
    this.radius *= factor;
  }

  toString() {
    return `A circle of radius ${this.radius}`;
  }
}

class ColoredShape extends Shape {
  constructor(shape, color) {
    super();

    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} has the color ${this.color}`;
  }
}

class TransparentShape extends Shape {
  constructor(shape, transparency) {
    super();
    this.shape = shape;
    this.transparency = transparency;
  }

  toString() {
    return `${this.shape.toString()} has ${
      this.transparency * 100
    }% transparency`;
  }
}

const circle = new Circle(20);
console.log(circle.toString());

const redCircle = new ColoredShape(circle, "red");
redCircle.shape.resize(2);
console.log(redCircle.toString());

const redHalfCircle = new TransparentShape(redCircle, 0.5);
console.log(redHalfCircle.toString());
