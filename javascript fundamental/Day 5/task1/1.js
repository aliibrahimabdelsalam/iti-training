do{
var num=prompt("enter number of people you want to entered ::")
}while(isNaN(num))
var names=[]
var ages=[]
// var regulerEx=new RegExp("[a-zA-Z]")
for(var i=0;i<num;i++){
    do{
        // var check="asdfghjklmnbvcxzqwertyuiopASDFGHJKLMNBVCXZQWERTYUIOP";
        // var response=true
            var name=prompt("enter the name")
            // if (check.includes(name)) {
            //  response = false
            //  console.log("yesssssss");

            // }
                    
    }while(isFinite(name)|| name.length>10 || name.length<3)
    names.push(name)

    do{
    var age=prompt("enter age of "+ names[i])
    }while(isNaN(age) || age <10 ||age >60)
    ages.push(age)
}
var tr
var tdName
var tdAge
var tbody=document.querySelector("tbody")
for(i=0;i<names.length;i++){
    tr=document.createElement("tr")
    tdName=document.createElement("td")
    console.log("2");
    tdAge=document.createElement("td")
    tdName.innerText=names[i];
    tdAge.innerText=ages[i];
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tbody.append(tr);
}
