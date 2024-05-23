//nested obj-object inside other obj

/*const person={
fullname:"Arvind",
age:20,
isStudent:true,
hobbies:["cricket","gaming","watching anime"],
address:{
   city :"Erode",
   state:"TamilNadu",
   country:"India",
}
}
console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address.country);
for(const prop in person.address){
   console.log((person.address[prop]));
}*/

class person {
   constructor(name,age,...add){
      this.anme=name;
      this.age=age;
      this.add=new Add(...add);
   }
}
class Add{
   constructor(street,city,country){
      this.street=street;
      this.city=city;
      this.country=country;
   }
}
const p1=new person("Arvind",20,"2,28,C S S Nagar","Erode","India");
const p2=new person("Ashwanth",20,"mamaruthupalayam","Erode","India");
const p3=new person("gaurav",20,"Thindal","Erode","India");
console.log(p1.add.city);
console.log(p3.add.street);
