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
import { NgModule, Component, ElementRef, Input, Renderer2, Inject, forwardRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { RouterModule } from '@angular/router';
let SlideMenuSub = class SlideMenuSub {
    constructor(slideMenu) {
        this.slideMenu = slideMenu;
        this.backLabel = 'Back';
        this.easing = 'ease-out';
    }
    itemClick(event, item, listitem) {
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
        if (item.items && !this.slideMenu.animating) {
            this.slideMenu.left -= this.slideMenu.menuWidth;
            this.activeItem = listitem;
            this.slideMenu.animating = true;
            setTimeout(() => this.slideMenu.animating = false, this.effectDuration);
        }
    }
    ngOnDestroy() {
        this.activeItem = null;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SlideMenuSub.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SlideMenuSub.prototype, "root", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SlideMenuSub.prototype, "backLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SlideMenuSub.prototype, "menuWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SlideMenuSub.prototype, "effectDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SlideMenuSub.prototype, "easing", void 0);
SlideMenuSub = __decorate([
    Component({
        selector: 'p-slideMenuSub',
        template: `
        <ul [ngClass]="{'ui-helper-reset ui-menu-rootlist':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child':!root}" class="ui-menu-list"
            [style.width.px]="menuWidth" [style.left.px]="root ? slideMenu.left : slideMenu.menuWidth" 
            [style.transitionProperty]="root ? 'left' : 'none'" [style.transitionDuration]="effectDuration + 'ms'" [style.transitionTimingFunction]="easing">
            <ng-template ngFor let-child [ngForOf]="(root ? item : item.items)">
                <li *ngIf="child.separator" class="ui-menu-separator ui-widget-content">
                <li *ngIf="!child.separator" #listitem [ngClass]="{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-slidemenuitem-active':listitem==activeItem}">
                    <a *ngIf="!child.routerLink" [href]="child.url||'#'" class="ui-menuitem-link ui-corner-all" [attr.target]="child.target" [attr.title]="child.title"
                        [ngClass]="{'ui-menuitem-link-parent':child.items,'ui-state-disabled':child.disabled}" 
                        (click)="itemClick($event, child, listitem)">
                        <span class="ui-submenu-icon fa fa-fw fa-caret-right" *ngIf="child.items"></span>
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [routerLinkActive]="'ui-state-active'" 
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}" [href]="child.url||'#'" class="ui-menuitem-link ui-corner-all" 
                        [attr.target]="child.target" [attr.title]="child.title"
                        [ngClass]="{'ui-menuitem-link-parent':child.items,'ui-state-disabled':child.disabled}" 
                        (click)="itemClick($event, child, listitem)">
                        <span class="ui-submenu-icon fa fa-fw fa-caret-right" *ngIf="child.items"></span>
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                    </a>
                    <p-slideMenuSub class="ui-submenu" [item]="child" [menuWidth]="menuWidth" *ngIf="child.items"></p-slideMenuSub>
                </li>
            </ng-template>
        </ul>
    `
    }),
    __param(0, Inject(forwardRef(() => SlideMenu))),
    __metadata("design:paramtypes", [SlideMenu])
], SlideMenuSub);
export { SlideMenuSub };
let SlideMenu = class SlideMenu {
    constructor(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.menuWidth = 190;
        this.viewportHeight = 175;
        this.effectDuration = 250;
        this.easing = 'ease-out';
        this.backLabel = 'Back';
        this.left = 0;
        this.animating = false;
    }
    ngAfterViewInit() {
        this.container = this.containerViewChild.nativeElement;
        this.backwardElement = this.backwardViewChild.nativeElement;
        this.slideMenuContentElement = this.slideMenuContentViewChild.nativeElement;
        this.slideMenuContentElement.style.height = this.viewportHeight - this.domHandler.getHiddenElementOuterHeight(this.backwardElement) + 'px';
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
    }
    show(event) {
        this.preventDocumentDefault = true;
        this.container.style.display = 'block';
        this.domHandler.absolutePosition(this.container, event.target);
        this.domHandler.fadeIn(this.container, 250);
    }
    hide() {
        this.container.style.display = 'none';
    }
    onClick(event) {
        this.preventDocumentDefault = true;
    }
    goBack() {
        this.left += this.menuWidth;
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
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], SlideMenu.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SlideMenu.prototype, "popup", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SlideMenu.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SlideMenu.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SlideMenu.prototype, "menuWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SlideMenu.prototype, "viewportHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SlideMenu.prototype, "effectDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SlideMenu.prototype, "easing", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SlideMenu.prototype, "backLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SlideMenu.prototype, "appendTo", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], SlideMenu.prototype, "containerViewChild", void 0);
__decorate([
    ViewChild('backward'),
    __metadata("design:type", ElementRef)
], SlideMenu.prototype, "backwardViewChild", void 0);
__decorate([
    ViewChild('slideMenuContent'),
    __metadata("design:type", ElementRef)
], SlideMenu.prototype, "slideMenuContentViewChild", void 0);
SlideMenu = __decorate([
    Component({
        selector: 'p-slideMenu',
        template: `
        <div #container [ngClass]="{'ui-menu ui-slidemenu ui-widget ui-widget-content ui-corner-all':true,'ui-menu-dynamic ui-shadow':popup}" 
            [class]="styleClass" [ngStyle]="style" (click)="onClick($event)">
            <div class="ui-slidemenu-wrapper" [style.height.px]="viewportHeight">
                <div #slideMenuContent class="ui-slidemenu-content">
                    <p-slideMenuSub [item]="model" root="root" [menuWidth]="menuWidth" [effectDuration]="effectDuration" [easing]="easing"></p-slideMenuSub>
                </div>
                <div #backward class="ui-slidemenu-backward ui-widget-header ui-corner-all" [style.display]="left ? 'block' : 'none'" (click)="goBack()">
                    <span class="fa fa-fw fa-caret-left"></span><span>{{backLabel}}</span>
                </div>
            </div>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], SlideMenu);
export { SlideMenu };
let SlideMenuModule = class SlideMenuModule {
};
SlideMenuModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [SlideMenu, RouterModule],
        declarations: [SlideMenu, SlideMenuSub]
    })
], SlideMenuModule);
export { SlideMenuModule };
//# sourceMappingURL=slidemenu.js.map