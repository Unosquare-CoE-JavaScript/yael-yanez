//! BAD
const CoordinateSystem = {
  cartesian: 0,
  polar: 1,
};

class PointBad {
  constructor(a, b, cs = CoordinateSystem.cartesian) {
    switch (cs) {
      case CoordinateSystem.cartesian:
        this.x = a;
        this.y = b;

        break;
      case CoordinateSystem.polar:
        this.x = a * Math.cos(b);
        this.y = a * Math.sin(b);

        break;
      default:
        break;
    }
  }

  // constructor(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }
}

//* GOOD
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static newCatesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPoloarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let p = Point.newCatesianPoint(4, 5);
console.log(p);

let p2 = Point.newPoloarPoint(5, Math.PI / 2);
console.log(p2);
