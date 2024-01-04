import {Shape} from './shape.js'
export class Square extends Shape{
    
    constructor(l) {
        super(l)
    }
    getArea() {
        return Math.pow(this.getLength(),2);
    }
    getPerimter() {
        return 4*this.getLength();
    }
    toString() {
        console.log(`the length is ${this.getLength()} `)
        console.log(`the area is ${this.getArea()} `)
        console.log(`the perimeter is ${this.getPerimter()} `)
   }
}
