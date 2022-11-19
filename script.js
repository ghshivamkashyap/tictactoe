console.log("hello pilu");
let music = new Audio("click.mp3");
let turnaudio= new Audio("click.mp3");
let resetaudio = new Audio("rclick.mp3");
let gameoverauido = new Audio("gameover.mp3");
let turn = "x";
let gameover =false;

//function to change the turn

const changeturn =()=>{
    return turn === "x"?"0": "x"
}

// functio  to check win

const checkwin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

wins.forEach(e => {
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== ''){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        gameover=true
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="250px"
    }
});
}

//game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{

    
    if(boxtext.innerText === ''){
        boxtext.innerText=turn;
        turn = changeturn();
        turnaudio.play();
        checkwin();

        if(!gameover){
            document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
        }
        
    }
})
})

//reset button code to reset all the boxes when clicked

reset.addEventListener('click' , ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });

    turn="x";
    gameover=false;
    document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
    resetaudio.play();
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="0px"

})