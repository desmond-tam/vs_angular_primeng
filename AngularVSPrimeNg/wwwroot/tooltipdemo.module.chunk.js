webpackJsonp(["tooltipdemo.module"],{

/***/ "../../../../../src/app/components/tooltip/tooltip.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Tooltip */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tooltip = (function () {
    function Tooltip(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.tooltipPosition = 'right';
        this.tooltipEvent = 'hover';
        this.appendTo = 'body';
        this.tooltipZIndex = 'auto';
        this.escape = true;
    }
    Tooltip.prototype.onMouseEnter = function (e) {
        if (this.tooltipEvent === 'hover') {
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.destroy();
            }
            this.activate();
        }
    };
    Tooltip.prototype.onMouseLeave = function (e) {
        if (this.tooltipEvent === 'hover') {
            this.deactivate(true);
        }
    };
    Tooltip.prototype.onFocus = function (e) {
        if (this.tooltipEvent === 'focus') {
            this.activate();
        }
    };
    Tooltip.prototype.onBlur = function (e) {
        if (this.tooltipEvent === 'focus') {
            this.deactivate(true);
        }
    };
    Tooltip.prototype.activate = function () {
        var _this = this;
        this.active = true;
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        if (this.showDelay)
            this.showTimeout = setTimeout(function () { _this.show(); }, this.showDelay);
        else
            this.show();
        if (this.life) {
            this.lifeTimeout = setTimeout(function () { _this.deactivate(false); }, this.life);
        }
    };
    Tooltip.prototype.deactivate = function (useDelay) {
        var _this = this;
        this.active = false;
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
        }
        if (this.lifeTimeout) {
            clearTimeout(this.lifeTimeout);
        }
        if (this.hideDelay && useDelay)
            this.hideTimeout = setTimeout(function () { _this.hide(); }, this.hideDelay);
        else
            this.hide();
    };
    Object.defineProperty(Tooltip.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            if (this.active) {
                if (this._text) {
                    if (this.container && this.container.offsetParent)
                        this.updateText();
                    else
                        this.show();
                }
                else {
                    this.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.create = function () {
        this.container = document.createElement('div');
        var tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        this.tooltipText = document.createElement('div');
        this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
        this.updateText();
        if (this.positionStyle) {
            this.container.style.position = this.positionStyle;
        }
        this.container.appendChild(this.tooltipText);
        if (this.appendTo === 'body')
            document.body.appendChild(this.container);
        else if (this.appendTo === 'target')
            this.domHandler.appendChild(this.container, this.el.nativeElement);
        else
            this.domHandler.appendChild(this.container, this.appendTo);
        this.container.style.display = 'inline-block';
    };
    Tooltip.prototype.show = function () {
        if (!this.text || this.disabled) {
            return;
        }
        this.create();
        this.align();
        if (this.tooltipStyleClass) {
            this.container.className = this.container.className + ' ' + this.tooltipStyleClass;
        }
        this.domHandler.fadeIn(this.container, 250);
        if (this.tooltipZIndex === 'auto')
            this.container.style.zIndex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        else
            this.container.style.zIndex = this.tooltipZIndex;
        this.bindDocumentResizeListener();
    };
    Tooltip.prototype.hide = function () {
        this.destroy();
    };
    Tooltip.prototype.updateText = function () {
        if (this.escape) {
            this.tooltipText.innerHTML = '';
            this.tooltipText.appendChild(document.createTextNode(this._text));
        }
        else {
            this.tooltipText.innerHTML = this._text;
        }
    };
    Tooltip.prototype.align = function () {
        var position = this.tooltipPosition;
        switch (position) {
            case 'top':
                this.alignTop();
                if (this.isOutOfBounds()) {
                    this.alignBottom();
                }
                break;
            case 'bottom':
                this.alignBottom();
                if (this.isOutOfBounds()) {
                    this.alignTop();
                }
                break;
            case 'left':
                this.alignLeft();
                if (this.isOutOfBounds()) {
                    this.alignRight();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
            case 'right':
                this.alignRight();
                if (this.isOutOfBounds()) {
                    this.alignLeft();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
        }
    };
    Tooltip.prototype.getHostOffset = function () {
        var offset = this.el.nativeElement.getBoundingClientRect();
        var targetLeft = offset.left + this.domHandler.getWindowScrollLeft();
        var targetTop = offset.top + this.domHandler.getWindowScrollTop();
        return { left: targetLeft, top: targetTop };
    };
    Tooltip.prototype.alignRight = function () {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-right';
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + this.domHandler.getOuterWidth(this.el.nativeElement);
        var top = hostOffset.top + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignLeft = function () {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-left';
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left - this.domHandler.getOuterWidth(this.container);
        var top = hostOffset.top + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignTop = function () {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-top';
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
        var top = hostOffset.top - this.domHandler.getOuterHeight(this.container);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignBottom = function () {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-bottom';
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
        var top = hostOffset.top + this.domHandler.getOuterHeight(this.el.nativeElement);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.preAlign = function () {
        this.container.style.left = -999 + 'px';
        this.container.style.top = -999 + 'px';
    };
    Tooltip.prototype.isOutOfBounds = function () {
        var offset = this.container.getBoundingClientRect();
        var targetTop = offset.top;
        var targetLeft = offset.left;
        var width = this.domHandler.getOuterWidth(this.container);
        var height = this.domHandler.getOuterHeight(this.container);
        var viewport = this.domHandler.getViewport();
        return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
    };
    Tooltip.prototype.bindDocumentResizeListener = function () {
        var _this = this;
        this.documentResizeListener = this.renderer.listen('window', 'resize', function (event) {
            _this.hide();
        });
    };
    Tooltip.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            this.documentResizeListener();
            this.documentResizeListener = null;
        }
    };
    Tooltip.prototype.destroy = function () {
        this.unbindDocumentResizeListener();
        if (this.container && this.container.parentElement) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.container);
            else if (this.appendTo === 'target')
                this.el.nativeElement.removeChild(this.container);
            else
                this.domHandler.removeChild(this.container, this.appendTo);
        }
        this.container = null;
    };
    Tooltip.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    return Tooltip;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltipPosition", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltipEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Tooltip.prototype, "appendTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Tooltip.prototype, "positionStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltipStyleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltipZIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("tooltipDisabled"),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "escape", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Tooltip.prototype, "showDelay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Tooltip.prototype, "hideDelay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], Tooltip.prototype, "life", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onMouseEnter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onMouseLeave", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onFocus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onBlur", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('pTooltip'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Tooltip.prototype, "text", null);
Tooltip = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[pTooltip]',
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object])
], Tooltip);

var TooltipModule = (function () {
    function TooltipModule() {
    }
    return TooltipModule;
}());
TooltipModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [Tooltip],
        declarations: [Tooltip]
    })
], TooltipModule);

