// console.log($(document));


$.get("https://jsonplaceholder.typicode.com/users", function(data){
  console.log(data);
  for (user in data) {
    // console.log(data[user]['username']);
    var div = $('<div class=content></div>');
    $(div).append(`<p onclick=test(${data[user]['id']},this)>${data[user]['username']}</p>`)
    $('.left').append(div);
  }
});
function test(userId,e) {
console.log(userId);
  $.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, function (data) {
    $('.right').find('.right-content').remove();
    console.log(data);
    for (post in data) {
        var div = $('<div class=right-content>')
        $(div).append(`<p>${data[post]['title']}</p>`)
        $('.right').append(div);
      
    }
  })
}
test(1);
