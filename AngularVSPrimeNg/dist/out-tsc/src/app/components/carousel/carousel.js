var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, EventEmitter, Input, Output, ContentChildren, QueryList, Renderer2, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { SharedModule, PrimeTemplate } from '../common/shared';
import { CommonModule } from '@angular/common';
let Carousel = class Carousel {
    constructor(el, domHandler, renderer, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.cd = cd;
        this.numVisible = 3;
        this.firstVisible = 0;
        this.circular = false;
        this.breakpoint = 560;
        this.responsive = true;
        this.autoplayInterval = 0;
        this.effectDuration = '1s';
        this.easing = 'ease-out';
        this.pageLinks = 3;
        this.onPage = new EventEmitter();
        this.left = 0;
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
        if (this.value && this.value.length) {
            if (this.value.length && this.firstVisible >= this.value.length) {
                this.setPage(this.totalPages - 1);
            }
        }
        else {
            this.setPage(0);
        }
        this.valuesChanged = true;
    }
    ngAfterViewChecked() {
        if (this.valuesChanged && this.containerViewChild.nativeElement.offsetParent) {
            this.render();
            this.valuesChanged = false;
        }
    }
    ngAfterViewInit() {
        if (this.responsive) {
            this.documentResponsiveListener = this.renderer.listen('window', 'resize', (event) => {
                this.updateState();
            });
        }
    }
    updateLinks() {
        this.anchorPageLinks = [];
        for (let i = 0; i < this.totalPages; i++) {
            this.anchorPageLinks.push(i);
        }
    }
    updateDropdown() {
        this.selectDropdownOptions = [];
        for (let i = 0; i < this.totalPages; i++) {
            this.selectDropdownOptions.push(i);
        }
    }
    updateMobileDropdown() {
        this.mobileDropdownOptions = [];
        for (let i = 0; i < this.value.length; i++) {
            this.mobileDropdownOptions.push(i);
        }
    }
    render() {
        if (this.autoplayInterval) {
            this.stopAutoplay();
        }
        this.items = this.domHandler.find(this.itemsViewChild.nativeElement, 'li');
        this.calculateColumns();
        this.calculateItemWidths();
        if (!this.responsive) {
            this.containerViewChild.nativeElement.style.width = (this.domHandler.width(this.containerViewChild.nativeElement)) + 'px';
        }
        if (this.autoplayInterval) {
            this.circular = true;
            this.startAutoplay();
        }
        this.updateMobileDropdown();
        this.updateLinks();
        this.updateDropdown();
        this.cd.detectChanges();
    }
    calculateItemWidths() {
        let firstItem = (this.items && this.items.length) ? this.items[0] : null;
        if (firstItem) {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].style.width = ((this.domHandler.innerWidth(this.viewportViewChild.nativeElement) - (this.domHandler.getHorizontalMargin(firstItem) * this.columns)) / this.columns) + 'px';
            }
        }
    }
    calculateColumns() {
        if (window.innerWidth <= this.breakpoint) {
            this.shrinked = true;
            this.columns = 1;
        }
        else {
            this.shrinked = false;
            this.columns = this.numVisible;
        }
        this.page = Math.floor(this.firstVisible / this.columns);
    }
    onNextNav() {
        let lastPage = (this.page === (this.totalPages - 1));
        if (!lastPage)
            this.setPage(this.page + 1);
        else if (this.circular)
            this.setPage(0);
    }
    onPrevNav() {
        if (this.page !== 0)
            this.setPage(this.page - 1);
        else if (this.circular)
            this.setPage(this.totalPages - 1);
    }
    setPageWithLink(event, p) {
        this.setPage(p);
        event.preventDefault();
    }
    setPage(p, enforce) {
        if (p !== this.page || enforce) {
            this.page = p;
            this.left = (-1 * (this.domHandler.innerWidth(this.viewportViewChild.nativeElement) * this.page));
            this.firstVisible = this.page * this.columns;
            this.onPage.emit({
                page: this.page
            });
        }
    }
    onDropdownChange(val) {
        this.setPage(parseInt(val));
    }
    get displayPageLinks() {
        return (this.totalPages <= this.pageLinks && !this.shrinked);
    }
    get displayPageDropdown() {
        return (this.totalPages > this.pageLinks && !this.shrinked);
    }
    get totalPages() {
        return (this.value && this.value.length) ? Math.ceil(this.value.length / this.columns) : 0;
    }
    routerDisplay() {
        let win = window;
        if (win.innerWidth <= this.breakpoint)
            return true;
        else
            return false;
    }
    updateState() {
        let win = window;
        if (win.innerWidth <= this.breakpoint) {
            this.shrinked = true;
            this.columns = 1;
        }
        else if (this.shrinked) {
            this.shrinked = false;
            this.columns = this.numVisible;
            this.updateLinks();
            this.updateDropdown();
        }
        this.calculateItemWidths();
        this.setPage(Math.floor(this.firstVisible / this.columns), true);
    }
    startAutoplay() {
        this.interval = setInterval(() => {
            if (this.page === (this.totalPages - 1))
                this.setPage(0);
            else
                this.setPage(this.page + 1);
        }, this.autoplayInterval);
    }
    stopAutoplay() {
        clearInterval(this.interval);
    }
    ngOnDestroy() {
        if (this.documentResponsiveListener) {
            this.documentResponsiveListener();
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], Carousel.prototype, "numVisible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Carousel.prototype, "firstVisible", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Carousel.prototype, "headerText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Carousel.prototype, "circular", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Carousel.prototype, "breakpoint", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Carousel.prototype, "responsive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Carousel.prototype, "autoplayInterval", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Carousel.prototype, "effectDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Carousel.prototype, "easing", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Carousel.prototype, "pageLinks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Carousel.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Carousel.prototype, "styleClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Carousel.prototype, "onPage", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], Carousel.prototype, "templates", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], Carousel.prototype, "containerViewChild", void 0);
__decorate([
    ViewChild('viewport'),
    __metadata("design:type", ElementRef)
], Carousel.prototype, "viewportViewChild", void 0);
__decorate([
    ViewChild('items'),
    __metadata("design:type", ElementRef)
], Carousel.prototype, "itemsViewChild", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Carousel.prototype, "value", null);
Carousel = __decorate([
    Component({
        selector: 'p-carousel',
        template: `
        <div #container [ngClass]="{'ui-carousel ui-widget ui-widget-content ui-corner-all':true}" [ngStyle]="style" [class]="styleClass">
            <div class="ui-carousel-header ui-widget-header ui-corner-all">
                <span class="ui-carousel-header-title">{{headerText}}</span>
                <span class="ui-carousel-button ui-carousel-next-button fa fa-arrow-circle-right" (click)="onNextNav()" 
                        [ngClass]="{'ui-state-disabled':(page === (totalPages-1)) && !circular}" *ngIf="value&&value.length"></span>
                <span class="ui-carousel-button ui-carousel-prev-button fa fa-arrow-circle-left" (click)="onPrevNav()" 
                        [ngClass]="{'ui-state-disabled':(page === 0 && !circular)}" *ngIf="value&&value.length"></span>
                <div *ngIf="displayPageLinks" class="ui-carousel-page-links">
                    <a href="#" (click)="setPageWithLink($event,i)" class="ui-carousel-page-link fa fa-circle-o" *ngFor="let links of anchorPageLinks;let i=index" [ngClass]="{'fa-dot-circle-o':page===i}"></a>
                </div>
                <select *ngIf="displayPageDropdown" class="ui-carousel-dropdown ui-widget ui-state-default ui-corner-left" [value]="page" (change)="onDropdownChange($event.target.value)">
                    <option *ngFor="let option of selectDropdownOptions" [value]="option" [selected]="value == option">{{option+1}}</option>
                </select>
                <select *ngIf="responsive&&value&&value.length" class="ui-carousel-mobiledropdown ui-widget ui-state-default ui-corner-left" [value]="page" (change)="onDropdownChange($event.target.value)"
                    [style.display]="shrinked ? 'block' : 'none'">
                    <option *ngFor="let option of mobileDropdownOptions" [value]="option" [selected]="value == option">{{option+1}}</option>
                </select>
            </div>
            <div #viewport class="ui-carousel-viewport">
                <ul #items class="ui-carousel-items" [style.left.px]="left" [style.transitionProperty]="'left'" 
                            [style.transitionDuration]="effectDuration" [style.transitionTimingFunction]="easing">
                    <li *ngFor="let item of value" class="ui-carousel-item ui-widget-content ui-corner-all">
                        <ng-template [pTemplateWrapper]="itemTemplate" [item]="item"></ng-template>
                    </li>
                </ul>
            </div>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, ChangeDetectorRef])
], Carousel);
export { Carousel };
let CarouselModule = class CarouselModule {
};
CarouselModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule],
        exports: [Carousel, SharedModule],
        declarations: [Carousel]
    })
], CarouselModule);
export { CarouselModule };
//# sourceMappingURL=carousel.js.map