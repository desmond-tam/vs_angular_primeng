var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, EventEmitter, Directive, ViewContainerRef, Input, Output, ContentChildren, ContentChild, TemplateRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
let Header = class Header {
};
Header = __decorate([
    Component({
        selector: 'p-header',
        template: '<ng-content></ng-content>'
    })
], Header);
export { Header };
let Footer = class Footer {
};
Footer = __decorate([
    Component({
        selector: 'p-footer',
        template: '<ng-content></ng-content>'
    })
], Footer);
export { Footer };
let PrimeTemplate = class PrimeTemplate {
    constructor(template) {
        this.template = template;
    }
    getType() {
        return this.name;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], PrimeTemplate.prototype, "type", void 0);
__decorate([
    Input('pTemplate'),
    __metadata("design:type", String)
], PrimeTemplate.prototype, "name", void 0);
PrimeTemplate = __decorate([
    Directive({
        selector: '[pTemplate]',
        host: {}
    }),
    __metadata("design:paramtypes", [TemplateRef])
], PrimeTemplate);
export { PrimeTemplate };
let TemplateWrapper = class TemplateWrapper {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item,
            'index': this.index
        });
    }
    ngOnDestroy() {
        this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TemplateWrapper.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TemplateWrapper.prototype, "index", void 0);
__decorate([
    Input('pTemplateWrapper'),
    __metadata("design:type", TemplateRef)
], TemplateWrapper.prototype, "templateRef", void 0);
TemplateWrapper = __decorate([
    Directive({
        selector: '[pTemplateWrapper]'
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], TemplateWrapper);
export { TemplateWrapper };
let Column = class Column {
    constructor() {
        this.filterType = 'text';
        this.sortFunction = new EventEmitter();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'body':
                    this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'filter':
                    this.filterTemplate = item.template;
                    break;
                case 'editor':
                    this.editorTemplate = item.template;
                    break;
                default:
                    this.bodyTemplate = item.template;
                    break;
            }
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "field", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "colId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "sortField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "filterField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "footer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Column.prototype, "sortable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Column.prototype, "editable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Column.prototype, "filter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "filterMatchMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "filterType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Column.prototype, "rowspan", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Column.prototype, "colspan", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Column.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Column.prototype, "hidden", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Column.prototype, "expander", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "selectionMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Column.prototype, "filterPlaceholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Column.prototype, "filterMaxlength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Column.prototype, "frozen", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Column.prototype, "sortFunction", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], Column.prototype, "templates", void 0);
__decorate([
    ContentChild(TemplateRef),
    __metadata("design:type", TemplateRef)
], Column.prototype, "template", void 0);
Column = __decorate([
    Component({
        selector: 'p-column',
        template: ``
    })
], Column);
export { Column };
let Row = class Row {
};
__decorate([
    ContentChildren(Column),
    __metadata("design:type", QueryList)
], Row.prototype, "columns", void 0);
Row = __decorate([
    Component({
        selector: 'p-row',
        template: ``
    })
], Row);
export { Row };
let HeaderColumnGroup = class HeaderColumnGroup {
};
__decorate([
    ContentChildren(Row),
    __metadata("design:type", QueryList)
], HeaderColumnGroup.prototype, "rows", void 0);
HeaderColumnGroup = __decorate([
    Component({
        selector: 'p-headerColumnGroup',
        template: ``
    })
], HeaderColumnGroup);
export { HeaderColumnGroup };
let FooterColumnGroup = class FooterColumnGroup {
};
__decorate([
    ContentChildren(Row),
    __metadata("design:type", QueryList)
], FooterColumnGroup.prototype, "rows", void 0);
FooterColumnGroup = __decorate([
    Component({
        selector: 'p-footerColumnGroup',
        template: ``
    })
], FooterColumnGroup);
export { FooterColumnGroup };
let ColumnBodyTemplateLoader = class ColumnBodyTemplateLoader {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    }
    ngOnChanges(changes) {
        if (!this.view) {
            return;
        }
        if ('rowIndex' in changes) {
            this.view.context.rowIndex = changes['rowIndex'].currentValue;
        }
    }
    ngOnDestroy() {
        this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ColumnBodyTemplateLoader.prototype, "column", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ColumnBodyTemplateLoader.prototype, "rowData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ColumnBodyTemplateLoader.prototype, "rowIndex", void 0);
ColumnBodyTemplateLoader = __decorate([
    Component({
        selector: 'p-columnBodyTemplateLoader',
        template: ``
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], ColumnBodyTemplateLoader);
export { ColumnBodyTemplateLoader };
let ColumnHeaderTemplateLoader = class ColumnHeaderTemplateLoader {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    }
    ngOnDestroy() {
        this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ColumnHeaderTemplateLoader.prototype, "column", void 0);
ColumnHeaderTemplateLoader = __decorate([
    Component({
        selector: 'p-columnHeaderTemplateLoader',
        template: ``
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], ColumnHeaderTemplateLoader);
export { ColumnHeaderTemplateLoader };
let ColumnFooterTemplateLoader = class ColumnFooterTemplateLoader {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
            '\$implicit': this.column
        });
    }
    ngOnDestroy() {
        this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ColumnFooterTemplateLoader.prototype, "column", void 0);
ColumnFooterTemplateLoader = __decorate([
    Component({
        selector: 'p-columnFooterTemplateLoader',
        template: ``
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], ColumnFooterTemplateLoader);
export { ColumnFooterTemplateLoader };
let ColumnFilterTemplateLoader = class ColumnFilterTemplateLoader {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.filterTemplate, {
            '\$implicit': this.column
        });
    }
    ngOnDestroy() {
        this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ColumnFilterTemplateLoader.prototype, "column", void 0);
ColumnFilterTemplateLoader = __decorate([
    Component({
        selector: 'p-columnFilterTemplateLoader',
        template: ``
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], ColumnFilterTemplateLoader);
export { ColumnFilterTemplateLoader };
let ColumnEditorTemplateLoader = class ColumnEditorTemplateLoader {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.editorTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    }
    ngOnDestroy() {
        this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ColumnEditorTemplateLoader.prototype, "column", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ColumnEditorTemplateLoader.prototype, "rowData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ColumnEditorTemplateLoader.prototype, "rowIndex", void 0);
ColumnEditorTemplateLoader = __decorate([
    Component({
        selector: 'p-columnEditorTemplateLoader',
        template: ``
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], ColumnEditorTemplateLoader);
export { ColumnEditorTemplateLoader };
let TemplateLoader = class TemplateLoader {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        if (this.template) {
            this.view = this.viewContainer.createEmbeddedView(this.template, {
                '\$implicit': this.data
            });
        }
    }
    ngOnDestroy() {
        if (this.view)
            this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TemplateLoader.prototype, "template", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TemplateLoader.prototype, "data", void 0);
TemplateLoader = __decorate([
    Component({
        selector: 'p-templateLoader',
        template: ``
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], TemplateLoader);
export { TemplateLoader };
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader],
        declarations: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.js.map