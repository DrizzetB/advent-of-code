const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input3.txt"), "utf8");
//let input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
//mul\([1-9][0-9]{0-2},[1-9][0-9]\)
let regex = /mul\([1-9][0-9]*,[1-9][0-9]*\)/g;
let muls = input.match(regex);

let sumMul = 0;
for( let i=0; i<muls.length; i++) {

    firstNo = Number(muls[i].substring(muls[i].search(/\(/)+1,muls[i].search(/\,/)));
    secondNo = Number(muls[i].substring(muls[i].search(/\,/)+1,muls[i].search(/\)/)));

    console.log(firstNo, secondNo);
    sumMul += (firstNo * secondNo);
}

console.log(sumMul);