let [milliseconds,second,minutes,hours]=[0,0,0,0];
let timRef=document.querySelector(".timer-display");
let int =null;

document.getElementById("start-timer").addEventListener("click",() =>{
    if(int!==null ){
        clearInterval(int);
    }
    int =setInterval(displayTimer,10);
});
document.getElementById("pause-timer").addEventListener("click",() =>{
    clearInterval(int)
});
document.getElementById("reset-timer").addEventListener("click",() =>{
    clearInterval(int);
    [milliseconds,second,minutes,hours]=[0,0,0,0,];
    timRef.innerHTML="00 : 00 : 00 : 000";
});
function displayTimer() {
    milliseconds += 10;
    if(milliseconds==1000){
        milliseconds =0;
        second++;
        if(second ==60){
            second =0;
            minutes++;
            if(minutes ==60){
                minutes=0;
                hours++;

            }
        }
    }
    
    let h =hours <10 ? "0" +hours:hours;
let m =minutes <10 ? "0" + minutes:minutes;
let s =second <10 ? "0" +second:second;
let ms= 
      milliseconds < 10 ? "00" +milliseconds:milliseconds <100 ? "0" + 
milliseconds:milliseconds;
timRef.innerHTML=  `${h} : ${m} : ${s} : ${ms}`;
}
