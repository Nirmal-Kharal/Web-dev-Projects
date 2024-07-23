let input = document.querySelector("input")



var data = [{name :"crush", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"},
    {name :"agarbati", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"},
    {name :"puja", src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"},
    {name :"Sandhya", src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXQlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"},
    
]



 input.addEventListener("input",function(){
    var matching = data.filter(function(e){

        return e.name.startsWith(input.value)
    })
    var newUser = "";
matching.forEach((elem)=>{
     newUser  +=`
       
            <div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>
                <h4 >${elem.name}</h4>
            </div>
           
        `

})
 document.querySelector(".people").innerHTML = newUser;

 })