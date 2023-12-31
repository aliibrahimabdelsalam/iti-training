
$('.add').click(function () {
    var textInputs = $('input[type="text"]').val();
    console.log(textInputs);
    var div = $('<div class="content">');
    var span = $('<span>');
    var button = $('<button class="delete">Delete</button>');
    button.attr('onclick', 'deleteRow(this)')
    button.css('display','none');
    span.text(textInputs);
    $(div).append("<input type='checkbox' onchange='showDeleteBtn(this)' >");
    $(div).append(span);
    $(div).append(button);
    $('.container').append($(div));
    $('input[type="text"]').val('') 
})
function deleteRow(e) {
    $(e).parent().remove();
}
function showDeleteBtn(e) {
    var deleteBtn = $(e).siblings(':last');
    $(deleteBtn).css('display','inline')
}