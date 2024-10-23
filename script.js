let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector(".new-game");
let turnX = true;
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
            console.log("Player 2's turn");
        }
        else {
            box.innerText = "O";
            turnX = true;
            console.log("Player 1's turn");
        }
        box.disabled = true;

        checkWinner();
    })
})

boxDisabled = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

boxEnabled = () => {
    for (box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}

showWinner = (player) => {
    console.log("------------------\n ", player, "wins!\n------------------\n");
    msgContainer.classList.remove("hide");
    msg.innerText = `${player} wins!`;
}

checkWinner = () => {
    for (pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        let player = "";
        if (pos1 == "X") player = "Player 1";
        if (pos1 == "O") player = "Player 2";

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(player);
                boxDisabled();
            }
        }
    }
    let count = 0;
    for (box of boxes) {
        if(!(box.innerText === '')) {
            count++;
        }
    }
    if (count === 9) {
        msgContainer.classList.remove("hide");
        msg.innerText = "Draw";
        boxDisabled();
    }
}

const resetGame = () => {
    console.log("------------------\n\tNew Game!\n------------------")
    turnX = true;
    boxEnabled();
    msgContainer.classList.add("hide");
}


resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);