var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Directive, ElementRef, TemplateRef, ViewContainerRef, Renderer2, EventEmitter, Output, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
let DeferredLoader = class DeferredLoader {
    constructor(el, domHandler, renderer, viewContainer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.onLoad = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.shouldLoad()) {
            this.load();
        }
        this.documentScrollListener = this.renderer.listen('window', 'scroll', () => {
            if (this.shouldLoad()) {
                this.load();
                this.documentScrollListener();
                this.documentScrollListener = null;
            }
        });
    }
    shouldLoad() {
        let rect = this.el.nativeElement.getBoundingClientRect();
        let docElement = document.documentElement;
        let scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
        let winHeight = docElement.clientHeight;
        return (winHeight >= rect.top);
    }
    load() {
        this.view = this.viewContainer.createEmbeddedView(this.template);
        this.onLoad.emit();
    }
    ngOnDestroy() {
        this.view = null;
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DeferredLoader.prototype, "onLoad", void 0);
__decorate([
    ContentChild(TemplateRef),
    __metadata("design:type", TemplateRef)
], DeferredLoader.prototype, "template", void 0);
DeferredLoader = __decorate([
    Directive({
        selector: '[pDefer]',
        host: {},
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, ViewContainerRef])
], DeferredLoader);
export { DeferredLoader };
let DeferModule = class DeferModule {
};
DeferModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [DeferredLoader],
        declarations: [DeferredLoader]
    })
], DeferModule);
export { DeferModule };
//# sourceMappingURL=defer.js.map