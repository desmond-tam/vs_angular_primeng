webpackJsonp(["theming.module"],{

/***/ "../../../../../src/app/showcase/components/theming/theming-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theming_component__ = __webpack_require__("../../../../../src/app/showcase/components/theming/theming.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemingRoutingModule = (function () {
    function ThemingRoutingModule() {
    }
    return ThemingRoutingModule;
}());
ThemingRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__theming_component__["a" /* ThemingComponent */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], ThemingRoutingModule);

//# sourceMappingURL=theming-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/theming/theming.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Theming</span>\n        <span>Create your own PrimeNG experience</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <h3 style=\"margin-top:0px\">Structural CSS</h3>\n    <p>These style classes define the skeleton of the components and include css properties such as margin, padding, display type, dimensions and positioning.\n    Refer to documentation of each component for the list of structural classes per component.</p>\n\n    <h3>Skinning CSS</h3>\n    <p>Skinning defines the look and feel properties like colors, border colors, background images.</p>\n\n    <div class=\"doc-tablewrapper\">\n        <table class=\"doc-table\">\n            <thead>\n                <tr>\n                    <th>Style Class</th>\n                    <th>Applies</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>ui-widget</td>\n                    <td>All PrimeNG components</td>\n                </tr>\n                <tr>\n                    <td>ui-widget-header</td>\n                    <td>Header section of a component</td>\n                </tr>\n                <tr>\n                    <td>ui-widget-content</td>\n                    <td>Content section of a component</td>\n                </tr>\n                <tr>\n                    <td>ui-state-default</td>\n                    <td>Default state of a clickable element</td>\n                </tr>\n                <tr>\n                    <td>ui-state-hover</td>\n                    <td>Hover state of a clickable element like mouse over</td>\n                </tr>\n                <tr>\n                    <td>ui-state-active</td>\n                    <td>Active state of a clickable element like mouse press</td>\n                </tr>\n                <tr>\n                    <td>ui-state-highlight</td>\n                    <td>Highlighed elements</td>\n                </tr>\n                <tr>\n                    <td>ui-state-disabled</td>\n                    <td>Disabled elements</td>\n                </tr>\n                <tr>\n                    <td>fa</td>\n                    <td>Icon elements based on font awesome</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <p>These classes are not aware of structural css like margins and paddings, mostly they only define colors. This clean separation brings great flexibility in theming because you don’t need to know each and every skinning selectors of components to change their style.</p>\n\n    <p>For example Panel component’s header section has the \"ui-panel-titlebar\" structural class, to change the color of a panel header you don’t need to about this class as \"ui-widget-header\" defines colors for panel header.</p>\n\n    <h3>Free Themes</h3>\n    <p>16 free themes are available for PrimeNG, these include the themeroller themes, twitter bootstrap theme and our custom themes. ThemeSwitcher on the top right section\n        of the page dynamically changes the theme at demo pages. Themes are distributed along with PrimeNG itself. In addition, <a href=\"https://jqueryui.com/themeroller/\">online ThemeRoller</a> designer allows you to create a PrimeNG theme.</p>\n\n    <p>Font-size of free themes use em to define the font size of the widgets using .ui-widget class. This is 1em by default and it is suggested to define a base font-size at the body element of your application to adjust the size of\n    components.</p>\n\n    <h3>Premium Layouts and Themes</h3>\n    <p>PrimeNG also supports sass based, fully customizable and easy to use <a href=\"http://www.primefaces.org/themes\">premium themes and layouts</a> such as <b>Ultima</b>\n        as Angular CLI projects.</p>\n\n    <a href=\"http://www.primefaces.org/layouts/ultima\">\n        <img alt=\"Ultima\" src=\"http://www.primefaces.org/images/market/ultima/ultima_layout_biggest.png\" style=\"width:100%\"/> \n    </a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/theming/theming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemingComponent = (function () {
    function ThemingComponent() {
    }
    return ThemingComponent;
}());
ThemingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/theming/theming.component.html")
    })
], ThemingComponent);

//# sourceMappingURL=theming.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/theming/theming.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingModule", function() { return ThemingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theming_component__ = __webpack_require__("../../../../../src/app/showcase/components/theming/theming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theming_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/theming/theming-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThemingModule = (function () {
    function ThemingModule() {
    }
    return ThemingModule;
}());
ThemingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__theming_routing_module__["a" /* ThemingRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__theming_component__["a" /* ThemingComponent */]
        ]
    })
], ThemingModule);

//# sourceMappingURL=theming.module.js.map

/***/ })

});
//# sourceMappingURL=theming.module.chunk.js.map