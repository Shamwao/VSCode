var hideMe = document.getElementById("cookie-box")

function hide(element){
    hideMe.remove();
}

function newReport(element) {
    alert("Loading weather report...")
}

function c2f(temp){
    return Math.round(9/5*temp + 32)
}

function f2c(temp){
    return Math.round(5/9*(temp - 32))
}

function tempSwitch(element) {
    for(var i =1; i <9; i++){
        var switchMe = document.querySelector("#temp" + i)
        console.log(switchMe)
        var tempvar = parseInt(switchMe.innerText)
        if (element.value == "C"){
            switchMe.innerText = f2c(tempvar) + "°";
        } else {
            switchMe.innerText = c2f(tempvar) + "°";
        }
    }
}
