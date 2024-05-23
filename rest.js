function openfridge(...foods){
    console.log(...foods);
}
function getfoods(...foods){
    return foods;
}

function avg(...num){
    let res=0;
    for(let nums of num){
        res+=nums;
    }
    return res/num.length;
}
function combine(...strings){
    return strings.join(" ");
}
const fname=combine("Monkey","D","Luffy");
console.log(fname);
const tot=avg(1,3,4,9,5,4);
console.log(`your avg is ${tot}`);
const food1="dosa";
const food2="idly";
const food3="pongal";
const food4="vadai";
const food5="poori";

openfridge(food1,food2,food3,food4,food5);
const foods=getfoods(food1,food2,food3,food4,food5);
console.log(foods)