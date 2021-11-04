/*Move classes to separate files and import them into the app using import/export. */

import {Car} from './car.js';
import {Truck} from './truck.js';

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
