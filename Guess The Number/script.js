let randomNum = parseInt(Math.round(Math.random() * 100) + 1);

const userInput = document.querySelector('#userInput');
const attemptsLeft = document.querySelector('#attemptsLeft');
const guessMessege = document.querySelector('#guessmessege');
const prevGuess = document.querySelector('#prevguess');
const btnNewGame = document.querySelector('input[type="button"]');

let guessNum = 1;
let score =  10;
console.log(randomNum);

let playAgain = true;

if(playAgain) {

    document.querySelector('#submitButton').addEventListener( 'click', (e)=>{
        e.preventDefault();
    
        const guess = parseInt(userInput.value);
    
        validateGuess(guess);
       
    } );

}

const validateGuess = (guess) => {

    if(isNaN(guess)){
        alert('Please Enter a Valid Number!');
    } else if(guess < 1){
        alert('Please Enter a Number greater than or equal to 1!');
    } else if(guess > 100){
        alert('Please Enter a Number less than or equal to 100!');
    } else {
        if(guessNum >= 10) {
            score--;
            showResult(guess);
            guessMessege.innerHTML = `The Random Number was ${randomNum}.`
            endGame();
        } else if (guessNum < 10){
            compareFunction(guess);
            showResult(guess);
        }
    }
};

const compareFunction = (guess) => {

    if(randomNum > guess) {
        guessMessege.innerHTML = "The Number is Bigger.";
        guessMessege.classList.add('font-size-20px', 'result-bg-color', 'padding-5px');
        score--;
    } else if(randomNum < guess) {
        guessMessege.innerHTML = "The Number is Lesser.";
        guessMessege.classList.add('font-size-20px', 'result-bg-color', 'padding-5px');
        score--;
    } else if (randomNum === guess) {
        guessMessege.innerHTML = "Hurrah! You guessed it correct.";
        guessMessege.classList.add('font-size-20px', 'result-bg-color', 'padding-5px');
        endGame();
    }

}

const showResult = (guess) => {
    userInput.value = '';
    attemptsLeft.innerHTML = `${10 - guessNum}`;
    document.querySelector('#showPreGuess').style.display = "block";
    prevGuess.innerHTML += `${guess}, `;
    document.querySelector('#showPreGuess').classList.add('font-size-20px', 'result-bg-color', 'padding-5px');
    guessNum++;
}

const endGame = () => {
    userInput.setAttribute('disabled', '');
    document.querySelector('.submit').style.display = "none";
    document.querySelector('#score').innerHTML = `Your score is : ${score}/10`;
    document.querySelector('#score').classList.add('font-size-20px', 'result-bg-color', 'padding-5px');
    btnNewGame.style.display = 'block';
    newGame();
}

const newGame = () => {

    btnNewGame.addEventListener('click', (e) => {
        e.preventDefault();
    
        randomNum = parseInt(Math.round(Math.random() * 100) + 1);
        guessMessege.innerHTML = '';
        guessMessege.classList.remove('font-size-20px', 'result-bg-color', 'padding-5px');
        guessNum = 1;
        prevGuess.innerHTML = '';
        document.querySelector('#showPreGuess').style.display = "none";
        score = 10;
        document.querySelector('#score').classList.remove('font-size-20px', 'result-bg-color', 'padding-5px');
        document.querySelector('#score').innerHTML = ''
        attemptsLeft.innerHTML = 10;
        userInput.removeAttribute('disabled');
        document.querySelector('.submit').style.display = "block";
        btnNewGame.style.display = 'none';
        playAgain = true;
    } )

}
