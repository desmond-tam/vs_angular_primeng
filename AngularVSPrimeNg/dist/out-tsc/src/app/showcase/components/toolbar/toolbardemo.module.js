var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarDemo } from './toolbardemo';
import { ToolbarDemoRoutingModule } from './toolbardemo-routing.module';
import { ToolbarModule } from '../../../components/toolbar/toolbar';
import { ButtonModule } from '../../../components/button/button';
import { SplitButtonModule } from '../../../components/splitbutton/splitbutton';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let ToolbarDemoModule = class ToolbarDemoModule {
};
ToolbarDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ToolbarDemoRoutingModule,
            ToolbarModule,
            ButtonModule,
            SplitButtonModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            ToolbarDemo
        ]
    })
], ToolbarDemoModule);
export { ToolbarDemoModule };
//# sourceMappingURL=toolbardemo.module.js.map