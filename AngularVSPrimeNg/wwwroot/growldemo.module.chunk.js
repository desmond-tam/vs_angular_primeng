webpackJsonp(["growldemo.module"],{

/***/ "../../../../../src/app/showcase/components/growl/growldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowlDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__growldemo__ = __webpack_require__("../../../../../src/app/showcase/components/growl/growldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GrowlDemoRoutingModule = (function () {
    function GrowlDemoRoutingModule() {
    }
    return GrowlDemoRoutingModule;
}());
GrowlDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__growldemo__["a" /* GrowlDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], GrowlDemoRoutingModule);

//# sourceMappingURL=growldemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/growl/growldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Growl</span>\n        <span>Growl is used to display messages in an overlay.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [(value)]=\"msgs\"></p-growl>\n\n    <h3 class=\"first\">Basic</h3>\n    <div>\n        <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"></button>\n        <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"></button>\n        <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"></button>\n        <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"></button>\n        <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"></button>\n        <button type=\"button\" pButton (click)=\"clear()\" icon=\"fa-close\" style=\"float:right\" label=\"Clear\"></button>\n    </div>\n    \n    <h3>Message Service</h3>\n    <button type=\"button\" pButton (click)=\"showViaService()\" label=\"Add with Service\"></button>\n    <button type=\"button\" pButton (click)=\"clearViaService()\" label=\"Clear with Service\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;GrowlModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>A single message is specified by Message interface in PrimeNG that defines the id, severity, summary and detail as properties.\n            Messages to display on growl can either be defined using the value property which should an array of Message instances or using \n            a MessageService.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Message&#125; from 'primeng/primeng';\n\nexport class MyModel &#123;\n\n    msgs: Message[] = [];\n\n&#125;\n</code>\n</pre>\n            \n            <h3>Message Service</h3>\n            <p>MessageService allows having one growl in the entire application instead of having separate ones in each component that uses it.\n            In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself \n            so that descandant components can have it injected.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;Message&#125; from 'primeng/components/common/api';\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\n\n@Component(&#123;\n    templateUrl: './growldemo.html'\n&#125;)\nexport class MessageServiceDemo &#123;\n    \n    constructor(private messageService: MessageService) &#123;&#125;\n    \n    addSingle() &#123;\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\n    &#125;\n    \n    addMultiple() &#123;\n        this.messageService.addAll([&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;,\n                                    &#123;severity:'info', summary:'Info Message', detail:'Via MessageService'&#125;]);\n    &#125;\n    \n    clear() &#123;\n        this.messageService.clear();\n    &#125;\n&#125;\n</code>\n</pre>\n        \n            <h3>Change Detection</h3>\n            <p>In case messages are provided via the value property instead of service, growl either uses setter based checking or ngDoCheck to realize if the messages has changed to update the UI. This is configured using the immutable\n                property, when enabled (default) setter based detection is utilized so your changes such as adding or removing a record \n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change. \n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\n                both methods can be used depending on your preference. Note that immutable property also defines how Growl treats the value, for example\n                when immutable is enabled removing a message does not mutate the original value but creates a new array.\n            </p>\n\n            <h3>Severities</h3>\n            <p>Here are the possible values for the severity of a message.</p>\n            <ul>\n                <li>success</li>\n                <li>info</li>\n                <li>warn</li>\n                <li>error</li>\n            </ul>\n\n            <h3>Showing Messages</h3>\n            <p>Adding messages to the array is enough to display them via growl. Similary removing a message\n            from the array is also removed by growl.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\n    \n&lt;button type=\"button\" (click)=\"show()\"&gt;Show&lt;/button&gt;\n&lt;button type=\"button\" (click)=\"clear()\"&gt;Clear&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nshow() &#123;\n    this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\n&#125;\n\nclear() &#123;\n    this.msgs = [];\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of messages to display.</td>\n                        </tr>\n                        <tr>\n                            <td>sticky</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When defined, growl messages are not removed automatically after a period defined by life option.</td>\n                        </tr>\n                        <tr>\n                            <td>life</td>\n                            <td>number</td>\n                            <td>3000</td>\n                            <td>Time to display a message in milliseconds before removing it.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>immutable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines how the messages data should be manipulated.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onClose</td>\n                            <td>message: Removed message</td>\n                            <td>Callback to invoke when a message is closed.</td>\n                        </tr>\n                        <tr>\n                            <td>onClick</td>\n                            <td>message: Clicked message</td>\n                            <td>Callback to invoke when a message is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onHover</td>\n                            <td>message: Hovered message</td>\n                            <td>Callback to invoke when mouse enters a message.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-growl</td>\n                            <td>Main container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-growl-container</td>\n                            <td>Container of a message item.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-growl-item</td>\n                            <td>Message element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-growl-icon-close</td>\n                            <td>Close icon of a message.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-growl-image</td>\n                            <td>Severity icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-growl-message</td>\n                            <td>Container of message texts.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-growl-title</td>\n                            <td>Summary of the message.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/growl\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;div&gt;\n    &lt;button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"clear()\" icon=\"fa-close\" style=\"float:right\" label=\"Clear\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Message Service&lt;/h3&gt;\n&lt;button type=\"button\" pButton (click)=\"showViaService()\" label=\"Add with Service\"&gt;&lt;/button&gt;\n&lt;button type=\"button\" pButton (click)=\"clearViaService()\" label=\"Clear with Service\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;SelectItem&#125; from 'primeng/components/common/api';\nimport &#123;Message&#125; from 'primeng/components/common/api';\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\n\n@Component(&#123;\n    templateUrl: './growldemo.html',\n    providers: [MessageService]\n&#125;)\nexport class GrowlDemo &#123;\n\n    msgs: Message[] = [];\n    \n    constructor(private messageService: MessageService) &#123;&#125;\n\n    showSuccess() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'success', summary:'Success Message', detail:'Order submitted'&#125;);\n    &#125;\n\n    showInfo() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\n    &#125;\n\n    showWarn() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'&#125;);\n    &#125;\n\n    showError() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'error', summary:'Error Message', detail:'Validation failed'&#125;);\n    &#125;\n\n    showMultiple() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Message 1', detail:'PrimeNG rocks'&#125;);\n        this.msgs.push(&#123;severity:'info', summary:'Message 2', detail:'PrimeUI rocks'&#125;);\n        this.msgs.push(&#123;severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'&#125;);\n    &#125;\n    \n    showViaService() &#123;\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\n    &#125;\n    \n    clearViaService() &#123;\n        this.messageService.clear();\n    &#125;\n\n    clear() &#123;\n        this.msgs = [];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/growl/growldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlDemoModule", function() { return GrowlDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__growldemo__ = __webpack_require__("../../../../../src/app/showcase/components/growl/growldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__growldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/growl/growldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GrowlDemoModule = (function () {
    function GrowlDemoModule() {
    }
    return GrowlDemoModule;
}());
GrowlDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__growldemo_routing_module__["a" /* GrowlDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__growldemo__["a" /* GrowlDemo */]
        ]
    })
], GrowlDemoModule);

//# sourceMappingURL=growldemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/growl/growldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowlDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__ = __webpack_require__("../../../../../src/app/components/common/messageservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GrowlDemo = (function () {
    function GrowlDemo(messageService) {
        this.messageService = messageService;
        this.msgs = [];
    }
    GrowlDemo.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    };
    GrowlDemo.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    GrowlDemo.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    GrowlDemo.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    GrowlDemo.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    GrowlDemo.prototype.showViaService = function () {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    };
    GrowlDemo.prototype.clearViaService = function () {
        this.messageService.clear();
    };
    GrowlDemo.prototype.clear = function () {
        this.msgs = [];
    };
    return GrowlDemo;
}());
GrowlDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/growl/growldemo.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */]) === "function" && _a || Object])
], GrowlDemo);

var _a;
//# sourceMappingURL=growldemo.js.map

/***/ })

});
//# sourceMappingURL=growldemo.module.chunk.js.map