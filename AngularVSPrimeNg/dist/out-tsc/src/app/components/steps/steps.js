var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
let Steps = class Steps {
    constructor() {
        this.activeIndex = 0;
        this.readonly = true;
        this.activeIndexChange = new EventEmitter();
    }
    itemClick(event, item, i) {
        if (this.readonly || item.disabled) {
            event.preventDefault();
            return;
        }
        this.activeIndexChange.emit(i);
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
                index: i
            });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], Steps.prototype, "activeIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], Steps.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Steps.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Steps.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Steps.prototype, "styleClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Steps.prototype, "activeIndexChange", void 0);
Steps = __decorate([
    Component({
        selector: 'p-steps',
        template: `
        <div [ngClass]="{'ui-steps ui-widget ui-helper-clearfix':true,'ui-steps-readonly':readonly}" [ngStyle]="style" [class]="styleClass">
            <ul role="tablist">
                <li *ngFor="let item of model; let i = index" class="ui-steps-item" #menuitem
                    [ngClass]="{'ui-state-highlight':(i === activeIndex),'ui-state-default':(i !== activeIndex),
                        'ui-state-disabled':item.disabled||(i !== activeIndex && readonly)}">
                    <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link" (click)="itemClick($event, item, i)" [attr.target]="item.target">
                        <span class="ui-steps-number">{{i + 1}}</span>
                        <span class="ui-steps-title">{{item.label}}</span>
                    </a>
                    <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [routerLinkActive]="'ui-state-active'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link" (click)="itemClick($event, item, i)" [attr.target]="item.target">
                        <span class="ui-steps-number">{{i + 1}}</span>
                        <span class="ui-steps-title">{{item.label}}</span>
                    </a>
                </li>
            </ul>
        </div>
    `
    })
], Steps);
export { Steps };
let StepsModule = class StepsModule {
};
StepsModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [Steps, RouterModule],
        declarations: [Steps]
    })
], StepsModule);
export { StepsModule };
//# sourceMappingURL=steps.js.map