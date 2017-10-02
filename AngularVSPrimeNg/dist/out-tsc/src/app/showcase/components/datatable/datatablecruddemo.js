var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CarService } from '../../service/carservice';
let DataTableCrudDemo = class DataTableCrudDemo {
    constructor(carService) {
        this.carService = carService;
        this.car = new PrimeCar();
    }
    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    save() {
        let cars = [...this.cars];
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    delete() {
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    cloneCar(c) {
        let car = new PrimeCar();
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    findSelectedCarIndex() {
        return this.cars.indexOf(this.selectedCar);
    }
};
DataTableCrudDemo = __decorate([
    Component({
        templateUrl: './datatablecruddemo.html',
        styles: [`
        .ui-grid-row div {
          padding: 4px 10px
        }
        
        .ui-grid-row div label {
          font-weight: bold;
        }
  `]
    }),
    __metadata("design:paramtypes", [CarService])
], DataTableCrudDemo);
export { DataTableCrudDemo };
class PrimeCar {
    constructor(vin, year, brand, color) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
}
//# sourceMappingURL=datatablecruddemo.js.map