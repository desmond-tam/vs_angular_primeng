webpackJsonp(["datatabledemo.module"],{

/***/ "../../../../../src/app/showcase/components/datatable/datatablecmdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">ContextMenu</span></span>\n        <span>DataTable has exclusive integration with ContextMenu.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n\n    <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" [contextMenu]=\"cm\">\n        <p-header>Right Click on Rows for ContextMenu</p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n    \n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablecmdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecmdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableCMDemo implements OnInit &#123;\n\n    msgs: Message[];\n\n    cars: Car[];\n\n    selectedCar: Car;\n    \n    items: MenuItem[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n        \n        this.items = [\n            &#123;label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar)&#125;,\n            &#123;label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar)&#125;\n        ];\n    &#125;\n\n    viewCar(car: Car) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand&#125;);\n    &#125;\n\n    deleteCar(car: Car) &#123;\n        let index = -1;\n        for(let i = 0; i < this.cars.length; i++) &#123;\n            if(this.cars[i].vin == car.vin) &#123;\n                index = i;\n                break;\n            &#125;\n        &#125;\n        this.cars.splice(index, 1);\n        \n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand&#125;);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablecmdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecmdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\n    &lt;p-header&gt;Right Click on Rows for ContextMenu&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecmdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableCMDemo; });
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


var DataTableCMDemo = (function () {
    function DataTableCMDemo(carService) {
        this.carService = carService;
    }
    DataTableCMDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewCar(_this.selectedCar); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteCar(_this.selectedCar); } }
        ];
    };
    DataTableCMDemo.prototype.viewCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
    };
    DataTableCMDemo.prototype.deleteCar = function (car) {
        var index = -1;
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin == car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
    };
    return DataTableCMDemo;
}());
DataTableCMDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecmdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableCMDemo);

var _a;
//# sourceMappingURL=datatablecmdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecolgroupdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - Column Grouping</span>\n        <span>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components that both define an array\n            of columns each having colspan and rowspan.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"sales\">\n        <p-headerColumnGroup>\n            <p-row>\n                <p-column header=\"Brand\" rowspan=\"3\"></p-column>\n                <p-column header=\"Sale Rate\" colspan=\"4\"></p-column>\n            </p-row>\n            <p-row>\n                <p-column header=\"Sales\" colspan=\"2\"></p-column>\n                <p-column header=\"Profits\" colspan=\"2\"></p-column>\n            </p-row>\n            <p-row>\n                <p-column header=\"Last Year\"></p-column>\n                <p-column header=\"This Year\"></p-column>\n                <p-column header=\"Last Year\"></p-column>\n                <p-column header=\"This Year\"></p-column>\n            </p-row>\n        </p-headerColumnGroup>\n        \n        <p-column field=\"brand\"></p-column>\n        <p-column field=\"lastYearSale\"></p-column>\n        <p-column field=\"thisYearSale\"></p-column>\n        <p-column field=\"lastYearProfit\"></p-column>\n        <p-column field=\"thisYearProfit\"></p-column>\n        \n        <p-footerColumnGroup>\n            <p-row>\n                <p-column footer=\"Totals:\" colspan=\"3\"></p-column>\n                <p-column footer=\"$506,202\"></p-column>\n                <p-column footer=\"$531,020\"></p-column>\n            </p-row>\n        </p-footerColumnGroup>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablecolgroupdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableGroupDemo implements OnInit &#123;\n\n    sales: any[];\n\n    ngOnInit() &#123;\n        this.sales = [\n            &#123;brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'&#125;,\n            &#123;brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'&#125;,\n            &#123;brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'&#125;,\n            &#123;brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'&#125;,\n            &#123;brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'&#125;,\n            &#123;brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'&#125;,\n            &#123;brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'&#125;,\n            &#123;brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'&#125;,\n            &#123;brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'&#125;,\n            &#123;brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablecolgroupdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"sales\"&gt;\n    &lt;p-headerColumnGroup&gt;\n        &lt;p-row&gt;\n            &lt;p-column header=\"Brand\" rowspan=\"3\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"Sale Rate\" colspan=\"4\"&gt;&lt;/p-column&gt;\n        &lt;/p-row&gt;\n        &lt;p-row&gt;\n            &lt;p-column header=\"Sales\" colspan=\"2\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"Profits\" colspan=\"2\"&gt;&lt;/p-column&gt;\n        &lt;/p-row&gt;\n        &lt;p-row&gt;\n            &lt;p-column header=\"Last Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"This Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"Last Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"This Year\"&gt;&lt;/p-column&gt;\n        &lt;/p-row&gt;\n    &lt;/p-headerColumnGroup&gt;\n    \n    &lt;p-column field=\"brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"lastYearSale\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"thisYearSale\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"lastYearProfit\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"thisYearProfit\"&gt;&lt;/p-column&gt;\n    \n    &lt;p-footerColumnGroup&gt;\n        &lt;p-row&gt;\n            &lt;p-column footer=\"Totals:\" colspan=\"3\"&gt;&lt;/p-column&gt;\n            &lt;p-column footer=\"$506,202\"&gt;&lt;/p-column&gt;\n            &lt;p-column footer=\"$531,020\"&gt;&lt;/p-column&gt;\n        &lt;/p-row&gt;\n    &lt;/p-footerColumnGroup&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecolgroupdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableColGroupDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataTableColGroupDemo = (function () {
    function DataTableColGroupDemo() {
    }
    DataTableColGroupDemo.prototype.ngOnInit = function () {
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
    };
    return DataTableColGroupDemo;
}());
DataTableColGroupDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolgroupdemo.html")
    })
], DataTableColGroupDemo);

//# sourceMappingURL=datatablecolgroupdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecolreorderdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable</span>\n        <span>Columns can be reordered using drag drop by setting the reorderableColumns to true. onColReorder is a callback that is invoked when a column is reordered.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars\" reorderableColumns=\"true\">\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablecolreorderdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolreorderdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableColReorderDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablecolreorderdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolreorderdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" reorderableColumns=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecolreorderdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableColReorderDemo; });
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


var DataTableColReorderDemo = (function () {
    function DataTableColReorderDemo(carService) {
        this.carService = carService;
    }
    DataTableColReorderDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    return DataTableColReorderDemo;
}());
DataTableColReorderDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolreorderdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableColReorderDemo);

var _a;
//# sourceMappingURL=datatablecolreorderdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecolresizedemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable</span>\n        <span>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and \n        the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width. onColumnResize\n        is a callback that passes the resized column header as a parameter.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Fit Mode</h3>\n    <p-dataTable [value]=\"cars\" resizableColumns=\"true\">\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n\n    <h3>Expand Mode</h3>\n    <p-dataTable [value]=\"cars\" resizableColumns=\"true\" columnResizeMode=\"expand\">\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablecolresizedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolresizedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableColResizeDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablecolresizedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolresizedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Fit Mode&lt;/h3&gt;\n&lt;p-dataTable [value]=\"cars\" resizableColumns=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;h3&gt;Expand Mode&lt;/h3&gt;\n&lt;p-dataTable [value]=\"cars\" resizableColumns=\"true\" columnResizeMode=\"expand\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecolresizedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableColResizeDemo; });
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


var DataTableColResizeDemo = (function () {
    function DataTableColResizeDemo(carService) {
        this.carService = carService;
    }
    DataTableColResizeDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    return DataTableColResizeDemo;
}());
DataTableColResizeDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolresizedemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableColResizeDemo);

var _a;
//# sourceMappingURL=datatablecolresizedemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecoltogglerdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Column Toggler</span></span>\n        <span>This demo uses a multiselect component to implement toggleable columns.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars\">\n        <p-header>\n            <div style=\"text-align:left\">\n                <p-multiSelect [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\n            </div>\n        </p-header>\n        <p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablecoltogglerdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecoltogglerdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableColTogglerDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    cols: any[];\n    \n    columnOptions: SelectItem[];\n        \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n        \n        this.cols = [\n            &#123;field: 'vin', header: 'Vin'&#125;,\n            &#123;field: 'year', header: 'Year'&#125;,\n            &#123;field: 'brand', header: 'Brand'&#125;,\n            &#123;field: 'color', header: 'Color'&#125;\n        ];\n        \n        this.columnOptions = [];\n        for(let i = 0; i < this.cols.length; i++) &#123;\n            this.columnOptions.push(&#123;label: this.cols[i].header, value: this.cols[i]&#125;);\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablecoltogglerdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecoltogglerdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\"&gt;\n    &lt;p-header&gt;\n        &lt;div style=\"text-align:left\"&gt;\n            &lt;p-multiSelect [options]=\"columnOptions\" [(ngModel)]=\"cols\"&gt;&lt;/p-multiSelect&gt;\n        &lt;/div&gt;\n    &lt;/p-header&gt;\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecoltogglerdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableColTogglerDemo; });
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


var DataTableColTogglerDemo = (function () {
    function DataTableColTogglerDemo(carService) {
        this.carService = carService;
    }
    DataTableColTogglerDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    };
    return DataTableColTogglerDemo;
}());
DataTableColTogglerDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecoltogglerdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableColTogglerDemo);

var _a;
//# sourceMappingURL=datatablecoltogglerdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecruddemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable</span>\n        <span>This samples demonstrates a CRUD implementation using various PrimeNG components.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\" [responsive]=\"true\">\n        <p-header>CRUD for Cars</p-header>\n        <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n        <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n        <p-footer><div class=\"ui-helper-clearfix\" style=\"width:100%\"><button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\" label=\"Add\"></button></div></p-footer>\n    </p-dataTable>\n\n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n        <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"car\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"vin\">Vin</label></div>\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" /></div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"year\">Year</label></div>\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"year\" [(ngModel)]=\"car.year\" /></div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"brand\">Brand</label></div>\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" /></div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"color\">Color</label></div>\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"color\" [(ngModel)]=\"car.color\" /></div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\n                <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablecruddemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecruddemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableCrudDemo implements OnInit &#123;\n\n    displayDialog: boolean;\n\n    car: Car = new PrimeCar();\n    \n    selectedCar: Car;\n    \n    newCar: boolean;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n    \n    showDialogToAdd() &#123;\n        this.newCar = true;\n        this.car = new PrimeCar();\n        this.displayDialog = true;\n    &#125;\n    \n    save() &#123;\n        let cars = [...this.cars];\n        if(this.newCar)\n            cars.push(this.car);\n        else\n            cars[this.findSelectedCarIndex()] = this.car;\n        \n        this.cars = cars;\n        this.car = null;\n        this.displayDialog = false;\n    &#125;\n    \n    delete() &#123;\n        let index = this.findSelectedCarIndex();\n        this.cars = this.cars.filter((val,i) => i!=index);\n        this.car = null;\n        this.displayDialog = false;\n    &#125;    \n    \n    onRowSelect(event) &#123;\n        this.newCar = false;\n        this.car = this.cloneCar(event.data);\n        this.displayDialog = true;\n    &#125;\n    \n    cloneCar(c: Car): Car &#123;\n        let car = new PrimeCar();\n        for(let prop in c) &#123;\n            car[prop] = c[prop];\n        &#125;\n        return car;\n    &#125;\n    \n    findSelectedCarIndex(): number &#123;\n        return this.cars.indexOf(this.selectedCar);\n    &#125;\n&#125;\n\nclass PrimeCar implements Car &#123;\n    \n    constructor(public vin?, public year?, public brand?, public color?) &#123;&#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablecruddemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecruddemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\" [responsive]=\"true\"&gt;\n    &lt;p-header&gt;CRUD for Cars&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-footer&gt;&lt;div class=\"ui-helper-clearfix\" style=\"width:100%\"&gt;&lt;button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\" label=\"Add\"&gt;&lt;/button&gt;&lt;/div&gt;&lt;/p-footer&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"&gt;\n    &lt;div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"car\"&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"vin\"&gt;Vin&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" /&gt;&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"year\"&gt;Year&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"year\" [(ngModel)]=\"car.year\" /&gt;&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"brand\"&gt;Brand&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" /&gt;&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"color\"&gt;Color&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"color\" [(ngModel)]=\"car.color\" /&gt;&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;p-footer&gt;\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablecruddemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableCrudDemo; });
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


