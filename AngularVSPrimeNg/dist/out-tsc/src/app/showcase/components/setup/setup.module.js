var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let SetupModule = class SetupModule {
};
SetupModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CodeHighlighterModule,
            SetupRoutingModule
        ],
        declarations: [
            SetupComponent
        ]
    })
], SetupModule);
export { SetupModule };
//# sourceMappingURL=setup.module.js.map