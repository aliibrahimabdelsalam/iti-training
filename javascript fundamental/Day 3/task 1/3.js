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
document.querySelector('table').style.display="block"
document.querySelector('.name').innerHTML=name
// userName=document.style.display="block"
document.querySelector(".phone").innerHTML=phone
// userName=document.style.display="block"
document.querySelector(".mobile").innerHTML=mobile

// userName=document.style.display="block"

var userEmail=document.querySelector(".email").innerHTML=email

