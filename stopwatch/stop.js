window.onload=function(){
    var seconds =00;
    var milliseconds =00;
    var appendmilliseconds=document.getElementById("milliseconds");
    var appendseconds=document.getElementById("seconds");
    var buttonstart=document.getElementById('button-start');
    var buttonstop=document.getElementById('button-stop');
    var buttonreset=document.getElementById('button-reset');
    var interval;
     buttonstart.onclick =function(){
        clearInterval(interval);
        interval=setInterval(starttimer,10);

     }
     buttonstop =function (){
        clearInterval(interval);
        interval=setInterval(starttimer ,10);
     }

     buttonreset.onclick =function(){
        clearInterval(interval);
        milliseconds="00";
        seconds="00";
        appendmilliseconds.innerHTML= milliseconds;
        appendseconds.innerHTML=seconds;
     }
     function starttimer() {
        milliseconds++;

        if(milliseconds<=9) {
            appendmilliseconds.innerHTML="0"+milliseconds;
        }
        if(milliseconds>9){
            appendmilliseconds.innerHTML=milliseconds;
        }
        if(milliseconds>99){
            seconds++;
            appendseconds.innerHTML="0"+seconds;
            milliseconds=0;
            appendmilliseconds.innerHTML="0"+0;
        }
        if(seconds>9){
            appendseconds.innerHTML=seconds;
        }
     }
}