webpackJsonp(["chipsdemo.module"],{

/***/ "../../../../../src/app/components/chips/chips.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CHIPS_VALUE_ACCESSOR */
/* unused harmony export Chips */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CHIPS_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return Chips; }),
    multi: true
};
var Chips = (function () {
    function Chips(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.allowDuplicate = true;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Chips.prototype.ngAfterContentInit = function () {
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
    Chips.prototype.writeValue = function (value) {
        this.value = value;
    };
    Chips.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Chips.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Chips.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Chips.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    Chips.prototype.onFocus = function () {
        this.focus = true;
    };
    Chips.prototype.onBlur = function () {
        this.focus = false;
        this.onModelTouched();
    };
    Chips.prototype.removeItem = function (event, index) {
        if (this.disabled) {
            return;
        }
        var removedItem = this.value[index];
        this.value = this.value.filter(function (val, i) { return i != index; });
        this.onModelChange(this.value);
        this.onRemove.emit({
            originalEvent: event,
            value: removedItem
        });
    };
    Chips.prototype.addItem = function (event, item) {
        this.value = this.value || [];
        if (item && item.trim().length && (!this.max || this.max > item.length)) {
            if (this.allowDuplicate || !this.value.includes(item)) {
                this.value = this.value.concat([item]);
                this.onModelChange(this.value);
                this.onAdd.emit({
                    originalEvent: event,
                    value: item
                });
            }
        }
    };
    Chips.prototype.onKeydown = function (event, inputEL) {
        switch (event.which) {
            //backspace
            case 8:
                if (inputEL.value.length === 0 && this.value && this.value.length > 0) {
                    this.value = this.value.slice();
                    var removedItem = this.value.pop();
                    this.onModelChange(this.value);
                    this.onRemove.emit({
                        originalEvent: event,
                        value: removedItem
                    });
                }
                break;
            //enter
            case 13:
                this.addItem(event, inputEL.value);
                inputEL.value = '';
                event.preventDefault();
                break;
            case 9:
                if (this.addOnTab && inputEL.value !== '') {
                    this.addItem(event, inputEL.value);
                    inputEL.value = '';
                    event.preventDefault();
                }
                break;
            default:
                if (this.max && this.value && this.max === this.value.length) {
                    event.preventDefault();
                }
                break;
        }
    };
    Object.defineProperty(Chips.prototype, "maxedOut", {
        get: function () {
            return this.max && this.value && this.max === this.value.length;
        },
        enumerable: true,
        configurable: true
    });
    return Chips;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Chips.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Chips.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], Chips.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], Chips.prototype, "onAdd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], Chips.prototype, "onRemove", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Chips.prototype, "field", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Chips.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Chips.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Chips.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Chips.prototype, "inputId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], Chips.prototype, "allowDuplicate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Chips.prototype, "inputStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Chips.prototype, "inputStyleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], Chips.prototype, "addOnTab", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["f" /* PrimeTemplate */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _c || Object)
], Chips.prototype, "templates", void 0);
Chips = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-chips',
        template: "\n        <div [ngClass]=\"'ui-chips ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul [ngClass]=\"{'ui-inputtext ui-state-default ui-corner-all':true,'ui-state-focus':focus,'ui-state-disabled':disabled}\" (click)=\"inputtext.focus()\">\n                <li #token *ngFor=\"let item of value; let i = index;\" class=\"ui-chips-token ui-state-highlight ui-corner-all\">\n                    <span *ngIf=\"!disabled\" class=\"ui-chips-token-icon fa fa-fw fa-close\" (click)=\"removeItem($event,i)\"></span>\n                    <span *ngIf=\"!itemTemplate\" class=\"ui-chips-token-label\">{{field ? resolveFieldData(item,field) : item}}</span>\n                    <ng-template *ngIf=\"itemTemplate\" [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\"></ng-template>\n                </li>\n                <li class=\"ui-chips-input-token\">\n                    <input #inputtext type=\"text\" [attr.id]=\"inputId\" [attr.placeholder]=\"placeholder\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event,inputtext)\" \n                        (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"maxedOut||disabled\" [disabled]=\"disabled\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\">\n                </li>\n            </ul>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], CHIPS_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]) === "function" && _e || Object])
], Chips);

