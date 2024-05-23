//date(year,month,day,hour,minute,second,ms)
const date=new Date(2024,0,1,2,3,4,5)
console.log(date);
const date2=new Date("2024-01-02T12:00:00");
console.log(date2);

const date3=new Date(170000000)
console.log(date3);

const date4=new Date();
const year=date4.getFullYear();
const month=date4.getMonth();
const day=date4.getDate();
const hour=date4.getHours();
const min=date4.getMinutes();
const sec=date4.getSeconds();
const ms=date4.getMilliseconds();
const dayofweek=date4.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(min);
console.log(sec);
console.log(ms);
console.log(dayofweek);


const date5=new Date();
date4.setFullYear(2024);
date4.setMonth(0);
date4.setDate(1);
date4.setHours(2);
date4.setMinutes(3);
date4.setSeconds(3);
console.log(date4);

const datea=new Date("2024-08-31");
const dateb=new Date("2004-08-31");
if (dateb>datea){
    console.log("hello");
}