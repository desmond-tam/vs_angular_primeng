webpackJsonp(["overlaypaneldemo.module"],{

/***/ "../../../../../src/app/components/overlaypanel/overlaypanel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OverlayPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPanelModule; });
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



var OverlayPanel = (function () {
    function OverlayPanel(el, domHandler, renderer, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.cd = cd;
        this.dismissable = true;
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onAfterShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onAfterHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.visible = false;
    }
    OverlayPanel.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissable) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.selfClick && !_this.targetEvent) {
                    _this.hide();
                }
                _this.selfClick = false;
                _this.targetEvent = false;
                _this.cd.markForCheck();
            });
        }
    };
    OverlayPanel.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.domHandler.appendChild(this.container, this.appendTo);
        }
    };
    OverlayPanel.prototype.toggle = function (event, target) {
        var currentTarget = (target || event.currentTarget || event.target);
        if (!this.target || this.target == currentTarget) {
            if (this.visible)
                this.hide();
            else
                this.show(event, target);
        }
        else {
            this.show(event, target);
        }
        if (this.dismissable) {
            this.targetEvent = true;
        }
        this.target = currentTarget;
    };
    OverlayPanel.prototype.show = function (event, target) {
        if (this.dismissable) {
            this.targetEvent = true;
        }
        this.onBeforeShow.emit(null);
        var elementTarget = target || event.currentTarget || event.target;
        this.container.style.zIndex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        if (this.visible) {
            this.domHandler.absolutePosition(this.container, elementTarget);
        }
        else {
            this.visible = true;
            this.domHandler.absolutePosition(this.container, elementTarget);
            this.domHandler.fadeIn(this.container, 250);
        }
        this.onAfterShow.emit(null);
    };
    OverlayPanel.prototype.hide = function () {
        if (this.visible) {
            this.onBeforeHide.emit(null);
            this.visible = false;
            this.onAfterHide.emit(null);
        }
    };
    OverlayPanel.prototype.onPanelClick = function () {
        if (this.dismissable) {
            this.selfClick = true;
        }
    };
    OverlayPanel.prototype.onCloseClick = function (event) {
        this.hide();
        if (this.dismissable) {
            this.selfClick = true;
        }
        event.preventDefault();
    };
    OverlayPanel.prototype.ngOnDestroy = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
        this.target = null;
    };
    return OverlayPanel;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], OverlayPanel.prototype, "dismissable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], OverlayPanel.prototype, "showCloseIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], OverlayPanel.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], OverlayPanel.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], OverlayPanel.prototype, "appendTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], OverlayPanel.prototype, "onBeforeShow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], OverlayPanel.prototype, "onAfterShow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], OverlayPanel.prototype, "onBeforeHide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], OverlayPanel.prototype, "onAfterHide", void 0);
OverlayPanel = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-overlayPanel',
        template: "\n        <div [ngClass]=\"'ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow'\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            [style.display]=\"visible ? 'block' : 'none'\" (click)=\"onPanelClick()\">\n            <div class=\"ui-overlaypanel-content\">\n                <ng-content></ng-content>\n            </div>\n            <a href=\"#\" *ngIf=\"showCloseIcon\" class=\"ui-overlaypanel-close ui-state-default\" (click)=\"onCloseClick($event)\">\n                <span class=\"fa fa-fw fa-close\"></span>\n            </a>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _h || Object])
], OverlayPanel);

