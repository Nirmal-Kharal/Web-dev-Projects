let form = document.querySelector("form")
let allinput = document.querySelectorAll("input[type=text]")
let h1 = document.querySelector("h5")


form.addEventListener("submit",(event)=>{
event.preventDefault();
for(let i=0;i<allinput.length;i++){
    if (allinput[i].value.trim() ==""){
        h1.textContent="error";
        h1.style.color='red'
        break;
    }
    else
    {
        h1.textContent=""
    }
}


//note:-  inp1.value { jun =>.value <== xw yesma  imput vetra lekheko data hunxa ani tyo acess pani garna melyo}


})