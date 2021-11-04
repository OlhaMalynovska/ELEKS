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

export { Vehicle };