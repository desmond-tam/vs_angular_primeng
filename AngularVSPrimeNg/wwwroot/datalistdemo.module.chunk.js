webpackJsonp(["datalistdemo.module"],{

/***/ "../../../../../src/app/components/datalist/datalist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginator_paginator__ = __webpack_require__("../../../../../src/app/components/paginator/paginator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataList = (function () {
    function DataList(el, differs) {
        this.el = el;
        this.differs = differs;
        this.pageLinks = 5;
        this.onLazyLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.paginatorPosition = 'bottom';
        this.emptyMessage = 'No records found';
        this.alwaysShowPaginator = true;
        this.trackBy = function (index, item) { return item; };
        this.immutable = true;
        this.onPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.first = 0;
        this.page = 0;
        this.differ = differs.find([]).create(null);
    }
    DataList.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    DataList.prototype.ngAfterViewInit = function () {
        if (this.lazy) {
            this.onLazyLoad.emit({
                first: this.first,
                rows: this.rows
            });
        }
    };
    Object.defineProperty(DataList.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.immutable) {
                this.handleDataChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DataList.prototype.handleDataChange = function () {
        if (this.paginator) {
            this.updatePaginator();
        }
        this.updateDataToRender(this.value);
    };
    DataList.prototype.ngDoCheck = function () {
        if (!this.immutable) {
            var changes = this.differ.diff(this.value);
            if (changes) {
                this.handleDataChange();
            }
        }
    };
    DataList.prototype.updatePaginator = function () {
        //total records
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
        //first
        if (this.totalRecords && this.first >= this.totalRecords) {
            var numberOfPages = Math.ceil(this.totalRecords / this.rows);
            this.first = Math.max((numberOfPages - 1) * this.rows, 0);
        }
    };
    DataList.prototype.paginate = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.updateDataToRender(this.value);
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    };
    DataList.prototype.updateDataToRender = function (datasource) {
        if (this.paginator && datasource) {
            this.dataToRender = [];
            var startIndex = this.lazy ? 0 : this.first;
            for (var i = startIndex; i < (startIndex + this.rows); i++) {
                if (i >= datasource.length) {
                    break;
                }
                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
    };
    DataList.prototype.isEmpty = function () {
        return !this.dataToRender || (this.dataToRender.length == 0);
    };
    DataList.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.rows
        };
    };
    DataList.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    return DataList;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], DataList.prototype, "paginator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], DataList.prototype, "rows", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], DataList.prototype, "totalRecords", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], DataList.prototype, "pageLinks", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], DataList.prototype, "rowsPerPageOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], DataList.prototype, "lazy", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], DataList.prototype, "onLazyLoad", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DataList.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DataList.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DataList.prototype, "paginatorPosition", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DataList.prototype, "emptyMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], DataList.prototype, "alwaysShowPaginator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DataList.prototype, "trackBy", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], DataList.prototype, "immutable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], DataList.prototype, "scrollable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DataList.prototype, "scrollHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], DataList.prototype, "onPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["d" /* Header */]),
    __metadata("design:type", Object)
], DataList.prototype, "header", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["b" /* Footer */]),
    __metadata("design:type", Object)
], DataList.prototype, "footer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["f" /* PrimeTemplate */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _c || Object)
], DataList.prototype, "templates", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DataList.prototype, "value", null);
DataList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-dataList',
        template: "\n        <div [ngClass]=\"{'ui-datalist ui-widget': true, 'ui-datalist-scrollable': scrollable}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-datalist-header ui-widget-header ui-corner-top\" *ngIf=\"header\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n            (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-bottom\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator  && paginatorPosition!='bottom' || paginatorPosition =='both'\"></p-paginator>\n            <div class=\"ui-datalist-content ui-widget-content\" [ngStyle]=\"{'max-height': scrollHeight}\">\n                <div *ngIf=\"isEmpty()\" class=\"ui-datalist-emptymessage\">{{emptyMessage}}</div>\n                <ul class=\"ui-datalist-data\">\n                    <li *ngFor=\"let item of dataToRender;let i = index;trackBy: trackBy\">\n                        <ng-template [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\" [index]=\"i\"></ng-template>\n                    </li>\n                </ul>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n            (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-bottom\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator  && paginatorPosition!='top' || paginatorPosition =='both'\"></p-paginator>\n            <div class=\"ui-datalist-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* IterableDiffers */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* IterableDiffers */]) === "function" && _e || Object])
], DataList);

