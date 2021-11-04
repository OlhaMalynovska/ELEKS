/*1.Replicate code from slide 11, create instances of car and truck. Try to call
different methods for both, investigate output using console.log(). */

class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed =maxSpeed; 
    }

    displayInfo() {
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);
    }
}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`Car ${this.model} starting transporting passengers`);
    }
}

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer() {
        console.log(`Truck ${this.model} starting transporting heavy container`); 
    }

}

let car1 = new Car('Ford Fiesta', '2005', 190);
car1.transportPeople();

let car2 = new Car('Renault Traffic', '2010', 180);
car2.transportPeople();

let car3 = new Car('BMW 005', '2011', 200);
car3.transportPeople();

let truck1 = new Truck('Mann', '2003', 120);
truck1.transportContainer();

let truck2 = new Truck('Mercedes', '2008', 140);
truck2.transportContainer();

let truck3 = new Truck('Volvo', '2003', 140);
truck3.transportContainer();


