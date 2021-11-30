var playerScore = 0;
var computerScore = 0;

function removeButtonListeners(){
    document.getElementById("rock").removeEventListener("click", buttonClickHandler);
    document.getElementById("paper").removeEventListener("click", buttonClickHandler);
    document.getElementById("scissors").removeEventListener("click", buttonClickHandler);
}

// playerScore or computerScore for target
function updateScoreDisplay(){

    document.querySelector(".playerScore").textContent = "Your Score: "+ playerScore;
    document.querySelector(".computerScore").textContent = "Computer Score: " + computerScore;
}

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
       playerScore++;
       return "You win, " + playerSelection + " beats " + computerSelection;
   } else if (comparisons[playerSelection].weakTo === computerSelection){
       computerScore++;
       return "You lose, " + computerSelection + " beats " + playerSelection;

   } else {
       return "Tie, " + playerSelection + " and " + computerSelection;
   }
}

function buttonClickHandler(e){
    let user = e.srcElement.textContent; // srcElement.x allows x to be any html attribute
    user = user.toLowerCase();
    computer = computerPlay();
    let wonString = playRound(user, computer);
    updateScoreDisplay();

    if (playerScore == 5){
        document.querySelector(".scoreText").textContent = "You won with a score of " + playerScore + " to " + computerScore + "!";
        
    } else if (computerScore == 5){
        document.querySelector(".scoreText").textContent = "Computer won with a score of " + computerScore + " to " + playerScore + "!";
    } else {
        document.querySelector(".scoreText").textContent = wonString;
    }

}


function game(){
    updateScoreDisplay();
    document.getElementById("rock").addEventListener("click", buttonClickHandler);
    document.getElementById("paper").addEventListener("click", buttonClickHandler);
    document.getElementById("scissors").addEventListener("click", buttonClickHandler);
}

game();




