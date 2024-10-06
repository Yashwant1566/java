let gameseq=[];
let userseq=[];

let btns=["red","yellow","green","purple"];
let started=false;
level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(e){
   if(started==false){
    console.log("game started");
    started=true;
    levelup();
   }
});
function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function () {
    btn.classList.remove("flash");
   },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
     btn.classList.remove("userflash");
    },250);
 }
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function cheakans(idx){
   /// console.log(`curr level : ${level}`);
    //  let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over ! your score is <b>${level}</b> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    //  console.log(userseq[idx]);
    //  console.log(gameseq[idx]);
}

function btnpress () {
  let btn=this;
  userflash(btn);

  usercolor=btn.getAttribute("id");
  userseq.push(usercolor);

  cheakans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
