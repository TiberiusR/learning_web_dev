let secretNumber = Math.ceil(Math.random() * (100 - 1) + 1);

let guess = prompt("Guess a number: ");

if (Number(guess) === secretNumber) {
    alert("You got it right");
} else if (Number(guess) > secretNumber) {
    alert("Too high");
} else {
    alert("Too low");
}
