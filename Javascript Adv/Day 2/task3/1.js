function Box(h,w,l,v,m,b) {
    this.width = h;
    this.height = w;
    this.length = l;
    this.volume = v;
    this.material=m
    this.arrBook = new Array();
    this.count = 1  
    Box.countOfAllBooks++;
}
Box.countOfAllBooks = 0

Box.prototype.addBook = function (book) {
    this.book = book
    this.arrBook.push(book)
    this.count++;
}
Box.prototype.counter = function () {
    return this.count
}
Box.prototype.toString = function () {
    console.log("the height is :: ",this.height);
    console.log("the width is :: ",this.width);
}
Box.prototype.deleteBook = function (n) {
    for (var b in this.arrBook) {
        if (this.arrBook[b].authorName == n) {
            this.arrBook.splice(b, 1)
            this.count--;
            Box.countOfAllBooks--
        }
    }
}

/////////

function Book(author,title,numOfPages,publisher,numOfCopies) {
    this.authorName = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.publisher = publisher;
    this.numOfCopies=numOfCopies
}


// var book = new Book("ibrahim", "sdsd", 75)
var book2=new Book("ali","sdsd",434)
var book3=new Book("abdelsalam","sdsd",434)
// var book4=new Book("abdelrahim","sdsd",434)

var b = new Box(4, 6, 34)

b.addBook(book2)
b.addBook(book3)
// b.addBook(book)
// b.addBook(book4)
console.log(b.counter())

b.deleteBook("ali")
// console.log(b.counter())
console.log(b.toString())