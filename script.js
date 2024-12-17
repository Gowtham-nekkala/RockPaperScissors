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

const e = getComputerchoice();
console.log(e)

function getHumanchoice(X) {
    console.log(X)
    playRound(X, e)
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    var humchoice = humanChoice.toLowerCase();
    if (humchoice == "rock" && computerChoice == "scissors") {
        document.getElementById("output").innerHTML = "You win!Rock beats scissors";
        humanScore++;
        document.getElementById("score").innerHTML = `Human: ${humanScore} ,  computer: ${computerScore}`;
    }

    else if (humchoice == "scissors" && computerChoice == "rock") {
        document.getElementById("output").innerHTML = "You lose!Rock beats scissors";
        computerScore++;
        document.getElementById("score").innerHTML = `Human: ${humanScore} ,  computer: ${computerScore}`;
    }

    else if (humchoice == "scissors" && computerChoice == "paper") {
        document.getElementById("output").innerHTML = "You win!scissors beats paper";
        humanScore++;
        document.getElementById("score").innerHTML = `Human: ${humanScore} ,  computer: ${computerScore}`;
    }

    else if (humchoice == "paper" && computerChoice == "scissors") {
        document.getElementById("output").innerHTML = "You lose!scissors beats paper";
        computerScore++;
        document.getElementById("score").innerHTML = `Human: ${humanScore} ,  computer: ${computerScore}`;
    }

    else if (humchoice == "rock" && computerChoice == "paper") {
        document.getElementById("output").innerHTML = "You lose!paper beats rock";
        computerScore++;
        document.getElementById("score").innerHTML = `Human: ${humanScore} ,  computer: ${computerScore}`;
    }

    else if (humchoice == "paper" && computerChoice == "rock") {
        document.getElementById("output").innerHTML = "You win!paper beats rock";
        humanScore++;
        document.getElementById("score").innerHTML = `Human: ${humanScore} ,  computer: ${computerScore}`;
    }

    else {
        document.getElementById("output").innerHTML = "Both are same, No one wins!!!";
        document.getElementById("score").innerHTML = `Human: ${humanScore} ,  computer: ${computerScore}`;
    }
}

function stop() {
    location.reload();
}