class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static get factory() {
    return new PointFactory();
  }
}

class PointFactory {
  newCatesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPoloarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let p1 = Point.factory.newCatesianPoint(4, 5);
console.log(p1);

let p2 = PointFactory.newPoloarPoint(5, Math.PI / 2);
console.log(p2);