var DataTableCrudDemo = (function () {
    function DataTableCrudDemo(carService) {
        this.carService = carService;
        this.car = new PrimeCar();
    }
    DataTableCrudDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableCrudDemo.prototype.showDialogToAdd = function () {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    };
    DataTableCrudDemo.prototype.save = function () {
        var cars = this.cars.slice();
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    };
    DataTableCrudDemo.prototype.delete = function () {
        var index = this.findSelectedCarIndex();
        this.cars = this.cars.filter(function (val, i) { return i != index; });
        this.car = null;
        this.displayDialog = false;
    };
    DataTableCrudDemo.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    DataTableCrudDemo.prototype.cloneCar = function (c) {
        var car = new PrimeCar();
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    DataTableCrudDemo.prototype.findSelectedCarIndex = function () {
        return this.cars.indexOf(this.selectedCar);
    };
    return DataTableCrudDemo;
}());
DataTableCrudDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecruddemo.html"),
        styles: ["\n        .ui-grid-row div {\n          padding: 4px 10px\n        }\n        \n        .ui-grid-row div label {\n          font-weight: bold;\n        }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableCrudDemo);

var PrimeCar = (function () {
    function PrimeCar(vin, year, brand, color) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
    return PrimeCar;
}());
var _a;
//# sourceMappingURL=datatablecruddemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatabledemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatatableDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatablecmdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecmdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatablecolreorderdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolreorderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datatablecolresizedemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolresizedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatablecoltogglerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecoltogglerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datatablecruddemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecruddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datatableeditabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableeditabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datatableexportdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableexportdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__datatablefacetsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablefacetsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__datatablefilterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablefilterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datatablecolgroupdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datatablerowgroupdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablerowgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datatablelazydemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablelazydemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__datatablepaginatordemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablepaginatordemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__datatableresponsivedemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableresponsivedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__datatablerowexpansiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablerowexpansiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__datatablescrolldemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablescrolldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__datatableselectiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableselectiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__datatablesortdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablesortdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__datatabletemplatingdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatabletemplatingdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var DatatableDemoRoutingModule = (function () {
    function DatatableDemoRoutingModule() {
    }
    return DatatableDemoRoutingModule;
}());
DatatableDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__datatabledemo__["a" /* DataTableDemo */] },
                { path: 'facets', component: __WEBPACK_IMPORTED_MODULE_10__datatablefacetsdemo__["a" /* DataTableFacetsDemo */] },
                { path: 'paginator', component: __WEBPACK_IMPORTED_MODULE_15__datatablepaginatordemo__["a" /* DataTablePaginatorDemo */] },
                { path: 'sort', component: __WEBPACK_IMPORTED_MODULE_20__datatablesortdemo__["a" /* DataTableSortDemo */] },
                { path: 'responsive', component: __WEBPACK_IMPORTED_MODULE_16__datatableresponsivedemo__["a" /* DataTableResponsiveDemo */] },
                { path: 'selection', component: __WEBPACK_IMPORTED_MODULE_19__datatableselectiondemo__["a" /* DataTableSelectionDemo */] },
                { path: 'filter', component: __WEBPACK_IMPORTED_MODULE_11__datatablefilterdemo__["a" /* DataTableFilterDemo */] },
                { path: 'editable', component: __WEBPACK_IMPORTED_MODULE_8__datatableeditabledemo__["a" /* DataTableEditableDemo */] },
                { path: 'colresize', component: __WEBPACK_IMPORTED_MODULE_5__datatablecolresizedemo__["a" /* DataTableColResizeDemo */] },
                { path: 'colreorder', component: __WEBPACK_IMPORTED_MODULE_4__datatablecolreorderdemo__["a" /* DataTableColReorderDemo */] },
                { path: 'scroll', component: __WEBPACK_IMPORTED_MODULE_18__datatablescrolldemo__["a" /* DataTableScrollDemo */] },
                { path: 'colgroup', component: __WEBPACK_IMPORTED_MODULE_12__datatablecolgroupdemo__["a" /* DataTableColGroupDemo */] },
                { path: 'rowgroup', component: __WEBPACK_IMPORTED_MODULE_13__datatablerowgroupdemo__["a" /* DataTableRowGroupDemo */] },
                { path: 'lazy', component: __WEBPACK_IMPORTED_MODULE_14__datatablelazydemo__["a" /* DataTableLazyDemo */] },
                { path: 'crud', component: __WEBPACK_IMPORTED_MODULE_7__datatablecruddemo__["a" /* DataTableCrudDemo */] },
                { path: 'templating', component: __WEBPACK_IMPORTED_MODULE_21__datatabletemplatingdemo__["a" /* DataTableTemplatingDemo */] },
                { path: 'contextmenu', component: __WEBPACK_IMPORTED_MODULE_3__datatablecmdemo__["a" /* DataTableCMDemo */] },
                { path: 'coltoggler', component: __WEBPACK_IMPORTED_MODULE_6__datatablecoltogglerdemo__["a" /* DataTableColTogglerDemo */] },
                { path: 'rowexpansion', component: __WEBPACK_IMPORTED_MODULE_17__datatablerowexpansiondemo__["a" /* DataTableRowExpansionDemo */] },
                { path: 'export', component: __WEBPACK_IMPORTED_MODULE_9__datatableexportdemo__["a" /* DataTableExportDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], DatatableDemoRoutingModule);

//# sourceMappingURL=datatabledemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatabledemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable</span>\n        <span>DataTable displays data in tabular format.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-dataTable [value]=\"cars\" [loading]=\"loading\">\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n    \n    <h3>Dynamic Columns</h3>\n    <p-dataTable [value]=\"cars\" [loading]=\"loading\">\n        <p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DataTableModule,SharedModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>DataTable requires a value as an array of objects and columns defined with p-column component. Throughout the samples, a car interface having\n            vin, brand, year and color properties is used to define an object to be displayed by the datatable. Cars are loaded by a CarService that\n            connects to a server to fetch the cars with a Promise.\n            </p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport interface Car &#123;\n    vin;\n    year;\n    brand;\n    color;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Injectable&#125; from 'angular2/core';\nimport &#123;Http, Response&#125; from 'angular2/http';\nimport &#123;Car&#125; from '../domain/car';\n    \n@Injectable()\nexport class CarService &#123;\n    \n    constructor(private http: Http) &#123;&#125;\n\n    getCarsSmall() &#123;\n        return this.http.get('/showcase/resources/data/cars-small.json')\n                    .toPromise()\n                    .then(res => &lt;Car[]&gt; res.json().data)\n                    .then(data => &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n            <p>Following sample datatable has 4 columns and retrieves the data from a service on init.</p>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n        <p>List of cars are bound to the value property and columns are defined using p-column component.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <h3>Column Component</h3>\n            <p>Column component defines various options to specify corresponding features.</p>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>field</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Property of a row data.</td>\n                        </tr>\n                        <tr>\n                            <td>sortField</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Property of a row data used for sorting, defaults to field.</td>\n                        </tr>\n                        <tr>\n                            <td>filterField</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Property of a row data used for filtering, defaults to field.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of a column.</td>\n                        </tr>\n                        <tr>\n                            <td>footer</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Footer text of a column.</td>\n                        </tr>\n                        <tr>\n                            <td>sortable</td>\n                            <td>any</td>\n                            <td>false</td>\n                            <td>Defines if a column is sortable.</td>\n                        </tr>\n                        <tr>\n                            <td>sortFunction</td>\n                            <td>function</td>\n                            <td>null</td>\n                            <td>Sort function for custom sorting.</td>\n                        </tr>\n                        <tr>\n                            <td>editable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if a column is editable.</td>\n                        </tr>\n                        <tr>\n                            <td>filter</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if a column can be filtered.</td>\n                        </tr>\n                        <tr>\n                            <td>filterMatchMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines filterMatchMode; \"startsWith\", \"contains\", \"endsWidth\", \"equals\", \"notEquals\" and \"in\".</td>\n                        </tr>\n                        <tr>\n                            <td>filterType</td>\n                            <td>string</td>\n                            <td>text</td>\n                            <td>Type of the filter input field.</td>\n                        </tr>\n                        <tr>\n                            <td>filterPlaceholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines placeholder of the input fields.</td>\n                        </tr>\n                        <tr>\n                            <td>filterMaxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Specifies the maximum number of characters allowed in the filter element.</td>\n                        </tr>\n                        <tr>\n                            <td>rowspan</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Number of rows to span for grouping.</td>\n                        </tr>\n                        <tr>\n                            <td>colspan</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Number of columns to span for grouping.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>object</td>\n                            <td>null</td>\n                            <td>Inline style of the column.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the column.</td>\n                        </tr>\n                        <tr>\n                            <td>tableStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the table element.</td>\n                        </tr>\n                        <tr>\n                            <td>tableStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the table element.</td>\n                        </tr>\n                        <tr>\n                            <td>hidden</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Controls visiblity of the column.</td>\n                        </tr>\n                        <tr>\n                            <td>expander</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays an icon to toggle row expansion.</td>\n                        </tr>\n                        <tr>\n                            <td>selectionMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines column based selection mode, options are \"single\" and \"multiple\".</td>\n                        </tr>\n                        <tr>\n                            <td>frozen</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the column is fixed in horizontal scrolling or not.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n</code>\n</pre>\n\n            <h3>Dynamic Colums</h3>\n            <p>Columns can be instantiated using an array as well by iterating with ngFor.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n        \n        this.cols = [\n            &#123;field: 'vin', header: 'Vin'&#125;,\n            &#123;field: 'year', header: 'Year'&#125;,\n            &#123;field: 'brand', header: 'Brand'&#125;,\n            &#123;field: 'color', header: 'Color'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\"&gt;\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <h3>Change Detection</h3>\n            <p>DataTable either uses setter based checking or ngDoCheck to realize if the underlying data has changed to update the UI. This is configured using the immutable\n                property, when enabled (default) setter based detection is utilized so your data changes such as adding or removing a record \n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change. \n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\n                both methods can be used depending on your preference. Note that immutable property also defines how DataTable treats the data, for example\n                when immutable is enabled sorting does not mutate the original data but creates a new array of sorted data.\n            </p>\n\n            <h3>Templates</h3>\n            <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating where the implicit variable passed to the ng-template \n                is the column definition and data of current row is the rowData property. In addition index of the current can be accessed using the optional rowIndex variable. \n                Similarly, custom content can be placed at the header and footer of a column with templating.</p>\n            \n            <p>A ng-template inside a column must be decorated with pTemplate directive along with the type to indicate where the ng-template belongs to. Possible values \n            are \"header\", \"body\" and \"footer\".</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-column field=\"color\" header=\"Color\"&gt;\n    &lt;ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\"&gt;\n        &lt;span&gt;{{car[col.field]}}&lt;/span&gt;\n    &lt;/ng-template&gt;\n&lt;/p-column&gt;\n&lt;p-column&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;button type=\"button\" pButton (click)=\"selectAllCars()\" icon=\"fa-check\"&gt;&lt;/button&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-car=\"rowData\" pTemplate=\"body\"&gt;\n        &lt;button type=\"button\" pButton (click)=\"selectCar(car)\" icon=\"fa-search\"&gt;&lt;/button&gt;\n    &lt;/ng-template&gt;\n&lt;/p-column&gt;\n</code>\n</pre>\n\n            <p>Index of the row is available at the ng-template.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n    &lt;p-column&gt;\n        &lt;ng-template let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\"&gt;\n            &lt;button type=\"button\" pButton (click)=\"selectCar(i)\" icon=\"fa-search\"&gt;&lt;/button&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/datatable/templating']\">live example.</a></p>\n\n            <h3>Facets</h3>\n            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Header&#125; from 'primeng/primeng';\nimport &#123;Footer&#125; from 'primeng/primeng';\n</code>\n</pre>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\"&gt;\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/datatable/facets']\">live example.</a></p>\n\n            <h3>Column Grouping</h3>\n            <p>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components containing rows with\n                columns. Templating is also supported inside grouped columns.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"sales\"&gt;\n    &lt;p-headerColumnGroup&gt;\n        &lt;p-row&gt;\n            &lt;p-column header=\"Brand\" rowspan=\"3\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"Sale Rate\" colspan=\"4\"&gt;&lt;/p-column&gt;\n        &lt;/p-row&gt;\n        &lt;p-row&gt;\n            &lt;p-column header=\"Sales\" colspan=\"2\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"Profits\" colspan=\"2\"&gt;&lt;/p-column&gt;\n        &lt;/p-row&gt;\n        &lt;p-row&gt;\n            &lt;p-column header=\"Last Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"This Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"Last Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column header=\"This Year\"&gt;&lt;/p-column&gt;\n        &lt;/p-row&gt;\n    &lt;/p-headerColumnGroup&gt;\n    \n    &lt;p-column field=\"brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"lastYearSale\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"thisYearSale\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"lastYearProfit\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"thisYearProfit\"&gt;&lt;/p-column&gt;\n    \n    &lt;p-footerColumnGroup&gt;\n        &lt;p-row&gt;\n            &lt;p-column footer=\"Totals:\" colspan=\"3\"&gt;&lt;/p-column&gt;\n            &lt;p-column footer=\"$506,202\"&gt;&lt;/p-column&gt;\n            &lt;p-column footer=\"$531,020\"&gt;&lt;/p-column&gt;\n        &lt;/p-row&gt;\n    &lt;/p-footerColumnGroup&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/datatable/colgroup']\">live example.</a></p>\n            \n            <h3>Row Grouping</h3>\n            <p>Rows can either be grouped by a separate grouping row or using rowspan. In both cases, data has to be sorted by the grouping field initially.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars1\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\"&gt;\n    &lt;p-header&gt;Subheader&lt;/p-header&gt;\n    &lt;ng-template pTemplate=\"rowgroupheader\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dataTable [value]=\"cars2\" sortField=\"brand\" rowGroupMode=\"rowspan\"&gt;\n    &lt;p-header&gt;RowSpan&lt;/p-header&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>Visibility of a group can be toggled using an icon placed next to the group name using expandableRowGroups property.\n            By default all groups are collapsed and expandadRowGroups property needs to be populated with the group field values\n            to show particular groups as expanded by default.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" expandableRowGroups=\"true\"&gt;\n    &lt;p-header&gt;Subheader&lt;/p-header&gt;\n    &lt;ng-template pTemplate=\"rowgroup\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>       \n\n            <p>A footer for a row can be defined using the rowgroupfooter ng-template.</p> \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" expandableRowGroups=\"true\"\n        [sortableRowGroup]=\"false\"&gt;\n    &lt;p-header&gt;Toggleable Row Groups with Footers&lt;/p-header&gt;\n    &lt;ng-template pTemplate=\"rowgroupheader\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"price\" header=\"Price\"&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;span&gt;&#123;&#123;car[col.field] | currency:'USD':true:'.0-0'&#125;&#125;&lt;/span&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;ng-template pTemplate=\"rowgroupfooter\" let-car&gt;\n        &lt;td colspan=\"3\" style=\"text-align:right\"&gt;Total Price&lt;/td&gt;\n        &lt;td&gt;&#123;&#123;calculateGroupTotal(car['brand']) | currency:'USD':true:'.0-0' &#125;&#125;&lt;/td&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>    \n\n            <p>Clicking a row group sorts the data according to the group field, you can control this behavior using sortableRowGroup property.</p> \n    \n            <p>See the <a [routerLink]=\"['/datatable/rowgroup']\">live example.</a></p>\n\n            <h3>Paginator</h3>\n            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number\n                of page links to display. See <a [routerLink]=\"['/paginator']\">paginator</a> component for more information.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>Paginator can also be controlled via model using a binding to the first property where changes trigger a pagination. Optionaly this property supports \n            two-way binding so that model value can be updated on pagination as well. Here is an example to reset the paginator externally.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [(first)]=\"first\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;button type=\"button\" (click)=\"reset()\" label=\"Reset\"&gt;&lt;/button&gt;\n</code>\n</pre>   \n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    first: number = 0;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n    \n    reset() &#123;\n        this.first = 0;\n    &#125;\n&#125;\n</code>\n</pre> \n            \n            \n            <p>See the <a [routerLink]=\"['/datatable/paginator']\">live example.</a></p>\n\n            <h3>Sorting</h3>\n            <p>Simply enabling sortable property at column object is enough to make a column sortable. The property to use when \n            sorting is field by default and this can be customized using sortField.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\n</code>\n</pre>\n            <p>By default sorting is executed on the clicked column. To do multiple field sorting, set sortMode property to \"multiple\" and use metakey \n            when clicking on another column.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [sortMode]=\"multiple\"&gt;\n</code>\n</pre>\n\n            <p>In case you'd like to display the table as sorted by default initially on load, use the sortField-sortOrder properties in single mode.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" sortField=\"year\" [sortOrder]=\"1\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            <p>In multiple mode, use the multiSortMeta property and bind an array of SortMeta objects.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [multiSortMeta]=\"multiSortMeta\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nthis.multiSortMeta = [];\nthis.multiSortMeta.push(&#123;field: 'year', order: 1&#125;);\nthis.multiSortMeta.push(&#123;field: 'brand', order: -1&#125;);\n</code>\n</pre>        \n\n            <p>To customize sorting, set sortable option to <i>custom</i> and define a sortFunction that sorts the list.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [multiSortMeta]=\"multiSortMeta\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"custom\" (sortFunction)=\"mysort($event)\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nmysort(event) &#123;\n    //event.field = Field to sort\n    //event.order = Sort order\n&#125;\n</code>\n</pre> \n            \n            <p>See the <a [routerLink]=\"['/datatable/sort']\">live example.</a></p>\n\n            <h3>Filtering</h3>\n            <p>Filtering is enabled by setting the filter property as true on a column. Default match mode is \"startsWith\" and this can be configured\n            using filterMatchMode property that also accepts \"contains\", \"endsWith\", \"equals\" and \"in\".</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-column field=\"vin\" header=\"Vin (startsWith)\" [filter]=\"true\" filterPlaceholder=\"Search\"&gt;&lt;/p-column&gt;\n&lt;p-column field=\"year\" header=\"Year (contains)\" [filter]=\"true\" filterMatchMode=\"contains\"&gt;&lt;/p-column&gt;\n&lt;p-column field=\"brand\" header=\"Brand (startsWith)\" [filter]=\"true\"&gt;&lt;/p-column&gt;\n&lt;p-column field=\"color\" header=\"Color (endsWith)\" [filter]=\"true\" filterMatchMode=\"endsWith\"&gt;&lt;/p-column&gt;\n</code>\n</pre>\n            <p>An optional global filter feature is available to search all fields with the same keyword, to enable this place an input component whose keyup event would be \n            listened for filtering and bind the local ng-template variable name of it to the global filter property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input #gb type=\"text\" placeholder=\"Global search\"&gt;\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [globalFilter]=\"gb\"&gt;\n</code>\n</pre>\n\n            <p>By default, input fields are used as filter elements and this can be customized using templating. It is important to use the on change callback \n                of the filter component to call the filter method of datatable by passing the value, field and matchmode properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-column field=\"brand\" header=\"Brand (Custom)\" [filter]=\"true\" [style]=\"&#123;'overflow':'visible'&#125;\" filterMatchMode=\"equals\"&gt;\n    &lt;ng-template pTemplate=\"filter\" let-col&gt;\n        &lt;p-dropdown [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"&gt;&lt;/p-dropdown&gt;\n    &lt;/ng-template&gt;\n&lt;/p-column&gt;\n</code>\n</pre>\n        \n            <p>See the <a [routerLink]=\"['/datatable/filter']\">live example.</a></p>\n\n            <h3>Selection</h3>\n            <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property and onRowSelect-onRowUnselect events\n            are provided as optional callbacks. Alternatively column based selection can be done using radio buttons or checkboxes using selectionMode of a particular column.</p>\n            \n            <p>In single mode, selection binding is an object reference.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    selectedCar: Car;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" dataKey=\"vin\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n        <p>In multiple mode, selection binding should be an array and multiple items can either be selected\n        using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\n        devices metaKeySelection is turned off automatically. Additionally ShiftKey is supported for range selection.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    selectedCars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>If you prefer a radioButton or a checkbox instead of a row click, use the selectionMode of a column instead. Following datatable\n            displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\n    &lt;p-column selectionMode=\"multiple\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>When resolving if a row is selected, by default DataTable compares selection array with the datasource which may cause a performance issue with huge datasets that do not use pagination.\n                If available the fastest way is to use dataKey property that identifies a unique row so that DataTable can avoid comparing arrays as internally a map instance is used instead of looping arrays, on the other hand\n                if dataKey cannot be provided consider using compareSelectionBy property as \"equals\" which uses reference comparison instead of the default \"deepEquals\" comparison. Latter is slower since it checks all properties.\n                </p>\n\n            <p>See the <a [routerLink]=\"['/datatable/selection']\">live example.</a></p>\n\n            <h3>ContextMenu</h3>\n            <p>DataTable has exclusive integration with contextmenu component. In order to attach a menu to a datatable, define a local template\n            variable for the menu and bind it to the contextMenu property of the datatable. This enables showing the menu whenever a row is right clicked.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\n    &lt;p-header&gt;Right Click on Rows for ContextMenu&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/datatable/contextmenu']\">live example.</a></p>\n\n            <h3>Editing</h3>\n            <p>Incell editing is enabled by setting editable property true both on datatable and columns. Clicking a cell switches to edit mode\n            and hitting enter key or clicking another cell switches it back to view mode.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [editable]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>Simple input fields are used as the editor elements by default and this can be customized by adding a pTemplate named editor.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [editable]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [editable]=\"true\" [style]=\"&#123;'overflow':'visible'&#125;\"&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"editor\"&gt;\n            &lt;p-dropdown [(ngModel)]=\"car[col.field]\" [options]=\"brands\" [autoWidth]=\"false\" [style]=\"&#123;'width':'100%'&#125;\" required=\"true\"&gt;&lt;/p-dropdown&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"saleDate\" header=\"Sale Date\" [editable]=\"true\" [style]=\" &#123;'overflow':'visible' &#125;\"&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\n             &#123;&#123;car[col.field]|date &#125;&#125;\n        &lt;/ng-template&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"editor\"&gt;\n            &lt;p-calendar [(ngModel)]=\"car[col.field]\"&gt;&lt;/p-calendar&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/datatable/editable']\">live example.</a></p>\n\n            <h3>Expandable Rows</h3>\n            <p>Row expansion allows displaying detailed content for a particular row. To use this feature, enable expandableRows property, add an expander column and\n            to declare the expanded content provide a pTemplate with \"rowexpansion\" as the value.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" expandableRows=\"true\"&gt;\n    &lt;p-column expander=\"true\" [style]=\"&#123;'width':'22px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;ng-template let-car pTemplate=\"rowexpansion\"&gt;\n        &lt;div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px\"&gt;\n            &lt;div class=\"ui-grid-row\"&gt;\n                &lt;div class=\"ui-grid-col-3\" style=\"text-align:center\"&gt;\n                    &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\"&gt;\n                &lt;/div&gt;\n                &lt;div class=\"ui-grid-col-9\"&gt;\n                    &lt;div class=\"ui-grid ui-grid-responsive ui-grid-pad\"&gt;\n                        &lt;div class=\"ui-grid-row\"&gt;\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Vin: &lt;/div&gt;\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.vin}}&lt;/div&gt;\n                        &lt;/div&gt;\n                        &lt;div class=\"ui-grid-row\"&gt;\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Year: &lt;/div&gt;\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.year}}&lt;/div&gt;\n                        &lt;/div&gt;\n                        &lt;div class=\"ui-grid-row\"&gt;\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Brand: &lt;/div&gt;\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.brand}}&lt;/div&gt;\n                        &lt;/div&gt;\n                        &lt;div class=\"ui-grid-row\"&gt;\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Color: &lt;/div&gt;\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.color}}&lt;/div&gt;\n                        &lt;/div&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            <p>By default all rows are collapsed and expandedRows property needs to be populated \n                with the row data instances to show particular rows as expanded by default.</p>\n            <p>See the <a [routerLink]=\"['/datatable/rowexpansion']\">live example.</a></p>\n\n            <h3>Column Resize</h3>\n            <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and \n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width. onColumnResize\n            is a callback that passes the resized column header as a parameter.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [resizableColumns]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [resizableColumns]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'20%'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'30%'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'15%'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'35%'&#125;\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            \n            <p>See the <a [routerLink]=\"['/datatable/colresize']\">live example.</a></p>\n\n            <h3>Column Reordering</h3>\n            <p>Columns can be reordered using drag drop by setting the reorderableColumns to true. onColReorder is a callback that is invoked when a column is reordered.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [reorderableColumns]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/datatable/colreorder']\">live example.</a></p>\n            \n            <h3>Data Export</h3>\n            <p>DataTable can export its data in CSV format using exportCSV() method.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable #dt [value]=\"cars\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt; \n\n&lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\"&gt;&lt;/button&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/datatable/export']\">live example.</a></p>\n\n            <h3>Scrolling</h3>\n            <p>DataTable supports both horizontal and vertical scrolling by defining scrollWidth and scrollHeight options respectively. The properties can take\n            fixed pixels values or percentages to calculate scroll viewport relative to the parent of the datatable. Sample below uses vertical scrolling where\n            headers are fixed and data is scrollable. In horizontal scrolling, it is important to give fixed widths to columns.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            <p>In horizontal scrolling, certain columns can be fixed as well by enabling the frozen property at column level .</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"100px\" scrollWidth=\"600px\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" frozen=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>In this case, if frozen and scrollable cells have content with varying height, misalignment might occur. To avoid a performance hit, DataTable avoid expensive calculations\n                to align the row heights as it can be easily done with CSS manually.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n.ui-datatable .ui-datatable-frozen-view .ui-datatable-data > tr > td,\n.ui-datatable .ui-datatable-unfrozen-view .ui-datatable-data > tr > td &#123;\n    height: 24px;\n&#125;\n</code>\n</pre>    \n\n            <p>Certain rows can be fixed at the top so that they get frozen and not included in the scrollable data. In order\n            to implement this functionality, define these rows using frozenValue property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n            <p>Additionally, virtualScroll mode enables dealing with large datasets by loading data on demand during scrolling.</p>\n\n            <p>See the <a [routerLink]=\"['/datatable/scroll']\">live example.</a></p>\n            \n            <h3>Lazy Loading</h3>\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n             onLazyLoad callback everytime paging, sorting and filtering happens. To implement lazy loading,\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object \n            that contains information about what to load. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator \n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [scrollable]=\"true\" [lazy]=\"true\" (onLazyLoad)=\"loadData($event)\" [totalRecords]=\"totalRecords\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            \n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nloadData(event: LazyLoadEvent) &#123;\n    //event.first = First row offset\n    //event.rows = Number of rows per page\n    //event.sortField = Field name to sort in single sort mode\n    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode\n    //multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.\n    //filters: Filters object having field as key and filter value, filter matchMode as value\n    //globalFilter: Value of the global filter if available\n    this.cars = //do a request to a remote datasource using a service and return the cars that match the lazy load criteria\n&#125;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/datatable/lazy']\">live example.</a></p>\n\n            <h3>Responsive</h3>\n            <p>DataTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. This feature is enabled\n            by setting responsive to true.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [responsive]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/datatable/responsive']\">live example.</a></p>\n            \n            <h3>EmptyMessage</h3>\n            <p>When there is no data, DataTable displays a message text defined using the emptyMessage property where as custom content can be provided using\n                emptymessage template.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [responsive]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;ng-template pTemplate=\"emptymessage\"&gt;\n        Custom content goes here\n    &lt;/ng-template&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n            \n            <h3>Overlays in Cells</h3>\n            <p>Cells of datatable hides the overflow by default, this prevents overlay of a component like dropdown to be displayed properly. In cases like these, \n            set the style of the column to allow overflow.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-column field=\"color\" [style]=\"&#123;'overflow':'visible'&#125;\"&gt;\n    &lt;ng-template let-col let-car=\"rowData\"&gt;\n        &lt;p-dropdown&gt;&lt;/p-dropdown&gt;\n    &lt;/ng-template&gt;\n&lt;/p-column&gt;\n</code>\n</pre>\n                \n            <h3>Loading Status</h3>\n            <p>DataTable has a loading property, when enabled a spinner icon is displayed to indicate data load. \n                An optional loadingIcon property can be passed in case you'd like a different loading icon. Note that\n                when lazy loading is enabled, DataTable handles loading status itself so there is no need to use\n                the loading property as it is built-in for lazy loading case.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [loading]=\"loading\" loadingIcon=\"fa-spinner\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    loading: boolean;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.loading = true;\n        setTimeout(() => &#123;\n            this.carService.getCarsSmall().then(cars => this.cars = cars);\n            this.loading = false;\n        &#125;, 1000);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Performance Tips Status</h3>\n            <ul>\n                <li>When selection is enabled use dataKey to avoid deep checking when comparing objects.</li>\n                <li>Use rowTrackBy that internally uses ngForTrackBy to avoid unnecessary dom operations.</li>\n                <li>Prefer lazy loading for large datasets.</li>\n            </ul>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                        <tr>\n                            <td>headerRows</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of column definitions for column grouping at header.</td>\n                        </tr>\n                        <tr>\n                            <td>footerRows</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of column definitions for column grouping at footer.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of rows to display per page.</td>\n                        </tr>\n                        <tr>\n                            <td>paginator</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified as true, enables the pagination.</td>\n                        </tr>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of total records, defaults to length of value when not defined.</td>\n                        </tr>\n                        <tr>\n                            <td>pageLinks</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of page links to display in paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>rowsPerPageOptions</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Array of integer values to display inside rows per page dropdown of paginator</td>\n                        </tr>\n                        <tr>\n                            <td>alwaysShowPaginator</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show it even there is only one page.</td>\n                        </tr>\n                        <tr>\n                            <td>sortMode</td>\n                            <td>string</td>\n                            <td>single</td>\n                            <td>Defines whether sorting works on single column or on multiple columns.</td>\n                        </tr>\n                        <tr>\n                            <td>sortField</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the field to sort data by default.</td>\n                        </tr>\n                        <tr>\n                            <td>sortOrder</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Order to sort when default sorting is enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>defaultSortOrder</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Sort order to use when an unsorted column gets sorted by user interaction.</td>\n                        </tr>\n                        <tr>\n                            <td>multiSortMeta</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>\n                        </tr>\n                        <tr>\n                            <td>rowGroupMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Type of the row grouping, valid values are \"subheader\" and \"rowspan\".</td>\n                        </tr>\n                        <tr>\n                            <td>groupField</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the field to group by in subheader row grouping mode.</td>\n                        </tr>\n                        <tr>\n                            <td>sortableRowGroup</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to sort the data if the row group subheader is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>expandableRowGroups</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, adds a clickable icon at group header to expand or collapse the group.</td>\n                        </tr>\n                        <tr>\n                            <td>expandedRowGroups</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Collection of group field values to show a group as expanded by default.</td>\n                        </tr>\n                        <tr>\n                            <td>responsive</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if the columns should be stacked in smaller screens.</td>\n                        </tr>\n                        <tr>\n                            <td>selectionMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Specifies the selection mode, valid values are \"single\" and \"multiple\".</td>\n                        </tr>                        \n                        <tr>\n                            <td>headerCheckboxToggleAllPages</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>\n                                When set to true, the header checkbox on paged DataTables with checkbox multiple \n                                selection enabled will toggle the selection of items across all pages. See the\n                                <a [routerLink]=\"['/datatable/selection']\">live example.</a>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>selection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Selected row in single mode or an array of values in multiple mode.</td>\n                        </tr>\n                        <tr>\n                            <td>editable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Activates incell editing when enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>expandableRows</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Activates expandable rows feature when true.</td>\n                        </tr>\n                        <tr>\n                            <td>expandedRows</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Collection of rows to display as expanded.</td>\n                        </tr>\n                        <tr>\n                            <td>rowExpandMode</td>\n                            <td>string</td>\n                            <td>multiple</td>\n                            <td>Whether multiple rows can be expanded at any time. Valid values are \"multiple\" and \"single\".</td>\n                        </tr>\n                        <tr>\n                            <td>expandedIcon</td>\n                            <td>string</td>\n                            <td>fa-chevron-circle-down</td>\n                            <td>Row toggler icon of an expanded row toggler.</td>\n                        </tr>\n                        <tr>\n                            <td>collapsedIcon</td>\n                            <td>string</td>\n                            <td>fa-chevron-circle-right</td>\n                            <td>Row toggler icon of a collapsed row toggler.</td>\n                        </tr>                        \n                        <tr>\n                            <td>globalFilter</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Reference of an input field to use as a global filter.</td>\n                        </tr>\n                        <tr>\n                            <td>filterDelay</td>\n                            <td>number</td>\n                            <td>300</td>\n                            <td>Delay in milliseconds before filtering the data.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\n                        </tr>\n                        <tr>\n                            <td>resizableColumns</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, columns can be resized using drag and drop.</td>\n                        </tr>\n                        <tr>\n                            <td>columnResizeMode</td>\n                            <td>string</td>\n                            <td>fit</td>\n                            <td>Defines whether the overall table width should change on column resize, valid values are \"fit\" and \"expand\".</td>\n                        </tr>\n                        <tr>\n                            <td>reorderableColumns</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, columns can be reordered using drag and drop.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specifies, enables horizontal and/or vertical scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Height of the scroll viewport.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollWidth</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Width of the scroll viewport.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualScroll</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the data should be loaded on demand during scroll.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualScrollDelay</td>\n                            <td>number</td>\n                            <td>500</td>\n                            <td>Delay in virtual scroll before doing a call to lazy load.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenValue</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>A collection to display as frozen in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>contextMenu</td>\n                            <td>ContextMenu</td>\n                            <td>null</td>\n                            <td>Local ng-template varilable of a ContextMenu.</td>\n                        </tr>\n                        <tr>\n                            <td>csvSeparator</td>\n                            <td>string</td>\n                            <td>,</td>\n                            <td>Character to use as the csv separator.</td>\n                        </tr>\n                        <tr>\n                            <td>exportFilename</td>\n                            <td>string</td>\n                            <td>download</td>\n                            <td>Name of the exported file.</td>\n                        </tr>\n                        <tr>\n                            <td>emptyMessage</td>\n                            <td>string</td>\n                            <td>No records found.</td>\n                            <td>Text to display when there is no data.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorPosition</td>\n                            <td>string</td>\n                            <td>bottom</td>\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\n                        </tr>\n                        <tr>\n                            <td>rowStyleClass</td>\n                            <td>function</td>\n                            <td>null</td>\n                            <td>Function that gets the row data and row index as parameters and returns a style class for the row. This is an alternative to the rowStyleMap approach.</td>\n                        </tr>\n                        <tr>\n                            <td>rowStyleMap</td>\n                            <td>object</td>\n                            <td>null</td>\n                            <td>An object whose keys are dataKeys of a row and values are the corresponding style class of that row. This is an alternative to the rowStyleClass approach.</td>\n                        </tr>\n                        <tr>\n                            <td>rowHover</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Adds hover effect to rows without the need for selectionMode.</td>\n                        </tr>\n                        <tr>\n                            <td>filters</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of FilterMetadata objects to provide external filters.</td>\n                        </tr>\n                        <tr>\n                            <td>metaKeySelection</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a record in data.</td>\n                        </tr>\n                        <tr>\n                            <td>loading</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays a loader to indicate data load is in progress.</td>\n                        </tr>\n                        <tr>\n                            <td>loadingIcon</td>\n                            <td>string</td>\n                            <td>fa-circle-o-notch</td>\n                            <td>The icon to show while indicating data load is in progress.</td>\n                        </tr>\n                        <tr>\n                            <td>rowTrackBy</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\n                        </tr>\n                        <tr>\n                            <td>compareSelectionBy</td>\n                            <td>string</td>\n                            <td>deepEquals</td>\n                            <td>Algorithm to define if a row is selected, valid values are \"equals\" that compares by reference and \"deepEquals\" that compares all fields.</td>\n                        </tr>\n                        <tr>\n                            <td>first</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the first row to be displayed. It supports two-way binding so that model value can be updated on pagination as well.</td>\n                        </tr>\n                        <tr>\n                            <td>immutable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines how the data should be manipulated.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onRowClick</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Selected data </td>\n                            <td>Callback to invoke when a row is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowSelect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Selected data <br >\n                                event.type: Type of selection, valid values are \"row\", \"radiobutton\" and \"checkbox\"\n                            </td>\n                            <td>Callback to invoke when a row is selected.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowUnselect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Unselected data <br >\n                                event.type: Type of unselection, valid values are \"row\" and \"checkbox\"</td>\n                            <td>Callback to invoke when a row is unselected with metakey.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowDblclick</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Selected data </td>\n                            <td>Callback to invoke when a row is selected with double clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onHeaderCheckboxToggle</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.checked: State of the header checkbox</td>\n                            <td>Callback to invoke when state of header checkbox changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onContextMenuSelect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Selected data</td>\n                            <td>Callback to invoke when a row is selected with right click.</td>\n                        </tr>\n                        <tr>\n                            <td>onColResize</td>\n                            <td>event.element: Resized column header <br>\n                                event.delta: Change of width in number of pixels</td>\n                            <td>Callback to invoke when a column is resized.</td>\n                        </tr>\n                        <tr>\n                            <td>onColReorder</td>\n                            <td>event.dragIndex: Index of the dragged column <br>\n                                event.dropIndex: Index of the dropped column <br>\n                                event.columns: Columns array after reorder. <br></td>\n                            <td>Callback to invoke when a column is reordered.</td>\n                        </tr>\n                        <tr>\n                            <td>onLazyLoad</td>\n                            <td>event.first = First row offset <br>\n                                event.rows = Number of rows per page <br>\n                                event.sortField = Field name to sort with <br>\n                                event.sortOrder = Sort order as number, 1 for asc and -1 for dec <br>\n                                filters: FilterMetadata object having field as key and filter value, filter matchMode as value</td>\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditInit</td>\n                            <td>event.column: Column object of the cell<br>\n                                event.data: Row data</td>\n                            <td>Callback to invoke when a cell switches to edit mode.</td>\n                        </tr>\n                        <tr>\n                            <td>onEdit</td>\n                            <td>event.originalEvent: Browser event\n                                event.column: Column object of the cell<br>\n                                event.data: Row data <br />\n                                event.index: Row index</td>\n                            <td>Callback to invoke when cell data is being edited.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditComplete</td>\n                            <td>event.column: Column object of the cell<br>\n                                event.data: Row data <br />\n                                event.index: Row index</td>\n                            <td>Callback to invoke when cell edit is completed.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditCancel</td>\n                            <td>event.column: Column object of the cell<br>\n                                event.data: Row data <br />\n                                event.index: Row index</td>\n                            <td>Callback to invoke when cell edit is cancelled with escape key.</td>\n                        </tr>\n                        <tr>\n                            <td>onPage</td>\n                            <td>event.first: Index of first record in page<br>\n                                event.rows: Number of rows on the page</td>\n                            <td>Callback to invoke when pagination occurs.</td>\n                        </tr>\n                        <tr>\n                            <td>onSort</td>\n                            <td>event.field: Field name of the sorted column<br>\n                                event.order: Sort order as 1 or -1<br>\n                                event.multisortmeta: Sort metadata in multi sort mode. See multiple sorting section for the structure of this object.</td>\n                            <td>Callback to invoke when a column gets sorted.</td>\n                        </tr>\n                        <tr>\n                            <td>onFilter</td>\n                            <td>event.filters: Filters object having a field as the property key and an object with value, matchMode as the property value.<br>\n                                event.filteredValue: Filtered data after running the filtering.</td>\n                            <td>Callback to invoke when data is filtered.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowExpand</td>\n                            <td>event.originalEvent: Browser event<br>\n                                data: Row data to expand.</td>\n                            <td>Callback to invoke when a row is expanded.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowCollapse</td>\n                            <td>event.originalEvent: Browser event<br>\n                                data: Row data to collapse.</td>\n                            <td>Callback to invoke when a row is collapsed.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowGroupExpand</td>\n                            <td>event.originalEvent: Browser event<br>\n                                group: Value of the group.</td>\n                            <td>Callback to invoke when a row group is expanded.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowGroupCollapse</td>\n                            <td>event.originalEvent: Browser event<br>\n                                group: Value of the group.</td>\n                            <td>Callback to invoke when a row group is collapsed.</td>\n                        </tr>\n                        <tr>\n                            <td>onValueChange</td>\n                            <td>value: New value.</td>\n                            <td>Callback to invoke when value of table is updated.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"handleRowSelect($event)\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nhandleRowSelect(event) &#123;\n    //event.data = Selected row data\n&#125;\n</code>\n</pre>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>reset</td>\n                            <td>-</td>\n                            <td>Resets sort, filter and paginator state.</td>\n                        </tr>\n                        <tr>\n                            <td>exportCSV</td>\n                            <td>-</td>\n                            <td>Exports the data in csv format.</td>\n                        </tr>\n                        <tr>\n                            <td>toggleRow</td>\n                            <td>data</td>\n                            <td>Toggles row expansion for given row data.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n<pre>\n<code #dt class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable #dt [value]=\"cars\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;button type=\"button\" pButton (click)=\"update(dt)\" label=\"Reset\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nupdate(dt: DataTable) &#123;\n    dt.reset();\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-datatable</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datatable-header</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datatable-footer</td>\n                            <td>Footer section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-column-title</td>\n                            <td>Title of a column.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sortable-column</td>\n                            <td>Sortable column header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-column-filter</td>\n                            <td>Filter element in header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-cell-data</td>\n                            <td>Data cell in body.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-cell-editor</td>\n                            <td>Input element for incell editing.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datatable-scrollable-header</td>\n                            <td>Container of header in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datatable-scrollable-body</td>\n                            <td>Container of body in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datatable-scrollable-footer</td>\n                            <td>Container of footer in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datatable-responsive</td>\n                            <td>Container element of a responsive datatable.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datatable-emptymessage</td>\n                            <td>Cell containing the empty message.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-dataTable [value]=\"cars\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;h3&gt;Dynamic Columns&lt;/h3&gt;\n&lt;p-dataTable [value]=\"cars\"&gt;\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    cols: any[];\n    \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n        \n        this.cols = [\n            &#123;field: 'vin', header: 'Vin'&#125;,\n            &#123;field: 'year', header: 'Year'&#125;,\n            &#123;field: 'brand', header: 'Brand'&#125;,\n            &#123;field: 'color', header: 'Color'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatabledemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDemoModule", function() { return DataTableDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatablecmdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecmdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datatablecolreorderdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolreorderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatablecolresizedemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolresizedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datatablecoltogglerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecoltogglerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datatablecruddemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecruddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datatableeditabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableeditabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__datatableexportdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableexportdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__datatablefacetsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablefacetsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datatablefilterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablefilterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datatablecolgroupdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablecolgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datatablerowgroupdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablerowgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__datatablelazydemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablelazydemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__datatablepaginatordemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablepaginatordemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__datatableresponsivedemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableresponsivedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__datatablerowexpansiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablerowexpansiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__datatablescrolldemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablescrolldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__datatableselectiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableselectiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__datatablesortdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablesortdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__datatabletemplatingdemo__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatabletemplatingdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__datatablesubmenu__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablesubmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__datatabledemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/datatable/datatabledemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_datatable_datatable__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_dropdown_dropdown__ = __webpack_require__("../../../../../src/app/components/dropdown/dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_calendar_calendar__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_contextmenu_contextmenu__ = __webpack_require__("../../../../../src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_slider_slider__ = __webpack_require__("../../../../../src/app/components/slider/slider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_multiselect_multiselect__ = __webpack_require__("../../../../../src/app/components/multiselect/multiselect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var DataTableDemoModule = (function () {
    function DataTableDemoModule() {
    }
    return DataTableDemoModule;
}());
DataTableDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_24__datatabledemo_routing_module__["a" /* DatatableDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_25__components_datatable_datatable__["a" /* DataTableModule */],
            __WEBPACK_IMPORTED_MODULE_28__components_calendar_calendar__["a" /* CalendarModule */],
            __WEBPACK_IMPORTED_MODULE_26__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_29__components_inputtext_inputtext__["a" /* InputTextModule */],
            __WEBPACK_IMPORTED_MODULE_30__components_contextmenu_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_27__components_dropdown_dropdown__["a" /* DropdownModule */],
            __WEBPACK_IMPORTED_MODULE_31__components_dialog_dialog__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_33__components_multiselect_multiselect__["a" /* MultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_32__components_slider_slider__["a" /* SliderModule */],
            __WEBPACK_IMPORTED_MODULE_34__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_35__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_36__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__datatabledemo__["a" /* DataTableDemo */],
            __WEBPACK_IMPORTED_MODULE_4__datatablecmdemo__["a" /* DataTableCMDemo */],
            __WEBPACK_IMPORTED_MODULE_5__datatablecolreorderdemo__["a" /* DataTableColReorderDemo */],
            __WEBPACK_IMPORTED_MODULE_6__datatablecolresizedemo__["a" /* DataTableColResizeDemo */],
            __WEBPACK_IMPORTED_MODULE_7__datatablecoltogglerdemo__["a" /* DataTableColTogglerDemo */],
            __WEBPACK_IMPORTED_MODULE_8__datatablecruddemo__["a" /* DataTableCrudDemo */],
            __WEBPACK_IMPORTED_MODULE_9__datatableeditabledemo__["a" /* DataTableEditableDemo */],
            __WEBPACK_IMPORTED_MODULE_10__datatableexportdemo__["a" /* DataTableExportDemo */],
            __WEBPACK_IMPORTED_MODULE_11__datatablefacetsdemo__["a" /* DataTableFacetsDemo */],
            __WEBPACK_IMPORTED_MODULE_12__datatablefilterdemo__["a" /* DataTableFilterDemo */],
            __WEBPACK_IMPORTED_MODULE_13__datatablecolgroupdemo__["a" /* DataTableColGroupDemo */],
            __WEBPACK_IMPORTED_MODULE_14__datatablerowgroupdemo__["a" /* DataTableRowGroupDemo */],
            __WEBPACK_IMPORTED_MODULE_15__datatablelazydemo__["a" /* DataTableLazyDemo */],
            __WEBPACK_IMPORTED_MODULE_16__datatablepaginatordemo__["a" /* DataTablePaginatorDemo */],
            __WEBPACK_IMPORTED_MODULE_17__datatableresponsivedemo__["a" /* DataTableResponsiveDemo */],
            __WEBPACK_IMPORTED_MODULE_18__datatablerowexpansiondemo__["a" /* DataTableRowExpansionDemo */],
            __WEBPACK_IMPORTED_MODULE_19__datatablescrolldemo__["a" /* DataTableScrollDemo */],
            __WEBPACK_IMPORTED_MODULE_20__datatableselectiondemo__["a" /* DataTableSelectionDemo */],
            __WEBPACK_IMPORTED_MODULE_21__datatablesortdemo__["a" /* DataTableSortDemo */],
            __WEBPACK_IMPORTED_MODULE_22__datatabletemplatingdemo__["a" /* DataTableTemplatingDemo */],
            __WEBPACK_IMPORTED_MODULE_23__datatablesubmenu__["a" /* DataTableSubmenu */]
        ]
    })
], DataTableDemoModule);

