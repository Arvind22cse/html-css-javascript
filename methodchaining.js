//without using method chaining
let u=window.prompt("enter the user name: ");
u=u.trim();
let a=u.charAt(0);
a=a.toUpperCase();
let s=u.slice(1);
s=s.toLowerCase();
u=a+s;
console.log(u);
//using method chaining
let u1=window.prompt("enter the user name: ");
u1=u1.trim().charAt(0).toUpperCase()+u1.trim().slice(1).toLowerCase();
console.log(u1);
