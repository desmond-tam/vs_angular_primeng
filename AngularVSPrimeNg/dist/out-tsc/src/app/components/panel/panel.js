var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter, ElementRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, Footer } from '../common/shared';
import { trigger, state, style, transition, animate } from '@angular/animations';
let Panel = class Panel {
    constructor(el) {
        this.el = el;
        this.collapsed = false;
        this.expandIcon = 'fa-plus';
        this.collapseIcon = 'fa-minus';
        this.collapsedChange = new EventEmitter();
        this.onBeforeToggle = new EventEmitter();
        this.onAfterToggle = new EventEmitter();
    }
    toggle(event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.toggleable) {
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
        }
        event.preventDefault();
    }
    expand(event) {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    }
    collapse(event) {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onToggleDone(event) {
        this.animating = false;
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Panel.prototype, "toggleable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Panel.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Panel.prototype, "collapsed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Panel.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Panel.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Panel.prototype, "expandIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Panel.prototype, "collapseIcon", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Panel.prototype, "collapsedChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Panel.prototype, "onBeforeToggle", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Panel.prototype, "onAfterToggle", void 0);
__decorate([
    ContentChild(Footer),
    __metadata("design:type", Object)
], Panel.prototype, "footerFacet", void 0);
Panel = __decorate([
    Component({
        selector: 'p-panel',
        template: `
        <div [ngClass]="'ui-panel ui-widget ui-widget-content ui-corner-all'" [ngStyle]="style" [class]="styleClass">
            <div class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">
                <span class="ui-panel-title" *ngIf="header">{{header}}</span>
                <ng-content select="p-header"></ng-content>
                <a *ngIf="toggleable" class="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" href="#"
                    (click)="toggle($event)">
                    <span [class]="collapsed ? 'fa fa-fw ' + expandIcon : 'fa fa-fw ' + collapseIcon"></span>
                </a>
            </div>
            <div class="ui-panel-content-wrapper" [@panelContent]="collapsed ? 'hidden' : 'visible'" (@panelContent.done)="onToggleDone($event)"
                [ngClass]="{'ui-panel-content-wrapper-overflown': collapsed||animating}">
                <div class="ui-panel-content ui-widget-content">
                    <ng-content></ng-content>
                </div>
                
                <div class="ui-panel-footer ui-widget-content" *ngIf="footerFacet">
                    <ng-content select="p-footer"></ng-content>
                </div>
            </div>
        </div>
    `,
        animations: [
            trigger('panelContent', [
                state('hidden', style({
                    height: '0'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [ElementRef])
], Panel);
export { Panel };
let PanelModule = class PanelModule {
};
PanelModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Panel, SharedModule],
        declarations: [Panel]
    })
], PanelModule);
export { PanelModule };
//# sourceMappingURL=panel.js.map