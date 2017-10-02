var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, Renderer2, ContentChild, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Header, Footer, SharedModule } from '../common/shared';
let Dialog = class Dialog {
    constructor(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.draggable = true;
        this.resizable = true;
        this.minWidth = 150;
        this.minHeight = 150;
        this.closeOnEscape = true;
        this.closable = true;
        this.responsive = true;
        this.showHeader = true;
        this.breakpoint = 640;
        this.blockScroll = false;
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.visibleChange = new EventEmitter();
    }
    get visible() {
        return this._visible;
    }
    set visible(val) {
        this._visible = val;
        if (this.initialized && this.containerViewChild && this.containerViewChild.nativeElement) {
            if (this._visible)
                this.show();
            else {
                if (this.preventVisibleChangePropagation)
                    this.preventVisibleChangePropagation = false;
                else
                    this.hide();
            }
        }
    }
    ngAfterViewChecked() {
        if (this.executePostDisplayActions) {
            this.onShow.emit({});
            this.positionOverlay();
            this.executePostDisplayActions = false;
        }
    }
    show() {
        this.executePostDisplayActions = true;
        this.containerViewChild.nativeElement.style.zIndex = String(++DomHandler.zindex);
        this.bindGlobalListeners();
        if (this.modal) {
            this.enableModality();
        }
    }
    positionOverlay() {
        let viewport = this.domHandler.getViewport();
        if (this.domHandler.getOuterHeight(this.containerViewChild.nativeElement) > viewport.height) {
            this.contentViewChild.nativeElement.style.height = (viewport.height * .75) + 'px';
        }
        if (this.positionLeft >= 0 && this.positionTop >= 0) {
            this.containerViewChild.nativeElement.style.left = this.positionLeft + 'px';
            this.containerViewChild.nativeElement.style.top = this.positionTop + 'px';
        }
        else if (this.positionTop >= 0) {
            this.center();
            this.containerViewChild.nativeElement.style.top = this.positionTop + 'px';
        }
        else {
            this.center();
        }
    }
    hide() {
        this.onHide.emit({});
        this.unbindMaskClickListener();
        this.unbindGlobalListeners();
        if (this.modal) {
            this.disableModality();
        }
    }
    close(event) {
        this.preventVisibleChangePropagation = true;
        this.hide();
        this.visibleChange.emit(false);
        event.preventDefault();
    }
    ngAfterViewInit() {
        this.initialized = true;
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.containerViewChild.nativeElement);
            else
                this.domHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
        }
        if (this.visible) {
            this.show();
        }
    }
    center() {
        let elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
        let elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
        if (elementWidth == 0 && elementHeight == 0) {
            this.containerViewChild.nativeElement.style.visibility = 'hidden';
            this.containerViewChild.nativeElement.style.display = 'block';
            elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
            elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
            this.containerViewChild.nativeElement.style.display = 'none';
            this.containerViewChild.nativeElement.style.visibility = 'visible';
        }
        let viewport = this.domHandler.getViewport();
        let x = Math.max((viewport.width - elementWidth) / 2, 0);
        let y = Math.max((viewport.height - elementHeight) / 2, 0);
        this.containerViewChild.nativeElement.style.left = x + 'px';
        this.containerViewChild.nativeElement.style.top = y + 'px';
    }
    enableModality() {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.containerViewChild.nativeElement.style.zIndex) - 1);
            this.domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
            if (this.closable && this.dismissableMask) {
                this.maskClickListener = this.renderer.listen(this.mask, 'click', (event) => {
                    this.close(event);
                });
            }
            document.body.appendChild(this.mask);
            if (this.blockScroll) {
                this.domHandler.addClass(document.body, 'ui-overflow-hidden');
            }
        }
    }
    disableModality() {
        if (this.mask) {
            document.body.removeChild(this.mask);
            if (this.blockScroll) {
                this.domHandler.removeClass(document.body, 'ui-overflow-hidden');
            }
            this.mask = null;
        }
    }
    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    }
    moveOnTop() {
        this.containerViewChild.nativeElement.style.zIndex = String(++DomHandler.zindex);
    }
    onCloseMouseDown(event) {
        this.closeIconMouseDown = true;
    }
    initDrag(event) {
        if (this.closeIconMouseDown) {
            this.closeIconMouseDown = false;
            return;
        }
        if (this.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    onDrag(event) {
        if (this.dragging) {
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let leftPos = parseInt(this.containerViewChild.nativeElement.style.left);
            let topPos = parseInt(this.containerViewChild.nativeElement.style.top);
            this.containerViewChild.nativeElement.style.left = leftPos + deltaX + 'px';
            this.containerViewChild.nativeElement.style.top = topPos + deltaY + 'px';
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    endDrag(event) {
        if (this.draggable) {
            this.dragging = false;
        }
    }
    initResize(event) {
        if (this.resizable) {
            this.preWidth = null;
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    onResize(event) {
        if (this.resizing) {
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let containerWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
            let containerHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
            let contentHeight = this.domHandler.getOuterHeight(this.contentViewChild.nativeElement);
            let newWidth = containerWidth + deltaX;
            let newHeight = containerHeight + deltaY;
            if (newWidth > this.minWidth) {
                this.containerViewChild.nativeElement.style.width = newWidth + 'px';
            }
            if (newHeight > this.minHeight) {
                this.containerViewChild.nativeElement.style.height = newHeight + 'px';
                this.contentViewChild.nativeElement.style.height = contentHeight + deltaY + 'px';
            }
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    bindGlobalListeners() {
        if (this.draggable) {
            this.bindDocumentDragListener();
        }
        if (this.resizable) {
            this.bindDocumentResizeListeners();
        }
        if (this.responsive) {
            this.bindDocumentResponsiveListener();
        }
        if (this.closeOnEscape && this.closable) {
            this.bindDocumentEscapeListener();
        }
    }
    unbindGlobalListeners() {
        this.unbindDocumentDragListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentResponsiveListener();
        this.unbindDocumentEscapeListener();
    }
    bindDocumentDragListener() {
        this.documentDragListener = this.renderer.listen('document', 'mousemove', (event) => {
            this.onDrag(event);
        });
    }
    unbindDocumentDragListener() {
        if (this.documentDragListener) {
            this.documentDragListener();
            this.documentDragListener = null;
        }
    }
    bindDocumentResizeListeners() {
        this.documentResizeListener = this.renderer.listen('document', 'mousemove', (event) => {
            this.onResize(event);
        });
        this.documentResizeEndListener = this.renderer.listen('document', 'mouseup', (event) => {
            if (this.resizing) {
                this.resizing = false;
            }
        });
    }
    unbindDocumentResizeListeners() {
        if (this.documentResizeListener && this.documentResizeEndListener) {
            this.documentResizeListener();
            this.documentResizeEndListener();
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
        }
    }
    bindDocumentResponsiveListener() {
        this.documentResponsiveListener = this.renderer.listen('window', 'resize', (event) => {
            let viewport = this.domHandler.getViewport();
            let width = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
            if (viewport.width <= this.breakpoint) {
                if (!this.preWidth) {
                    this.preWidth = width;
                }
                this.containerViewChild.nativeElement.style.left = '0px';
                this.containerViewChild.nativeElement.style.width = '100%';
            }
            else {
                this.containerViewChild.nativeElement.style.width = this.preWidth + 'px';
                this.positionOverlay();
            }
        });
    }
    unbindDocumentResponsiveListener() {
        if (this.documentResponsiveListener) {
            this.documentResponsiveListener();
            this.documentResponsiveListener = null;
        }
    }
    bindDocumentEscapeListener() {
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', (event) => {
            if (event.which == 27) {
                if (parseInt(this.containerViewChild.nativeElement.style.zIndex) == DomHandler.zindex) {
                    this.close(event);
                }
            }
        });
    }
    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    }
    ngOnDestroy() {
        this.initialized = false;
        this.disableModality();
        this.unbindGlobalListeners();
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
        }
        this.unbindMaskClickListener();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], Dialog.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "draggable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "resizable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Dialog.prototype, "minWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Dialog.prototype, "minHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dialog.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dialog.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Dialog.prototype, "positionLeft", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Dialog.prototype, "positionTop", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dialog.prototype, "contentStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "modal", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "closeOnEscape", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "dismissableMask", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "rtl", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "closable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "responsive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dialog.prototype, "appendTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dialog.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dialog.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "showHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Dialog.prototype, "breakpoint", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dialog.prototype, "blockScroll", void 0);
__decorate([
    ContentChild(Header),
    __metadata("design:type", Object)
], Dialog.prototype, "headerFacet", void 0);
__decorate([
    ContentChild(Footer),
    __metadata("design:type", Object)
], Dialog.prototype, "footerFacet", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], Dialog.prototype, "containerViewChild", void 0);
__decorate([
    ViewChild('titlebar'),
    __metadata("design:type", ElementRef)
], Dialog.prototype, "headerViewChild", void 0);
__decorate([
    ViewChild('content'),
    __metadata("design:type", ElementRef)
], Dialog.prototype, "contentViewChild", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dialog.prototype, "onShow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dialog.prototype, "onHide", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dialog.prototype, "visibleChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Dialog.prototype, "visible", null);
Dialog = __decorate([
    Component({
        selector: 'p-dialog',
        template: `
        <div #container [ngClass]="{'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl,'ui-dialog-draggable':draggable}" [ngStyle]="style" [class]="styleClass"
            [style.display]="visible ? 'block' : 'none'" [style.width.px]="width" [style.height.px]="height" [style.minWidth.px]="minWidth" (mousedown)="moveOnTop()" [@dialogState]="visible ? 'visible' : 'hidden'">
            <div #titlebar class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top"
                (mousedown)="initDrag($event)" (mouseup)="endDrag($event)" *ngIf="showHeader">
                <span class="ui-dialog-title" *ngIf="header">{{header}}</span>
                <span class="ui-dialog-title" *ngIf="headerFacet">
                    <ng-content select="p-header"></ng-content>
                </span>
                <a *ngIf="closable" [ngClass]="{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}" href="#" role="button" (click)="close($event)" (mousedown)="onCloseMouseDown($event)">
                    <span class="fa fa-fw fa-close"></span>
                </a>
            </div>
            <div #content class="ui-dialog-content ui-widget-content" [ngStyle]="contentStyle">
                <ng-content></ng-content>
            </div>
            <div class="ui-dialog-footer ui-widget-content" *ngIf="footerFacet">
                <ng-content select="p-footer"></ng-content>
            </div>
            <div *ngIf="resizable" class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"
                (mousedown)="initResize($event)"></div>
        </div>
    `,
        animations: [
            trigger('dialogState', [
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
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], Dialog);
export { Dialog };
let DialogModule = class DialogModule {
};
DialogModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Dialog, SharedModule],
        declarations: [Dialog]
    })
], DialogModule);
export { DialogModule };
//# sourceMappingURL=dialog.js.map