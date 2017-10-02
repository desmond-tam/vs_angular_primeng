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
let DataScrollerInfiniteDemo = class DataScrollerInfiniteDemo {
    constructor(carService) {
        this.carService = carService;
        this.msgs = [];
    }
    loadData(event) {
        //initialize
        if (!this.cars) {
            this.carService.getCarsSmall().then(cars => this.cars = cars);
        }
        else {
            let newArray = this.cars.slice(0);
            for (let i = 0; i < newArray.length; i++) {
                this.cars.push(newArray[i]);
            }
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Data Loaded', detail: 'Between ' + event.first + ' and ' + (event.first + event.rows) });
        }
    }
};
DataScrollerInfiniteDemo = __decorate([
    Component({
        templateUrl: './datascrollerinfinitedemo.html',
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
], DataScrollerInfiniteDemo);
export { DataScrollerInfiniteDemo };
//# sourceMappingURL=datascrollerinfinitedemo.js.map