"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(value) {
        this._rented = value;
    }
    rent() {
        if (this._rented === true) {
            return "Sorry, this vehicle is already rented.";
        }
        else {
            this._rented = true;
            return "Vehicle rented successfully!";
        }
    }
    return() {
        if (this._rented === true) {
            this._rented = false;
            return "Vehicle returned successfully!";
        }
        else {
            return "This vehicle has not been rented yet.";
        }
    }
}
//   subclasses for each type of vehicle
// Car
class Car extends Vehicle {
    constructor(make, model, year, rented, numDoors, numSeats, dailyRate) {
        super(make, model, year, rented);
        this._numDoors = numDoors;
        this._numSeats = numSeats;
        this._dailyRate = dailyRate;
    }
    rentalRate() {
        return this._dailyRate;
    }
    get numDoors() {
        return this._numDoors;
    }
    get numSeats() {
        return this._numSeats;
    }
}
//  Truck 
class Truck extends Vehicle {
    constructor(make, model, year, rented, cargoCapacity, dailyRate) {
        super(make, model, year, rented);
        this._cargoCapacity = cargoCapacity;
        this._dailyRate = dailyRate;
    }
    rentalRate() {
        return this._dailyRate;
    }
    get cargoCapacity() {
        return this._cargoCapacity;
    }
}
//   motorcycle
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineSize, dailyRate) {
        super(make, model, year, rented);
        this._engineSize = engineSize;
        this._dailyRate = dailyRate;
    }
    rentalRate() {
        return this._dailyRate;
    }
    get engineSize() {
        return this._engineSize;
    }
}
// Testing
const car = new Car("Bugatti", "Chiron", 2023, true, 2, 2, 50);
console.log(car.rent());
console.log(car.rent());
console.log(car.return());
const motorcycle = new Motorcycle("Honda", "125", 2023, false, 70, 5000);
console.log(motorcycle.rent());
console.log(motorcycle.return());
console.log(motorcycle.return());
const truck = new Truck("Mercedes", "F-150", 2023, true, 1500, 100);
console.log(truck.rent());
console.log(truck.return());
//# sourceMappingURL=app.js.map