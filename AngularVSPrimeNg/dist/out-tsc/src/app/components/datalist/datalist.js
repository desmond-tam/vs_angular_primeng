var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChild, ContentChildren, QueryList, IterableDiffers } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, Header, Footer, PrimeTemplate } from '../common/shared';
import { PaginatorModule } from '../paginator/paginator';
let DataList = class DataList {
    constructor(el, differs) {
        this.el = el;
        this.differs = differs;
        this.pageLinks = 5;
        this.onLazyLoad = new EventEmitter();
        this.paginatorPosition = 'bottom';
        this.emptyMessage = 'No records found';
        this.alwaysShowPaginator = true;
        this.trackBy = (index, item) => item;
        this.immutable = true;
        this.onPage = new EventEmitter();
        this.first = 0;
        this.page = 0;
        this.differ = differs.find([]).create(null);
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
    ngAfterViewInit() {
        if (this.lazy) {
            this.onLazyLoad.emit({
                first: this.first,
                rows: this.rows
            });
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        if (this.immutable) {
            this.handleDataChange();
        }
    }
    handleDataChange() {
        if (this.paginator) {
            this.updatePaginator();
        }
        this.updateDataToRender(this.value);
    }
    ngDoCheck() {
        if (!this.immutable) {
            let changes = this.differ.diff(this.value);
            if (changes) {
                this.handleDataChange();
            }
        }
    }
    updatePaginator() {
        //total records
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
        //first
        if (this.totalRecords && this.first >= this.totalRecords) {
            let numberOfPages = Math.ceil(this.totalRecords / this.rows);
            this.first = Math.max((numberOfPages - 1) * this.rows, 0);
        }
    }
    paginate(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.updateDataToRender(this.value);
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    }
    updateDataToRender(datasource) {
        if (this.paginator && datasource) {
            this.dataToRender = [];
            let startIndex = this.lazy ? 0 : this.first;
            for (let i = startIndex; i < (startIndex + this.rows); i++) {
                if (i >= datasource.length) {
                    break;
                }
                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
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
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataList.prototype, "paginator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataList.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataList.prototype, "totalRecords", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataList.prototype, "pageLinks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DataList.prototype, "rowsPerPageOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataList.prototype, "lazy", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataList.prototype, "onLazyLoad", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataList.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataList.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataList.prototype, "paginatorPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataList.prototype, "emptyMessage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataList.prototype, "alwaysShowPaginator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], DataList.prototype, "trackBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataList.prototype, "immutable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataList.prototype, "scrollable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataList.prototype, "scrollHeight", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataList.prototype, "onPage", void 0);
__decorate([
    ContentChild(Header),
    __metadata("design:type", Object)
], DataList.prototype, "header", void 0);
__decorate([
    ContentChild(Footer),
    __metadata("design:type", Object)
], DataList.prototype, "footer", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], DataList.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DataList.prototype, "value", null);
DataList = __decorate([
    Component({
        selector: 'p-dataList',
        template: `
        <div [ngClass]="{'ui-datalist ui-widget': true, 'ui-datalist-scrollable': scrollable}" [ngStyle]="style" [class]="styleClass">
            <div class="ui-datalist-header ui-widget-header ui-corner-top" *ngIf="header">
                <ng-content select="p-header"></ng-content>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" [alwaysShow]="alwaysShowPaginator"
            (onPageChange)="paginate($event)" styleClass="ui-paginator-bottom" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator  && paginatorPosition!='bottom' || paginatorPosition =='both'"></p-paginator>
            <div class="ui-datalist-content ui-widget-content" [ngStyle]="{'max-height': scrollHeight}">
                <div *ngIf="isEmpty()" class="ui-datalist-emptymessage">{{emptyMessage}}</div>
                <ul class="ui-datalist-data">
                    <li *ngFor="let item of dataToRender;let i = index;trackBy: trackBy">
                        <ng-template [pTemplateWrapper]="itemTemplate" [item]="item" [index]="i"></ng-template>
                    </li>
                </ul>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" [alwaysShow]="alwaysShowPaginator"
            (onPageChange)="paginate($event)" styleClass="ui-paginator-bottom" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator  && paginatorPosition!='top' || paginatorPosition =='both'"></p-paginator>
            <div class="ui-datalist-footer ui-widget-header ui-corner-bottom" *ngIf="footer">
                <ng-content select="p-footer"></ng-content>
            </div>
        </div>
    `
    }),
    __metadata("design:paramtypes", [ElementRef, IterableDiffers])
], DataList);
export { DataList };
let DataListModule = class DataListModule {
};
DataListModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule, PaginatorModule],
        exports: [DataList, SharedModule],
        declarations: [DataList]
    })
], DataListModule);
export { DataListModule };
//# sourceMappingURL=datalist.js.map