var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeDemo } from './treedemo';
import { TreeDemoRoutingModule } from './treedemo-routing.module';
import { TreeModule } from '../../../components/tree/tree';
import { GrowlModule } from '../../../components/growl/growl';
import { ButtonModule } from '../../../components/button/button';
import { ContextMenuModule } from '../../../components/contextmenu/contextmenu';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let TreeDemoModule = class TreeDemoModule {
};
TreeDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            TreeDemoRoutingModule,
            TreeModule,
            GrowlModule,
            ButtonModule,
            ContextMenuModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            TreeDemo
        ]
    })
], TreeDemoModule);
export { TreeDemoModule };
//# sourceMappingURL=treedemo.module.js.map