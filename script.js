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
    } else{
        return "Check your spelling!";
    }
}

// game function returns the winner after five rounds
function game(){
 for( i = 0; i < 5; i++){
    let getWinOrLose = playRound(getSelect, computerPlay());
    let counter = 0;
    if(getWinOrLose.includes("You win")){
        return counter = i++;
    } else if(getWinOrLose.includes("You lose")){
        return counter = i--;
    } else if(getWinOrLose.includes("tie")){
        return counter += 0.5;
    } else if( i === 4 ){
        if( counter > 2.5 ){
            alert( `You've won ${counter} out of 5 games, You Win!`);
        } else{
            alert(`You've only won ${counter} out of 5 games, You Lose!`);
        }
    }
 }
}

console.log(game());

// previous game function

// for(let i = 0; i < 5; i++){

//     let getSelect = prompt("Choose Rock, Paper, or Scissors", "");
//     if(getSelect === null || getSelect === ""){
//         alert("You clicked Cancel!");
//     }
//     let getWinOrLose = alert(playRound(getSelect, computerPlay()));
//     let winCounter = 0;
//         if( i === 4 ){
//              alert("You've played 5 games");
//               return getResult;
//         }
//         const getResult = () => {if( i === 4 ){
//             if (getWinOrLose.includes("You win")){
//                 winCounter = winCounter+ 1;

//            } else if(getWinOrLose.includes("You lose")){
//                winCounter = winCounter - 1;

//            } else if(getWinOrLose.includes("tie")){

//            }
//            if(winCounter >= 1){
//                alert(`You've won ${winCounter} out of 5 games. You win!`);
//            } else if(winCounter < 1){
//                alert(`You've won ${winCounter} out of 5 games. You lost!`);
//            }
//         }}
// }
