let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = x => x = Math.floor(Math.random()*9)
const compareGuesses = (humanGuesses, computerGuesses, secretTarget) => {
  //let secretTarget = generateTarget()
  let humanCore = Math.abs(humanGuesses - secretTarget)
  let computerCore = Math.abs(computerGuesses - secretTarget)
  if (humanCore <= computerCore) {
    return true
} else {
    return false
}
}
const updateScore = whoWins => {
  if (whoWins === 'human') {
    humanScore += 1
  } else if (whoWins === 'computer') {
    computerScore += 1
  }
}
const advanceRound = () => currentRoundNumber += 1
