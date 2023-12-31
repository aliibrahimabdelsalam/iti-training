

var obj = {
    name: "mai",
    age: 20,
    display: function () {
      console.log(this.name);
      console.log(this.age);
    },
getSetGen:function()
{
    for (var key in this) 
{
    if(typeof this[key] !== "function" )
    {
        var obj_ = this;
        (function()
    {
        var objNamee = obj_[key];
        Object.defineProperty(obj_ , key ,{
        get:function()
            {
                return objNamee;
            },
        set: function (value) {

          objNamee = value;
    }
        })
    })();
    }
    

}
}
};
  var obj2=
{
    hr:"ggg",
    lol:60,
    log:function(){},
    gget:function(){},
}