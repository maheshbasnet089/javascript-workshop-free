// // property(length), array methods (slice,splice,split)

// let nums = [1,2,3,4,5,6,7,8]
// // console.log(nums.length)

// // methods -- nums.pop(), nums.length, nums.push
// // slice 

// let slicedNumbers = nums.slice(2,7)
// console.log(slicedNumbers)

// let days = ["Sun","Mon","Tue","Wednes","Thurs"]
// let slicedDays = days.slice(days.indexOf("Mon"),days.indexOf("Thurs"))
// console.log(slicedDays)

// let evenNums = [2,4,6,8,10]
// let slicedEvenNums = evenNums.slice(3,5)
// console.log(slicedEvenNums)
// console.log(evenNums)
// output --> [8,10]

// splice 
// let data = [1,2,3,4,5,6]
// // output --> [1,"hello","bye","world",5,6]
// data.splice(1,3,"hello","bye","world")
// console.log(data)
// // data.splice(1,1,"Manish")
// // console.log(data)

// let characters = ['m','a','n','i','s','h']
// characters.splice(0,characters.length,13,1,14,9,19,8)
// console.log(characters)

// output --> [13,1,14,9,19,8]
// a b c d e f g h i j k l m n o

// split 
let message = "i am from itahari"
let splittedMessage = message.split(" ")
console.log(splittedMessage)

let text = "i,am,from,nepal"
let splittedText = text.split(",")
console.log(splittedText)
// output --> ["i","am","from","nepal"]




