var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Header } from '../common/shared';
let Accordion = class Accordion {
    constructor(el) {
        this.el = el;
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.tabs = [];
    }
    addTab(tab) {
        this.tabs.push(tab);
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    get activeIndex() {
        return this._activeIndex;
    }
    set activeIndex(val) {
        this._activeIndex = val;
        if (this.tabs && this.tabs.length && this._activeIndex != null) {
            for (let i = 0; i < this.tabs.length; i++) {
                let selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
                let changed = selected !== this.tabs[i].selected;
                if (changed) {
                    this.tabs[i].animating = true;
                }
                this.tabs[i].selected = selected;
                this.tabs[i].selectedChange.emit(selected);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Accordion.prototype, "multiple", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Accordion.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Accordion.prototype, "onOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Accordion.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Accordion.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Accordion.prototype, "lazy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Accordion.prototype, "activeIndex", null);
Accordion = __decorate([
    Component({
        selector: 'p-accordion',
        template: `
        <div [ngClass]="'ui-accordion ui-widget ui-helper-reset'" [ngStyle]="style" [class]="styleClass">
            <ng-content></ng-content>
        </div>
    `,
    }),
    __metadata("design:paramtypes", [ElementRef])
], Accordion);
export { Accordion };
let AccordionTab = class AccordionTab {
    constructor(accordion) {
        this.accordion = accordion;
        this.selectedChange = new EventEmitter();
        this.accordion.addTab(this);
    }
    toggle(event) {
        if (this.disabled || this.animating) {
            return false;
        }
        this.animating = true;
        let index = this.findTabIndex();
        if (this.selected) {
            this.selected = false;
            this.accordion.onClose.emit({ originalEvent: event, index: index });
        }
        else {
            if (!this.accordion.multiple) {
                for (var i = 0; i < this.accordion.tabs.length; i++) {
                    this.accordion.tabs[i].selected = false;
                    this.accordion.tabs[i].selectedChange.emit(false);
                }
            }
            this.selected = true;
            this.accordion.onOpen.emit({ originalEvent: event, index: index });
        }
        this.selectedChange.emit(this.selected);
        event.preventDefault();
    }
    findTabIndex() {
        let index = -1;
        for (var i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    }
    get lazy() {
        return this.accordion.lazy;
    }
    get hasHeaderFacet() {
        return this.headerFacet && this.headerFacet.length > 0;
    }
    onToggleDone(event) {
        this.animating = false;
    }
    ngOnDestroy() {
        this.accordion.tabs.splice(this.findTabIndex(), 1);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], AccordionTab.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AccordionTab.prototype, "selected", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AccordionTab.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AccordionTab.prototype, "selectedChange", void 0);
__decorate([
    ContentChildren(Header),
    __metadata("design:type", QueryList)
], AccordionTab.prototype, "headerFacet", void 0);
AccordionTab = __decorate([
    Component({
        selector: 'p-accordionTab',
        template: `
        <div class="ui-accordion-header ui-state-default ui-corner-all" [ngClass]="{'ui-state-active': selected,'ui-state-disabled':disabled}"
            (click)="toggle($event)">
            <span class="fa fa-fw" [ngClass]="{'fa-caret-down': selected, 'fa-caret-right': !selected}"></span>
            <a href="#" *ngIf="!hasHeaderFacet" role="tab" [attr.aria-expanded]="selected" [attr.aria-selected]="selected">{{header}}</a>
            <a href="#" *ngIf="hasHeaderFacet" role="tab" [attr.aria-expanded]="selected" [attr.aria-selected]="selected">
                <ng-content select="p-header"></ng-content>
            </a>
        </div>
        <div class="ui-accordion-content-wrapper" [@tabContent]="selected ? 'visible' : 'hidden'" (@tabContent.done)="onToggleDone($event)"
            [ngClass]="{'ui-accordion-content-wrapper-overflown': !selected||animating}" role="tabpanel" [attr.aria-hidden]="!selected">
            <div class="ui-accordion-content ui-widget-content" *ngIf="lazy ? selected : true">
                <ng-content></ng-content>
            </div>
        </div>
    `,
        animations: [
            trigger('tabContent', [
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
    __metadata("design:paramtypes", [Accordion])
], AccordionTab);
export { AccordionTab };
let AccordionModule = class AccordionModule {
};
AccordionModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Accordion, AccordionTab],
        declarations: [Accordion, AccordionTab]
    })
], AccordionModule);
export { AccordionModule };
//# sourceMappingURL=accordion.js.map