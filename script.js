function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerchoice() {
    let a = getRandomInt(3);
    if (a == 0) {
        return "rock";
    }
    else if (a == 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

function getHumanchoice() {
    let b = prompt("Enter your choice:");
    return b;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice,humanScore,computerScore) {
    let humchoice = humanChoice.toLowerCase();
    if (humchoice == "rock" && computerChoice == "scissors") {
        console.log("You win!Rock beats scissors");
        humanScore++;
        console.log(`Human: ${humanScore} `, ` computer: ${computerScore}`);
    }
    else if (humchoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!Rock beats scissors");
        computerScore++;
        console.log(`Human: ${humanScore} `, ` computer: ${computerScore}`);
    }
    else if (humchoice == "scissors" && computerChoice == "paper") {
        console.log("You win!scissors beats paper");
        humanScore++;
        console.log(`Human: ${humanScore} `, ` computer: ${computerScore}`);
    }
    else if (humchoice == "paper" && computerChoice == "scissors") {
        console.log("You lose!scissors beats paper");
        computerScore++;
        console.log(`Human: ${humanScore} `, ` computer: ${computerScore}`);
    }
    else if (humchoice == "rock" && computerChoice == "paper") {
        console.log("You lose!paper beats rock");
        computerScore++;
        console.log(`Human: ${humanScore} `, ` computer: ${computerScore}`);
    }
    else if (humchoice == "paper" && computerChoice == "rock") {
        console.log("You win!paper beats rock");
        humanScore++;
        console.log(`Human: ${humanScore} `, ` computer: ${computerScore}`);
    }
    else {
        console.log("same!noone wins")
        console.log(`Human: ${humanScore} `, ` computer: ${computerScore}`);
    }
}

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanchoice();
    const computerSelection = getComputerchoice();

    playRound(humanSelection, computerSelection,humanScore,computerScore);
}