var DataListModule = (function () {
    function DataListModule() {
    }
    return DataListModule;
}());
DataListModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__paginator_paginator__["a" /* PaginatorModule */]],
        exports: [DataList, __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */]],
        declarations: [DataList]
    })
], DataListModule);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=datalist.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datalist/datalistdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataListDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datalistdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datalist/datalistdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataListDemoRoutingModule = (function () {
    function DataListDemoRoutingModule() {
    }
    return DataListDemoRoutingModule;
}());
DataListDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__datalistdemo__["a" /* DataListDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], DataListDemoRoutingModule);

//# sourceMappingURL=datalistdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datalist/datalistdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataList</span>\n        <span>DataList displays data in list layout.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataList [value]=\"cars\" [paginator]=\"true\" [rows]=\"5\">\n        <p-header>\n            List of Cars\n        </p-header>\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-g ui-fluid car-item\">\n                <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\n                </div>\n                <div class=\"ui-g-12 ui-md-9 car-details\">\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\n                        \n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\n                        \n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\n                        \n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </p-dataList>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DataListModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>DataList requires a collection of items as its value and a ng-template content to display\n                where each item can be accessed using the implicit variable.</p>\n                \n            <p>Throughout the samples, a car interface having vin, brand, year and color properties are \n                used to define an object to be displayed by the datalist.  Cars are loaded by a CarService that \n                connects to a server to fetch the cars with a Promise.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport interface Car &#123;\n    vin;\n    year;\n    brand;\n    color;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Injectable&#125; from 'angular2/core';\nimport &#123;Http, Response&#125; from 'angular2/http';\nimport &#123;Car&#125; from '../domain/car';\n    \n@Injectable()\nexport class CarService &#123;\n    \n    constructor(private http: Http) &#123;&#125;\n\n    getCarsLarge() &#123;\n        return this.http.get('/showcase/resources/data/cars-large.json')\n                    .toPromise()\n                    .then(res => &lt;Car[]&gt; res.json().data)\n                    .then(data => &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        \n            <p>Here is a sample DataList that displays a list of cars.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataListDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataList [value]=\"cars\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-dataList&gt;\n</code>\n</pre>\n\n            <p>Index of the row is available at the ng-template.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataList [value]=\"cars\"&gt;\n    &lt;ng-template let-car let-i=\"index\" pTemplate=\"item\"&gt;\n        Car content for {{i}}\n    &lt;/ng-template&gt;\n&lt;/p-dataList&gt;\n</code>\n</pre>\n\n            <h3>Change Detection</h3>\n            <p>DataList either uses setter based checking or ngDoCheck to realize if the underlying data has changed to update the UI. This is configured using the immutable\n                property, when enabled (default) setter based detection is utilized so your data changes such as adding or removing a record \n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change. \n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\n                both methods can be used depending on your preference.\n            </p>\n\n            <h3>Facets</h3>\n            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Header&#125; from 'primeng/primeng';\nimport &#123;Footer&#125; from 'primeng/primeng';\n</code>\n</pre>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataList [value]=\"cars\"&gt;\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-dataList&gt;\n</code>\n</pre>\n            \n            <h3>Paginator</h3>\n            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number\n                of page links to display.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataList [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-dataList&gt;\n</code>\n</pre>\n    \n            <h3>Lazy Loading</h3>\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n             onLazyLoad callback everytime paging happens. To implement lazy loading,\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object \n            that contains information about what to load. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator \n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataList [value]=\"cars\" [paginator]=\"true\" [rows]=\"9\" [lazy]=\"true\" (onLazyLoad)=\"loadData($event)\" [totalRecords]=\"totalRecords\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-dataList&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nloadData(event) &#123;\n    //event.first = First row offset\n    //event.rows = Number of rows per page\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of rows to display per page.</td>\n                        </tr>\n                        <tr>\n                            <td>paginator</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified as true, enables the pagination.</td>\n                        </tr>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of total records, defaults to length of value when not defined.</td>\n                        </tr>\n                        <tr>\n                            <td>pageLinks</td>\n                            <td>number</td>\n                            <td>5</td>\n                            <td>Number of page links to display in paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>rowsPerPageOptions</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Array of integer values to display inside rows per page dropdown of paginator</td>\n                        </tr>\n                        <tr>\n                            <td>alwaysShowPaginator</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show it even there is only one page.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorPosition</td>\n                            <td>string</td>\n                            <td>bottom</td>\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\n                        </tr>\n                        <tr>\n                            <td>emptyMessage</td>\n                            <td>string</td>\n                            <td>No records found.</td>\n                            <td>Text to display when there is no data.</td>\n                        </tr>\n                        <tr>\n                            <td>trackBy</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\n                        </tr>\n                        <tr>\n                            <td>immutable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines how the data should be manipulated.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollable</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Whether the content section is scrollable based on scrollHeight.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Maximum height of the viewport in scrollable list.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onLazyLoad</td>\n                            <td>event.first = First row offset <br>\n                                event.rows = Number of rows per page <br></td>\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\n                        </tr>\n                        <tr>\n                            <td>onPage</td>\n                            <td>event.first: Index of first record in page<br>\n                                event.rows: Number of rows on the page</td>\n                            <td>Callback to invoke when pagination occurs.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-datalist</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datalist-header</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datalist-footer</td>\n                            <td>Footer section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datalist-content</td>\n                            <td>Wrapper of item container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datalist-data</td>\n                            <td>Item container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datalist-emptymessage</td>\n                            <td>Element containing the empty message.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datalist\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataList [value]=\"cars\" [paginator]=\"true\" [rows]=\"5\"&gt;\n    &lt;p-header&gt;\n        List of Cars\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g ui-fluid car-item\"&gt;\n            &lt;div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\"&gt;\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-12 ui-md-9 car-details\"&gt;\n                &lt;div class=\"ui-g\"&gt;\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\n                    \n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\n                    \n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\n                    \n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataList&gt;\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataListDemo implements OnInit &#123;\n\n    cars: Car[];\n        \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datalist/datalistdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataListDemoModule", function() { return DataListDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datalistdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datalist/datalistdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datalistdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/datalist/datalistdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_datalist_datalist__ = __webpack_require__("../../../../../src/app/components/datalist/datalist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DataListDemoModule = (function () {
    function DataListDemoModule() {
    }
    return DataListDemoModule;
}());
DataListDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__datalistdemo_routing_module__["a" /* DataListDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_datalist_datalist__["a" /* DataListModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_dialog_dialog__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__datalistdemo__["a" /* DataListDemo */]
        ]
    })
], DataListDemoModule);

//# sourceMappingURL=datalistdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datalist/datalistdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataListDemo; });
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


var DataListDemo = (function () {
    function DataListDemo(carService) {
        this.carService = carService;
    }
    DataListDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsLarge().then(function (cars) { return _this.cars = cars; });
    };
    return DataListDemo;
}());
DataListDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datalist/datalistdemo.html"),
        styles: ["\n        .car-item {\n            padding: 1.5em;\n            border-bottom: 1px solid #d9d9d9;\n        }\n                \n        .ui-g > div {\n            padding: .4em;\n        }\n        \n        .ui-g .ui-g-10 {\n            font-weight: bold;\n        }\n        \n        @media (max-width: 40em) {\n            .car-details {\n                text-align:center;\n            }\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataListDemo);

var _a;
//# sourceMappingURL=datalistdemo.js.map

/***/ })

});
//# sourceMappingURL=datalistdemo.module.chunk.js.map