let userScore = 0;
let computerScore = 0;

const userLabel = document.querySelector('#user-label');
const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#computer-score');
const scoreboardDiv = document.querySelector('.scoreboard');
const resultP = document.querySelector('.result p');
const newGame = document.querySelector('.newgame');
const container = document.querySelector('.container');
const actionMessage = document.querySelector('#action-message');

const rockDiv = document.querySelector('#rock');
const paperDiv = document.querySelector('#paper');
const scissorsDiv = document.querySelector('#scissors');

let imie = prompt('Podaj swoje nazwę.');
imie = imie.charAt(0).toUpperCase() + imie.slice(1);
userLabel.innerText = imie;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore += 1;
    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;

    resultP.classList.add('translate');
    resultP.key = 'you_win';
    resultP.innerText = userChoice + ' (' + imie + ') beats ' + computerChoice + ' (computer). You win!';
}

function lose(userChoice, computerChoice) {
    computerScore += 1;
    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;

    resultP.classList.add('translate');
    resultP.key = 'you_lost';
    resultP.innerText = userChoice + ' (' + imie + ') loses to ' + computerChoice + ' (computer). You lost.';
}

function draw(userChoice, computerChoice) {
    resultP.classList.add('translate');
    resultP.key = 'its_draw';
    resultP.innerText = userChoice + ' (' + imie + ") equals " + computerChoice + " (computer). It's draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice)
            break;

        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice, computerChoice);
            break;
    }

    if (userScore == 10) {
        resultP.innerText = imie + ' wins! Congratulations!';
        resultP.classList.add('translate');
        resultP.key = 'wins';

        newGame.innerText = 'Nowa gra';
        newGame.classList.remove('newgame');
        newGame.classList.add('translate', 'newgameBtn');
        newGame.key = 'newgame';

        newGame.addEventListener('click', function () {
            location.reload();
        })
    } else if (computerScore == 10) {
        resultP.innerText = 'Computer wins!';
        resultP.classList.add('translate');
        resultP.key = 'computer_wins';

        newGame.innerText = 'Nowa gra';
        newGame.classList.remove('newgame');
        newGame.classList.add('translate', 'newgameBtn');
        newGame.key = 'newgame';

        newGame.addEventListener('click', function () {
            location.reload();
        })
    }
}

rockDiv.addEventListener('click', function () {
    game('Rock');

})

paperDiv.addEventListener('click', function () {
    game('Paper');

})

scissorsDiv.addEventListener('click', function () {
    game('Scissors');

})