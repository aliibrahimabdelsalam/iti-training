let user = {
    name: "Ali",
    age: 26,
    address: "ismailia",
    [Symbol.iterator]: iteratorFunc
};
var res = user[Symbol.iterator]();
// console.log(res);
function iteratorFunc() {
    const keys = Object.keys(this);
    const values = Object.values(this);
    let count = -1;
    return {
        next: function ()  {
            count++;
            if (keys.length > count) {
                var key = keys[count];
                return {
                    value: { [key]: values[count] },
                    done: false
                };
            }
            else {
                return {
                    value: undefined,
                    done: true
                };
            }
        }
    }
}
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
for (const iterator of user) {
    console.log(iterator);
    // console.log(user[iterator]);
}