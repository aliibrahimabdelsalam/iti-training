var xhr = new XMLHttpRequest();
var form = document.querySelector("form")
var select = document.querySelector(".band");
xhr.open("get", "rockbands.json")
xhr.send();
xhr.addEventListener("readystatechange", function () {
    console.log(xhr.response);
    if (xhr.readyState === 4) {
        if (xhr.status = 200) {
            var bands = JSON.parse(xhr.response)
            var count = 0;
            for (var band in bands) {
                x.push(bands[band]);
                var option = document.createElement("option")
                option.innerText = band;
                option.setAttribute("value",count)
                count++;
                select.appendChild(option)
            }
            }
        }
})
var select2=document.querySelector(".category")
var x=[ ]
function changeOption() {
    select2.textContent=''
    for (var i = 0; i < x[select.value].length; i++){
        var option = document.createElement("option")
        option.innerText = x[select.value][i].name;
        option.setAttribute("value",x[select.value][i].value)
        select2.appendChild(option)
    }
}
function getUrl() {
    console.log(select2.value);
    // location.href=select2.value
    open(select2.value,"_blank")
}
