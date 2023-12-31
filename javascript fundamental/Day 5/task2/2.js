var dom1=document.querySelector("img");
console.log(dom1);
var dom2=dom1.cloneNode(dom1)
console.log(dom2);
var div=document.querySelector(".center")
var header=document.querySelector("#header")
header.style.display="flex"
header.style.justifyContent="end"
dom2.style.display="block"
var navigation=document.querySelector("#navigation")
navigation.style.display="flex"
navigation.style.justifyContent="center"
console.log(div);
div.appendChild(dom2)
var type=document.querySelector("#nav");
console.log(type)
type.style.listStyleType = "circle";