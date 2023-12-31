var xhr = new XMLHttpRequest();

xhr.open("get", "https://jsonplaceholder.typicode.com/posts")
xhr.send();

xhr.addEventListener("readystatechange", function () {
    console.log(xhr.response);
    console.log(xhr);
    if (xhr.readyState == 4) {
        if (xhr.status = 200) {
            var posts = JSON.parse(xhr.response)
            posts.forEach(function (post) {
                var title = document.createElement("h2");
                var bodyJson = document.createElement("p");
                var div = document.createElement("div");
                title.innerText = post.title;
                bodyJson.innerText = post.body;
                div.appendChild(title)
                div.appendChild(bodyJson)
                document.querySelector(".container").appendChild(div)
            } )
                
            }
        }
})
