// Basics
console.log(
  "Hello World, this is [Fatima] [Abu] with HNGi7 ID [HNG"
);
// console.log(a);
let firstName="Yo"
let lastName="Abu"
console.log("Hi" + " " + firstName + " " + lastName)
// console.log(b);
var a=1;
a=2;
console.log(a);
var tr=true;
if(tr){
  console.log(true);
}
else{
  console.log(false);
}
// var sum = 0;
// for(var i=0;i<=10;i++){
//   console.log(sum+=i);
// }


// Arrays and Objects //

var arr=[1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    console.log(arr[i]);
  }
}
const user1 = {
  firstName: "Fatima",
  lastName: "Abu",
  id: "HNG-01484",
  email: "tugrp@example.com",
  language: "Javascript",
}
const allUsers= [
  {firstName:"Gyan",gender:"Male"},
  {firstName:"Abu",gender:"Male"},
  {firstName:"Harsa",gender:"Female"}
];

for(var i=0;i<allUsers.length;i++){
  if(allUsers[i]['gender']=='Male'){
    console.log(allUsers[i].firstName);
  }
}

// Function // call Back Function
function sum(a,b,fnToCall){
    let result = a+b;
    fnToCall(result);

}
function displayResult(data){
    console.log("Result of the sum is: " + data);
}
function displayResultPassive(data){
    console.log("Sum's Result is: " + data);
}

// console.log(sum(3,4,displayResult));
// console.log(sum(3,4,displayResultPassive));

// var now = new Date();
// var t1 = now.getSeconds();
// setTimeout(greet,3000);

// // SetTimeOut
// function greet(){
//     var t2 = new Date().getSeconds();
//     console.log("Hiiii");
//     console.log(t2-t1);
// }
// var now = new Date();
// var t1 = now.getTime();

// setTimeout(function() {
//     var t2 = new Date().getTime();
//     console.log(t2 - t1);
// }, 3000);

// SetInterval
// function time(){
//     const now = new Date();
//     const hr = now.getHours();
//     const min = now.getMinutes();
//     const sec = now.getSeconds();
//     console.log(hr + ":" + min + ":" + sec);
// }
// setInterval(time,1000);

// 
function displayClock() {
    // Get current time
    var now = new Date();
    
    // Extract hours, minutes, and seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Format the time to ensure double digits
    var formattedHours = String(hours).padStart(2, '0');
    var formattedMinutes = String(minutes).padStart(2, '0');
    var formattedSeconds = String(seconds).padStart(2, '0');
    
    // Display the clock in the terminal
    console.log(formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
}

// Display the clock every second
setInterval(displayClock, 1000);














