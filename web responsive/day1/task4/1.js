var menuBtn = document.querySelector(".fa-bars");
console.log(menuBtn);
var lists = document.querySelector(".navbar-sm-menu");
console.log(lists);
menuBtn.addEventListener("click", function (e) {
    console.log("hello");
    // console.log(menuBtn.childNodes);
    lists.classList.toggle("active")
        
})