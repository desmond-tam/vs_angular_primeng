webpackJsonp(["menudemo.module"],{

/***/ "../../../../../src/app/showcase/components/menu/menudemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menudemo__ = __webpack_require__("../../../../../src/app/showcase/components/menu/menudemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuDemoRoutingModule = (function () {
    function MenuDemoRoutingModule() {
    }
    return MenuDemoRoutingModule;
}());
MenuDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__menudemo__["a" /* MenuDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], MenuDemoRoutingModule);

//# sourceMappingURL=menudemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/menu/menudemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Menu</span>\n        <span>Menu is a navigation/command component that supports dynamic and static positioning.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-menu [model]=\"items\"></p-menu>\n\n    <h3>Popup</h3>\n    <p-menu #menu popup=\"popup\" [model]=\"items\"></p-menu>\n    <button type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MenuModule,MenuItem&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>Menu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>Menu requires a collection of menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n                    &#123;label: 'New', icon: 'fa-plus'&#125;,\n                    &#123;label: 'Open', icon: 'fa-download'&#125;,\n                    &#123;label: 'Undo', icon: 'fa-refresh'&#125;\n                ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>SubMenus</h3>\n            <p>Menu supports 1 level of nesting via subitems of an item.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'fa-plus'&#125;,\n                &#123;label: 'Open', icon: 'fa-download'&#125;\n            ]\n        &#125;,\n        &#123;\n            label: 'Edit',\n            items: [\n                &#123;label: 'Undo', icon: 'fa-refresh'&#125;,\n                &#123;label: 'Redo', icon: 'fa-repeat'&#125;\n            ]\n        &#125;];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Popup Mode</h3>\n            <p>Menu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \n                    from the anchor element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menu #menu popup=\"popup\" [model]=\"items\"&gt;&lt;/p-menu&gt;\n&lt;button type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n       \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>popup</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if menu would displayed as a popup.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event</td>\n                            <td>Toggles the visibility of the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event</td>\n                            <td>Displays the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the popup menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-menu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu-list</td>\n                            <td>List element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/menu\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\n\n&lt;h3&gt;Popup&lt;/h3&gt;\n&lt;p-menu #menu popup=\"popup\" [model]=\"items\"&gt;&lt;/p-menu&gt;\n&lt;button type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'fa-plus'&#125;,\n                &#123;label: 'Open', icon: 'fa-download'&#125;\n            ]\n        &#125;,\n        &#123;\n            label: 'Edit',\n            items: [\n                &#123;label: 'Undo', icon: 'fa-refresh'&#125;,\n                &#123;label: 'Redo', icon: 'fa-repeat'&#125;\n            ]\n        &#125;];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/menu/menudemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDemoModule", function() { return MenuDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menudemo__ = __webpack_require__("../../../../../src/app/showcase/components/menu/menudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menudemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/menu/menudemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menu_menu__ = __webpack_require__("../../../../../src/app/components/menu/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






;


var MenuDemoModule = (function () {
    function MenuDemoModule() {
    }
    return MenuDemoModule;
}());
MenuDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__menudemo_routing_module__["a" /* MenuDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_menu_menu__["a" /* MenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menudemo__["a" /* MenuDemo */]
        ]
    })
], MenuDemoModule);

//# sourceMappingURL=menudemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/menu/menudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuDemo = (function () {
    function MenuDemo() {
    }
    MenuDemo.prototype.ngOnInit = function () {
        this.items = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'fa-plus', command: function () { } },
                    { label: 'Open', icon: 'fa-download' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'fa-refresh' },
                    { label: 'Redo', icon: 'fa-repeat' }
                ]
            }];
    };
    return MenuDemo;
}());
MenuDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/menu/menudemo.html")
    })
], MenuDemo);

//# sourceMappingURL=menudemo.js.map

/***/ })

});
//# sourceMappingURL=menudemo.module.chunk.js.map