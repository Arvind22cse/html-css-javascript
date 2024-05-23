let s="zoro";
console.log(s.charAt(3));
console.log(s.indexOf("o"));
console.log(s.lastIndexOf("o"));
console.log(s.length);
let s1="           Roronova Zoro";
s1=s1.trim();
console.log(s1)
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log(s1.repeat(2));
r=s1.startsWith("R");
r1=s1.endsWith("o");
console.log(r);
console.log(r1);
if(r && r1){
console.log(`correct`);
}
else{
    console.log(`incorrect`);
}
let r2=s.includes(" ");
if(r2){
    console.log(`your name cant hold ' '`)
}
else{
    console.log(s);
}
let pn="91-7010-123-540";
console.log(pn.replaceAll("-","_"));
console.log(pn.padStart(20,"0"));
console.log(pn.padEnd(20,"0"));
let cook="vinsmoke sanji"
let fn=cook.slice(0,4);
let ln=cook.slice(9,14);
console.log(fn);
console.log(ln);
let firstname=cook.slice(0,cook.indexOf(" "));
let lastname=cook.slice(cook.indexOf(" ")+1);
console.log(firstname);
console.log(lastname);
const email="arvindm.22cse@kongu.edu";
let uname=email.slice(0,email.indexOf("."));
console.log(uname);
