// Primitive

// 7 catogries : string, number, boolean, null, undefined, symbol, BigInt, 

const Score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id===anotherId);

// const bigNumber = 3487357984659784658465n



// Reference (non primitive)

// Array, Objects, Functions

const heros = ["ironman", "batman", "sheerrr"]
{
    name: "rahul"
    age: 21
}

const myFunction = function(){
    console.log("hello world");
    
}


console.log(typeof anotherId);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap(non primitive)

let myYoutubename = "rahulllll43"


let anothername = myYoutubename
anothername = "rraahhuull43"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user123",
    upi: '3216655'
}

let userTwo = userOne

userTwo.email = "kkkk@123"

console.log(userOne.email);
console.log(userTwo.email);