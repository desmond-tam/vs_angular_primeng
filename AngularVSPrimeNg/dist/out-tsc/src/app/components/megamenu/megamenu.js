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
let MegaMenu = class MegaMenu {
    constructor(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.orientation = 'horizontal';
    }
    onItemMouseEnter(event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        let submenu = item.children[0].nextElementSibling;
        if (submenu) {
            submenu.style.zIndex = ++DomHandler.zindex;
            if (this.orientation === 'horizontal') {
                submenu.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                submenu.style.left = '0px';
            }
            else if (this.orientation === 'vertical') {
                submenu.style.top = '0px';
                submenu.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
            }
        }
    }
    onItemMouseLeave(event, link) {
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
    getColumnClass(menuitem) {
        let length = menuitem.items ? menuitem.items.length : 0;
        let columnClass;
        switch (length) {
            case 2:
                columnClass = 'ui-g-6';
                break;
            case 3:
                columnClass = 'ui-g-4';
                break;
            case 4:
                columnClass = 'ui-g-3';
                break;
            case 6:
                columnClass = 'ui-g-2';
                break;
            default:
                columnClass = 'ui-g-12';
                break;
        }
        return columnClass;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], MegaMenu.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MegaMenu.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MegaMenu.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MegaMenu.prototype, "orientation", void 0);
MegaMenu = __decorate([
    Component({
        selector: 'p-megaMenu',
        template: `
        <div [class]="styleClass" [ngStyle]="style"
            [ngClass]="{'ui-menu ui-menubar ui-megamenu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true,'ui-megamenu-vertical': orientation == 'vertical'}">
            <ul class="ui-menu-list ui-helper-reset ui-menubar-root-list">
                <ng-template ngFor let-category [ngForOf]="model">
                    <li *ngIf="category.separator" class="ui-menu-separator ui-widget-content">
                    <li *ngIf="!category.separator" #item [ngClass]="{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':category.items,'ui-menuitem-active':item==activeItem}"
                        (mouseenter)="onItemMouseEnter($event, item, category)" (mouseleave)="onItemMouseLeave($event, item)">
                        <a class="ui-menuitem-link ui-corner-all ui-submenu-link" [ngClass]="{'ui-state-disabled':category.disabled}">
                            <span class="ui-menuitem-icon fa fa-fw" [ngClass]="category.icon"></span>
                            <span class="ui-menuitem-text">{{category.label}}</span>
                            <span class="ui-submenu-icon fa fa-fw" [ngClass]="{'fa-caret-down':orientation=='horizontal','fa-caret-right':orientation=='vertical'}"></span>
                        </a>
                        <div class="ui-megamenu-panel ui-widget-content ui-menu-list ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow">
                            <div class="ui-g">
                                <ng-template ngFor let-column [ngForOf]="category.items">
                                    <div [class]="getColumnClass(category)">
                                        <ng-template ngFor let-submenu [ngForOf]="column">
                                            <ul class="ui-menu-list ui-helper-reset">
                                                <li class="ui-widget-header ui-corner-all"><h3>{{submenu.label}}</h3></li>
                                                <ng-template ngFor let-item [ngForOf]="submenu.items">
                                                    <li *ngIf="item.separator" class="ui-menu-separator ui-widget-content">
                                                    <li *ngIf="!item.separator" class="ui-menuitem ui-widget ui-corner-all">
                                                        <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link ui-corner-all" [attr.target]="item.target" [attr.title]="item.title"
                                                            [ngClass]="{'ui-state-disabled':item.disabled}" (click)="itemClick($event, item)">
                                                            <span class="ui-menuitem-icon fa fa-fw" *ngIf="item.icon" [ngClass]="item.icon"></span>
                                                            <span class="ui-menuitem-text">{{item.label}}</span>
                                                        </a>
                                                        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [routerLinkActive]="'ui-state-active'" 
                                                            [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link ui-corner-all" 
                                                             [attr.target]="item.target" [attr.title]="item.title"
                                                            [ngClass]="{'ui-state-disabled':item.disabled}" (click)="itemClick($event, item)">
                                                            <span class="ui-menuitem-icon fa fa-fw" *ngIf="item.icon" [ngClass]="item.icon"></span>
                                                            <span class="ui-menuitem-text">{{item.label}}</span>
                                                        </a>
                                                    </li>
                                                </ng-template>
                                            </ul>
                                        </ng-template>
                                    </div>
                                </ng-template>
                            </div>
                        </div>
                    </li>
                </ng-template>
                <li class="ui-menuitem ui-menuitem-custom ui-widget ui-corner-all" *ngIf="orientation === 'horizontal'">
                    <ng-content></ng-content>
                </li>
            </ul>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], MegaMenu);
export { MegaMenu };
let MegaMenuModule = class MegaMenuModule {
};
MegaMenuModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [MegaMenu, RouterModule],
        declarations: [MegaMenu]
    })
], MegaMenuModule);
export { MegaMenuModule };
//# sourceMappingURL=megamenu.js.map