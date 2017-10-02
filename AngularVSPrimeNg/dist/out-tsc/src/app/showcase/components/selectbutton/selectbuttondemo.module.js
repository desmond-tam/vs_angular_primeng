var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonDemo } from './selectbuttondemo';
import { SelectButtonDemoRoutingModule } from './selectbuttondemo-routing.module';
import { SelectButtonModule } from '../../../components/selectbutton/selectbutton';
import { ButtonModule } from '../../../components/button/button';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let SelectButtonDemoModule = class SelectButtonDemoModule {
};
SelectButtonDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            SelectButtonDemoRoutingModule,
            FormsModule,
            SelectButtonModule,
            ButtonModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            SelectButtonDemo
        ]
    })
], SelectButtonDemoModule);
export { SelectButtonDemoModule };
//# sourceMappingURL=selectbuttondemo.module.js.map