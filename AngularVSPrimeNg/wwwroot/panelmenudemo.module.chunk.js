webpackJsonp(["panelmenudemo.module"],{

/***/ "../../../../../src/app/showcase/components/panelmenu/panelmenudemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelMenuDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panelmenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/panelmenu/panelmenudemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PanelMenuDemoRoutingModule = (function () {
    function PanelMenuDemoRoutingModule() {
    }
    return PanelMenuDemoRoutingModule;
}());
PanelMenuDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__panelmenudemo__["a" /* PanelMenuDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], PanelMenuDemoRoutingModule);

//# sourceMappingURL=panelmenudemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/panelmenu/panelmenudemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Menu - PanelMenu</span>\n        <span>PanelMenu is a hybrid of accordion-tree components.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-panelMenu [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"></p-panelMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;PanelMenuModule,MenuItem&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>PanelMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>PanelMenu requires nested menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panelMenu [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"&gt;&lt;/p-panelMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class PanelMenuDemo &#123;\n  \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'fa-file-o',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'fa-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'fa-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'fa-gear',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'fa-refresh',\n                        items: [\n                            &#123;label: 'Save', icon: 'fa-save'&#125;,\n                            &#123;label: 'Update', icon: 'fa-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'fa-phone',\n                        items: [\n                            &#123;label: 'Delete', icon: 'fa-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Initial State</h3>\n            <p>MenuItem has an expanded property to control the visibility of a submenu, you may use this property to control the state from the menumodel.</p>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-panelmenu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panelmenu-header</td>\n                            <td>Accordion header of root submenu.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panelmenu-content</td>\n                            <td>Accordion content of root submenu.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu-list</td>\n                            <td>List element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panelmenu-icon</td>\n                            <td>Arrow icon of an accordion header.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panelmenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panelMenu [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"&gt;&lt;/p-panelMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class PanelMenuDemo &#123;\n  \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'fa-file-o',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator: true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'fa-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'fa-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'fa-gear',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'fa-refresh',\n                        items: [\n                            &#123;label: 'Save', icon: 'fa-save'&#125;,\n                            &#123;label: 'Update', icon: 'fa-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'fa-phone',\n                        items: [\n                            &#123;label: 'Delete', icon: 'fa-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/panelmenu/panelmenudemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMenuDemoModule", function() { return PanelMenuDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panelmenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/panelmenu/panelmenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panelmenudemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/panelmenu/panelmenudemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_panelmenu_panelmenu__ = __webpack_require__("../../../../../src/app/components/panelmenu/panelmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PanelMenuDemoModule = (function () {
    function PanelMenuDemoModule() {
    }
    return PanelMenuDemoModule;
}());
PanelMenuDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__panelmenudemo_routing_module__["a" /* PanelMenuDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_panelmenu_panelmenu__["a" /* PanelMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__panelmenudemo__["a" /* PanelMenuDemo */]
        ]
    })
], PanelMenuDemoModule);

//# sourceMappingURL=panelmenudemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/panelmenu/panelmenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelMenuDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelMenuDemo = (function () {
    function PanelMenuDemo() {
    }
    PanelMenuDemo.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { separator: true },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            }
        ];
    };
    return PanelMenuDemo;
}());
PanelMenuDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/panelmenu/panelmenudemo.html")
    })
], PanelMenuDemo);

//# sourceMappingURL=panelmenudemo.js.map

/***/ })

});
//# sourceMappingURL=panelmenudemo.module.chunk.js.map