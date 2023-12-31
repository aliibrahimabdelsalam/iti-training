var btn = document.querySelector("button");

var gender = document.querySelectorAll("input[name='gender']");
btn.addEventListener("click", function () {
    var num = document.querySelector("input[name='number']").value;
    var name = document.querySelector("input[name='name']").value;
    var color = document.querySelector("input[name='color']").value;
    var genderCheck="2.jpg"
    var genderSelected;
    for (var input of gender) {
        if (input.checked) {
        genderSelected = input.value;
        break;
        }
     }
    
    if (genderSelected === "male") {
        genderCheck="1.jpg"
    } 

    window.localStorage.setItem("name", name);
    window.localStorage.setItem("count", 1);

    window.localStorage.setItem("number", num);
    window.localStorage.setItem("color", color);
    window.localStorage.setItem("gender", genderCheck);
    location.href="2.html"

})

