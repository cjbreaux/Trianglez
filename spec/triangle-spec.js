import { Triangle } from './../src/triangle.js';

describe('Triangle', function() {

  it('should will test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should correctly determine whether three lengths makes an equilateral triangle', function() {
    var equilateralTriangle = new Triangle(9,9,9);
    expect(equilateralTriangle.checkEquilateral()).toEqual("is a equilateral triangle");
  });

  it('should correctly determine whether three lengths makes an isosceles triangle', function() {
    var isosceles = new Triangle(2,2,4);
    expect(isosceles.checkIsosceles()).toEqual("is an isosceles triangle");
  });

  it('should correctly determine whether three lengths makes an scalene triangle', function() {
    var scalene  = new Triangle(9,5,8);
    expect(scalene .checkScalene ()).toEqual("is an scalene  triangle");
  });


});
