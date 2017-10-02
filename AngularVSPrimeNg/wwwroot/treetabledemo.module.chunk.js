webpackJsonp(["treetabledemo.module"],{

/***/ "../../../../../src/app/components/treetable/treetable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UITreeRow */
/* unused harmony export TreeTable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_treenode__ = __webpack_require__("../../../../../src/app/components/common/treenode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_treenode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_treenode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
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






var UITreeRow = (function () {
    function UITreeRow(treeTable) {
        this.treeTable = treeTable;
        this.level = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
    }
    UITreeRow.prototype.ngOnInit = function () {
        this.node.parent = this.parentNode;
    };
    UITreeRow.prototype.toggle = function (event) {
        if (this.node.expanded)
            this.treeTable.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.treeTable.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
        event.preventDefault();
    };
    UITreeRow.prototype.isLeaf = function () {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    };
    UITreeRow.prototype.isSelected = function () {
        return this.treeTable.isSelected(this.node);
    };
    UITreeRow.prototype.onRowClick = function (event) {
        this.treeTable.onRowClick(event, this.node);
    };
    UITreeRow.prototype.onRowRightClick = function (event) {
        this.treeTable.onRowRightClick(event, this.node);
    };
    UITreeRow.prototype.rowDblClick = function (event) {
        this.treeTable.onRowDblclick.emit({ originalEvent: event, node: this.node });
    };
    UITreeRow.prototype.onRowTouchEnd = function () {
        this.treeTable.onRowTouchEnd();
    };
    UITreeRow.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    return UITreeRow;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_treenode__["TreeNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_treenode__["TreeNode"]) === "function" && _a || Object)
], UITreeRow.prototype, "node", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_treenode__["TreeNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_treenode__["TreeNode"]) === "function" && _b || Object)
], UITreeRow.prototype, "parentNode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], UITreeRow.prototype, "level", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], UITreeRow.prototype, "labelExpand", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], UITreeRow.prototype, "labelCollapse", void 0);
UITreeRow = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[pTreeRow]',
        template: "\n        <div class=\"ui-treetable-row\" [ngClass]=\"{'ui-state-highlight':isSelected(),'ui-treetable-row-selectable':treeTable.selectionMode && node.selectable !== false}\">\n            <td *ngFor=\"let col of treeTable.columns; let i=index\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\" (click)=\"onRowClick($event)\" (dblclick)=\"rowDblClick($event)\" (touchend)=\"onRowTouchEnd()\" (contextmenu)=\"onRowRightClick($event)\">\n                <a href=\"#\" *ngIf=\"i == treeTable.toggleColumnIndex\" class=\"ui-treetable-toggler fa fa-fw ui-clickable\" [ngClass]=\"node.expanded ? treeTable.expandedIcon : treeTable.collapsedIcon\"\n                    [ngStyle]=\"{'margin-left':level*16 + 'px','visibility': isLeaf() ? 'hidden' : 'visible'}\"\n                    (click)=\"toggle($event)\"\n                    [title]=\"node.expanded ? labelCollapse : labelExpand\">\n                </a>\n                <div class=\"ui-chkbox ui-treetable-checkbox\" *ngIf=\"treeTable.selectionMode == 'checkbox' && i==0\"><div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\">\n                    <span class=\"ui-chkbox-icon ui-clickable fa\" \n                        [ngClass]=\"{'fa-check':isSelected(),'fa-minus':node.partialSelected}\"></span></div></div\n                ><span *ngIf=\"!col.template\">{{resolveFieldData(node.data,col.field)}}</span>\n                <p-columnBodyTemplateLoader [column]=\"col\" [rowData]=\"node\" *ngIf=\"col.template\"></p-columnBodyTemplateLoader>\n            </td>\n        </div>\n        <div *ngIf=\"node.children && node.expanded\" class=\"ui-treetable-row\" style=\"display:table-row\">\n            <td [attr.colspan]=\"treeTable.columns.length\" class=\"ui-treetable-child-table-container\">\n                <table [class]=\"treeTable.tableStyleClass\" [ngStyle]=\"treeTable.tableStyle\">\n                    <tbody pTreeRow *ngFor=\"let childNode of node.children\" [node]=\"childNode\" [level]=\"level+1\" [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\" [parentNode]=\"node\"></tbody>\n                </table>\n            </td>\n        </div>\n    "
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return TreeTable; }))),
    __metadata("design:paramtypes", [TreeTable])
], UITreeRow);

var TreeTable = (function () {
    function TreeTable(el, domHandler, changeDetector, renderer) {
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
        this.onRowDblclick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onNodeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onNodeUnselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onNodeExpand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onNodeCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onContextMenuSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TreeTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initColumns();
        this.columnsSubscription = this.cols.changes.subscribe(function (_) {
            _this.initColumns();
            _this.changeDetector.markForCheck();
        });
    };
    TreeTable.prototype.initColumns = function () {
        this.columns = this.cols.toArray();
    };
    TreeTable.prototype.onRowClick = function (event, node) {
        var eventTarget = event.target;
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            var metaSelection = this.rowTouched ? false : this.metaKeySelection;
            var index_1 = this.findIndexInSelection(node);
            var selected = (index_1 >= 0);
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
                    var metaKey = (event.metaKey || event.ctrlKey);
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection = this.selection.filter(function (val, i) { return i != index_1; });
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
                            this.selection = this.selection.concat([node]);
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
                            this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = (this.selection || []).concat([node]);
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    this.selectionChange.emit(this.selection);
                }
            }
        }
        this.rowTouched = false;
    };
    TreeTable.prototype.onRowTouchEnd = function () {
        this.rowTouched = true;
    };
    TreeTable.prototype.onRowRightClick = function (event, node) {
        if (this.contextMenu) {
            var index = this.findIndexInSelection(node);
            var selected = (index >= 0);
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
    };
    TreeTable.prototype.findIndexInSelection = function (node) {
        var index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else {
                for (var i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    };
    TreeTable.prototype.propagateSelectionUp = function (node, select) {
        if (node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount == node.children.length) {
                this.selection = (this.selection || []).concat([node]);
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    var index_2 = this.findIndexInSelection(node);
                    if (index_2 >= 0) {
                        this.selection = this.selection.filter(function (val, i) { return i != index_2; });
                    }
                }
                if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        var parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    };
    TreeTable.prototype.propagateSelectionDown = function (node, select) {
        var index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = (this.selection || []).concat([node]);
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter(function (val, i) { return i != index; });
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.propagateSelectionDown(child, select);
            }
        }
    };
    TreeTable.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    TreeTable.prototype.isSingleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'single';
    };
    TreeTable.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'multiple';
    };
    TreeTable.prototype.isCheckboxSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'checkbox';
    };
    TreeTable.prototype.hasFooter = function () {
        if (this.columns) {
            var columnsArr = this.cols.toArray();
            for (var i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    };
    return TreeTable;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TreeTable.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "selectionMode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TreeTable.prototype, "selection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TreeTable.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "labelExpand", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "labelCollapse", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], TreeTable.prototype, "metaKeySelection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TreeTable.prototype, "contextMenu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TreeTable.prototype, "toggleColumnIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TreeTable.prototype, "tableStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "tableStyleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "collapsedIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "expandedIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], TreeTable.prototype, "onRowDblclick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], TreeTable.prototype, "selectionChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _e || Object)
], TreeTable.prototype, "onNodeSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _f || Object)
], TreeTable.prototype, "onNodeUnselect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _g || Object)
], TreeTable.prototype, "onNodeExpand", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _h || Object)
], TreeTable.prototype, "onNodeCollapse", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _j || Object)
], TreeTable.prototype, "onContextMenuSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["d" /* Header */]),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__common_shared__["d" /* Header */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_shared__["d" /* Header */]) === "function" && _k || Object)
], TreeTable.prototype, "header", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["b" /* Footer */]),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__common_shared__["b" /* Footer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_shared__["b" /* Footer */]) === "function" && _l || Object)
], TreeTable.prototype, "footer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["a" /* Column */]),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _m || Object)
], TreeTable.prototype, "cols", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('tbl'),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _o || Object)
], TreeTable.prototype, "tableViewChild", void 0);
TreeTable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-treeTable',
        template: "\n        <div [ngClass]=\"'ui-treetable ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-treetable-header ui-widget-header\" *ngIf=\"header\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-treetable-tablewrapper\">\n                <table #tbl class=\"ui-widget-content\" [class]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <thead>\n                        <tr class=\"ui-state-default\">\n                            <th #headerCell *ngFor=\"let col of columns; let lastCol=last \"  [ngStyle]=\"col.style\" [class]=\"col.styleClass\" \n                                [ngClass]=\"'ui-state-default ui-unselectable-text'\">\n                                <span class=\"ui-column-title\" *ngIf=\"!col.headerTemplate\">{{col.header}}</span>\n                                <span class=\"ui-column-title\" *ngIf=\"col.headerTemplate\">\n                                    <p-columnHeaderTemplateLoader [column]=\"col\"></p-columnHeaderTemplateLoader>\n                                </span>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tfoot *ngIf=\"hasFooter()\">\n                        <tr>\n                            <td *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\" [ngClass]=\"{'ui-state-default':true}\">\n                                <span class=\"ui-column-footer\" *ngIf=\"!col.footerTemplate\">{{col.footer}}</span>\n                                <span class=\"ui-column-footer\" *ngIf=\"col.footerTemplate\">\n                                    <p-columnFooterTemplateLoader [column]=\"col\"></p-columnFooterTemplateLoader>\n                                </span>\n                            </td>\n                        </tr>\n                    </tfoot>\n                    <tbody pTreeRow *ngFor=\"let node of value\" class=\"ui-treetable-data ui-widget-content\" [node]=\"node\" [level]=\"0\" [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\"></tbody>\n                </table>\n            </div>\n            \n            <div class=\"ui-treetable-footer ui-widget-header\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _s || Object])
], TreeTable);

