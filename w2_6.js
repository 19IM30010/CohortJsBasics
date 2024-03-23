//// arrow function
function sum(a,b){
    return a+b;
}
const sums = (a,b)=>{
    return a+b;
}

console.log(sums(1,2));

// map, Filter

const input = [1,2,3,4,5,6,7,8,9,10];

const ans = input.map(i=>{
    return i*2;
})
console.log(ans);

const ans2 = input.filter(i=>{
    if(i%2){
        return false;
    }
    return true;
})
console.log(ans2);