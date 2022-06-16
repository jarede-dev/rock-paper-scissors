// computerPlay function  will randomly returns rock, paper, or scissors
function computerPlay(){
    let getRandom = Math.floor(Math.random() * 10);
    if(getRandom <= 3){
        return "Rock";
    } else if(getRandom <= 6){
        return "Paper";
    } else{
        return "Scissors";
    }
}

// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection
// and computerSelection - and then return a string that declares the
// winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter
// case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function playRound(playerSelection, computerSelection){
    let getPlayerInsensitive = playerSelection.toLowerCase();
    if(getPlayerInsensitive === "rock" && computerSelection === "Rock"){
        return "It's a tie, both are Rock";
    } else if(getPlayerInsensitive === "rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock";
    } else if(getPlayerInsensitive === "rock" && computerSelection === "Scissors"){
        return "You win! Rock beats Scissors";
    } else if(getPlayerInsensitive === "paper" && computerSelection === "Rock"){
        return "You win! Paper beats Rock";
    } else if(getPlayerInsensitive === "paper" && computerSelection === "Paper"){
        return "It's a tie! Both are Paper";
    } else if(getPlayerInsensitive === "paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper";
    } else if(getPlayerInsensitive === "scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors";
    } else if(getPlayerInsensitive === "scissors" && computerSelection === "Scissors"){
        return "It's a tie! Both are Scissors";
    } else if(getPlayerInsensitive === "scissors" && computerSelection === "Paper"){
        return "You win! Scissors beat Paper";
    }
}

 const playerSelection = "sciSSors";
 const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
