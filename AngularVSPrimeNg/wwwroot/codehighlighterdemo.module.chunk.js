webpackJsonp(["codehighlighterdemo.module"],{

/***/ "../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHighlighterDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codehighlighterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CodeHighlighterDemoRoutingModule = (function () {
    function CodeHighlighterDemoRoutingModule() {
    }
    return CodeHighlighterDemoRoutingModule;
}());
CodeHighlighterDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__codehighlighterdemo__["a" /* CodeHighlighterDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], CodeHighlighterDemoRoutingModule);

//# sourceMappingURL=codehighlighterdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div class=\"Content100 overHidden TextShadow\">\n        <span class=\"fontSize30 TextShadow orange mediumFont marginBottom20 dispBlock\">CodeHighlighter</span>\n        <span class=\"defaultText dispTable\">CodeHighlighter is an attribute directive to highlight code blocks using PrismJS</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">CSS</h3>\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n.ui-datatable table &#123;\n    border-collapse:collapse;\n    width: 100%;\n    table-layout: fixed;\n&#125;\n</code>\n</pre>\n    \n    <h3>HTML</h3>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div id=\"pm\" style=\"width:300px\"&gt;\n&lt;div&gt;\n&lt;div&gt;&lt;a data-icon=\"fa-file-o\"&gt;File&lt;/a&gt;&lt;/div&gt;\n&lt;div&gt;\n    &lt;ul&gt;\n        &lt;li&gt;&lt;a data-icon=\"fa-plus\"&gt;New&lt;/a&gt;\n            &lt;ul&gt;\n                &lt;li&gt;&lt;a&gt;Project&lt;/a&gt;&lt;/li&gt;\n                &lt;li&gt;&lt;a&gt;Other&lt;/a&gt;&lt;/li&gt;\n            &lt;/ul&gt;\n        &lt;/li&gt;\n        &lt;li&gt;&lt;a&gt;Open&lt;/a&gt;&lt;/li&gt;\n        &lt;li&gt;&lt;a&gt;Quit&lt;/a&gt;&lt;/li&gt;\n    &lt;/ul&gt;\n&lt;/div&gt;\n&lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n    \n    <h3>Javascript</h3>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\nvar map;\n    function initMap() &#123;\n        map = new google.maps.Map(document.getElementById('map'), &#123;\n        center: &#123;lat: -34.397, lng: 150.644&#125;,\n        zoom: 8\n    &#125;);\n&#125;\n</code>\n</pre>\n\n    <h3>Typescript</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Directive, ElementRef, OnInit&#125; from '@angular/core';\n\ndeclare var Prism: any;\n\n@Directive(&#123;\n    selector: '[pCode]'\n&#125;)\nexport class CodeHighlighter implements OnInit &#123;\n\n    constructor(private el: ElementRef) &#123;&#125;\n\n    ngOnInit() &#123;\n        Prism.highlightElement(this.el.nativeElement);\n    &#125;\n&#125;\n</code>\n</pre>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;CodeHighlighterModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>CodeHighlighter is applied to a code element with [pCode] directive. The &lt;code&gt; should have\n            a style class having language- prefix to specify the language to highlight. See Prismjs docs for the list of available languages.\n            An example block with css code would be as follows.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;pre&gt;\n&lt;code class=\"language-css\" pCode&gt;\n    .ui-datatable table &#123;\n    border-collapse:collapse;\n    width: 100%;\n    table-layout: fixed;\n&#125;\n&lt;/code&gt;\n&lt;/pre&gt;\n</code>\n</pre>                        \n            <h3>Dependencies</h3>\n            <p>Prismjs</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/codehighlighter\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n        </p-tabPanel>\n     </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterDemoModule", function() { return CodeHighlighterDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codehighlighterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__codehighlighterdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CodeHighlighterDemoModule = (function () {
    function CodeHighlighterDemoModule() {
    }
    return CodeHighlighterDemoModule;
}());
CodeHighlighterDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__codehighlighterdemo_routing_module__["a" /* CodeHighlighterDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__codehighlighterdemo__["a" /* CodeHighlighterDemo */]
        ]
    })
], CodeHighlighterDemoModule);

//# sourceMappingURL=codehighlighterdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHighlighterDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CodeHighlighterDemo = (function () {
    function CodeHighlighterDemo() {
    }
    return CodeHighlighterDemo;
}());
CodeHighlighterDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.html")
    })
], CodeHighlighterDemo);

//# sourceMappingURL=codehighlighterdemo.js.map

/***/ })

});
//# sourceMappingURL=codehighlighterdemo.module.chunk.js.map