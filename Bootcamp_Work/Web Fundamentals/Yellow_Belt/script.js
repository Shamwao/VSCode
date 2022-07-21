function hide(element) {
    element.remove();
}
function whichPet(element) {
    alert("You are looking for a " + element.value)
    var isCat = document.getElementById("kitty")
    if (element.value != isCat) {
        hide(isCat)
    }
    
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

function addPet(id) {
    var changeMe = document.querySelector(".pet-count" + id).innerHTML
    var toThis = parseInt(document.querySelector(".pet-count" + id).innerText)
    console.log(changeMe)
    toThis ++
    document.querySelector(".pet-count"+ id).innerText = toThis + " petting(s)"
}