const max = prompt("Enter a max number from 1 to ?");
let num = Math.floor(Math.random() * max) + 1;
let guessnum = prompt(`Guess a number between 1 and ${max}`);
while (true) {
    if (num == guessnum) {
        alert(`Congratulations You passed, Random numer was ${num}`);
        break;
    }
    else if (num > guessnum) {
        guessnum = prompt("Entered number was small...Please try again...");
    }
    else {
        guessnum = prompt("Entered number was big...Please try again...");
    }   
}