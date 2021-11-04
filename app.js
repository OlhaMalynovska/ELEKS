/*2. Add static method to one class, try to call it and investigate output. */


class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed; 
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
        console.log(`I am starting transporting passengers`);
    }

    static showInfo() {
        console.log(`I am a static Car method!`)
    }
}

let car1 = new Car('Ford Fiesta', '2005', 190);
car1.displayInfo();
car1.transportPeople();

Car.showInfo();