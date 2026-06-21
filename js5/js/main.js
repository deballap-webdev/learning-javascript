// My First Code Challange

// Write code that will return a random letter from your name

const myName = "Deborah";

console.log(myName.charAt(Math.floor(Math.random()*7)));
console.log(myName.charAt(Math.floor(Math.random()*7)));
console.log(myName.charAt(Math.floor(Math.random()*7)));
console.log(myName.charAt(Math.floor(Math.random()*7)));
console.log(myName.charAt(Math.floor(Math.random()*7)));

//lets make this work for All Names (Reusable code)

console.log(myName.charAt(Math.floor(Math.random()* myName.length)));
console.log(myName.charAt(Math.floor(Math.random()* myName.length)));
console.log(myName.charAt(Math.floor(Math.random()* myName.length)));
console.log(myName.charAt(Math.floor(Math.random()* myName.length)));
console.log(myName.charAt(Math.floor(Math.random()* myName.length)));