function Shape(w, h) {
    if (this.constructor == Shape) {
        throw "You can't make a Object from Shape Class"
    }
    this.width = w
    this.height=h
}

function Rectangle(w, h) {
    if (Rectangle.count == 1 &&this.constructor==Square)
        throw("You Can't Create Another Object of Rectangle Just One Object !!")
    Shape.call(this, w, h)
    Rectangle.count++;
}

Rectangle.count = 0;
Shape.prototype.area = function () {
    return this.width * this.height;
}

Shape.prototype.perimter = function () {
    return 2*this.width +2* this.height;
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor=Square

var rect = new Rectangle(20, 32);
var rect2 = new Rectangle(2, 6);
Square.count = 0;

function Square(l) {
    if (Square.count == 1)
        throw("You Can't Create Another Object of Square Just One Object !!")
    Rectangle.call(this, l, l)
    Square.count++;
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor=Object
var square=new Square(6)
// var square=new Square(6)
console.log(rect2.area());
// console.log(square.area());