var _a, _b, _c;
//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__ = __webpack_require__("../../../../../src/app/showcase/components/tooltip/tooltipdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TooltipDemoRoutingModule = (function () {
    function TooltipDemoRoutingModule() {
    }
    return TooltipDemoRoutingModule;
}());
TooltipDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__["a" /* TooltipDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], TooltipDemoRoutingModule);

//# sourceMappingURL=tooltipdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/tooltipdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tooltip</span>\n        <span>Tooltip provides advisory information for a component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Positions</h3>\n    <div class=\"ui-g ui-fluid\">\n        <div class=\"ui-g-12 ui-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\">                \n        </div>\n        <div class=\"ui-g-12 ui-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"top\" placeholder=\"Top\">\n        </div>\n        <div class=\"ui-g-12 ui-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" placeholder=\"Bottom\">\n        </div>\n        <div class=\"ui-g-12 ui-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"left\" placeholder=\"Left\">\n        </div>\n    </div>\n    \n    <h3>Focus and Blur</h3>\n    <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\" style=\"margin-left:.5em\">\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TooltipModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Tooltip is applied to an element with pTooltip directive where the value of the directive defines the text to display.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\"&gt;\n</code>\n</pre>\n\n            <h3>Position</h3>\n            <p>There are four choices to position the tooltip, default value is \"right\" and alternatives are \"top\", \"bottom\", \"left\". Position is \n            specified using tooltipPosition attribute.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\"&gt;\n</code>\n</pre>\n\n            <h3>Events</h3>\n            <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\" tooltipEvent=\"focus\"&gt;\n</code>\n</pre>\n\n            <h3>Delay</h3>\n            <p>Tooltip is displayed or hidden instantly by default however you may add delays using showDelay and hideDelay properties which accept a number value in terms of milliseconds.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\" tooltipEvent=\"focus\" showDelay=\"1000\" hideDelay=\"500\"&gt;\n</code>\n</pre>\n\n            <h3>Scrolling Containers</h3>\n            <p>When placed inside a scrolling container like an overflown div, tooltip must be appended to another element that has\n                relative positioning instead of document body which is the default.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div #container style=\"display:inline-block;position:relative\"&gt;\n    &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" [appendTo]=\"container\"&gt;\n&lt;/div&gt;\n</code>\n</pre>\n            \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>pTooltip</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the tooltip.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipPosition</td>\n                            <td>string</td>\n                            <td>right</td>\n                            <td>Position of the tooltip, valid values are right, left, top and bottom.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipEvent</td>\n                            <td>string</td>\n                            <td>hover</td>\n                            <td>Event to show the tooltip, valid values are hover and focus.</td>\n                        </tr>\n                        <tr>\n                            <td>positionStyle</td>\n                            <td>string</td>\n                            <td>absolute</td>\n                            <td>Type of CSS position.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipDisabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>string</td>\n                            <td>any</td>\n                            <td>Target element to attach the overlay, valid values are \"body\", \"target\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>hideDelay</td>\n                            <td>null</td>\n                            <td>number</td>\n                            <td>Delay to hide the tooltip in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>showDelay</td>\n                            <td>null</td>\n                            <td>number</td>\n                            <td>Delay to show the tooltip in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>life</td>\n                            <td>null</td>\n                            <td>number</td>\n                            <td>Time to wait in milliseconds to hide the tooltip even it is active.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the tooltip.</td>\n                        </tr>\n                        <tr>\n                            <td>escape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>By default the tooltip contents are rendered as text. Set to false to support html tags in the content</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipZIndex</td>\n                            <td>string</td>\n                            <td>auto</td>\n                            <td>Whether the z-index should be managed automatically to always go on top or have a fixed value.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-tooltip</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tooltip-arrow</td>\n                            <td>Arrow of the tooltip</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tooltip-text</td>\n                            <td>Text of the tooltip</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tooltip\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Positions&lt;/h3&gt;\n&lt;div class=\"ui-g ui-fluid\"&gt;\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\"&gt;                \n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"top\" placeholder=\"Top\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" placeholder=\"Bottom\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"left\" placeholder=\"Left\"&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Focus and Blur&lt;/h3&gt;\n&lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\" style=\"margin-left:.5em\"&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n     </p-tabView >\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/tooltipdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoModule", function() { return TooltipDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__ = __webpack_require__("../../../../../src/app/showcase/components/tooltip/tooltipdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltipdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tooltip_tooltip__ = __webpack_require__("../../../../../src/app/components/tooltip/tooltip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TooltipDemoModule = (function () {
    function TooltipDemoModule() {
    }
    return TooltipDemoModule;
}());
TooltipDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__tooltipdemo_routing_module__["a" /* TooltipDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_tooltip_tooltip__["a" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__["a" /* InputTextModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__["a" /* TooltipDemo */]
        ]
    })
], TooltipDemoModule);

//# sourceMappingURL=tooltipdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/tooltipdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TooltipDemo = (function () {
    function TooltipDemo() {
    }
    return TooltipDemo;
}());
TooltipDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/tooltip/tooltipdemo.html")
    })
], TooltipDemo);

//# sourceMappingURL=tooltipdemo.js.map

/***/ })

});
//# sourceMappingURL=tooltipdemo.module.chunk.js.map