let userInput = prompt("Are we there yet?");

while (userInput.toLowerCase() !== "yes" && userInput.toLowerCase() !== "yeah" && userInput.toLowerCase().indexOf("yes") < 0) {
    userInput = prompt("Are we there yet?");
}

alert("Yay, we finally made it!");