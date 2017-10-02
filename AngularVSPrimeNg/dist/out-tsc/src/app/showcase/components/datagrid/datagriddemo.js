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
let DataGridDemo = class DataGridDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsLarge().then(cars => this.cars = cars);
    }
    selectCar(car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }
    onDialogHide() {
        this.selectedCar = null;
    }
};
DataGridDemo = __decorate([
    Component({
        templateUrl: './datagriddemo.html'
    }),
    __metadata("design:paramtypes", [CarService])
], DataGridDemo);
export { DataGridDemo };
//# sourceMappingURL=datagriddemo.js.map