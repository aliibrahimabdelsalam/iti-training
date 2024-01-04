function* generatorMaxNumber(max) {
    let y = z=0;
    let w = 1;
    yield y;
    for (let x = 1; x < Infinity; x++) {
        y = w + z;
        if (y >= max) {
            break ;
        }
        yield y;
        w = z;
        z = y;
    }
}
function* generatorNum(count) {
    let y = z=0;
    let w = 1;
    yield y;
    for (let x = 1; x < count; x++) {
        if (x == count) {
            return false;
        }
        yield y = w + z;
        w = z;
        z = y;
        
        
    }
}
// let theGenerator = generatorNum(10);
let theGenerator = generatorMaxNumber(10);
let value="generate";
while (value!== undefined) {
     value = theGenerator.next().value;
     if (value==undefined) {
        break
     }
console.log(value); 
}


