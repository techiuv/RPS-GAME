// DOM element selectors
const playBtn = document.getElementById('play-btn');
const userArea = document.querySelector('.user');
const compArea = document.querySelector('.computer');
const userOptions = document.querySelectorAll('.box');
const alertArea = document.querySelector('.alert-msg-main');
const close = document.getElementById('close');
const playAgainBtn = document.getElementById('play-again');
let winLoseSvg = document.getElementById('win-lose-svg');
let winLosePara = document.getElementById('win-lose-para');
let move1 = document.getElementById('move1');
let move2 = document.getElementById('move2');
let move3 = document.getElementById('move3');
let compTalk = document.getElementById('computer-talk');

// Function to handle player moves and compare with computer's move
function playGame(playerMove) {
    let moveArr = ['rock', 'paper', 'scissor'];
    // Generate a random move for the computer
    let compMove = moveArr[Math.floor(Math.random() * moveArr.length)];

    // Compare player's move with computer's move and determine the result
    if (playerMove === compMove) {
        draw(); // If it's a draw
        showCompMove(compMove); // Display computer's move
    } else if (
        (playerMove === 'rock' && compMove === 'scissor') ||
        (playerMove === 'paper' && compMove === 'rock') ||
        (playerMove === 'scissor' && compMove === 'paper')
    ) {
        win(); // If the player wins
        showCompMove(compMove); // Display computer's move
    } else {
        lose(); // If the player loses
        showCompMove(compMove); // Display computer's move
    }
}

// Function to show the computer's move
function showCompMove(compMove) {
    compTalk.textContent = `I choose ${compMove}`;
}

// Event listeners for each move
move1.addEventListener('click', () => {
    // When move1 is clicked, call playGame() function with 'rock' as player's move
    playGame('rock');    
});

move2.addEventListener('click', () => {
    // When move2 is clicked, call playGame() function with 'paper' as player's move
    playGame('paper');    
});

move3.addEventListener('click', () => {
    // When move3 is clicked, call playGame() function with 'scissor' as player's move
    playGame('scissor');    
});

// Event listener for play button
playBtn.addEventListener('click', startGame);

// Function to start the game
function startGame() {
    playBtn.style.display = 'none'; // Hide the play button
    compTalk.textContent = 'I am choosing...'; // Display computer's message
    userArea.style.display = 'flex'; // Display the user area
}

// Function to handle winning scenario
function win() {
    alertArea.style.display = 'flex'; // Show the alert message
    winLosePara.textContent = 'You Won!'; // Display the message
    winLosePara.style.color = '#0eaa33'; // Set color to green
    winLoseSvg.innerHTML = '<img src="win-icon.jpg">'
}

// Function to handle losing scenario
function lose() {
    alertArea.style.display = 'flex'; // Show the alert message
    winLosePara.textContent = 'You Lose!'; // Display the message
    winLosePara.style.color = 'red'; // Set color to red
    winLoseSvg.innerHTML = '<img src="lose.jpg">'
}

// Function to handle draw scenario
function draw() {
    alertArea.style.display = 'flex'; // Show the alert message
    winLosePara.textContent = 'It\'s Draw!'; // Display the message
    winLosePara.style.color = '#bbc000'; // Set color to yellow
    winLoseSvg.innerHTML = '<img src="draw.jpg">'
}

// Event listener to close the alert message
close.addEventListener('click', () => {
    alertArea.style.display = 'none'; // Hide the alert message
});

// Event listener to play again
playAgainBtn.addEventListener('click', () => {
    startGame(); // Start the game
    alertArea.style.display = 'none'; // Hide the alert message
    compTalk.textContent = 'I am choosing...'; // Display computer's message
});
