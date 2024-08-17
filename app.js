let boxes = document.querySelectorAll(".box");
let resetBTN = document.querySelector(".reset-Btn");
let newGameBtn = document.querySelector(".newGame");
let messageContainer = document.querySelector('.winningMsg');
let message = document.querySelector('.msg');

let turn0 = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Click");
        // box.innerText = "x";
        if(turn0){
            box.innerText = "o";
            turn0 = false;
         } else{
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled= true;
        checkWinner();
        });
});

    const disableBoxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }

    }

    const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }

    }


    const showWinner = (winner) => {
        message.innerText = `Winner is ${winner}`;
        messageContainer.classList.remove("hide");
        disableBoxes();
    };

    const checkWinner = () =>{
        for (let pattern of winpattern){
         
        let postion1VALUE = boxes[pattern[0]].innerText;
        let postion2VALUE =  boxes[pattern[1]].innerText;
        let postion3VALUE = boxes[pattern[2]].innerText;

        if(postion1VALUE != "" && postion2VALUE != "" && postion3VALUE != ""){
            if(postion1VALUE === postion2VALUE && postion2VALUE === postion3VALUE){
                console.log(`${postion1VALUE} is Winner`);
                showWinner(postion1VALUE);
            }
        }
        }
    };

    const resetGame =() => {
        turn0 =true;
        enableBoxes();
        messageContainer.classList.add("hide");

    }

    newGameBtn.addEventListener("click",resetGame);
    resetBTN.addEventListener("click",resetGame);

    // Implement the logic for Draw Condition you have to track 
    // when game has no winner
    // in this case print diffrent message in the <p>

    // Hint : use a new variable CountQueuingStrategy,which counts button useLinkClickHandler.Condition
    // when the total coiunt reaches 9 but has no winner game has no winners,
    // that means the game was a Draw.

    // Q1 : 
    // change the color of O and X