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
let DataTableScrollDemo = class DataTableScrollDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);
        this.frozenCars = [
            { "brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23" },
            { "brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23" }
        ];
        this.totalRecords = 250000;
    }
    loadCarsLazy(event) {
        //for demo purposes keep loading the same dataset 
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
        setTimeout(() => {
            this.carsLarge = [
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
            ];
        }, 250);
    }
};
DataTableScrollDemo = __decorate([
    Component({
        templateUrl: './datatablescrolldemo.html',
    }),
    __metadata("design:paramtypes", [CarService])
], DataTableScrollDemo);
export { DataTableScrollDemo };
//# sourceMappingURL=datatablescrolldemo.js.map