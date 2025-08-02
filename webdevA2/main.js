let Yposition=0;
let Xposition=0;

let junkY = 0;
let junkX = 0;

let box = document.getElementById("box");

let junkBox = document.getElementById("junkBox");

const scorebox = document.getElementById("scoreBox");
var score = 0;

function movejunkDown(){
    junkY+=20;

    junkBox.style.top = junkY + "px";

    if(junkY>=500)
    {
        junkY = 50;
        junkX = Math.floor(Math.random() * (window.innerWidth - 200));
        junkBox.style.left = junkX + "px";
    }
}


function moveDown(){
    Yposition+=20;

    box.style.top = Yposition + "px";

    if(Yposition>=400)
    {
        Yposition = 50;
        Xposition = Math.floor(Math.random() * (window.innerWidth - 200));
        box.style.left = Xposition + "px";
    }
}



function broccoliCatch()
{
    score++;
    scorebox.innerHTML = "Score: " + score;
}
function junkCatch()
{
    score--;
    scorebox.innerHTML = "Score: " + score;
}
box.addEventListener("click",broccoliCatch);
junkBox.addEventListener("click", junkCatch);



const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
endBtn.disabled=true;

startBtn.addEventListener("click", function(){
    score=0;
    scorebox.innerHTML = "Score: " + score;
    endBtn.disabled=false;
    startBtn.disabled=true;
    moveBroccoli = setInterval(moveDown, 100);
    moveJunkFood = setInterval(movejunkDown, 100);
})

endBtn.addEventListener("click", function(){
    alert("Final score is: "+ score);
    startBtn.disabled=false;
    endBtn.disabled=true;
    score=0;
    scorebox.innerHTML = "Score: " + score;
    clearInterval(moveBroccoli);
    clearInterval(moveJunkFood);
})




