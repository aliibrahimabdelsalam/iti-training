var nameRegex = /^[a-zA-Z ]+$/;
var ageRegex = /^\d+$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
var name;
var age;
var email;
var tbody=document.querySelector("tbody")
var form=document.querySelector("form")
var errorMsg=document.querySelectorAll(".invalid-feedback")
var isTrue=true
form.addEventListener("submit",function(e){
    name=document.f1.name.value
    age=document.f1.age.value
    email=document.f1.email.value
    if(!validateEmpty(name)){
        errorMsg[0].innerText="fill the input name"
        errorMsg[0].style.display="block"
        isTrue=false
    }
    else if(!validateString(name)){
        errorMsg[0].innerText="Enter String "
        errorMsg[0].style.display="block"
        isTrue=false
    }else{
        errorMsg[0].innerText=""
        errorMsg[0].style.display="none"
        isTrue=true
    }
    if(!validateEmpty(age)){
        errorMsg[1].innerText="fill the input age "
        errorMsg[1].style.display="block"
        isTrue=false
    }
    else if(!validateNumber(age)){
        errorMsg[1].innerText="Enter VaildNumber "
        errorMsg[1].style.display="block"        
        isTrue=false

    }else{
        errorMsg[1].innerText=""
        errorMsg[1].style.display="none"
        isTrue=true
    }
    if(!validateEmpty(email)){
        errorMsg[2].innerText="fill the input email "
        errorMsg[2].style.display="block"
        isTrue=false
    }
    else if(!validateEmail(email)){
        errorMsg[2].innerText="Enter Vaild Email "
        errorMsg[2].style.display="block"
        isTrue=false

    }else{
        errorMsg[2].innerText=""
        errorMsg[2].style.display="none"
        isTrue=true
    }
    if(isTrue){
        addRow(name,age,email);
        document.f1.name.value=""
        document.f1.age.value=""
        document.f1.email.value=""
    }
        e.preventDefault()
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
function validateNumber(Validate){
    
    if(!ageRegex.test(Validate)||Validate>65 ||Validate<16){
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
var num=0;
function addRow(name,age,email) {
    num++;
    var tr=document.createElement("tr")
    var tdNum=document.createElement("td")
    var tdName=document.createElement("td")
    var tdAge=document.createElement("td")
    var tdEmail=document.createElement("td")
    tdNum.innerText=num;
    tdName.innerText=name
    tdAge.innerText=age
    tdEmail.innerText=email
    tr.appendChild(tdNum)
    tr.appendChild(tdName)
    tr.appendChild(tdAge)
    tr.appendChild(tdEmail)
    tbody.appendChild(tr)
}
var resetBtn=document.querySelector(".reset")
resetBtn.addEventListener("click",function(){
        document.f1.name.value=""
        document.f1.age.value=""
        document.f1.email.value=""
})
