const mytxt=document.getElementById("mytxt");
const submit=document.getElementById("submit");
const mypara=document.getElementById("mypara");
let age;
submit.onclick = function(){
    age=mytxt.value;
    age=Number(age);
    if(age>=18 && age<100)
    {
        mypara.textContent=`you are eligible to vote`;
    }
    else if(age>100)
    {
        mypara.textContent=`you are dead`;
    }
    else if(age<0)
    {
        mypara.textContent=`you are not a human`;
    }
    else
    {
        mypara.textContent=`you are not eligible to vote`;
    }
}