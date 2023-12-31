var div=document.querySelector("div");
// var div2=div.cloneNode()
// console.log(div)
// document.body.appendChild(div2)
// console.log(div2);
// div2.style.backgroundColor="red"
div.addEventListener("click",changeColor)
var hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
function changeColor(){
   var div2=document.createElement("div")
   var color="#"
   for(var i=0;i<6;i++){
       // debugger;

       var randomColor=Math.floor(Math.random()*16)
       color+=hexCharacters[randomColor]
    }
    console.log("color : ", color);
    div2.style.backgroundColor=color
    document.body.appendChild(div2)

}