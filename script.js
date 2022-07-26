let player = 0;
let computer = 0;

// computerPlay function  will randomly returns rock, paper, or scissors
function computerPlay() {
  let getRandom = Math.floor(Math.random() * 10);
  if (getRandom <= 3) {
    return "Rock";
  } else if (getRandom <= 6) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
let text = document.querySelector("#text");
text.textContent = "";

function playRound(playerSelection, computerSelection) {
  //('running here', playerSelection, computerSelection)
  playerSelection = playerSelection.toString();
  let getPlayerInsensitive = playerSelection.toLowerCase();
  let getResult = document.getElementById("result");
  if (getPlayerInsensitive === "rock" && computerSelection === "Rock") {
    player+=0;
    text = `Player: ${player}   Computer: ${computer}
It's a tie, both are Rock`;
    getResult.innerHTML = text;
  } else if (getPlayerInsensitive === "rock" && computerSelection === "Paper") {
    computer+=1;
    text = `Player: ${player}   Computer: ${computer} 
You Lose! Paper beats Rock`; 
 getResult.innerHTML = text;
  } else if (getPlayerInsensitive === "rock" && computerSelection === "Scissors") {
    player+=1;
    text = `Player: ${player}   Computer: ${computer} 
You win! Rock beats Scissors`;
 getResult.innerHTML = text;
  } else if (getPlayerInsensitive === "paper" && computerSelection === "Rock") {
    player+= 1;
    text = `Player: ${player}   Computer: ${computer} 
You win! Paper beats Rock`;
 getResult.innerHTML = text;
  } else if (getPlayerInsensitive === "paper" && computerSelection === "Paper") {
    player+=0;
    text = `Player: ${player}   Computer: ${computer} 
It's a tie! Both are Paper`;
 getResult.innerHTML = text;
  } else if (getPlayerInsensitive === "paper" && computerSelection === "Scissors") {
    computer+=1;
    text = `Player: ${player}   Computer: ${computer} 
You lose! Scissors beats Paper`;
 getResult.innerHTML = text;
  } else if (getPlayerInsensitive === "scissors" && computerSelection === "Rock") {
    computer+=1;
    text = `Player: ${player}   Computer: ${computer} 
You lose! Rock beats Scissors`;
 getResult.innerHTML = text;
  } else if (getPlayerInsensitive === "scissors" && computerSelection === "Scissors") {
    player+=0;
    text = `Player: ${player}   Computer: ${computer} 
It's a tie! Both are Scissors`;
 getResult.innerHTML = text;
  } else if (getPlayerInsensitive === "scissors" && computerSelection === "Paper") {
    player+=1;
    text = `Player: ${player}   Computer: ${computer} 
You win! Scissors beat Paper`;
 getResult.innerHTML = text;
  } else {
    return "Check your spelling!";
  }

  if(player === 5){
    document.querySelectorAll('button.select').forEach(elem => {
      elem.disabled = true;
  });
   text = `Player: ${player}   Computer: ${computer} 
You've won ${player} games and your 
opponent only won ${computer} games. 
YOU WIN!`;
   getResult.innerHTML = text;
  } else if(computer === 5){
    document.querySelectorAll('button.select').forEach(elem => {
      elem.disabled = true;
  });
    text = `Player: ${player}   Computer: ${computer} 
You've only won ${player} games and 
your opponent won ${computer} games. 
YOU LOST!`;
   getResult.innerHTML = text;
  }
}

//event listeners
const result = document.querySelector("#result");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

let rockClick = rockBtn.addEventListener('click', () => playRound("rock", computerPlay()));
let paperClick = paperBtn.addEventListener('click', () => playRound("paper", computerPlay()));
let scissorsClick = scissorsBtn.addEventListener('click', () => playRound("scissors", computerPlay()));