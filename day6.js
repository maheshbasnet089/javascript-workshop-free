
// // loop in javascript 
// let days = ["Sun","Mon","Tues","Wed"]

// // for loop, while, do while, for of, .....
// // for(let day of days){
// //     console.log(day)
// // }

// let datas = [
//     {
//         name : "Nepal", 
//         region : "Asia"
//     },
//     {
//         name : "Australlia", 
//         region : "Australlia"
//     }
// ]

// for(let data of datas ){
//     console.log(data.region)
// }

// let names = ["Manish","Anish","Ish"]
// // output --. My name is Manish, My name is Anish, My name is Ish
// for(let name of names){
//     // console.log("My name is " + name)
//     console.log(`My name is ${name}`)
// }

// let informations = [
//     {
//         name : "Manish", 
//         age : 22
//     }, 
//     {
//         name : "Anish", 
//         age : 20
//     }
// ]
// for(let information of informations){
//     console.log(information.name + " age is " + information.age)
// }
// Manish age is 22 , Anish age is 20

// function in javascript 

// console.log(1+2)
// console.log(2+3)
// console.log(5+6)

// regular function 
// function addTwoNumber(a,b,c=3){
//     console.log(a+b+c)
// }

// addTwoNumber(1,2,10)

// arrow function 
let addTwoNumber = (a,b,c=3)=>{
    console.log(a+b+c)
}
addTwoNumber(1,2,10)
addTwoNumber(2,2,2)

let informations = [
        {
            name : "Manish", 
            age : 22
        }, 
        {
            name : "Anish", 
            age : 20
        }
    ]

// make a function name printInformation that accepts an informations array in parameter, which prints My name is Manish and age is 22, My name is Anish and age is 20 

function printInformation(haha){
    for(let information of haha){
        console.log(information.name + " age is " + information.age)
    }
}
// let printInformation = ()=>{

// }

printInformation(informations)
// higher order function in javascript 

// let days = ["Sun","Mon","Tues","Wed"]
// function printDays(day){
//     for(let days of day ){
//         console.log("Today is " + day)
//     }
// }
// printDays(days)
// output --> printDays(days) --> Today is Sun, Today is Mon, Today is Tues...
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const printDay = (day) => {
    console.log(`Today is ${day}`);
}
for (let day of days) {
    printDay(day);
}