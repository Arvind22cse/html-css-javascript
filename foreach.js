// let num=[1,2,3,4,5];
// num.forEach(square);
// num.forEach(display);
// function triple(element,index,array){
//     array[index]=element*3;
// }
// function square(element,index,array){
//     array[index]=Math.pow(element,2);
// }
// function display(element){
//     console.log(element);
// }
let fruits=["apple","orange","bannana","mango"];
//fruits.forEach(uppercas);
//fruits.forEach(lowercas);
fruits.forEach(Capitaliz);
fruits.forEach(display);
function uppercas(element,index,array){
    array[index]=element.toUpperCase();
    }
function lowercas(element,index,array){
array[index]=element.toLowerCase();
}
function Capitaliz(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
    }
function display(element){
    console.log(element);
}
