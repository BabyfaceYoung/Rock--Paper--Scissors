const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'CROSS BLADES!!!'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "DRAW"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You Win"
    }
    if (computerChoice === 'rock' && userChoice === 'CROSS BLADES!!!') {
        result = "Computer Wins"
    }
    if (computerChoice === 'paper' && userChoice === 'CROSS BLADES!!!') {
        result = "You Win"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "Computer Wins"
    }
    if (computerChoice === 'CROSS BLADES!!!' && userChoice === 'rock') {
        result = "You Win"
    }
    if (computerChoice === 'CROSS BLADES!!!' && userChoice === 'paper') {
        result = "Computer Wins"
    }
    resultDisplay.innerHTML = result
}