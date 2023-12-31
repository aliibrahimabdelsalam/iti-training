
var contentUser = document.querySelector(".content-user");
var contentPost = document.querySelector(".content-post");

function getUsers() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject("error to call users")
        }
      })
      .then(users => {
          for (user of users) {
            var div = document.createElement("div")
            div.textContent = user.name;
            // console.log(user.id);
            div.classList.add("user");
            div.setAttribute("onclick",`clickable(${user.id},this)`)
            contentUser.appendChild(div)
          }
          resolve()
        })
 }) 
}
function getPost(userId) {
  fetch('https://jsonplaceholder.typicode.com/posts/?userId='+userId)
    .then(response => response.json()).
    then(posts => {
      // console.log("fdds" ,posts);
      return new Promise(() => {
        contentPost.textContent = '';
        for (post of posts) {
          var div = document.createElement("div")
          div.textContent = post.title;
          div.classList.add("post");
          contentPost.appendChild(div)
        }
      })
    }).catch( error=>console.log("error"))
}
getUsers().then(() => {
  getPost(1)
}).catch(error => {
  console.log(error);
})
function clickable(userId, e) {
  var selected = document.querySelectorAll(".active");
  for (item of selected) {
    
    item.classList.remove("active")
  }
  e.classList.add("active");
  getPost(userId);
}