webpackJsonp(["spinnerdemo.module"],{

/***/ "../../../../../src/app/components/spinner/spinner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SPINNER_VALUE_ACCESSOR */
/* unused harmony export Spinner */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SPINNER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return Spinner; }),
    multi: true
};
var Spinner = (function () {
    function Spinner(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.step = 1;
        this.decimalSeparator = '.';
        this.thousandSeparator = ',';
        this.formatInput = true;
        this.type = 'text';
        this.valueAsString = '';
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.keyPattern = /[0-9\+\-]/;
    }
    Spinner.prototype.ngOnInit = function () {
        if (Math.floor(this.step) === 0) {
            this.precision = this.step.toString().split(/[,]|[.]/)[1].length;
        }
    };
    Spinner.prototype.repeat = function (event, interval, dir) {
        var _this = this;
        var i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(function () {
            _this.repeat(event, 40, dir);
        }, i);
        this.spin(event, dir);
    };
    Spinner.prototype.spin = function (event, dir) {
        var step = this.step * dir;
        var currentValue = this.value || 0;
        var newValue = null;
        if (this.precision)
            this.value = parseFloat(this.toFixed(currentValue + step, this.precision));
        else
            this.value = currentValue + step;
        if (this.maxlength !== undefined && this.value.toString().length > this.maxlength) {
            this.value = currentValue;
        }
        if (this.min !== undefined && this.value < this.min) {
            this.value = this.min;
        }
        if (this.max !== undefined && this.value > this.max) {
            this.value = this.max;
        }
        this.formatValue();
        this.onModelChange(this.value);
        this.onChange.emit(event);
    };
    Spinner.prototype.toFixed = function (value, precision) {
        var power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
    };
    Spinner.prototype.onUpButtonMousedown = function (event, input) {
        if (!this.disabled) {
            input.focus();
            this.repeat(event, null, 1);
            this.updateFilledState();
        }
    };
    Spinner.prototype.onUpButtonMouseup = function (event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    };
    Spinner.prototype.onUpButtonMouseleave = function (event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    };
    Spinner.prototype.onDownButtonMousedown = function (event, input) {
        if (!this.disabled) {
            input.focus();
            this.repeat(event, null, -1);
            this.updateFilledState();
        }
    };
    Spinner.prototype.onDownButtonMouseup = function (event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    };
    Spinner.prototype.onDownButtonMouseleave = function (event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    };
    Spinner.prototype.onInputKeydown = function (event) {
        if (event.which == 38) {
            this.spin(event, 1);
            event.preventDefault();
        }
        else if (event.which == 40) {
            this.spin(event, -1);
            event.preventDefault();
        }
    };
    Spinner.prototype.onInputKeyPress = function (event) {
        var inputChar = String.fromCharCode(event.charCode);
        if (!this.keyPattern.test(inputChar) && inputChar != this.decimalSeparator && event.keyCode != 9 && event.keyCode != 8 && event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46) {
            event.preventDefault();
        }
    };
    Spinner.prototype.onInput = function (event, inputValue) {
        this.value = this.parseValue(inputValue);
        this.formatValue();
        this.onModelChange(this.value);
        this.updateFilledState();
    };
    Spinner.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    Spinner.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    Spinner.prototype.parseValue = function (val) {
        var value;
        if (this.formatInput) {
            val = val.split(this.thousandSeparator).join('');
        }
        if (val.trim() === '') {
            value = null;
        }
        else {
            if (this.precision) {
                value = parseFloat(val.replace(',', '.'));
            }
            else {
                value = parseInt(val);
            }
            if (!isNaN(value)) {
                if (this.max !== undefined && value > this.max) {
                    value = this.max;
                }
                if (this.min !== undefined && value < this.min) {
                    value = this.min;
                }
            }
            else {
                value = null;
            }
        }
        return value;
    };
    Spinner.prototype.formatValue = function () {
        if (this.value !== null && this.value !== undefined) {
            var textValue = String(this.value).replace('.', this.decimalSeparator);
            if (this.formatInput) {
                textValue = textValue.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandSeparator);
            }
            this.valueAsString = textValue;
        }
        else {
            this.valueAsString = '';
        }
    };
    Spinner.prototype.handleChange = function (event) {
        this.onChange.emit(event);
    };
    Spinner.prototype.clearTimer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    Spinner.prototype.writeValue = function (value) {
        this.value = value;
        this.formatValue();
        this.updateFilledState();
    };
    Spinner.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Spinner.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Spinner.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Spinner.prototype.updateFilledState = function () {
        this.filled = (this.value !== undefined && this.value != null);
    };
    return Spinner;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], Spinner.prototype, "onChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], Spinner.prototype, "onFocus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], Spinner.prototype, "onBlur", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Spinner.prototype, "step", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Spinner.prototype, "min", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Spinner.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Spinner.prototype, "maxlength", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Spinner.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Spinner.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Spinner.prototype, "inputId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], Spinner.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], Spinner.prototype, "readonly", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Spinner.prototype, "decimalSeparator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Spinner.prototype, "thousandSeparator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Spinner.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], Spinner.prototype, "formatInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Spinner.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], Spinner.prototype, "required", void 0);
