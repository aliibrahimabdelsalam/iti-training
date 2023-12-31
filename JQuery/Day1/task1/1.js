function setCookies(key,value)
{
    // document.cookie = `count = 0`;   
    var date = new Date(2023,11,29);
    document.cookie = `${key} = ${value};expires= ` + date;
}
setCookies("username","ali");
function getCookies(key)
{
    var arr = document.cookie.split("; ")
        var result = false;
    arr.forEach(function (ele) {
        var keyCheck = ele.split("=");
        if (keyCheck[0] === key)
            result = keyCheck[1];
    })
    return result

}
console.log(getCookies("username"));
function deleteCookie(key) {
  document.cookie = `${key} = ali ; expires = ${new Date(1999, 11, 10)}`;
}
// deleteCookie("username");
function allCookieList() {
    return document.cookie;
}
console.log(" all cookies ", allCookieList());

function hasCookie(key) {
    var arr = document.cookie.split("; ")
        var result = false;
    arr.forEach(function (ele) {
        var keyCheck = ele.split("=");
        if (keyCheck[0] === key)
            result = true;
    })
    return result;
}
console.log("has cookies ", hasCookie("username"));
var count = 0;
window.addEventListener("load", function () {
    count++;
    var arr = document.cookie.split("; ")
    // console.log(arr);
    var result = 0;
    // console.log("h1");
    arr.forEach(function (ele) {
        // var i = 0;
        var keyCheck = ele.split("=");
        if (keyCheck[0] == 'count') {
            result = keyCheck[1];
            // console.log("result " ,++result);
        }
        // console.log("h2 ",++i);
    })
    
    document.cookie = `count = ${++result}`;
})