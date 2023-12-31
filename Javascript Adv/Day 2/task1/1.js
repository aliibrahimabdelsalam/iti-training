function Triangle(h, w) {
    this.height = h 
    this.width = w
    Triangle.count++    
}
Triangle.count=0
var triangle = new Triangle(4,5);
Triangle.prototype.area = function () {
    return .5*this.height*this.width
}
Triangle.prototype.perimeter = function () {
    return 2*this.height+this.width
}
Triangle.prototype.counter = function () {
    return Triangle.count;
    
} 
Triangle.prototype.toString = function () {
    console.log("the height is :: ",this.height);
    console.log("the width is :: ",this.width);
    console.log("the area is :: ",this.area());
    console.log("the perimeter is :: ",this.perimeter());
}
triangle.toString()
    var triangle1 = new Triangle(4,2);
    var triangle2 = new Triangle(4,2);
    var triangle3 = new Triangle(4,2);
    var triangle3 = new Triangle(4,2);

console.log(triangle.counter());

