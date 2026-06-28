// Syntax: addEventListner("click", function, useCapture)
/* 
const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "Clicked";
});
 */

document.addEventListener("readystatechange", (evt) => {
  if (evt.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  document.getElementById("view1").style.display = "none";
  const view2 = document.querySelector(".view2");
  const div = view2.querySelector("div");
  const h2 = div.querySelector("h2");
  console.log(view2);

  view2.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor = "purple";
    },
    false,
  );

  div.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor = "blue";
    },
    false,
  );

  h2.addEventListener(
    "click",
    (event) => {
      event.target.textContent = "clicked";
    },
    false,
  );
};
