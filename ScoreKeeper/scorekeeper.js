const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playerOneButton = document.querySelector('#playerOne');
const playerTwoButton = document.querySelector('#playerTwo');
const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

playerOneButton.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
});

playerTwoButton.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
}