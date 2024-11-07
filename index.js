let boxes=document.querySelectorAll(".button");
let resetbtn=document.querySelector("#reset-button");
let newGameBtn=document.querySelector(".button1");
let mssg=document.querySelector("#text");
let mssgContainer=document.querySelector(".mssg");

let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();


    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }

}

const showWinner=(winner)=>{
    mssg.innerText=`Congratulation ${winner} is our winner`;
    mssgContainer.classList.remove("hide");
    disableboxes();

}

const checkWinner=()=>{
    for(let patterns of winPatterns){
        let posVal1=boxes[patterns[0]].innerText;
        let posVal2=boxes[patterns[1]].innerText;
        let posVal3=boxes[patterns[2]].innerText;
        if(posVal1 != ""&&posVal2 != ""&&posVal3 != ""){
            if(posVal1===posVal2&&posVal2===posVal3){
                showWinner(posVal1);
                return;

            }
        }

    }
}

const resetGame=()=>{
    turnO=true;
    enableboxes();
    mssgContainer.classList.add("hide");


}
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

