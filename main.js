let playerCounter = 0;
let computerCounter = 0;

let scoreC = document.querySelector('.scoreC');
let scoreP = document.querySelector('.scoreP');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerMove = document.querySelector('.playerMove');
const computerMove = document.querySelector('.computerMove');
const whoWon = document.querySelector('.whoWon');

let imagesContainer = document.querySelectorAll('.container__images-item');

let computerSelection;
let playerSelection = imagesContainer.forEach((selection) => {

    const img = selection.querySelector('img');

    img.addEventListener('click', () => {
        playerSelection = img.alt.toLowerCase();
        return [playerSelection, game()];
    });

});

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];  
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    let gameScoreMessage = '';
    computerSelection = getComputerChoice();
    playerSelection;

    
    playerMove.innerHTML = `<img src='./images/${playerSelection}.png' class='displaySelection'>`;
    computerMove.innerHTML = `<img src='./images/${computerSelection}.png' class='displaySelection'>`;

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        gameScoreMessage = 'Player won!';
        whoWon.textContent = gameScoreMessage;
        playerCounter++;
        return [playerCounter, computerSelection];
    }
    else if (playerSelection === computerSelection) {
        gameScoreMessage = 'It\'s a tie!';
        whoWon.textContent = gameScoreMessage;
        playerCounter;
        computerCounter;
        return [playerCounter, computerCounter, computerSelection];
    }
    else {
        gameScoreMessage = 'Computer won!';
        whoWon.textContent = gameScoreMessage;
        computerCounter++;
        return [computerCounter, computerSelection];
    }

}

function checkWinner() {

    if(computerCounter === 5 && playerCounter < 5) {
        return showFinishScreen();
    }
    else if(playerCounter === 5 && computerCounter < 5) {
        return showFinishScreen();
    }

}

function game() {
    
    playRound();
    checkWinner();
    
    scoreC.textContent = computerCounter;
    scoreP.textContent = playerCounter;
    console.log(`P: ${playerCounter}, C: ${computerCounter}, Player selected: ${playerSelection}, Computer selected: ${computerSelection}`);
    
}

// Finished game screen
const finishedScreen = document.querySelector('.finished__game');
const playAgain = document.querySelector('.finished__game-btn');
const gameField = document.querySelector('.container');
const endGameScores = document.querySelector('.txt');
const footer = document.querySelector('footer');

playAgain.addEventListener('click', () => {
    playerCounter = 0;
    computerCounter = 0;
    scoreC.textContent = '-';
    scoreP.textContent = '-';
    whoWon.textContent = '';
    playerMove.textContent = '';
    computerMove.textContent = '';
    finishedScreen.style.display = 'none';
    gameField.style.display = 'flex';
    footer.style.display = 'flex';
});

function showFinishScreen() {

    finishedScreen.style.display = 'flex';
    gameField.style.display = 'none';
    footer.style.display = 'none';
    endGameScores.textContent = `Player: ${playerCounter} Computer: ${computerCounter}`;

}