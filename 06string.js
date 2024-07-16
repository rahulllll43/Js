const name = "rahul"
const repoCount = 50

// console.log(name + repoCount +" Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('rahul-ll-2255')


// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "      rahul     "
console.log(newStringOne.trim()); 

const url = "http://rahul.com/rahul%20kumar"

url.replace('%20', '-')
console.log(url.replace('%20', '-'));

url.includes('rahul')
console.log(url.includes('rahul'));

console.log(gameName.split('-'));