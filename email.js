mail=document.getElementById("mail");
valid=document.getElementById("valid");
para=document.getElementById("para");
valid.onclick=function(){
    if(mail.value.includes("@"))
    {
       para.textContent=`true`;
    } 
    else{
        para.textContent=`false`;
    }
}
/*function isvalid(email){
    if(email.includes("@"))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isvalid("arvind@gmail.com"));*/