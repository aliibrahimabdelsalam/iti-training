//task2
var x=prompt("enter your name")
var arr=["red","blue","green"]
var isTrue=false
for(var j=0;;j++){
    var y=prompt("enter your color favourite:: red or blue or green")

for(var i=0;i<3;i++){
    if(y==arr[i])
    isTrue=true   
}
if(isTrue){
    document.write("<h3 style=color:"+y+";>welcome "+x+"</h3>")
    break;
}
else
alert("your wrong select between red and blue and green")

}



