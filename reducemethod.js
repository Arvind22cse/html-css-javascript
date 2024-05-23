//reduce will reduce the elements of an array to a single value

// const prices=[5,14,30,2,19,20];
// const tot=prices.reduce(sum);
// console.log(`$${tot.toFixed(2)}`);
// function sum(previous,next){//previous and next will contain 0+5=5 and 5 is stored in previous then 5+14 then .....
//     return previous+next;
// }

const grades=[75,50,90,80,60];
const max=grades.reduce(getMax);
console.log(max);
function getMax(prev,next){
    return Math.max(prev,next);
}
const min=grades.reduce(getMin);
console.log(min);
function getMin(prev,next){
    return Math.min(prev,next);
}