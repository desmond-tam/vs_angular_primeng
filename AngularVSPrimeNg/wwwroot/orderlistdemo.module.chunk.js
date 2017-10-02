webpackJsonp(["orderlistdemo.module"],{

/***/ "../../../../../src/app/showcase/components/orderlist/orderlistdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderlistdemo__ = __webpack_require__("../../../../../src/app/showcase/components/orderlist/orderlistdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderListDemoRoutingModule = (function () {
    function OrderListDemoRoutingModule() {
    }
    return OrderListDemoRoutingModule;
}());
OrderListDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__orderlistdemo__["a" /* OrderListDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], OrderListDemoRoutingModule);

//# sourceMappingURL=orderlistdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/orderlist/orderlistdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">OrderList</span>\n        <span>OrderList is used to sort a collection. When the position of an item changes, the backend array is updated as well.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    \n    <p-orderList [value]=\"cars\" [listStyle]=\"{'height':'350px'}\" responsive=\"true\" header=\"Cars\" filterBy=\"brand\" filterPlaceholder=\"Filter by brand\"\n        dragdrop=\"true\">\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\">\n                <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\">\n                <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\n            </div>\n        </ng-template>\n    </p-orderList>\n    \n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;OrderListModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>OrderList requires an array as its value and a ng-template for its content where each item in the array\n                 can be accessed inside the ng-template using a local ng-template variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-orderList [value]=\"cars\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\"&gt;\n            &lt;div style=\"font-size:14px;float:right;margin:15px 5px 0 0\"&gt;{{car.brand}} - {{car.year}} - {{car.color}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-orderList&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponent &#123;\n\n    cars: Car[];\n    \n    ngOnInit() &#123;\n        this.cars = //initialize cars\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Multiple Selection</h3>\n            <p>Multiple items can either be selected using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\n            devices metaKeySelection is turned off automatically.</p>\n            \n            <h3>Filtering</h3>\n            <p>Items can be filtered using an input field by enabling the filterBy property that specifies the fields to use in filtering.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-orderList [value]=\"cars\" filterBy=\"brand\"&gt;&lt;/p-orderList&gt;\n</code>\n</pre>\n\n            <p>Multiple fields can be defines using a comma separates list.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-orderList [value]=\"cars\" filterBy=\"brand,color,address.city\"&gt;&lt;/p-orderList&gt;\n</code>\n</pre>\n\n            <h3>DragDrop</h3>\n            <p>Items can be reordered using drag and drop by enabling dragdrop property along with dragdropScope to avoid conflict with other drag drop events on view.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-orderList [value]=\"cars\" dragdrop=\"true\" dragdropScope=\"cars\"&gt;\n</code>\n</pre>\n            \n            <h3>Responsive</h3>\n            <p>In responsive mode, orderlist adjusts its controls based on screen size. To activate this mode, set responsive as true.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-orderList [value]=\"cars\" [responsive]=\"true\"&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to reorder.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text for the caption</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>listStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the list element.</td>\n                        </tr>\n                        <tr>\n                            <td>responsive</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled orderlist adjusts its controls based on screen size.</td>\n                        </tr>\n                        <tr>\n                            <td>filterBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>When specified displays an input field to filter the items on keyup and decides which fields to search against.</td>\n                        </tr>\n                        <tr>\n                            <td>metaKeySelection</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>dragdrop</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to enable dragdrop based reordering.</td>\n                        </tr>\n                        <tr>\n                            <td>dragdropScope</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Unique key of drag drop events to avoid conflict with other drag drop events on the page.</td>\n                        </tr>\n                        <tr>\n                            <td>filterPlaceHolder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Placeholder text on filter input.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onReorder</td>\n                            <td>event: browser event</td>\n                            <td>Callback to invoke when list is reordered.</td>\n                        </tr>\n                        <tr>\n                            <td>onSelectionChange</td>\n                            <td>originalEvent: browser event<br/>\n                                value: Current selection</td>\n                            <td>Callback to invoke when selection changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onFilterEvent</td>\n                            <td>originalEvent: browser event<br/>\n                                value: Current filter values</td>\n                            <td>Callback to invoke when filtering occurs.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-orderlist</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-orderlist-list</td>\n                            <td>List container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-orderlist-item</td>\n                            <td>An item in the list.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/orderlist\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-orderList [value]=\"cars\" [listStyle]=\"&#123;'height':'250px'&#125;\" [responsive]=\"true\" header=\"Cars\" \n    filter=\"filter\" filterBy=\"brand\" filterPlaceholder=\"Filter by brand\" dragdrop=\"true\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\"&gt;\n            &lt;div style=\"font-size:14px;float:right;margin:15px 5px 0 0\"&gt;{{car.brand}} - {{car.year}} - {{car.color}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-orderList&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class OrderListDemo &#123;\n\n    cars: Car[];\n    \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/orderlist/orderlistdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListDemoModule", function() { return OrderListDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderlistdemo__ = __webpack_require__("../../../../../src/app/showcase/components/orderlist/orderlistdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderlistdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/orderlist/orderlistdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_orderlist_orderlist__ = __webpack_require__("../../../../../src/app/components/orderlist/orderlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OrderListDemoModule = (function () {
    function OrderListDemoModule() {
    }
    return OrderListDemoModule;
}());
OrderListDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__orderlistdemo_routing_module__["a" /* OrderListDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_orderlist_orderlist__["a" /* OrderListModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__orderlistdemo__["a" /* OrderListDemo */]
        ]
    })
], OrderListDemoModule);

//# sourceMappingURL=orderlistdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/orderlist/orderlistdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListDemo; });
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


var OrderListDemo = (function () {
    function OrderListDemo(carService) {
        this.carService = carService;
    }
    OrderListDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    return OrderListDemo;
}());
OrderListDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/orderlist/orderlistdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], OrderListDemo);

var _a;
//# sourceMappingURL=orderlistdemo.js.map

/***/ })

});
//# sourceMappingURL=orderlistdemo.module.chunk.js.map