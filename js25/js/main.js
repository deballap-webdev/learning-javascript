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
/* const myUsers = {
  userList: [],
};
const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();
  return userData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);
 */

// More Examples
//workflow Function
/* const getUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map((user) => user.email);
  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getUserEmails(); */

//2nd parameter of fetch
//Using "GET" method
/* const getDakeJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData);
};

getDakeJoke(); */

//Using "POST" method
/* 
const jokeObject = {
  id: "JmGtkyIJeqc",
  joke: "So a duck walks into a pharmacy and says “Give me some chap-stick… and put it on my bill”",
};

const postObject = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse.headers);
};

postObject(jokeObject);
 */
/* 
const requestJoke = async (name) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?name=${name}&category=dev`,
  );
  const jsonResponse = await response.json();
  console.log(jsonResponse.value);
};

requestJoke("Daniel Moris");
 */
//Abstract Into Function

const getDataFromForm = () => {
  const requestObject = { name: "Bruce Lee", category: "dev" };
  return requestObject;
};

const buildRequestUrl = (requestData) => {
  const url = `https://api.chucknorris.io/jokes/random?name=${requestData.name}&category=${requestData.category}`;
  return url;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

requestJoke(buildRequestUrl(getDataFromForm()));

//Procedural

const processJokeRequest = () => {
  const requestData = getDataFromForm();
  const url = buildRequestUrl(requestData);
  requestJoke(url);
};
