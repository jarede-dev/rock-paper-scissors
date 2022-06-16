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

// playRound function will play a game of rock, paper, scissors and returns the result
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

// const playerSelection = "sciSSors";
// const computerSelection = computerPlay();
// console.log(game(playerSelection, computerSelection));

// game function returns the winner after five rounds
function game(){
    for(let i = 0; i < 5; i++){
        if(i < 5){
            let getSelect = prompt("Choose Rock, Paper, or Scissors", "");
            let getWinOrLose = alert(playRound(getSelect, computerPlay()));
                if( i >= 5 ){
                    alert("You played 5 games already");
                }
        }
    }
}

console.log(game());
