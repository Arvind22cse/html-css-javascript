const fruits=[{name:"apple",color:"red",cal:95},
    {name:"orange",color:"orange",cal:45},
    {name:"banana",color:"yellow",cal:105} ,
    {name:"cocunut",color:"white",cal:195},
    {name:"pineapple",color:"yellow",cal:37} 
];


//  fruits.push({name:"grapes",color:"purple",cal:62})
//  fruits.pop();
//  fruits.splice(1,2);
//  fruits.forEach(fruit=>console.log(fruit.name));
// console.log(fruits);

// const fruitname=fruits.map(fruit=>fruit.name);
// const fruitcolor=fruits.map(col=>col.color);
// console.log((fruitcolor));
// console.log(fruitname);

// const yellowfruits=fruits.filter(fruit=>fruit.color==="yellow");
// const lowcalfruits=fruits.filter(fruit=>fruit.cal<100);
// console.log(lowcalfruits);
// console.log((yellowfruits));

const maxfruits=fruits.reduce((max,fruit)=>fruit.cal>max.cal?fruit:max);
console.log(maxfruits);