var ChipsModule = (function () {
    function ChipsModule() {
    }
    return ChipsModule;
}());
ChipsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__inputtext_inputtext__["a" /* InputTextModule */], __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */]],
        exports: [Chips, __WEBPACK_IMPORTED_MODULE_3__inputtext_inputtext__["a" /* InputTextModule */], __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */]],
        declarations: [Chips]
    })
], ChipsModule);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chips.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/chips/chipsdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chipsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chips/chipsdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChipsDemoRoutingModule = (function () {
    function ChipsDemoRoutingModule() {
    }
    return ChipsDemoRoutingModule;
}());
ChipsDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__chipsdemo__["a" /* ChipsDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], ChipsDemoRoutingModule);

//# sourceMappingURL=chipsdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/chips/chipsdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Chips</span>\n        <span>Chips is used to enter multiple values on an inputfield.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-chips [(ngModel)]=\"values1\"></p-chips>\n    \n    <h3>Template</h3>\n    <p-chips [(ngModel)]=\"values2\">\n        <ng-template let-item pTemplate=\"item\">\n            {{item}} - (active) <i class=\"fa fa-user\" style=\"margin-right:2em\"></i>\n        </ng-template>\n    </p-chips>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ChipsModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Chips requires an array as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips [(ngModel)]=\"values\"&gt;&lt;/p-chips&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    values: string[];\n\n&#125;\n</code>\n</pre>\n            <h3>Model Driven Forms</h3>\n            <p>Chips can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips formControlName=\"cities\"&gt;&lt;/p-chips&gt;\n</code>\n</pre>\n\n            <h3>Custom Content</h3>\n            <p>A chip is customized using a ng-template element where the value is passed as the implicit variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips [(ngModel)]=\"values\"&gt;\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\n        &#123;&#123;item&#125;&#125; - (active) &lt;i class=\"fa fa-user\"&gt;&lt;/i&gt;\n    &lt;/ng-template&gt;\n&lt;/p-chips&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>field</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the property to display on a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of entries allowed.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Advisory information to display on input.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>allowDuplicate</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to allow duplicate values or not.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>addOnTab</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to add an item on tab key press.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onAdd</td>\n                            <td>originalEvent: Browser event <br >\n                                value: Added item value\n                            </td>\n                            <td>Callback to invoke when a value is added.</td>\n                        </tr>\n                        <tr>\n                            <td>onRemove</td>\n                            <td>originalEvent: Browser event <br >\n                                value: Added item value\n                            </td>\n                            <td>Callback to invoke when a value is removed.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-chips</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token</td>\n                            <td>Chip element container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token-icon</td>\n                            <td>Icon of a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token-label</td>\n                            <td>Label of a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-input-token</td>\n                            <td>Container of input element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chips\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-chips [(ngModel)]=\"values1\" &gt;&lt;/p-chips&gt;\n\n&lt;h3&gt;ng-template&lt;/h3&gt;\n&lt;p-chips [(ngModel)]=\"values2\"&gt;\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\n        &#123;&#123;item&#125;&#125; - (active) &lt;i class=\"fa fa-user\" style=\"margin-right:2em\"&gt;&lt;/i&gt;\n    &lt;/ng-template&gt;\n&lt;/p-chips&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ChipsDemo &#123;\n\n    values1: string[];\n    \n    values2: string[];\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chips/chipsdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemoModule", function() { return ChipsDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chipsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chips/chipsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chipsdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/chips/chipsdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_chips_chips__ = __webpack_require__("../../../../../src/app/components/chips/chips.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChipsDemoModule = (function () {
    function ChipsDemoModule() {
    }
    return ChipsDemoModule;
}());
ChipsDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__chipsdemo_routing_module__["a" /* ChipsDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_chips_chips__["a" /* ChipsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__chipsdemo__["a" /* ChipsDemo */]
        ]
    })
], ChipsDemoModule);

//# sourceMappingURL=chipsdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/chips/chipsdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChipsDemo = (function () {
    function ChipsDemo() {
    }
    return ChipsDemo;
}());
ChipsDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/chips/chipsdemo.html")
    })
], ChipsDemo);

//# sourceMappingURL=chipsdemo.js.map

/***/ })

});
//# sourceMappingURL=chipsdemo.module.chunk.js.map