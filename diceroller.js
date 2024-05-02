function rollDice(){
    const num=document.getElementById("num").value;
    const diceResult=document.getElementById("diceResult")
    const diceImages=document.getElementById("diceImages")
    const values=[];
    const images=[];
    for(let i=0;i<num;i++){
        const val=Math.floor(Math.random()*6)+1;
       values.push(val);
       images.push(`<img src="dice/dice${val}.jpeg" style="width:200px;">`);
    }
    
   diceResult.textContent=`dice: ${values.join(', ')}`;
   diceImages.innerHTML=images.join('');
}