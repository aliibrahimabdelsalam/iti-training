var nameRegex = /^[a-zA-Z ]+$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
var isTrue=false
var form=document.querySelector(".form")
var errMsg = document.querySelectorAll(".invalid-feedback")
console.log(errMsg)
var name = "";
var address="";
var gender="";
var email="";
var mobile = "";

setTimeout(function(){
    assignValues();
        if(name==""&&email==""&&mobile==""&&address=="")
            alert("you should enter values")
}, 30000);
    
    function assignValues(){
        name=document.f1.name.value
        gender=document.querySelector("select").value
        email=document.f1.email.value
        mobile=document.f1.mobile.value
        address=document.f1.address.value
    }
    form.addEventListener("submit",function(e){
    assignValues();
    if(!validateEmpty(name) || !validateString(name)){
        errMsg[0].classList.add("active")
        e.preventDefault()
        isTrue=false
        }else{
        errMsg[0].classList.remove("active")
            isTrue=true
        }
        
        if(!validateEmpty(address)|| !validateString(address)){
            errMsg[2].classList.add("active")
            e.preventDefault()
            isTrue=false
        }else{
            errMsg[2].classList.remove("active")            
            isTrue=true
        }
        if(!validateEmpty(email)|| !validateEmail(email)){
            errMsg[1].classList.add("active")
            e.preventDefault()
            isTrue=false
        }else{
            errMsg[1].classList.remove("active")
            isTrue=true
        }
        if(!validateMobile(mobile)){
            errMsg[3].classList.add("active")
            e.preventDefault()
            isTrue = false
        }else{
            errMsg[3].classList.remove("active")
            isTrue=true
        } 
    })

    function validateEmpty(Validate){
        if(Validate.length==0){
            return false
        }
        return true;
    } 
    function validateString(Validate){
        if(!nameRegex.test(Validate)){
            return false
        }
        return true;
    } 

    function validateEmail(Validate){
        
        if(!emailRegex.test(Validate)){
            return false
        }
        return true;
    } 
    function validateMobile(){
        if(mobile.length!=11 ||! (mobile.startsWith("010")||mobile.startsWith("012")||mobile.startsWith("011"))){
            return false
        }
        return true
    }