//# sourceMappingURL=datatabledemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatabledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDemo; });
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


var DataTableDemo = (function () {
    function DataTableDemo(carService) {
        this.carService = carService;
    }
    DataTableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
            _this.loading = false;
        }, 1000);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    return DataTableDemo;
}());
DataTableDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatabledemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableDemo);

var _a;
//# sourceMappingURL=datatabledemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatableeditabledemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable</span>\n        <span>Incell editing is enabled by setting editable property true both on datatable and columns, when a cell is clicked edit mode is activated, clicking outside of cell or hitting the enter key \n        switches back to view mode after updating the value.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation ui-fluid\">\n    <p-dataTable [value]=\"cars\" [editable]=\"true\">\n        <p-column field=\"vin\" header=\"Vin\" [editable]=\"true\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [editable]=\"true\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [editable]=\"true\">\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"editor\">\n                <p-dropdown [(ngModel)]=\"car[col.field]\" [options]=\"brands\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" required=\"true\" appendTo=\"body\"></p-dropdown>\n            </ng-template>\n        </p-column>\n        <p-column field=\"color\" header=\"Color\" [editable]=\"true\"></p-column>\n        <p-column field=\"saleDate\" header=\"Sale Date\" [editable]=\"true\" [style]=\"{'overflow':'visible'}\">\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\n                {{car[col.field]|date}}\n            </ng-template>\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"editor\">\n                <p-calendar [(ngModel)]=\"car[col.field]\" appendTo=\"body\"></p-calendar>\n            </ng-template>\n        </p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatableeditabledemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableeditabledemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableEditableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatableeditabledemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableeditabledemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [editable]=\"true\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [editable]=\"true\"&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"editor\"&gt;\n            &lt;p-dropdown [(ngModel)]=\"car[col.field]\" [options]=\"brands\" [autoWidth]=\"false\" [style]=\"&#123;'width':'100%'&#125;\" required=\"true\"  appendTo=\"body\"&gt;&lt;/p-dropdown&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [editable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"saleDate\" header=\"Sale Date\" [editable]=\"true\" [style]=\" &#123;'overflow':'visible' &#125;\"&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\n             &#123;&#123;car[col.field]|date &#125;&#125;\n        &lt;/ng-template&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"editor\"&gt;\n            &lt;p-calendar [(ngModel)]=\"car[col.field]\" appendTo=\"body\"&gt;&lt;/p-calendar&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatableeditabledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableEditableDemo; });
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


