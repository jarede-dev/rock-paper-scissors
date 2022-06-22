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

  // playRound function will play a game of rock, paper, scissors and returns the result
  function playRound(playerSelection, computerSelection) {
    let getPlayerInsensitive = playerSelection.toLowerCase();
    var winCounter = 0;
    if (getPlayerInsensitive === "rock" && computerSelection === "Rock") {
      winCounter = winCounter;
      return "It's a tie, both are Rock";
    } else if (getPlayerInsensitive === "rock" && computerSelection === "Paper") {
      winCounter = winCounter--;
      return "You Lose! Paper beats Rock";
    } else if (getPlayerInsensitive === "rock" && computerSelection === "Scissors") {
      winCounter = winCounter++;
      return "You win! Rock beats Scissors";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Rock") {
      winCounter = winCounter++;
      return "You win! Paper beats Rock";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Paper") {
      winCounter = winCounter;
      return "It's a tie! Both are Paper";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Scissors") {
      winCounter = winCounter--;
      return "You lose! Scissors beats Paper";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Rock") {
      winCounter = winCounter--;
      return "You lose! Rock beats Scissors";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Scissors") {
      winCounter = winCounter;
      return "It's a tie! Both are Scissors";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Paper") {
      winCounter = winCounter++;
      return "You win! Scissors beat Paper";
    } else {
      return "Check your spelling!";
    }
  }

  // game function returns the winner after five rounds
  function game() {
    for (let i = 0; i < 5; i++) {

      let getSelect = prompt("Choose Rock, Paper, or Scissors", "");
      if (getSelect === null || getSelect === "") {
        alert("You clicked Cancel!");
      }
      let getWinOrLose = alert(playRound(getSelect, computerPlay()));


      //outputs the winner of 5 games

      if (i === 4) {
        alert("You've played 5 games");
        if (winCounter >= 3) {
          return alert(`You've won ${winCounter} out of 5 games. You win!`);
        } else if (winCounter === 2.5) {
          return alert(`You've won 2.5 out of 5 games. It's a tie!`);
        } else if (winCounter < 2.5) {
          return alert(`You've won ${winCounter} out of 5 games. You lost!`);
        }
      }
    }

  }

  console.log(game());
