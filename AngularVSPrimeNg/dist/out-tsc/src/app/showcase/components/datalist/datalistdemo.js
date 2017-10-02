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
let DataListDemo = class DataListDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsLarge().then(cars => this.cars = cars);
    }
};
DataListDemo = __decorate([
    Component({
        templateUrl: './datalistdemo.html',
        styles: [`
        .car-item {
            padding: 1.5em;
            border-bottom: 1px solid #d9d9d9;
        }
                
        .ui-g > div {
            padding: .4em;
        }
        
        .ui-g .ui-g-10 {
            font-weight: bold;
        }
        
        @media (max-width: 40em) {
            .car-details {
                text-align:center;
            }
        }
    `]
    }),
    __metadata("design:paramtypes", [CarService])
], DataListDemo);
export { DataListDemo };
//# sourceMappingURL=datalistdemo.js.map