var DataTableEditableDemo = (function () {
    function DataTableEditableDemo(carService) {
        this.carService = carService;
    }
    DataTableEditableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.brands = [
            { label: 'Choose', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
    };
    return DataTableEditableDemo;
}());
DataTableEditableDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableeditabledemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableEditableDemo);

var _a;
//# sourceMappingURL=datatableeditabledemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatableexportdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - Export</span>\n        <span>DataTable can export its data to CSV format.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    \n    <p-dataTable #dt [value]=\"cars\" exportFilename=\"cars\">\n        <p-header>\n            <div class=\"ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\n            </div>\n        </p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>    \n    \n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatableexportdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableexportdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableExportDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatableexportdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableexportdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable #dt [value]=\"cars\" exportFilename=\"cars\"&gt;\n    &lt;p-header&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"float:left\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;   \n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatableexportdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableExportDemo; });
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


var DataTableExportDemo = (function () {
    function DataTableExportDemo(carService) {
        this.carService = carService;
    }
    DataTableExportDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    return DataTableExportDemo;
}());
DataTableExportDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableexportdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableExportDemo);

var _a;
//# sourceMappingURL=datatableexportdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablefacetsdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Facets</span></span>\n        <span>DataTable provides header and footer sections.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars\">\n        <p-header>List of Cars</p-header>\n        <p-footer>There are 10 cars</p-footer>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablefacetsdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablefacetsdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableFacetsDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService:CarService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablefacetsdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablefacetsdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\"&gt;\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\n    &lt;p-footer&gt;There are 10 cars&lt;/p-footer&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablefacetsdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableFacetsDemo; });
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


