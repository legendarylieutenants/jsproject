let icon = document.querySelectorAll(".icon")
let userScore=document.querySelector(".your")
let compScore=document.querySelector(".comp")
let msg = document.querySelector(".msg")    
let drawgame =function(){
msg.innerHTML="draw game, try again"
}
userScore.innerHTML = userScore.innerHTML || '0';
compScore.innerHTML = compScore.innerHTML || '0';

let showWinner = function(userwin){
    if(userwin){
        msg.innerHTML="you win"
        console.log("you win")
        userScore.innerHTML=parseInt(userScore.innerHTML) + 1+"<br>your";
    }
    else{
        msg.innerHTML="you lost"
        compScore.innerHTML=parseInt(compScore.innerHTML) + 1+"<br>comp";
    }
}



let comp = function(){
    let option =["rock","paper","scissor"]
  let randind =  Math.floor(Math.random()*3)
  return(option[randind])
    
}




playgame = function(user){
    
let compChoice = comp();
 if(user===compChoice){
    drawgame();
}
else {
let userwin = true;
if(user ==="rock"){
 userwin = compChoice === "paper" ? false : true;
 
}
else if(user ==="paper"){
    userwin = compChoice === "scissor" ? false : true;

}
else{
    userwin = compChoice === "rock"? false:true;
}
 showWinner(userwin);
}}
icon.forEach((box) => {
    box.addEventListener("click", function(){
let user = box.getAttribute("id")
playgame(user)
    })
  
   

});