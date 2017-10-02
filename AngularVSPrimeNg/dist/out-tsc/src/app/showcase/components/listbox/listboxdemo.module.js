var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListboxDemo } from './listboxdemo';
import { ListboxDemoRoutingModule } from './listboxdemo-routing.module';
import { ListboxModule } from '../../../components/listbox/listbox';
import { ButtonModule } from '../../../components/button/button';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let ListboxDemoModule = class ListboxDemoModule {
};
ListboxDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ListboxDemoRoutingModule,
            ListboxModule,
            ButtonModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            ListboxDemo
        ]
    })
], ListboxDemoModule);
export { ListboxDemoModule };
//# sourceMappingURL=listboxdemo.module.js.map