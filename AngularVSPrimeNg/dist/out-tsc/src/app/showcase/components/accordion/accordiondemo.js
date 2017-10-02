var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let AccordionDemo = class AccordionDemo {
    constructor() {
        this.index = 0;
    }
    onTabClose(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index });
    }
    onTabOpen(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
    }
    openNext() {
        this.index = (this.index === 3) ? 0 : this.index + 1;
    }
    openPrev() {
        this.index = (this.index === 0) ? 3 : this.index - 1;
    }
};
AccordionDemo = __decorate([
    Component({
        templateUrl: './accordiondemo.html'
    })
], AccordionDemo);
export { AccordionDemo };
//# sourceMappingURL=accordiondemo.js.map