var DataTableFacetsDemo = (function () {
    function DataTableFacetsDemo(carService) {
        this.carService = carService;
    }
    DataTableFacetsDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    return DataTableFacetsDemo;
}());
DataTableFacetsDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablefacetsdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableFacetsDemo);

var _a;
//# sourceMappingURL=datatablefacetsdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablefilterdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - Filter</span>\n        <span>Filtering is enabled by setting the filter property as true in column object. Default match mode is \"startsWith\" and this can be configured\n        using filterMatchMode property of column object that also accepts \"contains\", \"endsWith\", \"equals\" and \"in\". An optional global filter feature is available to search all fields with a keyword.\n        By default input fields are generated as filter elements and using templating any component can be used as a filter.\n    </span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n    </div>\n    <p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\" #dt>\n        <p-header>List of Cars</p-header>\n        <p-column field=\"vin\" header=\"Vin (startsWith)\" [filter]=\"true\" filterPlaceholder=\"Search\"></p-column>\n        <p-column field=\"year\" header=\"Year ({{yearFilter||'No Filter'}})\" [filter]=\"true\" filterMatchMode=\"equals\">\n            <ng-template pTemplate=\"filter\" let-col>\n                <i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null,col.field,col.filterMatchMode)\"></i>\n                <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onSlideEnd)=\"dt.filter($event.value,col.field,col.filterMatchMode)\"></p-slider>\n            </ng-template>\n        </p-column>\n        <p-column field=\"brand\" header=\"Brand (Custom)\" [filter]=\"true\" filterMatchMode=\"equals\">\n            <ng-template pTemplate=\"filter\" let-col>\n                <p-dropdown [options]=\"brands\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"></p-dropdown>\n            </ng-template>\n        </p-column>\n        <p-column field=\"color\" header=\"Color (Custom)\" [filter]=\"true\" filterMatchMode=\"in\">\n            <ng-template pTemplate=\"filter\" let-col>\n                <p-multiSelect [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"></p-multiSelect>\n            </ng-template>\n        </p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablefilterdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablefilterdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableFilterDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    brands: SelectItem[];\n    \n    colors: SelectItem[];\n    \n    yearFilter: number;\n    \n    constructor(private carService: CarService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n        \n        this.brands = [];\n        this.brands.push(&#123;label: 'All Brands', value: null&#125;);\n        this.brands.push(&#123;label: 'Audi', value: 'Audi'&#125;);\n        this.brands.push(&#123;label: 'BMW', value: 'BMW'&#125;);\n        this.brands.push(&#123;label: 'Fiat', value: 'Fiat'&#125;);\n        this.brands.push(&#123;label: 'Honda', value: 'Honda'&#125;);\n        this.brands.push(&#123;label: 'Jaguar', value: 'Jaguar'&#125;);\n        this.brands.push(&#123;label: 'Mercedes', value: 'Mercedes'&#125;);\n        this.brands.push(&#123;label: 'Renault', value: 'Renault'&#125;);\n        this.brands.push(&#123;label: 'VW', value: 'VW'&#125;);\n        this.brands.push(&#123;label: 'Volvo', value: 'Volvo'&#125;);\n        \n        this.colors = [];\n        this.colors.push(&#123;label: 'White', value: 'White'&#125;);\n        this.colors.push(&#123;label: 'Green', value: 'Green'&#125;);\n        this.colors.push(&#123;label: 'Silver', value: 'Silver'&#125;);\n        this.colors.push(&#123;label: 'Black', value: 'Black'&#125;);\n        this.colors.push(&#123;label: 'Red', value: 'Red'&#125;);\n        this.colors.push(&#123;label: 'Maroon', value: 'Maroon'&#125;);\n        this.colors.push(&#123;label: 'Brown', value: 'Brown'&#125;);\n        this.colors.push(&#123;label: 'Orange', value: 'Orange'&#125;);\n        this.colors.push(&#123;label: 'Blue', value: 'Blue'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablefilterdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablefilterdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\"&gt;\n    &lt;i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\n    &lt;input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"&gt;\n&lt;/div&gt;\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\" #dt&gt;\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin (startsWith)\" [filter]=\"true\" filterPlaceholder=\"Search\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year (&#123;&#123;yearFilter||'No Filter'&#125;&#125;)\" [filter]=\"true\" filterMatchMode=\"equals\"&gt;\n        &lt;ng-template pTemplate=\"filter\" let-col&gt;\n            &lt;i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null,col.field,col.filterMatchMode)\"&gt;&lt;/i&gt;\n            &lt;p-slider [style]=\"&#123;'width':'100%','margin-top':'8px'&#125;\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onSlideEnd)=\"dt.filter($event.value,col.field,col.filterMatchMode)\"&gt;&lt;/p-slider&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand (Custom)\" [filter]=\"true\" filterMatchMode=\"equals\"&gt;\n        &lt;ng-template pTemplate=\"filter\" let-col&gt;\n            &lt;p-dropdown [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"&gt;&lt;/p-dropdown&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color (Custom)\" [filter]=\"true\" filterMatchMode=\"in\"&gt;\n        &lt;ng-template pTemplate=\"filter\" let-col&gt;\n            &lt;p-multiSelect [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"&gt;&lt;/p-multiSelect&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablefilterdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableFilterDemo; });
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


