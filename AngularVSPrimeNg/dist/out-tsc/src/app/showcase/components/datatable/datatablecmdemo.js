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
let DataTableCMDemo = class DataTableCMDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.items = [
            { label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar) },
            { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar) }
        ];
    }
    viewCar(car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
    }
    deleteCar(car) {
        let index = -1;
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin == car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
    }
};
DataTableCMDemo = __decorate([
    Component({
        templateUrl: './datatablecmdemo.html'
    }),
    __metadata("design:paramtypes", [CarService])
], DataTableCMDemo);
export { DataTableCMDemo };
//# sourceMappingURL=datatablecmdemo.js.map