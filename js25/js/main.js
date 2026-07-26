// Fetch API requires a discussion of..
// Callbacks, Promises, Thenables, and Aynsc/Await

//Callbacks
/* 
function furstFunc(pareamenter, callback){
 // dostuff
  callback()
}
 */
//AKA 'callback hell"
/*
firstFunction(parameter, function(){
  // do stuff
  secondFunction(parameter, function(){
    thirdFucntion(parameter, function(){

    })
  })
})
*/
//Promises

/* 
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes!, resolved the promise");
  } else {
    reject("No!, rejected the promise");
  }
});

console.log(myPromise);

myPromise
  .then((value) => value + 1)
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });
 

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved");
  }, 3000);
});
myNextPromise.then((value) => console.log(value));

myPromise.then((value) => console.log(value));
*/
/* 
const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });
console.log(users);
 */

// Async / Await

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();
  return userData;
};
