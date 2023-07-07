let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Creating a function that returns randomly the Rock, Paper and Scissors
//This function will be used to make a computer play
function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToword(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
//Function that generate a winning between a player and a computer
//The function determines who wins between the computer and the player.
function win(playerSelection, computerSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToword(playerSelection)}${smallUserWord} 
                            beats ${convertToword(computerSelection)}${smallComputerWord}. You win!"`;
    document.getElementById(playerSelection).classList.add('green-glow');
}
//Function that generate a loosing between a player and a computer
//The function determines who loses between the computer and the player.
function lose(playerSelection, computerSelection) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToword(playerSelection)}${smallUserWord} 
                            loses to ${convertToword(computerSelection)}${smallComputerWord}. You lost!"`;
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToword(userChoice)}${smallUserWord} 
                            equals ${convertToword(computerChoice)}${smallComputerWord}. It's a draw"`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs": 
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click',() => game("r"));

    paper_div.addEventListener('click',() => game("p"));

    scissors_div.addEventListener('click',() => game("s"));
}

main();