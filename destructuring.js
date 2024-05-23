/*destructuring-extract values from array and objects,then assigns them to variables ina convenient way
                []-to perform array destructuring
                {}-to perform object destructuring
*/

//swap
let a=1;
let b=2;
[a,b]=[b,a];
console.log(a);
console.log(b);

//swap 2 elements

const col=["red","green","black","white","blue"];
[col[0],col[4]]=[col[4],col[0]];
console.log(col);

//assign array elements to variables

const [firstcolors,secondcolors,thirdcolor,...extra]=col;
console.log(firstcolors);
console.log(secondcolors);
console.log(thirdcolor);
console.log(extra);


function displayPersion({firstName,lastName,age,job="Unemployed"}){
    console.log(`name:${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

//extract values from objects
const person1={
    firstName:"Arvind",
    lastName:"M",
    age:20,
    job:"developer",
}
const person2={
    firstName:"Ashwanth",
    lastName:"S",
    age:20,
    
}
displayPersion(person2)
// const {firstName,lastName,age,job="Unemployed"}=person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//Destructure in function parameter
