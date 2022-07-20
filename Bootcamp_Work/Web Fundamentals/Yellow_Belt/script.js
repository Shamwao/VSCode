function hide(element) {
    element.remove();
}
function whichPet(element) {
    alert("You are looking for a " + element.value)
}
var currentPets =[3,5,8]
var petCount = [
    document.querySelector(".pet-count1"),
    document.querySelector(".pet-count2"),
    document.querySelector(".pet-count3")
]

/*function addPet(id) {
    currentPets[id] ++;
    petCount[id].innerText= currentPets[id] + " petting(s)"
}*/

function addPet(element) {
    var changeMe = document.querySelector(".pet-count1").innerText
    var toThis = parseInt(document.querySelector(".pet-count1").innerText)
    toThis++
    console.log(toThis)
    changeMe = toThis + " petting(s)"
}