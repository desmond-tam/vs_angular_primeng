webpackJsonp(["paneldemo.module"],{

/***/ "../../../../../src/app/showcase/components/panel/paneldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paneldemo__ = __webpack_require__("../../../../../src/app/showcase/components/panel/paneldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PanelDemoRoutingModule = (function () {
    function PanelDemoRoutingModule() {
    }
    return PanelDemoRoutingModule;
}());
PanelDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__paneldemo__["a" /* PanelDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], PanelDemoRoutingModule);

//# sourceMappingURL=paneldemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/panel/paneldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Panel</span>\n        <span>Panel is a grouping component providing with content toggle feature.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n\n    <p-panel header=\"Godfather I\" [toggleable]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    </p-panel>\n        \n    <p-panel>\n        <p-header>\n            <div class=\"ui-helper-clearfix\">\n                <span class=\"ui-panel-title\" style=\"display:inline-block;margin-top:.4em\">Custom Header</span>\n                \n                <p-splitButton [style]=\"{'float':'right'}\" label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"></p-splitButton>\n            </div>\n        </p-header>\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n        <p-footer>\n            <button pButton type=\"button\" icon=\"fa-plus\" label=\"New\" class=\"ui-button-info\"></button>\n            <button pButton type=\"button\" icon=\"fa-list\" label=\"View\" class=\"ui-button-success\"></button>\n        </p-footer>\n    </p-panel>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;PanelModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Panel is defined with p-panel element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panel header=\"Title\"&gt;\n    Content\n&lt;/p-panel&gt;\n</code>\n</pre>\n            <h3>Toggleable</h3>\n            <p>Content of the panel can be expanded and collapsed using toggleable option, default state is defined with collapsed option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panel header=\"Title\" [toggleable]=\"true\"&gt;\n    Content\n&lt;/p-panel&gt;\n</code>\n</pre>\n\n            <h3>Header and Footer Content</h3>\n            <p>Header and Footers sections can be customized using p-header and p-footer components.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panel &gt;\n    &lt;p-header&gt;\n        Header content here\n    &lt;/p-header&gt;\n    Body Content\n    &lt;p-footer&gt;\n        Footer content here\n    &lt;/p-footer&gt;\n&lt;/p-panel&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of the panel.</td>\n                        </tr>\n                        <tr>\n                            <td>toggleable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if content of panel can be expanded and collapsed.</td>\n                        </tr>\n                        <tr>\n                            <td>collapsed</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines the initial state of panel content, supports one or two-way binding as well.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>expandIcon</td>\n                            <td>string</td>\n                            <td>fa-plus</td>\n                            <td>Expand icon of the toggle button.</td>\n                        </tr>\n                        <tr>\n                            <td>collapseIcon</td>\n                            <td>string</td>\n                            <td>fa-minus</td>\n                            <td>Collapsed icon of the toggle button.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onBeforeToggle</td>\n                            <td>event.originalEvent: browser event<br>\n                                event.collapsed: state as a boolean</td>\n                            <td>Callback to invoke before content toggle.</td>\n                        </tr>\n                        <tr>\n                            <td>onAfterToggle</td>\n                            <td>event.originalEvent: browser event<br>\n                                event.collapsed: state as a boolean</td>\n                            <td>Callback to invoke after content toggle.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-panel</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panel-titlebar</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panel-title</td>\n                            <td>Title text of panel.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panel-titlebar-toggler</td>\n                            <td>Toggle icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panel-content</td>\n                            <td>Content of panel.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n        <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panel\" class=\"btn-viewsource\" target=\"_blank\">\n            <i class=\"fa fa-github\"></i>\n            <span>View on GitHub</span>\n        </a>\n        \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-panel header=\"Godfather I\" [toggleable]=\"true\" [style]=\"&#123;'margin-bottom':'20px'&#125;\"&gt;\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n&lt;/p-panel&gt;\n\n&lt;p-panel&gt;\n    &lt;p-header&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px\"&gt;Custom Header&lt;/span&gt;\n            \n            &lt;p-splitButton [style]=\"&#123;'float':'right'&#125;\" label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\n        &lt;/div&gt;\n    &lt;/p-header&gt;\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;p-footer&gt;\n        &lt;button pButton type=\"button\" icon=\"fa-plus\" label=\"New\" class=\"ui-button-info\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" icon=\"fa-list\" label=\"View\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;/p-footer&gt;\n&lt;/p-panel&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/panel/paneldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemoModule", function() { return PanelDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paneldemo__ = __webpack_require__("../../../../../src/app/showcase/components/panel/paneldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paneldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/panel/paneldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_panel_panel__ = __webpack_require__("../../../../../src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_splitbutton_splitbutton__ = __webpack_require__("../../../../../src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PanelDemoModule = (function () {
    function PanelDemoModule() {
    }
    return PanelDemoModule;
}());
PanelDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__paneldemo_routing_module__["a" /* PanelDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_panel_panel__["a" /* PanelModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_splitbutton_splitbutton__["a" /* SplitButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__paneldemo__["a" /* PanelDemo */]
        ]
    })
], PanelDemoModule);

//# sourceMappingURL=paneldemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/panel/paneldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelDemo = (function () {
    function PanelDemo() {
        this.msgs = [];
    }
    PanelDemo.prototype.ngOnInit = function () {
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
    PanelDemo.prototype.save = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    };
    PanelDemo.prototype.update = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    };
    PanelDemo.prototype.delete = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    };
    return PanelDemo;
}());
PanelDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/panel/paneldemo.html")
    })
], PanelDemo);

//# sourceMappingURL=paneldemo.js.map

/***/ })

});
//# sourceMappingURL=paneldemo.module.chunk.js.map