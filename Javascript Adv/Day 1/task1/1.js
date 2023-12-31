var form = document.querySelector("form")
var p1=document.createElement("p")
var p2=document.createElement("p")
var p3=document.createElement("p")
var p4=document.createElement("p")
form.addEventListener("submit", function (e) {
    var shape = new Triangle();
    shape.setHeight(document.f1.height.value)
    shape.setWidth(document.f1.width.value)
    p1.innerText="the height is :: "+shape.getHeight()
    p2.innerText="the width is :: "+shape.getWidth()
    p3.innerText="the area is :: "+shape.area()
    p4.innerText="the perimeter is :: "+shape.perimeter()
    document.body.appendChild(p1)
    document.body.appendChild(p2)
    document.body.appendChild(p3)
    document.body.appendChild(p4)
    document.querySelectorAll("input")[0].value = ""
    document.querySelectorAll("input")[1].value=""
    e.preventDefault()
})
function Triangle() {
    this.height = 0 
    this.width = 0
    this.area = function () {
        return .5*this.height*this.width
    }
    this.perimeter = function () {
        return parseInt(2*this.height)+parseInt(this.width) 
    }
    this.setHeight = function (h) {
        this.height=h
    }
    this.getHeight = function () {
        return this.height
    }
    this.setWidth = function (w) {
        this.width=w
    }
    this.getWidth = function () {
        return this.width
    }
}

// console.log(shape);

