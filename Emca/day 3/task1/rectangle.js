import {Shape} from './shape.js'
export class Rectangle extends Shape{
    
    constructor(l, w) {
        super(l, w);
    }
    getArea() {
        return this.getLength()*this.getWidth();
    }
    getPerimter() {
        return 2*this.getLength() +2* this.getWidth();
    }
    toString() {
        console.log(`the length is ${this.getLength()} `)
        console.log(`the width is ${this.getWidth()} `)
        console.log(`the area is ${this.getArea()} `)
        console.log(`the perimeter is ${this.getPerimter()} `)

   }
}
