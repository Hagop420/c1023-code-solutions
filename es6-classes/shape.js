/* exported Shape */
// Shape instatiation

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `${this.area}`;
  }
}

const shapesNew = new Shape(30.12, 60.4523);

console.log(shapesNew.describe());

//
