var params = new URLSearchParams(location.search);
// console.log(params.get("name"))
var name=params.get("name")
var email=params.get("email")
var address=params.get("address")
var mobile=params.get("mobile")
var gender=params.get("gender")
var tbody=document.querySelector("tbody")

function addRow() {
    var tr=document.createElement("tr")
    var tdMobile=document.createElement("td")
    var tdName=document.createElement("td")
    var tdAddress=document.createElement("td")
    var tdGender=document.createElement("td")
    var tdEmail=document.createElement("td")
    tdMobile.innerText=mobile;
    tdName.innerText=name
    tdAddress.innerText=address
    tdGender.innerText=gender
    tdEmail.innerText=email
    tr.appendChild(tdName)
    tr.appendChild(tdMobile)
    tr.appendChild(tdEmail)
    tr.appendChild(tdGender)
    tr.appendChild(tdAddress)
    tbody.appendChild(tr)
}
addRow();