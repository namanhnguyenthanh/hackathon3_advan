let cardTitle =document.querySelector('.card-title')
let cardText =document.querySelector('.card-text')


let posts = JSON.parse(localStorage.posts)
let url = window.location.href
let id = url.split("=")[1]
let post = posts.find(function(e,i){
    return e.id == id
})
if (post){
    cardTitle.innerHTML = post.title
    cardText.innerHTML = post.body
}