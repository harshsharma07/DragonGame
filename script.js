score=0;
cross=true;
audio=new Audio("music.mp3");
audiogo=new Audio("gameover.mp3");
setTimeout(() => {
   audio.play(); 
}, 1000);
document.onkeydown=function(e){
    console.log(e.keyCode);
    if(e.keyCode==38){
        dino=document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(()=>{
            dino.classList.remove("animateDino");
        },700);
    }
    else if(e.keyCode==39){
        dino=document.querySelector(".dino");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=dinoX + 100+"px";
    }
    else if(e.keyCode==37){
        dino=document.querySelector(".dino");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=(dinoX - 100)+"px";
    }}
setInterval(() => {
   dino=document.querySelector(".dino");
   gameOver=document.querySelector(".gameOver");
   obstacle=document.querySelector(".obstacle");
   dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
   dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));
   ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
   oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));
   offsetX=Math.abs(dx-ox);
   offsetY=Math.abs(dy-oy);
   if(offsetX<70 && offsetY<55){
       audiogo.play()
       setTimeout(() => {
           audiogo.pause();
           audio.pause();
       }, 1000);
    gameOver.innerHTML="Game is Over Reload again to play";
    obstacle.classList.remove("obstacleAni");
   } 
   else if(offsetX<150 && cross ){
       score+=1;
       updateScore(score);
       cross=false;
       setTimeout(() => {
           cross=true;
       }, 1000);
       setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ', newDur)
    }, 500);
    }
},10 );
function updateScore(score){
    scoreCount=document.querySelector("#scoreCount");
    scoreCount.innerHTML="Your Score: " + score;
}