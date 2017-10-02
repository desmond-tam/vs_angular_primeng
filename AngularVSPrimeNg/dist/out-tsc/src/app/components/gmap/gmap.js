var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, IterableDiffers, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
let GMap = class GMap {
    constructor(el, differs, cd, zone) {
        this.el = el;
        this.cd = cd;
        this.zone = zone;
        this.onMapClick = new EventEmitter();
        this.onOverlayClick = new EventEmitter();
        this.onOverlayDragStart = new EventEmitter();
        this.onOverlayDrag = new EventEmitter();
        this.onOverlayDragEnd = new EventEmitter();
        this.onMapReady = new EventEmitter();
        this.onMapDragEnd = new EventEmitter();
        this.onZoomChanged = new EventEmitter();
        this.differ = differs.find([]).create(null);
    }
    ngAfterViewChecked() {
        if (!this.map && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    }
    initialize() {
        this.map = new google.maps.Map(this.el.nativeElement.children[0], this.options);
        this.onMapReady.emit({
            map: this.map
        });
        if (this.overlays) {
            for (let overlay of this.overlays) {
                overlay.setMap(this.map);
                this.bindOverlayEvents(overlay);
            }
        }
        this.map.addListener('click', (event) => {
            this.zone.run(() => {
                this.onMapClick.emit(event);
            });
        });
        this.map.addListener('dragend', (event) => {
            this.zone.run(() => {
                this.onMapDragEnd.emit(event);
            });
        });
        this.map.addListener('zoom_changed', (event) => {
            this.zone.run(() => {
                this.onZoomChanged.emit(event);
            });
        });
    }
    bindOverlayEvents(overlay) {
        overlay.addListener('click', (event) => {
            this.zone.run(() => {
                this.onOverlayClick.emit({
                    originalEvent: event,
                    'overlay': overlay,
                    map: this.map
                });
            });
        });
        if (overlay.getDraggable()) {
            this.bindDragEvents(overlay);
        }
    }
    ngDoCheck() {
        let changes = this.differ.diff(this.overlays);
        if (changes && this.map) {
            changes.forEachRemovedItem((record) => { record.item.setMap(null); });
            changes.forEachAddedItem((record) => {
                record.item.setMap(this.map);
                record.item.addListener('click', (event) => {
                    this.zone.run(() => {
                        this.onOverlayClick.emit({
                            originalEvent: event,
                            overlay: record.item,
                            map: this.map
                        });
                    });
                });
                if (record.item.getDraggable()) {
                    this.bindDragEvents(record.item);
                }
            });
        }
    }
    bindDragEvents(overlay) {
        overlay.addListener('dragstart', (event) => {
            this.zone.run(() => {
                this.onOverlayDragStart.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: this.map
                });
            });
        });
        overlay.addListener('drag', (event) => {
            this.zone.run(() => {
                this.onOverlayDrag.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: this.map
                });
            });
        });
        overlay.addListener('dragend', (event) => {
            this.zone.run(() => {
                this.onOverlayDragEnd.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: this.map
                });
            });
        });
    }
    getMap() {
        return this.map;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], GMap.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], GMap.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GMap.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], GMap.prototype, "overlays", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GMap.prototype, "onMapClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GMap.prototype, "onOverlayClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GMap.prototype, "onOverlayDragStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GMap.prototype, "onOverlayDrag", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GMap.prototype, "onOverlayDragEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GMap.prototype, "onMapReady", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GMap.prototype, "onMapDragEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GMap.prototype, "onZoomChanged", void 0);
GMap = __decorate([
    Component({
        selector: 'p-gmap',
        template: `<div [ngStyle]="style" [class]="styleClass"></div>`
    }),
    __metadata("design:paramtypes", [ElementRef, IterableDiffers, ChangeDetectorRef, NgZone])
], GMap);
export { GMap };
let GMapModule = class GMapModule {
};
GMapModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [GMap],
        declarations: [GMap]
    })
], GMapModule);
export { GMapModule };
//# sourceMappingURL=gmap.js.map