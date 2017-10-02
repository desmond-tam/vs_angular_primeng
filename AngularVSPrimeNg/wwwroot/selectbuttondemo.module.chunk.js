webpackJsonp(["selectbuttondemo.module"],{

/***/ "../../../../../src/app/components/selectbutton/selectbutton.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SELECTBUTTON_VALUE_ACCESSOR */
/* unused harmony export SelectButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SELECTBUTTON_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return SelectButton; }),
    multi: true
};
var SelectButton = (function () {
    function SelectButton() {
        this.onOptionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    SelectButton.prototype.writeValue = function (value) {
        this.value = value;
    };
    SelectButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    SelectButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    SelectButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    SelectButton.prototype.onItemClick = function (event, option, checkbox, index) {
        if (this.disabled) {
            return;
        }
        checkbox.focus();
        if (this.multiple) {
            var itemIndex_1 = this.findItemIndex(option);
            if (itemIndex_1 != -1)
                this.value = this.value.filter(function (val, i) { return i != itemIndex_1; });
            else
                this.value = (this.value || []).concat([option.value]);
        }
        else {
            this.value = option.value;
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    SelectButton.prototype.onFocus = function (event) {
        this.focusedItem = event.target;
    };
    SelectButton.prototype.onBlur = function (event) {
        this.focusedItem = null;
        this.onModelTouched();
    };
    SelectButton.prototype.isSelected = function (option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return option.value == this.value;
    };
    SelectButton.prototype.findItemIndex = function (option) {
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    return SelectButton;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], SelectButton.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], SelectButton.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SelectButton.prototype, "multiple", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SelectButton.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SelectButton.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SelectButton.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], SelectButton.prototype, "onOptionClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], SelectButton.prototype, "onChange", void 0);
SelectButton = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-selectButton',
        template: "\n        <div [ngClass]=\"'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + options.length\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div *ngFor=\"let option of options; let i = index\" class=\"ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}\"\n                [ngClass]=\"{'ui-state-active':isSelected(option), 'ui-state-disabled':disabled, 'ui-state-focus': cbox == focusedItem}\" (click)=\"onItemClick($event,option,cbox,i)\">\n                <span class=\"ui-button-text ui-clickable\">{{option.label}}</span>\n                <div class=\"ui-helper-hidden-accessible\">\n                    <input #cbox type=\"checkbox\" [checked]=\"isSelected(option)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [attr.tabindex]=\"tabindex\" [attr.disabled]=\"disabled\">\n                </div>\n            </div>\n        </div>\n    ",
        providers: [SELECTBUTTON_VALUE_ACCESSOR]
    })
], SelectButton);

var SelectButtonModule = (function () {
    function SelectButtonModule() {
    }
    return SelectButtonModule;
}());
SelectButtonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [SelectButton],
        declarations: [SelectButton]
    })
], SelectButtonModule);

var _a, _b;
//# sourceMappingURL=selectbutton.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectButtonDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectbuttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectButtonDemoRoutingModule = (function () {
    function SelectButtonDemoRoutingModule() {
    }
    return SelectButtonDemoRoutingModule;
}());
SelectButtonDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__selectbuttondemo__["a" /* SelectButtonDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], SelectButtonDemoRoutingModule);

//# sourceMappingURL=selectbuttondemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">SelectButton</span>\n        <span>SelectButton is used to choose single or multiple items from a list using buttons.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single</h3>\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n\n    <p>Selected Type: {{selectedType}}</p>\n\n    <h3>Multiple</h3>\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"></p-selectButton>\n    <p>Selected Types: <span *ngFor=\"let type of selectedTypes\">{{type}} </span></p>\n\n    <hr />\n\n    <button type=\"button\" (click)=\"clear()\" pButton icon=\"fa-close\" label=\"Clear\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectButtonModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined using ngModel and selectbutton requires a collection of options \n                where each option should follow the SelectItem interface that defines label-value properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" [(ngModel)]=\"selectedCity\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCity: string;\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Multiple</h3>\n            <p>SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. \n                In multiple case, model property should be an array instance that is not null or undefined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" [(ngModel)]=\"selectedCities\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCities: string[] = [];\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>SelectButton can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" formControlName=\"selectedCity\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of selectitems to display as the available options.</td>\n                        </tr>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, allows selecting multiple values.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.value: single value or an array of values that are selected\n                            </td>\n                            <td>Callback to invoke when value changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onOptionClick</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.option: SelectItem instance of the clicked button<br />\n                                event.index: Index of the clicked button\n                            </td>\n                            <td>Callback to invoke when a button is clicked.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/selectbutton\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"&gt;&lt;/p-selectButton&gt;\n\n&lt;p&gt;Selected Type: {{selectedType}}&lt;/p&gt;\n\n&lt;h3&gt;Multiple&lt;/h3&gt;\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"&gt;&lt;/p-selectButton&gt;\n&lt;p&gt;Selected Types: &lt;span *ngFor=\"let type of selectedTypes\"&gt;{{type}} &lt;/span&gt;&lt;/p&gt;\n\n&lt;hr /&gt;\n\n&lt;button type=\"button\" (click)=\"clear()\" pButton icon=\"fa-close\" label=\"Clear\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SelectButtonDemo &#123;\n\n    types: SelectItem[];\n\n    selectedType: string;\n\n    selectedTypes: string[] = ['Apartment','Studio'];\n\n    constructor() &#123;\n        this.types = [];\n        this.types.push(&#123;label: 'Apartment', value: 'Apartment'&#125;);\n        this.types.push(&#123;label: 'House', value: 'House'&#125;);\n        this.types.push(&#123;label: 'Studio', value: 'Studio'&#125;);\n    &#125;\n\n    clear() &#123;\n        this.selectedType = null;\n        this.selectedTypes = [];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButtonDemoModule", function() { return SelectButtonDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectbuttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectbuttondemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_selectbutton_selectbutton__ = __webpack_require__("../../../../../src/app/components/selectbutton/selectbutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SelectButtonDemoModule = (function () {
    function SelectButtonDemoModule() {
    }
    return SelectButtonDemoModule;
}());
SelectButtonDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__selectbuttondemo_routing_module__["a" /* SelectButtonDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_selectbutton_selectbutton__["a" /* SelectButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__selectbuttondemo__["a" /* SelectButtonDemo */]
        ]
    })
], SelectButtonDemoModule);

//# sourceMappingURL=selectbuttondemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectButtonDemo; });
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

var SelectButtonDemo = (function () {
    function SelectButtonDemo() {
        this.selectedTypes = ['Apartment', 'Studio'];
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
    }
    SelectButtonDemo.prototype.clear = function () {
        this.selectedType = null;
        this.selectedTypes = [];
    };
    return SelectButtonDemo;
}());
SelectButtonDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.html")
    }),
    __metadata("design:paramtypes", [])
], SelectButtonDemo);

//# sourceMappingURL=selectbuttondemo.js.map

/***/ })

});
//# sourceMappingURL=selectbuttondemo.module.chunk.js.map