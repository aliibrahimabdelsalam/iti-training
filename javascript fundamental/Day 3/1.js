// //  1111
// var x=prompt("enter pattern")
// var j=0
// var isTrue=true
// var l=confirm("are you sensitive in uppercase or lowercase charachterise?")
// if(!l)
//     x=x.toLowerCase()
// for(var i=x.length-1;i>=0;i--){
//     if(x[i]!=x[j])
//     {
//         isTrue=false;
//         break;
//     }
//     j++
// }
// isTrue? document.write("<h2>the pattern is palindroma</h2>")
// :document.write("<h2>isn't palindroma</h2>")

//2 -search
// var x=prompt("enter name please");
// var count=0
// x=x.toLowerCase()
// for(var i=0;i<x.length;i++){
//     if(x[i]=='e')
//     count++;
// }
// console.log("the counter is :: "+count);
// document.write("<h2> the counter is ::"+count+"</h2>")

//3
do{ 
    
 var name =prompt("enter name ")
}while(isFinite(name))
do{ 
    
 var phone =prompt("enter phone ")
}while(phone.length!=8)
do{ 
    
 var mobile =prompt("enter mobile ")

 
}while(mobile.length!=11 || !(mobile.startsWith("010")||!mobile.startsWith("012")||!mobile.startsWith("011")))
var regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
do{ 
    
 var email =prompt("enter your email ")

 
}while(!regex.test(email))
document.querySelector('.name').innerHTML=name
// userName=document.style.display="block"
document.querySelector(".phone").innerHTML=phone
// userName=document.style.display="block"
document.querySelector(".mobile").innerHTML=mobile

// userName=document.style.display="block"

var userEmail=document.querySelector(".email").innerHTML=email



// Math
//1 radius
// var radius=prompt("enter the radius ")
// var area=Math.PI*Math.pow(radius,2)
// confirm("the total area of the circle is "+area)
//2- square
// var x=prompt("enter the number ");
// sqrt=Math.sqrt(x);
// confirm("the sqrt is of "+x +"is"+sqrt)



// sum three numbers
// var arr=[]
// var sum=0
// var mutli=1

// for(var i=0;i<3;i++)
//  arr[i]=prompt("enter first number")
// var division=parseInt(arr[0])
// for(var i=0;i<3;i++)
// {
//     arr[i]=parseInt(arr[i])
//     sum+=arr[i]
//     mutli*=arr[i]
//     if(i==0){
//         continue
//     }else
//     {
//         division/=arr[i]

//     }
// }
// console.log("sum of values:: "+sum)
// console.log("multipublication :: "+mutli)
// console.log("division of values:: "+division)

// var a =[]
// for(var i=0;i<5;i++)
// a[i]=prompt("enter the number")
// console.log(a.sort((a,b)=>a-b))