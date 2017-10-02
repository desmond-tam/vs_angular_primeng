webpackJsonp(["listboxdemo.module"],{

/***/ "../../../../../src/app/showcase/components/listbox/listboxdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListboxDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/listbox/listboxdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListboxDemoRoutingModule = (function () {
    function ListboxDemoRoutingModule() {
    }
    return ListboxDemoRoutingModule;
}());
ListboxDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__listboxdemo__["a" /* ListboxDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], ListboxDemoRoutingModule);

//# sourceMappingURL=listboxdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/listbox/listboxdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Listbox</span>\n        <span>Listbox is used to select one or more values from a list of items.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCity\"></p-listbox>\n\n    <p>Selected City: {{selectedCity}}</p>\n\n    <h3>Advanced (Multiple, Checkbox and Filter)</h3>\n    <p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCities\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\"></p-listbox>\n    <p>Selected Cities: <span *ngFor=\"let c of selectedCities\" style=\"margin-right: 10px\">{{c}}</span></p>\n\n    <h3>Content</h3>\n    <p-listbox [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"{'width':'190px'}\" [listStyle]=\"{'max-height':'250px'}\">\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\">\n                <img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"display:inline-block;margin:5px 0 0 5px\" width=\"48\">\n                <span style=\"float:right;margin:20px 10px 0 0\">{{car.value}}</span>\n            </div>\n        </ng-template>\n        <p-footer>\n            Selected: {{selectedCar||'none'}}\n        </p-footer>\n    </p-listbox>\n    \n    <br />\n    \n    <button type=\"button\" (click)=\"selectedCar=null\" pButton icon=\"fa-close\" label=\"Clear Selected Car\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ListboxModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined using ngModel and listbox requires a collection of options \n                where each option should follow the SelectItem interface that defines label-value properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCity\"&gt;&lt;/p-listbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCity: string;\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Selection</h3>\n            <p>Listbox allows selection of either single or multiple items whereas checkbox option displays a checkbox to indicate multiple selection. \n                In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected\n                using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\n                devices metaKeySelection is turned off automatically.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCities\"&gt;&lt;/p-listbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCities: string[];\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Filter</h3>\n            <p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable filter property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCities\" filter=\"filter\"&gt;&lt;/p-listbox&gt;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Listbox can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-listbox [options]=\"cities\" formControlName=\"cities\"&gt;&lt;/p-listbox&gt;\n</code>\n</pre>\n\n            <h3>Custom Content</h3>\n            <p>Label of an option is used as the display text of an item by default, for custom content support define a ng-template where \n                the local ng-template variable refers to an option in the options collection. Additionally a custom footer can be provided\n            using p-footer element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-listbox [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"&#123;'width':'190px'&#125;\"&gt;\n    &lt;ng-template let-car let-i=\"index\" pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"display:inline-block;margin:5px 0 0 5px\" width=\"48\"&gt;\n            &lt;span style=\"float:right;margin:20px 10px 0 0\"&gt;&#123;&#123;i&#125;&#125; - &#123;&#123;car.value&#125;&#125;&lt;/span&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;p-footer&gt;\n        Selected: &#123;&#123;selectedCar||'none'&#125;&#125;\n    &lt;/p-footer&gt;\n&lt;/p-listbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng'\n\nexport class MyModel &#123;\n\n    cars: SelectItem[];\n\n    selectedCar: string;\n\n    constructor() &#123;\n        this.cars = [];\n        this.cars.push(&#123;label: 'Audi', value: 'Audi'&#125;);\n        this.cars.push(&#123;label: 'BMW', value: 'BMW'&#125;);\n        this.cars.push(&#123;label: 'Fiat', value: 'Fiat'&#125;);\n        this.cars.push(&#123;label: 'Ford', value: 'Ford'&#125;);\n        this.cars.push(&#123;label: 'Honda', value: 'Honda'&#125;);\n        this.cars.push(&#123;label: 'Jaguar', value: 'Jaguar'&#125;);\n        this.cars.push(&#123;label: 'Mercedes', value: 'Mercedes'&#125;);\n        this.cars.push(&#123;label: 'Renault', value: 'Renault'&#125;);\n        this.cars.push(&#123;label: 'VW', value: 'VW'&#125;);\n        this.cars.push(&#123;label: 'Volvo', value: 'Volvo'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of selectitems to display as the available options.</td>\n                        </tr>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, allows selecting multiple values.</td>\n                        </tr>\n                        <tr>\n                            <td>checkbox</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, allows selecting items with checkboxes.</td>\n                        </tr>\n                        <tr>\n                            <td>filter</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, displays a filter input at header.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the container.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the container.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the list element.</td>\n                        </tr>\n                        <tr>\n                            <td>metaKeySelection</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a value in options.</td>\n                        </tr>\n                        <tr>\n                            <td>showToggleAll</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether header checkbox is shown in multiple mode.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.value: single value or an array of values that are selected\n                            </td>\n                            <td>Callback to invoke when value of listbox changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onDblClick</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.value: Clicked selecte item\n                            </td>\n                            <td>Callback to invoke when an item is double clicked.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-listbox</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-listbox-list</td>\n                            <td>List container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-listbox-item</td>\n                            <td>An item in the list.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-listbox-header</td>\n                            <td>Header element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-listbox-filter-container</td>\n                            <td>Container of filter input in header.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/listbox\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCity\"&gt;&lt;/p-listbox&gt;\n\n&lt;p&gt;Selected City: {{selectedCity}}&lt;/p&gt;\n\n&lt;h3&gt;Advanced (Multiple, Checkbox and Filter)&lt;/h3&gt;\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCities\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\"&gt;&lt;/p-listbox&gt;\n&lt;p&gt;Selected Cities: &lt;span *ngFor=\"let c of selectedCities\" style=\"margin-right: 10px\"&gt;{{c}}&lt;/span&gt;&lt;/p&gt;\n\n&lt;h3&gt;Content&lt;/h3&gt;\n&lt;p-listbox [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"&#123;'width':'190px'&#125;\" [listStyle]=\"&#123;'max-height':'250px'&#125;\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"display:inline-block;margin:5px 0 0 5px\" width=\"48\"&gt;\n            &lt;span style=\"float:right;margin:20px 10px 0 0\"&gt;{{car.value}}&lt;/span&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;p-footer&gt;\n        Selected: &#123;&#123;selectedCar||'none'&#125;&#125;\n    &lt;/p-footer&gt;\n&lt;/p-listbox&gt;\n\n&lt;button type=\"button\" (click)=\"selectedCar=null\" pButton icon=\"fa-close\" label=\"Clear Selected Car\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ListboxDemo &#123;\n\n    cities: SelectItem[];\n\n    selectedCity: string;\n\n    selectedCities: string[];\n\n    cars: SelectItem[];\n\n    selectedCar: string = 'BMW';\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n\n        this.cars = [];\n        this.cars.push(&#123;label: 'Audi', value: 'Audi'&#125;);\n        this.cars.push(&#123;label: 'BMW', value: 'BMW'&#125;);\n        this.cars.push(&#123;label: 'Fiat', value: 'Fiat'&#125;);\n        this.cars.push(&#123;label: 'Ford', value: 'Ford'&#125;);\n        this.cars.push(&#123;label: 'Honda', value: 'Honda'&#125;);\n        this.cars.push(&#123;label: 'Jaguar', value: 'Jaguar'&#125;);\n        this.cars.push(&#123;label: 'Mercedes', value: 'Mercedes'&#125;);\n        this.cars.push(&#123;label: 'Renault', value: 'Renault'&#125;);\n        this.cars.push(&#123;label: 'VW', value: 'VW'&#125;);\n        this.cars.push(&#123;label: 'Volvo', value: 'Volvo'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/listbox/listboxdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListboxDemoModule", function() { return ListboxDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/listbox/listboxdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listboxdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/listbox/listboxdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_listbox_listbox__ = __webpack_require__("../../../../../src/app/components/listbox/listbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ListboxDemoModule = (function () {
    function ListboxDemoModule() {
    }
    return ListboxDemoModule;
}());
ListboxDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__listboxdemo_routing_module__["a" /* ListboxDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_listbox_listbox__["a" /* ListboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__listboxdemo__["a" /* ListboxDemo */]
        ]
    })
], ListboxDemoModule);

