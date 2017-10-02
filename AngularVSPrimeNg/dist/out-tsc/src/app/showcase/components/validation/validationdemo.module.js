var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationDemo } from './validationdemo';
import { ValidationDemoRoutingModule } from './validationdemo-routing.module';
import { GrowlModule } from '../../../components/growl/growl';
import { PanelModule } from '../../../components/panel/panel';
import { DropdownModule } from '../../../components/dropdown/dropdown';
import { InputTextModule } from '../../../components/inputtext/inputtext';
import { InputTextareaModule } from '../../../components/inputtextarea/inputtextarea';
import { ButtonModule } from '../../../components/button/button';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
let ValidationDemoModule = class ValidationDemoModule {
};
ValidationDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ValidationDemoRoutingModule,
            GrowlModule,
            PanelModule,
            DropdownModule,
            InputTextModule,
            InputTextareaModule,
            ButtonModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            ValidationDemo
        ]
    })
], ValidationDemoModule);
export { ValidationDemoModule };
//# sourceMappingURL=validationdemo.module.js.map