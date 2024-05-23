const person1={
    name:"Arvind",
    favfood:"briyani",
    sayHello:function(){console.log(`hi I'm ${this.name} `)},
    eat:function(){console.log(`I'm  eating ${this.favfood} `)}

}
person1.sayHello();
person1.eat();