webpackJsonp(["organizationchartdemo.module"],{

/***/ "../../../../../src/app/components/organizationchart/organizationchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrganizationChartNodeTemplateLoader */
/* unused harmony export OrganizationChartNode */
/* unused harmony export OrganizationChart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationChartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_treenode__ = __webpack_require__("../../../../../src/app/components/common/treenode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_treenode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_treenode__);
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







var OrganizationChartNodeTemplateLoader = (function () {
    function OrganizationChartNodeTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    OrganizationChartNodeTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.template, {
            '\$implicit': this.node
        });
    };
    OrganizationChartNodeTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    return OrganizationChartNodeTemplateLoader;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], OrganizationChartNodeTemplateLoader.prototype, "node", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */]) === "function" && _a || Object)
], OrganizationChartNodeTemplateLoader.prototype, "template", void 0);
OrganizationChartNodeTemplateLoader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-organizationChartNodeTemplateLoader',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _b || Object])
], OrganizationChartNodeTemplateLoader);

var OrganizationChartNode = (function () {
    function OrganizationChartNode(chart) {
        this.chart = chart;
    }
    Object.defineProperty(OrganizationChartNode.prototype, "leaf", {
        get: function () {
            return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrganizationChartNode.prototype, "colspan", {
        get: function () {
            return (this.node.children && this.node.children.length) ? this.node.children.length * 2 : null;
        },
        enumerable: true,
        configurable: true
    });
    OrganizationChartNode.prototype.onNodeClick = function (event, node) {
        this.chart.onNodeClick(event, node);
    };
    OrganizationChartNode.prototype.toggleNode = function (event, node) {
        node.expanded = !node.expanded;
        event.preventDefault();
    };
    OrganizationChartNode.prototype.isSelected = function () {
        return this.chart.isSelected(this.node);
    };
    return OrganizationChartNode;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_treenode__["TreeNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_treenode__["TreeNode"]) === "function" && _c || Object)
], OrganizationChartNode.prototype, "node", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], OrganizationChartNode.prototype, "root", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], OrganizationChartNode.prototype, "first", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], OrganizationChartNode.prototype, "last", void 0);
OrganizationChartNode = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[pOrganizationChartNode]',
        template: "\n        <tr *ngIf=\"node\">\n            <td [attr.colspan]=\"colspan\">\n                <div class=\"ui-organizationchart-node-content ui-widget-content ui-corner-all {{node.styleClass}}\" \n                    [ngClass]=\"{'ui-organizationchart-selectable-node': chart.selectionMode && node.selectable !== false,'ui-state-highlight':isSelected()}\"\n                    (click)=\"onNodeClick($event,node)\">\n                    <div *ngIf=\"!chart.getTemplateForNode(node)\">{{node.label}}</div>\n                    <div *ngIf=\"chart.getTemplateForNode(node)\">\n                        <p-organizationChartNodeTemplateLoader [node]=\"node\" [template]=\"chart.getTemplateForNode(node)\"></p-organizationChartNodeTemplateLoader>\n                    </div>\n                    <a *ngIf=\"!leaf\" href=\"#\" class=\"ui-node-toggler\" (click)=\"toggleNode($event, node)\">\n                        <i class=\"fa ui-node-toggler-icon\" [ngClass]=\"{'fa-chevron-down': node.expanded, 'fa-chevron-up': !node.expanded}\"></i>\n                    </a>\n                </div>\n            </td>\n        </tr>\n        <tr [style.visibility]=\"!leaf&&node.expanded ? 'inherit' : 'hidden'\" class=\"ui-organizationchart-lines\" [@childState]=\"'in'\">\n            <td [attr.colspan]=\"colspan\">\n                <div class=\"ui-organizationchart-line-down\"></div>\n            </td>\n        </tr>\n        <tr [style.visibility]=\"!leaf&&node.expanded ? 'inherit' : 'hidden'\" class=\"ui-organizationchart-lines\" [@childState]=\"'in'\">\n            <ng-template ngFor let-child [ngForOf]=\"node.children\" let-first=\"first\" let-last=\"last\">\n                <td class=\"ui-organizationchart-line-left\" [ngClass]=\"{'ui-organizationchart-line-top':!first}\">&nbsp;</td>\n                <td class=\"ui-organizationchart-line-right\" [ngClass]=\"{'ui-organizationchart-line-top':!last}\">&nbsp;</td>\n            </ng-template>\n        </tr>\n        <tr [style.visibility]=\"!leaf&&node.expanded ? 'inherit' : 'hidden'\" class=\"ui-organizationchart-nodes\" [@childState]=\"'in'\">\n            <td *ngFor=\"let child of node.children\" colspan=\"2\">\n                <table class=\"ui-organizationchart-table\" pOrganizationChartNode [node]=\"child\"></table>\n            </td>\n        </tr>\n    ",
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('childState', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1 })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(150)
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(150, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }))
                ])
            ])
        ],
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return OrganizationChart; }))),
    __metadata("design:paramtypes", [OrganizationChart])
], OrganizationChartNode);

