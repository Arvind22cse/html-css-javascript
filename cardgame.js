const cards=['A',1,2,3,4,5,6,7,8,9,10,'J','Q','K'];
shuffle(cards);
console.log(cards);
function shuffle(array){
    for(let i=array.length-1;i>0;i--){
       const random=Math.floor(Math.random()*(i+1));//(0-1)*i+1  Eg:(0.75*2)=1.5=floor(1.5)=1
       [array[i],array[random]]=[array[random],array[i]];
    }
}
