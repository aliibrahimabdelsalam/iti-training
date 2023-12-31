var arr = ['1.jpg', '2.jpg', '3.jpeg', '4.jpg'];
var content = $('.content');
var img = $('.img-show');
var rule;
var isTrue=false
var count = 0;
function imgSlide(e) {
    rule = $(e).attr("src")
    $(img).attr('src',rule)
    $(content).css('z-index',65)
}
$(".content").not(".content-div").click(function (e) {
    if (!e.target.closest('.content-div'))
    $(content).css('z-index',1)
});
$('.left').click(function () {
    // if (!isTrue) {
        for (var i = 0; i < arr.length; i++) {
            if (rule == arr[i]) {
                count = i;
                isTrue=true
            }
        }
    // }
    if (count == 0)
        count = 4;
    $(img).attr('src', arr[--count]);
});
$('.right').click(function () {
    if (!isTrue) {
        for (var i = 0; i < arr.length; i++) {
            if (rule == arr[i]) {
                count = i;
                console.log("counter ", count);
                isTrue=true
            }
        }
    }
    if (count == 3)
        count = -1;
    $(img).attr('src', arr[++count]);
});