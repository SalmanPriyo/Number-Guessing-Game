let inputNum = document.getElementById("input");
let outputText = document.getElementById("output");
let btn = document.getElementById("btn");


let number = Math.floor(Math.random() * 100) + 1;
console.log(number);
let guess = 0;
let guessRemaining = 5;
let alreadyGuessed = 0;
let status;
let correctGuessMaker = false;


btn.addEventListener('click', guessNum);


function guessNum() {
    guess = parseInt(inputNum.value);
    guessRemaining--;
    alreadyGuessed++;
    status = `now you have only ${guessRemaining} chances left!`

    if (guess > number) {
        outputText.innerHTML = "That's high! " + status;
        if (guessRemaining < 1) {
            gameOver();
        }
    }
    else if (guess < number) {
        outputText.innerHTML = "That's low! " + status;
        if (guessRemaining < 1) {
            gameOver();
        }
    }
    else if (guess === number) {
        correctGuessMaker = true;
        gameOver();
    }
}


function gameOver() {
    if (correctGuessMaker) {
        outputText.innerHTML = "Congrats! You have guessed it correctly!"
    } else {
        outputText.innerHTML = "No more chances are left. GAME OVER!"
    }

    btn.removeEventListener('click', guessNum)
    btn.disabled = true;
    inputNum.disabled = true;
}


