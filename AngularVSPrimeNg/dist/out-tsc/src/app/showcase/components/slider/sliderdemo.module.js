var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderDemo } from './sliderdemo';
import { SliderDemoRoutingModule } from './sliderdemo-routing.module';
import { SliderModule } from '../../../components/slider/slider';
import { InputTextModule } from '../../../components/inputtext/inputtext';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let SliderDemoModule = class SliderDemoModule {
};
SliderDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            SliderDemoRoutingModule,
            SliderModule,
            InputTextModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            SliderDemo
        ]
    })
], SliderDemoModule);
export { SliderDemoModule };
//# sourceMappingURL=sliderdemo.module.js.map