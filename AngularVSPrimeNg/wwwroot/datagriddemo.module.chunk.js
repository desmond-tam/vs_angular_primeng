webpackJsonp(["datagriddemo.module"],{

/***/ "../../../../../src/app/showcase/components/datagrid/datagriddemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataGridDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datagriddemo__ = __webpack_require__("../../../../../src/app/showcase/components/datagrid/datagriddemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataGridDemoRoutingModule = (function () {
    function DataGridDemoRoutingModule() {
    }
    return DataGridDemoRoutingModule;
}());
DataGridDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__datagriddemo__["a" /* DataGridDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], DataGridDemoRoutingModule);

//# sourceMappingURL=datagriddemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datagrid/datagriddemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataGrid</span>\n        <span>DataGrid displays data in grid format.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataGrid [value]=\"cars\" [paginator]=\"true\" [rows]=\"20\">\n        <p-header>\n            List of Cars\n        </p-header>\n        <ng-template let-car pTemplate=\"item\">\n            <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n                <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\">\n                    <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                    <hr class=\"ui-widget-content\" style=\"border-top:0\">\n                    <i class=\"fa fa-search\" (click)=\"selectCar(car)\" style=\"cursor:pointer\"></i>\n                </p-panel>\n            </div>\n        </ng-template>\n    </p-dataGrid>\n        \n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"225\" (onAfterHide)=\"onDialogHide()\">\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\" style=\"font-size:16px;text-align:center;padding:20px\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\" style=\"text-align:center\"><img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\"></div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\">Vin: </div>\n                <div class=\"ui-grid-col-8\">{{selectedCar.vin}}</div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\">Year: </div>\n                <div class=\"ui-grid-col-8\">{{selectedCar.year}}</div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\">Brand: </div>\n                <div class=\"ui-grid-col-8\">{{selectedCar.brand}}</div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\">Color: </div>\n                <div class=\"ui-grid-col-8\">{{selectedCar.color}}</div>\n            </div>\n        </div>\n    </p-dialog>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DataGridModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>DataGrid requires a collection of items as its value and a ng-template to display each item. ng-template should contain a div element as a wrapper with <a [routerLink]=\"['/grid']\">Grid CSS</a> style class of your choice to \n                define the grid layout. \n            </p><p>Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the datagrid. Cars are loaded by a CarService that connects to a server to fetch the cars with a Promise.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport interface Car &#123;\n    vin;\n    year;\n    brand;\n    color;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Injectable&#125; from 'angular2/core';\nimport &#123;Http, Response&#125; from 'angular2/http';\nimport &#123;Car&#125; from '../domain/car';\n    \n@Injectable()\nexport class CarService &#123;\n    \n    constructor(private http: Http) &#123;&#125;\n\n    getCarsLarge() &#123;\n        return this.http.get('/showcase/resources/data/cars-large.json')\n                    .toPromise()\n                    .then(res => &lt;Car[]&gt; res.json().data)\n                    .then(data => &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        \n            <p>Here is a sample DataGrid that displays a list of cars where each row contains 3 cars.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataGridDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataGrid [value]=\"cars\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n            Car content\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataGrid&gt;\n</code>\n</pre>\n\n            <p>Index of the row is available at the ng-template.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataGrid [value]=\"cars\"&gt;\n    &lt;ng-template let-car let-i=\"index\" pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n            Car content for {{i}}\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataGrid&gt;\n</code>\n</pre>\n\n            <h3>Change Detection</h3>\n            <p>DataGrid either uses setter based checking or ngDoCheck to realize if the underlying data has changed to update the UI. This is configured using the immutable\n                property, when enabled (default) setter based detection is utilized so your data changes such as adding or removing a record \n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change. \n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\n                both methods can be used depending on your preference.\n            </p>\n\n            <h3>Facets</h3>\n            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Header&#125; from 'primeng/primeng';\nimport &#123;Footer&#125; from 'primeng/primeng';\n</code>\n</pre>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataGrid [value]=\"cars\"&gt;\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n            Car content\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataGrid&gt;\n</code>\n</pre>\n            \n            <h3>Paginator</h3>\n            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number\n                of page links to display.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataGrid [value]=\"cars\" [paginator]=\"true\" [rows]=\"9\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n            Car content\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataGrid&gt;\n</code>\n</pre>\n    \n            <h3>Lazy Loading</h3>\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n             onLazyLoad callback everytime paging happens. To implement lazy loading,\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object \n            that contains information about what to load. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator \n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataGrid [value]=\"cars\" [paginator]=\"true\" [rows]=\"9\" [lazy]=\"true\" (onLazyLoad)=\"loadData($event)\" [totalRecords]=\"totalRecords\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n            Car content\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataGrid&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nloadData(event) &#123;\n    //event.first = First row offset\n    //event.rows = Number of rows per page\n&#125;\n</code>\n</pre>\n\n            <h3>Responsive</h3>\n            <p>DataGrid is responsive by default, when the screen gets smaller than a certain value, items are displayed as stacked.</p>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of rows to display per page.</td>\n                        </tr>\n                        <tr>\n                            <td>paginator</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified as true, enables the pagination.</td>\n                        </tr>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of total records, defaults to length of value when not defined.</td>\n                        </tr>\n                        <tr>\n                            <td>pageLinks</td>\n                            <td>number</td>\n                            <td>5</td>\n                            <td>Number of page links to display in paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>rowsPerPageOptions</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Array of integer values to display inside rows per page dropdown of paginator</td>\n                        </tr>\n                        <tr>\n                            <td>alwaysShowPaginator</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show it even there is only one page.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorPosition</td>\n                            <td>string</td>\n                            <td>bottom</td>\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\n                        </tr>\n                        <tr>\n                            <td>emptyMessage</td>\n                            <td>string</td>\n                            <td>No records found.</td>\n                            <td>Text to display when there is no data.</td>\n                        </tr>\n                        <tr>\n                            <td>trackBy</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\n                        </tr>\n                        <tr>\n                            <td>immutable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines how the data should be manipulated.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onLazyLoad</td>\n                            <td>event.first = First row offset <br>\n                                event.rows = Number of rows per page <br></td>\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\n                        </tr>\n                        <tr>\n                            <td>onPage</td>\n                            <td>event.first: Index of first record in page<br>\n                                event.rows: Number of rows on the page</td>\n                            <td>Callback to invoke when pagination occurs.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-datagrid</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datagrid-header</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datagrid-footer</td>\n                            <td>Footer section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datagrid-content</td>\n                            <td>Container of items.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datagrid\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataGrid [value]=\"cars\" [paginator]=\"true\" [rows]=\"20\"&gt;\n    &lt;p-header&gt;\n        List of Cars\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\"&gt;\n            &lt;p-panel [header]=\"car.vin\" [style]=\"&#123;'text-align':'center'&#125;\"&gt;\n                &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\"&gt;\n                &lt;div class=\"car-detail\"&gt;{{car.year}} - {{car.color}}&lt;/div&gt;\n                &lt;hr class=\"ui-widget-content\" style=\"border-top:0\"&gt;\n                &lt;i class=\"fa fa-search\" (click)=\"selectCar(car)\" style=\"cursor:pointer\"&gt;&lt;/i&gt;\n            &lt;/p-panel&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataGrid&gt;\n\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"225\" (onAfterHide)=\"onDialogHide()\"&gt;\n    &lt;div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\" style=\"font-size:16px;text-align:center;padding:20px\"&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-12\" style=\"text-align:center\"&gt;&lt;img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\"&gt;&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;Vin: &lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.vin}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;Year: &lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.year}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;Brand: &lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.brand}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;Color: &lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.color}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataGridDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    selectedCar: Car;\n    \n    displayDialog: boolean;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\n    &#125;\n    \n    selectCar(car: Car) &#123;\n        this.selectedCar = car;\n        this.displayDialog = true;\n    &#125;\n    \n    onDialogHide() &#123;\n        this.selectedCar = null;\n    &#125;\n&#125;\n</code>\n</pre>\n\n\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datagrid/datagriddemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridDemoModule", function() { return DataGridDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datagriddemo__ = __webpack_require__("../../../../../src/app/showcase/components/datagrid/datagriddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datagriddemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/datagrid/datagriddemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_datagrid_datagrid__ = __webpack_require__("../../../../../src/app/components/datagrid/datagrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_panel_panel__ = __webpack_require__("../../../../../src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DataGridDemoModule = (function () {
    function DataGridDemoModule() {
    }
    return DataGridDemoModule;
}());
DataGridDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__datagriddemo_routing_module__["a" /* DataGridDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_datagrid_datagrid__["a" /* DataGridModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_panel_panel__["a" /* PanelModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_dialog_dialog__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__datagriddemo__["a" /* DataGridDemo */]
        ]
    })
], DataGridDemoModule);

//# sourceMappingURL=datagriddemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datagrid/datagriddemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataGridDemo; });
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


var DataGridDemo = (function () {
    function DataGridDemo(carService) {
        this.carService = carService;
    }
    DataGridDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsLarge().then(function (cars) { return _this.cars = cars; });
    };
    DataGridDemo.prototype.selectCar = function (car) {
        this.selectedCar = car;
        this.displayDialog = true;
    };
    DataGridDemo.prototype.onDialogHide = function () {
        this.selectedCar = null;
    };
    return DataGridDemo;
}());
DataGridDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datagrid/datagriddemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataGridDemo);

var _a;
//# sourceMappingURL=datagriddemo.js.map

/***/ })

});
//# sourceMappingURL=datagriddemo.module.chunk.js.map