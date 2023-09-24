var panelBottom = document.querySelector("#pbtm");
var hitvalue = document.querySelector("#hitval");
var randomNumber = Math.random() * 10;
var timer = 60;

document.querySelector("#start").addEventListener("click",startGame)

function startGame(){
    timer = 60;
    document.querySelector("#scoreval").textContent = 0;
    refreshHit();
    addBubble();
    runTimer();
}

document.querySelector("#pbtm").addEventListener("click",function(detail){
    var target = Number(detail.target.textContent);
    console.log(target)
    if(target == Number(hitvalue.textContent)){
        increaseScore();
        refreshHit();
        addBubble();
    }else{
        decreaseScore();
        refreshHit();
        addBubble();
    }
})

function addBubble() {
    var clutter = ` `;
    for (let i = 1; i <= 125 + 8; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="buble">${randomNumber}</div>`
    }
    panelBottom.innerHTML = clutter;
}

function runTimer(){
    var timerval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerval);
            var score = document.querySelector("#scoreval").textContent
            panelBottom.innerHTML = `<div style="text-align:center;"><h1>Game Over</h1><h2>Score = ${score}</h2><div class="btn"><button id="restart"style="text-transform:none">Try again</button></div></div>`;
            document.querySelector("#restart").addEventListener("click",startGame)
        }
    },1000);
}

function refreshHit(){
    randomNumber = Math.floor(Math.random() * 10);
    hitvalue.textContent = randomNumber;
}

function increaseScore(){
    var score = Number(document.querySelector("#scoreval").textContent);
    document.querySelector("#scoreval").textContent = score+10;
}

function decreaseScore(){
    var score = Number(document.querySelector("#scoreval").textContent);
    document.querySelector("#scoreval").textContent = score-5;
}
