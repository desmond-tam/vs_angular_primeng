webpackJsonp(["confirmdialogdemo.module"],{

/***/ "../../../../../src/app/components/confirmdialog/confirmdialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConfirmDialog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_confirmationservice__ = __webpack_require__("../../../../../src/app/components/common/confirmationservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmDialog = (function () {
    function ConfirmDialog(el, domHandler, renderer, confirmationService) {
        var _this = this;
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.acceptIcon = 'fa-check';
        this.acceptLabel = 'Yes';
        this.acceptVisible = true;
        this.rejectIcon = 'fa-close';
        this.rejectLabel = 'No';
        this.rejectVisible = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.responsive = true;
        this.subscription = confirmationService.requireConfirmation$.subscribe(function (confirmation) {
            if (confirmation.key === _this.key) {
                _this.confirmation = confirmation;
                _this.message = _this.confirmation.message || _this.message;
                _this.icon = _this.confirmation.icon || _this.icon;
                _this.header = _this.confirmation.header || _this.header;
                _this.rejectVisible = _this.confirmation.rejectVisible == null ? _this.rejectVisible : _this.confirmation.rejectVisible;
                _this.acceptVisible = _this.confirmation.acceptVisible == null ? _this.acceptVisible : _this.confirmation.acceptVisible;
                if (_this.confirmation.accept) {
                    _this.confirmation.acceptEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
                    _this.confirmation.acceptEvent.subscribe(_this.confirmation.accept);
                }
                if (_this.confirmation.reject) {
                    _this.confirmation.rejectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
                    _this.confirmation.rejectEvent.subscribe(_this.confirmation.reject);
                }
                _this.visible = true;
            }
        });
    }
    Object.defineProperty(ConfirmDialog.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (val) {
            this._visible = val;
            if (this._visible) {
                if (!this.positionInitialized) {
                    this.center();
                    this.positionInitialized = true;
                }
                this.el.nativeElement.children[0].style.zIndex = ++__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */].zindex;
                this.executePostShowActions = true;
            }
            if (this._visible)
                this.enableModality();
            else
                this.disableModality();
        },
        enumerable: true,
        configurable: true
    });
    ConfirmDialog.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.contentContainer = this.domHandler.findSingle(this.el.nativeElement, '.ui-dialog-content');
        if (this.responsive) {
            this.documentResponsiveListener = this.renderer.listen('window', 'resize', function (event) {
                _this.center();
            });
        }
        if (this.closeOnEscape && this.closable) {
            this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
                if (event.which == 27) {
                    if (_this.el.nativeElement.children[0].style.zIndex == __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */].zindex) {
                        _this.close(event);
                    }
                }
            });
        }
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.el.nativeElement);
            else
                this.domHandler.appendChild(this.el.nativeElement, this.appendTo);
        }
    };
    ConfirmDialog.prototype.ngAfterViewChecked = function () {
        if (this.executePostShowActions) {
            this.domHandler.findSingle(this.el.nativeElement.children[0], 'button').focus();
            this.executePostShowActions = false;
        }
    };
    ConfirmDialog.prototype.center = function () {
        var container = this.el.nativeElement.children[0];
        var elementWidth = this.domHandler.getOuterWidth(container);
        var elementHeight = this.domHandler.getOuterHeight(container);
        if (elementWidth == 0 && elementHeight == 0) {
            container.style.visibility = 'hidden';
            container.style.display = 'block';
            elementWidth = this.domHandler.getOuterWidth(container);
            elementHeight = this.domHandler.getOuterHeight(container);
            container.style.display = 'none';
            container.style.visibility = 'visible';
        }
        var viewport = this.domHandler.getViewport();
        var x = (viewport.width - elementWidth) / 2;
        var y = (viewport.height - elementHeight) / 2;
        container.style.left = x + 'px';
        container.style.top = y + 'px';
    };
    ConfirmDialog.prototype.enableModality = function () {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = this.el.nativeElement.children[0].style.zIndex - 1;
            this.domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
            document.body.appendChild(this.mask);
            this.domHandler.addClass(document.body, 'ui-overflow-hidden');
        }
    };
    ConfirmDialog.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            this.domHandler.removeClass(document.body, 'ui-overflow-hidden');
            this.mask = null;
        }
    };
    ConfirmDialog.prototype.close = function (event) {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        event.preventDefault();
    };
    ConfirmDialog.prototype.hide = function () {
        this.visible = false;
    };
    ConfirmDialog.prototype.moveOnTop = function () {
        this.el.nativeElement.children[0].style.zIndex = ++__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */].zindex;
    };
    ConfirmDialog.prototype.ngOnDestroy = function () {
        this.disableModality();
        if (this.documentResponsiveListener) {
            this.documentResponsiveListener();
        }
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
        }
        if (this.appendTo && this.appendTo === 'body') {
            document.body.removeChild(this.el.nativeElement);
        }
        this.subscription.unsubscribe();
    };
    ConfirmDialog.prototype.accept = function () {
        if (this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    ConfirmDialog.prototype.reject = function () {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    return ConfirmDialog;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDialog.prototype, "header", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDialog.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDialog.prototype, "message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDialog.prototype, "acceptIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDialog.prototype, "acceptLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ConfirmDialog.prototype, "acceptVisible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDialog.prototype, "rejectIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDialog.prototype, "rejectLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ConfirmDialog.prototype, "rejectVisible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ConfirmDialog.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ConfirmDialog.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ConfirmDialog.prototype, "closeOnEscape", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ConfirmDialog.prototype, "rtl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ConfirmDialog.prototype, "closable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ConfirmDialog.prototype, "responsive", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ConfirmDialog.prototype, "appendTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDialog.prototype, "key", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_4__common_shared__["b" /* Footer */]),
    __metadata("design:type", Object)
], ConfirmDialog.prototype, "footer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ConfirmDialog.prototype, "visible", null);
ConfirmDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-confirmDialog',
        template: "\n        <div [ngClass]=\"{'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl}\" \n            [style.display]=\"visible ? 'block' : 'none'\" [style.width.px]=\"width\" [style.height.px]=\"height\" (mousedown)=\"moveOnTop()\" [@dialogState]=\"visible ? 'visible' : 'hidden'\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\">\n                <span class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" href=\"#\" role=\"button\" (click)=\"close($event)\">\n                    <span class=\"fa fa-fw fa-close\"></span>\n                </a>\n            </div>\n            <div class=\"ui-dialog-content ui-widget-content\">\n                <i [ngClass]=\"'fa'\" [class]=\"icon\"></i>\n                <span class=\"ui-confirmdialog-message\" [innerHTML]=\"message\"></span>\n            </div>\n            <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n            <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"!footer\">\n                <button type=\"button\" pButton [icon]=\"acceptIcon\" [label]=\"acceptLabel\" (click)=\"accept()\" *ngIf=\"acceptVisible\"></button>\n                <button type=\"button\" pButton [icon]=\"rejectIcon\" [label]=\"rejectLabel\" (click)=\"reject()\" *ngIf=\"rejectVisible\"></button>\n            </div>\n        </div>\n    ",
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dialogState', [
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
        providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__common_confirmationservice__["a" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_confirmationservice__["a" /* ConfirmationService */]) === "function" && _d || Object])
], ConfirmDialog);

