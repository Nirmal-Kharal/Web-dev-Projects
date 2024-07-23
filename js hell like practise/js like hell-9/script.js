let text = document.querySelector("textarea")
let span = document.querySelector("span")

text.addEventListener("input",()=>{
    span.textContent=text.value.length
})