var likes = [9, 12, 9]
var p = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
]

function addLikes(id){
    likes[id]++
    p[id].innerText=likes[id] + " like(s)"
}