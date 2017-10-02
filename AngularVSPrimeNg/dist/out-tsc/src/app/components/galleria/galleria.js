var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
let Galleria = class Galleria {
    constructor(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.panelWidth = 600;
        this.panelHeight = 400;
        this.frameWidth = 60;
        this.frameHeight = 40;
        this.activeIndex = 0;
        this.showFilmstrip = true;
        this.autoPlay = true;
        this.transitionInterval = 4000;
        this.showCaption = true;
        this.onImageClicked = new EventEmitter();
        this.stripLeft = 0;
    }
    ngAfterViewChecked() {
        if (this.imagesChanged) {
            this.stopSlideshow();
            this.render();
            this.imagesChanged = false;
        }
    }
    get images() {
        return this._images;
    }
    set images(value) {
        this._images = value;
        this.activeIndex = 0;
        this.imagesChanged = true;
    }
    ngAfterViewInit() {
        this.container = this.el.nativeElement.children[0];
        this.panelWrapper = this.domHandler.findSingle(this.el.nativeElement, 'ul.ui-galleria-panel-wrapper');
        this.initialized = true;
        if (this.showFilmstrip) {
            this.stripWrapper = this.domHandler.findSingle(this.container, 'div.ui-galleria-filmstrip-wrapper');
            this.strip = this.domHandler.findSingle(this.stripWrapper, 'ul.ui-galleria-filmstrip');
        }
        if (this.images && this.images.length) {
            this.render();
        }
    }
    render() {
        this.panels = this.domHandler.find(this.panelWrapper, 'li.ui-galleria-panel');
        if (this.showFilmstrip) {
            this.frames = this.domHandler.find(this.strip, 'li.ui-galleria-frame');
            this.stripWrapper.style.width = this.domHandler.width(this.panelWrapper) - 50 + 'px';
            this.stripWrapper.style.height = this.frameHeight + 'px';
        }
        if (this.showCaption) {
            this.caption = this.domHandler.findSingle(this.container, 'div.ui-galleria-caption');
            this.caption.style.bottom = this.showFilmstrip ? this.domHandler.getOuterHeight(this.stripWrapper, true) + 'px' : 0 + 'px';
            this.caption.style.width = this.domHandler.width(this.panelWrapper) + 'px';
        }
        if (this.autoPlay) {
            this.startSlideshow();
        }
        this.container.style.visibility = 'visible';
    }
    startSlideshow() {
        this.interval = setInterval(() => {
            this.next();
        }, this.transitionInterval);
        this.slideshowActive = true;
    }
    stopSlideshow() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.slideshowActive = false;
    }
    clickNavRight() {
        if (this.slideshowActive) {
            this.stopSlideshow();
        }
        this.next();
    }
    clickNavLeft() {
        if (this.slideshowActive) {
            this.stopSlideshow();
        }
        this.prev();
    }
    frameClick(frame) {
        if (this.slideshowActive) {
            this.stopSlideshow();
        }
        this.select(this.domHandler.index(frame), false);
    }
    prev() {
        if (this.activeIndex !== 0) {
            this.select(this.activeIndex - 1, true);
        }
    }
    next() {
        if (this.activeIndex !== (this.panels.length - 1)) {
            this.select(this.activeIndex + 1, true);
        }
        else {
            this.select(0, false);
            this.stripLeft = 0;
        }
    }
    select(index, reposition) {
        if (index !== this.activeIndex) {
            let oldPanel = this.panels[this.activeIndex], newPanel = this.panels[index];
            this.domHandler.fadeIn(newPanel, 500);
            if (this.showFilmstrip) {
                let oldFrame = this.frames[this.activeIndex], newFrame = this.frames[index];
                if (reposition === undefined || reposition === true) {
                    let frameLeft = newFrame.offsetLeft, stepFactor = this.frameWidth + parseInt(getComputedStyle(newFrame)['margin-right'], 10), stripLeft = this.strip.offsetLeft, frameViewportLeft = frameLeft + stripLeft, frameViewportRight = frameViewportLeft + this.frameWidth;
                    if (frameViewportRight > this.domHandler.width(this.stripWrapper))
                        this.stripLeft -= stepFactor;
                    else if (frameViewportLeft < 0)
                        this.stripLeft += stepFactor;
                }
            }
            this.activeIndex = index;
        }
    }
    clickImage(event, image, i) {
        this.onImageClicked.emit({ originalEvent: event, image: image, index: i });
    }
    ngOnDestroy() {
        this.stopSlideshow();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], Galleria.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Galleria.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Galleria.prototype, "panelWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Galleria.prototype, "panelHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Galleria.prototype, "frameWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Galleria.prototype, "frameHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Galleria.prototype, "activeIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Galleria.prototype, "showFilmstrip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Galleria.prototype, "autoPlay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Galleria.prototype, "transitionInterval", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Galleria.prototype, "showCaption", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Galleria.prototype, "onImageClicked", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Galleria.prototype, "images", null);
Galleria = __decorate([
    Component({
        selector: 'p-galleria',
        template: `
        <div [ngClass]="{'ui-galleria ui-widget ui-widget-content ui-corner-all':true}" [ngStyle]="style" [class]="styleClass" [style.width.px]="panelWidth">
            <ul class="ui-galleria-panel-wrapper" [style.width.px]="panelWidth" [style.height.px]="panelHeight">
                <li *ngFor="let image of images;let i=index" class="ui-galleria-panel" [ngClass]="{'ui-helper-hidden':i!=activeIndex}"
                    [style.width.px]="panelWidth" [style.height.px]="panelHeight" (click)="clickImage($event,image,i)">
                    <img class="ui-panel-images" [src]="image.source" [alt]="image.alt" [title]="image.title"/>
                </li>
            </ul>
            <div [ngClass]="{'ui-galleria-filmstrip-wrapper':true}" *ngIf="showFilmstrip">
                <ul class="ui-galleria-filmstrip" style="transition:left 1s" [style.left.px]="stripLeft">
                    <li #frame *ngFor="let image of images;let i=index" [ngClass]="{'ui-galleria-frame-active':i==activeIndex}" class="ui-galleria-frame" (click)="frameClick(frame)"
                        [style.width.px]="frameWidth" [style.height.px]="frameHeight" [style.transition]="'opacity 0.75s ease'">
                        <div class="ui-galleria-frame-content">
                            <img [src]="image.source" [alt]="image.alt" [title]="image.title" class="ui-galleria-frame-image"
                                [style.width.px]="frameWidth" [style.height.px]="frameHeight">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="ui-galleria-nav-prev fa fa-fw fa-chevron-circle-left" (click)="clickNavLeft()" [style.bottom.px]="frameHeight/2" *ngIf="activeIndex !== 0"></div>
            <div class="ui-galleria-nav-next fa fa-fw fa-chevron-circle-right" (click)="clickNavRight()" [style.bottom.px]="frameHeight/2"></div>
            <div class="ui-galleria-caption" *ngIf="showCaption&&images" style="display:block">
                <h4>{{images[activeIndex]?.title}}</h4><p>{{images[activeIndex]?.alt}}</p>
            </div>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler])
], Galleria);
export { Galleria };
let GalleriaModule = class GalleriaModule {
};
GalleriaModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Galleria],
        declarations: [Galleria]
    })
], GalleriaModule);
export { GalleriaModule };
//# sourceMappingURL=galleria.js.map