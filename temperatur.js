const num=document.getElementById("num");
const celcius=document.getElementById("celcius");
const Farenheit=document.getElementById("Farenheit");
//const sub=document.getElementById("sub");
const ans=document.getElementById("ans");

let t;
function Convert(){
    if(Farenheit.checked)
    {
        t=Number(num.value);
        t=t*(9/5)+32;
        ans.textContent=t.toFixed(1)+" °F";
    
   
    }
    else if(celcius.checked)
    {
        t=Number(num.value);
        t=(t-32)*(5/9);
        ans.textContent=t.toFixed(1)+" °C";
    
        
    }
    else
    {
        ans.textContent="select a unit";
    }
}