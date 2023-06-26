let posts = JSON.parse(localStorage.posts)
console.log(posts)
let postContainer = document.querySelector(".post-container")
postContainer.innerHTML=""
posts.forEach(function(element) {
 postContainer.innerHTML =
 postContainer.innerHTML +
 ` <div class="col-3">
 <div class="card">
   <img
     src="https://dummyimage.com/600x400/000/fff"
     class="card-img-top"
     alt="..."
   />
   <div class="card-body">
     <h5 class="card-title">${element.title}</h5>
     <p class="card-text">
       ${element.body}
     </p>
     <a href="/detail/detail.html?id=${element.id}" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
</div>`

})