var arr = [
  {
    dp: "https://images.unsplash.com/photo-1625243256252-f91854fbc05c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1718091708959-938f2f241329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1718056514261-bb037cfe6ddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1718146019864-3b40d37306e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1718073725822-96f864f08837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1709309934434-448b98065f66?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1675107359574-e3ba5f47a1a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1675107360081-4a77a387f36c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var stories =document.querySelector("#stories")
var clutter =""
arr.forEach(function (elem,idx) {
 clutter +=` <div class="story">
                <img id ="${idx}"src="${elem.dp}" alt="">
            </div>`
 
});
stories.innerHTML = clutter


stories.addEventListener("click",function(dets){
document.querySelector("#fullscreen").style.display = 'block'
document.querySelector("#fullscreen").style.backgroundImage =   `url(${arr[dets.target.id].story})`

setTimeout(() => {
    document.querySelector("#fullscreen").style.display = 'none'
}, 2000);
})
