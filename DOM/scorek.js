let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let resetButton = document.querySelector("#reset");
let p1Display = document.querySelector("#p1score");
let p2Display = document.querySelector("#p2score");
let input = document.querySelector("input");
let max = document.querySelector("#max");
let gameOver = false;
let winningScore = 5;

let p1scor = 0;
let p2scor = 0;

p1Button.addEventListener("click", function() {
    if(!gameOver){
        p1scor++;
        if(p1scor === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
    p1Display.textContent = p1scor;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver){
        p2scor++;
        if(p2scor === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
    p2Display.textContent = p2scor;
    }
});

resetButton.addEventListener("click", function() {
    reset();
});

input.addEventListener("change", function() {
    max.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})

function reset() {
    p1scor = 0;
    p2scor = 0;
    p1Display.textContent = p1scor;
    p1Display.classList.remove("winner");
    p2Display.textContent = p2scor;
    p2Display.classList.remove("winner");
    gameOver = false;
}