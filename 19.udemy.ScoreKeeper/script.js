//its look little bit ugly but I just had wanted to get elements in different ways
var player1Button = document.querySelector('#player1Button');
var player2Button = document.getElementById('player2Button');
var resetButton = document.querySelector('#resetButton');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var winningScoreDisplay = document.querySelector('#winningScoreDisplay');
var numInput = document.querySelector('input[type="number"]');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

player1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add('winner');
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

player2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add('winner');
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', function () {
    reset();
});
function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    gameOver = false;
}

numInput.addEventListener('change', function () {
    winningScoreDisplay.textContent = this.value;
    /*winningScore = +this.value;*/
    winningScore = Number(this.value);
    reset();
});