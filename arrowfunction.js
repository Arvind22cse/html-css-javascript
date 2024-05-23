const hello=(name,age)=>{
    console.log(`my name ${name}`);
    console.log(`my age ${age}`);
}
hello("arvind",20);


//function declaration with callback
setTimeout(hello1,3000);
function hello1(){
    console.log("hello");
}

//function expression
setTimeout(function(){
    console.log("hello");
},3000);

//arrowfunction
setTimeout(()=>{
    console.log("hello");
},3000);


const num=[1,2,3,4,5,6];
const squares=num.map((element)=>Math.pow(element,2));
const evennum=num.filter((element)=>element%2===0);
const tot=num.reduce((prev,next)=>prev+next);
console.log(squares);
console.log(evennum);
console.log(tot);