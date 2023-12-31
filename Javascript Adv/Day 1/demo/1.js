var user = {
    name: "sdsd",
    age: 0,
    getSetGen: function () {
        var self = this;
        for (var key in self) {
            console.log(this);
            if (typeof key !== "function") {
                (function () {
                    Object.defineProperty(self, "set"+key.charAt(0).toUpperCase()+key.slice(1), {
                        value:
                            function (value) {
                                self[key] = value;
                            }
                        
                    })
                    Object.defineProperty(self, "get"+key.charAt(0).toUpperCase()+key.slice(1), {
                        value:
                            function () {
                                return self[key];
                            }
                    })
                })()
            }
        }
    }
}
user.getSetGen()
var person = {
    price:244
}
user.getSetGen.call(person)