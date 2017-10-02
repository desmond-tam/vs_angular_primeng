var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let BlockUIDemo = class BlockUIDemo {
    constructor() {
        this.blockedPanel = false;
        this.blockedDocument = false;
    }
    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }
};
BlockUIDemo = __decorate([
    Component({
        templateUrl: './blockuidemo.html'
    })
], BlockUIDemo);
export { BlockUIDemo };
//# sourceMappingURL=blockuidemo.js.map