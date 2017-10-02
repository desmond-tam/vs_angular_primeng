webpackJsonp(["dragdropdemo.module"],{

/***/ "../../../../../src/app/components/dragdrop/dragdrop.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Draggable */
/* unused harmony export Droppable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropModule; });
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



var Draggable = (function () {
    function Draggable(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Draggable.prototype.dragStart = function (event) {
        if (this.allowDrag()) {
            if (this.dragEffect) {
                event.dataTransfer.effectAllowed = this.dragEffect;
            }
            event.dataTransfer.setData('text', this.scope);
            this.onDragStart.emit(event);
        }
        else {
            event.preventDefault();
        }
    };
    Draggable.prototype.drag = function (event) {
        this.onDrag.emit(event);
    };
    Draggable.prototype.dragEnd = function (event) {
        this.onDragEnd.emit(event);
    };
    Draggable.prototype.mouseover = function (event) {
        this.handle = event.target;
    };
    Draggable.prototype.mouseleave = function (event) {
        this.handle = null;
    };
    Draggable.prototype.allowDrag = function () {
        if (this.dragHandle && this.handle)
            return this.domHandler.matches(this.handle, this.dragHandle);
        else
            return true;
    };
    return Draggable;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('pDraggable'),
    __metadata("design:type", String)
], Draggable.prototype, "scope", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Draggable.prototype, "dragEffect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Draggable.prototype, "dragHandle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], Draggable.prototype, "onDragStart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], Draggable.prototype, "onDragEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], Draggable.prototype, "onDrag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "dragStart", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('drag', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "drag", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "dragEnd", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "mouseover", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "mouseleave", null);
Draggable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[pDraggable]',
        host: {
            '[draggable]': 'true'
        },
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _e || Object])
], Draggable);

var Droppable = (function () {
    function Droppable(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Droppable.prototype.drop = function (event) {
        if (this.allowDrop(event)) {
            event.preventDefault();
            this.onDrop.emit(event);
        }
    };
    Droppable.prototype.dragEnter = function (event) {
        event.preventDefault();
        if (this.dropEffect) {
            event.dataTransfer.dropEffect = this.dropEffect;
        }
        this.onDragEnter.emit(event);
    };
    Droppable.prototype.dragLeave = function (event) {
        event.preventDefault();
        this.onDragLeave.emit(event);
    };
    Droppable.prototype.dragOver = function (event) {
        event.preventDefault();
        this.onDragOver.emit(event);
    };
    Droppable.prototype.allowDrop = function (event) {
        var dragScope = event.dataTransfer.getData('text');
        if (typeof (this.scope) == "string" && dragScope == this.scope) {
            return true;
        }
        else if (this.scope instanceof Array) {
            for (var j = 0; j < this.scope.length; j++) {
                if (dragScope == this.scope[j]) {
                    return true;
                }
            }
        }
        return false;
    };
    return Droppable;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('pDroppable'),
    __metadata("design:type", Object)
], Droppable.prototype, "scope", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Droppable.prototype, "dropEffect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _f || Object)
], Droppable.prototype, "onDragEnter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _g || Object)
], Droppable.prototype, "onDragLeave", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _h || Object)
], Droppable.prototype, "onDrop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _j || Object)
], Droppable.prototype, "onDragOver", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Droppable.prototype, "drop", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Droppable.prototype, "dragEnter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Droppable.prototype, "dragLeave", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Droppable.prototype, "dragOver", null);
Droppable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[pDroppable]',
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _l || Object])
], Droppable);

var DragDropModule = (function () {
    function DragDropModule() {
    }
    return DragDropModule;
}());
DragDropModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [Draggable, Droppable],
        declarations: [Draggable, Droppable]
    })
], DragDropModule);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=dragdrop.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dragdrop/dragdropdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dragdropdemo__ = __webpack_require__("../../../../../src/app/showcase/components/dragdrop/dragdropdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragDropDemoRoutingModule = (function () {
    function DragDropDemoRoutingModule() {
    }
    return DragDropDemoRoutingModule;
}());
DragDropDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dragdropdemo__["a" /* DragDropDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], DragDropDemoRoutingModule);

//# sourceMappingURL=dragdropdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dragdrop/dragdropdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Drag and Drop</span>\n        <span>pDraggable and pDroppable directives apply drag-drop behaviors to any element.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Drag Only</h3>\n    <div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\">\n        <p-panel header=\"Drag Header\">\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n        </p-panel>\n    </div>\n    \n    <h3>Drag and Drop to DataTable</h3>\n    <div class=\"ui-grid ui-grid-pad ui-grid-responsive\">\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-6 ui-widget-content\" style=\"border-right:0 none\">\n                <ul style=\"margin:0;padding:0\">\n                    <li *ngFor=\"let car of availableCars\" class=\"ui-state-default ui-helper-clearfix\" pDraggable=\"cars\"\n                        (onDragStart)=\"dragStart($event,car)\" (onDragEnd)=\"dragEnd($event)\">\n                        <i class=\"fa fa-arrows fa-2x\" style=\"float:right;margin-top:8px\"></i>\n                        <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"float:left\" draggable=\"false\">\n                        <div style=\"margin:8px 0 0 8px;float:left\">{{car.vin}} - {{car.year}}</div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"ui-grid-col-6 ui-widget-content\" pDroppable=\"cars\" (onDrop)=\"drop($event)\"\n                    [ngClass]=\"{'ui-state-highlight':draggedCar}\">\n                <p-dataTable [value]=\"selectedCars\">\n                    <p-column field=\"vin\" header=\"Vin\"></p-column>\n                    <p-column field=\"year\" header=\"Year\"></p-column>\n                    <p-column field=\"brand\" header=\"Brand\"></p-column>\n                    <p-column field=\"color\" header=\"Color\"></p-column>\n                </p-dataTable>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DragDropModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>pDraggable and pDroppable are attached to a target element to add drag-drop behavior. The value of a Directive attribute is required \n            and it defines the scope to match draggables with droppables. Droppable scope can also be an array to accept multiple droppables.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDraggable=\"dd\"&gt;Draggable Div&lt;/div&gt;\n\n&lt;div pDroppable=\"dd\"&gt;Droppable Div&lt;/div&gt;\n</code>\n</pre>\n\n            <h3>Drag Handle</h3>\n            <p>Drag handle is used to restrict dragging unless mousedown occurs on the specified element. Panel below can only be dragged using its header.</p>\n\n            <pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\"&gt;\n    &lt;p-panel header=\"Drag Header\"&gt;\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;/p-panel&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n\n            <h3>Draggable</h3>\n            <h4>Attributes</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>dragEffect</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines the cursor style, valid values are none, copy, move, link, copyMove, copyLink, linkMove and all.</td>\n                        </tr>\n                        <tr>\n                            <td>dragHandle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Selector to define the drag handle, by default anywhere on the target element is a drag handle to start dragging.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4>Events</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onDragStart</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when drag begins.</td>\n                        </tr>\n                        <tr>\n                            <td>onDrag</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke on dragging.</td>\n                        </tr>\n                        <tr>\n                            <td>onDragEnd</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when drag ends.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Droppable</h3>\n            <h4>Attributes</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>dropEffect</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines the cursor style on drag over, valid values are copy, move, link and move.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4>Events</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onDragEnter</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when a draggable enters drop area.</td>\n                        </tr>\n                        <tr>\n                            <td>onDragOver</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).</td>\n                        </tr>\n                        <tr>\n                            <td>onDrop</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when a draggable is dropped onto drop area.</td>\n                        </tr>\n                        <tr>\n                            <td>onDragLeave</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when a draggable leave drop area.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n\n            <h3>Dependencies</h3>\n            <p>Native HTML5 DragDrop.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dragdrop\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Drag Only&lt;/h3&gt;\n&lt;div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\"&gt;\n    &lt;p-panel header=\"Drag Header\"&gt;\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;/p-panel&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Drag and Drop to DataTable&lt;/h3&gt;\n&lt;div class=\"ui-grid ui-grid-pad ui-grid-responsive\"&gt;\n    &lt;div class=\"ui-grid-row\"&gt;\n        &lt;div class=\"ui-grid-col-6 ui-widget-content\" style=\"border-right:0 none\"&gt;\n            &lt;ul style=\"margin:0;padding:0\"&gt;\n                &lt;li *ngFor=\"let car of availableCars\" class=\"ui-state-default ui-helper-clearfix\" pDraggable=\"cars\"\n                    (onDragStart)=\"dragStart($event,car)\" (onDragEnd)=\"dragEnd($event)\"&gt;\n                    &lt;i class=\"fa fa-arrows fa-2x\" style=\"float:right;margin-top:8px\"&gt;&lt;/i&gt;\n                    &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"float:left\" draggable=\"false\"&gt;\n                    &lt;div style=\"margin:8px 0 0 8px;float:left\"&gt;{{car.vin}} - {{car.year}}&lt;/div&gt;\n                &lt;/li&gt;\n            &lt;/ul&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-col-6 ui-widget-content\" pDroppable=\"cars\" (onDrop)=\"drop($event)\"\n                [ngClass]=\"&#123;'ui-state-highlight':draggedCar&#125;\"&gt;\n            &lt;p-dataTable [value]=\"selectedCars\"&gt;\n                &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n                &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n                &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n                &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n            &lt;/p-dataTable&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DragDropDemo &#123;\n    \n    availableCars: Car[];\n    \n    selectedCars: Car[];\n    \n    draggedCar: Car;\n    \n    constructor(private carService: CarService) &#123; &#125;\n    \n    ngOnInit() &#123;\n        this.selectedCars = [];\n        this.carService.getCarsSmall().then(cars => this.availableCars = cars);\n    &#125;\n    \n    dragStart(event,car: Car) &#123;\n        this.draggedCar = car;\n    &#125;\n    \n    drop(event) &#123;\n        if(this.draggedCar) &#123;\n            let draggedCarIndex = this.findIndex(this.draggedCar);\n            this.selectedCars = [...this.selectedCars, this.draggedCar];\n            this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);\n            this.draggedCar = null;\n        &#125;\n    &#125;\n    \n    dragEnd(event) &#123;\n        this.draggedCar = null;\n    &#125;\n    \n    findIndex(car: Car) &#123;\n        let index = -1;\n        for(let i = 0; i < this.availableCars.length; i++) &#123;\n            if(car.vin === this.availableCars[i].vin) &#123;\n                index = i;\n                break;\n            &#125;\n        &#125;\n        return index;\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dragdrop/dragdropdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDemoModule", function() { return DragDropDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dragdropdemo__ = __webpack_require__("../../../../../src/app/showcase/components/dragdrop/dragdropdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dragdropdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/dragdrop/dragdropdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dragdrop_dragdrop__ = __webpack_require__("../../../../../src/app/components/dragdrop/dragdrop.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_panel_panel__ = __webpack_require__("../../../../../src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_datatable_datatable__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DragDropDemoModule = (function () {
    function DragDropDemoModule() {
    }
    return DragDropDemoModule;
}());
DragDropDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__dragdropdemo_routing_module__["a" /* DragDropDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_dragdrop_dragdrop__["a" /* DragDropModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_panel_panel__["a" /* PanelModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_datatable_datatable__["a" /* DataTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dragdropdemo__["a" /* DragDropDemo */]
        ]
    })
], DragDropDemoModule);

