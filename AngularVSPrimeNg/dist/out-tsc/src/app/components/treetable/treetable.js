var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Component, Input, Output, EventEmitter, ElementRef, ContentChild, ChangeDetectorRef, ContentChildren, QueryList, Inject, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header, Footer, Column } from '../common/shared';
import { SharedModule } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
let UITreeRow = class UITreeRow {
    constructor(treeTable) {
        this.treeTable = treeTable;
        this.level = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
    }
    ngOnInit() {
        this.node.parent = this.parentNode;
    }
    toggle(event) {
        if (this.node.expanded)
            this.treeTable.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.treeTable.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
        event.preventDefault();
    }
    isLeaf() {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
    isSelected() {
        return this.treeTable.isSelected(this.node);
    }
    onRowClick(event) {
        this.treeTable.onRowClick(event, this.node);
    }
    onRowRightClick(event) {
        this.treeTable.onRowRightClick(event, this.node);
    }
    rowDblClick(event) {
        this.treeTable.onRowDblclick.emit({ originalEvent: event, node: this.node });
    }
    onRowTouchEnd() {
        this.treeTable.onRowTouchEnd();
    }
    resolveFieldData(data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], UITreeRow.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], UITreeRow.prototype, "parentNode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], UITreeRow.prototype, "level", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], UITreeRow.prototype, "labelExpand", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], UITreeRow.prototype, "labelCollapse", void 0);
UITreeRow = __decorate([
    Component({
        selector: '[pTreeRow]',
        template: `
        <div class="ui-treetable-row" [ngClass]="{'ui-state-highlight':isSelected(),'ui-treetable-row-selectable':treeTable.selectionMode && node.selectable !== false}">
            <td *ngFor="let col of treeTable.columns; let i=index" [ngStyle]="col.style" [class]="col.styleClass" (click)="onRowClick($event)" (dblclick)="rowDblClick($event)" (touchend)="onRowTouchEnd()" (contextmenu)="onRowRightClick($event)">
                <a href="#" *ngIf="i == treeTable.toggleColumnIndex" class="ui-treetable-toggler fa fa-fw ui-clickable" [ngClass]="node.expanded ? treeTable.expandedIcon : treeTable.collapsedIcon"
                    [ngStyle]="{'margin-left':level*16 + 'px','visibility': isLeaf() ? 'hidden' : 'visible'}"
                    (click)="toggle($event)"
                    [title]="node.expanded ? labelCollapse : labelExpand">
                </a>
                <div class="ui-chkbox ui-treetable-checkbox" *ngIf="treeTable.selectionMode == 'checkbox' && i==0"><div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default">
                    <span class="ui-chkbox-icon ui-clickable fa" 
                        [ngClass]="{'fa-check':isSelected(),'fa-minus':node.partialSelected}"></span></div></div
                ><span *ngIf="!col.template">{{resolveFieldData(node.data,col.field)}}</span>
                <p-columnBodyTemplateLoader [column]="col" [rowData]="node" *ngIf="col.template"></p-columnBodyTemplateLoader>
            </td>
        </div>
        <div *ngIf="node.children && node.expanded" class="ui-treetable-row" style="display:table-row">
            <td [attr.colspan]="treeTable.columns.length" class="ui-treetable-child-table-container">
                <table [class]="treeTable.tableStyleClass" [ngStyle]="treeTable.tableStyle">
                    <tbody pTreeRow *ngFor="let childNode of node.children" [node]="childNode" [level]="level+1" [labelExpand]="labelExpand" [labelCollapse]="labelCollapse" [parentNode]="node"></tbody>
                </table>
            </td>
        </div>
    `
    }),
    __param(0, Inject(forwardRef(() => TreeTable))),
    __metadata("design:paramtypes", [TreeTable])
], UITreeRow);
export { UITreeRow };
let TreeTable = class TreeTable {
    constructor(el, domHandler, changeDetector, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
        this.metaKeySelection = true;
        this.toggleColumnIndex = 0;
        this.collapsedIcon = "fa-caret-right";
        this.expandedIcon = "fa-caret-down";
        this.onRowDblclick = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
        this.onNodeExpand = new EventEmitter();
        this.onNodeCollapse = new EventEmitter();
        this.onContextMenuSelect = new EventEmitter();
    }
    ngAfterContentInit() {
        this.initColumns();
        this.columnsSubscription = this.cols.changes.subscribe(_ => {
            this.initColumns();
            this.changeDetector.markForCheck();
        });
    }
    initColumns() {
        this.columns = this.cols.toArray();
    }
    onRowClick(event, node) {
        let eventTarget = event.target;
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            let metaSelection = this.rowTouched ? false : this.metaKeySelection;
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    this.propagateSelectionDown(node, false);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, false);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.propagateSelectionDown(node, true);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, true);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else {
                if (metaSelection) {
                    let metaKey = (event.metaKey || event.ctrlKey);
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection = this.selection.filter((val, i) => i != index);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeUnselect.emit({ originalEvent: event, node: node });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(node);
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection = [...this.selection, node];
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeSelect.emit({ originalEvent: event, node: node });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = node;
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    else {
                        if (selected) {
                            this.selection = this.selection.filter((val, i) => i != index);
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = [...this.selection || [], node];
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    this.selectionChange.emit(this.selection);
                }
            }
        }
        this.rowTouched = false;
    }
    onRowTouchEnd() {
        this.rowTouched = true;
    }
    onRowRightClick(event, node) {
        if (this.contextMenu) {
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            if (!selected) {
                if (this.isSingleSelectionMode()) {
                    this.selection = node;
                }
                else if (this.isMultipleSelectionMode()) {
                    this.selection = [node];
                    this.selectionChange.emit(this.selection);
                }
                this.selectionChange.emit(this.selection);
            }
            this.contextMenu.show(event);
            this.onContextMenuSelect.emit({ originalEvent: event, node: node });
        }
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else {
                for (let i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    }
    propagateSelectionUp(node, select) {
        if (node.children && node.children.length) {
            let selectedCount = 0;
            let childPartialSelected = false;
            for (let child of node.children) {
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount == node.children.length) {
                this.selection = [...this.selection || [], node];
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    let index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this.selection = this.selection.filter((val, i) => i != index);
                    }
                }
                if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        let parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    }
    propagateSelectionDown(node, select) {
        let index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = [...this.selection || [], node];
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter((val, i) => i != index);
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (let child of node.children) {
                this.propagateSelectionDown(child, select);
            }
        }
    }
    isSelected(node) {
        return this.findIndexInSelection(node) != -1;
    }
    isSingleSelectionMode() {
        return this.selectionMode && this.selectionMode == 'single';
    }
    isMultipleSelectionMode() {
        return this.selectionMode && this.selectionMode == 'multiple';
    }
    isCheckboxSelectionMode() {
        return this.selectionMode && this.selectionMode == 'checkbox';
    }
    hasFooter() {
        if (this.columns) {
            let columnsArr = this.cols.toArray();
            for (let i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TreeTable.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TreeTable.prototype, "selectionMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeTable.prototype, "selection", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeTable.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TreeTable.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TreeTable.prototype, "labelExpand", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TreeTable.prototype, "labelCollapse", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TreeTable.prototype, "metaKeySelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeTable.prototype, "contextMenu", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TreeTable.prototype, "toggleColumnIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeTable.prototype, "tableStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TreeTable.prototype, "tableStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TreeTable.prototype, "collapsedIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TreeTable.prototype, "expandedIcon", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeTable.prototype, "onRowDblclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeTable.prototype, "selectionChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeTable.prototype, "onNodeSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeTable.prototype, "onNodeUnselect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeTable.prototype, "onNodeExpand", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeTable.prototype, "onNodeCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeTable.prototype, "onContextMenuSelect", void 0);
__decorate([
    ContentChild(Header),
    __metadata("design:type", Header)
], TreeTable.prototype, "header", void 0);
__decorate([
    ContentChild(Footer),
    __metadata("design:type", Footer)
], TreeTable.prototype, "footer", void 0);
__decorate([
    ContentChildren(Column),
    __metadata("design:type", QueryList)
], TreeTable.prototype, "cols", void 0);
__decorate([
    ViewChild('tbl'),
    __metadata("design:type", ElementRef)
], TreeTable.prototype, "tableViewChild", void 0);
TreeTable = __decorate([
    Component({
        selector: 'p-treeTable',
        template: `
        <div [ngClass]="'ui-treetable ui-widget'" [ngStyle]="style" [class]="styleClass">
            <div class="ui-treetable-header ui-widget-header" *ngIf="header">
                <ng-content select="p-header"></ng-content>
            </div>
            <div class="ui-treetable-tablewrapper">
                <table #tbl class="ui-widget-content" [class]="tableStyleClass" [ngStyle]="tableStyle">
                    <thead>
                        <tr class="ui-state-default">
                            <th #headerCell *ngFor="let col of columns; let lastCol=last "  [ngStyle]="col.style" [class]="col.styleClass" 
                                [ngClass]="'ui-state-default ui-unselectable-text'">
                                <span class="ui-column-title" *ngIf="!col.headerTemplate">{{col.header}}</span>
                                <span class="ui-column-title" *ngIf="col.headerTemplate">
                                    <p-columnHeaderTemplateLoader [column]="col"></p-columnHeaderTemplateLoader>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tfoot *ngIf="hasFooter()">
                        <tr>
                            <td *ngFor="let col of columns" [ngStyle]="col.style" [class]="col.styleClass" [ngClass]="{'ui-state-default':true}">
                                <span class="ui-column-footer" *ngIf="!col.footerTemplate">{{col.footer}}</span>
                                <span class="ui-column-footer" *ngIf="col.footerTemplate">
                                    <p-columnFooterTemplateLoader [column]="col"></p-columnFooterTemplateLoader>
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody pTreeRow *ngFor="let node of value" class="ui-treetable-data ui-widget-content" [node]="node" [level]="0" [labelExpand]="labelExpand" [labelCollapse]="labelCollapse"></tbody>
                </table>
            </div>
            
            <div class="ui-treetable-footer ui-widget-header" *ngIf="footer">
                <ng-content select="p-footer"></ng-content>
            </div>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, ChangeDetectorRef, Renderer2])
], TreeTable);
export { TreeTable };
let TreeTableModule = class TreeTableModule {
};
TreeTableModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule],
        exports: [TreeTable, SharedModule],
        declarations: [TreeTable, UITreeRow]
    })
], TreeTableModule);
export { TreeTableModule };
//# sourceMappingURL=treetable.js.map