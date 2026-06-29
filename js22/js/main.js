// Web Storage API

// Not part of the DOM -refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied:

/* window.alert("hello");
alert("hello");
alert(window.location);
alert(location); */

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const myObject = {
    name: "Debbie",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
      console.log(this.name);
    },
  };

  const myArray = ["eat", "sleep", "code"];

  /* sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
sessionStorage.setItem("newSessionStore", JSON.stringify(myObject));
const newSessionData = JSON.parse(sessionStorage.getItem("newSessionStore"));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);
console.log(newSessionData); */

  localStorage.setItem("myLocalStore", JSON.stringify(myArray));
  // localStorage.removeItem("myLocalStore");
  //localStorage.clear();
  const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
  const storeLength = localStorage.length;

  /* localStorage.setItem("newLocalStore", JSON.stringify(myObject));
const newLocalData = JSON.parse(localStorage.getItem("newLocalStore")); */
  console.log(myLocalData);
  console.log(storeLength);
};
// console.log(newLocalData);
