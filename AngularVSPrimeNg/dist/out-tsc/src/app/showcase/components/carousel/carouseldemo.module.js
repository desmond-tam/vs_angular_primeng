var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselDemo } from './carouseldemo';
import { CarouselDemoRoutingModule } from './carouseldemo-routing.module';
import { CarouselModule } from '../../../components/carousel/carousel';
import { ButtonModule } from '../../../components/button/button';
import { GrowlModule } from '../../../components/growl/growl';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let CarouselDemoModule = class CarouselDemoModule {
};
CarouselDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CarouselDemoRoutingModule,
            CarouselModule,
            ButtonModule,
            GrowlModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            CarouselDemo
        ]
    })
], CarouselDemoModule);
export { CarouselDemoModule };
//# sourceMappingURL=carouseldemo.module.js.map