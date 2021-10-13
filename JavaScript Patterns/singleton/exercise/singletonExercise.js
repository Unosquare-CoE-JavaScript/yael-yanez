class Point {
  constructor(x, y) {
    const instance = this.constructor.instace;

    if (instance) return instance;

    this.constructor.instace = this;
    this.x = x;
    this.y = y;
  }
}

class PointSingletonTester {
  static isSingleton(createPoint) {
    const point1 = createPoint();
    const point2 = createPoint();

    return point1 === point2;
  }
}

function createPoint() {
  return new Point(
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  );
}

console.log(PointSingletonTester.isSingleton(createPoint).toString());
