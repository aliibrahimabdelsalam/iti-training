var image=document.querySelector("img")
var imgSlider=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"]
var num=0
var next=document.querySelector(".next")
next.addEventListener("click",function(){
    num++;
    if(num<6)
    image.src=imgSlider[num]
    else
    num=5
})
var previous=document.querySelector(".previous")
previous.addEventListener("click",function(){
    num--;
    if(num>-1)
    image.src=imgSlider[num]
    else
    num=0
})
var slider=document.querySelector(".slider")
slider.addEventListener("click",function(){
     interval=setInterval(function() 
    {
    num++;
    if(num<6)
    image.src=imgSlider[num]
    else
    num=0
},2000);
})
var stop=document.querySelector(".stop")

stop.addEventListener("click",function(){
    clearInterval(interval)
})
