let userScore = 0;
let computerScore = 0;
let imie;
const userLabel = document.querySelector('#user-label');
const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#computer-score');
const scoreboardDiv = document.querySelector('.scoreboard');
const resultP = document.querySelector('.result p');
const rockDiv = document.querySelector('#rock');
const paperDiv = document.querySelector('#paper');
const scissorsDiv = document.querySelector('#scissors');
const newGame = document.querySelector('.newgame');


imie = prompt('Podaj swoje nazwę.');
imie = imie.charAt(0).toUpperCase() + imie.slice(1);
userLabel.innerText = imie;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice,computerChoice){
    userScore += 1;
    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;
    resultP.innerText = userChoice + ' (' + imie + ') beats ' + computerChoice + ' (computer). You win!';
}

function lose(userChoice,computerChoice){
    computerScore += 1;
    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;
    resultP.innerText = computerChoice + ' (computer) beats ' + userChoice + ' (' + imie + '). You lose!';
}

function draw(userChoice,computerChoice){
    resultP.innerText = userChoice + ' (' + imie + ") doesn't beat " + computerChoice + " (computer). It's draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice,computerChoice);
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice,computerChoice)
            break;

        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice,computerChoice);
            break;
    }

    if(userScore == 10){
        resultP.innerText = imie + ' wins! Congratulations!';
        newGame.innerText = 'Start new game';
        newGame.className = 'newgameBtn';
        newGame.addEventListener('click',function(){
            location.reload();
        })
    }
    else if(computerScore == 10){
        resultP.innerText = 'Computer wins!';
        newGame.innerText = 'Start new game';
        newGame.className = 'newgameBtn';
        newGame.addEventListener('click',function(){
            location.reload();
        })
    }
}

rockDiv.addEventListener('click', function() {
    game('Rock');
})

paperDiv.addEventListener('click', function() {
    game('Paper');
})

scissorsDiv.addEventListener('click', function() {
    game('Scissors');
})
