const human=document.getElementById("human");
const CB=document.getElementById("CB");
const MB=document.getElementById("MB");
const EB=document.getElementById("EB");
const checkhuman=document.getElementById("checkhuman");
const order=document.getElementById("order");
const sub=document.getElementById("sub");
sub.onclick=function(){
    if(human.checked)
    {
        checkhuman.textContent=`you are a human`;
    }
    else
    {
        checkhuman.textContent=`you are a robot good try`;
    }
    if(CB.checked)
    {
        order.textContent=`thank you for ordering Chicken Biriyani`;
    }
    else if(MB.checked)
    {
        order.textContent=`thank you for ordering Mutton Biriyani`;
    }
    else if(EB.checked)
    {
        order.textContent=`thank you for ordering Empty Biriyani`;
    }
    else
    {
        order.textContent=`order not successfull`;
    }
}