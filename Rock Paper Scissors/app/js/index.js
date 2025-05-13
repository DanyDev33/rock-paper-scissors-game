const human = document.getElementById("human-game")
const computer = document.getElementById("computer-game")
const startBtn = document.getElementById("start-btn")
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const message = document.getElementById("message")
const images = ["img/rock.jpeg", "img/paper.jpeg", "img/scissors.jpeg"]
const choices = ["rock", "paper", "scissors"]
let playerChoice = ''
let computerChoice = ''

let playerScore = 0
let computerScore = 0


const disableButtons = () => {
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
}

const enableButtons = () => {
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false
}

disableButtons()

// This function ensures that the computer's choice is random.
const computerChoiceFunction = () => {
    let randomPick = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randomPick]
    computer.style.cssText = `
    background-image: url(${images[randomPick]});
    background-size: cover
    `
}

// This function is called to determine the winner after the choices picked by the human and computer are compared.
const determineWinner = () => {
    if (playerScore < 3 && computerScore < 3) {
        if (playerChoice === computerChoice) {
            message.textContent = `It's a draw. Score: Player ${playerScore} - Computer: ${computerScore}`
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors")
            || (playerChoice === "paper" && computerChoice === "rock")
            || (playerChoice === "scissors" && computerChoice === "paper")) {
            playerScore++
            message.textContent = `You win this round. Score: Player ${playerScore} - Computer: ${computerScore}`
        } else {
            computerScore++
            message.textContent = `Computer wins this round. Score: Player ${playerScore} - Computer: ${computerScore}`
        }
    }
    startBtn.disabled = true
    winner()

}

const winner = () => {
    if (playerScore === 3) {
        message.textContent = `You won the game 🎉! Player: ${playerScore} - Computer: ${computerScore}  `
        startBtn.disabled = false
        disableButtons()
    } else if (computerScore === 3) {
        message.textContent = `You lost the game 😭! Player: ${playerScore} - Computer: ${computerScore} `
        startBtn.disabled = false
        disableButtons()
    }
}


// This event listener starts the game when clicked.
startBtn.addEventListener("click", function () {
    playerChoice = 0
    computerChoice = 0
    playerScore = 0
    computerScore = 0
    message.textContent = "Pick between rock, paper, or scissors!"
    human.style.cssText = "none"
    computer.style.cssText = "none"
    startBtn.disabled = true
    enableButtons()
})




// Rock button event listener, it is compared to the computer's choice when clicked and then the winner is determined.
rockBtn.addEventListener("click", function () {
    playerChoice = "rock"
    human.style.cssText = `
    background-image: url('img/rock.jpeg');
    background-size: cover
    `
    computerChoiceFunction()
    determineWinner()
})

// Paper button event listener, it is compared to the computer's choice when clicked and then the winner is determined.
paperBtn.addEventListener("click", function () {
    playerChoice = "paper"
    human.style.cssText = `
    background-image: url('img/paper.jpeg');
    background-size: cover
    `
    computerChoiceFunction()
    determineWinner()
})

// Scissors button event listener, it is compared to the computer's choice when clicked and then the winner is determined.
scissorsBtn.addEventListener("click", function () {
    playerChoice = "scissors"
    human.style.cssText = `
    background-image: url('img/scissors.jpeg');
    background-size: cover
    `
    computerChoiceFunction()
    determineWinner()
})













