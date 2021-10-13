// Bridge prevents a 'Cartesian product' complexity explosion.
// A mechanism that decouples an interface (hirarchy) from an implementation (hierarchy).
// Connecting two hierarchies of objects together

class VectorRenderer {
  renderCircle(radius) {
    console.log(`Drawing a circle of radius ${radius}`);
  }
}

class RasterRenderer {
  renderCircle(radius) {
    console.log(`Drawing pixels for a circle of radius ${radius}`);
  }
}

class Shape {
  // bridge
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Circle extends Shape {
  constructor(renderer, radius) {
    super(renderer);

    this.radius = radius;
  }

  draw() {
    this.renderer.renderCircle(this.radius);
  }

  resize(factor) {
    this.radius *= factor;
  }
}

// Shape - Square, Circle, Triangle, ...
// Renderer - Raster, Vector, ...

const raster = new RasterRenderer();
const vector = new VectorRenderer();

let circle = new Circle(vector, 5);
circle.draw();
circle.resize(2);
circle.draw();
