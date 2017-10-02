var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListDemo } from './datalistdemo';
import { DataListDemoRoutingModule } from './datalistdemo-routing.module';
import { DataListModule } from '../../../components/datalist/datalist';
import { DialogModule } from '../../../components/dialog/dialog';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let DataListDemoModule = class DataListDemoModule {
};
DataListDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            DataListDemoRoutingModule,
            DataListModule,
            DialogModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            DataListDemo
        ]
    })
], DataListDemoModule);
export { DataListDemoModule };
//# sourceMappingURL=datalistdemo.module.js.map