/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

// Square instantiation

class Square extends Shape {
  constructor(width) {
    super(width * width, 4 * width ** 2);
    this.width = width;
  }

  describe() {
    return `The shape is a Square and it has a width of ${this.width}
    and the previous constructor's width and paremeter equal to:
    ${super.describe()}, Width: ${this.width}`;
  }
}

const squareNew = new Square(220);
console.log(squareNew.describe());
