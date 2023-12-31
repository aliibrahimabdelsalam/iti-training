var url = location.search
var urlParams=new URLSearchParams(url)
var num = parseInt(urlParams.get('number'));
function Book(name,price,author) {
    this.name = name
    this.price = price
    this.author=author
} 
function Author(n,e) {
    this.name = n
    this.email = e

}
////////////////////
var errorMsg=document.querySelectorAll(".invalid-feedback")

var tbody=document.querySelector("tbody")
var button = document.querySelector("button")
var book = new Book();
var arr = new Array();
var count = 0;
var table = document.querySelector("table")
var input = document.querySelectorAll("input")
table.style.display="none"
button.addEventListener("click", function (e) {
    var isTrueBook = true
    var isTruePrice = true;
    var isTrueAuthor = true
    var isTrueEmail=true
    if (!validateEmpty(input[0].value) || !validateString(input[0].value))     
    {
        isTrueBook = false;
        errorMsg[0].innerText="fill the valid name"
        errorMsg[0].style.display = "block"
        input[0].value = "";
        e.preventDefault()
    }    
    else {
        isTrueBook = true
         errorMsg[0].style.display="none"

    }
    if (!validateEmpty(input[1].value) || !validateNumber(parseInt(input[1].value)))     
    {
        isTruePrice = false;
        e.preventDefault()
        errorMsg[1].innerText="fill the valid Price"
        errorMsg[1].style.display="block"
        input[1].value=""
    }    
    else {
        isTruePrice = true
        errorMsg[1].style.display="none"

    }
    if (!validateEmpty(input[2].value) || !validateString(input[2].value))     
    {
        isTrueAuthor = false;
        e.preventDefault()
         errorMsg[2].innerText="fill the valid name"
        errorMsg[2].style.display = "block"
        input[2].value = "";
    }    
    else {
        isTrueAuthor = true
        errorMsg[2].style.display="none"

    }
    if (!validateEmpty(input[3].value) || !validateEmail(input[3].value))     
    {
        isTrueEmail = false;
        e.preventDefault()
         errorMsg[3].innerText="fill the valid Email"
        errorMsg[3].style.display = "block"
        input[3].value = "";
        
    }    
    else {
        isTrueEmail = true
        errorMsg[3].style.display="none"

    }
    if (isTrueBook&&isTrueAuthor&&isTrueEmail&&isTruePrice) {
        count++;
        var author = new Author(input[2].value, input[3].value)
        var book = new Book(input[0].value, input[1].value, author)
        arr.push(book)
        if (count == num) {
            disApper(arr)
            addRow(arr)
        }
        for (var x in input) {
            input[x].value=""
        }
    }
})
function disApper() {
    input.forEach(function (item) {
        item.style.display="none"
    })
    button.style.display = "none"
    table.style.display="table"
}
function addRow() {
    
    for (var index in arr) {
        var tdBookName =document.createElement("td")
        var tdBookPrice =document.createElement("td")
        var tdAuthorName =document.createElement("td")
        var tdAuthorEmail = document.createElement("td")
        var updateBtn = document.createElement("button")
        var deleteBtn = document.createElement("button")
        updateBtn.innerText="Update"
        deleteBtn.innerText = "Delete"
        var tdUpdate = document.createElement("td")
        var tdDelete = document.createElement("td")
        var tr = document.createElement("tr")
        updateBtn.setAttribute("id", `update${index}`)
        updateBtn.setAttribute("onclick",`updateRow(${index})`)
        deleteBtn.setAttribute("id", `delete${index}`)
        deleteBtn.setAttribute("onclick", `deleteRow(${index})`);
        tdBookName.innerText = arr[index].name;
        tdBookPrice.innerText = arr[index].price;
        tdAuthorName.innerText = arr[index].author.name;
        tdAuthorEmail.innerText = arr[index].author.email;
        tdUpdate.appendChild(updateBtn)
        tdDelete.appendChild(deleteBtn)
        tr.appendChild(tdBookName)
        tr.appendChild(tdBookPrice)
        tr.appendChild(tdAuthorName)
        tr.appendChild(tdAuthorEmail)
        tr.appendChild(tdUpdate)
        tr.appendChild(tdDelete)
        tbody.appendChild(tr)
    }
}

