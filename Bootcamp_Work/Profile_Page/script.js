var conCount = document.querySelector(".con-counter")
var friendCount = document.querySelector(".friend-counter")

function accept(id) {
    var requestLine = document.querySelector(id)
    requestLine.remove(id)
    conCount.innerText--
    friendCount.innerText++
}
function reject(id) {
    var requestLine = document.querySelector(id)
    requestLine.remove(id)
    conCount.innerText--
}

function nameChange(element){
    var changeMe = document.querySelector("#user-name")
    changeMe.innerText = "Dane Joe"
}