var TreeTableModule = (function () {
    function TreeTableModule() {
    }
    return TreeTableModule;
}());
TreeTableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__common_shared__["g" /* SharedModule */]],
        exports: [TreeTable, __WEBPACK_IMPORTED_MODULE_3__common_shared__["g" /* SharedModule */]],
        declarations: [TreeTable, UITreeRow]
    })
], TreeTableModule);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=treetable.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/treetable/treetabledemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treetabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/treetable/treetabledemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeTableDemoRoutingModule = (function () {
    function TreeTableDemoRoutingModule() {
    }
    return TreeTableDemoRoutingModule;
}());
TreeTableDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__treetabledemo__["a" /* TreeTableDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], TreeTableDemoRoutingModule);

//# sourceMappingURL=treetabledemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/treetable/treetabledemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">TreeTable</span>\n        <span>TreeTable is used to display hierarchical data in tabular format..</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <p-treeTable [value]=\"files1\">\n        <p-header>Basic</p-header>\n        <p-column field=\"name\" header=\"Name\"></p-column>\n        <p-column field=\"size\" header=\"Size\"></p-column>\n        <p-column field=\"type\" header=\"Type\"></p-column>\n    </p-treeTable>\n        \n    <p-treeTable [value]=\"files2\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"{'margin-top':'50px'}\">\n        <p-header>Single Selection</p-header>\n        <p-column field=\"name\" header=\"Name\"></p-column>\n        <p-column field=\"size\" header=\"Size\"></p-column>\n        <p-column field=\"type\" header=\"Type\"></p-column>\n    </p-treeTable>\n    <p>Selected Node: {{selectedFile ? selectedFile.data.name : 'none'}}</p>\n        \n    <p-treeTable [value]=\"files3\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\"\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"{'margin-top':'50px'}\">\n        <p-header>Multiple Selection with MetaKey</p-header>\n        <p-column field=\"name\" header=\"Name\"></p-column>\n        <p-column field=\"size\" header=\"Size\"></p-column>\n        <p-column field=\"type\" header=\"Type\"></p-column>\n    </p-treeTable>\n    <p>Selected Nodes: <span *ngFor=\"let file of selectedFiles\">{{file.data.name}} </span></p>\n    \n    <p-treeTable [value]=\"files4\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\" [style]=\"{'margin-top':'50px'}\">\n        <p-header>Checkbox Selection</p-header>\n        <p-column field=\"name\" header=\"Name\"></p-column>\n        <p-column field=\"size\" header=\"Size\"></p-column>\n        <p-column field=\"type\" header=\"Type\"></p-column>\n    </p-treeTable>\n    <p>Selected Nodes: <span *ngFor=\"let file of selectedFiles2\">{{file.data.name}} </span></p>\n    \n    <p-treeTable [value]=\"files5\" [style]=\"{'margin-top':'50px'}\">\n        <p-header>Editable Cells with Templating</p-header>\n        <p-column field=\"name\" header=\"Name\">\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\n                <input type=\"text\" [(ngModel)]=\"node.data.name\" style=\"width:100%;border-width:0px 0px 1px 0px\">\n            </ng-template>\n        </p-column>\n        <p-column field=\"size\" header=\"Size\">\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\n                <input type=\"text\" [(ngModel)]=\"node.data.size\" style=\"width:100%;border-width:0px 0px 1px 0px\">\n            </ng-template>\n        </p-column>\n        <p-column field=\"type\" header=\"Type\">\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\n                <input type=\"text\" [(ngModel)]=\"node.data.type\" style=\"width:100%;border-width:0px 0px 1px 0px\">\n            </ng-template>\n        </p-column>\n    </p-treeTable>\n    \n    <p-treeTable [value]=\"files6\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [style]=\"{'margin-top':'50px'}\" [contextMenu]=\"cm\">\n        <p-header>Context Menu</p-header>\n        <p-column field=\"name\" header=\"Name\"></p-column>\n        <p-column field=\"size\" header=\"Size\"></p-column>\n        <p-column field=\"type\" header=\"Type\"></p-column>\n    </p-treeTable>\n            \n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\n    \n    <p-treeTable [value]=\"lazyFiles\" [style]=\"{'margin-top':'50px'}\"\n        (onNodeExpand)=\"nodeExpand($event)\">\n        <p-header>Lazy Loading</p-header>\n        <p-column field=\"name\" header=\"Name\"></p-column>\n        <p-column field=\"size\" header=\"Size\"></p-column>\n        <p-column field=\"type\" header=\"Type\"></p-column>\n    </p-treeTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TreeTableModule,TreeNode,SharedModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>TreeTable component requires an array of TreeNode objects as its value. Let's begin with the TreeNode api.</p>\n            \n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Label of the node.</td>\n                        </tr>\n                        <tr>\n                            <td>data</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Data represented by the node.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon of the node to display next to content. Not used by TreeTable.</td>\n                        </tr>\n                        <tr>\n                            <td>expandedIcon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon to use in expanded state. Not used by TreeTable.</td>\n                        </tr>\n                        <tr>\n                            <td>collapsedIcon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon to use in collapsed state. Not used by TreeTable.</td>\n                        </tr>\n                        <tr>\n                            <td>children</td>\n                            <td>TreeNode[]</td>\n                            <td>null</td>\n                            <td>An array of treenodes as children.</td>\n                        </tr>\n                        <tr>\n                            <td>leaf</td>\n                            <td>boolean</td>\n                            <td>null</td>\n                            <td>Specifies if the node has children. Used in lazy loading.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the node.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the node.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <p>Most of the time, nodes will be loaded from a remote datasoure, here is an example NodeService that fetches the data from a json file.</p> \n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n@Injectable()\nexport class NodeService &#123;\n    \n    constructor(private http: Http) &#123;&#125;\n\n    getFilesystem() &#123;\n        return this.http.get('showcase/resources/data/filesystem.json')\n                    .toPromise()\n                    .then(res => &lt;TreeNode[]&gt; res.json().data);\n    &#125;\n&#125;\n</code>\n</pre>\n        \n        <p>The filesystem.json file consists of sample data. In a real application, this should be a dynamic response generated from the remote call.</p>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n&#123;\n    \"data\":\n    [  \n        &#123;  \n            \"data\":&#123;  \n                \"name\":\"Documents\",\n                \"size\":\"75kb\",\n                \"type\":\"Folder\"\n            &#125;,\n            \"children\":[\n                &#123;  \n                    \"data\":&#123;  \n                        \"name\":\"Work\",\n                        \"size\":\"55kb\",\n                        \"type\":\"Folder\"\n                    &#125;,\n                    \"children\":[  \n                        &#123;  \n                            \"data\":&#123;  \n                                \"name\":\"Expenses.doc\",\n                                \"size\":\"30kb\",\n                                \"type\":\"Document\"\n                            &#125;\n                        &#125;,\n                        &#123;  \n                            \"data\":&#123;  \n                                \"name\":\"Resume.doc\",\n                                \"size\":\"25kb\",\n                                \"type\":\"Resume\"\n                            &#125;\n                        &#125;\n                    ]\n                &#125;,\n                &#123;  \n                    \"data\":&#123;  \n                        \"name\":\"Home\",\n                        \"size\":\"20kb\",\n                        \"type\":\"Folder\"\n                    &#125;,\n                    \"children\":[  \n                        &#123;  \n                            \"data\":&#123;  \n                                \"name\":\"Invoices\",\n                                \"size\":\"20kb\",\n                                \"type\":\"Text\"\n                            &#125;\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;,\n        &#123;  \n            \"data\":&#123;  \n                \"name\":\"Pictures\",\n                \"size\":\"150kb\",\n                \"type\":\"Folder\"\n            &#125;,\n            \"children\":[  \n                &#123;  \n                    \"data\":&#123;  \n                        \"name\":\"barcelona.jpg\",\n                        \"size\":\"90kb\",\n                        \"type\":\"Picture\"\n                    &#125;\n                &#125;,\n                &#123;  \n                    \"data\":&#123;  \n                        \"name\":\"primeui.png\",\n                        \"size\":\"30kb\",\n                        \"type\":\"Picture\"\n                    &#125;\n                &#125;,\n                &#123;  \n                    \"data\":&#123;  \n                        \"name\":\"optimus.jpg\",\n                        \"size\":\"30kb\",\n                        \"type\":\"Picture\"\n                    &#125;\n                &#125;\n            ]\n        &#125;\n    ]\n&#125;\n</code>\n</pre>  \n\n        <p>The component that uses this service makes a call to getFiles() and assigns them back to files property that is bound to the tree.</p>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeTableDemoComponent implements OnInit &#123;\n    \n    files: TreeNode[];\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n    \n    ngOnInit() &#123;\n        this.nodeService.getFileSystem().then(files => this.files = files);\n    &#125;\n\n&#125;\n</code>\n</pre>         \n                  \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-treeTable [value]=\"files\"&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n            <h3>Column Component</h3>\n            <p>TreeTable utilizes the following options defined by a column component.</p>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>field</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Property of a row data.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of a column.</td>\n                        </tr>\n                        <tr>\n                            <td>footer</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Footer text of a column.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the column.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the column.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n</code>\n</pre>\n\n                <h3>Dynamic Colums</h3>\n                <p>Columns can be instantiated using an array as well by iterating with ngFor.</p>\n            <pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeTableDemoComponent implements OnInit &#123;\n\n    files: TreeNode[];\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n    \n    ngOnInit() &#123;\n        this.nodeService.getFileSystem().then(files => this.files = files);\n\n        this.cols = [\n                &#123;field: 'name', header: 'Name'&#125;,\n                &#123;field: 'size', header: 'Size'&#125;,\n                &#123;field: 'type', header: 'Type'&#125;\n            ];\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-treeTable [value]=\"cars\"&gt;\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n            <h3>Facets</h3>\n            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Header&#125; from 'primeng/primeng';\nimport &#123;Footer&#125; from 'primeng/primeng';\n</code>\n</pre>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-treeTable [value]=\"files\"&gt;\n    &lt;p-header&gt;List of Files&lt;/p-header&gt;\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n            <h3>Selection</h3>\n            <p>TreeTable supports three selection methods, single, multiple and checkbox. Selection is enabled by setting selectionMode property and providing a single TreeNode or\n            an array of TreeNodes to reference the selections depending on the selection mode.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeTableDemoComponent implements OnInit &#123;\n    \n    files: TreeNode[];\n    \n    selectedFile: TreeNode;\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n    \n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files = files);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\"&gt;&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n<p>In multiple mode or checkbox mode, selection property should be an array. In multiple mode, items can either be selected\nusing metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\ndevices metaKeySelection is turned off automatically.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n    export class TreeTableDemoComponent implements OnInit &#123;\n        \n        files: TreeNode[];\n        \n        selectedFiles: TreeNode[];\n\n        constructor(private nodeService: NodeService) &#123;&#125;\n        \n        ngOnInit() &#123;\n            this.nodeService.getFiles().then(files => this.files = files);\n        &#125;\n\n    &#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\"&gt;&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n            <p>TreeTable provides onNodeSelect and onNodeUnselect options as callbacks for selection feature.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeSelect($event)\"&gt;&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeTableDemoComponent implements OnInit &#123;\n    \n    files: TreeNode[];\n    \n    selectedFiles: TreeNode[];\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n    \n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files = files);\n    &#125;\n    \n    nodeSelect(event) &#123;\n        //event.node = selected node\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>Selection of a particular node can be disabled by setting the selectable property of the node to false.</p>\n            \n            <h3>ContextMenu</h3>\n            <p>TreeTable has exclusive integration with contextmenu component. In order to attach a menu to a treetable, define a local template\n            variable for the menu and bind it to the contextMenu property of the treetable. This enables showing the menu whenever a row is right clicked.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\" [contextMenu]=\"cm\"&gt;\n    &lt;p-header&gt;Context Menu&lt;/p-header&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeTableDemoComponent implements OnInit &#123;\n    \n    files: TreeNode[];\n    \n    selectedFile: TreeNode;\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n    \n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files = files);\n        \n        this.items = [\n            &#123;label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)&#125;,\n            &#123;label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)&#125;\n        ];\n    &#125;\n    \n    viewNode(node: TreeNode) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: node.data.name&#125;);\n    &#125;\n\n    deleteNode(node: TreeNode) &#123;\n        node.parent.children = node.parent.children.filter( n => n.data !== node.data);\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Deleted', detail: node.data.name&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n                \n            <h3>Templating</h3>\n            <p>By default label of a treenode is displayed inside a tree node, in case you need to place custom content define a ng-template inside a column that gets \n                the column as an implicit variable and rowData as the node instance. Similarly, custom content can be placed at the header and footer of a column with templating.\n                Example below places an input field to create editable treenodes.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;ng-template&lt;/h3&gt;\n&lt;p-treeTable [value]=\"files\"&gt;\n    &lt;p-column&gt;\n        &lt;ng-template let-col let-node=\"rowData\" pTemplate=\"header\"&gt;\n            &lt;button type=\"button\" pButton label=\"Refresh\"&gt;&lt;/button&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template let-col let-node=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;input [(ngModel)]=\"node.data.name\" type=\"text\" style=\"width:100%\"&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n            <h3>Lazy Loading</h3>\n            <p>Lazy loading is handy to deal with large datasets. Instead of loading the whole tree, nodes can be loaded at onNodeExpand event.\n            Important part of implementing lazy loading is defining leaf property of a node as false, this will instruct tree to display an arrow icon\n            to indicate there are children of this node although they are not loaded yet. When the lazy node is expanded, onNodeExpand is called\n            and a remote call can be made to add the children to the expanded node.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-treeTable [value]=\"files\" (onNodeExpand)=\"loadNode($event)\"&gt;&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeTableDemoComponent implements OnInit &#123;\n    \n    files: TreeNode[];\n    \n    selectedFiles: TreeNode[];\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n    \n    ngOnInit() &#123;\n        //initial nodes\n        this.nodeService.getFiles().then(files => this.files = files);\n    &#125;\n    \n    loadNode(event) &#123;\n        if(event.node) &#123;\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\n            this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);\n        &#125;\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>Assume at ngOnInit treetable is initialized with a data like below that has nodes having no actual children but leaf property is set false.</p>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n&#123;\n    \"data\":\n    [  \n        &#123;  \n            \"data\":&#123;  \n                \"name\":\"Lazy Folder 0\",\n                \"size\":\"75kb\",\n                \"type\":\"Folder\"\n            &#125;,\n            \"leaf\": false\n        &#125;,\n        &#123;  \n            \"data\":&#123;  \n                \"name\":\"Lazy Folder 1\",\n                \"size\":\"150kb\",\n                \"type\":\"Folder\"\n            &#125;,\n            \"leaf\": false\n        &#125;\n    ]\n&#125;\n</code>\n</pre>  \n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                         <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of treenodes.</td>\n                        </tr>\n                         <tr>\n                            <td>labelExpand</td>\n                            <td>string</td>\n                            <td>Expand</td>\n                            <td>Tooltip and screenreader text for expand icon.</td>\n                        </tr>\n                         <tr>\n                            <td>labelCollapse</td>\n                            <td>string</td>\n                            <td>Collapse</td>\n                            <td>Tooltip and screenreader text for collapse icon.</td>\n                        </tr>\n                        <tr>\n                           <td>expandedIcon</td>\n                           <td>string</td>\n                           <td>fa-caret-down</td>\n                           <td>Icon to display on an expanded node.</td>\n                       </tr>\n                        <tr>\n                           <td>collapsedIcon</td>\n                           <td>string</td>\n                           <td>fa-caret-right</td>\n                           <td>Icon to display on an expanded node.</td>\n                       </tr>\n                        <tr>\n                            <td>selectionMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines the selection mode, valid values are \"single\", \"multiple\" and \"checkbox\".</td>\n                        </tr>\n                        <tr>\n                            <td>selection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>A single treenode instance or an array to refer to the selections.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>metaKeySelection</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>toggleColumnIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the column that contains the toggler element.</td>\n                        </tr>\n                        <tr>\n                            <td>tableStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the table element.</td>\n                        </tr>\n                        <tr>\n                            <td>tableStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the table element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onNodeSelect</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Selected node instance.</td>\n                            <td>Callback to invoke when a node is selected.</td>\n                        </tr>\n                        <tr>\n                            <td>onNodeUnselect</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Unselected node instance.</td>\n                            <td>Callback to invoke when a node is unselected.</td>\n                        </tr>\n                        <tr>\n                            <td>onNodeExpand</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Expanded node instance.</td>\n                            <td>Callback to invoke when a node is expanded.</td>\n                        </tr>\n                        <tr>\n                            <td>onNodeCollapse</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Collapsed node instance.</td>\n                            <td>Callback to invoke when a node is collapsed.</td>\n                        </tr>\n                        <tr>\n                            <td>onContextMenuSelect</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Selected node instance.</td>\n                            <td>Callback to invoke when a node is selected with right click.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowDblclick</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.node: Selected node instance.</td>\n                            <td>Callback to invoke when a row is double clicked.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-treetable</td>\n                            <td>Main container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treetable-header</td>\n                            <td>Header element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treetable-tablewrapper</td>\n                            <td>Container of table</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treetable-footer</td>\n                            <td>Footer element</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-treeTable [value]=\"files1\"&gt;\n    &lt;p-header&gt;Basic&lt;/p-header&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n    \n&lt;p-treeTable [value]=\"files2\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\n    &lt;p-header&gt;Singe Selection&lt;/p-header&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n&lt;p&gt;Selected Node: &#123;&#123;selectedFile ? selectedFile.data.name : 'none'&#125;&#125;&lt;/p&gt;\n    \n&lt;p-treeTable [value]=\"files3\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" \n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\n    &lt;p-header&gt;Multiple Selection&lt;/p-header&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n&lt;p&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles\"&gt;&#123;&#123;file.data.name&#125;&#125; &lt;/span&gt;&lt;/p&gt;\n\n&lt;p-treeTable [value]=\"files4\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\n    &lt;p-header&gt;Checkbox Selection&lt;/p-header&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n&lt;p&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles2\"&gt;&#123;&#123;file.data.name&#125;&#125; &lt;/span&gt;&lt;/p&gt;\n\n&lt;p-treeTable [value]=\"files5\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\n    &lt;p-header&gt;Editable Cells with Templating&lt;/p-header&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.name\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.size\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.type\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n\n&lt;p-treeTable [value]=\"files6\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [style]=\"&#123;'margin-top':'50px'&#125;\" [contextMenu]=\"cm\"&gt;\n    &lt;p-header&gt;Context Menu&lt;/p-header&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n\n&lt;p-treeTable [value]=\"lazyFiles\" [style]=\"&#123;'margin-top':'50px'&#125;\"\n    (onNodeExpand)=\"nodeExpand($event)\"&gt;\n    &lt;p-header&gt;Lazy Loading&lt;/p-header&gt;\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\n&lt;/p-treeTable&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeTableDemo implements OnInit &#123;\n    \n    msgs: Message[];\n    \n    files1: TreeNode[];\n    \n    files2: TreeNode[];\n    \n    files3: TreeNode[];\n    \n    files4: TreeNode[];\n    \n    files5: TreeNode[];\n    \n    files6: TreeNode[];\n            \n    lazyFiles: TreeNode[];\n        \n    selectedFile: TreeNode;\n    \n    selectedFile2: TreeNode;\n    \n    selectedFiles: TreeNode[];\n    \n    selectedFiles2: TreeNode[];\n    \n    items: MenuItem[];\n        \n    constructor(private nodeService: NodeService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFilesystem().then(files => this.files1 = files);\n        this.nodeService.getFilesystem().then(files => this.files2 = files);\n        this.nodeService.getFilesystem().then(files => this.files3 = files);\n        this.nodeService.getFilesystem().then(files => this.files4 = files);\n        this.nodeService.getFilesystem().then(files => this.files5 = files);\n        this.nodeService.getFilesystem().then(files => this.files6 = files);\n        this.nodeService.getLazyFilesystem().then(files => this.lazyFiles = files);\n        \n        this.items = [\n            &#123;label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)&#125;,\n            &#123;label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)&#125;\n        ];\n    &#125;\n    \n    nodeSelect(event) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: event.node.data.name&#125;);\n    &#125;\n    \n    nodeUnselect(event) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Unselected', detail: event.node.data.name&#125;);\n    &#125;\n    \n    nodeExpand(event) &#123;\n        if(event.node) &#123;\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\n            this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);\n        &#125;\n    &#125;\n    \n    viewNode(node: TreeNode) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: node.data.name&#125;);\n    &#125;\n\n    deleteNode(node: TreeNode) &#123;\n        node.parent.children = node.parent.children.filter( n => n.data !== node.data);\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Deleted', detail: node.data.name&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/treetable/treetabledemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableDemoModule", function() { return TreeTableDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__treetabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/treetable/treetabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treetabledemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/treetable/treetabledemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_treetable_treetable__ = __webpack_require__("../../../../../src/app/components/treetable/treetable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contextmenu_contextmenu__ = __webpack_require__("../../../../../src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TreeTableDemoModule = (function () {
    function TreeTableDemoModule() {
    }
    return TreeTableDemoModule;
}());
TreeTableDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__treetabledemo_routing_module__["a" /* TreeTableDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_treetable_treetable__["a" /* TreeTableModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_contextmenu_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__treetabledemo__["a" /* TreeTableDemo */]
        ]
    })
], TreeTableDemoModule);

