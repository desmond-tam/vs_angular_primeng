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
let DataTableLazyDemo = class DataTableLazyDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        //datasource imitation
        this.carService.getCarsLarge().then(cars => {
            this.datasource = cars;
            this.totalRecords = this.datasource.length;
            this.cars = this.datasource.slice(0, 10);
        });
    }
    loadCarsLazy(event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(() => {
            if (this.datasource) {
                this.cars = this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }
};
DataTableLazyDemo = __decorate([
    Component({
        templateUrl: './datatablelazydemo.html',
    }),
    __metadata("design:paramtypes", [CarService])
], DataTableLazyDemo);
export { DataTableLazyDemo };
//# sourceMappingURL=datatablelazydemo.js.map