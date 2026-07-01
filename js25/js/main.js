// Fetch API requires a discussion of..
// Callbacks, Promises, Thenabies, and Aynsc/Await

//Callbacks

function firstFunction(parameters, callback) {
  //do something
  callback();
}

// AKA "callback hell"
firstFunction(para, function () {
  // do stuff
  secondFunction(para, function () {
    thirdFunction(para, function () {});
  });
});
