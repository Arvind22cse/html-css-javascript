class Animal{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }  
  move(speed){
    console.log(`This ${this.name} moves at a speed of ${speed}mph`);
  } 
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
      } 
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed=swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
      } 
}
class Hawk extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed=swimSpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
      } 
}
const rabbit=new Rabbit("rabbit",1,25);
const fish=new Fish("fish",2,12);
const hawk=new Hawk("hawk",3,50);
rabbit.run();
fish.swim();
hawk.fly();
