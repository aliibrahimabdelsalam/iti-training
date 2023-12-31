var btn = document.querySelector(".fa-bars");
var ul = document.querySelector(".navbar-menu-sm")
var icons=document.querySelector(".navbar-icons-sm")
btn.addEventListener("click", function () {
    console.log("hello");
    console.log(ul);
    ul.classList.toggle("active");
    icons.classList.toggle("active")
})