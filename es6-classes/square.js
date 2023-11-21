/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

// Square instantiation

class Square extends Shape {
  constructor(width, area, perimeter) {
    super(area, perimeter);
    this.width = width;
  }

  describe() {
    return `The shape is a Square and it has a width of ${this.width}
    and the previous constructor's width and paremeter equal to:
    ${this.area * this.perimeter}`;
  }
}

const squareNew = new Square(12.122234, 123, 12112234454634);

console.log(squareNew.describe());