//# sourceMappingURL=listboxdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/listbox/listboxdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListboxDemo; });
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

var ListboxDemo = (function () {
    function ListboxDemo() {
        this.selectedCar = 'BMW';
        this.cities = [];
        this.cities.push({ label: 'New York', value: 'New York' });
        this.cities.push({ label: 'Rome', value: 'Rome' });
        this.cities.push({ label: 'London', value: 'London' });
        this.cities.push({ label: 'Istanbul', value: 'Istanbul' });
        this.cities.push({ label: 'Paris', value: 'Paris' });
        this.cars = [];
        this.cars.push({ label: 'Audi', value: 'Audi' });
        this.cars.push({ label: 'BMW', value: 'BMW' });
        this.cars.push({ label: 'Fiat', value: 'Fiat' });
        this.cars.push({ label: 'Ford', value: 'Ford' });
        this.cars.push({ label: 'Honda', value: 'Honda' });
        this.cars.push({ label: 'Jaguar', value: 'Jaguar' });
        this.cars.push({ label: 'Mercedes', value: 'Mercedes' });
        this.cars.push({ label: 'Renault', value: 'Renault' });
        this.cars.push({ label: 'VW', value: 'VW' });
        this.cars.push({ label: 'Volvo', value: 'Volvo' });
    }
    return ListboxDemo;
}());
ListboxDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/listbox/listboxdemo.html")
    }),
    __metadata("design:paramtypes", [])
], ListboxDemo);

//# sourceMappingURL=listboxdemo.js.map

/***/ })

});
//# sourceMappingURL=listboxdemo.module.chunk.js.map