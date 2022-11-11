import './style.css';
import myCoffee from './coffee';

const appDiv: HTMLElement = document.getElementById('app');appDiv.innerHTML = `<h2>Decorator Pattern<h2/>`;

// =============== Decorator Pattern ===============

abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

// -------------------- Cars --------------------

class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
    return 77000;
  }
}

// -------------------- Options --------------------

class EnhanceAutoPilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
  };

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Rear Facing Seats";
  };
  
  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

// -------------------- Build my car! --------------------

let myTesla = new ModelX();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhanceAutoPilot(myTesla);

appDiv.innerHTML += `
  <h4>Car Description: <br/>${myTesla.getDescription()}</h4>
  <h4>Cost: ${myTesla.cost()}</h4>
  <h4>Coffee Description: <br/>${myCoffee.getDescription()}</h4>
  <h4>Cost: ${myCoffee.cost()}</h4>`;