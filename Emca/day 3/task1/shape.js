export class Shape{
    // if(this.constructor === Shape) {
    //     throw "you can't create constractor";
    // }
    constructor(l, w) {
        this.length = l;
        this.width = w;
    }
    getLength() {
        return this.length
    }
    getWidth() {
        return this.width;
    }
    
}
// console.log(new Shape(3,7).getLength())


