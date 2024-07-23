let prg =  document.querySelector("#progress")

let count =0;

    let int = setInterval(()=>{
        if(count ===100){
            clearInterval(int)
            document.querySelector("h4").textContent="download completed"
        }
    count++;
    prg.style.width=count + "%";
    },100)

