var form=document.querySelector("form")
var span=document.querySelectorAll("span")
// console.log(inputs)
var tbody=document.querySelector("tbody")
form.addEventListener("submit",function(e){
    
    var name=document.f1.user.value
    var age=document.f1.age.value
    var email=document.f1.email.value
    var tr=document.createElement("tr")
    var tdName=document.createElement("td")
    var tdAge=document.createElement("td")
    var tdEmail=document.createElement("td")
    console.log(tdName);
    var isTrue=true
    // console.log(names)
    if(name===""){
        span[0].innerText="you should enter name"
        console.log(name)
        isTrue=false
    }else if(isFinite(name)){
        span[0].innerText="you should enter string"
        isTrue=false    
    }else{
        span[0].innerText=""

    }
    if(age===""){
        span[1].innerText="you should enter age"
        console.log(name)
        isTrue=false

    }else if(isNaN(age)){
        span[1].innerText="you should enter number"
        isTrue=false
    }
    else{
        span[1].innerText=""
    }
    if(email===""){
        span[2].innerText="fill email s required"
        console.log(name)
        isTrue=false

    }else if(isFinite(name)){
        span[2].innerText="you should enter email"
        isTrue=false
    }else{
        span[2].innerText=""

    }
    if(!isTrue){
        e.preventDefault()
        
    }else{
        span[0].innerText=""
        span[1].innerText=""
        tdName.innerText=name;
        tdAge.innerText=age;
        tdEmail.innerText=email;
        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdEmail)
        tbody.appendChild(tr)
        e.preventDefault()
        document.f1.user.value=""
        document.f1.age.value=""
        document.f1.email.value=""
    }
    
})