var DataTableFilterDemo = (function () {
    function DataTableFilterDemo(carService) {
        this.carService = carService;
    }
    DataTableFilterDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.brands = [];
        this.brands.push({ label: 'All Brands', value: null });
        this.brands.push({ label: 'Audi', value: 'Audi' });
        this.brands.push({ label: 'BMW', value: 'BMW' });
        this.brands.push({ label: 'Fiat', value: 'Fiat' });
        this.brands.push({ label: 'Honda', value: 'Honda' });
        this.brands.push({ label: 'Jaguar', value: 'Jaguar' });
        this.brands.push({ label: 'Mercedes', value: 'Mercedes' });
        this.brands.push({ label: 'Renault', value: 'Renault' });
        this.brands.push({ label: 'VW', value: 'VW' });
        this.brands.push({ label: 'Volvo', value: 'Volvo' });
        this.colors = [];
        this.colors.push({ label: 'White', value: 'White' });
        this.colors.push({ label: 'Green', value: 'Green' });
        this.colors.push({ label: 'Silver', value: 'Silver' });
        this.colors.push({ label: 'Black', value: 'Black' });
        this.colors.push({ label: 'Red', value: 'Red' });
        this.colors.push({ label: 'Maroon', value: 'Maroon' });
        this.colors.push({ label: 'Brown', value: 'Brown' });
        this.colors.push({ label: 'Orange', value: 'Orange' });
        this.colors.push({ label: 'Blue', value: 'Blue' });
    };
    return DataTableFilterDemo;
}());
DataTableFilterDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablefilterdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableFilterDemo);

var _a;
//# sourceMappingURL=datatablefilterdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablelazydemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Lazy</span></span>\n        <span>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n             onLazyLoad callback everytime paging, sorting and filtering happens. Sample belows imitates lazy paging by using an in memory list. \n             It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator \n             displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\n        <p-header>List of Cars</p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablelazydemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablelazydemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableLazyDemo implements OnInit &#123;\n\n    datasource: Car[];\n    \n    cars: Car[];\n    \n    totalRecords: number;\n    \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        //datasource imitation\n        this.carService.getCarsLarge().then(cars => &#123;\n            this.datasource = cars; \n            this.totalRecords = this.datasource.length;\n            this.cars = this.datasource.slice(0, 10);\n        &#125;);\n    &#125;\n    \n    loadCarsLazy(event: LazyLoadEvent) &#123;\n        //in a real application, make a remote request to load data using state metadata from event\n        //event.first = First row offset\n        //event.rows = Number of rows per page\n        //event.sortField = Field name to sort with\n        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec\n        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value\n        \n        //imitate db connection over a network\n        setTimeout(() => &#123;\n            if(this.datasource) &#123;\n                this.cars = this.datasource.slice(event.first, (event.first + event.rows));\n            &#125;\n        &#125;, 250);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablelazydemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablelazydemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" \n            [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\"&gt;\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablelazydemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableLazyDemo; });
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


var DataTableLazyDemo = (function () {
    function DataTableLazyDemo(carService) {
        this.carService = carService;
    }
    DataTableLazyDemo.prototype.ngOnInit = function () {
        var _this = this;
        //datasource imitation
        this.carService.getCarsLarge().then(function (cars) {
            _this.datasource = cars;
            _this.totalRecords = _this.datasource.length;
            _this.cars = _this.datasource.slice(0, 10);
        });
    };
    DataTableLazyDemo.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        var _this = this;
        //imitate db connection over a network
        setTimeout(function () {
            if (_this.datasource) {
                _this.cars = _this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    };
    return DataTableLazyDemo;
}());
DataTableLazyDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablelazydemo.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableLazyDemo);

var _a;
//# sourceMappingURL=datatablelazydemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablepaginatordemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - Paginator</span>\n        <span>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number\n            of page links to display.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n        <p-header>List of Cars</p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablepaginatordemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablepaginatordemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTablePaginatorDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablepaginatordemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablepaginatordemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\"&gt;\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablepaginatordemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTablePaginatorDemo; });
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


var DataTablePaginatorDemo = (function () {
    function DataTablePaginatorDemo(carService) {
        this.carService = carService;
    }
    DataTablePaginatorDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    return DataTablePaginatorDemo;
}());
DataTablePaginatorDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablepaginatordemo.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTablePaginatorDemo);

var _a;
//# sourceMappingURL=datatablepaginatordemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatableresponsivedemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Responsive</span></span>\n        <span>DataTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. \n            This feature is enabled by setting responsive to true. In case you'd like to control the stacked mode manually regardless of screen size,\n            use the stacked property.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <button pButton type=\"button\" (click)=\"toggle()\" style=\"margin-bottom:10px\" label=\"Toggle\" icon=\"fa-list\"></button>\n    \n    <p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [responsive]=\"true\" [stacked]=\"stacked\">\n        <p-header>Responsive</p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatableresponsivedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableresponsivedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableResponsiveDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    stacked: boolean;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n    &#125;\n    \n    toggle() &#123;\n        this.stacked = !this.stacked;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatableresponsivedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableresponsivedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" (click)=\"toggle()\" style=\"margin-bottom:10px\" label=\"Toggle\" icon=\"fa-list\"&gt;&lt;/button&gt;\n\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [responsive]=\"true\" [stacked]=\"stacked\"&gt;\n    &lt;p-header&gt;Responsive&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatableresponsivedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableResponsiveDemo; });
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


var DataTableResponsiveDemo = (function () {
    function DataTableResponsiveDemo(carService) {
        this.carService = carService;
    }
    DataTableResponsiveDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataTableResponsiveDemo.prototype.toggle = function () {
        this.stacked = !this.stacked;
    };
    return DataTableResponsiveDemo;
}());
DataTableResponsiveDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableresponsivedemo.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableResponsiveDemo);

var _a;
//# sourceMappingURL=datatableresponsivedemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablerowexpansiondemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - Row Expansion</span>\n        <span>A row can be expanded to display extra content by enabling expandableRows property and providing a row ng-template.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars\" expandableRows=\"true\">\n        <p-column expander=\"true\" styleClass=\"col-icon\"></p-column>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n        <ng-template let-car pTemplate=\"rowexpansion\">\n            <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px\">\n                <div class=\"ui-grid-row\">\n                    <div class=\"ui-grid-col-3\" style=\"text-align:center\">\n                        <i class=\"fa fa-search\" (click)=\"showCar(car)\" style=\"cursor:pointer;float:left;margin-top:40px\"></i>\n                        <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\n                    </div>\n                    <div class=\"ui-grid-col-9\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad\">\n                            <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-2 label\">Vin: </div>\n                                <div class=\"ui-grid-col-10\">{{car.vin}}</div>\n                            </div>\n                            <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-2 label\">Year: </div>\n                                <div class=\"ui-grid-col-10\">{{car.year}}</div>\n                            </div>\n                            <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-2 label\">Brand: </div>\n                                <div class=\"ui-grid-col-10\">{{car.brand}}</div>\n                            </div>\n                            <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-2 label\">Color: </div>\n                                <div class=\"ui-grid-col-10\">{{car.color}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </p-dataTable>\n    \n    <p-dialog header=\"Car Details\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"250\">\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"vin\" class=\"label\">Vin</label></div>\n                <div class=\"ui-grid-col-8\">{{selectedCar.vin}}</div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"brand\" class=\"label\">Year</label></div>\n                <div class=\"ui-grid-col-8\">{{selectedCar.year}}</div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"brand\" class=\"label\">Brand</label></div>\n                <div class=\"ui-grid-col-8\">{{selectedCar.brand}}</div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"color\" class=\"label\">Color</label></div>\n                <div class=\"ui-grid-col-8\">{{selectedCar.color}}</div>\n            </div>\n        </div>\n    </p-dialog>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablerowexpansiondemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablerowexpansiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableRowExpansionDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    cols: any[];\n    \n    selectedCar: Car;\n    \n    dialogVisible: boolean;\n    \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n        \n        this.cols = [\n            &#123;field: 'vin', header: 'Vin'&#125;,\n            &#123;field: 'year', header: 'Year'&#125;,\n            &#123;field: 'brand', header: 'Brand'&#125;,\n            &#123;field: 'color', header: 'Color'&#125;\n        ];\n    &#125;\n    \n    showCar(car: Car) &#123;\n        this.selectedCar = car;\n        this.dialogVisible = true;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablerowexpansiondemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablerowexpansiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" expandableRows=\"true\"&gt;\n    &lt;p-column expander=\"true\" styleClass=\"col-icon\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;ng-template let-car pTemplate=\"rowexpansion\"&gt;\n        &lt;div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px\"&gt;\n            &lt;div class=\"ui-grid-row\"&gt;\n                &lt;div class=\"ui-grid-col-3\" style=\"text-align:center\"&gt;\n                    &lt;i class=\"fa fa-search\" (click)=\"showCar(car)\" style=\"cursor:pointer;float:left;margin-top:40px\"&gt;&lt;/i&gt;\n                    &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\"&gt;\n                &lt;/div&gt;\n                &lt;div class=\"ui-grid-col-9\"&gt;\n                    &lt;div class=\"ui-grid ui-grid-responsive ui-grid-pad\"&gt;\n                        &lt;div class=\"ui-grid-row\"&gt;\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Vin: &lt;/div&gt;\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.vin}}&lt;/div&gt;\n                        &lt;/div&gt;\n                        &lt;div class=\"ui-grid-row\"&gt;\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Year: &lt;/div&gt;\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.year}}&lt;/div&gt;\n                        &lt;/div&gt;\n                        &lt;div class=\"ui-grid-row\"&gt;\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Brand: &lt;/div&gt;\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.brand}}&lt;/div&gt;\n                        &lt;/div&gt;\n                        &lt;div class=\"ui-grid-row\"&gt;\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Color: &lt;/div&gt;\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.color}}&lt;/div&gt;\n                        &lt;/div&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"250\"&gt;\n    &lt;div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\"&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"vin\" class=\"label\"&gt;Vin&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.vin}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"brand\" class=\"label\"&gt;Year&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.year}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"brand\" class=\"label\"&gt;Brand&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.brand}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"color\" class=\"label\"&gt;Color&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.color}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablerowexpansiondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableRowExpansionDemo; });
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


