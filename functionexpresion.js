//function declaration
function hello(){
     console.log("hi");
}
setTimeout(hello,3000);
//fuction expression
setTimeout(function(){
    console.log(`hello`);
},3000);

//function declaration
const num=[1,2,3,4,5];
const sq=num.map(square);
console.log(sq);
function square(element){
    return Math.pow(element,2);
}

//function expression
const num1=[1,2,3,4,5];
const sq1=num1.map(function(element){
    return Math.pow(element,2);
});
console.log(sq1);
const evennum=num1.filter(function(element){
    return element%2==0;
})
console.log(evennum);
const oddnum=num1.filter(function(element){
    return element%2!==0;
})
console.log(oddnum);
const tot=num1.reduce(function(prev,next){
return prev+next;
});
console.log(tot);