var ConfirmDialogModule = (function () {
    function ConfirmDialogModule() {
    }
    return ConfirmDialogModule;
}());
ConfirmDialogModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__button_button__["a" /* ButtonModule */]],
        exports: [ConfirmDialog, __WEBPACK_IMPORTED_MODULE_5__button_button__["a" /* ButtonModule */], __WEBPACK_IMPORTED_MODULE_4__common_shared__["g" /* SharedModule */]],
        declarations: [ConfirmDialog]
    })
], ConfirmDialogModule);

var _a, _b, _c, _d;
//# sourceMappingURL=confirmdialog.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmDialogDemoRoutingModule = (function () {
    function ConfirmDialogDemoRoutingModule() {
    }
    return ConfirmDialogDemoRoutingModule;
}());
ConfirmDialogDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__["a" /* ConfirmDialogDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], ConfirmDialogDemoRoutingModule);

//# sourceMappingURL=confirmdialogdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ConfirmDialog</span>\n        <span>ConfirmDialog is backed by a service utilizing Observables to display confirmation windows\n            easily that can be shared by multiple actions on the same component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <p-confirmDialog></p-confirmDialog>\n\n    <button type=\"button\" (click)=\"confirm1()\" pButton icon=\"fa-check\" label=\"Confirm\"></button>\n    \n    <button type=\"button\" (click)=\"confirm2()\" pButton icon=\"fa-trash\" label=\"Delete\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ConfirmDialogModule,ConfirmationService&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ConfirmDialog is defined using p-confirmDialog tag and an instance of ConfirmationService is required to display it by \n                calling confirm method.</p>\n                    \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"&gt;&lt;/p-confirmDialog&gt;\n\n&lt;button type=\"text\" (click)=\"confirm()\" pButton icon=\"fa-check\" label=\"Confirm\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ConfirmDialogDemo &#123; \n           \n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\n\n    confirm() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Are you sure that you want to perform this action?',\n            accept: () => &#123;\n                //Actual logic to perform a confirmation\n            &#125;\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Confirm method takes a confirmation instance used to customize the dialog UI along with accept and reject actions.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>message</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Message of the confirmation.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Optional key to match the key of the confirm dialog, necessary to use when component tree has multiple confirm dialogs.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon to display next to the message.</td>\n                        </tr>\n                        <tr>\n                            <td>accept</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Callback to execute when action is confirmed.</td>\n                        </tr>\n                        <tr>\n                            <td>reject</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Callback to execute when action is rejected.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Customization</h3>\n            <p>Properties of the dialog are defined in two ways, message, icon and header properties can either\n            be defined using confirm method or declaratively on p-confirmDialog ng-template. If these values are unlikely to change then\n            declarative approach would be useful, still properties defined in a ng-template can be overriden with confirm method call.</p>\n            \n            <p>In addition, buttons at footer section can be customized by passing your own UI, important note to make confirmation work with\n            a custom UI is defining a local ng-template variable for the dialog and assign accept()-reject() methods to your own buttons.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd&gt;\n    &lt;p-footer&gt;\n        &lt;button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"&gt;&lt;/button&gt;\n        &lt;button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"&gt;&lt;/button&gt;\n    &lt;/p-footer&gt;\n&lt;/p-confirmDialog&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                         <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Title text of the dialog.</td>\n                         </tr>\n                         <tr>\n                           <td>message</td>\n                           <td>string</td>\n                           <td>null</td>\n                           <td>Message of the confirmation.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.</td>\n                        </tr>\n                        <tr>\n                          <td>icon</td>\n                          <td>string</td>\n                          <td>null</td>\n                          <td>Icon to display next to message.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptLabel</td>\n                          <td>string</td>\n                          <td>Yes</td>\n                          <td>Label of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptIcon</td>\n                          <td>string</td>\n                          <td>fa-check</td>\n                          <td>Icon of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptVisible</td>\n                          <td>boolean</td>\n                          <td>true</td>\n                          <td>Visibility of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectLabel</td>\n                          <td>string</td>\n                          <td>No</td>\n                          <td>Label of the reject button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectIcon</td>\n                          <td>string</td>\n                          <td>fa-close</td>\n                          <td>Icon of the reject button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectVisible</td>\n                          <td>boolean</td>\n                          <td>true</td>\n                          <td>Visibility of the reject button.</td>\n                        </tr>\n                        <tr>\n                            <td>width</td>\n                            <td>int</td>\n                            <td>300</td>\n                            <td>Width of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>height</td>\n                            <td>int</td>\n                            <td>auto</td>\n                            <td>Height of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnEscape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Specifices if pressing escape key should hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>rtl</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled dialog is displayed in RTL direction.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Adds a close icon to the header to hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>responsive</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>In responsive mode, dialog adjusts itself to screen width.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-dialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-confirmdialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar</td>\n                            <td>Container of header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-title</td>\n                            <td>Header element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-icon</td>\n                            <td>Icon container inside header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-close</td>\n                            <td>Close icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>ConfirmationService</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/confirmdialog\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n    \n&lt;p-confirmDialog&gt;&lt;/p-confirmDialog&gt;\n\n&lt;button type=\"button\" (click)=\"confirm1()\" pButton icon=\"fa-check\" label=\"Confirm\"&gt;&lt;/button&gt;\n\n&lt;button type=\"button\" (click)=\"confirm2()\" pButton icon=\"fa-trash\" label=\"Delete\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: 'showcase/demo/confirmdialog/confirmdialogdemo.html',\n    providers: [ConfirmationService]\n&#125;)\nexport class ConfirmDialogDemo &#123;\n    \n    msgs: Message[] = [];\n    \n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\n\n    confirm1() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Are you sure that you want to proceed?',\n            header: 'Confirmation',\n            icon: 'fa fa-question-circle',\n            accept: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'You have accepted'&#125;];\n            &#125;,\n            reject: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\n            &#125;\n        &#125;);\n    &#125;\n\n    confirm2() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Do you want to delete this record?',\n            header: 'Delete Confirmation',\n            icon: 'fa fa-trash',\n            accept: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'Record deleted'&#125;];\n            &#125;,\n            reject: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\n            &#125;\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemoModule", function() { return ConfirmDialogDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmdialogdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_confirmdialog_confirmdialog__ = __webpack_require__("../../../../../src/app/components/confirmdialog/confirmdialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ConfirmDialogDemoModule = (function () {
    function ConfirmDialogDemoModule() {
    }
    return ConfirmDialogDemoModule;
}());
ConfirmDialogDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__confirmdialogdemo_routing_module__["a" /* ConfirmDialogDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_confirmdialog_confirmdialog__["a" /* ConfirmDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__["a" /* ConfirmDialogDemo */]
        ]
    })
], ConfirmDialogDemoModule);

//# sourceMappingURL=confirmdialogdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_api__ = __webpack_require__("../../../../../src/app/components/common/api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogDemo = (function () {
    function ConfirmDialogDemo(confirmationService) {
        this.confirmationService = confirmationService;
        this.msgs = [];
    }
    ConfirmDialogDemo.prototype.confirm1 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa-question-circle',
            accept: function () {
                _this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    ConfirmDialogDemo.prototype.confirm2 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa-trash',
            accept: function () {
                _this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    return ConfirmDialogDemo;
}());
ConfirmDialogDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__components_common_api__["a" /* ConfirmationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__components_common_api__["a" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_common_api__["a" /* ConfirmationService */]) === "function" && _a || Object])
], ConfirmDialogDemo);

var _a;
//# sourceMappingURL=confirmdialogdemo.js.map

/***/ })

});
//# sourceMappingURL=confirmdialogdemo.module.chunk.js.map