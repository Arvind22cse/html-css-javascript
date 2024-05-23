const pi=3.14159;
let rad;
let cir;
document.getElementById("mybutton").onclick=function(){
    rad=document.getElementById("mytxt").value;
    rad=Number(rad);
    cir=2*pi*rad;
    document.getElementById("myh2").textContent=cir;
}