var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, Renderer2, ViewChild, EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header, Footer, PrimeTemplate, SharedModule } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
let DataScroller = class DataScroller {
    constructor(el, renderer, domHandler) {
        this.el = el;
        this.renderer = renderer;
        this.domHandler = domHandler;
        this.onLazyLoad = new EventEmitter();
        this.buffer = 0.9;
        this.dataToRender = [];
        this.first = 0;
    }
    ngAfterViewInit() {
        if (this.lazy) {
            this.load();
        }
        if (this.loader) {
            this.scrollFunction = this.renderer.listen(this.loader, 'click', () => {
                this.load();
            });
        }
        else {
            this.bindScrollListener();
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        this.handleDataChange();
    }
    handleDataChange() {
        if (this.lazy)
            this.dataToRender = this.value;
        else
            this.load();
    }
    load() {
        if (this.lazy) {
            this.onLazyLoad.emit({
                first: this.first,
                rows: this.rows
            });
            this.first = this.first + this.rows;
        }
        else {
            if (this.value) {
                for (let i = this.first; i < (this.first + this.rows); i++) {
                    if (i >= this.value.length) {
                        break;
                    }
                    this.dataToRender.push(this.value[i]);
                }
                this.first = this.first + this.rows;
            }
        }
    }
    reset() {
        this.first = 0;
        this.dataToRender = [];
        this.load();
    }
    isEmpty() {
        return !this.dataToRender || (this.dataToRender.length == 0);
    }
    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.rows
        };
    }
    bindScrollListener() {
        if (this.inline) {
            this.contentElement = this.contentViewChild.nativeElement;
            this.scrollFunction = this.renderer.listen(this.contentElement, 'scroll', () => {
                let scrollTop = this.contentElement.scrollTop;
                let scrollHeight = this.contentElement.scrollHeight;
                let viewportHeight = this.contentElement.clientHeight;
                if ((scrollTop >= ((scrollHeight * this.buffer) - (viewportHeight)))) {
                    this.load();
                }
            });
        }
        else {
            this.scrollFunction = this.renderer.listen('window', 'scroll', () => {
                let docBody = document.body;
                let docElement = document.documentElement;
                let scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
                let winHeight = docElement.clientHeight;
                let docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight, winHeight, docElement.scrollHeight, docElement.offsetHeight);
                if (scrollTop >= ((docHeight * this.buffer) - winHeight)) {
                    this.load();
                }
            });
        }
    }
    ngOnDestroy() {
        //unbind
        if (this.scrollFunction) {
            this.scrollFunction();
            this.contentElement = null;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataScroller.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataScroller.prototype, "lazy", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataScroller.prototype, "onLazyLoad", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataScroller.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataScroller.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataScroller.prototype, "buffer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataScroller.prototype, "inline", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataScroller.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataScroller.prototype, "loader", void 0);
__decorate([
    ViewChild('content'),
    __metadata("design:type", ElementRef)
], DataScroller.prototype, "contentViewChild", void 0);
__decorate([
    ContentChild(Header),
    __metadata("design:type", Object)
], DataScroller.prototype, "header", void 0);
__decorate([
    ContentChild(Footer),
    __metadata("design:type", Object)
], DataScroller.prototype, "footer", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], DataScroller.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DataScroller.prototype, "value", null);
DataScroller = __decorate([
    Component({
        selector: 'p-dataScroller',
        template: `
    <div [ngClass]="{'ui-datascroller ui-widget': true, 'ui-datascroller-inline': inline}" [ngStyle]="style" [class]="styleClass">
        <div class="ui-datascroller-header ui-widget-header ui-corner-top" *ngIf="header">
            <ng-content select="p-header"></ng-content>
        </div>
        <div #content class="ui-datascroller-content ui-widget-content" [ngStyle]="{'max-height': scrollHeight}">
            <ul class="ui-datascroller-list">
                <li *ngFor="let item of dataToRender">
                    <ng-template [pTemplateWrapper]="itemTemplate" [item]="item"></ng-template>
                </li>
            </ul>
        </div>
        <div class="ui-datascroller-footer ui-widget-header ui-corner-bottom" *ngIf="footer">
            <ng-content select="p-footer"></ng-content>
        </div>
    </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2, DomHandler])
], DataScroller);
export { DataScroller };
let DataScrollerModule = class DataScrollerModule {
};
DataScrollerModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule],
        exports: [DataScroller, SharedModule],
        declarations: [DataScroller]
    })
], DataScrollerModule);
export { DataScrollerModule };
//# sourceMappingURL=datascroller.js.map