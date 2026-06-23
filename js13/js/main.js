// scope
// var, let, const

// we avoid using var (only use in legacy code), use const as much as possible and only use let when u have to reassign a variable
/* var x = 1;
var x = 2;

console.log(x); */

// global scope
//var x = 1;
//let y = 2;
//const z = 3;

// local scope (function scope)
//const myFunc = () => {
//local scope (block scope){let y = 4;console.log(y);console.log(z);}};myFunc();}
// const z = 5; }}

// global scope
var x = 1; //function scoped
let y = 2; // block scoped
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

const myFunc = function () {
  var x = 10;
  const z = 5;

  {
    var x = 11; //function scoped
    const z = 6; //block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }

  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
};

myFunc();
