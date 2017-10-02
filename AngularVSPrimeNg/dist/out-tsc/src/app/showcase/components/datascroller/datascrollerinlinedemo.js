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
let DataScrollerInlineDemo = class DataScrollerInlineDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);
    }
    selectCar(car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }
    onDialogHide() {
        this.selectedCar = null;
    }
};
DataScrollerInlineDemo = __decorate([
    Component({
        templateUrl: './datascrollerinlinedemo.html',
        styles: [`
        .ui-grid-row > div {
            padding: 4px 10px;
            font-size: 20px;
        }
        
        .ui-grid-row .ui-grid-row > div:last-child {
            font-weight: bold;
        }
    `]
    }),
    __metadata("design:paramtypes", [CarService])
], DataScrollerInlineDemo);
export { DataScrollerInlineDemo };
//# sourceMappingURL=datascrollerinlinedemo.js.map