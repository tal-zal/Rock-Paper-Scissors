function computerPlay(){
    var options = ["rock", "paper", "scissors"];
    var randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

function playRound(playerSelection, computerSelection){
   const comparisons = {
       rock: {weakTo: "paper", strongTo: "scissors"},
       paper: {weakTo: "scissors", strongTo: "rock"}, 
       scissors: {weakTo: "rock", strongTo: "paper"} 
   }

   if (comparisons[playerSelection].strongTo === computerSelection){
       return "You win, " + playerSelection + " beats " + computerSelection;
   } else if (comparisons[playerSelection].weakTo === computerSelection){
       return "You lose, " + computerSelection + " beats " + playerSelection;
   } else {
       return "Tie, " + playerSelection + " and " + computerSelection;
   }
}

function game(){

    var userScore = 0;
    var computerScore = 0;

    for (let i = 0; i < 5; i++){
        let user = window.prompt("Rock, paper, or scissors?");
        user = user.toLowerCase();
        computer = computerPlay();
        let wonString = playRound(user, computer);
        console.log(wonString);

        if (wonString.substring(0, 7) == "You win"){
            userScore++;
        } else if (wonString.substring(0,8) == "You lose"){
            computerScore++;
        }
    }
    if (userScore > computerScore){
        console.log("User wins with a total score of " + userScore + " to " + computerScore);
    } else if (computerScore > userScore){
        console.log("Computer wins with a total score of " + computerScore + " to " + userScore);
    } else {
        console.log("It's an overall tie with a score of " + computerScore + " to " + userScore);
    }
}

game();




