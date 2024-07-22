let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let swap = document.querySelector("button")
let src1 = img1.src;
let src2 = img2.src;


swap.addEventListener("click", ()=>{
  
img1.src = src2;
img2.src = src1;

})