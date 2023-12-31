var input =document.querySelector(".input")
function lookPassword(e){
    input.getAttribute("type")==="password"?
    input.setAttribute("type","text"):input.setAttribute("type","password")


    // if(input.type==="password"){
    //     input.type="text"
    // }
    // else{
    //     input.type="password"
    // }
}