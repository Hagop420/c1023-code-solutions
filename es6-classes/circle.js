/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(MATH.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()} and the circle's radiu's is ${this.radius}`;
  }
}

const circleNew = new Circle(50.5);

console.log(circleNew);
