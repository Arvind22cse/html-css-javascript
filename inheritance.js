class Animal{
    alive=true;
    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name="rabbit";
}
class fish extends Animal{
    name="fish";
}

class hawk extends Animal{
    name="hawk";
}
const rabbit=new Rabbit();
const Fish =new fish();
const Hawk=new hawk();
//rabbit.alive=false;
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

console.log(Fish.alive);
Fish.eat();
Fish.sleep();

console.log(Hawk.alive);
Hawk.eat();
Hawk.sleep();