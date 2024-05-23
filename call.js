sum(dispalypage,1,2);
function sum(callback, x,y){
    let result =x+y;
    callback(result)
}
function dispalyconsole(result){
    console.log(result);
}
function dispalypage(result){
    document.getElementById("myh1").textContent=result;
}