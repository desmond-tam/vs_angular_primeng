webpackJsonp(["menumodeldemo.module"],{

/***/ "../../../../../src/app/showcase/components/menumodel/menumodeldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModelDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menumodeldemo__ = __webpack_require__("../../../../../src/app/showcase/components/menumodel/menumodeldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModelDemoRoutingModule = (function () {
    function MenuModelDemoRoutingModule() {
    }
    return MenuModelDemoRoutingModule;
}());
MenuModelDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__menumodeldemo__["a" /* MenuModelDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], MenuModelDemoRoutingModule);

//# sourceMappingURL=menumodeldemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/menumodel/menumodeldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">MenuModel API</span>\n        <span>PrimeNG menus components share a common api to specify the menuitems and submenus.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <h3 class=\"first\">MenuItem</h3>\n    <p>Core of the api is MenuItem class that defines various options such as the label, icon and children of an item in a menu. Example below\n    is a sample configuration with Menu component.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MenuModule,MenuItem&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    private items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'fa-plus'&#125;,\n                &#123;label: 'Open', icon: 'fa-download'&#125;\n            ]\n        &#125;,\n        &#123;\n            label: 'Edit',\n            items: [\n                &#123;label: 'Undo', icon: 'fa-refresh'&#125;,\n                &#123;label: 'Redo', icon: 'fa-repeat'&#125;\n            ]\n        &#125;];\n    &#125;\n&#125;\n</code>\n</pre>\n\n    <p>MenuItem provides the following properties. Note that not all of them may be utilized by the menu component.</p>\n    <div class=\"doc-tablewrapper\">\n        <table class=\"doc-table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Type</th>\n                    <th>Default</th>\n                    <th>Description</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>label</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Text of the item.</td>\n                </tr>\n                <tr>\n                    <td>icon</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Icon of the item.</td>\n                </tr>\n                <tr>\n                    <td>command</td>\n                    <td>function</td>\n                    <td>null</td>\n                    <td>Callback to execute when item is clicked.</td>\n                </tr>\n                <tr>\n                    <td>url</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>External link to navigate when item is clicked.</td>\n                </tr>\n                <tr>\n                    <td>routerLink</td>\n                    <td>array</td>\n                    <td>null</td>\n                    <td>RouterLink definition for internal navigation.</td>\n                </tr>\n                <tr>\n                    <td>routerLinkActiveOptions</td>\n                    <td>object</td>\n                    <td>null</td>\n                    <td>Configuration for active router link.</td>\n                </tr>\n                <tr>\n                    <td>items</td>\n                    <td>array</td>\n                    <td>null</td>\n                    <td>An array of children menuitems.</td>\n                </tr>\n                <tr>\n                    <td>expanded</td>\n                    <td>boolean</td>\n                    <td>false</td>\n                    <td>Visibility of submenu.</td>\n                </tr>\n                <tr>\n                    <td>disabled</td>\n                    <td>boolean</td>\n                    <td>false</td>\n                    <td>When set as true, disables the menuitem.</td>\n                </tr>\n                <tr>\n                    <td>visible</td>\n                    <td>boolean</td>\n                    <td>true</td>\n                    <td>Whether the dom element of menuitem is created or not.</td>\n                </tr>\n                <tr>\n                    <td>target</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Specifies where to open the linked document.</td>\n                </tr>\n                <tr>\n                    <td>separator</td>\n                    <td>boolean</td>\n                    <td>false</td>\n                    <td>Defines the item as a separator.</td>\n                </tr>\n                <tr>\n                    <td>style</td>\n                    <td>object</td>\n                    <td>null</td>\n                    <td>Inline style of the menuitem.</td>\n                </tr>\n                <tr>\n                    <td>styleClass</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Style class of the menuitem.</td>\n                </tr>\n                <tr>\n                    <td>badge</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Value of the badge.</td>\n                </tr>\n                <tr>\n                    <td>badgeStyleClass</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Style class of the badge.</td>\n                </tr>\n                <tr>\n                    <td>title</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Tooltip text of the item.</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    \n    <h4>Command</h4>\n    <p>The function to invoke when an item is clicked is defined using the command property.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    private items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'fa-plus', command: (event) => &#123;\n                    //event.originalEvent: Browser event\n                    //event.item: menuitem metadata\n                }}\n            ]\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n    <h4>Navigation</h4>\n    <p>Navigation is specified using url property for external links and with routerLink for internal ones. If a menuitem has an active route, <i>ui-state-active</i> style class is added as an indicator. Active route link can be\n    configured with routerLinkActiveOptions property of MenuItem API.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    private items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'fa-plus', url: 'http://www.primefaces.org/primeng'&#125;,\n                &#123;label: 'Open', icon: 'fa-download', routerLink: ['/pagename']&#125;\n            ]\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/menumodel/menumodeldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModelDemoModule", function() { return MenuModelDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menumodeldemo__ = __webpack_require__("../../../../../src/app/showcase/components/menumodel/menumodeldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menumodeldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/menumodel/menumodeldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MenuModelDemoModule = (function () {
    function MenuModelDemoModule() {
    }
    return MenuModelDemoModule;
}());
MenuModelDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__menumodeldemo_routing_module__["a" /* MenuModelDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menumodeldemo__["a" /* MenuModelDemo */]
        ]
    })
], MenuModelDemoModule);

//# sourceMappingURL=menumodeldemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/menumodel/menumodeldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModelDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuModelDemo = (function () {
    function MenuModelDemo() {
    }
    return MenuModelDemo;
}());
MenuModelDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/menumodel/menumodeldemo.html")
    })
], MenuModelDemo);

//# sourceMappingURL=menumodeldemo.js.map

/***/ })

});
//# sourceMappingURL=menumodeldemo.module.chunk.js.map