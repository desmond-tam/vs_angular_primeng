webpackJsonp(["colorpickerdemo.module"],{

/***/ "../../../../../src/app/components/colorpicker/colorpicker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COLORPICKER_VALUE_ACCESSOR */
/* unused harmony export ColorPicker */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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





var COLORPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return ColorPicker; }),
    multi: true
};
var ColorPicker = (function () {
    function ColorPicker(el, domHandler, renderer, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.cd = cd;
        this.format = 'hex';
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.defaultColor = 'ff0000';
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    ColorPicker.prototype.ngAfterViewChecked = function () {
        if (this.shown) {
            this.onShow();
            this.shown = false;
        }
    };
    ColorPicker.prototype.onHueMousedown = function (event) {
        if (this.disabled) {
            return;
        }
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        this.hueDragging = true;
        this.pickHue(event);
    };
    ColorPicker.prototype.pickHue = function (event) {
        var top = this.hueViewChild.nativeElement.getBoundingClientRect().top + document.body.scrollTop;
        this.value = this.validateHSB({
            h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),
            s: 100,
            b: 100
        });
        this.updateColorSelector();
        this.updateUI();
        this.updateModel();
        this.onChange.emit({ originalEvent: event, value: this.value });
    };
    ColorPicker.prototype.onColorMousedown = function (event) {
        if (this.disabled) {
            return;
        }
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        this.colorDragging = true;
        this.pickColor(event);
    };
    ColorPicker.prototype.pickColor = function (event) {
        var rect = this.colorSelectorViewChild.nativeElement.getBoundingClientRect();
        var top = rect.top + document.body.scrollTop;
        var left = rect.left + document.body.scrollLeft;
        var saturation = Math.floor(100 * (Math.max(0, Math.min(150, (event.pageX - left)))) / 150);
        var brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150);
        this.value = this.validateHSB({
            h: this.value.h,
            s: saturation,
            b: brightness
        });
        this.updateUI();
        this.updateModel();
        this.onChange.emit({ originalEvent: event, value: this.getValueToUpdate() });
    };
    ColorPicker.prototype.getValueToUpdate = function () {
        var val;
        switch (this.format) {
            case 'hex':
                val = '#' + this.HSBtoHEX(this.value);
                break;
            case 'rgb':
                val = this.HSBtoRGB(this.value);
                break;
            case 'hsb':
                val = this.value;
                break;
        }
        return val;
    };
    ColorPicker.prototype.updateModel = function () {
        this.onModelChange(this.getValueToUpdate());
    };
    ColorPicker.prototype.writeValue = function (value) {
        if (value) {
            switch (this.format) {
                case 'hex':
                    this.value = this.HEXtoHSB(value);
                    break;
                case 'rgb':
                    this.value = this.RGBtoHSB(value);
                    break;
                case 'hsb':
                    this.value = value;
                    break;
            }
        }
        else {
            this.value = this.HEXtoHSB(this.defaultColor);
        }
        this.updateColorSelector();
        this.updateUI();
    };
    ColorPicker.prototype.updateColorSelector = function () {
        this.colorSelectorViewChild.nativeElement.style.backgroundColor = '#' + this.HSBtoHEX(this.value);
    };
    ColorPicker.prototype.updateUI = function () {
        this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + 'px';
        this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + 'px';
        this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - (150 * this.value.h / 360)) + 'px';
        this.inputBgColor = '#' + this.HSBtoHEX(this.value);
    };
    ColorPicker.prototype.onInputFocus = function () {
        this.onModelTouched();
    };
    ColorPicker.prototype.show = function () {
        this.panelViewChild.nativeElement.style.zIndex = String(++__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */].zindex);
        this.panelVisible = true;
        this.shown = true;
    };
    ColorPicker.prototype.hide = function () {
        this.panelVisible = false;
        this.unbindDocumentClickListener();
    };
    ColorPicker.prototype.onShow = function () {
        this.alignPanel();
        this.bindDocumentClickListener();
    };
    ColorPicker.prototype.alignPanel = function () {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.panelViewChild.nativeElement, this.inputViewChild.nativeElement);
        else
            this.domHandler.relativePosition(this.panelViewChild.nativeElement, this.inputViewChild.nativeElement);
    };
    ColorPicker.prototype.onInputClick = function () {
        this.selfClick = true;
        this.togglePanel();
    };
    ColorPicker.prototype.togglePanel = function () {
        if (!this.panelVisible)
            this.show();
        else
            this.hide();
    };
    ColorPicker.prototype.onInputKeydown = function (event) {
        switch (event.which) {
            //space
            case 32:
                this.togglePanel();
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide();
                break;
        }
    };
    ColorPicker.prototype.onPanelClick = function () {
        this.selfClick = true;
    };
    ColorPicker.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ColorPicker.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    ColorPicker.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    ColorPicker.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.selfClick) {
                    _this.panelVisible = false;
                    _this.unbindDocumentClickListener();
                }
                _this.selfClick = false;
                _this.cd.markForCheck();
            });
        }
    };
    ColorPicker.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    ColorPicker.prototype.bindDocumentMousemoveListener = function () {
        var _this = this;
        if (!this.documentMousemoveListener) {
            this.documentMousemoveListener = this.renderer.listen('document', 'mousemove', function (event) {
                if (_this.colorDragging) {
                    _this.pickColor(event);
                }
                if (_this.hueDragging) {
                    _this.pickHue(event);
                }
            });
        }
    };
    ColorPicker.prototype.unbindDocumentMousemoveListener = function () {
        if (this.documentMousemoveListener) {
            this.documentMousemoveListener();
            this.documentMousemoveListener = null;
        }
    };
    ColorPicker.prototype.bindDocumentMouseupListener = function () {
        var _this = this;
        if (!this.documentMouseupListener) {
            this.documentMouseupListener = this.renderer.listen('document', 'mouseup', function () {
                _this.colorDragging = false;
                _this.hueDragging = false;
                _this.unbindDocumentMousemoveListener();
                _this.unbindDocumentMouseupListener();
            });
        }
    };
    ColorPicker.prototype.unbindDocumentMouseupListener = function () {
        if (this.documentMouseupListener) {
            this.documentMouseupListener();
            this.documentMouseupListener = null;
        }
    };
    ColorPicker.prototype.validateHSB = function (hsb) {
        return {
            h: Math.min(360, Math.max(0, hsb.h)),
            s: Math.min(100, Math.max(0, hsb.s)),
            b: Math.min(100, Math.max(0, hsb.b))
        };
    };
    ColorPicker.prototype.validateRGB = function (rgb) {
        return {
            r: Math.min(255, Math.max(0, rgb.r)),
            g: Math.min(255, Math.max(0, rgb.g)),
            b: Math.min(255, Math.max(0, rgb.b))
        };
    };
    ColorPicker.prototype.validateHEX = function (hex) {
        var len = 6 - hex.length;
        if (len > 0) {
            var o = [];
            for (var i = 0; i < len; i++) {
                o.push('0');
            }
            o.push(hex);
            hex = o.join('');
        }
        return hex;
    };
    ColorPicker.prototype.HEXtoRGB = function (hex) {
        var hexValue = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return { r: hexValue >> 16, g: (hexValue & 0x00FF00) >> 8, b: (hexValue & 0x0000FF) };
    };
    ColorPicker.prototype.HEXtoHSB = function (hex) {
        return this.RGBtoHSB(this.HEXtoRGB(hex));
    };
    ColorPicker.prototype.RGBtoHSB = function (rgb) {
        var hsb = {
            h: 0,
            s: 0,
            b: 0
        };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        if (max != 0) {
        }
        hsb.s = max != 0 ? 255 * delta / max : 0;
        if (hsb.s != 0) {
            if (rgb.r == max) {
                hsb.h = (rgb.g - rgb.b) / delta;
            }
            else if (rgb.g == max) {
                hsb.h = 2 + (rgb.b - rgb.r) / delta;
            }
            else {
                hsb.h = 4 + (rgb.r - rgb.g) / delta;
            }
        }
        else {
            hsb.h = -1;
        }
        hsb.h *= 60;
        if (hsb.h < 0) {
            hsb.h += 360;
        }
        hsb.s *= 100 / 255;
        hsb.b *= 100 / 255;
        return hsb;
    };
    ColorPicker.prototype.HSBtoRGB = function (hsb) {
        var rgb = {
            r: null, g: null, b: null
        };
        var h = Math.round(hsb.h);
        var s = Math.round(hsb.s * 255 / 100);
        var v = Math.round(hsb.b * 255 / 100);
        if (s == 0) {
            rgb = {
                r: v,
                g: v,
                b: v
            };
        }
        else {
            var t1 = v;
            var t2 = (255 - s) * v / 255;
            var t3 = (t1 - t2) * (h % 60) / 60;
            if (h == 360)
                h = 0;
            if (h < 60) {
                rgb.r = t1;
                rgb.b = t2;
                rgb.g = t2 + t3;
            }
            else if (h < 120) {
                rgb.g = t1;
                rgb.b = t2;
                rgb.r = t1 - t3;
            }
            else if (h < 180) {
                rgb.g = t1;
                rgb.r = t2;
                rgb.b = t2 + t3;
            }
            else if (h < 240) {
                rgb.b = t1;
                rgb.r = t2;
                rgb.g = t1 - t3;
            }
            else if (h < 300) {
                rgb.b = t1;
                rgb.g = t2;
                rgb.r = t2 + t3;
            }
            else if (h < 360) {
                rgb.r = t1;
                rgb.g = t2;
                rgb.b = t1 - t3;
            }
            else {
                rgb.r = 0;
                rgb.g = 0;
                rgb.b = 0;
            }
        }
        return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
    };
    ColorPicker.prototype.RGBtoHEX = function (rgb) {
        var hex = [
            rgb.r.toString(16),
            rgb.g.toString(16),
            rgb.b.toString(16)
        ];
        for (var key in hex) {
            if (hex[key].length == 1) {
                hex[key] = '0' + hex[key];
            }
        }
        return hex.join('');
    };
    ColorPicker.prototype.HSBtoHEX = function (hsb) {
        return this.RGBtoHEX(this.HSBtoRGB(hsb));
    };
    ColorPicker.prototype.ngOnDestroy = function () {
        this.unbindDocumentClickListener();
    };
    return ColorPicker;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ColorPicker.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ColorPicker.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ColorPicker.prototype, "inline", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ColorPicker.prototype, "format", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ColorPicker.prototype, "appendTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ColorPicker.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ColorPicker.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ColorPicker.prototype, "inputId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ColorPicker.prototype, "onChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('panel'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], ColorPicker.prototype, "panelViewChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('colorSelector'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], ColorPicker.prototype, "colorSelectorViewChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('colorHandle'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object)
], ColorPicker.prototype, "colorHandleViewChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('hue'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object)
], ColorPicker.prototype, "hueViewChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('hueHandle'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _f || Object)
], ColorPicker.prototype, "hueHandleViewChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('input'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _g || Object)
], ColorPicker.prototype, "inputViewChild", void 0);
ColorPicker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-colorPicker',
        template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'ui-colorpicker ui-widget':true,'ui-colorpicker-overlay':!inline,'ui-colorpicker-dragging':colorDragging||hueDragging}\">\n            <input #input type=\"text\" *ngIf=\"!inline\" class=\"ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all\" readonly=\"readonly\" [ngClass]=\"{'ui-state-disabled': disabled}\"\n                (focus)=\"onInputFocus()\" (click)=\"onInputClick()\" (keydown)=\"onInputKeydown($event)\" [attr.id]=\"inputId\" [attr.tabindex]=\"tabindex\" [disabled]=\"disabled\"\n                [style.backgroundColor]=\"inputBgColor\">\n            <div #panel [ngClass]=\"{'ui-colorpicker-panel ui-corner-all': true, 'ui-colorpicker-overlay-panel ui-shadow':!inline, 'ui-state-disabled': disabled}\" (click)=\"onPanelClick()\"\n                [@panelState]=\"inline ? 'visible' : (panelVisible ? 'visible' : 'hidden')\" [style.display]=\"inline ? 'block' : (panelVisible ? 'block' : 'none')\">\n                <div class=\"ui-colorpicker-content\">\n                    <div #colorSelector class=\"ui-colorpicker-color-selector\" (mousedown)=\"onColorMousedown($event)\">\n                        <div class=\"ui-colorpicker-color\">\n                            <div #colorHandle class=\"ui-colorpicker-color-handle\"></div>\n                        </div>\n                    </div>\n                    <div #hue class=\"ui-colorpicker-hue\" (mousedown)=\"onHueMousedown($event)\">\n                        <div #hueHandle class=\"ui-colorpicker-hue-handle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('panelState', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('visible => hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hidden => visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out'))
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */], COLORPICKER_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _l || Object])
], ColorPicker);