var DataTableRowExpansionDemo = (function () {
    function DataTableRowExpansionDemo(carService) {
        this.carService = carService;
    }
    DataTableRowExpansionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    DataTableRowExpansionDemo.prototype.showCar = function (car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    };
    return DataTableRowExpansionDemo;
}());
DataTableRowExpansionDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablerowexpansiondemo.html"),
        styles: ["\n        .label {\n            font-weight: bold\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableRowExpansionDemo);

var _a;
//# sourceMappingURL=datatablerowexpansiondemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablerowgroupdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Row Grouping</span></span>\n        <span>Rows can either be grouped by a separate grouping row or using rowspan. Additional optional features\n        are toggleable groups and footer rows.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars1\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" expandableRowGroups=\"true\"\n            [sortableRowGroup]=\"false\">\n        <p-header>Toggleable Row Groups with Footers</p-header>\n        <ng-template pTemplate=\"rowgroupheader\" let-rowData>{{rowData['brand']}}</ng-template>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"price\" header=\"Price\">\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\n                <span>{{car[col.field] | currency:'USD':true:'.0-0'}}</span>\n            </ng-template>\n        </p-column>\n        <ng-template pTemplate=\"rowgroupfooter\" let-car>\n            <td colspan=\"3\" style=\"text-align:right\">Total Price</td>\n            <td>{{calculateGroupTotal(car['brand']) | currency:'USD':true:'.0-0' }}</td>\n        </ng-template>\n    </p-dataTable>\n    \n    <p-dataTable [value]=\"cars2\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" [style]=\"{'margin-top':'50px'}\">\n        <p-header>Subheader</p-header>\n        <ng-template pTemplate=\"rowgroupheader\" let-rowData>{{rowData['brand']}}</ng-template>\n        <p-column field=\"color\" header=\"Color\" sortable=\"true\"></p-column>\n        <p-column field=\"year\" header=\"Year\" sortable=\"true\"></p-column>\n        <p-column field=\"vin\" header=\"Vin\" sortable=\"true\"></p-column>\n    </p-dataTable>\n    \n    <p-dataTable [value]=\"cars3\" sortField=\"brand\" rowGroupMode=\"rowspan\" [style]=\"{'margin-top':'50px'}\">\n        <p-header>RowSpan</p-header>\n        <p-column field=\"brand\" header=\"Brand\" sortable=\"true\"></p-column>\n        <p-column field=\"color\" header=\"Color\" sortable=\"true\"></p-column>\n        <p-column field=\"year\" header=\"Year\" sortable=\"true\"></p-column>\n        <p-column field=\"vin\" header=\"Vin\" sortable=\"true\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablerowgroupdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablerowgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableRowGroupDemo implements OnInit &#123;\n\n    cars1: Car[];\n    \n    cars2: Car[];\n    \n    cars3: Car[];\n    \n    constructor(private carService: CarService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars1 = cars);\n        this.carService.getCarsMedium().then(cars => this.cars2 = cars);\n        this.carService.getCarsMedium().then(cars => this.cars3 = cars);\n    &#125;\n    \n    calculateGroupTotal(brand: string) &#123;\n        let total = 0;\n        \n        if(this.cars1) &#123;\n            for(let car of this.cars1) &#123;\n                if(car.brand === brand) &#123;\n                    total += car.price;\n                &#125;\n            &#125;\n        &#125;\n\n        return total;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablerowgroupdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablerowgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars1\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" expandableRowGroups=\"true\"\n        [sortableRowGroup]=\"false\"&gt;\n    &lt;p-header&gt;Toggleable Row Groups with Footers&lt;/p-header&gt;\n    &lt;ng-template pTemplate=\"rowgroupheader\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"price\" header=\"Price\"&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;span&gt;&#123;&#123;car[col.field] | currency:'USD':true:'.0-0'&#125;&#125;&lt;/span&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;ng-template pTemplate=\"rowgroupfooter\" let-car&gt;\n        &lt;td colspan=\"3\" style=\"text-align:right\"&gt;Total Price&lt;/td&gt;\n        &lt;td&gt;&#123;&#123;calculateGroupTotal(car['brand']) | currency:'USD':true:'.0-0' &#125;&#125;&lt;/td&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dataTable [value]=\"cars2\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\n    &lt;p-header&gt;Subheader&lt;/p-header&gt;\n    &lt;ng-template pTemplate=\"rowgroupheader\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dataTable [value]=\"cars3\" sortField=\"brand\" rowGroupMode=\"rowspan\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\n    &lt;p-header&gt;RowSpan&lt;/p-header&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablerowgroupdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableRowGroupDemo; });
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


var DataTableRowGroupDemo = (function () {
    function DataTableRowGroupDemo(carService) {
        this.carService = carService;
    }
    DataTableRowGroupDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars3 = cars; });
    };
    DataTableRowGroupDemo.prototype.calculateGroupTotal = function (brand) {
        var total = 0;
        if (this.cars1) {
            for (var _i = 0, _a = this.cars1; _i < _a.length; _i++) {
                var car = _a[_i];
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }
        return total;
    };
    return DataTableRowGroupDemo;
}());
DataTableRowGroupDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablerowgroupdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableRowGroupDemo);

var _a;
//# sourceMappingURL=datatablerowgroupdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablescrolldemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - Scroll</span>\n        <span>Data scrolling with fixed header is available horizontally, vertically or both. ScrollHeight and ScrollWidth values can either\n        be fixed pixels or percentages. Virtual Scrolling mode is available to deal with large datasets by loading data on demand during scrolling. \n        In additon certain columns and rows can be fixed as well. </span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\">\n        <p-header>Vertical</p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n    \n    <p-dataTable [value]=\"carsLarge\" scrollable=\"true\" scrollHeight=\"200px\" [rows]=\"20\" virtualScroll=\"virtualScroll\" [style]=\"{'margin-top':'30px'}\" \n        [lazy]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\n        <p-header>Virtual Scrolling - 250K Rows</p-header>\n        <p-column header=\"Id\">\n            <ng-template pTemplate=\"body\" let-index=\"rowIndex\">\n                {{index}}\n            </ng-template>\n        </p-column>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n\n    <p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\" scrollWidth=\"600px\" [style]=\"{'margin-top':'30px'}\">\n        <p-header>Vertical and Horizontal</p-header>\n        <p-column field=\"vin\" header=\"Vin\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\n    </p-dataTable>\n    \n    <p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" scrollable=\"true\" scrollHeight=\"200px\" [style]=\"{'margin-top':'30px'}\">\n        <p-header>Frozen Rows</p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n    \n    <p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\" unfrozenWidth=\"600px\" [style]=\"{'margin-top':'30px'}\">\n        <p-header>Frozen Columns</p-header>\n        <p-column field=\"vin\" header=\"Vin\" [style]=\"{'width':'200px'}\" frozen=\"true\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\n    </p-dataTable>\n    \n    <p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\" unfrozenWidth=\"600px\" [style]=\"{'margin-top':'30px'}\">\n        <p-header>Frozen Rows and Columns</p-header>\n        <p-column field=\"vin\" header=\"Vin\" [style]=\"{'width':'200px'}\" frozen=\"true\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablescrolldemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablescrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableScrollDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    frozenCars: Car[];\n    \n    carsLarge: Car[];\n    \n    totalRecords: number;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n        this.frozenCars = [\n            &#123;\"brand\": \"BMW\", \"year\": 2013, \"color\": \"Grey\", \"vin\": \"fh2uf23\"&#125;,\n            &#123;\"brand\": \"Chevrolet\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"4525g23\"&#125;\n        ];\n        \n        this.totalRecords = 250000;\n    &#125;\n    \n    loadCarsLazy(event: LazyLoadEvent) &#123;\n        //for demo purposes keep loading the same dataset \n        //in a real production application, this data should come from server by building the query with LazyLoadEvent options   \n        \n        setTimeout(() => &#123;\n            this.carsLarge = [\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"&#125;,\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"&#125;,\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"&#125;,\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"&#125;,\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"&#125;,\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"&#125;,\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"&#125;,\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"&#125;,\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"&#125;,\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"&#125;,\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"&#125;,\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"&#125;,\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"&#125;,\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"&#125;,\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"&#125;,\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"&#125;,\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"&#125;,\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"&#125;,\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"&#125;,\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"&#125;,\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"&#125;,\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"&#125;,\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"&#125;,\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"&#125;,\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"&#125;,\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"&#125;,\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"&#125;,\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"&#125;,\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"&#125;,\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"&#125;,\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"&#125;,\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"&#125;,\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"&#125;,\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"&#125;,\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"&#125;,\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"&#125;,\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"&#125;,\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"&#125;,\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"&#125;,\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"&#125;\n            ];\n        &#125;, 250);\n        \n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablescrolldemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablescrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;p-header&gt;Vertical&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dataTable [value]=\"carsLarge\" scrollable=\"true\" scrollHeight=\"200px\" [rows]=\"20\" virtualScroll=\"virtualScroll\" [style]=\"&#123;'margin-top':'30px'&#125;\" \n    [lazy]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\"&gt;\n    &lt;p-header&gt;Virtual Scrolling - 250K Rows&lt;/p-header&gt;\n    &lt;p-column header=\"Id\"&gt;\n        &lt;ng-template pTemplate=\"body\" let-index=\"rowIndex\"&gt;\n            &#123;&#123;index&#125;&#125;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dataTable [value]=\"cars\" scrollable=\"true\"  scrollHeight=\"200px\" scrollWidth=\"600px\" [style]=\"&#123;'margin-top':'30px'&#125;\"&gt;\n    &lt;p-header&gt;Vertical and Horizontal&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" scrollable=\"true\" scrollHeight=\"200px\" [style]=\"&#123;'margin-top':'30px'&#125;\"&gt;\n    &lt;p-header&gt;Frozen Rows&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\" unfrozenWidth=\"600px\" [style]=\"&#123;'margin-top':'30px'&#125;\"&gt;\n    &lt;p-header&gt;Frozen Columns&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'250px'&#125;\" frozen=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\" unfrozenWidth=\"600px\" [style]=\"&#123;'margin-top':'30px'&#125;\"&gt;\n    &lt;p-header&gt;Frozen Rows and Columns&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'250px'&#125;\" frozen=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablescrolldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableScrollDemo; });
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


var DataTableScrollDemo = (function () {
    function DataTableScrollDemo(carService) {
        this.carService = carService;
    }
    DataTableScrollDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.frozenCars = [
            { "brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23" },
            { "brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23" }
        ];
        this.totalRecords = 250000;
    };
    DataTableScrollDemo.prototype.loadCarsLazy = function (event) {
        var _this = this;
        //for demo purposes keep loading the same dataset 
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
        setTimeout(function () {
            _this.carsLarge = [
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
            ];
        }, 250);
    };
    return DataTableScrollDemo;
}());
DataTableScrollDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablescrolldemo.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableScrollDemo);

