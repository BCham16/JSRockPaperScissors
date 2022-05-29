const playerRock = document.querySelector('#playerRockButton');
const playerPaper = document.querySelector('#playerPaperButton');
const playerScissors = document.querySelector('#playerScissorsButton');
const computerRock = document.querySelector('#computerRockButton')
const computerPaper = document.querySelector('#computerPaperButton')
const computerScissors = document.querySelector('#computerScissorsButton')
const readyToPlay = document.querySelector('#chosenObject');
const animatedStyle = `
border-Style: solid;
border-Color: green;
border-Width: 5px;
transition: 200ms;
box-shadow: 15px 15px 10px rgb(0,0,0);
`
const clearStyle = `style = 
box shadow: none;
`
let score = 0;

playerRock.addEventListener ('click', function() {runGame('rock')});
playerPaper.addEventListener ('click', function() {runGame('paper')});
playerScissors.addEventListener ('click', function() {runGame('scissors')});


function runGame(choice){
  const playerChoice = choice;  
  console.log(playerChoice);
  computer = computerChoice();
  gameResult = gameResults(playerChoice, computer);
  updateStandings(gameResult, playerChoice);
  setTimeout(() => {
    computerRock.style = clearStyle;
    computerPaper.style = clearStyle;
    computerScissors.style = clearStyle;
  }, 2000)
}


function computerChoice(){ 
  const rnd = Math.floor(Math.random() * 3);
  if (rnd == 0){
    computer = 'rock';
    computerRock.style = animatedStyle;
  }
  else if (rnd == 1){
    computer = 'paper'
    computerPaper.style = animatedStyle;
}
  else {
    computer = 'scissors'
    computerScissors.style = animatedStyle;
  }
  console.log(computer);
  return computer;
}

function gameResults(playerChoice, computer){
  let gameResult = 0; 
  if (playerChoice == 'rock'){
    if (computer == 'paper'){gameResult = -1}
    else if (computer == 'scissors'){gameResult = 1}
  }
  if (playerChoice == 'paper'){
    if (computer == 'rock'){gameResult = 1}
    else if (computer == 'scissors'){gameResult = -1}
  }
  if (playerChoice == 'scissors'){
    if (computer == 'rock'){gameResult = -1}
    if (computer == 'paper'){gameResult = 1}
  }
  console.log(gameResult);
  return gameResult
}

function updateStandings(gameResult, playerChoice){
  scoreboard = document.querySelector('#score');
  lastGame = document.querySelector('#lastGame');
  lastChoice = document.querySelector('#lastChoice');
  singleGame = document.querySelector('#results');
  
  score += gameResult;

  scoreboard.textContent = score;
  if (gameResult == 0){singleGame.textContent = 'TIE'}
  else if (gameResult == 1){singleGame.textContent = 'WIN'}
  else (singleGame.textContent = 'LOST')

  lastChoice.textContent = playerChoice;


}