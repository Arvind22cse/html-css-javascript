// const timeout=setTimeout(()=>window.alert("hello"),3000);
// clearTimeout(timeout)
let timeoutid;
function startime(){
    timeoutid=setTimeout(()=>window.alert("hello"),3000);
    console.log("started");
}
function cleartime(){
    clearTimeout(timeoutid);
    console.log("canceled");
}