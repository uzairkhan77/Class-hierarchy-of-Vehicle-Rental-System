abstract class Vehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
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
  
    set rented(value: boolean) {
      this._rented = value;
    }
  
    abstract rentalRate(): number;
  
    rent(): string {
      if (this._rented===true) {
        return "Sorry, this vehicle is already rented.";
      } else {
        this._rented = true;
        return "Vehicle rented successfully!";
      }
    }
  
    return(): string {
      if (this._rented===true) {
        this._rented = false;
        return "Vehicle returned successfully!";
      } else {
        return "This vehicle has not been rented yet.";
      }
    }
  }
//   subclasses for each type of vehicle

// Car
  class Car extends Vehicle {
    private _numDoors: number;
    private _numSeats: number;
    private _dailyRate: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, numDoors: number, numSeats: number, dailyRate: number) {
      super(make, model, year, rented);
      this._numDoors = numDoors;
      this._numSeats = numSeats;
      this._dailyRate = dailyRate;
    }
  
    rentalRate(): number {
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
    private _cargoCapacity: number;
    private _dailyRate: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, cargoCapacity: number, dailyRate: number) {
      super(make, model, year, rented);
      this._cargoCapacity = cargoCapacity;
      this._dailyRate = dailyRate;
    }
  
    rentalRate(): number {
      return this._dailyRate;
    }
  
    get cargoCapacity() {
      return this._cargoCapacity;
    }
  }
  
//   motorcycle
  class Motorcycle extends Vehicle {
    private _engineSize: number;
    private _dailyRate: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number, dailyRate: number) {
      super(make, model, year, rented);
      this._engineSize = engineSize;
      this._dailyRate = dailyRate;
    }
  
    rentalRate(): number {
      return this._dailyRate;
    }
  
    get engineSize() {
      return this._engineSize;
    }
  }
  
  // Testing
  const car = new Car("Bugatti", "Chiron", 2023, true, 2, 2
  , 50);
  console.log(car.rent()); 
  console.log(car.rent()); 
  console.log(car.return()); 

  const motorcycle = new Motorcycle("Honda","125",2023,false,70,5000)
  console.log(motorcycle.rent())
  console.log(motorcycle.return())
  console.log(motorcycle.return())
  
  const truck = new Truck("Mercedes", "F-150", 2023, true, 1500, 100);
  console.log(truck.rent());
  console.log(truck.return()); 
  