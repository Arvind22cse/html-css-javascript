const UN=prompt("Enter your name");
const age1=prompt("Enter your age")
const hobbies=prompt("Enter your hobbies");
const nam=document.getElementById("name");
const age=document.getElementById("age");
const hobb=document.getElementById("hobb");
nam.innerText=UN.toUpperCase()
age.innerText=age1;
const hobby=hobbies.split(",");
const hobbyArray=[]
hobby.forEach((hobby)=>{
    hobbyArray.push(`<span class="badge text-bg-success">${hobby}</span>`)
})
hobb.innerHTML=hobbyArray.join(" ");