window.addEventListener("mousemove",function(details){
gsap.to('#center',{
    left: details.clientX+ "px",
    ease : power4
})

})