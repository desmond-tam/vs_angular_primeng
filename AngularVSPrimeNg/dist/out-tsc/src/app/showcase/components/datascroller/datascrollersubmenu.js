var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let DataScrollerSubMenu = class DataScrollerSubMenu {
};
DataScrollerSubMenu = __decorate([
    Component({
        selector: 'datascroller-demos',
        template: `
        <div id="datatable-submenu" class="content-section SubSubMenu ui-helper-clearfix">
            <ul>
                <li><a [routerLink]="['/datascroller']">&#9679; Window</a></li>
                <li><a [routerLink]="['/datascroller/inline']">&#9679; Inline</a></li>
                <li><a [routerLink]="['/datascroller/loader']">&#9679; Loader</a></li>
                <li><a [routerLink]="['/datascroller/infinite']">&#9679; Infinite</a></li>
            </ul>
        </div>
    `
    })
], DataScrollerSubMenu);
export { DataScrollerSubMenu };
//# sourceMappingURL=datascrollersubmenu.js.map