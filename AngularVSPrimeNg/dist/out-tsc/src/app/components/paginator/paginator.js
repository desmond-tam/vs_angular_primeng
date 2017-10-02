var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
let Paginator = class Paginator {
    constructor() {
        this.pageLinkSize = 5;
        this.onPageChange = new EventEmitter();
        this.alwaysShow = true;
        this._totalRecords = 0;
        this._first = 0;
        this._rows = 0;
    }
    get totalRecords() {
        return this._totalRecords;
    }
    set totalRecords(val) {
        this._totalRecords = val;
        this.updatePageLinks();
    }
    get first() {
        return this._first;
    }
    set first(val) {
        this._first = val;
        this.updatePageLinks();
    }
    get rows() {
        return this._rows;
    }
    set rows(val) {
        this._rows = val;
        this.updatePageLinks();
    }
    isFirstPage() {
        return this.getPage() === 0;
    }
    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }
    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }
    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    }
    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    }
    changePage(p) {
        var pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this.first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
        }
    }
    getPage() {
        return Math.floor(this.first / this.rows);
    }
    changePageToFirst(event) {
        if (!this.isFirstPage()) {
            this.changePage(0);
        }
        event.preventDefault();
    }
    changePageToPrev(event) {
        this.changePage(this.getPage() - 1);
        event.preventDefault();
    }
    changePageToNext(event) {
        this.changePage(this.getPage() + 1);
        event.preventDefault();
    }
    changePageToLast(event) {
        if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
        }
        event.preventDefault();
    }
    onPageLinkClick(event, page) {
        this.changePage(page);
        event.preventDefault();
    }
    onRppChange(event) {
        this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
        this.changePage(this.getPage());
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], Paginator.prototype, "pageLinkSize", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Paginator.prototype, "onPageChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Paginator.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Paginator.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], Paginator.prototype, "rowsPerPageOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Paginator.prototype, "alwaysShow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Paginator.prototype, "totalRecords", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Paginator.prototype, "first", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Paginator.prototype, "rows", null);
Paginator = __decorate([
    Component({
        selector: 'p-paginator',
        template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'ui-paginator ui-widget ui-widget-header ui-unselectable-text'"
            *ngIf="alwaysShow ? true : (pageLinks && pageLinks.length > 1)">
            <a href="#" class="ui-paginator-first ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToFirst($event)" [ngClass]="{'ui-state-disabled':isFirstPage()}" [tabindex]="isFirstPage() ? -1 : null">
                <span class="fa fa-step-backward"></span>
            </a>
            <a href="#" class="ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToPrev($event)" [ngClass]="{'ui-state-disabled':isFirstPage()}" [tabindex]="isFirstPage() ? -1 : null">
                <span class="fa fa-backward"></span>
            </a>
            <span class="ui-paginator-pages">
                <a href="#" *ngFor="let pageLink of pageLinks" class="ui-paginator-page ui-paginator-element ui-state-default ui-corner-all"
                    (click)="onPageLinkClick($event, pageLink - 1)" [ngClass]="{'ui-state-active': (pageLink-1 == getPage())}">{{pageLink}}</a>
            </span>
            <a href="#" class="ui-paginator-next ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToNext($event)" [ngClass]="{'ui-state-disabled':isLastPage()}" [tabindex]="isLastPage() ? -1 : null">
                <span class="fa fa-forward"></span>
            </a>
            <a href="#" class="ui-paginator-last ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToLast($event)" [ngClass]="{'ui-state-disabled':isLastPage()}" [tabindex]="isLastPage() ? -1 : null">
                <span class="fa fa-step-forward"></span>
            </a>
            <select class="ui-paginator-rpp-options ui-widget ui-state-default" *ngIf="rowsPerPageOptions" (change)="onRppChange($event)">
                <option *ngFor="let opt of rowsPerPageOptions" [value]="opt" [selected]="rows == opt">{{opt}}</option>
            </select>
        </div>
    `
    })
], Paginator);
export { Paginator };
let PaginatorModule = class PaginatorModule {
};
PaginatorModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Paginator],
        declarations: [Paginator]
    })
], PaginatorModule);
export { PaginatorModule };
//# sourceMappingURL=paginator.js.map