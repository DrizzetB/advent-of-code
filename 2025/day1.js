const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

let list_commands = input1.split("\n");
let current_number = 50;
let secret_code = 0;

for(let i=0; i<list_commands.length; i++){
    command_value = Number(String(list_commands[i]).substring(1));
    
    if(list_commands[i][0] === 'L') {
        current_number = current_number - command_value;
    } else {
        current_number = current_number + command_value;
    }

    while(current_number > 99 || current_number < 0){
        // check if we passed 0
        if(current_number < 0) {
            current_number = 100 + current_number;
            secret_code +=1;
        }

        // check if we passed 99
        if(current_number > 99) {
            current_number = current_number - 100;
            secret_code +=1;
        }
    }

    //check if we are at 100
    if(current_number === 100) {
        current_number = 0;
    }

    console.log('Dial is pointing at', current_number);

    // if(current_number === 0) {
    //     secret_code +=1;
    // }
}

console.log("Secret code is", secret_code);