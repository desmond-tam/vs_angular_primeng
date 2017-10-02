var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarDemo } from './menubardemo';
import { MenubarDemoRoutingModule } from './menubardemo-routing.module';
import { MenubarModule } from '../../../components/menubar/menubar';
import { InputTextModule } from '../../../components/inputtext/inputtext';
import { ButtonModule } from '../../../components/button/button';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let MenubarDemoModule = class MenubarDemoModule {
};
MenubarDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MenubarDemoRoutingModule,
            MenubarModule,
            InputTextModule,
            ButtonModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            MenubarDemo
        ]
    })
], MenubarDemoModule);
export { MenubarDemoModule };
//# sourceMappingURL=menubardemo.module.js.map