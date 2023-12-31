//  1111
var x=prompt("enter pattern")
var j=0
var isTrue=true
var l=confirm("are you sensitive in uppercase or lowercase charachterise?")
if(!l)
    x=x.toLowerCase()
for(var i=x.length-1;i>=0;i--){
    if(x[i]!=x[j])
    {
        isTrue=false;
        break;
    }
    j++
}
isTrue? document.write("<h2>the pattern is palindroma</h2>"):document.write("<h2>isn't palindroma</h2>")



