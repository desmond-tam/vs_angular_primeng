var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { RouterModule } from '@angular/router';
let TabMenu = class TabMenu {
    ngOnInit() {
        if (!this.activeItem && this.model && this.model.length) {
            this.activeItem = this.model[0];
        }
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
        this.activeItem = item;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TabMenu.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabMenu.prototype, "activeItem", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabMenu.prototype, "popup", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabMenu.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabMenu.prototype, "styleClass", void 0);
TabMenu = __decorate([
    Component({
        selector: 'p-tabMenu',
        template: `
        <div [ngClass]="'ui-tabmenu ui-widget ui-widget-content ui-corner-all'" [ngStyle]="style" [class]="styleClass">
            <ul class="ui-tabmenu-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                <li *ngFor="let item of model" 
                    [ngClass]="{'ui-tabmenuitem ui-state-default ui-corner-top':true,'ui-state-disabled':item.disabled,
                        'ui-tabmenuitem-hasicon':item.icon,'ui-state-active':activeItem==item}">
                    <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link ui-corner-all" (click)="itemClick($event,item)"
                        [attr.target]="item.target" [attr.title]="item.title">
                        <span class="ui-menuitem-icon fa" [ngClass]="item.icon"></span>
                        <span class="ui-menuitem-text">{{item.label}}</span>
                    </a>
                    <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [routerLinkActive]="'ui-state-active'"  [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link ui-corner-all" (click)="itemClick($event,item)"
                        [attr.target]="item.target" [attr.title]="item.title">
                        <span class="ui-menuitem-icon fa" [ngClass]="item.icon"></span>
                        <span class="ui-menuitem-text">{{item.label}}</span>
                    </a>
                </li>
            </ul>
        </div>
    `,
        providers: [DomHandler]
    })
], TabMenu);
export { TabMenu };
let TabMenuModule = class TabMenuModule {
};
TabMenuModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [TabMenu, RouterModule],
        declarations: [TabMenu]
    })
], TabMenuModule);
export { TabMenuModule };
//# sourceMappingURL=tabmenu.js.map