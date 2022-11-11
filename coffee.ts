abstract class Coffee {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

abstract class CoffeeOptions extends Coffee {
  decoratedCoffee: Coffee;
  public abstract getDescription(): string;
  public abstract cost(): number;

}

// -------------------- Beverages --------------------

class Cappuccino extends Coffee {
  public description: string = "Cappuccino";

   public cost(): number {
     return 0.99
  }
}

class Mocha extends Coffee {
  public description: string = "Mocha";

   public cost(): number {
     return 1.99
  }
}

// -------------------- Condiments --------------------

class Sugar extends CoffeeOptions {
  decoratedCoffee: Coffee;

  constructor(coffee: Coffee) {
    super();
    this.decoratedCoffee = coffee;
  }

  public getDescription(): string {
    return this.decoratedCoffee.getDescription() + ", Sugar";
  }

  public cost(): number {
    return this.decoratedCoffee.cost() + .20;
  }
}

class WhippedCream extends CoffeeOptions {
  decoratedCoffee: Coffee;

  constructor(coffee: Coffee) {
    super();
    this.decoratedCoffee = coffee;
  }

  public getDescription(): string {
    return this.decoratedCoffee.getDescription() + ", Whipped Cream";
  }

  public cost(): number {
    return this.decoratedCoffee.cost() + .50;
  }
}

// -------------------- Make my coffee! --------------------

let myCoffee = new Mocha();
myCoffee = new Sugar(myCoffee);
myCoffee = new Sugar(myCoffee);
myCoffee = new WhippedCream(myCoffee);
console.log(myCoffee.getDescription());
console.log(myCoffee.cost());

export default myCoffee;