var OverlayPanelModule = (function () {
    function OverlayPanelModule() {
    }
    return OverlayPanelModule;
}());
OverlayPanelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [OverlayPanel],
        declarations: [OverlayPanel]
    })
], OverlayPanelModule);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=overlaypanel.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPanelDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlaypaneldemo__ = __webpack_require__("../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OverlayPanelDemoRoutingModule = (function () {
    function OverlayPanelDemoRoutingModule() {
    }
    return OverlayPanelDemoRoutingModule;
}());
OverlayPanelDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__overlaypaneldemo__["a" /* OverlayPanelDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], OverlayPanelDemoRoutingModule);

//# sourceMappingURL=overlaypaneldemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">OverlayPanel</span>\n        <span>OverlayPanel is a container component that can overlay other components on page.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p>Click the button to show the panel.</p>\n    <button type=\"text\" pButton label=\"Basic\" (click)=\"op1.toggle($event)\"></button>\n\n    <p-overlayPanel #op1>\n        <img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" />\n    </p-overlayPanel>\n    \n    <h3>Customized</h3>\n    <p>This OverlayPanel gets displayed on hover of the icon, is not dismissable and displays a close icon.</p>\n    <i class=\"fa fa-search\" (mouseenter)=\"op2.show($event)\" style=\"font-size:24px\"></i>\n    \n    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n        <p-dataTable [value]=\"cars1\" [style]=\"&#123;'width':'500px'&#125;\">\n            <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n            <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n            <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n            <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n        </p-dataTable>\n    </p-overlayPanel>\n    \n    <h3>DataTable Integration</h3>\n    <p-dataTable [value]=\"cars2\">\n        <p-column [style]=\"&#123;'width':'10%','text-align':'center'&#125;\" header=\"Logo\">\n            <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                <button type=\"button\" pButton (click)=\"selectCar($event,car,op3);\" icon=\"fa-search\"></button>\n            </ng-template>\n        </p-column>\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\n        <p-column field=\"year\" header=\"Year\"></p-column>\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\n        <p-column field=\"color\" header=\"Color\"></p-column>\n    </p-dataTable>\n    \n    <p-overlayPanel #op3>\n        <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\" *ngIf=\"selectedCar\"/>\n    </p-overlayPanel>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;OverlayPanelModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>OverlayPanel is defined using p-overlayPanel element and is displayed using the <i>show</i> or <i>toggle</i> method of a local ng-template variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-overlayPanel #op&gt;\n    Content\n&lt;/p-overlayPanel&gt;\n\n&lt;button type=\"text\" pButton label=\"Basic\" (click)=\"op.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n            <h3>Show and Hide</h3>\n            <p><i>show</i> method takes two parameters, first one is the event and it is mandatory. By default the target component to align the overlay is the event target, \n            if you'd like to align it to another element, provide it as the second parameter. Similarly calling <i>hide()</i> hides the overlay panel and the <i>toggle</i> method \n            toggles the visibility of the panel. In example below, clicking the button displays the overlayPanel aligned to the actualTarget div, not the button itself.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-overlayPanel #op&gt;\n    Content\n&lt;/p-overlayPanel&gt;\n\n&lt;button type=\"text\" pButton label=\"Custom Target\" (click)=\"op.show($event, actualTarget)\"&gt;&lt;/button&gt;\n&lt;div #actualTarget&gt;&lt;/div&gt;\n</code>\n</pre>\n        \n        \n            <h3>Dismissable and CloseIcon</h3>\n            <p>Clicking outside the overlay hides the panel, setting dismissable to false disables this behavior. Additionally enablign showCloseIcon property \n            displays a close icon at the top right corner to close the panel</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-overlayPanel #op [dismissable]=\"true\" [showCloseIcon]=\"true\"&gt;\n    Content\n&lt;/p-overlayPanel&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>dismissable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Enables to hide the overlay when outside is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>showCloseIcon</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, displays a close icon at top right corner.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the panel, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onBeforeShow</td>\n                            <td>-</td>\n                            <td>Callback to invoke before overlay is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>onAfterShow</td>\n                            <td>-</td>\n                            <td>Callback to invoke after overlay is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>onBeforeHide</td>\n                            <td>-</td>\n                            <td>Callback to invoke before overlay is hidden.</td>\n                        </tr>\n                        <tr>\n                            <td>onAfterHide</td>\n                            <td>-</td>\n                            <td>Callback to invoke after overlay is hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event <br>\n                                target?: target element to align the panel, defaults to event.target\n                            </td>\n                            <td>Toggles the visibility of the panel.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event <br>\n                                target?: target element to align the panel to\n                            </td>\n                            <td>Displays the panel.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the panel.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-overlaypanel</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-overlaypanel-content</td>\n                            <td>Content of the panel.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-overlaypanel-close</td>\n                            <td>Close icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/overlaypanel\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p&gt;Click the button to show the panel.&lt;/p&gt;\n&lt;button type=\"text\" pButton label=\"Basic\" (click)=\"op1.toggle($event)\"&gt;&lt;/button&gt;\n\n&lt;p-overlayPanel #op1&gt;\n    &lt;img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" /&gt;\n&lt;/p-overlayPanel&gt;\n\n&lt;h3&gt;Customized&lt;/h3&gt;\n&lt;p&gt;This OverlayPanel gets displayed on hover of the icon, is not dismissable and displays a close icon.&lt;/p&gt;\n&lt;i class=\"fa fa-search\" (mouseenter)=\"op2.show($event)\" style=\"font-size:24px\"&gt;&lt;/i&gt;\n\n&lt;p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\"&gt;\n    &lt;p-dataTable [value]=\"cars1\" [style]=\"&#123;'width':'500px'&#125;\"&gt;\n        &lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n        &lt;p-column field=\"year\" header=\"Year\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n        &lt;p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n        &lt;p-column field=\"color\" header=\"Color\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\n    &lt;/p-dataTable&gt;\n&lt;/p-overlayPanel&gt;\n\n&lt;h3&gt;DataTable Integration&lt;/h3&gt;\n&lt;p-dataTable [value]=\"cars2\"&gt;\n    &lt;p-column [style]=\"&#123;'width':'10%','text-align':'center'&#125;\" header=\"Logo\"&gt;\n        &lt;ng-template let-car=\"rowData\" pTemplate=\"body\"&gt;\n            &lt;button type=\"button\" pButton (click)=\"selectCar($event,car,op3);\" icon=\"fa-search\"&gt;&lt;/button&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-column&gt;\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n&lt;/p-dataTable&gt;\n\n&lt;p-overlayPanel #op3&gt;\n    &lt;img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\" *ngIf=\"selectedCar\"/&gt;\n&lt;/p-overlayPanel&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class OverlayPanelDemo &#123;\n\n    cars1: Car[];\n    \n    cars2: Car[];\n    \n    selectedCar: Car;\n    \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\n    &#125;\n    \n    selectCar(event,car: Car, overlaypanel: OverlayPanel) &#123;\n        this.selectedCar = car;\n        overlaypanel.toggle(event);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPanelDemoModule", function() { return OverlayPanelDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlaypaneldemo__ = __webpack_require__("../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlaypaneldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_overlaypanel_overlaypanel__ = __webpack_require__("../../../../../src/app/components/overlaypanel/overlaypanel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_datatable_datatable__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OverlayPanelDemoModule = (function () {
    function OverlayPanelDemoModule() {
    }
    return OverlayPanelDemoModule;
}());
OverlayPanelDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__overlaypaneldemo_routing_module__["a" /* OverlayPanelDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_overlaypanel_overlaypanel__["a" /* OverlayPanelModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_datatable_datatable__["a" /* DataTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__overlaypaneldemo__["a" /* OverlayPanelDemo */]
        ]
    })
], OverlayPanelDemoModule);

//# sourceMappingURL=overlaypaneldemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPanelDemo; });
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


var OverlayPanelDemo = (function () {
    function OverlayPanelDemo(carService) {
        this.carService = carService;
    }
    OverlayPanelDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
    };
    OverlayPanelDemo.prototype.selectCar = function (event, car, overlaypanel) {
        this.selectedCar = car;
        overlaypanel.toggle(event);
    };
    return OverlayPanelDemo;
}());
OverlayPanelDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], OverlayPanelDemo);

var _a;
//# sourceMappingURL=overlaypaneldemo.js.map

/***/ })

});
//# sourceMappingURL=overlaypaneldemo.module.chunk.js.map