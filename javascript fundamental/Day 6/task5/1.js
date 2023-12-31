function validate(e){
    if(isNaN(e.key)) {
        alert("you should enter the Number ")
        e.preventDefault();
    }
}