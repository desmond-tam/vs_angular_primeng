webpackJsonp(["lightboxdemo.module"],{

/***/ "../../../../../src/app/components/lightbox/lightbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Lightbox */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxModule; });
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



var Lightbox = (function () {
    function Lightbox(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.type = 'image';
        this.effectDuration = '500ms';
    }
    Lightbox.prototype.onImageClick = function (event, image, i, content) {
        this.index = i;
        this.loading = true;
        content.style.width = 32 + 'px';
        content.style.height = 32 + 'px';
        this.show();
        this.displayImage(image);
        this.preventDocumentClickListener = true;
        event.preventDefault();
    };
    Lightbox.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.panel = this.domHandler.findSingle(this.el.nativeElement, '.ui-lightbox ');
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                this.domHandler.appendChild(this.panel, this.appendTo);
        }
        this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
            if (!_this.preventDocumentClickListener && _this.visible) {
                _this.hide(event);
            }
            _this.preventDocumentClickListener = false;
        });
    };
    Lightbox.prototype.onLinkClick = function (event, content) {
        this.show();
        this.preventDocumentClickListener = true;
        event.preventDefault();
    };
    Lightbox.prototype.displayImage = function (image) {
        var _this = this;
        setTimeout(function () {
            _this.currentImage = image;
            _this.captionText = image.title;
            _this.center();
        }, 1000);
    };
    Lightbox.prototype.show = function () {
        this.mask = document.createElement('div');
        this.mask.style.zIndex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        this.domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
        document.body.appendChild(this.mask);
        this.zindex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        this.center();
        this.visible = true;
    };
    Lightbox.prototype.hide = function (event) {
        this.captionText = null;
        this.index = null;
        this.currentImage = null;
        this.visible = false;
        this.panel.style.left = 'auto';
        this.panel.style.top = 'auto';
        if (this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }
        event.preventDefault();
    };
    Lightbox.prototype.center = function () {
        var elementWidth = this.domHandler.getOuterWidth(this.panel);
        var elementHeight = this.domHandler.getOuterHeight(this.panel);
        if (elementWidth == 0 && elementHeight == 0) {
            this.panel.style.visibility = 'hidden';
            this.panel.style.display = 'block';
            elementWidth = this.domHandler.getOuterWidth(this.panel);
            elementHeight = this.domHandler.getOuterHeight(this.panel);
            this.panel.style.display = 'none';
            this.panel.style.visibility = 'visible';
        }
        var viewport = this.domHandler.getViewport();
        var x = (viewport.width - elementWidth) / 2;
        var y = (viewport.height - elementHeight) / 2;
        this.panel.style.left = x + 'px';
        this.panel.style.top = y + 'px';
    };
    Lightbox.prototype.onImageLoad = function (event, content) {
        var _this = this;
        var image = event.target;
        image.style.visibility = 'hidden';
        image.style.display = 'block';
        var imageWidth = this.domHandler.getOuterWidth(image);
        var imageHeight = this.domHandler.getOuterHeight(image);
        image.style.display = 'none';
        image.style.visibility = 'visible';
        content.style.width = imageWidth + 'px';
        content.style.height = imageHeight + 'px';
        this.panel.style.left = parseInt(this.panel.style.left) + (this.domHandler.getOuterWidth(this.panel) - imageWidth) / 2 + 'px';
        this.panel.style.top = parseInt(this.panel.style.top) + (this.domHandler.getOuterHeight(this.panel) - imageHeight) / 2 + 'px';
        setTimeout(function () {
            _this.domHandler.fadeIn(image, 500);
            image.style.display = 'block';
            //this.captionText = this.currentImage.title;
            _this.loading = false;
        }, parseInt(this.effectDuration));
    };
    Lightbox.prototype.prev = function (placeholder) {
        this.captionText = null;
        this.loading = true;
        placeholder.style.display = 'none';
        if (this.index > 0) {
            this.displayImage(this.images[--this.index]);
        }
    };
    Lightbox.prototype.next = function (placeholder) {
        this.captionText = null;
        this.loading = true;
        placeholder.style.display = 'none';
        if (this.index <= (this.images.length - 1)) {
            this.displayImage(this.images[++this.index]);
        }
    };
    Object.defineProperty(Lightbox.prototype, "leftVisible", {
        get: function () {
            return this.images && this.images.length && this.index != 0 && !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lightbox.prototype, "rightVisible", {
        get: function () {
            return this.images && this.images.length && this.index < (this.images.length - 1) && !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    Lightbox.prototype.ngOnDestroy = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.panel);
        }
    };
    return Lightbox;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], Lightbox.prototype, "images", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Lightbox.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Lightbox.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Lightbox.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Lightbox.prototype, "appendTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Lightbox.prototype, "easing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Lightbox.prototype, "effectDuration", void 0);
