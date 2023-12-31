function test(e) {
    var classValue = $(e).attr("class");
    $('p').removeClass('active')
    $('span').addClass('hidden')
    $(e).toggleClass('active');
    $(`span.${classValue}`).removeClass('hidden');

}