class Shape {
  constructor(name, render) {
    this.name = name;
    this.render = render;
  }

  toString() {
    return `Drawing ${this.name} as ${this.render.whatToRenderAs}`;
  }
}

class Triangle extends Shape {
  constructor(render) {
    super("Triangle", render);
  }
}

class VectorRenderer {
  get whatToRenderAs() {
    return "as lines";
  }
}

class RasterRenderer {
  get whatToRenderAs() {
    return "as pixeles";
  }
}

const vectorRenderer = new VectorRenderer();
const rasterRenderer = new RasterRenderer();

const triangleAsLines = new Triangle(vectorRenderer);
const triangleAsPixels = new Triangle(rasterRenderer);

console.log({
  drawingAsLines: triangleAsLines.toString(),
  drawingAsPixels: triangleAsPixels.toString(),
});
