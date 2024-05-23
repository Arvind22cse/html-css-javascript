let fruit=["apple","orange","banana","cocunut","pineapple"];
fruit.sort();
console.log(fruit);

let num=[1,10,2,4,23,87,11,0,33];
num.sort((a,b)=>b-a);
console.log(num);

const people=[{name:"Arvind",age:20,gpa:7.83},
    {name:"Ashwanth",age:35,gpa:7.5},
    {name:"darun",age:19,gpa:6.5}
]
people.sort((a,b)=>b.gpa-a.gpa);
console.log(people);

people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);