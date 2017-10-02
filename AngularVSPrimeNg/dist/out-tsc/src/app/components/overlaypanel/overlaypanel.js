var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
let OverlayPanel = class OverlayPanel {
    constructor(el, domHandler, renderer, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.cd = cd;
        this.dismissable = true;
        this.onBeforeShow = new EventEmitter();
        this.onAfterShow = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.onAfterHide = new EventEmitter();
        this.visible = false;
    }
    ngOnInit() {
        if (this.dismissable) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (!this.selfClick && !this.targetEvent) {
                    this.hide();
                }
                this.selfClick = false;
                this.targetEvent = false;
                this.cd.markForCheck();
            });
        }
    }
    ngAfterViewInit() {
        this.container = this.el.nativeElement.children[0];
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.domHandler.appendChild(this.container, this.appendTo);
        }
    }
    toggle(event, target) {
        let currentTarget = (target || event.currentTarget || event.target);
        if (!this.target || this.target == currentTarget) {
            if (this.visible)
                this.hide();
            else
                this.show(event, target);
        }
        else {
            this.show(event, target);
        }
        if (this.dismissable) {
            this.targetEvent = true;
        }
        this.target = currentTarget;
    }
    show(event, target) {
        if (this.dismissable) {
            this.targetEvent = true;
        }
        this.onBeforeShow.emit(null);
        let elementTarget = target || event.currentTarget || event.target;
        this.container.style.zIndex = ++DomHandler.zindex;
        if (this.visible) {
            this.domHandler.absolutePosition(this.container, elementTarget);
        }
        else {
            this.visible = true;
            this.domHandler.absolutePosition(this.container, elementTarget);
            this.domHandler.fadeIn(this.container, 250);
        }
        this.onAfterShow.emit(null);
    }
    hide() {
        if (this.visible) {
            this.onBeforeHide.emit(null);
            this.visible = false;
            this.onAfterHide.emit(null);
        }
    }
    onPanelClick() {
        if (this.dismissable) {
            this.selfClick = true;
        }
    }
    onCloseClick(event) {
        this.hide();
        if (this.dismissable) {
            this.selfClick = true;
        }
        event.preventDefault();
    }
    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
        this.target = null;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], OverlayPanel.prototype, "dismissable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], OverlayPanel.prototype, "showCloseIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OverlayPanel.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OverlayPanel.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OverlayPanel.prototype, "appendTo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OverlayPanel.prototype, "onBeforeShow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OverlayPanel.prototype, "onAfterShow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OverlayPanel.prototype, "onBeforeHide", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OverlayPanel.prototype, "onAfterHide", void 0);
OverlayPanel = __decorate([
    Component({
        selector: 'p-overlayPanel',
        template: `
        <div [ngClass]="'ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow'" [ngStyle]="style" [class]="styleClass"
            [style.display]="visible ? 'block' : 'none'" (click)="onPanelClick()">
            <div class="ui-overlaypanel-content">
                <ng-content></ng-content>
            </div>
            <a href="#" *ngIf="showCloseIcon" class="ui-overlaypanel-close ui-state-default" (click)="onCloseClick($event)">
                <span class="fa fa-fw fa-close"></span>
            </a>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, ChangeDetectorRef])
], OverlayPanel);
export { OverlayPanel };
let OverlayPanelModule = class OverlayPanelModule {
};
OverlayPanelModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [OverlayPanel],
        declarations: [OverlayPanel]
    })
], OverlayPanelModule);
export { OverlayPanelModule };
//# sourceMappingURL=overlaypanel.js.map