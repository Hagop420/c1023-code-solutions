/* exported Shape */
// Shape instatiation

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `${this.area} and the parameter is ${this.perimeter}`;
  }
}

const shapesNew = new Shape(30, 60);

console.log(shapesNew.describe());

//
