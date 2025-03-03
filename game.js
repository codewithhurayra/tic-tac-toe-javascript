let gameBtn = document.querySelectorAll('.gameBtns');
let CheckResult = document.querySelector('.msg');
let turn = true;

let howwin =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


gameBtn.forEach((gameBtns) => {
    gameBtns.addEventListener ('click', ()=>{
        if(turn){
            gameBtns.innerText = 'X';
            console.log('Turn of X');
            
            turn = false;
        }else{
            gameBtns.innerText = "O"
            console.log('Turn of O');
            turn = true
        }
        gameBtns.disabled = true;
        YouGame()
    })
});

const winnerText = (winner) =>{
    CheckResult.innerText = `Congratulation You win this game ${winner}`
}

const YouGame = () =>{
for(let pattren of howwin){
    let postion1value = gameBtn[pattren[0]].innerText;
    let postion2value = gameBtn[pattren[1]].innerText;
    let postion3value = gameBtn[pattren[2]].innerText;

    if(postion1value != '' && postion2value != '' && postion3value != ''){
        if(postion1value === postion2value && postion2value === postion3value){
            console.log(`You winnner of this game ${postion1value}`);
            winnerText(postion1value);
        }
    }
}
}