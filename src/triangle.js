
export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  checkType() {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
      return "not a triangle";
    }
  }

  checkEquilateral() {
    if (((this.side1 === this.side2) && (this.side2 === this.side3))) {
      return "is a equilateral triangle";
    }
  }

  checkIsosceles() {
    if ((this.side1 === this.side2) || (this.side2 === this.side3) || (this.side1 === this.side3)) {
      return "is an isosceles triangle";
    }
  }
  checkScalene() {
    if ((this.side1 !== this.side2) && (this.side2 !== this.side3) && (this.side1 !== this.side3)) {
      return "is an scalene  triangle";
    } else {
      return "this test didnt pass";
    }
  }
}
