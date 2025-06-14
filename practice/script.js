var centisecond=document.getElementById("centisecond");
var second=document.getElementById("second");
var minute=document.getElementById("minute");
var hour=document.getElementById("hour");

function countDown(){
    centisecond.innerHTML=Number(centisecond.innerHTML)+1;
if(centisecond.innerHTML>99){
    centisecond.innerHTML=0;
    second.innerHTML=Number(second.innerHTML)+1;

}

if(second.innerHTML>59){
    second.innerHTML=0;
    minute.innerHTML=Number(minute.innerHTML)+1;
}
if(minute.innerHTML>59){
    minute.innerHTML=0;
    hour.innerHTML=Number(hour.innerHTML)+1;
}


}


setInterval(countDown,10);
