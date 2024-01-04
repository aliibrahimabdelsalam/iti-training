let user = {
    name: "ali",
    age: "45",
    address:"ismailia"
}
let handler= {
    
    set: function (target, prop, value, proxy) {
        if (prop=="name") { 
            if (value.length < 7 ||isFinite(value)) {
                throw ("you should enter name length 7 and only characters.")
            }
        } else if (prop=="address") {
            if (isFinite(value)) {
                throw ("you should enter address and only characters.")
            }
        }
        else if(prop=="age"){
            if (!isFinite(value)|| value>60 ||value<25) {
                throw ("you should enter age numbers and between 25 to 60.")
            }
        } else {
                throw (`not found ${prop}`)
            
        }
                target[prop] = value;

    }

}
let p = new Proxy(user, handler);
p.city = "jgy";
p.name = "sdssdfdfdf";
p.address = "hjghf";
p.age = 33;
console.log(p)
console.log(p.city);
 