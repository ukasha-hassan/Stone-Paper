let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const gencompchoice = () =>{
  const options=["rock","paper","scissors"];
  const randidx=Math.floor(Math.random()*3);
  return options[randidx];
};
const drawgame=()=>{
  console.log("game was draw.");
  msg.innerText="game was draw play again";
  msg.style.backgroundColor = "black";
  msg.style.Color = "white";
}
const showwinner=(userwin)=>{
if(userwin){
  userscore++;
  userscorepara.innerText=userscore;
  msg.innerText="you win!";
  msg.style.backgroundColor = "green";

}
else{
  compscore++;
  compscorepara.innerText=compscore;
  msg.innerText="you lose.";
  msg.style.backgroundColor = "red";
}
};

const playgame=(userchoice)=>{
    console.log("user choice=", userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);

    if(userchoice===compchoice){
      drawgame();
    }
      else {

        let userwin=true;
        if(userchoice==="rock"){
          userwin=compchoice==="paper"?false:true;

        }
        else if(userchoice==="paper"){
          userwin=compchoice==="scissors"?false:true;
        }
        else{
          userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
      }

    
};




choices.forEach((choice)=>{
choice.addEventListener("click", ()=>{
  const choiceid=choice.getAttribute("id");
  playgame(choiceid);

});
});
