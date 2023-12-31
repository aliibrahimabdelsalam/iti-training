

function sum(x,y){

    if(arguments.length!=2)
     throw("you must enteddr 2 numbers")
    if (typeof x!== "number" || typeof y!== "number") 
        throw "please enster numbers";
    return x+y
}
console.log(sum(10,20));

///////////////////////

// function sum(){
//     var s=0
//     for(var i=0;i<arguments.length;i++){
//         s+=Number(arguments[i]);
//     }
//     return s
// }

// document.write("<h3>the sum is "+sum("30","10")+"</h3>")
// var count=prompt("enter number you want the enter")
// var x=[]
// for(var i=0;i<Number(count);i++){
//     var num;
//     do{
//     num=prompt("enter number"+ (i+1))
        
//     }while(isNaN(num))
//     x.push(Number(num))
//     console.log(typeof x[i])
// }
// console.log(sum());

//////////////
// var x=[4,2,1,8]



function rev()
{
    var rev=[]
    for(var i=arguments.length-1;i>=0;i--){
     rev[i]=arguments[i];
    }
return rev;
}
console.log(rev(10,20,50,20));
document.write("<h3>the reverse is "+rev(10,20,50,20)+"</h3>")

// do{
//     var count=prompt("enter number you want the enter")
        
//     }while(isNaN(count))
// var x=[]
// for(var i=0;i<count;i++){
//     var num;
//     do{
//     num=prompt("enter number "+ (i+1))
        
//     }while(isNaN(num))
//     x.push(Number(num))
// }
// document.write("<h3>the original is "+x+"</h3>")
// document.write("<h3>the reverse is "+rev(x)+"</h3>")

///////////////////////

// function validate(x){
//     var day="";
//     var month="";
//     var year="";
//     if(x.length!=10 && !(x[2]==="-"&&x[5]==="-"))
//     throw("Wrong Date Format ")
//     for(var i=0;i<x.length;i++){
//         if(i<2){
//             day+=x[i]
            
//         }
//         else if(i<5 &&x[i]!="-")
//         month+=x[i]
//     else if(i<10&&x[i]!="-"){
//         year+=x[i]
//     }
//     }
//     var date=new Date(year,--month,day);
//     // return [year,day,month];
//     return date;
// }
// var date;
//  date =prompt("enter the date in the following format (DD – MM – YYYY)")

//   document.write("<h3>the Date is "+validate(date)+"</h3>")

// var x ;
// var arr=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//  x =prompt("enter the date ")
//  var date=new Date(x);
//  console.log(arr[date.getDay()]);
