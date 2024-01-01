var fruits = ["apple", "strawberry", "banana", "orange", "banana"]
var x = fruits.filter((item) => {
    return typeof item ==="string"
})
console.log(x);
var y = fruits.filter((item) => {
    if (item.startsWith("a")) {
        return item;
    }
})
console.log(y);
var z = fruits.filter((item) => {
    if (item.startsWith("b")||item.startsWith("s")) {
        return item;
    }
})
console.log(z);
var a =[]
function filterName(itemName) {
    a = fruits.filter((item) => {
    return item==itemName
    })
    return a
}
console.log(filterName("banana"));
a.forEach(function (item,index) {
    console.log(`i like of ${index+1} ${item}`);
})
