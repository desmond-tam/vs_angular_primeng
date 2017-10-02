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
import { Header, Footer, PrimeTemplate, SharedModule } from '../common/shared';
import { PaginatorModule } from '../paginator/paginator';
let DataGrid = class DataGrid {
    constructor(el, differs) {
        this.el = el;
        this.differs = differs;
        this.pageLinks = 5;
        this.emptyMessage = 'No records found';
        this.onLazyLoad = new EventEmitter();
        this.paginatorPosition = 'bottom';
        this.alwaysShowPaginator = true;
        this.trackBy = (index, item) => item;
        this.immutable = true;
        this.onPage = new EventEmitter();
        this.first = 0;
        this.page = 0;
        this.differ = differs.find([]).create(null);
    }
    ngAfterViewInit() {
        if (this.lazy) {
            this.onLazyLoad.emit({
                first: this.first,
                rows: this.rows
            });
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
], DataGrid.prototype, "paginator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataGrid.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataGrid.prototype, "totalRecords", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataGrid.prototype, "pageLinks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DataGrid.prototype, "rowsPerPageOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataGrid.prototype, "lazy", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataGrid.prototype, "emptyMessage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataGrid.prototype, "onLazyLoad", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataGrid.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataGrid.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataGrid.prototype, "paginatorPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataGrid.prototype, "alwaysShowPaginator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], DataGrid.prototype, "trackBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataGrid.prototype, "immutable", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataGrid.prototype, "onPage", void 0);
__decorate([
    ContentChild(Header),
    __metadata("design:type", Object)
], DataGrid.prototype, "header", void 0);
__decorate([
    ContentChild(Footer),
    __metadata("design:type", Object)
], DataGrid.prototype, "footer", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], DataGrid.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DataGrid.prototype, "value", null);
DataGrid = __decorate([
    Component({
        selector: 'p-dataGrid',
        template: `
        <div [ngClass]="'ui-datagrid ui-widget'" [ngStyle]="style" [class]="styleClass">
            <div class="ui-datagrid-header ui-widget-header ui-corner-top" *ngIf="header">
                <ng-content select="p-header"></ng-content>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)" styleClass="ui-paginator-bottom" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && paginatorPosition!='bottom' || paginatorPosition =='both'"></p-paginator>
            <div class="ui-datagrid-content ui-widget-content">
                <div class="ui-g">
                    <ng-template ngFor [ngForOf]="dataToRender" [ngForTemplate]="itemTemplate" [ngForTrackBy]="trackBy"></ng-template>
                    <div *ngIf="isEmpty()" class="ui-widget-content ui-g-12">{{emptyMessage}}</div>
                </div>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)" styleClass="ui-paginator-bottom" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && paginatorPosition!='top' || paginatorPosition =='both'"></p-paginator>
            <div class="ui-datagrid-footer ui-widget-header ui-corner-top" *ngIf="footer">
                <ng-content select="p-footer"></ng-content>
            </div>
        </div>
    `
    }),
    __metadata("design:paramtypes", [ElementRef, IterableDiffers])
], DataGrid);
export { DataGrid };
let DataGridModule = class DataGridModule {
};
DataGridModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule, PaginatorModule],
        exports: [DataGrid, SharedModule],
        declarations: [DataGrid]
    })
], DataGridModule);
export { DataGridModule };
//# sourceMappingURL=datagrid.js.map