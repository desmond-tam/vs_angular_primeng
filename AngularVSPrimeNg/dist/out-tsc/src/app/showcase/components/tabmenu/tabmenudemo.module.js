var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuDemo } from './tabmenudemo';
import { TabMenuDemoRoutingModule } from './tabmenudemo-routing.module';
import { TabMenuModule } from '../../../components/tabmenu/tabmenu';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let TabMenuDemoModule = class TabMenuDemoModule {
};
TabMenuDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            TabMenuDemoRoutingModule,
            TabMenuModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            TabMenuDemo
        ]
    })
], TabMenuDemoModule);
export { TabMenuDemoModule };
//# sourceMappingURL=tabmenudemo.module.js.map