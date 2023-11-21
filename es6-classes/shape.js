/* exported Shape */
// Shape instatiation

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area is ${this.area} and the perimeter is ${this.perimeter}`;
  }
}

const shapesNew = new Shape(30.12, 60.4523);

console.log(shapesNew.describe());

//
