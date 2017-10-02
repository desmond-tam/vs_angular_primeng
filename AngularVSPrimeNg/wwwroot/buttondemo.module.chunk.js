webpackJsonp(["buttondemo.module"],{

/***/ "../../../../../src/app/showcase/components/button/buttondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/button/buttondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonDemoRoutingModule = (function () {
    function ButtonDemoRoutingModule() {
    }
    return ButtonDemoRoutingModule;
}());
ButtonDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__buttondemo__["a" /* ButtonDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], ButtonDemoRoutingModule);

//# sourceMappingURL=buttondemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/button/buttondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Button</span>\n        <span>Button is an extension to standard input element with icons and theming.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Click\"></button>\n\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" label=\"Click\"></button>\n    \n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" iconPos=\"right\" label=\"Click\"></button>\n    \n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-close\"></button>\n    \n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" [disabled]=\"true\" label=\"Disabled\"></button>\n\n    <h3>Severity Buttons</h3>\n\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Primary\"></button>\n\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Secondary\" class=\"ui-button-secondary\"></button>\n\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Success\" class=\"ui-button-success\"></button>\n\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Info\"  class=\"ui-button-info\"></button>\n\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Warning\"  class=\"ui-button-warning\"></button>\n\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Danger\"  class=\"ui-button-danger\"></button>\n\n    <br /><br />\n    Number of clicks: {{clicks}}\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ButtonModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Button is applied to a button element with pButton directive. Text of the button is defined using label property.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" label=\"Click\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Events</h3>\n            <p>Events are defined using standard notation.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" (click)=\"onclick()\" label=\"Click\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class Model &#123;\n\n    onclick() &#123;\n        //execute action\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Icons</h3>\n            <p>Icon on a button is specified with icon attribute and position is customized using iconPos attribute. Default\n            icon position is left. To display only an icon, leave label as undefined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" icon=\"fa-check\" iconPos=\"left\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Severity</h3>\n            <p>Different color options are available to define severity levels.</p>\n            \n            <ul>\n                <li>.ui-button-secondary</li>\n                <li>.ui-button-success</li>\n                <li>.ui-button-info</li>\n                <li>.ui-button-warning</li>\n                <li>.ui-button-danger</li>\n            </ul>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" class=\"ui-button-info\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the button.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the icon.</td>\n                        </tr>\n                        <tr>\n                            <td>iconPos</td>\n                            <td>string</td>\n                            <td>left</td>\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-button</td>\n                            <td>Button element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-button-icon</td>\n                            <td>Icon element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-button-text</td>\n                            <td>Label element of the button</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/button\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Click\"&gt;&lt;/button&gt;\n\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" label=\"Click\"&gt;&lt;/button&gt;\n\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" iconPos=\"right\" label=\"Click\"&gt;&lt;/button&gt;\n\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\"&gt;&lt;/button&gt;\n\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" [disabled]=\"true\" label=\"Disabled\"&gt;&lt;/button&gt;\n\nNumber of clicks: {{clicks}}\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ButtonDemo &#123;\n\n    clicks: number = 0;\n\n    count() &#123;\n        this.clicks++;\n    &#125;\n&#125;\n</code>\n</pre>\n        </ p-tabPanel>\n     </p-tabView >\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/button/buttondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoModule", function() { return ButtonDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/button/buttondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttondemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/button/buttondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ButtonDemoModule = (function () {
    function ButtonDemoModule() {
    }
    return ButtonDemoModule;
}());
ButtonDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__buttondemo_routing_module__["a" /* ButtonDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buttondemo__["a" /* ButtonDemo */]
        ]
    })
], ButtonDemoModule);

//# sourceMappingURL=buttondemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/button/buttondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonDemo = (function () {
    function ButtonDemo() {
        this.clicks = 0;
    }
    ButtonDemo.prototype.count = function () {
        this.clicks++;
    };
    return ButtonDemo;
}());
ButtonDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/button/buttondemo.html")
    })
], ButtonDemo);

//# sourceMappingURL=buttondemo.js.map

/***/ })

});
//# sourceMappingURL=buttondemo.module.chunk.js.map