var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Component, ElementRef, Input, Renderer2, ViewChild, Inject, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { RouterModule } from '@angular/router';
let MenuItemContent = class MenuItemContent {
    constructor(menu) {
        this.menu = menu;
    }
};
__decorate([
    Input("pMenuItemContent"),
    __metadata("design:type", Object)
], MenuItemContent.prototype, "item", void 0);
MenuItemContent = __decorate([
    Component({
        selector: '[pMenuItemContent]',
        template: `
        <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link ui-corner-all" [attr.target]="item.target" [attr.title]="item.title"
            [ngClass]="{'ui-state-disabled':item.disabled}" (click)="menu.itemClick($event, item)">
            <span class="ui-menuitem-icon fa fa-fw" *ngIf="item.icon" [ngClass]="item.icon"></span>
            <span class="ui-menuitem-text">{{item.label}}</span>
        </a>
        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [routerLinkActive]="'ui-state-active'" 
            [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link ui-corner-all" [attr.target]="item.target"
             [attr.title]="item.title" [ngClass]="{'ui-state-disabled':item.disabled}" (click)="menu.itemClick($event, item)">
            <span class="ui-menuitem-icon fa fa-fw" *ngIf="item.icon" [ngClass]="item.icon"></span>
            <span class="ui-menuitem-text">{{item.label}}</span>
        </a>
    `
    }),
    __param(0, Inject(forwardRef(() => Menu))),
    __metadata("design:paramtypes", [Menu])
], MenuItemContent);
export { MenuItemContent };
let Menu = class Menu {
    constructor(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.container = this.containerViewChild.nativeElement;
        if (this.popup) {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.container);
                else
                    this.domHandler.appendChild(this.container, this.appendTo);
            }
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (!this.preventDocumentDefault) {
                    this.hide();
                }
                this.preventDocumentDefault = false;
            });
        }
    }
    toggle(event) {
        if (this.container.offsetParent)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    }
    onResize(event) {
        if (this.onResizeTarget && this.container.offsetParent) {
            this.domHandler.absolutePosition(this.container, this.onResizeTarget);
        }
    }
    show(event) {
        let target = event.currentTarget;
        this.onResizeTarget = event.currentTarget;
        this.container.style.display = 'block';
        this.domHandler.absolutePosition(this.container, target);
        this.domHandler.fadeIn(this.container, 250);
        this.preventDocumentDefault = true;
    }
    hide() {
        this.container.style.display = 'none';
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
        if (this.popup) {
            this.hide();
        }
    }
    ngOnDestroy() {
        if (this.popup) {
            if (this.documentClickListener) {
                this.documentClickListener();
            }
            if (this.appendTo) {
                this.el.nativeElement.appendChild(this.container);
            }
        }
    }
    hasSubMenu() {
        if (this.model) {
            for (var item of this.model) {
                if (item.items) {
                    return true;
                }
            }
        }
        return false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], Menu.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Menu.prototype, "popup", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Menu.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Menu.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Menu.prototype, "appendTo", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], Menu.prototype, "containerViewChild", void 0);
Menu = __decorate([
    Component({
        selector: 'p-menu',
        template: `
        <div #container [ngClass]="{'ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true,'ui-menu-dynamic ui-shadow':popup}" 
            [class]="styleClass" [ngStyle]="style" (click)="preventDocumentDefault=true">
            <ul class="ui-menu-list ui-helper-reset">
                <ng-template ngFor let-submenu [ngForOf]="model" *ngIf="hasSubMenu()">
                    <li class="ui-menu-separator ui-widget-content" *ngIf="submenu.separator" [ngClass]="{'ui-helper-hidden': submenu.visible === false}"></li>
                    <li class="ui-widget-header ui-corner-all" *ngIf="!submenu.separator" [ngClass]="{'ui-helper-hidden': submenu.visible === false}"><h3>{{submenu.label}}</h3></li>
                    <ng-template ngFor let-item [ngForOf]="submenu.items">
                        <li class="ui-menu-separator ui-widget-content" *ngIf="item.separator" [ngClass]="{'ui-helper-hidden': (item.visible === false || submenu.visible === false)}"></li>
                        <li class="ui-menuitem ui-widget ui-corner-all" *ngIf="!item.separator" [pMenuItemContent]="item" [ngClass]="{'ui-helper-hidden': (item.visible === false || submenu.visible === false)}"></li>
                    </ng-template>
                </ng-template>
                <ng-template ngFor let-item [ngForOf]="model" *ngIf="!hasSubMenu()">
                    <li class="ui-menu-separator ui-widget-content" *ngIf="item.separator" [ngClass]="{'ui-helper-hidden': item.visible === false}"></li>
                    <li class="ui-menuitem ui-widget ui-corner-all" *ngIf="!item.separator" [pMenuItemContent]="item" [ngClass]="{'ui-helper-hidden': item.visible === false}"></li>
                </ng-template>
            </ul>
        </div>
    `,
        providers: [DomHandler],
        host: { '(window:resize)': 'onResize($event)' }
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], Menu);
export { Menu };
let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [Menu, RouterModule],
        declarations: [Menu, MenuItemContent]
    })
], MenuModule);
export { MenuModule };
//# sourceMappingURL=menu.js.map