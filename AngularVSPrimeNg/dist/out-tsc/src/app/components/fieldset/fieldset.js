var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared';
let Fieldset = class Fieldset {
    constructor(el) {
        this.el = el;
        this.collapsed = false;
        this.onBeforeToggle = new EventEmitter();
        this.onAfterToggle = new EventEmitter();
    }
    toggle(event) {
        if (this.toggleable) {
            if (this.animating) {
                return false;
            }
            this.animating = true;
            this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
            this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        }
    }
    expand(event) {
        this.collapsed = false;
    }
    collapse(event) {
        this.collapsed = true;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onToggleDone(event) {
        this.animating = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], Fieldset.prototype, "legend", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Fieldset.prototype, "toggleable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Fieldset.prototype, "collapsed", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Fieldset.prototype, "onBeforeToggle", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Fieldset.prototype, "onAfterToggle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Fieldset.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Fieldset.prototype, "styleClass", void 0);
Fieldset = __decorate([
    Component({
        selector: 'p-fieldset',
        template: `
        <fieldset [ngClass]="{'ui-fieldset ui-widget ui-widget-content ui-corner-all': true, 'ui-fieldset-toggleable': toggleable}" [ngStyle]="style" [class]="styleClass">
            <legend class="ui-fieldset-legend ui-corner-all ui-state-default ui-unselectable-text" (click)="toggle($event)">
                <span *ngIf="toggleable" class="ui-fieldset-toggler fa fa-w" [ngClass]="{'fa-minus': !collapsed,'fa-plus':collapsed}"></span>
                {{legend}}
                <ng-content select="p-header"></ng-content>
            </legend>
            <div class="ui-fieldset-content-wrapper" [@fieldsetContent]="collapsed ? 'hidden' : 'visible'" 
                        [ngClass]="{'ui-fieldset-content-wrapper-overflown': collapsed||animating}"
                         (@fieldsetContent.done)="onToggleDone($event)">
                <div class="ui-fieldset-content">
                    <ng-content></ng-content>
                </div>
            </div>
        </fieldset>
    `,
        animations: [
            trigger('fieldsetContent', [
                state('hidden', style({
                    height: '0px'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [ElementRef])
], Fieldset);
export { Fieldset };
let FieldsetModule = class FieldsetModule {
};
FieldsetModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Fieldset, SharedModule],
        declarations: [Fieldset]
    })
], FieldsetModule);
export { FieldsetModule };
//# sourceMappingURL=fieldset.js.map