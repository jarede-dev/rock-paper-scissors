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

console.log(computerPlay());
