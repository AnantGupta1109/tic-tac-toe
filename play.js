var player = 0
var board = ["","","","","","","","",""]


function select(box,num){
    if(document.getElementById(box).src != ""){
        alert("Hey, you cannot make move on already filled box!");
        return
    }
    if(player == 1){
        document.getElementById(box).src = "img/x.png"
        board[Number(num)-1] = "x"
        player = 0

    }else {
        document.getElementById(box).src = "img/o.png"
        board[Number(num)-1] = "o"
        player = 1
    }
    checkWin()
}

function checkWin() {
    var winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Check if any of the winPatterns match the board
    for (var i = 0; i < winPatterns.length; i++) {
        var [a, b, c] = winPatterns[i];
        if (board[a] === board[b] && board[a] === board[c] && board[a]) {
            result(player == 1 ? 'O' : 'X')
            return;
        }
    }

    // Check for a draw
    if (board[0] != "" && board[1] != "" && board[2] != "" && board[3] != "" && board[4] != "" && board[5] != "" && board[6] != "" && board[7] != "" && board[8] != "" ) {
        result('D')
    }
}

function result(res){

    sessionStorage.setItem("result",res);
    window.location.href = "result.html"

}