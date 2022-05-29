const playerRock = document.querySelector('#playerRockButton');
const playerPaper = document.querySelector('#playerPaperButton');
const playerScissors = document.querySelector('#playerScissorsButton');

playerRock.addEventListener ('click', function() {runGame('rock')});
playerPaper.addEventListener ('click', function() {runGame('paper')});
playerScissors.addEventListener ('click', function() {runGame('scissors')});


function runGame(choice){
  const playerChoice = choice; 
  console.log(playerChoice);
}





//console.dir(playerRock);