//# sourceMappingURL=dragdropdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dragdrop/dragdropdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropDemo; });
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


var DragDropDemo = (function () {
    function DragDropDemo(carService) {
        this.carService = carService;
    }
    DragDropDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.availableCars = cars; });
    };
    DragDropDemo.prototype.dragStart = function (event, car) {
        this.draggedCar = car;
    };
    DragDropDemo.prototype.drop = function (event) {
        if (this.draggedCar) {
            var draggedCarIndex_1 = this.findIndex(this.draggedCar);
            this.selectedCars = this.selectedCars.concat([this.draggedCar]);
            this.availableCars = this.availableCars.filter(function (val, i) { return i != draggedCarIndex_1; });
            this.draggedCar = null;
        }
    };
    DragDropDemo.prototype.dragEnd = function (event) {
        this.draggedCar = null;
    };
    DragDropDemo.prototype.findIndex = function (car) {
        var index = -1;
        for (var i = 0; i < this.availableCars.length; i++) {
            if (car.vin === this.availableCars[i].vin) {
                index = i;
                break;
            }
        }
        return index;
    };
    return DragDropDemo;
}());
DragDropDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dragdrop/dragdropdemo.html"),
        styles: ["\n        .ui-grid li {\n            list-style-type: none;\n            padding: 10px;\n            margin-bottom: 5px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], DragDropDemo);

var _a;
//# sourceMappingURL=dragdropdemo.js.map

/***/ })

});
//# sourceMappingURL=dragdropdemo.module.chunk.js.map