var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let CheckboxDemo = class CheckboxDemo {
    constructor() {
        this.selectedCities = [];
        this.selectedCategories = ['Technology', 'Sports'];
        this.checked = false;
    }
};
CheckboxDemo = __decorate([
    Component({
        templateUrl: './checkboxdemo.html',
        styles: [`
        .ui-grid .ui-grid-col-1,
        .ui-grid .ui-grid-col-11 {
            padding: 4px 10px;
        }

        .ui-grid label {
            display: block;
            margin: 2px 0 0 4px;
        }
    `]
    })
], CheckboxDemo);
export { CheckboxDemo };
//# sourceMappingURL=checkboxdemo.js.map