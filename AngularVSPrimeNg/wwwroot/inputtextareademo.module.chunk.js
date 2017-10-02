webpackJsonp(["inputtextareademo.module"],{

/***/ "../../../../../src/app/showcase/components/inputtextarea/inputtextareademo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextareaDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputtextareademo__ = __webpack_require__("../../../../../src/app/showcase/components/inputtextarea/inputtextareademo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputTextareaDemoRoutingModule = (function () {
    function InputTextareaDemoRoutingModule() {
    }
    return InputTextareaDemoRoutingModule;
}());
InputTextareaDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inputtextareademo__["a" /* InputTextareaDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], InputTextareaDemoRoutingModule);

//# sourceMappingURL=inputtextareademo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputtextarea/inputtextareademo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">InputTextarea</span>\n        <span>Inputtextarea add styling and autoResize functionality to standard textare element.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <textarea rows=\"5\" cols=\"30\" pInputTextarea></textarea>\n\n    <h3>AutoResize</h3>\n    <textarea [rows]=\"5\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InputTextareaModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>InputTextarea is applied to an input field with pInputTextarea directive.</p>\n                    \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;textarea pInputTextarea&gt;&lt;/textarea&gt;\n</code>\n</pre>\n\n            <h3>Model Binding</h3>\n            <p>A model can be bound using the standard ngModel directive.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;textarea pInputTextarea [(ngModel)]=\"property\"&gt;&lt;/textarea&gt;\n</code>\n</pre>\n\n            <h3>AutoResize</h3>\n            <p>In auto resize mode, textarea grows instead of displaying a scrollbar. When this feature is enabled, rows and cols properties\n            are required to be defined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;textarea [rows]=\"5\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"&gt;&lt;/textarea&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>autoResize</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, textarea size changes as being typed.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onResize</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when element is resized.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-inputtextarea</td>\n                            <td>Textarea element</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputtextarea\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;textarea rows=\"5\" cols=\"30\" pInputTextarea&gt;&lt;/textarea&gt;\n\n&lt;h3&gt;AutoResize&lt;/h3&gt;\n&lt;textarea rows=\"5\" cols=\"30\" pInputTextarea autoResize=\"autoResize\"&gt;&lt;/textarea&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputtextarea/inputtextareademo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaDemoModule", function() { return InputTextareaDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputtextareademo__ = __webpack_require__("../../../../../src/app/showcase/components/inputtextarea/inputtextareademo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputtextareademo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/inputtextarea/inputtextareademo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_inputtextarea_inputtextarea__ = __webpack_require__("../../../../../src/app/components/inputtextarea/inputtextarea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InputTextareaDemoModule = (function () {
    function InputTextareaDemoModule() {
    }
    return InputTextareaDemoModule;
}());
InputTextareaDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__inputtextareademo_routing_module__["a" /* InputTextareaDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_inputtextarea_inputtextarea__["a" /* InputTextareaModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__inputtextareademo__["a" /* InputTextareaDemo */]
        ]
    })
], InputTextareaDemoModule);

//# sourceMappingURL=inputtextareademo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputtextarea/inputtextareademo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextareaDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputTextareaDemo = (function () {
    function InputTextareaDemo() {
    }
    return InputTextareaDemo;
}());
InputTextareaDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/inputtextarea/inputtextareademo.html")
    })
], InputTextareaDemo);

//# sourceMappingURL=inputtextareademo.js.map

/***/ })

});
//# sourceMappingURL=inputtextareademo.module.chunk.js.map