Spinner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-spinner',
        template: "\n        <span class=\"ui-spinner ui-widget ui-corner-all\">\n            <input #in [attr.type]=\"type\" [attr.id]=\"inputId\" class=\"ui-spinner-input\" [value]=\"valueAsString\" class=\"ui-inputtext ui-widget ui-state-default ui-corner-all\"\n            [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [attr.placeholder]=\"placeholder\" [disabled]=\"disabled\" [readonly]=\"readonly\" [attr.required]=\"required\"\n            (keydown)=\"onInputKeydown($event)\" (keyup)=\"onInput($event,in.value)\" (keypress)=\"onInputKeyPress($event)\" (blur)=\"onInputBlur($event)\" (change)=\"handleChange($event)\" (focus)=\"onInputFocus($event)\">\n            <button type=\"button\" [ngClass]=\"{'ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}\" [disabled]=\"disabled\"\n                (mouseleave)=\"onUpButtonMouseleave($event)\" (mousedown)=\"onUpButtonMousedown($event,in)\" (mouseup)=\"onUpButtonMouseup($event)\">\n                <span class=\"fa fa-caret-up ui-clickable\"></span>\n            </button>\n            <button type=\"button\" [ngClass]=\"{'ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}\" [disabled]=\"disabled\"\n                (mouseleave)=\"onDownButtonMouseleave($event)\" (mousedown)=\"onDownButtonMousedown($event,in)\" (mouseup)=\"onDownButtonMouseup($event)\">\n                <span class=\"fa fa-caret-down ui-clickable\"></span>\n            </button>\n        </span>\n    ",
        host: {
            '[class.ui-inputwrapper-filled]': 'filled',
            '[class.ui-inputwrapper-focus]': 'focus'
        },
        providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */], SPINNER_VALUE_ACCESSOR],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]) === "function" && _e || Object])
], Spinner);

var SpinnerModule = (function () {
    function SpinnerModule() {
    }
    return SpinnerModule;
}());
SpinnerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__inputtext_inputtext__["a" /* InputTextModule */]],
        exports: [Spinner],
        declarations: [Spinner]
    })
], SpinnerModule);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/spinnerdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinnerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/spinner/spinnerdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpinnerDemoRoutingModule = (function () {
    function SpinnerDemoRoutingModule() {
    }
    return SpinnerDemoRoutingModule;
}());
SpinnerDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__spinnerdemo__["a" /* SpinnerDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], SpinnerDemoRoutingModule);

//# sourceMappingURL=spinnerdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/spinnerdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Spinner</span>\n        <span>Spinner is an input component to provide a numerical input.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val1\"></p-spinner>\n\n    <h3>Min/Max</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val2\" [min]=\"0\" [max]=\"100\"></p-spinner>\n\n    <h3>Step</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val3\" [step]=\"0.25\"></p-spinner>\n    \n    <h3>Disabled</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val4\" [disabled]=\"true\"></p-spinner>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SpinnerModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined using standard ngModel directive.</p>     \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Spinner can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner formControlName=\"age\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Min-Max</h3>\n            <p>Boundaries are specified with min and max attributes.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Step</h3>\n            <p>Step factor is 1 by default and can be customized with step option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\" [step]=\"0.25\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>step</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Step factor to increment/decrement the value.</td>\n                        </tr>\n                        <tr>\n                            <td>min</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Mininum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Hint text for the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be read-only.</td>\n                        </tr>\n                        <tr>\n                            <td>maxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of character allows in the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Size of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>decimalSeparator</td>\n                            <td>string</td>\n                            <td>.</td>\n                            <td>Separator character for decimals.</td>\n                        </tr>\n                        <tr>\n                            <td>thousandSeparator</td>\n                            <td>string</td>\n                            <td>,</td>\n                            <td>Separator character for thousands.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>formatInput</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When present, formats the user input.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>text</td>\n                            <td>Type of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Blur event</td>\n                            <td>Callback to invoke when input loses focus.</td>\n                        </tr>       \n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input gets focus.</td>\n                        </tr>                 \n                        <tr>\n                            <td>onChange</td>\n                            <td>event: Change event</td>\n                            <td>Callback to invoke on value change.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-spinner</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-spinner-up</td>\n                            <td>Up element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-spinner-down</td>\n                            <td>Down button</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/spinner\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val1\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Min/Max&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val2\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Step&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val3\" [step]=\"0.25\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Disabled&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val4\" [disabled]=\"true\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SpinnerDemo &#123;\n\n    val1: number;\n\n    val2: number;\n\n    val3: number;\n\n    val4: number = 100;\n    \n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/spinnerdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemoModule", function() { return SpinnerDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinnerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/spinner/spinnerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinnerdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/spinner/spinnerdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_spinner_spinner__ = __webpack_require__("../../../../../src/app/components/spinner/spinner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



;





var SpinnerDemoModule = (function () {
    function SpinnerDemoModule() {
    }
    return SpinnerDemoModule;
}());
SpinnerDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__spinnerdemo_routing_module__["a" /* SpinnerDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_spinner_spinner__["a" /* SpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__spinnerdemo__["a" /* SpinnerDemo */]
        ]
    })
], SpinnerDemoModule);

//# sourceMappingURL=spinnerdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/spinnerdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnerDemo = (function () {
    function SpinnerDemo() {
        this.val4 = 100;
    }
    return SpinnerDemo;
}());
SpinnerDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/spinner/spinnerdemo.html")
    })
], SpinnerDemo);

//# sourceMappingURL=spinnerdemo.js.map

/***/ })

});
//# sourceMappingURL=spinnerdemo.module.chunk.js.map