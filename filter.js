// //create a new array by filtering out of elements
// let numbers=[1,2,3,4,5,6];
// let evennumbers=numbers.filter(iseven);
// let oddnum=numbers.filter(isodd);
// console.log(evennumbers);
// console.log(oddnum);

// function iseven(element){
//     return element%2===0;
// }
// function isodd(element){
//     return element%2!==0;
// }

// const ages=[16,17,18,19,20,60];
// const adults=ages.filter(isAdult);
// const children=ages.filter(isChild);
// console.log(adults);
// console.log(children);
// function isAdult(element){
//     return element>=18;
// }
// function isChild(element){
//     return element<18;
// }

const words=["apple","orange","bannana","mango","papaya"];
const shortword=words.filter(getShortWords);
console.log(shortword);
const longword=words.filter(getlongWords);
console.log(longword);
function getShortWords(element){
return element.length<=5;
}

function getlongWords(element){
    return element.length>5;
    }
    