//# sourceMappingURL=treetabledemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/treetable/treetabledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_nodeservice__ = __webpack_require__("../../../../../src/app/showcase/service/nodeservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeTableDemo = (function () {
    function TreeTableDemo(nodeService) {
        this.nodeService = nodeService;
    }
    TreeTableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeService.getFilesystem().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files2 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files3 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files4 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files5 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files6 = files; });
        this.nodeService.getLazyFilesystem().then(function (files) { return _this.lazyFiles = files; });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewNode(_this.selectedFile2); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteNode(_this.selectedFile2); } }
        ];
    };
    TreeTableDemo.prototype.nodeSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };
    TreeTableDemo.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    };
    TreeTableDemo.prototype.nodeExpand = function (event) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFilesystem().then(function (nodes) { return event.node.children = nodes; });
        }
    };
    TreeTableDemo.prototype.viewNode = function (node) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: node.data.name });
    };
    TreeTableDemo.prototype.deleteNode = function (node) {
        node.parent.children = node.parent.children.filter(function (n) { return n.data !== node.data; });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Deleted', detail: node.data.name });
    };
    return TreeTableDemo;
}());
TreeTableDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/treetable/treetabledemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_nodeservice__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_nodeservice__["a" /* NodeService */]) === "function" && _a || Object])
], TreeTableDemo);

var _a;
//# sourceMappingURL=treetabledemo.js.map

/***/ })

});
//# sourceMappingURL=treetabledemo.module.chunk.js.map