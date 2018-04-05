document.onload = (function(){
    let secretNumber = getSecretNumber();
    document.secretNumber = secretNumber;
})();
const guessInput = document.querySelector('#guess-input');
const submitButton = document.querySelector('#guess-value');
const minNumber = document.querySelector('.min-num').innerHTML = document.secretNumber;

function getSecretNumber(){
    return Math.round(Math.random() * 10);
}