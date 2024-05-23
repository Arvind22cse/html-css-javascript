// const num=[1,2,3,4,5]
// const squares=num.map(square);
// console.log(squares);
// function square(element){
//     return Math.pow(element,2)
// }
// const students=["arvind","ashwanth","bharath"];
// const studentsUpper=students.map(uppercas);
// const studentsLower=students.map(lowercas)
// console.log(studentsLower);
// function uppercas(element){
//     return element.toUpperCase()
// }
// function lowercas(element){
//     return element.toLowerCase()
// }
const dates=["2024-06-12","2024-08-31"]
const formatteddate=dates.map(formatDates);
console.log(formatteddate);
function formatDates(element){
    const parts=element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;

}