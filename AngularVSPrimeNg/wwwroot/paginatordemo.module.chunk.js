webpackJsonp(["paginatordemo.module"],{

/***/ "../../../../../src/app/showcase/components/paginator/paginatordemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paginatordemo__ = __webpack_require__("../../../../../src/app/showcase/components/paginator/paginatordemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaginatorDemoRoutingModule = (function () {
    function PaginatorDemoRoutingModule() {
    }
    return PaginatorDemoRoutingModule;
}());
PaginatorDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__paginatordemo__["a" /* PaginatorDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], PaginatorDemoRoutingModule);

//# sourceMappingURL=paginatordemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/paginator/paginatordemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Paginator</span>\n        <span>Paginator is a generic widget to display content in paged format.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-paginator rows=\"10\" totalRecords=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"></p-paginator>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;PaginatorModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Paginator is defined using p-paginator element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n            <h3>Rows and TotalRecords</h3>\n            <p>Rows and TotalRecords define how many pages the paginator should display. Paginator below will have 10 pages.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator rows=\"10\" totalRecords=\"100\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n\n            <h3>PageLinks</h3>\n            <p>PageLinks provide shortcuts to jump to a specific page, use pageLinkSize property to define the number of links to display. Default is 5.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator rows=\"10\" totalRecords=\"100\" pageLinkSize=\"3\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n\n            <h3>Rows Per Page</h3>\n            <p>Number of items per page can be changed by the user using a dropdown if you define rowsPerPageOptions as an array of possible values.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator rows=\"10\" totalRecords=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Number of total records.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Data count to display per page.</td>\n                        </tr>\n                        <tr>\n                            <td>first</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Zero-relative number of the first row to be displayed.</td>\n                        </tr>\n                        <tr>\n                            <td>pageLinkSize</td>\n                            <td>number</td>\n                            <td>5</td>\n                            <td>Number of page links to display.</td>\n                        </tr>\n                        <tr>\n                            <td>rowsPerPageOptions</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Array of integer values to display inside rows per page dropdown.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>alwaysShow</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show it even there is only one page.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onPageChange</td>\n                            <td>event.first: Index of first record <br>\n                                event.rows: Number of rows to display in new page <br>\n                                event.page: Index of the new page <br>\n                                event.pageCount: Total number of pages <br></td>\n                            <td>Callback to invoke when page changes, the event object contains information about the new state.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator rows=\"10\" totalRecords=\"100\" (onPageChange)=\"paginate($event)\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponent &#123;\n\n    paginate(event) &#123;\n        //event.first = Index of the first record\n        //event.rows = Number of rows to display in new page\n        //event.page = Index of the new page\n        //event.pageCount = Total number of pages\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-paginator</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-first</td>\n                            <td>First page element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-prev</td>\n                            <td>Previous page element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-pages</td>\n                            <td>Container of page links.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-page</td>\n                            <td>A page link.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-next</td>\n                            <td>Next page element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-last</td>\n                            <td>Last page element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-rpp-options</td>\n                            <td>Rows per page dropdown.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/paginator\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator rows=\"10\" totalRecords=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/paginator/paginatordemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorDemoModule", function() { return PaginatorDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paginatordemo__ = __webpack_require__("../../../../../src/app/showcase/components/paginator/paginatordemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginatordemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/paginator/paginatordemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_paginator_paginator__ = __webpack_require__("../../../../../src/app/components/paginator/paginator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PaginatorDemoModule = (function () {
    function PaginatorDemoModule() {
    }
    return PaginatorDemoModule;
}());
PaginatorDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__paginatordemo_routing_module__["a" /* PaginatorDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_paginator_paginator__["a" /* PaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__paginatordemo__["a" /* PaginatorDemo */]
        ]
    })
], PaginatorDemoModule);

//# sourceMappingURL=paginatordemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/paginator/paginatordemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginatorDemo = (function () {
    function PaginatorDemo() {
    }
    return PaginatorDemo;
}());
PaginatorDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/paginator/paginatordemo.html")
    })
], PaginatorDemo);

//# sourceMappingURL=paginatordemo.js.map

/***/ })

});
//# sourceMappingURL=paginatordemo.module.chunk.js.map