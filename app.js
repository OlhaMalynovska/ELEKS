/* Override method of father’s class. */

class Vehicle {
    constructor(carModel, carColour, carYear,  maxSpeed) {
        this.model = carModel;
        this.colour = carColour;
        this.year = carYear;
        this.maxSpeed = maxSpeed; 
    }

    displayInfo() {
        console.log(`The ${this.colour} ${this.type} ${this.model} of ${this.year} with maximal speed ${this.maxSpeed} km/h;`);
    }
}

class Car extends Vehicle {
    constructor(carModel, carColour, carYear, maxSpeed) {
        super(carModel, carColour, carYear, maxSpeed);
        this.type = "car";
    }

    
}

class Truck extends Vehicle {
    constructor(carModel, carColour, carYear, maxSpeed) {
        super(carModel, carColour, carYear, maxSpeed);
        this.type = "truck";
    }

   
}

let car1 = new Car('Ford Fiesta', 'red', '2005', '190');
car1.displayInfo();

let car2 = new Car('Renault Traffic', 'yellow', '2010', '180');
car2.displayInfo();

let car3 = new Car('BMW 005', 'blue', '2011', '200');
car3.displayInfo();

let truck1 = new Truck('Mann', 'white', '2004', '120');
truck1.displayInfo();

let truck2 = new Truck('Mercedes','black', '2008', '140');
truck2.displayInfo();

let truck3 = new Truck('Volvo', 'green', '150');
truck3.displayInfo();
