webpackJsonp(["sliderdemo.module"],{

/***/ "../../../../../src/app/showcase/components/slider/sliderdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sliderdemo__ = __webpack_require__("../../../../../src/app/showcase/components/slider/sliderdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderDemoRoutingModule = (function () {
    function SliderDemoRoutingModule() {
    }
    return SliderDemoRoutingModule;
}());
SliderDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sliderdemo__["a" /* SliderDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], SliderDemoRoutingModule);

//# sourceMappingURL=sliderdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/slider/sliderdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Slider</span>\n        <span>Slider is a component to provide input using dragging of a handle.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic: {{val1}}</h3>\n    <p-slider [(ngModel)]=\"val1\" [style]=\"{'width':'200px'}\"></p-slider>\n\n    <h3>Input: {{val2}}</h3>\n    <input type=\"text\" pInputText [(ngModel)]=\"val2\" style=\"width:190px\" readonly/>\n    <p-slider [(ngModel)]=\"val2\" [style]=\"{'width':'200px'}\"></p-slider>\n\n    <h3>Animate: {{val3}}</h3>\n    <p-slider [(ngModel)]=\"val3\" [style]=\"{'width':'200px'}\" [animate]=\"true\"></p-slider>\n\n    <h3>Step: {{val4}}</h3>\n    <p-slider [(ngModel)]=\"val4\" [style]=\"{'width':'200px'}\" [step]=\"20\"></p-slider>\n\n    <h3>Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}</h3>\n    <p-slider [(ngModel)]=\"rangeValues\" [style]=\"{'width':'200px'}\" [range]=\"true\"></p-slider>\n\n    <h3>Vertical: {{val5}}</h3>\n    <p-slider [(ngModel)]=\"val5\" [style]=\"{'height':'200px'}\" orientation=\"vertical\"></p-slider>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SliderModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way binding is defined using the standard ngModel directive.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    val: number;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Slider can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider formControlName=\"age\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n            <h3>Min-Max</h3>\n            <p>Boundaries are specified with min and max attributes.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n            <h3>Step</h3>\n            <p>Step factor is 1 by default and can be customized with step option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\" [step]=\"10\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n            <h3>Range</h3>\n            <p>Range slider provides two handles to define two values. In this case, value binding should refer to an array.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    rangeValues: number[];\n\n&#125;\n</code>\n</pre>\n\n            <h3>Orientation</h3>\n            <p>Sliders supports two orientations, horizontal is the default and other alternative is vertical.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\" orientation=\"vertical\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>animate</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, displays an animation on click of the slider bar.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>min</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Mininum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>100</td>\n                            <td>Maximum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>orientation</td>\n                            <td>string</td>\n                            <td>horizontal</td>\n                            <td>Orientation of the slider, valid values are horizontal and vertical.</td>\n                        </tr>\n                        <tr>\n                            <td>step</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Step factor to increment/decrement the value.</td>\n                        </tr>\n                        <tr>\n                            <td>range</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When speficed, allows two boundary values to be picked.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>\n                                event.originalEvent: Slide event <br />\n                                event.value: New value <br />\n                                event.values: Values in range mode <br />\n                            </td>\n                            <td>Callback to invoke on value change via slide.</td>\n                        </tr>\n                        <tr>\n                            <td>onSlideEnd</td>\n                            <td>\n                                event.originalEvent: Mouseup event<br />\n                                event.value: New value \n                            </td>\n                            <td>Callback to invoke when slide stops.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\" (onChange)=\"handleChange($event)\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nhandleChange(e) &#123;\n    //e.value is the new value\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-slider</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slider-handle</td>\n                            <td>Handle element</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slider\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic: {{val1}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"val1\" [style]=\"&#123;'width':'200px'&#125;\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Input: {{val2}}&lt;/h3&gt;\n&lt;input type=\"text\" pInputText [(ngModel)]=\"val2\" style=\"width:190px\"/&gt;\n&lt;p-slider [(ngModel)]=\"val2\" [style]=\"&#123;'width':'200px'&#125;\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Animate: {{val3}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"val3\" [style]=\"&#123;'width':'200px'&#125;\" [animate]=\"true\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Step: {{val4}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"val4\" [style]=\"&#123;'width':'200px'&#125;\" [step]=\"20\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"rangeValues\" [style]=\"&#123;'width':'200px'&#125;\" [range]=\"true\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Vertical: {{val5}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"val5\" [style]=\"&#123;'height':'200px'&#125;\" orientation=\"vertical\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SliderDemo &#123;\n\n    val1: number;\n\n    val2: number = 50;\n\n    val3: number;\n\n    val4: number;\n\n    val5: number;\n\n    rangeValues: number[] = [20,80];\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/slider/sliderdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDemoModule", function() { return SliderDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sliderdemo__ = __webpack_require__("../../../../../src/app/showcase/components/slider/sliderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sliderdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/slider/sliderdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_slider_slider__ = __webpack_require__("../../../../../src/app/components/slider/slider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SliderDemoModule = (function () {
    function SliderDemoModule() {
    }
    return SliderDemoModule;
}());
SliderDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__sliderdemo_routing_module__["a" /* SliderDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_slider_slider__["a" /* SliderModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__["a" /* InputTextModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__sliderdemo__["a" /* SliderDemo */]
        ]
    })
], SliderDemoModule);

//# sourceMappingURL=sliderdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/slider/sliderdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderDemo = (function () {
    function SliderDemo() {
        this.val2 = 50;
        this.rangeValues = [20, 80];
    }
    return SliderDemo;
}());
SliderDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/slider/sliderdemo.html")
    })
], SliderDemo);

//# sourceMappingURL=sliderdemo.js.map

/***/ })

});
//# sourceMappingURL=sliderdemo.module.chunk.js.map