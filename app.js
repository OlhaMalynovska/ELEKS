/*Write a JavaScript program to calculate the area and 
perimeter of a rectangle. Rectangle should be an object with 
properties width and height and methods getArea() and 
getPerimeter();*/
let figure = {
    width: 10,
    height: 14,
    getArea: function() {return this.width * this.height;},
    getPerimeter: function() {return 2*(this.width + this.height);}
}

console.log(`The area of rectangle: ${figure.getArea()}`);
console.log(`The area of rectangle: ${figure.getPerimeter()}`);