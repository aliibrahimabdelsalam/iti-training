var a =[]
alert("enter 5 number to sorting")
for(var i=0;i<5;i++)
a[i]=prompt("enter the number")

function createTags(){
var h4 = document.createElement("h4");
var span = document.createElement("span");
h4.style.color="red";
span.style.color="black"
return [h4,span]
}
var x=createTags()
x[0].textContent="Your Enter the values "

for(var i of a){
    x[1].textContent+=" "+i
}
document.body.appendChild(x[0]);
x[0].appendChild(x[1])

 x=createTags()
var desNumbers=a.sort((a,b)=>b-a)
x[0].textContent="Your value after being sorting descending "
for(var i of desNumbers)
    x[1].textContent+=" "+i
document.body.appendChild(x[0]);
x[0].appendChild(x[1])


x=createTags()
var ascNumbers=a.sort((a,b)=>a-b)
x[0].textContent="Your value after being sorting ascending "
for(var i of ascNumbers)
    x[1].textContent+=" "+i
document.body.appendChild(x[0]);
x[0].appendChild(x[1])
