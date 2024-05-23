/*console.time("test");
for(i=0;i<=10000000;i++){
 //do some code   
}
console.timeEnd("test");*/

function loadData(){
    console.time("loaddata");
    for(let i=0;i<1000000;i++){
        //envnj
    }
    console.timeEnd("loaddata");
}
function processdata(){
    console.time("processData");
    for(let i=0;i<10000;i++)
    {

    }
    console.timeEnd("processData");
}
loadData();
processdata();