var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
let Tooltip = class Tooltip {
    constructor(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.tooltipPosition = 'right';
        this.tooltipEvent = 'hover';
        this.appendTo = 'body';
        this.tooltipZIndex = 'auto';
        this.escape = true;
    }
    onMouseEnter(e) {
        if (this.tooltipEvent === 'hover') {
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.destroy();
            }
            this.activate();
        }
    }
    onMouseLeave(e) {
        if (this.tooltipEvent === 'hover') {
            this.deactivate(true);
        }
    }
    onFocus(e) {
        if (this.tooltipEvent === 'focus') {
            this.activate();
        }
    }
    onBlur(e) {
        if (this.tooltipEvent === 'focus') {
            this.deactivate(true);
        }
    }
    activate() {
        this.active = true;
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        if (this.showDelay)
            this.showTimeout = setTimeout(() => { this.show(); }, this.showDelay);
        else
            this.show();
        if (this.life) {
            this.lifeTimeout = setTimeout(() => { this.deactivate(false); }, this.life);
        }
    }
    deactivate(useDelay) {
        this.active = false;
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
        }
        if (this.lifeTimeout) {
            clearTimeout(this.lifeTimeout);
        }
        if (this.hideDelay && useDelay)
            this.hideTimeout = setTimeout(() => { this.hide(); }, this.hideDelay);
        else
            this.hide();
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._text = text;
        if (this.active) {
            if (this._text) {
                if (this.container && this.container.offsetParent)
                    this.updateText();
                else
                    this.show();
            }
            else {
                this.hide();
            }
        }
    }
    create() {
        this.container = document.createElement('div');
        let tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        this.tooltipText = document.createElement('div');
        this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
        this.updateText();
        if (this.positionStyle) {
            this.container.style.position = this.positionStyle;
        }
        this.container.appendChild(this.tooltipText);
        if (this.appendTo === 'body')
            document.body.appendChild(this.container);
        else if (this.appendTo === 'target')
            this.domHandler.appendChild(this.container, this.el.nativeElement);
        else
            this.domHandler.appendChild(this.container, this.appendTo);
        this.container.style.display = 'inline-block';
    }
    show() {
        if (!this.text || this.disabled) {
            return;
        }
        this.create();
        this.align();
        if (this.tooltipStyleClass) {
            this.container.className = this.container.className + ' ' + this.tooltipStyleClass;
        }
        this.domHandler.fadeIn(this.container, 250);
        if (this.tooltipZIndex === 'auto')
            this.container.style.zIndex = ++DomHandler.zindex;
        else
            this.container.style.zIndex = this.tooltipZIndex;
        this.bindDocumentResizeListener();
    }
    hide() {
        this.destroy();
    }
    updateText() {
        if (this.escape) {
            this.tooltipText.innerHTML = '';
            this.tooltipText.appendChild(document.createTextNode(this._text));
        }
        else {
            this.tooltipText.innerHTML = this._text;
        }
    }
    align() {
        let position = this.tooltipPosition;
        switch (position) {
            case 'top':
                this.alignTop();
                if (this.isOutOfBounds()) {
                    this.alignBottom();
                }
                break;
            case 'bottom':
                this.alignBottom();
                if (this.isOutOfBounds()) {
                    this.alignTop();
                }
                break;
            case 'left':
                this.alignLeft();
                if (this.isOutOfBounds()) {
                    this.alignRight();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
            case 'right':
                this.alignRight();
                if (this.isOutOfBounds()) {
                    this.alignLeft();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
        }
    }
    getHostOffset() {
        let offset = this.el.nativeElement.getBoundingClientRect();
        let targetLeft = offset.left + this.domHandler.getWindowScrollLeft();
        let targetTop = offset.top + this.domHandler.getWindowScrollTop();
        return { left: targetLeft, top: targetTop };
    }
    alignRight() {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-right';
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + this.domHandler.getOuterWidth(this.el.nativeElement);
        let top = hostOffset.top + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }
    alignLeft() {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-left';
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left - this.domHandler.getOuterWidth(this.container);
        let top = hostOffset.top + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }
    alignTop() {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-top';
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
        let top = hostOffset.top - this.domHandler.getOuterHeight(this.container);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }
    alignBottom() {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-bottom';
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
        let top = hostOffset.top + this.domHandler.getOuterHeight(this.el.nativeElement);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }
    preAlign() {
        this.container.style.left = -999 + 'px';
        this.container.style.top = -999 + 'px';
    }
    isOutOfBounds() {
        let offset = this.container.getBoundingClientRect();
        let targetTop = offset.top;
        let targetLeft = offset.left;
        let width = this.domHandler.getOuterWidth(this.container);
        let height = this.domHandler.getOuterHeight(this.container);
        let viewport = this.domHandler.getViewport();
        return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.renderer.listen('window', 'resize', (event) => {
            this.hide();
        });
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            this.documentResizeListener();
            this.documentResizeListener = null;
        }
    }
    destroy() {
        this.unbindDocumentResizeListener();
        if (this.container && this.container.parentElement) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.container);
            else if (this.appendTo === 'target')
                this.el.nativeElement.removeChild(this.container);
            else
                this.domHandler.removeChild(this.container, this.appendTo);
        }
        this.container = null;
    }
    ngOnDestroy() {
        this.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltipPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltipEvent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Tooltip.prototype, "appendTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Tooltip.prototype, "positionStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltipStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltipZIndex", void 0);
__decorate([
    Input("tooltipDisabled"),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "escape", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Tooltip.prototype, "showDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Tooltip.prototype, "hideDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Tooltip.prototype, "life", void 0);
__decorate([
    HostListener('mouseenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onMouseLeave", null);
__decorate([
    HostListener('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onFocus", null);
__decorate([
    HostListener('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onBlur", null);
__decorate([
    Input('pTooltip'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Tooltip.prototype, "text", null);
Tooltip = __decorate([
    Directive({
        selector: '[pTooltip]',
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2])
], Tooltip);
export { Tooltip };
let TooltipModule = class TooltipModule {
};
TooltipModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Tooltip],
        declarations: [Tooltip]
    })
], TooltipModule);
export { TooltipModule };
//# sourceMappingURL=tooltip.js.map