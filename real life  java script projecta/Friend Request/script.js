var h5 =document.querySelector("h5")
var btn = document.getElementById("add")
var check = 0

btn.addEventListener("click",()=>{
  if(check==0) { h5.innerHTML="Your Friend"
    h5.style.color="green"
    btn.innerHTML="Remove friend"
    check=1

}else
    {
   h5.innerHTML="People you may know"
    h5.style.color="red"
    btn.innerHTML='Add friend'
    check=0
    }
  
})

