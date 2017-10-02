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
let DataTableRowGroupDemo = class DataTableRowGroupDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars1 = cars);
        this.carService.getCarsMedium().then(cars => this.cars2 = cars);
        this.carService.getCarsMedium().then(cars => this.cars3 = cars);
    }
    calculateGroupTotal(brand) {
        let total = 0;
        if (this.cars1) {
            for (let car of this.cars1) {
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }
        return total;
    }
};
DataTableRowGroupDemo = __decorate([
    Component({
        templateUrl: './datatablerowgroupdemo.html'
    }),
    __metadata("design:paramtypes", [CarService])
], DataTableRowGroupDemo);
export { DataTableRowGroupDemo };
//# sourceMappingURL=datatablerowgroupdemo.js.map