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
let DragDropDemo = class DragDropDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.selectedCars = [];
        this.carService.getCarsSmall().then(cars => this.availableCars = cars);
    }
    dragStart(event, car) {
        this.draggedCar = car;
    }
    drop(event) {
        if (this.draggedCar) {
            let draggedCarIndex = this.findIndex(this.draggedCar);
            this.selectedCars = [...this.selectedCars, this.draggedCar];
            this.availableCars = this.availableCars.filter((val, i) => i != draggedCarIndex);
            this.draggedCar = null;
        }
    }
    dragEnd(event) {
        this.draggedCar = null;
    }
    findIndex(car) {
        let index = -1;
        for (let i = 0; i < this.availableCars.length; i++) {
            if (car.vin === this.availableCars[i].vin) {
                index = i;
                break;
            }
        }
        return index;
    }
};
DragDropDemo = __decorate([
    Component({
        templateUrl: './dragdropdemo.html',
        styles: [`
        .ui-grid li {
            list-style-type: none;
            padding: 10px;
            margin-bottom: 5px;
        }
    `]
    }),
    __metadata("design:paramtypes", [CarService])
], DragDropDemo);
export { DragDropDemo };
//# sourceMappingURL=dragdropdemo.js.map