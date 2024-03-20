// File Read and Write is asynchronous
const fs = require('fs');
// function kiratReadfile(cb){
//     fs.readFile("w1_4.txt","utf-8",function(err,data){
//         cb(data);
//     })
// }
// function onDone(data){
//     console.log(data);
// }
// kiratReadfile(onDone);

// Promise 
// function readFiles(){
//     // Async Logic
//     return new Promise(function(resolve){
//         fs.readFile("w1_4.txt","utf-8",function(err,data){
//             resolve(data);
//         })
//     });
// }
// function onD(data){
//     console.log(data);
// }

// var v = readFiles();
// console.log(v);
// v.then(onD);
// v.then(function(val){
//     console.log(val+"Hi Yo Gyan");
// })
// Async and Await Sugar coated syntax doing callBack and Promise await can't be top level it will work inside async
function gyanAsyncFunction(){
    // Async
    let p = new Promise(function(res){
        setTimeout(function(){
            res("Hi There");
        },3000);
    })
    return p;
    
}
async function machine(){
    let v = await gyanAsyncFunction();
    console.log(v);
    console.log("HIII");
}
machine();
setTimeout(function(){
    console.log("Hiii");
},3500);
console.log("Hi:)");