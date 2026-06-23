// scope
// var, let, const

// we avoid using var (only use in legacy code), use const as much as possible and only use let when u have to reassign a variable
/* var x = 1;
var x = 2;

console.log(x); */

// global scope
var x = 1;
let y = 2;
const z = 3;

// local scope (function scope)
const myFunc = () => {
  const z = 5;

  //local scope (block scope)
  {
    let y = 4;
    console.log(y);
    console.log(z);
  }
};
myFunc();
