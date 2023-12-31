document.querySelector("button").addEventListener("click",fun)
// var site
function fun() {
    
    var site= window.open("2.html","_blank","width=400px , height=400px")
    setTimeout(function(){
        
        site.close();
    }, 5000);
}
