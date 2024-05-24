function calculate(){
    const totalamount=document.getElementById("total-amount");
    const principal=document.getElementById("principal");
    const rate=document.getElementById("rate");
    const years=document.getElementById("years");
    let prin=Number(principal.value);
    let r=Number(rate.value/100);
    let y=Number(years.value);

    if(prin<0||isNaN(prin)){
        prin=0;
        principal.value=0;
    }
    if(r<0||isNaN(r)){
        r=0;
        rate.value=0;
    }
    if(y<0||isNaN(y)){
        y=0;
        years.value=0;
    }

    const result=prin*Math.pow((1+r/1),1*y)
    totalamount.textContent=result.toLocaleString("ta-IN",{style:"currency",currency:"INR"});

}