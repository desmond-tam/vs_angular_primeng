webpackJsonp(["dialogdemo.module"],{

/***/ "../../../../../src/app/showcase/components/dialog/dialogdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/dialogdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DialogDemoRoutingModule = (function () {
    function DialogDemoRoutingModule() {
    }
    return DialogDemoRoutingModule;
}());
DialogDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dialogdemo__["a" /* DialogDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], DialogDemoRoutingModule);

//# sourceMappingURL=dialogdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/dialogdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Dialog</span>\n        <span>Dialog is a container to display content in an overlay window.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"300\" [minWidth]=\"200\">\n        <span>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n           His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n           Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n           kind and benevolent to those who give respect,\n           but given to ruthless violence whenever anything stands against the good of the family.</span>\n           <p-footer>\n               <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\n               <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\n           </p-footer>\n    </p-dialog>\n\n    <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Show\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DialogModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Dialog is used as a container and visibility is controlled with visible property.</p>\n                    \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dialog header=\"Title\" [(visible)]=\"display\"&gt;\n    Content\n&lt;/p-dialog&gt;\n\n&lt;button type=\"text\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Show\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    display: boolean = false;\n\n    showDialog() &#123;\n        this.display = true;\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>By default dialog is hidden and enabling the visible property displays the dialog. As visible supports\n            two-way binding, hiding the dialog with close button updates the visible state as false.</p>\n            \n            <h3>Width</h3>\n            <p>When the content of the dialog is fluid, dialog width may grow unexpectedly, in this case define a fixed width to the dialog\n                or the content.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dialog header=\"Title\" [(visible)]=\"display\" [width]=\"300\"&gt;\n    Content\n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n            <h3>Header and Footer</h3>\n            <p>Header and Footer sections are useful to include custom content. Note that Header and Footer components should be imported and defined\n            at directives section of your component for this to work.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dialog [(visible)]=\"display\"&gt;\n    &lt;p-header&gt;\n        Header content here\n    &lt;/p-header&gt;\n    Content\n    &lt;p-footer&gt;\n        //buttons\n    &lt;/p-footer&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n            <h3>Overlays Inside</h3>\n            <p>When dialog includes other components with overlays such as dropdown, the overlay part cannot exceed dialog boundaries due to overflow. In order to solve this, you can \n            either append the overlay to the body or allow overflow in dialog.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dialog&gt;\n    &lt;p-dropdown appendTo=\"body\"&gt;&lt;/p-dropdown&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dialog [contentStyle]=\"&#123;'overflow':'visible'&#125;\"&gt;\n    &lt;p-dropdown&gt;&lt;/p-dropdown&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n            <h3>RTL Support</h3>\n            <p>RTL orientation is enabled by adding \"ui-rtl\" to an ancestor element of dialog in combination with standard dir=\"rtl\" option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"ui-rtl\" dir=\"rtl\"&gt;\n    &lt;p-dialog [(visible)]=\"display\"&gt;\n        &lt;p-header&gt;\n            Header content here\n        &lt;/p-header&gt;\n        Content\n        &lt;p-footer&gt;\n            Footer content here\n        &lt;/p-footer&gt;\n    &lt;/p-dialog&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                         <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Title text of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>draggable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Enables dragging to change the position using header.</td>\n                        </tr>\n                        <tr>\n                            <td>resizable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Enables resizing of the content.</td>\n                        </tr>\n                        <tr>\n                            <td>minWidth</td>\n                            <td>number</td>\n                            <td>150</td>\n                            <td>Minimum width of a resizable dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>minHeight</td>\n                            <td>number</td>\n                            <td>150</td>\n                            <td>Minimum width of a resizable dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>width</td>\n                            <td>int</td>\n                            <td>300</td>\n                            <td>Width of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>height</td>\n                            <td>int</td>\n                            <td>auto</td>\n                            <td>Height of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>contentStyle</td>\n                            <td>object</td>\n                            <td>null</td>\n                            <td>Style of the content section.</td>\n                        </tr>\n                        <tr>\n                            <td>visible</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Specifies the visibility of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>modal</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if background should be blocked when dialog is displayed.</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnEscape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Specifices if pressing escape key should hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>dismissableMask</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Specifices if clicking the modal background should hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>rtl</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled dialog is displayed in RTL direction.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Adds a close icon to the header to hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>responsive</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>In responsive mode, dialog adjusts itself to screen width.</td>\n                        </tr>\n                        <tr>\n                            <td>breakpoint</td>\n                            <td>number</td>\n                            <td>640</td>\n                            <td>Maximum screen width to display the dialog with 100% width in responsive mode.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>showHeader</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show the header or not.</td>\n                        </tr>\n                        <tr>\n                            <td>positionLeft</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Left coordinate value of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>positionTop</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Top coordinate value of the dialog.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onShow</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when dialog is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when dialog is hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-dialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar</td>\n                            <td>Container of header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-title</td>\n                            <td>Header element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-icon</td>\n                            <td>Icon container inside header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-close</td>\n                            <td>Close icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-footer</td>\n                            <td>Footer element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dialog\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" width=\"300\" [responsive]=\"true\"&gt;\n    &lt;p&gt;The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n       His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n       Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n       kind and benevolent to those who give respect, \n       but given to ruthless violence whenever anything stands against the good of the family.&lt;/p&gt;\n        &lt;p-footer&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"&gt;&lt;/button&gt;\n        &lt;/p-footer&gt;\n&lt;/p-dialog&gt;\n\n&lt;button type=\"button\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Show\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DialogDemo &#123;\n\n    display: boolean = false;\n\n    showDialog() &#123;\n        this.display = true;\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/dialogdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDemoModule", function() { return DialogDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/dialogdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/dialogdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DialogDemoModule = (function () {
    function DialogDemoModule() {
    }
    return DialogDemoModule;
}());
DialogDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__dialogdemo_routing_module__["a" /* DialogDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_dialog_dialog__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dialogdemo__["a" /* DialogDemo */]
        ]
    })
], DialogDemoModule);

//# sourceMappingURL=dialogdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/dialogdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DialogDemo = (function () {
    function DialogDemo() {
        this.display = false;
    }
    DialogDemo.prototype.showDialog = function () {
        this.display = true;
    };
    DialogDemo.prototype.hideDialog = function () {
        this.display = false;
    };
    return DialogDemo;
}());
DialogDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/dialogdemo.html")
    })
], DialogDemo);

//# sourceMappingURL=dialogdemo.js.map

/***/ })

});
//# sourceMappingURL=dialogdemo.module.chunk.js.map