webpackJsonp(["carouseldemo.module"],{

/***/ "../../../../../src/app/showcase/components/carousel/carouseldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carouseldemo__ = __webpack_require__("../../../../../src/app/showcase/components/carousel/carouseldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarouselDemoRoutingModule = (function () {
    function CarouselDemoRoutingModule() {
    }
    return CarouselDemoRoutingModule;
}());
CarouselDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__carouseldemo__["a" /* CarouselDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], CarouselDemoRoutingModule);

//# sourceMappingURL=carouseldemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/carousel/carouseldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Carousel</span>\n        <span>Carousel displays content using a slide effect featuring responsive mode, swipe support for touch enabled devices and various customization options.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n\n    <p-growl [value]=\"msgs\"></p-growl>\n\n    <p-carousel headerText=\"Cars\" [value]=\"cars\">\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-grid ui-grid-responsive\">\n                <div class=\"ui-grid-row\">\n                    <div class=\"ui-grid-col-12\"><img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\"></div>\n                </div>\n                <div class=\"ui-grid-row\">\n                    <div class=\"ui-grid-col-6\">Vin</div>\n                    <div class=\"ui-grid-col-6\">{{car.vin}}</div>\n                </div>\n                <div class=\"ui-grid-row\">\n                    <div class=\"ui-grid-col-6\">Year</div>\n                    <div class=\"ui-grid-col-6\">{{car.year}}</div>\n                </div>\n                <div class=\"ui-grid-row\">\n                    <div class=\"ui-grid-col-6\">Color</div>\n                    <div class=\"ui-grid-col-6\">{{car.color}}</div>\n                </div>\n                <div class=\"ui-grid-row\">\n                    <div class=\"ui-grid-col-12\">\n                        <button type=\"button\" pButton icon=\"fa-search\" (click)=\"selectCar(car)\"></button>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </p-carousel>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;CarouselModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Carousel requires a collection of items as its value and a ng-template content to display\n                where each item can be accessed using the implicit variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel [value]=\"items\"&gt;\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\n        Content to display\n    &lt;/ul&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n\n            <h3>Managing Data</h3>\n            <p>DataTable uses setter based checking to realize if the underlying data has changed to update the UI so your data changes such as adding or removing a record \n                should always create a new array reference instead of manipulating an existing array. For example, use slice instead of splice when removing an item \n                or use spread operator instead of push method when adding an item.</p>\n\n            <h3>Limiting Visible Items</h3>\n            <p>Default number of visible items is 3, use numVisible option to customize this.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel numVisible=\"1\"&gt;\n</code>\n</pre>\n\n            <h3>Effects</h3>\n            <p>The easing function to use is \"ease-out\" by default and this can be customized using easing property. \n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel easing=\"easeOutStrong\"&gt;\n</code>\n</pre>\n\n            <h3>SlideShow</h3>\n            <p>Carousel can display the contents in a slideshow, for this purpose autoPlayInterval and circular attributes are used.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel circular=\"circular\" autoplayInterval=\"3000\"&gt;\n</code>\n</pre>\n\n            <h3>Responsive</h3>\n            <p>Responsive mode is enabled by default causing carousel to switch between small and large viewport depending on the breakpoint value which is 560 initially.</p>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Array of data to display.</td>\n                        </tr>\n                        <tr>\n                            <td>numVisible</td>\n                            <td>number</td>\n                            <td>3</td>\n                            <td>Number of visible items per page.</td>\n                        </tr>\n                        <tr>\n                            <td>firstVisible</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the first visible item.</td>\n                        </tr>\n                        <tr>\n                            <td>headerText</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the header section.</td>\n                        </tr>\n                        <tr>\n                            <td>effectDuration</td>\n                            <td>any</td>\n                            <td>500</td>\n                            <td>Duration of the scrolling animation in milliseconds or a predefined value like \"slow\", \"normal\" and \"fast\".</td>\n                        </tr>\n                        <tr>\n                            <td>circular</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines continuous scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>breakpoint</td>\n                            <td>number</td>\n                            <td>560</td>\n                            <td>Breakpoint value in pixels to switch between small and large viewport.</td>\n                        </tr>\n                        <tr>\n                            <td>responsive</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When defined, causes carousel to adjust its width based on screen size.</td>\n                        </tr>\n                        <tr>\n                            <td>autoplayInterval</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Time in milliseconds to have carousel start scrolling automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>easing</td>\n                            <td>string</td>\n                            <td>ease-out</td>\n                            <td>Easing animation to use for scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>pageLinks</td>\n                            <td>number</td>\n                            <td>3</td>\n                            <td>Number of maximum page links to display. If total page count exceeds this value a dropdown is displayed instead.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onPage</td>\n                            <td>event.page: New page index</td>\n                            <td>Callback to invoke on page change.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-carousel</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-header</td>\n                            <td>Header element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-header-title</td>\n                            <td>Header text.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-viewport</td>\n                            <td>Viewport containing the items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-button</td>\n                            <td>Navigator button at header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-next-button</td>\n                            <td>Next page button at header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-prev-button</td>\n                            <td>Previous page button at header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-page-links</td>\n                            <td>Page links container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-page-link</td>\n                            <td>A page link.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-mobiledropdown</td>\n                            <td>Cancel icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-item</td>\n                            <td>Cancel icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/carousel\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-carousel headerText=\"Cars\" [value]=\"cars\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-grid ui-grid-responsive\"&gt;\n            &lt;div class=\"ui-grid-row\"&gt;\n                &lt;div class=\"ui-grid-col-12\"&gt;&lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\"&gt;&lt;/div&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-grid-row\"&gt;\n                &lt;div class=\"ui-grid-col-6\"&gt;Vin&lt;/div&gt;\n                &lt;div class=\"ui-grid-col-6\"&gt;{{car.vin}}&lt;/div&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-grid-row\"&gt;\n                &lt;div class=\"ui-grid-col-6\"&gt;Year&lt;/div&gt;\n                &lt;div class=\"ui-grid-col-6\"&gt;{{car.year}}&lt;/div&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-grid-row\"&gt;\n                &lt;div class=\"ui-grid-col-6\"&gt;Color&lt;/div&gt;\n                &lt;div class=\"ui-grid-col-6\"&gt;{{car.color}}&lt;/div&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-grid-row\"&gt;\n                &lt;div class=\"ui-grid-col-12\"&gt;\n                    &lt;button type=\"button\" pButton icon=\"fa-search\" (click)=\"selectCar(car)\"&gt;&lt;/button&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CarouselDemo &#123;\n\n    cars: Car[];\n\n    msgs: Message[];\n\n    constructor() &#123;\n        this.msgs = [];\n        this.cars = [\n            &#123;vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'&#125;,\n            &#123;vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'&#125;,\n            &#123;vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'&#125;,\n            &#123;vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'&#125;,\n            &#123;vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'&#125;,\n            &#123;vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'&#125;,\n            &#123;vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'&#125;,\n            &#123;vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'&#125;,\n            &#123;vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'&#125;\n        ];\n    &#125;\n\n    selectCar(car: Car) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/carousel/carouseldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselDemoModule", function() { return CarouselDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carouseldemo__ = __webpack_require__("../../../../../src/app/showcase/components/carousel/carouseldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carouseldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/carousel/carouseldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_carousel_carousel__ = __webpack_require__("../../../../../src/app/components/carousel/carousel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CarouselDemoModule = (function () {
    function CarouselDemoModule() {
    }
    return CarouselDemoModule;
}());
CarouselDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__carouseldemo_routing_module__["a" /* CarouselDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_carousel_carousel__["a" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carouseldemo__["a" /* CarouselDemo */]
        ]
    })
], CarouselDemoModule);

//# sourceMappingURL=carouseldemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/carousel/carouseldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselDemo = (function () {
    function CarouselDemo() {
        this.msgs = [];
        this.cars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
    }
    CarouselDemo.prototype.selectCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin });
    };
    return CarouselDemo;
}());
CarouselDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/carousel/carouseldemo.html"),
        styles: ["\n        .ui-grid-row {\n            text-align: center;\n        }\n\n        .ui-grid {\n            margin: 10px 0px;\n        }\n\n        .ui-grid-row > div {\n            padding: 4px 10px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [])
], CarouselDemo);

//# sourceMappingURL=carouseldemo.js.map

/***/ })

});
//# sourceMappingURL=carouseldemo.module.chunk.js.map