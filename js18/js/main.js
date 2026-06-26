//JSON: JavaScript Object Notation
/* JSON is used to send and recieve data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & recieve files in data in many languages, not just in JavaScript*/

const myObj = {
  name: "Debbie",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
