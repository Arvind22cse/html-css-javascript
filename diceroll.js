const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
const mybutton=document.getElementById("mybutton");
const min=1;
const max=6;
mybutton.onclick=function(){
    rand1=Math.floor(Math.random()*max)+min;
    rand2=Math.floor(Math.random()*max)+min;
    rand3=Math.floor(Math.random()*max)+min;
    label1.textContent=rand1;
    label2.textContent=rand2;
    label3.textContent=rand3;
}