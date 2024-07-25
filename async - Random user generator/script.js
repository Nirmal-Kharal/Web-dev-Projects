// ++++++++++++++++++++++++++++++set time out++++++++++++++++++++

// setTimeout(()=>{
//     console.log("hey")
// }, 3000)



//+++++++++++++++++++++++++++set interval++++++++++++++++++


// let count =1
//  let stop  = setInterval(()=>{
//  if (count === 6) clearInterval(stop);
//  console.log(count)
//  count++
// },1000)




//++++++++++++++++++++++++++++promise/fetch+++++++++++++++++++++++++++

// const letter = new Promise(function(resolve , reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw=> raw.json() )
//     .then(result =>  {
//         if(result.results[0].gender ==="male") resolve();
//             else reject();
//     } )
// })
// letter 
// .then (function(){
//     console.log ("hara button")
// })
// .catch (function(){
//     console.log ("red button")
// })




//---------- ye sabhi use hi tab kiye jaate hai jab kuchh aisa karna ho jismein timne 




//+++++++++++++++++++++++++++++Call Back+++++++++++++++++++++++++++++++++

// callback kuch nahe seirf ek fuunction hota hey jese pass keya hey kese aur function mein aur jab wo function chale to aap us  pass kiye gaye callback function ko chala payee

// function doSomeAsyncTask(url,callback){
//     fetch(`url`)
//     .then(raw=> raw.json())
//     .then(result=> {
//         callback()
//     })

// }

// doSomeAsyncTask("some url", function(){})


//++++++++++++++++++++++++++++Async/Await++++++++++++++++++++++++++++++++
// we are able to write async code same as sync code 



//    async function abcd(){
//     let a = await  fetch(``)
//     console.log(a)
//    }


//++++++++++++++++++++++++++++++++++Events LOOp++++++++++++++++++++




//++++++++++++++++++++++++++vs+++++++++++++++++++++++++++++

// from callbacK 




function abcd(url,callbacK ){
    fetch(url)
    .then(raw=>raw.json)
    .then(result=>{
        callbacK(result)
    })
}
abcd( "https://randomuser.me/api/"  , function(result){console.log(result)})




//+++++++++++++++++++++++++++++++++generators+++++++++++++++++++++++