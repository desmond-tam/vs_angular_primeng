var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let SplitButtonDemo = class SplitButtonDemo {
    constructor() {
        this.msgs = [];
    }
    ngOnInit() {
        this.items = [
            { label: 'Update', icon: 'fa-refresh', command: () => {
                    this.update();
                } },
            { label: 'Delete', icon: 'fa-close', command: () => {
                    this.delete();
                } },
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    }
    save() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    }
    update() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    }
    delete() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    }
};
SplitButtonDemo = __decorate([
    Component({
        templateUrl: './splitbuttondemo.html'
    })
], SplitButtonDemo);
export { SplitButtonDemo };
//# sourceMappingURL=splitbuttondemo.js.map