var _a;
//# sourceMappingURL=datatablescrolldemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatableselectiondemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Selection</span></span>\n        <span>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property \n            and onRowSelect-onRowUnselect events are provided as optional callbacks. In addition built-in radio button and checkbox based selections \n            are available as alternatives.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n\n    <h3 class=\"first\">Single</h3>\n    <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>\n    <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\">\n        <p-header>Single Selection</p-header>\n        <p-footer><div style=\"text-align: left\">Selected Car: {{selectedCar1 ? selectedCar1.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'}}</div></p-footer>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n\n    <h3>Multiple</h3>\n    <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices\n    metakey or shiftkey are required.</p>\n    <p-dataTable [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars1\" dataKey=\"vin\">\n        <p-header>Multiple Selection</p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n        <p-footer>\n            <ul>\n                <li *ngFor=\"let car of selectedCars1\" style=\"text-align: left\">{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}</li>\n            </ul>\n        </p-footer>\n    </p-dataTable>\n\n    <h3>Events</h3>\n    <p>DataTable provides onRowSelect and onRowUnselect as optional callbacks.</p>\n    <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar2\" (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\" dataKey=\"vin\">\n        <p-header>Selection with Events</p-header>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n    \n    <h3>RadioButton</h3>\n    <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as \"single\".</p>\n    <p-dataTable [value]=\"cars\" [(selection)]=\"selectedCar3\" dataKey=\"vin\">\n        <p-header>Single Selection</p-header>\n        <p-footer><div style=\"text-align: left\">Selected Car: {{selectedCar3 ? selectedCar3.vin + ' - ' + selectedCar3.brand + ' - ' + selectedCar3.year + ' - ' + selectedCar3.color: 'none'}}</div></p-footer>\n        <p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"single\"></p-column>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n    \n    <h3>Checkbox</h3>\n    <p>Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as \"multiple\".</p>\n    <p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars2\" dataKey=\"vin\">\n        <p-header>Checkbox Selection</p-header>\n        <p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"multiple\"></p-column>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n        <p-footer>\n            <ul>\n                <li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\">{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}</li>\n            </ul>\n        </p-footer>\n    </p-dataTable>\n\n    <h3>Checkbox with Paging</h3>\n    <p>\n        When using checkboxes for multiple selection with paging and clicking the header checkbox, by default, items on \n        all other pages will be deselected and only the current page's items will be toggled. Often, the more desired \n        approach is to toggle all items across all pages. This can be accomplished by setting the \n        \"headerCheckboxToggleAllPages\" property to \"true\" on your paged DataTable. Notice how the header checkbox only \n        stays checked when all items across all pages are selected. \n    </p>\n    <p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars3\" dataKey=\"vin\" [paginator]=\"true\" [rows]=\"5\" [headerCheckboxToggleAllPages]=\"true\">\n        <p-header>Checkbox Multiple Selection with Paging</p-header>\n        <p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"multiple\"></p-column>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n        <p-footer>\n            <ul>\n                <li *ngFor=\"let car of selectedCars3\" style=\"text-align: left\">{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}</li>\n            </ul>\n        </p-footer>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatableselectiondemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableselectiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableSelectionDemo implements OnInit &#123;\n\n    msgs: Message[];\n\n    cars: Car[];\n\n    selectedCar1: Car;\n\n    selectedCar2: Car;\n    \n    selectedCar3: Car;\n\n    selectedCars1: Car[];\n    \n    selectedCars2: Car[];\n    \n    selectedCars3: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n\n    onRowSelect(event) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand&#125;);\n    &#125;\n\n    onRowUnselect(event) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand&#125;);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatableselectiondemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableselectiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\n&lt;p&gt;In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.&lt;/p&gt;\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\"&gt;\n    &lt;p-header&gt;Single Selection&lt;/p-header&gt;\n    &lt;p-footer&gt;&lt;div style=\"text-align: left\"&gt;Selected Car: {{selectedCar1 ? selectedCar1.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'}}&lt;/div&gt;&lt;/p-footer&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;h3&gt;Multiple&lt;/h3&gt;\n&lt;p&gt;&lt;/p&gt;\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\n    &lt;p-header&gt;Multiple Selection&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;p-footer&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars\" style=\"text-align: left\"&gt;{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}&lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dataTable&gt;\n\n&lt;h3&gt;Events&lt;/h3&gt;\n&lt;p&gt;DataTable provides onRowSelect and onRowUnselect as optional callbacks.&lt;/p&gt;\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar2\" (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\" dataKey=\"vin\"&gt;\n    &lt;p-header&gt;Selection with Events&lt;/p-header&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;h3&gt;RadioButton&lt;/h3&gt;\n&lt;p&gt;Single selection can also be handled using radio buttons by enabling the selectionMode property of column as \"single\".&lt;/p&gt;\n&lt;p-dataTable [value]=\"cars\" [(selection)]=\"selectedCar3\" dataKey=\"vin\"&gt;\n    &lt;p-header&gt;Single Selection&lt;/p-header&gt;\n    &lt;p-footer&gt;&lt;div style=\"text-align: left\"&gt;Selected Car: {{selectedCar3 ? selectedCar3.vin + ' - ' + selectedCar3.brand + ' - ' + selectedCar3.year + ' - ' + selectedCar3.color: 'none'}}&lt;/div&gt;&lt;/p-footer&gt;\n    &lt;p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"single\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;h3&gt;Checkbox&lt;/h3&gt;\n&lt;p&gt;Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as \"multiple\".&lt;/p&gt;\n&lt;p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars2\" dataKey=\"vin\"&gt;\n    &lt;p-header&gt;Checkbox Selection&lt;/p-header&gt;\n    &lt;p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"multiple\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;p-footer&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\"&gt;{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}&lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dataTable&gt;\n    \n&lt;h3&gt;Checkbox with Paging&lt;/h3&gt;\n&lt;p&gt; \n    When using checkboxes for multiple selection with paging and clicking the header checkbox, by default, items on all \n    other pages will be deselected and only the current page's items will be toggled. Often, the more desired approach\n    is to toggle all items across all pages. This can be accomplished by setting the \n    \"headerCheckboxToggleAllPages\" property to \"true\" on your paged DataTable. Notice how the header\n    checkbox only stays checked when all items across all pages are selected. \n&lt;/p&gt;\n&lt;p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars3\" dataKey=\"vin\" [paginator]=\"true\" [rows]=\"5\" [headerCheckboxToggleAllPages]=\"true\"&gt;\n    &lt;p-header&gt;Checkbox Multiple Selection with Paging&lt;/p-header&gt;\n    &lt;p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"multiple\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n    &lt;p-footer&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars3\" style=\"text-align: left\"&gt;{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}&lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatableselectiondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableSelectionDemo; });
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


var DataTableSelectionDemo = (function () {
    function DataTableSelectionDemo(carService) {
        this.carService = carService;
    }
    DataTableSelectionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableSelectionDemo.prototype.onRowSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand });
    };
    DataTableSelectionDemo.prototype.onRowUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand });
    };
    return DataTableSelectionDemo;
}());
DataTableSelectionDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatableselectiondemo.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableSelectionDemo);

var _a;
//# sourceMappingURL=datatableselectiondemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablesortdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - <span class=\"orange\">Sort</span></span>\n        <span>Simply enabling sortable property at column object is enough to make a column sortable. For multiple sorting\n        use metakey.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single Column</h3>\n    <p-dataTable [value]=\"cars1\">\n        <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n        <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n    </p-dataTable>\n    \n    <h3>Multiple Columns</h3>\n    <p-dataTable [value]=\"cars2\" sortMode=\"multiple\">\n        <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n        <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n        <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatablesortdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablesortdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableSortDemo implements OnInit &#123;\n\n    cars1: Car[];\n    \n    cars2: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatablesortdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablesortdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single Column&lt;/h3&gt;\n&lt;p-dataTable [value]=\"cars1\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;h3&gt;Multiple Columns&lt;/h3&gt;\n&lt;p-dataTable [value]=\"cars2\" sortMode=\"multiple\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablesortdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableSortDemo; });
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


var DataTableSortDemo = (function () {
    function DataTableSortDemo(carService) {
        this.carService = carService;
    }
    DataTableSortDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
    };
    return DataTableSortDemo;
}());
DataTableSortDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatablesortdemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableSortDemo);

var _a;
//# sourceMappingURL=datatablesortdemo.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatablesubmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableSubmenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataTableSubmenu = (function () {
    function DataTableSubmenu() {
    }
    return DataTableSubmenu;
}());
DataTableSubmenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'datatable-demos',
        template: "\n        <div class=\"content-section SubSubMenu ui-helper-clearfix\">\n            <ul>\n                <li><a [routerLink]=\"['/datatable']\">&#9679; Basic</a></li>\n                <li><a [routerLink]=\"['/datatable/facets']\">&#9679; Facets</a></li>\n                <li><a [routerLink]=\"['/datatable/templating']\">&#9679; Templating</a></li>\n                <li><a [routerLink]=\"['/datatable/colgroup']\">&#9679; ColGroup</a></li>\n                <li><a [routerLink]=\"['/datatable/rowgroup']\">&#9679; RowGroup</a></li>\n                <li><a [routerLink]=\"['/datatable/paginator']\">&#9679; Paginator</a></li>\n                <li><a [routerLink]=\"['/datatable/sort']\">&#9679; Sort</a></li>\n                <li><a [routerLink]=\"['/datatable/filter']\">&#9679; Filter</a></li>\n                <li><a [routerLink]=\"['/datatable/selection']\">&#9679; Selection</a></li>\n                <li><a [routerLink]=\"['/datatable/editable']\">&#9679; Editable</a></li>\n                <li><a [routerLink]=\"['/datatable/rowexpansion']\">&#9679; Expand</a></li>\n                <li><a [routerLink]=\"['/datatable/colresize']\">&#9679; Resize</a></li>\n                <li><a [routerLink]=\"['/datatable/colreorder']\">&#9679; Reorder</a></li>\n                <li><a [routerLink]=\"['/datatable/scroll']\">&#9679; Scroll</a></li>\n                <li><a [routerLink]=\"['/datatable/lazy']\">&#9679; Lazy</a></li>\n                <li><a [routerLink]=\"['/datatable/contextmenu']\">&#9679; ContextMenu</a></li>\n                <li><a [routerLink]=\"['/datatable/coltoggler']\">&#9679; ColToggler</a></li>\n                <li><a [routerLink]=\"['/datatable/responsive']\">&#9679; Responsive</a></li>\n                <li><a [routerLink]=\"['/datatable/crud']\">&#9679; Crud</a></li>\n                <li><a [routerLink]=\"['/datatable/export']\">&#9679; Export</a></li>\n            </ul>\n        </div>\n    "
    })
], DataTableSubmenu);

//# sourceMappingURL=datatablesubmenu.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatabletemplatingdemo.html":
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataTable - Templating</span>\n        <span>Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating. Similarly,\n            custom content can be placed at the header and footer of a column with templating.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n\n    <p-dataTable [value]=\"cars\">\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\">\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\n                <span [style.color]=\"car[col.field]\">{{car[col.field]}}</span>\n            </ng-template>\n        </p-column>\n        <p-column styleClass=\"col-button\">\n            <ng-template pTemplate=\"header\">\n                <button type=\"button\" pButton icon=\"fa-refresh\"></button>\n            </ng-template>\n            <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                <button type=\"button\" pButton (click)=\"selectCar(car)\" icon=\"fa-search\"></button>\n            </ng-template>\n        </p-column>\n    </p-dataTable>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datatabletemplatingdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatabletemplatingdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableTemplatingDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    msgs: Message[] = [];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n    \n    selectCar(car: Car) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin&#125;);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datatabletemplatingdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatabletemplatingdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-dataTable [value]=\"cars\"&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;span [style.color]=\"car[col.field]\"&gt;&#123;&#123;car[col.field]&#125;&#125;&lt;/span&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column styleClass=\"col-button\"&gt;\n        &lt;ng-template pTemplate=\"header\"&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-refresh\"&gt;&lt;/button&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template let-car=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;button type=\"button\" pButton (click)=\"selectCar(car)\" icon=\"fa-search\"&gt;&lt;/button&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datatable/datatabletemplatingdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableTemplatingDemo; });
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


var DataTableTemplatingDemo = (function () {
    function DataTableTemplatingDemo(carService) {
        this.carService = carService;
        this.msgs = [];
    }
    DataTableTemplatingDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableTemplatingDemo.prototype.selectCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Select', detail: 'Vin: ' + car.vin });
    };
    return DataTableTemplatingDemo;
}());
DataTableTemplatingDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/datatable/datatabletemplatingdemo.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DataTableTemplatingDemo);

var _a;
//# sourceMappingURL=datatabletemplatingdemo.js.map

/***/ })

});
//# sourceMappingURL=datatabledemo.module.chunk.js.map