var ColorPickerModule = (function () {
    function ColorPickerModule() {
    }
    return ColorPickerModule;
}());
ColorPickerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
        exports: [ColorPicker],
        declarations: [ColorPicker]
    })
], ColorPickerModule);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=colorpicker.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/colorpicker/colorpickerdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colorpickerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColorPickerDemoRoutingModule = (function () {
    function ColorPickerDemoRoutingModule() {
    }
    return ColorPickerDemoRoutingModule;
}());
ColorPickerDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__colorpickerdemo__["a" /* ColorPickerDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], ColorPickerDemoRoutingModule);

//# sourceMappingURL=colorpickerdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ColorPicker</span>\n        <span>ColorPicker is an input component to select a color.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Inline</h3>\n    <p-colorPicker [(ngModel)]=\"color1\" inline=\"true\"></p-colorPicker>\n    \n    <p style=\"margin-top:.5em\">Selected Color: <span style=\"display:inline-block;width:32px;height:32px;vertical-align:middle\" [style.backgroundColor]=\"color1\"></span> {{color1}} </p>    \n    \n    <h3>Overlay</h3>\n    <p-colorPicker [(ngModel)]=\"color2\"></p-colorPicker>\n    \n    <p style=\"margin-top:.5em\">Selected Color: <span [ngStyle]=\"{'color':color2}\">{{color2}}</span></p> \n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header =\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ColorPickerModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ColorPicker uses ngModel directive to bind a value.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-colorPicker [(ngModel)]=\"color\"&gt;&lt;/p-colorPicker&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponent &#123;\n\n    color: string;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Formats</h3>\n            <p>Default color format to use in value binding is \"hex\" and other possible values are \"rgb\" and \"hsb\". \n                Example below has 3 colorpickers having default values with different formats.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-colorPicker [(ngModel)]=\"color1\"&gt;&lt;/p-colorPicker&gt;\n&lt;p-colorPicker [(ngModel)]=\"color2\" format=\"rgb\"&gt;&lt;/p-colorPicker&gt;\n&lt;p-colorPicker [(ngModel)]=\"color3\" format=\"hsb\"&gt;&lt;/p-colorPicker&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponent &#123;\n\n    color1: string;\n    \n    color2: any = &#123;\n        r: 100, g: 130, b: 150\n    &#125;;\n    \n    color3: any = &#123;\n        h: 100, s: 50, b: 50\n    &#125;;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Overlay and Inline</h3>\n            <p>ColorPicker can be displayed as inline or as an overlay (default) using the \"inline\" property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-colorPicker [(ngModel)]=\"color1\" &gt;&lt;/p-colorPicker&gt;\n&lt;p-colorPicker [(ngModel)]=\"color2\" inline=\"true\"&gt;&lt;/p-colorPicker&gt;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Dropdown can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-colorPicker formControlName=\"color\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n            \n    \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>inline</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display as an overlay or not.</td>\n                        </tr>\n                        <tr>\n                            <td>format</td>\n                            <td>string</td>\n                            <td>hex</td>\n                            <td>Format to use in value binding, supported formats are \"hex\", \"rgb\" and \"hsb\".</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the dropdown.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        <h3>Events</h3>\n        <div class=\"doc-tablewrapper\">\n            <table class=\"doc-table\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Parameters</th>\n                    <th>Description</th>\n                </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>onChange</td>\n                        <td>event.originalEvent: Browser event<br />\n                            event.value: Selected color\n                        </td>\n                        <td>Callback to invoke when a color is selected.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <h3>Styling</h3>\n        <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n        <div class=\"doc-tablewrapper\">\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>ui-colorpicker</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-overlay</td>\n                        <td>Container element in overlay mode.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-preview </td>\n                        <td>Preview input in overlay mode.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-panel</td>\n                        <td>Panel element of the colorpicker.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-content</td>\n                        <td>Wrapper that contains color and hue sections.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-color-selector</td>\n                        <td>Color selector container.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-color</td>\n                        <td>Color element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-color-handle</td>\n                        <td>Handle of the color element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-hue</td>\n                        <td>Hue slider.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-hue-handle</td>\n                        <td>Handle of the hue slider.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <h3>Dependencies</h3>\n        <p>None.</p>\n\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/colorpicker\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Inline&lt;/h3&gt;\n&lt;p-colorPicker [(ngModel)]=\"color1\" inline=\"true\"&gt;&lt;/p-colorPicker&gt;\n\n&lt;p style=\"margin-top:.5em\"&gt;Selected Color: &lt;span style=\"display:inline-block;width:32px;height:32px;vertical-align:middle\" [style.backgroundColor]=\"color1\"&gt;&lt;/span&gt; &#123;&#123;color1&#125;&#125; &lt;/p&gt;    \n\n&lt;h3&gt;Overlay&lt;/h3&gt;\n&lt;p-colorPicker [(ngModel)]=\"color2\"&gt;&lt;/p-colorPicker&gt;\n\n&lt;p style=\"margin-top:.5em\"&gt;Selected Color: &lt;span [ngStyle]=\"&#123;'color':color2&#125;\"&gt;&#123;&#123;color2&#125;&#125;&lt;/span&gt;&lt;/p&gt; \n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ColorPickerDemo &#123;\n\n    color1: string;\n    \n    color2: string = '#1976D2';\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDemoModule", function() { return ColorPickerDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__colorpickerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__colorpickerdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/colorpicker/colorpickerdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_colorpicker_colorpicker__ = __webpack_require__("../../../../../src/app/components/colorpicker/colorpicker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ColorPickerDemoModule = (function () {
    function ColorPickerDemoModule() {
    }
    return ColorPickerDemoModule;
}());
ColorPickerDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__colorpickerdemo_routing_module__["a" /* ColorPickerDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_colorpicker_colorpicker__["a" /* ColorPickerModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__colorpickerdemo__["a" /* ColorPickerDemo */]
        ]
    })
], ColorPickerDemoModule);

//# sourceMappingURL=colorpickerdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColorPickerDemo = (function () {
    function ColorPickerDemo() {
        this.color2 = '#1976D2';
    }
    return ColorPickerDemo;
}());
ColorPickerDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.html")
    })
], ColorPickerDemo);

//# sourceMappingURL=colorpickerdemo.js.map

/***/ })

});
//# sourceMappingURL=colorpickerdemo.module.chunk.js.map