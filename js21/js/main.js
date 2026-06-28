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
  /* document.getElementById("view1").style.display = "none";
  const view2 = document.querySelector("#view2");
  const div = view2.querySelector("div");
  const h2 = div.querySelector("h2");
  console.log(view2);

  view2.addEventListener(
    "click",
    (event) => {
      view2.classList.toggle("purple");
      view2.classList.toggle("darkblue");
    },
    false,
  );

  div.addEventListener(
    "click",
    (event) => {
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false,
  );

  h2.addEventListener(
    "click",
    (event) => {
      const myText = event.target.textContent;
      myText === "My 2nd view"
        ? (event.target.textContent = "clicked")
        : (event.target.textContent = "My 2nd view");
    },
    false,
  );

  const nav = document.querySelector("nav");

  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });

  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  }); */
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};
