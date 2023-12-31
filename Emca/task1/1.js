// let a = 10;
// let b = 20;
var [a, b] = [10, 20];
console.log(`the value of a before destruct is :: ${a}`);
console.log(`the value of b before destruct is :: ${b}`);
[b, a] = [a, b]
console.log(`the value of a is :: ${a}`);
console.log(`the value of b is :: ${b}`);