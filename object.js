const person1={
    firstName:"Arvind",
    lastName:"M",
    age:20,
    isEmployed:false,
    sayHello:function(){console.log("Hi I'm Arvind!")},
    eat:function(){console.log("I am eating dosa")},
}
const person2={
    firstName:"Ashwanth",
    lastName:"S",
    age:19,
    isEmployed:false,
    sayHello:()=>console.log("Hi I'm Ashwanth!"),
    eat:()=>console.log("I am eating idly"),

}
person1.sayHello();
person1.eat();
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person2.sayHello();
person2.eat();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
