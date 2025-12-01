let TaskInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

let InputLines = TaskInput.split("\n");

function findXMAS(array) {
    let sumOfResults = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 'X') {
                // normal
                if(j+3 < array[i].length)
                if ( array[i][j+1] === 'M' && array[i][j+2] === 'A' && array[i][j+3] === 'S') {
                    sumOfResults++;
                }
                // reverse
                if(j+3 >= 0)
                if ( array[i][j-1] === 'M' && array[i][j-2] === 'A' && array[i][j-3] === 'S') {
                    sumOfResults++;
                }
                // DOWN
                if(i+3 < array.length)
                if ( array[i+1][j] === 'M' && array[i+2][j] === 'A' && array[i+3][j] === 'S') {
                    sumOfResults++;
                }
                // UP
                if(i-3 >= 0)
                if ( array[i-1][j] === 'M' && array[i-2][j] === 'A' && array[i-3][j] === 'S') {
                    sumOfResults++;
                }

                // cross SE
                if(i+3 < array.length && j+3 < array[i].length)
                    if ( array[i+1][j+1] === 'M' && array[i+2][j+2] === 'A' && array[i+3][j+3] === 'S') {
                        sumOfResults++;
                    }
                // cross NE
                if(i-3 >= 0 && j+3 < array[i].length)
                    if ( array[i-1][j+1] === 'M' && array[i-2][j+2] === 'A' && array[i-3][j+3] === 'S') {
                        sumOfResults++;
                    }
                // cross SW
                if(i+3 < array.length && j-3 >= 0)
                    if ( array[i+1][j-1] === 'M' && array[i+2][j-2] === 'A' && array[i+3][j-3] === 'S') {
                        sumOfResults++;
                    }
                // cross NW
                if(i-3 >= 0 && j-3 >= 0)
                    if ( array[i-1][j-1] === 'M' && array[i-2][j-2] === 'A' && array[i-3][j-3] === 'S') {
                        sumOfResults++;
                    }
            }
        }
    }
    return sumOfResults
}

console.log(findXMAS(InputLines));