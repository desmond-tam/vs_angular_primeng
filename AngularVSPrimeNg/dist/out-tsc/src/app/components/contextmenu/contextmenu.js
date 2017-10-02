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
let ContextMenuSub = class ContextMenuSub {
    constructor(domHandler, contextMenu) {
        this.domHandler = domHandler;
        this.contextMenu = contextMenu;
    }
    onItemMouseEnter(event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        let nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            let sublist = nextElement.children[0];
            sublist.style.zIndex = ++DomHandler.zindex;
            this.position(sublist, item);
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
    }
    listClick(event) {
        this.activeItem = null;
    }
    position(sublist, item) {
        this.containerLeft = this.domHandler.getOffset(item.parentElement);
        let viewport = this.domHandler.getViewport();
        let sublistWidth = sublist.offsetParent ? sublist.offsetWidth : this.domHandler.getHiddenElementOuterWidth(sublist);
        let itemOuterWidth = this.domHandler.getOuterWidth(item.children[0]);
        sublist.style.top = '0px';
        if ((parseInt(this.containerLeft.left) + itemOuterWidth + sublistWidth) > (viewport.width - this.calculateScrollbarWidth())) {
            sublist.style.left = -sublistWidth + 'px';
        }
        else {
            sublist.style.left = itemOuterWidth + 'px';
        }
    }
    calculateScrollbarWidth() {
        let scrollDiv = document.createElement("div");
        scrollDiv.className = "ui-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ContextMenuSub.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ContextMenuSub.prototype, "root", void 0);
ContextMenuSub = __decorate([
    Component({
        selector: 'p-contextMenuSub',
        template: `
        <ul [ngClass]="{'ui-helper-reset':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!root}" class="ui-menu-list"
            (click)="listClick($event)">
            <ng-template ngFor let-child [ngForOf]="(root ? item : item.items)">
                <li *ngIf="child.separator" class="ui-menu-separator ui-widget-content">
                <li *ngIf="!child.separator" #item [ngClass]="{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':item==activeItem}"
                    (mouseenter)="onItemMouseEnter($event,item,child)" (mouseleave)="onItemMouseLeave($event,item)" [style.display]="child.visible === false ? 'none' : 'block'">
                    <a *ngIf="!child.routerLink" [href]="child.url||'#'" [attr.target]="child.target" [attr.title]="child.title" (click)="itemClick($event, child)"
                        [ngClass]="{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}" [ngStyle]="child.style" [class]="child.styleClass">
                        <span class="ui-submenu-icon fa fa-fw fa-caret-right" *ngIf="child.items"></span>
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [routerLinkActive]="'ui-state-active'" 
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}" [attr.target]="child.target" [attr.title]="child.title"
                        (click)="itemClick($event, child)" [ngClass]="{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}" 
                        [ngStyle]="child.style" [class]="child.styleClass">
                        <span class="ui-submenu-icon fa fa-fw fa-caret-right" *ngIf="child.items"></span>
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                    </a>
                    <p-contextMenuSub class="ui-submenu" [item]="child" *ngIf="child.items"></p-contextMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
        providers: [DomHandler]
    }),
    __param(1, Inject(forwardRef(() => ContextMenu))),
    __metadata("design:paramtypes", [DomHandler, ContextMenu])
], ContextMenuSub);
export { ContextMenuSub };
let ContextMenu = class ContextMenu {
    constructor(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.container = this.containerViewChild.nativeElement;
        if (this.global) {
            this.rightClickListener = this.renderer.listen('document', 'contextmenu', (event) => {
                this.show(event);
                event.preventDefault();
            });
        }
        else if (this.target) {
            this.rightClickListener = this.renderer.listen(this.target, 'contextmenu', (event) => {
                this.show(event);
                event.preventDefault();
                event.stopPropagation();
            });
        }
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.domHandler.appendChild(this.container, this.appendTo);
        }
    }
    show(event) {
        this.position(event);
        this.visible = true;
        this.domHandler.fadeIn(this.container, 250);
        this.bindDocumentClickListener();
        if (event) {
            event.preventDefault();
        }
    }
    hide() {
        this.visible = false;
        this.unbindDocumentClickListener();
    }
    toggle(event) {
        if (this.visible)
            this.hide();
        else
            this.show(event);
    }
    position(event) {
        if (event) {
            let left = event.pageX + 1;
            let top = event.pageY + 1;
            let width = this.container.offsetParent ? this.container.offsetWidth : this.domHandler.getHiddenElementOuterWidth(this.container);
            let height = this.container.offsetParent ? this.container.offsetHeight : this.domHandler.getHiddenElementOuterHeight(this.container);
            let viewport = this.domHandler.getViewport();
            //flip
            if (left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }
            //flip
            if (top + height - document.body.scrollTop > viewport.height) {
                top -= height;
            }
            //fit
            if (left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }
            //fit
            if (top < document.body.scrollTop) {
                top = document.body.scrollTop;
            }
            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
        }
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', (event) => {
                if (this.visible && event.button !== 2) {
                    this.hide();
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
        if (this.rightClickListener) {
            this.rightClickListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ContextMenu.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ContextMenu.prototype, "global", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ContextMenu.prototype, "target", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ContextMenu.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ContextMenu.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ContextMenu.prototype, "appendTo", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], ContextMenu.prototype, "containerViewChild", void 0);
ContextMenu = __decorate([
    Component({
        selector: 'p-contextMenu',
        template: `
        <div #container [ngClass]="'ui-contextmenu ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-dynamic ui-shadow'" 
            [class]="styleClass" [ngStyle]="style" [style.display]="visible ? 'block' : 'none'">
            <p-contextMenuSub [item]="model" root="root"></p-contextMenuSub>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], ContextMenu);
export { ContextMenu };
let ContextMenuModule = class ContextMenuModule {
};
ContextMenuModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [ContextMenu, RouterModule],
        declarations: [ContextMenu, ContextMenuSub]
    })
], ContextMenuModule);
export { ContextMenuModule };
//# sourceMappingURL=contextmenu.js.map