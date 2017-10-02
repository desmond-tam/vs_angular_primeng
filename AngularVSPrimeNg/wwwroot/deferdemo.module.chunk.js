webpackJsonp(["deferdemo.module"],{

/***/ "../../../../../src/app/components/defer/defer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DeferredLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeferredLoader = (function () {
    function DeferredLoader(el, domHandler, renderer, viewContainer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.onLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DeferredLoader.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.shouldLoad()) {
            this.load();
        }
        this.documentScrollListener = this.renderer.listen('window', 'scroll', function () {
            if (_this.shouldLoad()) {
                _this.load();
                _this.documentScrollListener();
                _this.documentScrollListener = null;
            }
        });
    };
    DeferredLoader.prototype.shouldLoad = function () {
        var rect = this.el.nativeElement.getBoundingClientRect();
        var docElement = document.documentElement;
        var scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
        var winHeight = docElement.clientHeight;
        return (winHeight >= rect.top);
    };
    DeferredLoader.prototype.load = function () {
        this.view = this.viewContainer.createEmbeddedView(this.template);
        this.onLoad.emit();
    };
    DeferredLoader.prototype.ngOnDestroy = function () {
        this.view = null;
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
    };
    return DeferredLoader;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], DeferredLoader.prototype, "onLoad", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */]) === "function" && _b || Object)
], DeferredLoader.prototype, "template", void 0);
DeferredLoader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[pDefer]',
        host: {},
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _f || Object])
], DeferredLoader);

var DeferModule = (function () {
    function DeferModule() {
    }
    return DeferModule;
}());
DeferModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [DeferredLoader],
        declarations: [DeferredLoader]
    })
], DeferModule);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/defer/deferdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deferdemo__ = __webpack_require__("../../../../../src/app/showcase/components/defer/deferdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeferDemoRoutingModule = (function () {
    function DeferDemoRoutingModule() {
    }
    return DeferDemoRoutingModule;
}());
DeferDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__deferdemo__["a" /* DeferDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], DeferDemoRoutingModule);

//# sourceMappingURL=deferdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/defer/deferdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Defer</span>\n        <span>Defer directive postpones the loading the content that is initially not in viewport until it becomes visible on scroll. Think of\n        pDefer as a smart ngIf that lazily loads content when it becomes visible after page scroll. Scroll down to load the DataTable\n        which initiates a query that is not executed on initial page load to speed up load performance.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <div style=\"height:800px\">\n        DataTable is not loaded, scroll down to initialize it.\n    </div>\n    \n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <div pDefer (onLoad)=\"initData()\">\n        <ng-template>\n            <p-dataTable [value]=\"cars\">\n                <p-column field=\"vin\" header=\"Vin\"></p-column>\n                <p-column field=\"year\" header=\"Year\"></p-column>\n                <p-column field=\"brand\" header=\"Brand\"></p-column>\n                <p-column field=\"color\" header=\"Color\"></p-column>\n            </p-dataTable>\n        </ng-template>\n    </div>\n\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DeferModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDefer&gt;\n    &lt;ng-template&gt;\n       deferred content\n   &lt;/ng-template&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n            <h3>Callback</h3>\n            <p>onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDefer (onLoad)=\"initData()\"&gt;\n    &lt;ng-template&gt;\n        &lt;p-dataTable [value]=\"cars\"&gt;\n            &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n        &lt;/p-dataTable&gt;\n    &lt;/ng-template&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nthis.cars = //initialize\n</code>\n</pre>\n            \n            <h3>Properties</h3>\n            <p>Directive has no attributes.</p>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onLoad</td>\n                            <td>-</td>\n                            <td>Callback to invoke when deferred content is loaded.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Directive does not apply any styling to host.</p>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/defer\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDefer (onLoad)=\"initData()\"&gt;\n    &lt;ng-template&gt;\n        &lt;p-dataTable [value]=\"cars\"&gt;\n            &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n        &lt;/p-dataTable&gt;\n    &lt;/ng-template&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DeferDemo &#123;\n\n    cars: Car[];\n    \n    msgs: Message[] = [];\n            \n    constructor(private carService: CarService)  &#123;&#125;\n    \n    initData()  &#123;\n        this.msgs = [&#123;severity:'success', summary:'Data Initialized', detail:'Render Completed'&#125;];\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n     &#125;\n &#125;\n</code>\n</pre>\n\n        </p-tabPanel>\n     </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/defer/deferdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferDemoModule", function() { return DeferDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deferdemo__ = __webpack_require__("../../../../../src/app/showcase/components/defer/deferdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deferdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/defer/deferdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_defer_defer__ = __webpack_require__("../../../../../src/app/components/defer/defer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_datatable_datatable__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DeferDemoModule = (function () {
    function DeferDemoModule() {
    }
    return DeferDemoModule;
}());
DeferDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__deferdemo_routing_module__["a" /* DeferDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_defer_defer__["a" /* DeferModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_datatable_datatable__["a" /* DataTableModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__deferdemo__["a" /* DeferDemo */]
        ]
    })
], DeferDemoModule);

//# sourceMappingURL=deferdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/defer/deferdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/showcase/service/carservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeferDemo = (function () {
    function DeferDemo(carService) {
        this.carService = carService;
        this.msgs = [];
    }
    DeferDemo.prototype.initData = function () {
        var _this = this;
        this.msgs = [{ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' }];
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    return DeferDemo;
}());
DeferDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/defer/deferdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DeferDemo);

var _a;
//# sourceMappingURL=deferdemo.js.map

/***/ })

});
//# sourceMappingURL=deferdemo.module.chunk.js.map