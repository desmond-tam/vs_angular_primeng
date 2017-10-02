webpackJsonp(["progressbardemo.module"],{

/***/ "../../../../../src/app/showcase/components/progressbar/progressbardemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbardemo__ = __webpack_require__("../../../../../src/app/showcase/components/progressbar/progressbardemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressBarDemoRoutingModule = (function () {
    function ProgressBarDemoRoutingModule() {
    }
    return ProgressBarDemoRoutingModule;
}());
ProgressBarDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__progressbardemo__["a" /* ProgressBarDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], ProgressBarDemoRoutingModule);

//# sourceMappingURL=progressbardemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/progressbar/progressbardemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ProgressBar</span>\n        <span>ProgressBar is a process status indicator.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [(value)]=\"msgs\"></p-growl>\n\n    <h3 class=\"first\">Dynamic</h3>\n    <p-progressBar [value]=\"value\"></p-progressBar>\n\n    <h3>Static</h3>\n    <p-progressBar [value]=\"50\"></p-progressBar>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ProgressBarModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ProgressBar requires a value between 0 and 100 to display the progress.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-progressBar [value]=\"value\"&gt;&lt;/p-progressBar&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    value: number = 0;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Current value of the progress.</td>\n                        </tr>\n                        <tr>\n                            <td>showValue</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Show or hide progress bar value.</td>\n                        </tr>\n                        <tr>\n                            <td>unit</td>\n                            <td>string</td>\n                            <td>%</td>\n                            <td>Unit sign appended to the value.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-progressbar</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progressbar-value</td>\n                            <td>Element whose width changes according to value.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progressbar-label</td>\n                            <td>Label element that displays the current value.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/progressbar\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;h3 class=\"first\"&gt;Dynamic&lt;/h3&gt;\n&lt;p-progressBar [value]=\"value\"&gt;&lt;/p-progressBar&gt;\n\n&lt;h3&gt;Static&lt;/h3&gt;\n&lt;p-progressBar [value]=\"50\"&gt;&lt;/p-progressBar&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ProgressBarDemo &#123;\n\n    value: number = 0;\n\n    msgs: Message[];\n\n    ngOnInit() &#123;\n        let interval = setInterval(() => &#123;\n            this.value = this.value + Math.floor(Math.random() * 10) + 1;\n            if(this.value >= 100) &#123;\n                this.value = 100;\n                this.msgs = [&#123;severity: 'info', summary: 'Success', detail: 'Process Completed'&#125;];\n                clearInterval(interval);\n            &#125;\n        &#125;, 2000);\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/progressbar/progressbardemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemoModule", function() { return ProgressBarDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbardemo__ = __webpack_require__("../../../../../src/app/showcase/components/progressbar/progressbardemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbardemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/progressbar/progressbardemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_progressbar_progressbar__ = __webpack_require__("../../../../../src/app/components/progressbar/progressbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProgressBarDemoModule = (function () {
    function ProgressBarDemoModule() {
    }
    return ProgressBarDemoModule;
}());
ProgressBarDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__progressbardemo_routing_module__["a" /* ProgressBarDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_progressbar_progressbar__["a" /* ProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__progressbardemo__["a" /* ProgressBarDemo */]
        ]
    })
], ProgressBarDemoModule);

//# sourceMappingURL=progressbardemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/progressbar/progressbardemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressBarDemo = (function () {
    function ProgressBarDemo() {
        this.value = 0;
    }
    ProgressBarDemo.prototype.ngOnInit = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                _this.msgs = [{ severity: 'info', summary: 'Success', detail: 'Process Completed' }];
                clearInterval(interval);
            }
        }, 2000);
    };
    return ProgressBarDemo;
}());
ProgressBarDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/progressbar/progressbardemo.html")
    })
], ProgressBarDemo);

//# sourceMappingURL=progressbardemo.js.map

/***/ })

});
//# sourceMappingURL=progressbardemo.module.chunk.js.map