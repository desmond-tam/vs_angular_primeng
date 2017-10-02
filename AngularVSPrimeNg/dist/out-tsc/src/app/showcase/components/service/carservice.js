var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
let CarService = class CarService {
    constructor(http) {
        this.http = http;
    }
    getCarsSmall() {
        return this.http.get('showcase/resources/data/cars-small.json')
            .toPromise()
            .then(res => res.json().data)
            .then(data => { return data; });
    }
    getCarsMedium() {
        return this.http.get('showcase/resources/data/cars-medium.json')
            .toPromise()
            .then(res => res.json().data)
            .then(data => { return data; });
    }
    getCarsLarge() {
        return this.http.get('showcase/resources/data/cars-large.json')
            .toPromise()
            .then(res => res.json().data)
            .then(data => { return data; });
    }
};
CarService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], CarService);
export { CarService };
//# sourceMappingURL=carservice.js.map