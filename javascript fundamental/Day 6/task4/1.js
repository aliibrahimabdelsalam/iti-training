// var x="a"
// console.log(x.charCodeAt());

window.addEventListener("keydown",test)

function test(e){
    console.log(e.key)

    // if(e.key!=="Control") {
    //     alert("the key is :: ",e.key.cha)
    // }
    e.key.charCodeAt()==65|| e.key.charCodeAt()==67 ? alert("the key is :: "+e.key):alert((e.key).charCodeAt())
    // alert(x.charCodeAt())
}