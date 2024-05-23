/*function outer(){
    let a="hai";
    function inner(){
        console.log(a);
    }
    inner();
}
outer();
function createCounter(){
    let c=0;
    function increment(){
        c++;
        console.log(`count is ${c}`);
    }
    function getcount(){
        return c;
    }
    return {increment,getcount};
}
let b=createCounter();
b.increment();
b.increment();
b.increment();
console.log(b.getcount());*/
function game(){
let score=0;
function increasescore(points){
    score+=points;
    console.log(score);
}
function decreasescore(points){
    score-=points;
    console.log(score);
}
function getsscore(){
    return score;
}
return {increasescore,decreasescore,getsscore};
}
const g=game();
g.increasescore(10);
g.increasescore(1);
g.decreasescore(5);
console.log(g.getsscore());