class Point {
  constructor(postionX, poitionY) {
    this.postionX = postionX;
    this.poitionY = poitionY;
  }

  deepCopy() {
    return new Point(this.postionX, this.poitionY);
  }
}

class Line {
  constructor(id, startPoint, endPoint) {
    this.id = id;
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  deepCopy() {
    return new Line(
      this.name,
      this.startPoint.deepCopy(),
      this.endPoint.deepCopy()
    );
  }

  toString() {
    return `Your line ${this.id} starts at (${this.startPoint.postionX}, ${this.startPoint.poitionY}) and ends at (${this.endPoint.postionX}, ${this.endPoint.poitionY})`;
  }
}

const line1 = new Line(1, new Point(12, 12), new Point(12, 15));
const line2 = line1.deepCopy();

line2.id = 2;
line2.startPoint.postionX = 18;
line2.startPoint.postionY = 22;

console.log(line1.toString());
console.log(line2.toString());
