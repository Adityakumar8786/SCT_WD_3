let boxes = document.querySelectorAll(".box");
let rb = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector("#undu");
let move = 0;
let turn = "x";
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turn === "x") {
            box.innerText = "x";
            turn = "0";
        } else {
            box.innerText = "0";
            turn = "x";
        }
        box.disabled = true;
        move++;
        checkwinner();
    });
});

const resetgame = () => {
    turn = "x";
    move = 0;
    enableboxes();
    msgcontainer.style.visibility = "hidden";
    draw.style.visibility = "hidden";
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.style.visibility = "visible";
    disableboxes();
};

const showdraw = () => {
    draw.innerText = "Match was draw";
    draw.style.visibility = "visible";
};

const checkwinner = () => {
    let winnerfound = false;
    for (let posn of winpattern) {
        let pos1 = boxes[posn[0]].innerText;
        let pos2 = boxes[posn[1]].innerText;
        let pos3 = boxes[posn[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
                winnerfound = true;
                break;
            }
        }
    }
    if (!winnerfound && move === 9) {
        showdraw();
    }
};

rb.addEventListener("click", resetgame);