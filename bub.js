function MakeBubble(){
    var clutter="";
 for(var i=1; i<=154; i++){
    var rn= Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML=clutter;
}

var timer= 60;
function makeTimer(){
  var timeinterval=  setInterval(function(){
       if(timer>0){
         timer--;
         document.querySelector("#timerstrt").textContent=timer;
       }else{
        clearInterval(timeinterval);
       }
        

    },1000);

}

var hitrn=0;
function getNewHit(){
     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#valhit").textContent=hitrn;
}

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var numberclicked=Number(dets.target.textContent);
    if (numberclicked===hitrn){
        increaseScore();
        MakeBubble();
        getNewHit();
    }
});



getNewHit();
makeTimer();

MakeBubble();