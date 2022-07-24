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

// declaring winCounter outside of playRound function to make it global scoped
let winCounter = 0;

// playRound function will play a game of rock, paper, scissors and returns the result
function playRound(playerSelection, computerSelection) {
  let getPlayerInsensitive = playerSelection.toLowerCase();

  if (getPlayerInsensitive === "rock" && computerSelection === "Rock") {
    winCounter += 0.5;
    return "It's a tie, both are Rock";
  } else if (getPlayerInsensitive === "rock" && computerSelection === "Paper") {
    winCounter = winCounter;
    return "You Lose! Paper beats Rock";
  } else if (getPlayerInsensitive === "rock" && computerSelection === "Scissors") {
    winCounter += 1;
    return "You win! Rock beats Scissors";
  } else if (getPlayerInsensitive === "paper" && computerSelection === "Rock") {
    winCounter += 1;
    return "You win! Paper beats Rock";
  } else if (getPlayerInsensitive === "paper" && computerSelection === "Paper") {
    winCounter += 0.5;
    return "It's a tie! Both are Paper";
  } else if (getPlayerInsensitive === "paper" && computerSelection === "Scissors") {
    winCounter = winCounter;
    return "You lose! Scissors beats Paper";
  } else if (getPlayerInsensitive === "scissors" && computerSelection === "Rock") {
    winCounter = winCounter;
    return "You lose! Rock beats Scissors";
  } else if (getPlayerInsensitive === "scissors" && computerSelection === "Scissors") {
    winCounter += 0.5;
    return "It's a tie! Both are Scissors";
  } else if (getPlayerInsensitive === "scissors" && computerSelection === "Paper") {
    winCounter += 1;
    return "You win! Scissors beat Paper";
  } else {
    return "Check your spelling!";
  }

}

// game function returns the winner after five rounds
function game() {
  for (let i = 0; i < 5; i++) {
  let playerSelection = "rock";
    let getSelect = playerSelection;
    if (getSelect === null || getSelect === "") {
      console.log("You clicked Cancel!");
    }
    const result = (playRound(getSelect, computerPlay()));
    //alert(result)
    if (i < 5) {
      console.log(result);
    }

    //outputs the winner of 5 games

    if (i === 4) {
      console.log("You've played 5 games");
      if (winCounter >= 3) {
        console.log(`You've won ${winCounter} out of 5 games. You win!`);
        return `You've won ${winCounter} out of 5 games. You win!`;
      } else if (winCounter === 2.5) {
        console.log(`You've won 2.5 out of 5 games. It's a tie!`);
        return `You've won 2.5 out of 5 games. It's a tie!`;
      } else if (winCounter < 2.5) {
        console.log(`You've won ${winCounter} out of 5 games. You lost!`);
        return `You've won ${winCounter} out of 5 games. You lost!`;
      }

    }
  }

}

console.log(game());

// create buttons

let result = document.createElement("div");

let rock = document.createElement("button");
let paper = document.createElement("button");
let scissors = document.createElement("button");

result.setAttribute("id", "result");
rock.setAttribute("id", "rock");
paper.setAttribute("id", "paper");
scissors.setAttribute("id", "scissors");
