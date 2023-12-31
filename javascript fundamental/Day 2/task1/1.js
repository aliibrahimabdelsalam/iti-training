// task1
var x
var sum=0
do{
    x=prompt("enter number")
    if(isNaN(x)){
        alert("Bye ,the number your entered is not a Number")
        break
    }
    x=parseInt(x)
    sum+=x;
    
}while(sum < 100 && x!=0 )
document.write("<h4>the sum is :: "+sum+"</h4>")