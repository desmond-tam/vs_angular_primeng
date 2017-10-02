webpackJsonp(["menubardemo.module"],{

/***/ "../../../../../src/app/components/menubar/menubar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenubarSub */
/* unused harmony export Menubar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_menuitem__ = __webpack_require__("../../../../../src/app/components/common/menuitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_menuitem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_menuitem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenubarSub = (function () {
    function MenubarSub(domHandler) {
        this.domHandler = domHandler;
    }
    MenubarSub.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        var nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            var sublist = nextElement.children[0];
            sublist.style.zIndex = String(++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex);
            if (this.root) {
                sublist.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                sublist.style.left = '0px';
            }
            else {
                sublist.style.top = '0px';
                sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
            }
        }
    };
    MenubarSub.prototype.onItemMouseLeave = function (event) {
        this.activeItem = null;
    };
    MenubarSub.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        this.activeItem = null;
    };
    MenubarSub.prototype.listClick = function (event) {
        this.activeItem = null;
    };
    return MenubarSub;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_menuitem__["MenuItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_menuitem__["MenuItem"]) === "function" && _a || Object)
], MenubarSub.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], MenubarSub.prototype, "root", void 0);
MenubarSub = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-menubarSub',
        template: "\n        <ul [ngClass]=\"{'ui-menubar-root-list ui-helper-clearfix':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!root}\" class=\"ui-menu-list\"\n            (click)=\"listClick($event)\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\">\n                <li *ngIf=\"!child.separator\" #listItem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':listItem==activeItem}\"\n                    (mouseenter)=\"onItemMouseEnter($event,listItem,child)\" (mouseleave)=\"onItemMouseLeave($event)\">\n                    <a *ngIf=\"!child.routerLink\" [href]=\"child.url||'#'\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" (click)=\"itemClick($event, child)\"\n                         [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\">\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon fa fa-fw\" *ngIf=\"child.items\" [ngClass]=\"{'fa-caret-down':root,'fa-caret-right':!root}\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" \n                        [attr.target]=\"child.target\" [attr.title]=\"child.title\"\n                        (click)=\"itemClick($event, child)\" [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\">\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon fa fa-fw\" *ngIf=\"child.items\" [ngClass]=\"{'fa-caret-down':root,'fa-caret-right':!root}\"></span>\n                    </a>\n                    <p-menubarSub class=\"ui-submenu\" [item]=\"child\" *ngIf=\"child.items\"></p-menubarSub>\n                </li>\n            </ng-template>\n            <li class=\"ui-menuitem ui-menuitem-custom ui-widget ui-corner-all\">\n                <ng-content></ng-content>\n            </li>\n        </ul>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _b || Object])
], MenubarSub);

var Menubar = (function () {
    function Menubar(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
    return Menubar;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], Menubar.prototype, "model", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Menubar.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Menubar.prototype, "styleClass", void 0);
Menubar = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-menubar',
        template: "\n        <div [ngClass]=\"{'ui-menubar ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\">\n            <p-menubarSub [item]=\"model\" root=\"root\">\n                <ng-content></ng-content>\n            </p-menubarSub>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _e || Object])
], Menubar);

var MenubarModule = (function () {
    function MenubarModule() {
    }
    return MenubarModule;
}());
MenubarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]],
        exports: [Menubar, __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]],
        declarations: [Menubar, MenubarSub]
    })
], MenubarModule);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=menubar.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/menubar/menubardemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menubardemo__ = __webpack_require__("../../../../../src/app/showcase/components/menubar/menubardemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenubarDemoRoutingModule = (function () {
    function MenubarDemoRoutingModule() {
    }
    return MenubarDemoRoutingModule;
}());
MenubarDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__menubardemo__["a" /* MenubarDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], MenubarDemoRoutingModule);

//# sourceMappingURL=menubardemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/menubar/menubardemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Menubar</span>\n        <span>Menubar is an horizontal menu components with support for nested submenus.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-menubar [model]=\"items\">\n        <input type=\"text\" pInputText placeholder=\"Search\">\n        <button pButton label=\"Logout\" icon=\"fa-sign-out\"></button>\n    </p-menubar>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MenubarModule,MenuItem&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>Menubar uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>Menubar requires nested menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menubar [model]=\"items\"&gt;&lt;/p-menubar&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenubarDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n<h3>Custom Content</h3>\n<p>Custom content can be placed between p-menubar tags.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menubar [model]=\"items\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Search\"&gt;\n    &lt;button pButton label=\"Logout\" icon=\"fa-sign-out\"&gt;&lt;/button&gt;\n&lt;/p-menubar&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>ui-menubar</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menu-list</td>\n                        <td>List element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem</td>\n                        <td>Menuitem element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-text</td>\n                        <td>Label of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-icon</td>\n                        <td>Icon of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-submenu-icon</td>\n                        <td>Arrow icon of a submenu.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/menubar\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menubar [model]=\"items\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Search\"&gt;\n    &lt;button pButton label=\"Logout\" icon=\"fa-sign-out\"&gt;&lt;/button&gt;\n&lt;/p-menubar&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenubarDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'fa-file-o',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator: true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'fa-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'fa-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'fa-gear',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'fa-refresh',\n                        items: [\n                            &#123;label: 'Save', icon: 'fa-save'&#125;,\n                            &#123;label: 'Update', icon: 'fa-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'fa-phone',\n                        items: [\n                            &#123;label: 'Delete', icon: 'fa-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Quit', icon: 'fa-minus'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/menubar/menubardemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarDemoModule", function() { return MenubarDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menubardemo__ = __webpack_require__("../../../../../src/app/showcase/components/menubar/menubardemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menubardemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/menubar/menubardemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menubar_menubar__ = __webpack_require__("../../../../../src/app/components/menubar/menubar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MenubarDemoModule = (function () {
    function MenubarDemoModule() {
    }
    return MenubarDemoModule;
}());
MenubarDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__menubardemo_routing_module__["a" /* MenubarDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_menubar_menubar__["a" /* MenubarModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__["a" /* InputTextModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menubardemo__["a" /* MenubarDemo */]
        ]
    })
], MenubarDemoModule);

//# sourceMappingURL=menubardemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/menubar/menubardemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenubarDemo = (function () {
    function MenubarDemo() {
    }
    MenubarDemo.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { separator: true },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            },
            {
                label: 'Quit', icon: 'fa-minus'
            }
        ];
    };
    return MenubarDemo;
}());
MenubarDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/menubar/menubardemo.html")
    })
], MenubarDemo);

//# sourceMappingURL=menubardemo.js.map

/***/ })

});
//# sourceMappingURL=menubardemo.module.chunk.js.map