var OrganizationChart = (function () {
    function OrganizationChart(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onNodeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onNodeUnselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(OrganizationChart.prototype, "root", {
        get: function () {
            return this.value && this.value.length ? this.value[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    OrganizationChart.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach(function (item) {
            _this.templateMap[item.getType()] = item.template;
        });
    };
    OrganizationChart.prototype.getTemplateForNode = function (node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    };
    OrganizationChart.prototype.onNodeClick = function (event, node) {
        var eventTarget = event.target;
        if (eventTarget.className && (eventTarget.className.indexOf('ui-node-toggler') !== -1 || eventTarget.className.indexOf('ui-node-toggler-icon') !== -1)) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            var index_1 = this.findIndexInSelection(node);
            var selected = (index_1 >= 0);
            if (this.selectionMode === 'single') {
                if (selected) {
                    this.selection = null;
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = node;
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else if (this.selectionMode === 'multiple') {
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
    };
    OrganizationChart.prototype.findIndexInSelection = function (node) {
        var index = -1;
        if (this.selectionMode && this.selection) {
            if (this.selectionMode === 'single') {
                index = (this.selection == node) ? 0 : -1;
            }
            else if (this.selectionMode === 'multiple') {
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
    OrganizationChart.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    return OrganizationChart;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], OrganizationChart.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], OrganizationChart.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], OrganizationChart.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], OrganizationChart.prototype, "selectionMode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], OrganizationChart.prototype, "selection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], OrganizationChart.prototype, "selectionChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _e || Object)
], OrganizationChart.prototype, "onNodeSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _f || Object)
], OrganizationChart.prototype, "onNodeUnselect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_4__common_shared__["f" /* PrimeTemplate */]),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _g || Object)
], OrganizationChart.prototype, "templates", void 0);
OrganizationChart = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-organizationChart',
        template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"'ui-organizationchart ui-widget'\">\n            <table class=\"ui-organizationchart-table\" pOrganizationChartNode [node]=\"root\" *ngIf=\"root\"></table>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]) === "function" && _j || Object])
], OrganizationChart);

var OrganizationChartModule = (function () {
    function OrganizationChartModule() {
    }
    return OrganizationChartModule;
}());
OrganizationChartModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
        exports: [OrganizationChart, __WEBPACK_IMPORTED_MODULE_4__common_shared__["g" /* SharedModule */]],
        declarations: [OrganizationChart, OrganizationChartNode, OrganizationChartNodeTemplateLoader]
    })
], OrganizationChartModule);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=organizationchart.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/organizationchart/organizationchartdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationChartDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizationchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrganizationChartDemoRoutingModule = (function () {
    function OrganizationChartDemoRoutingModule() {
    }
    return OrganizationChartDemoRoutingModule;
}());
OrganizationChartDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__organizationchartdemo__["a" /* OrganizationChartDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], OrganizationChartDemoRoutingModule);

//# sourceMappingURL=organizationchartdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">OrganizationChart</span>\n        <span>OrganizationChart visualized hierarchical organization data.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [(value)]=\"messages\"></p-growl>\n    \n    <h3 class=\"first\">Advanced</h3>\n    <p>Organization with advanced customization.</p>\n    <p-organizationChart [value]=\"data1\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"onNodeSelect($event)\"\n        styleClass=\"company\">\n        <ng-template let-node pTemplate=\"person\">\n            <div class=\"node-header ui-corner-top\">{{node.label}}</div>\n            <div class=\"node-content\">\n                <img src=\"assets/showcase/images/demo/organization/{{node.data.avatar}}\" width=\"32\">\n                <div>{{node.data.name}}</div>\n            </div>\n        </ng-template>\n        <ng-template let-node pTemplate=\"department\">\n            {{node.label}}\n        </ng-template>\n    </p-organizationChart>\n    \n    <h3>Basic</h3>\n    <p>Hierarchical data with zero configuration.</p>\n    <p-organizationChart [value]=\"data2\"></p-organizationChart>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header =\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;OrganizationChartModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>OrganizationChart requires a model of TreeNode as its value. More information about TreeNode API is available at documentation of <a href=\"#\" [routerLink]=\"['/tree']\">tree</a> component.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TreeNode&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-organizationChart [value]=\"data\"&gt;&lt;/p-organizationChart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponents implements OnInit &#123;\n\n    data: TreeNode[];\n    \n    ngOnInit() &#123;\n        this.data = [&#123;\n            label: 'Root',\n            children: [\n                &#123;\n                    label: 'Child 1,\n                    children: [\n                        &#123;\n                            label: 'Grandchild 1.1'\n                        &#125;,\n                        &#123;\n                            label: 'Grandchild 1.2'\n                        &#125;\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Child 2',\n                    children: [\n                        &#123;\n                            label: 'Child 2.1'\n                        &#125;,\n                        &#123;\n                            label: 'Child 2.2'\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;];\n&#125;\n</code>\n</pre>\n\n            <h3>Templating</h3>\n            <p>Label of the treenode is displayed inside the node content by default and templating enables enhanced customization. TreeNode API has type property which is\n            used to match the pTemplate type so templating can be done per node as well. In example below, nodes with type \"leaf\" are displayed with bold text. Note that a pTemplate\n            whose type is \"default\" applies to all nodes that have no type property defined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-organizationChart [value]=\"data\"\n    styleClass=\"company\"&gt;\n    &lt;ng-template let-node pTemplate=\"leaf\"&gt;\n        &lt;span style=\"font-weight:bold\"&gt;{{node.label}}&lt;/span&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-node pTemplate=\"default\"&gt;\n        &#123;&#123;node.label&#125;&#125;\n    &lt;/ng-template&gt;\n&lt;/p-organizationChart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponents implements OnInit &#123;\n\n    data: TreeNode[];\n    \n    ngOnInit() &#123;\n        this.data = [&#123;\n            label: 'Root',\n            children: [\n                &#123;\n                    label: 'Child 1',\n                    children: [\n                        &#123;\n                            label: 'Grandchild 1.1', type: 'leaf'\n                        &#125;,\n                        &#123;\n                            label: 'Grandchild 1.2', type: 'leaf'\n                        &#125;\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Child 2',\n                    children: [\n                        &#123;\n                            label: 'Child 2.1', type: 'leaf'\n                        &#125;,\n                        &#123;\n                            label: 'Child 2.2', type: 'leaf'\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;];\n&#125;\n</code>\n</pre>\n\n            <h3>Expand/Collapse State</h3>\n            <p>In order to display a treenode as expanded by default, set \"expanded\" property as true in your model.</p>\n\n            <h3>Selection</h3>\n            <p>OrganizationChart supports 2 selection methods; single or multiple. Selection is enabled by setting selectionMode property and providing a single TreeNode or\n            an array of TreeNodes to reference the selections depending on the selection mode.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-organizationChart [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedNode\"&gt;&lt;/p-organizationChart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponents implements OnInit &#123;\n\n    data: TreeNode[];\n    \n    ngOnInit() &#123;\n        this.data = [&#123;\n            label: 'Root',\n            children: [\n                &#123;\n                    label: 'Child 1,\n                    children: [\n                        &#123;\n                            label: 'Grandchild 1.1', type: 'leaf'\n                        &#125;,\n                        &#123;\n                            label: 'Grandchild 1.2', type: 'leaf'\n                        &#125;\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Child 2',\n                    children: [\n                        &#123;\n                            label: 'Child 2.1', type: 'leaf'\n                        &#125;,\n                        &#123;\n                            label: 'Child 2.2', type: 'leaf'\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;];\n&#125;\n</code>\n</pre>\n    \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>null</td>\n                            <td>TreeNode[]</td>\n                            <td>An array of nested TreeNodes.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>selectionMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines the selection mode, valid values \"single\" and \"multiple\".</td>\n                        </tr>\n                        <tr>\n                            <td>selection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>A single treenode instance or an array to refer to the selections.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        <h3>Events</h3>\n        <div class=\"doc-tablewrapper\">\n            <table class=\"doc-table\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Parameters</th>\n                    <th>Description</th>\n                </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>onNodeSelect</td>\n                        <td>event.originalEvent: browser event <br>\n                            event.node: Selected node instance.</td>\n                        <td>Callback to invoke when a node is selected.</td>\n                    </tr>\n                    <tr>\n                        <td>onNodeUnselect</td>\n                        <td>event.originalEvent: browser event <br>\n                            event.node: Unselected node instance.</td>\n                        <td>Callback to invoke when a node is unselected.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <h3>Styling</h3>\n        <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n        <div class=\"doc-tablewrapper\">\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>ui-organizationchart</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-table</td>\n                        <td>Table container of a node.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-lines</td>\n                        <td>Connector lines container.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-nodes</td>\n                        <td>Contained of node children.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-line-right</td>\n                        <td>Right side line of a node connector.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-line-left</td>\n                        <td>Left side line of a node connector.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-line-top</td>\n                        <td>Top side line of a node connector.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <h3>Dependencies</h3>\n        <p>None.</p>\n\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/organizationchart\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [(value)]=\"messages\"&gt;&lt;/p-growl&gt;\n\n&lt;h3 class=\"first\"&gt;Advanced&lt;/h3&gt;\n&lt;p&gt;Organization with advanced customization.&lt;/p&gt;\n&lt;p-organizationChart [value]=\"data1\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"onNodeSelect($event)\"\n    styleClass=\"company\"&gt;\n    &lt;ng-template let-node pTemplate=\"person\"&gt;\n        &lt;div class=\"node-header ui-corner-top\"&gt;&#123;node.label&#125;&lt;/div&gt;\n        &lt;div class=\"node-content\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/organization/&#123;node.data.avatar&#125;\" width=\"32\"&gt;\n            &lt;div&gt;&#123;node.data.name&#125;&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-node pTemplate=\"department\"&gt;\n        &#123;node.label&#125;\n    &lt;/ng-template&gt;\n&lt;/p-organizationChart&gt;\n\n&lt;h3&gt;Basic&lt;/h3&gt;\n&lt;p&gt;Hierarchical data with zero configuration.&lt;/p&gt;\n&lt;p-organizationChart [value]=\"data2\"&gt;&lt;/p-organizationChart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './organizationchartdemo.html',\n    styles: [`\n        .company.ui-organizationchart .ui-organizationchart-node-content.ui-person &#123;\n            padding: 0;\n            border: 0 none;\n        &#125;\n        \n        .node-header,.node-content &#123;\n            padding: .5em .7em;\n        &#125;\n        \n        .node-header &#123;\n            background-color: #495ebb;\n            color: #ffffff;\n        &#125;\n        \n        .node-content &#123;\n            text-align: center;\n            border: 1px solid #495ebb;\n        &#125;\n        \n        .node-content img &#123;\n            border-radius: 50%;\n        &#125;\n        \n        .department-cfo &#123;\n            background-color: #7247bc;\n            color: #ffffff;\n        &#125;\n        \n        .department-coo &#123;\n            background-color: #a534b6;\n            color: #ffffff;\n        &#125;\n        \n        .department-cto &#123;\n            background-color: #e9286f;\n            color: #ffffff;\n        &#125;\n        \n        .ui-person .ui-node-toggler &#123;\n            color: #495ebb !important;\n        &#125;\n        \n        .department-cto .ui-node-toggler &#123;\n            color: #8a0a39 !important;\n        &#125;\n    `],\n    encapsulation: ViewEncapsulation.None\n&#125;)\nexport class OrganizationChartDemo implements OnInit &#123;\n\n    data1: TreeNode[];\n    \n    data2: TreeNode[];\n    \n    selectedNode: TreeNode;\n    \n    messages: Message[];\n    \n    ngOnInit() &#123;\n        this.data1 = [&#123;\n            label: 'CEO',\n            type: 'person',\n            styleClass: 'ui-person',\n            expanded: true,\n            data: &#123;name:'Walter White', 'avatar': 'walter.jpg'&#125;,\n            children: [\n                &#123;\n                    label: 'CFO',\n                    type: 'person',\n                    styleClass: 'ui-person',\n                    expanded: true,\n                    data: &#123;name:'Saul Goodman', 'avatar': 'saul.jpg'&#125;,\n                    children:[&#123;\n                        label: 'Tax',\n                        styleClass: 'department-cfo'\n                    &#125;,\n                    &#123;\n                        label: 'Legal',\n                        styleClass: 'department-cfo'\n                    &#125;],\n                &#125;,\n                &#123;\n                    label: 'COO',\n                    type: 'person',\n                    styleClass: 'ui-person',\n                    expanded: true,\n                    data: &#123;name:'Mike E.', 'avatar': 'mike.jpg'&#125;,\n                    children:[&#123;\n                        label: 'Operations',\n                        styleClass: 'department-coo'\n                    &#125;]\n                &#125;,\n                &#123;\n                    label: 'CTO',\n                    type: 'person',\n                    styleClass: 'ui-person',\n                    expanded: true,\n                    data: &#123;name:'Jesse Pinkman', 'avatar': 'jesse.jpg'&#125;,\n                    children:[&#123;\n                        label: 'Development',\n                        styleClass: 'department-cto',\n                        expanded: true,\n                        children:[&#123;\n                            label: 'Analysis',\n                            styleClass: 'department-cto'\n                        &#125;,\n                        &#123;\n                            label: 'Front End',\n                            styleClass: 'department-cto'\n                        &#125;,\n                        &#123;\n                            label: 'Back End',\n                            styleClass: 'department-cto'\n                        &#125;]\n                    &#125;,\n                    &#123;\n                        label: 'QA',\n                        styleClass: 'department-cto'\n                    &#125;,\n                    &#123;\n                        label: 'R&amp;D',\n                        styleClass: 'department-cto'\n                    &#125;]\n                &#125;\n            ]\n        &#125;];\n        \n        this.data2 = [&#123;\n            label: 'F.C Barcelona',\n            expanded: true,\n            children: [\n                &#123;\n                    label: 'F.C Barcelona',\n                    expanded: true,\n                    children: [\n                        &#123;\n                            label: 'Chelsea FC'\n                        &#125;,\n                        &#123;\n                            label: 'F.C. Barcelona'\n                        &#125;\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Real Madrid',\n                    expanded: true,\n                    children: [\n                        &#123;\n                            label: 'Bayern Munich'\n                        &#125;,\n                        &#123;\n                            label: 'Real Madrid'\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;];\n    &#125;\n    \n    onNodeSelect(event) &#123;\n        this.messages = [&#123;severity: 'success', summary: 'Node Selected', detail: event.node.label&#125;];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartDemoModule", function() { return OrganizationChartDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizationchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organizationchartdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/organizationchart/organizationchartdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_organizationchart_organizationchart__ = __webpack_require__("../../../../../src/app/components/organizationchart/organizationchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_panel_panel__ = __webpack_require__("../../../../../src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OrganizationChartDemoModule = (function () {
    function OrganizationChartDemoModule() {
    }
    return OrganizationChartDemoModule;
}());
OrganizationChartDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__organizationchartdemo_routing_module__["a" /* OrganizationChartDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_organizationchart_organizationchart__["a" /* OrganizationChartModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_panel_panel__["a" /* PanelModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__organizationchartdemo__["a" /* OrganizationChartDemo */]
        ]
    })
], OrganizationChartDemoModule);

