// 2 -search
var x=prompt("enter name please");
var count=0
x=x.toLowerCase()
for(var i=0;i<x.length;i++){
    if(x[i]=='e')
    count++;
}
console.log("the counter is :: "+count);
document.write("<h2> the counter is ::"+count+"</h2>")