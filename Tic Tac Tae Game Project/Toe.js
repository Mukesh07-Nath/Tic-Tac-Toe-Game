let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let Msgcontainer = document.querySelector(".msg-container");

let turnO = true; // isme yeah mtlb hai ki agr agr playerX ki turn hai toh X print hoke ayega and agr player Y ki turn hai toh Y print hoke ayega//

const winPatterns = [     //yeah sab ek 2d array hai jo array ki  ander or ek array hota hai ose khetha hai 2d array//
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    Msgcontainer.classList.add("hide");   //jo apna msg container hia osko dekhana ke liye //
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        box.style.color = "red";
        if (turnO === true) { //player O
            box.innerText = "O";
            turnO = false;
        } else { //PLayer x
            box.innerText = "X";
            turnO = true;
            box.style.color = "blue";

        }
        box.disabled = true;  // jo double click karne se X and O ki value change ho rahi hai woh ab change nhi hogi//

        checkWinner();

    });
});
const disableBoxes = () => {         // btn ko disable karne ke kilye//
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {         //jab box reset hoga tho sabhi boxes phir kaam kare//
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratualations,Winner is ${winner}`;
    Msgcontainer.classList.remove("hide");        // yeah pe jo another class hai osko tab dekhaya ga jab koi winner jitega  tab//
    disableBoxes();                             // ye pe call karna padega//
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);                       // yese karne se pura winPatterns check hue ha ek ek karke 
        // console.log(boxes[pattern[0]] .innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);   //ise pur index ki individual index values ayegai  and pura har box ki places highlight hogi //
        let pos1val = boxes[pattern[0]].innerText;  //this is the position value upper one^//
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                
            }
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);
