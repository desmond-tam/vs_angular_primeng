webpackJsonp(["splitbuttondemo.module"],{

/***/ "../../../../../src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitButtonDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitbuttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplitButtonDemoRoutingModule = (function () {
    function SplitButtonDemoRoutingModule() {
    }
    return SplitButtonDemoRoutingModule;
}());
SplitButtonDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__splitbuttondemo__["a" /* SplitButtonDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], SplitButtonDemoRoutingModule);

//# sourceMappingURL=splitbuttondemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">SplitButton</span>\n        <span>SplitButton groups a set of commands in an overlay with a default command.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"></p-splitButton>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SplitButtonModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>SplitButton has a default command button and a collection of menuitems to be displayed in an overlay.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>SplitButton uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n    \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the button.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the icon.</td>\n                        </tr>\n                        <tr>\n                            <td>iconPos</td>\n                            <td>string</td>\n                            <td>left</td>\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>menuStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the overlay menu.</td>\n                        </tr>\n                        <tr>\n                            <td>menuStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the overlay menu.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onClick</td>\n                            <td>event: browser event<br></td>\n                            <td>Callback to invoke when default command button is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onDropdownClick</td>\n                            <td>event: browser event<br></td>\n                            <td>Callback to invoke when dropdown button is clicked.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n          <h3>Severity</h3>\n          <p>Different color options are available to define severity levels.</p>\n\n          <ul>\n            <li>.ui-button-secondary</li>\n            <li>.ui-button-success</li>\n            <li>.ui-button-info</li>\n            <li>.ui-button-warning</li>\n            <li>.ui-button-danger</li>\n          </ul>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\n</code>\n</pre>\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>. SplitButton uses\n            button and menu components internally, refer to their documentation for the detailed style list.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-splitbutton</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-splitbutton-button</td>\n                            <td>Dropdown button.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu</td>\n                            <td>Overlay menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/splitbutton\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SplitButtonDemo implements OnInit &#123;\n\n    msgs: Message[] = [];\n    \n    items: MenuItem[];\n    \n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'Update', icon: 'fa-refresh', command: () => &#123;\n                this.update();\n            &#125;&#125;,\n            &#123;label: 'Delete', icon: 'fa-close', command: () => &#123;\n                this.delete();\n            &#125;&#125;,\n            &#123;label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'&#125;,\n            &#123;label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']&#125;\n        ];\n    &#125;\n\n    save() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Saved'&#125;);\n    &#125;\n    \n    update() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Updated'&#125;);\n    &#125;\n    \n    delete() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Deleted'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </ p-tabPanel>\n     </p-tabView >\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemoModule", function() { return SplitButtonDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitbuttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splitbuttondemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_splitbutton_splitbutton__ = __webpack_require__("../../../../../src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SplitButtonDemoModule = (function () {
    function SplitButtonDemoModule() {
    }
    return SplitButtonDemoModule;
}());
SplitButtonDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__splitbuttondemo_routing_module__["a" /* SplitButtonDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_splitbutton_splitbutton__["a" /* SplitButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__splitbuttondemo__["a" /* SplitButtonDemo */]
        ]
    })
], SplitButtonDemoModule);

//# sourceMappingURL=splitbuttondemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitButtonDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitButtonDemo = (function () {
    function SplitButtonDemo() {
        this.msgs = [];
    }
    SplitButtonDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Update', icon: 'fa-refresh', command: function () {
                    _this.update();
                } },
            { label: 'Delete', icon: 'fa-close', command: function () {
                    _this.delete();
                } },
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    };
    SplitButtonDemo.prototype.save = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    };
    SplitButtonDemo.prototype.update = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    };
    SplitButtonDemo.prototype.delete = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    };
    return SplitButtonDemo;
}());
SplitButtonDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.html")
    })
], SplitButtonDemo);

//# sourceMappingURL=splitbuttondemo.js.map

/***/ })

});
//# sourceMappingURL=splitbuttondemo.module.chunk.js.map