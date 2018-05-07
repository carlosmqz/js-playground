/*
 *  GAME FUNCTION:
 * - Player must guess a number between a min and max
 * - Player gets a certain amount of guesses
 * - Notify player of guesses remaining
 * - Notify the player of the correct answer if loose 
 * - Let player choose to play again
 */

const game = document.querySelector('#game');
 let guessInput = document.querySelector('#guess-input');
const MAX_OPORTUNITIES = 3;
let userGuess = 0;
let max = 10, min = 1;
let secretNumber = getSecretNumber();
const submitButton = document.querySelector('#guess-button');
let remainingAttempts = MAX_OPORTUNITIES;
let message = document.querySelector('.message');
const minNum = document.querySelector('.min-num').textContent = min;
const maxNum = document.querySelector('.max-num').textContent = max;

message.textContent = `Remaining oportunities to guess the secret number:${MAX_OPORTUNITIES}`

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

function getSecretNumber(){
    return Math.round(Math.random() * (max-min+1)+min);
}

submitButton.addEventListener('click', function()
{
    console.log(secretNumber);
    userGuess++;
    remainingAttempts = MAX_OPORTUNITIES - userGuess;
    message.textContent = `Remaining oportunities to guess the secret number:${remainingAttempts}`;
    if(parseInt(guessInput.value) === secretNumber){
        newGame(true, "Congratulations you won!");
    } else if(remainingAttempts === 0) {
        newGame(false, `You loose! The correct number was ${secretNumber}`);
    }

});

function newGame(won, msg){
    message.textContent = msg;
    guessInput.disabled =true;
    submitButton.value = 'Play Again';
    submitButton.className += 'play-again';
}