let num=[1,2,3,4,5];
let max=Math.max(...num);
let min=Math.min(...num);
console.log(max);
console.log(min);

let uname="arvind";
let letters=[...uname].join("-");
console.log(letters);

let fruits=['apple','orange','bannana'];
let vegtables=['carrots','tomato','potatoes']
let newfruits=[...fruits,...vegtables,"eggs","milks"];
console.log(newfruits);