Lightbox = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-lightbox',
        template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"(type == 'image')\">\n            <a *ngFor=\"let image of images; let i = index;\" [href]=\"image.source\" (click)=\"onImageClick($event,image,i,content)\">\n                <img [src]=\"image.thumbnail\" [title]=\"image.title\" [alt]=\"image.alt\">\n            </a>\n        </div>\n        <span [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"(type == 'content')\" (click)=\"onLinkClick($event,content)\">\n            <ng-content select=\"a\"></ng-content>\n        </span>\n        <div class=\"ui-lightbox ui-widget ui-helper-hidden ui-corner-all ui-shadow\" [style.display]=\"visible ? 'block' : 'none'\" [style.zIndex]=\"zindex\"\n            [ngClass]=\"{'ui-lightbox-loading': loading}\"\n            [style.transitionProperty]=\"'all'\" [style.transitionDuration]=\"effectDuration\" [style.transitionTimingFunction]=\"easing\" (click)=\"preventDocumentClickListener=true\">\n           <div class=\"ui-lightbox-content-wrapper\">\n              <a class=\"ui-state-default ui-lightbox-nav-left ui-corner-right\" [style.zIndex]=\"zindex + 1\" (click)=\"prev(img)\"\n                [ngClass]=\"{'ui-helper-hidden':!leftVisible}\"><span class=\"fa fa-fw fa-caret-left\"></span></a>\n              <div #content class=\"ui-lightbox-content ui-corner-all\" #content \n                [style.transitionProperty]=\"'width,height'\" [style.transitionDuration]=\"effectDuration\" [style.transitionTimingFunction]=\"easing\">\n                <img #img [src]=\"currentImage ? currentImage.source||'' : ''\" (load)=\"onImageLoad($event,content)\" style=\"display:none\">\n                <ng-content></ng-content>\n              </div>\n              <a class=\"ui-state-default ui-lightbox-nav-right ui-corner-left ui-helper-hidden\" [style.zIndex]=\"zindex + 1\" (click)=\"next(img)\"\n                [ngClass]=\"{'ui-helper-hidden':!rightVisible}\"><span class=\"fa fa-fw fa-caret-right\"></span></a>\n           </div>\n           <div class=\"ui-lightbox-caption ui-widget-header\" [style.display]=\"captionText ? 'block' : 'none'\">\n              <span class=\"ui-lightbox-caption-text\">{{captionText}}</span><a class=\"ui-lightbox-close ui-corner-all\" href=\"#\" (click)=\"hide($event)\"><span class=\"fa fa-fw fa-close\"></span></a>\n              <div style=\"clear:both\"></div>\n           </div>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object])
], Lightbox);

var LightboxModule = (function () {
    function LightboxModule() {
    }
    return LightboxModule;
}());
LightboxModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [Lightbox],
        declarations: [Lightbox]
    })
], LightboxModule);

var _a, _b, _c;
//# sourceMappingURL=lightbox.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LightboxDemoRoutingModule = (function () {
    function LightboxDemoRoutingModule() {
    }
    return LightboxDemoRoutingModule;
}());
LightboxDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__["a" /* LightboxDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], LightboxDemoRoutingModule);

//# sourceMappingURL=lightboxdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Lightbox</span>\n        <span>LightBox is a modal overlay component to display images, videos, inline html content and iframes.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-lightbox [images]=\"images\"></p-lightbox>\n\n    <h3>Content</h3>\n    <p-lightbox type=\"content\">\n        <a class=\"group\" href=\"#\">\n            Watch Video\n        </a>\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen></iframe>\n    </p-lightbox>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;LightboxModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Lightbox has two modes; <i>image</i> and <i>custom content</i> defined using type property. In image mode a collection of\n            images are required to display where an image object in the collection defines the source of the original image, thumbnail image and the title.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LightboxDemo &#123;\n\n    images: any[];\n\n    constructor() &#123;\n        this.images = [];\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n            <p>Content mode is enabled by setting type property to \"content\", providing an anchor to open the lightbox and content to display inside lightbox.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox type=\"content\"&gt;\n    &lt;a class=\"group\" href=\"#\"&gt;\n        Watch Video\n    &lt;/a&gt;\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\n&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n            <h3>Effects</h3>\n            <p>The easing function to use between image transitions is \"ease-out\" by default and this can be customized using easing property. \n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values. Duration\n            of the effect can be changed using effectDuration option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox [images]=\"images\" easing=\"ease-in\" effectDuration=\"1500ms\"&gt;&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>images</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of images to display.</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>image</td>\n                            <td>Type of the lightbox, valid values are \"image\" and \"content\".</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>easing</td>\n                            <td>string</td>\n                            <td>ease-out</td>\n                            <td>Easing to use for transition between images.</td>\n                        </tr>\n                        <tr>\n                            <td>effectDuration</td>\n                            <td>string</td>\n                            <td>500ms</td>\n                            <td>Duration of the transition between the images.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-lightbox</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-nav-right</td>\n                            <td>Element to navigate to next image.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-nav-left</td>\n                            <td>Element to navigate to previous image.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-caption</td>\n                            <td>Caption element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-caption-text</td>\n                            <td>Text of caption.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-close</td>\n                            <td>Close icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/lightbox\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\n\n&lt;h3&gt;Content&lt;/h3&gt;\n&lt;p-lightbox type=\"content\"&gt;\n    &lt;a class=\"group\" href=\"#\"&gt;\n        Watch Video\n    &lt;/a&gt;\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\n&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LightboxDemo &#123;\n\n    images: any[];\n\n    constructor() &#123;\n        this.images = [];\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxDemoModule", function() { return LightboxDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lightboxdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_lightbox_lightbox__ = __webpack_require__("../../../../../src/app/components/lightbox/lightbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LightboxDemoModule = (function () {
    function LightboxDemoModule() {
    }
    return LightboxDemoModule;
}());
LightboxDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__lightboxdemo_routing_module__["a" /* LightboxDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_lightbox_lightbox__["a" /* LightboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__["a" /* LightboxDemo */]
        ]
    })
], LightboxDemoModule);

//# sourceMappingURL=lightboxdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightboxDemo = (function () {
    function LightboxDemo() {
        this.images = [];
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title: 'Sopranos 1' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title: 'Sopranos 2' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title: 'Sopranos 3' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title: 'Sopranos 4' });
    }
    return LightboxDemo;
}());
LightboxDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.html")
    }),
    __metadata("design:paramtypes", [])
], LightboxDemo);

//# sourceMappingURL=lightboxdemo.js.map

/***/ })

});
//# sourceMappingURL=lightboxdemo.module.chunk.js.map