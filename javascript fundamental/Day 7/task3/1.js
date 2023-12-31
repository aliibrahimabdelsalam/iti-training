var img=document.querySelectorAll("img")
var num=0;
var x=false
var interval=setInterval(iteration,1000)
function iteration(){
    img[num].src="2.jpg"
    if(num!=0 ){
        img[num-1].src="1.jpg"
    }else if(x){
        img[5].src="1.jpg"
    }
    num++;
    if(num>5){
        x=true
        num=0
    }
}

img.forEach(function(item){
    item.addEventListener("mouseover",function(){
        clearInterval(interval)
        num==0?img[num].scr="1.jpg":img[num-1].src="1.jpg"
        if(x)
            img[5].src="1.jpg"
        item.src="2.jpg"
    })
    item.addEventListener("mouseleave",function(){
        item.src="1.jpg"
        interval=setInterval(iteration,1000)
})
})


        