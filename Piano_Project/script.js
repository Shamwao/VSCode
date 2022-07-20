

function over(element){
    element.style.backgroundColor = "red";
}
function outBlack(element){
    element.style.backgroundColor = "black";
}
function outWhite(element){
    element.style.backgroundColor = "white";
}

var playC = document.querySelector("#C")

function playTone(element){
    var audio = new Audio("Tones\Piano.mf.C4.aiff")
    audio.play()
}
function playMyAudio(){
    document.getElementById("myAudio").play();
}