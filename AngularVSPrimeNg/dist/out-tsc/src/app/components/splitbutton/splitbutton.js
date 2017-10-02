var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, Renderer2, ChangeDetectorRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { ButtonModule } from '../button/button';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
let SplitButton = class SplitButton {
    constructor(el, domHandler, renderer, router, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.iconPos = 'left';
        this.onClick = new EventEmitter();
        this.onDropdownClick = new EventEmitter();
        this.menuVisible = false;
    }
    ngAfterViewInit() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlayViewChild.nativeElement);
            else
                this.domHandler.appendChild(this.overlayViewChild.nativeElement, this.appendTo);
        }
    }
    ngAfterViewChecked() {
        if (this.shown) {
            this.onShow();
            this.shown = false;
        }
    }
    onDefaultButtonClick(event) {
        this.onClick.emit(event);
    }
    itemClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        this.menuVisible = false;
    }
    show() {
        this.shown = true;
        this.menuVisible = !this.menuVisible;
        this.alignPanel();
        this.overlayViewChild.nativeElement.style.zIndex = String(++DomHandler.zindex);
    }
    onShow() {
        this.alignPanel();
        this.bindDocumentClickListener();
    }
    onDropdownButtonClick(event) {
        this.onDropdownClick.emit(event);
        this.dropdownClick = true;
        this.show();
    }
    alignPanel() {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.overlayViewChild.nativeElement, this.buttonViewChild.nativeElement);
        else
            this.domHandler.relativePosition(this.overlayViewChild.nativeElement, this.buttonViewChild.nativeElement);
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (this.dropdownClick) {
                    this.dropdownClick = false;
                }
                else {
                    this.menuVisible = false;
                    this.unbindDocumentClickListener();
                    this.cd.markForCheck();
                }
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    ngOnDestroy() {
        this.unbindDocumentClickListener();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], SplitButton.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SplitButton.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SplitButton.prototype, "iconPos", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SplitButton.prototype, "label", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SplitButton.prototype, "onClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SplitButton.prototype, "onDropdownClick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SplitButton.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SplitButton.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SplitButton.prototype, "menuStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SplitButton.prototype, "menuStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SplitButton.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SplitButton.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SplitButton.prototype, "appendTo", void 0);
__decorate([
    ViewChild('defaultbtn'),
    __metadata("design:type", ElementRef)
], SplitButton.prototype, "buttonViewChild", void 0);
__decorate([
    ViewChild('overlay'),
    __metadata("design:type", ElementRef)
], SplitButton.prototype, "overlayViewChild", void 0);
SplitButton = __decorate([
    Component({
        selector: 'p-splitButton',
        template: `
        <div #container [ngClass]="{'ui-splitbutton ui-buttonset ui-widget':true,'ui-state-disabled':disabled}" [ngStyle]="style" [class]="styleClass">
            <button #defaultbtn type="button" pButton [icon]="icon" [iconPos]="iconPos" [label]="label" cornerStyleClass="ui-corner-left" (click)="onDefaultButtonClick($event)" [disabled]="disabled" [attr.tabindex]="tabindex">
            </button><button type="button" pButton class="ui-splitbutton-menubutton" icon="fa-caret-down" cornerStyleClass="ui-corner-right" (click)="onDropdownButtonClick($event)" [disabled]="disabled"></button>
            <div #overlay [ngClass]="'ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-shadow'" [style.display]="menuVisible ? 'block' : 'none'"
                    [ngStyle]="menuStyle" [class]="menuStyleClass" [@overlayState]="menuVisible ? 'visible' : 'hidden'">
                <ul class="ui-menu-list ui-helper-reset">
                    <li class="ui-menuitem ui-widget ui-corner-all" role="menuitem" *ngFor="let item of model">
                        <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link ui-corner-all" [attr.target]="item.target"
                            [ngClass]="{'ui-state-disabled':item.disabled}" (click)="itemClick($event, item)">
                            <span [ngClass]="'ui-menuitem-icon fa fa-fw'" [class]="item.icon" *ngIf="item.icon"></span>
                            <span class="ui-menuitem-text">{{item.label}}</span>
                        </a>
                        <a *ngIf="item.routerLink" [routerLink]="item.routerLink"
                            class="ui-menuitem-link ui-corner-all" [attr.target]="item.target" [ngClass]="{'ui-state-disabled':item.disabled}" (click)="itemClick($event, item)">
                            <span [ngClass]="'ui-menuitem-icon fa fa-fw'" [class]="item.icon" *ngIf="item.icon"></span>
                            <span class="ui-menuitem-text">{{item.label}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `,
        animations: [
            trigger('overlayState', [
                state('hidden', style({
                    opacity: 0
                })),
                state('visible', style({
                    opacity: 1
                })),
                transition('visible => hidden', animate('400ms ease-in')),
                transition('hidden => visible', animate('400ms ease-out'))
            ])
        ],
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, Router, ChangeDetectorRef])
], SplitButton);
export { SplitButton };
let SplitButtonModule = class SplitButtonModule {
};
SplitButtonModule = __decorate([
    NgModule({
        imports: [CommonModule, ButtonModule, RouterModule],
        exports: [SplitButton, ButtonModule, RouterModule],
        declarations: [SplitButton]
    })
], SplitButtonModule);
export { SplitButtonModule };
//# sourceMappingURL=splitbutton.js.map