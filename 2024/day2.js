let input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

let lines = input.split("\n");
let sumOfSafe = 0;
for (let i=0; i < lines.length; i++) {
    let singleLine = lines[i].split(' ');
    let isIncreasing;
    let isSafe;
    if(Number(singleLine[0]) < Number(singleLine[1])){
        isIncreasing = true; // increasing
    } else {
        isIncreasing = false; // decreasing
    }
    for(let j=0; j < singleLine.length - 1; j++) {
        if((isIncreasing && (Number(singleLine[j]) < Number(singleLine[j+1])) && ((Number(singleLine[j+1]) - Number(singleLine[j])) <= 3)) || (!isIncreasing && Number(singleLine[j+1]) < Number(singleLine[j]) && (Number(singleLine[j]) - Number(singleLine[j+1])) <= 3)){
            isSafe = true;
        } else {
            isSafe = false;
            break;
        }
    }
    if(isSafe) {
        sumOfSafe++;
    }
}
console.log(sumOfSafe)
