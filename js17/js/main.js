// Javascript Classes
class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(topping) {
    this.toppings.push(topping);
  }

  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust pizza. with these toppings : ${this.toppings}`,
    );
  }
}

const myPizza = new Pizza("pepperoni", "large");
myPizza.setCrust("thick");
myPizza.setToppings("sausage");
myPizza.setToppings("olives");

myPizza.bake();

console.log(myPizza["size"]);
console.log(myPizza.getCrust());
console.log(myPizza.getToppings());
