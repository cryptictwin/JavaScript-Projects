const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);

let attempts = 0;
let guess;
let runtime = true;

while(runtime) {
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("That is not a valid number");
    }
    else if(guess >= 100 || guess < 1) {
        window.alert("That is not a valid number");
    }

    else {
        attempts ++;
        if(guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else if(guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else {
            window.alert(`Correct! The answer was ${answer}, which took you ${attempts} attempts to get.`);
            runtime = false;
        }
    }
}