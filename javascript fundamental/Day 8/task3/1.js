var form=document.querySelector("form")
var width;
var height;
form.addEventListener("submit",function(e){
    var p1=document.createElement("p")
    var p2=document.createElement("p")
    var p3=document.createElement("p")
    var p4=document.createElement("p")
    width=document.f1.width.value
    height=document.f1.height.value
    triangle.width=width
    triangle.height=height
   var displayInfo= triangle.display(triangle.width,triangle.height)
    p1.innerText="the height is :: "+displayInfo[0]
    p2.innerText="the width is :: "+displayInfo[1]
    p3.innerText="the area is :: "+displayInfo[2]
    p4.innerText="the perimeter is :: "+displayInfo[3]
    document.body.appendChild(p1)
    console.log(displayInfo[0])
    document.body.appendChild(p2)
    document.body.appendChild(p3)
    document.body.appendChild(p4)
    e.preventDefault()
})
var triangle={
    x:"",
    width:"",
    height:"",
    area(){
        return .5*this.height*this.width
    },
    perimeter(){
        return 2*parseInt(this.height)+parseInt(this.width)
    }
    ,
    display(){
        return [this.height,this.width,this.area(),this.perimeter()]
    }
}