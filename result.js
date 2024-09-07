// Function to show the result (winner or draw)
function showResult(winner) {
    const resultText = document.getElementById('result-text');
    if (winner == 'D') {
        resultText.textContent = "It's a Draw!";
    } else {
        resultText.textContent = "Player " + winner + " Won!";
    }
}

// Example usage: you can replace this with your actual game logic

const winner = sessionStorage.getItem("result");
showResult(winner);

function playAgain() {
    window.location.href = 'play.html';
}

function goHome(){
    window.location.href = 'index.html';
}