//////////////////////////
//edit
function updateRow(e) {
    var btn = document.querySelector(`#update${e}`)
    var parent = btn.parentElement.parentElement;
    var childNodes = parent.childNodes
    for (var i = 0; i < childNodes.length-2; i++){
        var el = childNodes[i].firstChild
        var input = document.createElement("input");
        var span = document.createElement("span")
        span.setAttribute("class","invalid-feedback")
        input.setAttribute("type", "text")
        input.setAttribute("value", el.textContent)
        childNodes[i].removeChild(childNodes[i].firstChild)
        childNodes[i].appendChild(input)
        childNodes[i].appendChild(span)
    }
    btn.setAttribute("onclick", `save(${e})`)
    btn.textContent = "Save";
}
//////////////
function save(e) {
    var btn = document.querySelector(`#update${e}`)
    var parent = btn.parentElement.parentElement;
    var childNodes = parent.childNodes
    var errorMsg=document.querySelectorAll("span")
    var isTrueBook = true
    var isTruePrice = true;
    var isTrueAuthor = true
    var isTrueEmail=true
    if (!validateEmpty(childNodes[0].firstChild.value) || !validateString(childNodes[0].firstChild.value))     
    {
        isTrueBook = false;
        errorMsg[0].innerText = "fill the valid name"
        errorMsg[0].style.display="block"

    }    
    else {
        isTrueBook = true
        errorMsg[0].style.display="none"

    }
    if (!validateEmpty(childNodes[1].firstChild.value) || !validateNumber(parseInt(childNodes[1].firstChild.value)))     
    {
        isTruePrice = false;
        errorMsg[1].innerText = "fill the valid Price"
        errorMsg[1].style.display="block"
        
    }    
    else {
        isTruePrice = true
        errorMsg[1].style.display="none"

    }
    if (!validateEmpty(childNodes[2].firstChild.value) || !validateString(childNodes[2].firstChild.value))     
    {
        isTrueAuthor = false;
        errorMsg[2].innerText = "fill the valid name"
        errorMsg[2].style.display="block"
        
    }    
    else {
        isTrueAuthor = true
        errorMsg[2].style.display="none"
    }
    if (!validateEmpty(childNodes[3].firstChild.value) || !validateEmail(childNodes[3].firstChild.value))     
    {
        isTrueEmail = false;
        errorMsg[3].innerText = "fill the valid Email"
        errorMsg[3].style.display="block"
    }    
    else {
        isTrueEmail = true
        errorMsg[3].style.display="none"
    }
    if (isTrueBook&&isTrueAuthor&&isTrueEmail&&isTruePrice) {
        for (var i = 0; i < childNodes.length-2; i++){
        var x = childNodes[i].firstChild
            // var td = document.createElement("td");
            // console.log(childNodes[i]);
            console.log("dff ", x.value);
            // childNodes[i].removeChild(childNodes[i].firstChild)
            // console.log(childNodes[i].firstChild);
            childNodes[i].removeChild(childNodes[i].firstChild)
            childNodes[i].textContent = x.value
            console.log(childNodes[i]);
            // console.log(childNodes[i].textContent);
        // childNodes[i].appendChild(td)
    }
    btn.setAttribute("onclick", `updateRow(${e})`)
    btn.textContent = "Update";
    }
}
///////////////////////
////delete    
function deleteRow(e) {
    var btn = document.querySelector(`#delete${e}`)
    btn.parentElement.parentElement.remove()
}
//////////////////////
var nameRegex = /^[a-zA-Z ]+$/;
var numberRegex = /^\d+$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
function validateEmpty(Validate) {
    if (Validate.length == 0) {
        return false
    }
    return true;
} 
function validateString(Validate){
    if (!nameRegex.test(Validate)) {
        return false
    }
    return true;
} 
function validateNumber(Validate){
    
    if(!numberRegex.test(Validate)){
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

    