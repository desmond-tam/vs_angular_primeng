webpackJsonp(["dropdowndemo.module"],{

/***/ "../../../../../src/app/showcase/components/dropdown/dropdowndemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdowndemo__ = __webpack_require__("../../../../../src/app/showcase/components/dropdown/dropdowndemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DropdownDemoRoutingModule = (function () {
    function DropdownDemoRoutingModule() {
    }
    return DropdownDemoRoutingModule;
}());
DropdownDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dropdowndemo__["a" /* DropdownDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], DropdownDemoRoutingModule);

//# sourceMappingURL=dropdowndemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dropdown/dropdowndemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Dropdown</span>\n        <span>Dropdown is used to select an item from a collection of options. Custom content support and filtering are the notable features.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single</h3>\n    <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a City\"></p-dropdown>\n    <p>Selected City: {{selectedCity ? selectedCity.name : 'none'}}</p>\n    \n    <h3>Editable</h3>\n    <p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"{'width':'150px'}\" editable=\"editable\" placeholder=\"Select a Brand\"></p-dropdown>\n    <p>Selected Car: {{selectedCar||'none'}}</p>\n    \n    <h3>Content with Filters</h3>\n    <p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar2\" [style]=\"{'width':'150px'}\" filter=\"filter\">\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\n                <img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"width:24px;position:absolute;top:1px;left:5px\"/>\n                <div style=\"font-size:14px;float:right;margin-top:4px\">{{car.label}}</div>\n            </div>\n        </ng-template>\n    </p-dropdown>\n    <p>Selected Car: {{selectedCar2||'none'}}</p>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DropdownModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined using ngModel and dropdown requires a collection of options \n                where each option should follow the SelectItem interface that defines label-value properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCity: string;\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'Select City', value:null&#125;);\n        this.cities.push(&#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;);\n        this.cities.push(&#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;});\n        this.cities.push(&#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;});\n        this.cities.push(&#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;});\n        this.cities.push(&#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Dropdown can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cities\" formControlName=\"selectedCity\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n            <h3>Filtering</h3>\n            <p>Options can be filtered using an input field in the overlay by enabling the filter property. By default filtering is done against\n                label of the SelectItem and filterBy property is available to choose one or more properties of the SelectItem API.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" [filter]=\"true\"&gt;&lt;/p-dropdown&gt;\n&lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" [filter]=\"true\" filterBy=\"label,value.name\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n            <h3>Custom Content</h3>\n            <p>Label of an option is used as the display text of an item by default, for custom content support define a ng-template that gets the SelectItem as the local ng-template variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"&#123;'width':'150px'&#125;\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.label}}.gif\" style=\"width:24px;position:absolute;top:1px;left:5px\"/&gt;\n            &lt;div style=\"font-size:14px;float:right;margin-top:4px\"&gt;{{car.label}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng'\n\nexport class MyModel &#123;\n\n    cars: SelectItem[];\n\n    selectedCar: string;\n\n    constructor() &#123;\n        this.cars = [];\n        this.cars.push(&#123;label: 'Audi', value: 'Audi'&#125;);\n        this.cars.push(&#123;label: 'BMW', value: 'BMW'&#125;);\n        this.cars.push(&#123;label: 'Fiat', value: 'Fiat'&#125;);\n        this.cars.push(&#123;label: 'Ford', value: 'Ford'&#125;);\n        this.cars.push(&#123;label: 'Honda', value: 'Honda'&#125;);\n        this.cars.push(&#123;label: 'Jaguar', value: 'Jaguar'&#125;);\n        this.cars.push(&#123;label: 'Mercedes', value: 'Mercedes'&#125;);\n        this.cars.push(&#123;label: 'Renault', value: 'Renault'&#125;);\n        this.cars.push(&#123;label: 'VW', value: 'VW'&#125;);\n        this.cars.push(&#123;label: 'Volvo', value: 'Volvo'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of selectitems to display as the available options.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>200px</td>\n                            <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>panelStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the overlay panel element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>panelStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the overlay panel element.</td>\n                        </tr>\n                        <tr>\n                            <td>filter</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, displays an input field to filter the items on keyup.</td>\n                        </tr>\n                        <tr>\n                            <td>filterBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>\n                        </tr>\n                        <tr>\n                            <td>filterPlaceholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Placeholder text to show when filter input is empty.</td>\n                        </tr>\n                        <tr>\n                            <td>autoWidth</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Calculates the width based on options width, set to false for custom width.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>editable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, custom value instead of predefined options can be entered using the editable input field.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Default text to display when no option is selected.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the dropdown.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a value in options.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When enabled, creates the dom for options when overlay panel gets visible.</td>\n                        </tr>\n                        <tr>\n                            <td>autofocus</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should automatically get focus on load.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: Browser event<br />\n                                event.value: Selected option value\n                            </td>\n                            <td>Callback to invoke when value of dropdown changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when dropdown gets focus.</td>\n                        </tr>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when dropdown loses focus.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>resetFilter</td>\n                            <td>-</td>\n                            <td>Resets filtering.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-dropdown</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-label</td>\n                            <td>Element to display label of selected option.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-trigger</td>\n                            <td>Icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-panel</td>\n                            <td>Icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-items-wrapper</td>\n                            <td>Wrapper element of items list.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-items</td>\n                            <td>List element of items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-item</td>\n                            <td>An item in the list.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-filter-container</td>\n                            <td>Container of filter input.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-filter</td>\n                            <td>Filter element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-open</td>\n                            <td>Container element when overlay is visible.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dropdown\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\n&lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a City\"&gt;&lt;/p-dropdown&gt;\n&lt;p&gt;Selected City: {{selectedCity ? selectedCity.name : 'none'}}&lt;/p&gt;\n\n&lt;h3&gt;Editable&lt;/h3&gt;\n&lt;p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"&#123;'width':'150px'&#125;\" editable=\"editable\" placeholder=\"Select a Brand\"&gt;&lt;/p-dropdown&gt;\n&lt;p&gt;Selected Car: {{selectedCar||'none'}}&lt;/p&gt;\n\n&lt;h3&gt;Content with Filters&lt;/h3&gt;\n&lt;p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar2\" [style]=\"&#123;'width':'150px'&#125;\" filter=\"filter\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"width:24px;position:absolute;top:1px;left:5px\"/&gt;\n            &lt;div style=\"font-size:14px;float:right;margin-top:4px\"&gt;{{car.label}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dropdown&gt;\n&lt;p&gt;Selected Car: {{selectedCar2||'none'}}&lt;/p&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DropdownDemo &#123;\n\n    cities: SelectItem[];\n\n    selectedCity: any;\n\n    cars: SelectItem[];\n\n    selectedCar: string;\n    \n    selectedCar2: string = 'BMW';\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;);\n        this.cities.push(&#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;);\n        this.cities.push(&#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;);\n        this.cities.push(&#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;);\n\n        this.cars = [];\n        this.cars.push(&#123;label: 'Audi', value: 'Audi'&#125;);\n        this.cars.push(&#123;label: 'BMW', value: 'BMW'&#125;);\n        this.cars.push(&#123;label: 'Fiat', value: 'Fiat'&#125;);\n        this.cars.push(&#123;label: 'Ford', value: 'Ford'&#125;);\n        this.cars.push(&#123;label: 'Honda', value: 'Honda'&#125;);\n        this.cars.push(&#123;label: 'Jaguar', value: 'Jaguar'&#125;);\n        this.cars.push(&#123;label: 'Mercedes', value: 'Mercedes'&#125;);\n        this.cars.push(&#123;label: 'Renault', value: 'Renault'&#125;);\n        this.cars.push(&#123;label: 'VW', value: 'VW'&#125;);\n        this.cars.push(&#123;label: 'Volvo', value: 'Volvo'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dropdown/dropdowndemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDemoModule", function() { return DropdownDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdowndemo__ = __webpack_require__("../../../../../src/app/showcase/components/dropdown/dropdowndemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdowndemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/dropdown/dropdowndemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dropdown_dropdown__ = __webpack_require__("../../../../../src/app/components/dropdown/dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DropdownDemoModule = (function () {
    function DropdownDemoModule() {
    }
    return DropdownDemoModule;
}());
DropdownDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__dropdowndemo_routing_module__["a" /* DropdownDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_dropdown_dropdown__["a" /* DropdownModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dropdowndemo__["a" /* DropdownDemo */]
        ]
    })
], DropdownDemoModule);

//# sourceMappingURL=dropdowndemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dropdown/dropdowndemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDemo; });
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

var DropdownDemo = (function () {
    function DropdownDemo() {
        this.selectedCar2 = 'BMW';
        this.cities = [];
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
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
    return DropdownDemo;
}());
DropdownDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dropdown/dropdowndemo.html"),
    }),
    __metadata("design:paramtypes", [])
], DropdownDemo);

//# sourceMappingURL=dropdowndemo.js.map

/***/ })

});
//# sourceMappingURL=dropdowndemo.module.chunk.js.map