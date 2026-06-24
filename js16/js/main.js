//Objects
// key-value pairs in curly braces
const myObj = { name: "Dave" };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternon: "Iced Tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};
console.log(myObj.name);
console.log(anotherObj["alive"]);
console.log(anotherObj["beverage"]["morning"]);
console.log(anotherObj.alive);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //Inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooosh!";
};

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);

tesla.engine = function () {
  return "Shhhh...";
};

console.log(tesla.engine());

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

console.log(Object.keys(band));
console.log(Object.values(band));
console.log(Object.keys(vehicle));
console.log(Object.values(vehicle));