//# sourceMappingURL=organizationchartdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationChartDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrganizationChartDemo = (function () {
    function OrganizationChartDemo() {
    }
    OrganizationChartDemo.prototype.ngOnInit = function () {
        this.data1 = [{
                label: 'CEO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: { name: 'Walter White', 'avatar': 'walter.jpg' },
                children: [
                    {
                        label: 'CFO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                        children: [{
                                label: 'Tax',
                                styleClass: 'department-cfo'
                            },
                            {
                                label: 'Legal',
                                styleClass: 'department-cfo'
                            }],
                    },
                    {
                        label: 'COO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                        children: [{
                                label: 'Operations',
                                styleClass: 'department-coo'
                            }]
                    },
                    {
                        label: 'CTO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                        children: [{
                                label: 'Development',
                                styleClass: 'department-cto',
                                expanded: true,
                                children: [{
                                        label: 'Analysis',
                                        styleClass: 'department-cto'
                                    },
                                    {
                                        label: 'Front End',
                                        styleClass: 'department-cto'
                                    },
                                    {
                                        label: 'Back End',
                                        styleClass: 'department-cto'
                                    }]
                            },
                            {
                                label: 'QA',
                                styleClass: 'department-cto'
                            },
                            {
                                label: 'R&D',
                                styleClass: 'department-cto'
                            }]
                    }
                ]
            }];
        this.data2 = [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }];
    };
    OrganizationChartDemo.prototype.onNodeSelect = function (event) {
        this.messages = [{ severity: 'success', summary: 'Node Selected', detail: event.node.label }];
    };
    return OrganizationChartDemo;
}());
OrganizationChartDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.html"),
        styles: ["\n        .company.ui-organizationchart .ui-organizationchart-node-content.ui-person {\n            padding: 0;\n            border: 0 none;\n        }\n        \n        .node-header,.node-content {\n            padding: .5em .7em;\n        }\n        \n        .node-header {\n            background-color: #495ebb;\n            color: #ffffff;\n        }\n        \n        .node-content {\n            text-align: center;\n            border: 1px solid #495ebb;\n        }\n        \n        .node-content img {\n            border-radius: 50%;\n        }\n        \n        .ui-organizationchart-node-content.department-cfo {\n            background-color: #7247bc;\n            color: #ffffff;\n        }\n        \n        .ui-organizationchart-node-content.department-coo {\n            background-color: #a534b6;\n            color: #ffffff;\n        }\n        \n        .ui-organizationchart-node-content.department-cto {\n            background-color: #e9286f;\n            color: #ffffff;\n        }\n        \n        .ui-person .ui-node-toggler {\n            color: #495ebb !important;\n        }\n        \n        .department-cto .ui-node-toggler {\n            color: #8a0a39 !important;\n        }\n    "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    })
], OrganizationChartDemo);

//# sourceMappingURL=organizationchartdemo.js.map

/***/ })

});
//# sourceMappingURL=organizationchartdemo.module.chunk.js.map