var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { RouterModule } from '@angular/router';
let MenubarSub = class MenubarSub {
    constructor(domHandler) {
        this.domHandler = domHandler;
    }
    onItemMouseEnter(event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        let nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            let sublist = nextElement.children[0];
            sublist.style.zIndex = String(++DomHandler.zindex);
            if (this.root) {
                sublist.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                sublist.style.left = '0px';
            }
            else {
                sublist.style.top = '0px';
                sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
            }
        }
    }
    onItemMouseLeave(event) {
        this.activeItem = null;
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
        this.activeItem = null;
    }
    listClick(event) {
        this.activeItem = null;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MenubarSub.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MenubarSub.prototype, "root", void 0);
MenubarSub = __decorate([
    Component({
        selector: 'p-menubarSub',
        template: `
        <ul [ngClass]="{'ui-menubar-root-list ui-helper-clearfix':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!root}" class="ui-menu-list"
            (click)="listClick($event)">
            <ng-template ngFor let-child [ngForOf]="(root ? item : item.items)">
                <li *ngIf="child.separator" class="ui-menu-separator ui-widget-content">
                <li *ngIf="!child.separator" #listItem [ngClass]="{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':listItem==activeItem}"
                    (mouseenter)="onItemMouseEnter($event,listItem,child)" (mouseleave)="onItemMouseLeave($event)">
                    <a *ngIf="!child.routerLink" [href]="child.url||'#'" [attr.target]="child.target" [attr.title]="child.title" (click)="itemClick($event, child)"
                         [ngClass]="{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}" [ngStyle]="child.style" [class]="child.styleClass">
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                        <span class="ui-submenu-icon fa fa-fw" *ngIf="child.items" [ngClass]="{'fa-caret-down':root,'fa-caret-right':!root}"></span>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [routerLinkActive]="'ui-state-active'" [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}" 
                        [attr.target]="child.target" [attr.title]="child.title"
                        (click)="itemClick($event, child)" [ngClass]="{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}" [ngStyle]="child.style" [class]="child.styleClass">
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                        <span class="ui-submenu-icon fa fa-fw" *ngIf="child.items" [ngClass]="{'fa-caret-down':root,'fa-caret-right':!root}"></span>
                    </a>
                    <p-menubarSub class="ui-submenu" [item]="child" *ngIf="child.items"></p-menubarSub>
                </li>
            </ng-template>
            <li class="ui-menuitem ui-menuitem-custom ui-widget ui-corner-all">
                <ng-content></ng-content>
            </li>
        </ul>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [DomHandler])
], MenubarSub);
export { MenubarSub };
let Menubar = class Menubar {
    constructor(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], Menubar.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Menubar.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Menubar.prototype, "styleClass", void 0);
Menubar = __decorate([
    Component({
        selector: 'p-menubar',
        template: `
        <div [ngClass]="{'ui-menubar ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true}" 
            [class]="styleClass" [ngStyle]="style">
            <p-menubarSub [item]="model" root="root">
                <ng-content></ng-content>
            </p-menubarSub>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], Menubar);
export { Menubar };
let MenubarModule = class MenubarModule {
};
MenubarModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [Menubar, RouterModule],
        declarations: [Menubar, MenubarSub]
    })
], MenubarModule);
export { MenubarModule };
//# sourceMappingURL=menubar.js.map