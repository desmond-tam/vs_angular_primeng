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
let TieredMenuSub = class TieredMenuSub {
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
            sublist.style.top = '0px';
            sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
        }
    }
    onItemMouseLeave(event) {
        this.activeItem = null;
    }
    itemClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return true;
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
    }
    listClick(event) {
        this.activeItem = null;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TieredMenuSub.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TieredMenuSub.prototype, "root", void 0);
TieredMenuSub = __decorate([
    Component({
        selector: 'p-tieredMenuSub',
        template: `
        <ul [ngClass]="{'ui-helper-reset':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!root}" class="ui-menu-list"
            (click)="listClick($event)">
            <ng-template ngFor let-child [ngForOf]="(root ? item : item.items)">
                <li *ngIf="child.separator" class="ui-menu-separator ui-widget-content">
                <li *ngIf="!child.separator" #listItem [ngClass]="{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':listItem==activeItem}"
                    (mouseenter)="onItemMouseEnter($event, listItem, child)" (mouseleave)="onItemMouseLeave($event)">
                    <a *ngIf="!child.routerLink" [href]="child.url||'#'" class="ui-menuitem-link ui-corner-all" [attr.target]="child.target" [attr.title]="child.title"
                        [ngClass]="{'ui-state-disabled':child.disabled}" (click)="itemClick($event, child)">
                        <span class="ui-submenu-icon fa fa-fw fa-caret-right" *ngIf="child.items"></span>
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [routerLinkActive]="'ui-state-active'" 
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}" [href]="child.url||'#'" 
                        class="ui-menuitem-link ui-corner-all" [attr.target]="child.target" [attr.title]="child.title"
                        [ngClass]="{'ui-state-disabled':child.disabled}" (click)="itemClick($event, child)">
                        <span class="ui-submenu-icon fa fa-fw fa-caret-right" *ngIf="child.items"></span>
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                    </a>
                    <p-tieredMenuSub class="ui-submenu" [item]="child" *ngIf="child.items"></p-tieredMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [DomHandler])
], TieredMenuSub);
export { TieredMenuSub };
let TieredMenu = class TieredMenu {
    constructor(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.container = this.el.nativeElement.children[0];
        if (this.popup) {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.container);
                else
                    this.domHandler.appendChild(this.container, this.appendTo);
            }
        }
    }
    toggle(event) {
        if (this.container.offsetParent)
            this.hide();
        else
            this.show(event);
    }
    show(event) {
        this.preventDocumentDefault = true;
        this.container.style.display = 'block';
        this.domHandler.absolutePosition(this.container, event.currentTarget);
        this.domHandler.fadeIn(this.container, 250);
        this.bindDocumentClickListener();
    }
    hide() {
        this.container.style.display = 'none';
        this.unbindDocumentClickListener();
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (!this.preventDocumentDefault) {
                    this.hide();
                }
                this.preventDocumentDefault = false;
            });
        }
    }
    ngOnDestroy() {
        if (this.popup && this.documentClickListener) {
            this.unbindDocumentClickListener();
            if (this.appendTo) {
                this.el.nativeElement.appendChild(this.container);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TieredMenu.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TieredMenu.prototype, "popup", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TieredMenu.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TieredMenu.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TieredMenu.prototype, "appendTo", void 0);
TieredMenu = __decorate([
    Component({
        selector: 'p-tieredMenu',
        template: `
        <div [ngClass]="{'ui-tieredmenu ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true,'ui-menu-dynamic ui-shadow':popup}" 
            [class]="styleClass" [ngStyle]="style">
            <p-tieredMenuSub [item]="model" root="root"></p-tieredMenuSub>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], TieredMenu);
export { TieredMenu };
let TieredMenuModule = class TieredMenuModule {
};
TieredMenuModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [TieredMenu, RouterModule],
        declarations: [TieredMenu, TieredMenuSub]
    })
], TieredMenuModule);
export { TieredMenuModule };
//# sourceMappingURL=tieredmenu.js.map