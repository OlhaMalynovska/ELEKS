import {Vehicle} from './vehicle.js';

class Car extends Vehicle {
    constructor(carModel, carColour, carYear, maxSpeed) {
        super(carModel, carColour, carYear, maxSpeed);
        this.type = "car";
    }
}

export { Car };