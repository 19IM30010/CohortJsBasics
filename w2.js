function getLength(str){
    console.log("Original String",str);
    console.log("Length:",str.length);
}
getLength("Hello World");
const str = "Hello World World World";
let name= "Gyanendra Behura Behura"
console.log(name.indexOf("Behura"));
console.log(name.lastIndexOf("Behura"));
console.log(name.slice(1,5));
console.log(name.substr(1,5));
str.replace('World',"Javascript")
console.log(str.replace('World',"Javascript"));
var value = "Hi , Hello , Hifive"

const words = value.split(',');
console.log(words);
value = "  Gyanendra   Behura   "
console.log(value.trim());

console.log(value.toUpperCase());
console.log(value.toLowerCase());
console.log(parseInt("42"));
console.log(parseInt("42px"));
console.log(parseInt("3.14"));
console.log(parseFloat("42"));
console.log(parseFloat("42px"));
console.log(parseFloat("3.14"));
const initialArray = [1,2,3];
initialArray.push(4);
initialArray.push(5);
initialArray.pop();
initialArray.shift();
initialArray.unshift(0);
console.log(initialArray);
const firstArray = [1,2,3];
const secondArray = [1,2,3];
const finalArray = firstArray.concat(secondArray);
console.log(finalArray);
function log(str){
    console.log(str+" is a string");
}

firstArray.forEach(log); //callBack function
class Animal {
    constructor(name,legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log('I am an Animal');
    }
    speak(){
        console.log(this.speaks);
    }
}

let dog = new Animal('dog',4,'Bhow Bhow');
let cat = new Animal('cat',4,'meow');
cat.speak();

Animal.myType();//static function is the function of class call call directly not work on object

const users = '{"name":"Gyanendra","Age":"22","Status":"JobLess Single"}';

const user1 = JSON.parse(users);
console.log(user1);

const user = {
    name:'Gyanendra',
    age:22,
    Gender:"Male",
}

const user2 = JSON.stringify(user);
console.log(user2);


// Date Class
const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getHours() + ':' + currentDate.getMinutes()+":"+currentDate.getSeconds());
console.log(currentDate.getYear());//1900
console.log(currentDate.getFullYear());
console.log(currentDate);
console.log(currentDate.getTime()); //1970
const d1 = new Date().getTime();
function calculateSum(){
    let a= 0;
    for(let i=0;i<100000000;i++){
        a+=i;
    }
    return a;
}
calculateSum();
const d2 = new Date().getTime();
console.log(d2-d1);
// function timetime(){
//     let time = new Date();
//     console.log(time.getHours() + ':' + time.getMinutes()+":"+time.getSeconds());
// }
// setInterval(timetime,1000);

console.log(Math.random());

// Objects
const sampleObject = {
    key1:"value1",
    key2:"Value2",
    key3:"Value3"
}
let keys = Object.keys(sampleObject);
console.log(keys);
let values = Object.values(sampleObject);
console.log(values);
let entries = Object.entries(sampleObject);
console.log(entries);
let hasProp = sampleObject.hasOwnProperty("key1");
console.log(hasProp);
let newObj = Object.assign({}, sampleObject,{newProp:"newValue"});//{}-> is syntax
console.log(newObj);