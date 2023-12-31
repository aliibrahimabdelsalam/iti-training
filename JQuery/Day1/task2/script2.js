var container = document.querySelector("div");
var image = document.querySelector("img");
var text = document.querySelectorAll("span");
var count = 1;
function dateForm() {
    var name = window.localStorage.getItem("name"); 
    var age=window.localStorage.getItem("number"); 
    var count=window.localStorage.getItem("count"); 

    var gender = window.localStorage.getItem("gender"); 
    var color = window.localStorage.getItem("color"); 
    text[0].innerText = name;
    text[1].innerText = age;
    text[2].innerText = count;
    image.setAttribute("src", gender);
    text[0].style.color = color;
    text[1].style.color = color;
    text[2].style.color = color;
    
}

dateForm();
window.addEventListener("load", function () {
    var count =window.localStorage.getItem("count");
    this.window.localStorage.setItem("count",++count)
})