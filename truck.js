import {Vehicle} from './vehicle.js';

class Truck extends Vehicle {
    constructor(carModel, carColour, carYear, maxSpeed) {
        super(carModel, carColour, carYear, maxSpeed);
        this.type = "truck";
    }
}

export { Truck };