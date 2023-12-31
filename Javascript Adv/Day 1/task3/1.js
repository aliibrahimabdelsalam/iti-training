var form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    var num = document.f1.number.value;
    if (isNaN(num)) {
        var span = document.querySelector("span")
        span.innerText = "Enter Valid Number"
        span.style.color="red"
        e.preventDefault()
    } else {
        span.innerText = ""
        span.style.color="black"
    }

})