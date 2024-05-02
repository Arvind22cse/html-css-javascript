const decb=document.getElementById("decb");
const incb=document.getElementById("incb");
const recb=document.getElementById("resb");
const cnt=document.getElementById("cnt");
let c=0;
incb.onclick=function(){
    c++;
    cnt.textContent=c;
}
decb.onclick=function(){
    c--;
    cnt.textContent=c;
}
recb.onclick=function(){
    c=0;
    cnt.textContent=c;
}