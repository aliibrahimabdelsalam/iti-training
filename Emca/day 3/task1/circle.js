import {Shape} from './shape.js'
export class Circle extends Shape{
    constructor(r) {
        super()
        this.radius = r;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(r) {
         this.radius=r;
    }
    getArea() {
        return Math.PI*Math.pow(this.radius,2);
    }
    getPerimter() {
        return 2*Math.PI*this.radius;
    }
    toString() {
        console.log(`the radius is ${this.getRadius()} `)
        console.log(`the area is ${this.getArea()} `)
        console.log(`the perimeter is ${this.getPerimter()} `)
   }
}
