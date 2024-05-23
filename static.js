// class MathUtil{
//     static PI=3.14159;
//     static getDiameter(radius){
//         return radius*2;
//     }
//     static getArea(radius){
//         return this.PI*radius*radius;
//     }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getArea(10));

class User{
    static userCount=0;
    constructor(username){
       this.username=username;
       User.userCount++;
    }
    static getuserCount(){
        console.log();
    }
    say(){
        console.log(`Hello,my username is ${this.username}`)
    }
}
 const user1=new User("Arvind");
 const user2=new User("Ashilin");
user1.say();
user2.say();
// console.log(user1.username);
// console.log(user2.username);
console.log(User.userCount);