webpackJsonp(["fileuploaddemo.module"],{

/***/ "../../../../../src/app/components/fileupload/fileupload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FileUpload */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_messages__ = __webpack_require__("../../../../../src/app/components/messages/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progressbar_progressbar__ = __webpack_require__("../../../../../src/app/components/progressbar/progressbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FileUpload = (function () {
    function FileUpload(domHandler, sanitizer, zone) {
        this.domHandler = domHandler;
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.method = 'POST';
        this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
        this.invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
        this.invalidFileTypeMessageDetail = 'allowed file types: {0}.';
        this.previewWidth = 50;
        this.chooseLabel = 'Choose';
        this.uploadLabel = 'Upload';
        this.cancelLabel = 'Cancel';
        this.showUploadButton = true;
        this.showCancelButton = true;
        this.mode = 'advanced';
        this.onBeforeUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onBeforeSend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onClear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onProgress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.uploadHandler = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.progress = 0;
    }
    FileUpload.prototype.ngOnInit = function () {
        this.files = [];
    };
    FileUpload.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'file':
                    _this.fileTemplate = item.template;
                    break;
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                case 'toolbar':
                    _this.toolbarTemplate = item.template;
                    break;
                default:
                    _this.fileTemplate = item.template;
                    break;
            }
        });
    };
    FileUpload.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.mode === 'advanced') {
            this.zone.runOutsideAngular(function () {
                _this.content.nativeElement.addEventListener('dragover', _this.onDragOver.bind(_this));
            });
        }
    };
    FileUpload.prototype.onFileSelect = function (event) {
        this.msgs = [];
        if (!this.multiple) {
            this.files = [];
        }
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (this.isFileSelected(file)) {
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                    }
                    this.files.push(files[i]);
                }
            }
        }
        this.onSelect.emit({ originalEvent: event, files: files });
        if (this.hasFiles() && this.auto) {
            this.upload();
        }
        this.clearInputElement();
    };
    FileUpload.prototype.isFileSelected = function (file) {
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var sFile = _a[_i];
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size))
                return false;
        }
        return true;
    };
    FileUpload.prototype.validate = function (file) {
        if (this.accept && !this.isFileTypeValid(file)) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
            });
            return false;
        }
        if (this.maxFileSize && file.size > this.maxFileSize) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
            });
            return false;
        }
        return true;
    };
    FileUpload.prototype.isFileTypeValid = function (file) {
        var acceptableTypes = this.accept.split(',');
        for (var _i = 0, acceptableTypes_1 = acceptableTypes; _i < acceptableTypes_1.length; _i++) {
            var type = acceptableTypes_1[_i];
            var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)
                : file.type == type || this.getFileExtension(file) === type;
            if (acceptable) {
                return true;
            }
        }
        return false;
    };
    FileUpload.prototype.getTypeClass = function (fileType) {
        return fileType.substring(0, fileType.indexOf('/'));
    };
    FileUpload.prototype.isWildcard = function (fileType) {
        return fileType.indexOf('*') !== -1;
    };
    FileUpload.prototype.getFileExtension = function (file) {
        return '.' + file.name.split('.').pop();
    };
    FileUpload.prototype.isImage = function (file) {
        return /^image\//.test(file.type);
    };
    FileUpload.prototype.onImageLoad = function (img) {
        window.URL.revokeObjectURL(img.src);
    };
    FileUpload.prototype.upload = function () {
        var _this = this;
        if (this.customUpload) {
            this.uploadHandler.emit({
                files: this.files
            });
        }
        else {
            this.msgs = [];
            var xhr_1 = new XMLHttpRequest(), formData = new FormData();
            this.onBeforeUpload.emit({
                'xhr': xhr_1,
                'formData': formData
            });
            for (var i = 0; i < this.files.length; i++) {
                formData.append(this.name, this.files[i], this.files[i].name);
            }
            xhr_1.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    _this.progress = Math.round((e.loaded * 100) / e.total);
                }
                _this.onProgress.emit({ originalEvent: e, progress: _this.progress });
            }, false);
            xhr_1.onreadystatechange = function () {
                if (xhr_1.readyState == 4) {
                    _this.progress = 0;
                    if (xhr_1.status >= 200 && xhr_1.status < 300)
                        _this.onUpload.emit({ xhr: xhr_1, files: _this.files });
                    else
                        _this.onError.emit({ xhr: xhr_1, files: _this.files });
                    _this.clear();
                }
            };
            xhr_1.open(this.method, this.url, true);
            this.onBeforeSend.emit({
                'xhr': xhr_1,
                'formData': formData
            });
            xhr_1.withCredentials = this.withCredentials;
            xhr_1.send(formData);
        }
    };
    FileUpload.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
        this.clearInputElement();
    };
    FileUpload.prototype.remove = function (event, index) {
        this.clearInputElement();
        this.onRemove.emit({ originalEvent: event, file: this.files[index] });
        this.files.splice(index, 1);
    };
    FileUpload.prototype.clearInputElement = function () {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.advancedFileInput.nativeElement.value = '';
        }
    };
    FileUpload.prototype.hasFiles = function () {
        return this.files && this.files.length > 0;
    };
    FileUpload.prototype.onDragEnter = function (e) {
        if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragOver = function (e) {
        if (!this.disabled) {
            this.domHandler.addClass(this.content.nativeElement, 'ui-fileupload-highlight');
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragLeave = function (event) {
        if (!this.disabled) {
            this.domHandler.removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
        }
    };
    FileUpload.prototype.onDrop = function (event) {
        if (!this.disabled) {
            this.domHandler.removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            var allowDrop = this.multiple || (files && files.length === 1);
            if (allowDrop) {
                this.onFileSelect(event);
            }
        }
    };
    FileUpload.prototype.onFocus = function () {
        this.focus = true;
    };
    FileUpload.prototype.onBlur = function () {
        this.focus = false;
    };
    FileUpload.prototype.formatSize = function (bytes) {
        if (bytes == 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    FileUpload.prototype.onSimpleUploaderClick = function (event) {
        if (this.hasFiles()) {
            this.upload();
        }
    };
    FileUpload.prototype.ngOnDestroy = function () {
        if (this.content && this.content.nativeElement) {
            this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
        }
    };
    return FileUpload;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "method", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "multiple", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "accept", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "auto", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "withCredentials", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FileUpload.prototype, "maxFileSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "invalidFileSizeMessageSummary", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "invalidFileSizeMessageDetail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "invalidFileTypeMessageSummary", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "invalidFileTypeMessageDetail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FileUpload.prototype, "previewWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "chooseLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "uploadLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "cancelLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "showUploadButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "showCancelButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FileUpload.prototype, "mode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "customUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], FileUpload.prototype, "onBeforeUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], FileUpload.prototype, "onBeforeSend", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], FileUpload.prototype, "onUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], FileUpload.prototype, "onError", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _e || Object)
], FileUpload.prototype, "onClear", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _f || Object)
], FileUpload.prototype, "onRemove", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _g || Object)
], FileUpload.prototype, "onSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _h || Object)
], FileUpload.prototype, "onProgress", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _j || Object)
], FileUpload.prototype, "uploadHandler", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_7__common_shared__["f" /* PrimeTemplate */]),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _k || Object)
], FileUpload.prototype, "templates", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('advancedfileinput'),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _l || Object)
], FileUpload.prototype, "advancedFileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('basicfileinput'),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _m || Object)
], FileUpload.prototype, "basicFileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('content'),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _o || Object)
], FileUpload.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], FileUpload.prototype, "files", void 0);
FileUpload = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'p-fileUpload',
        template: "\n        <div [ngClass]=\"'ui-fileupload ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"mode === 'advanced'\">\n            <div class=\"ui-fileupload-buttonbar ui-widget-header ui-corner-top\">\n                <span class=\"ui-fileupload-choose\" [label]=\"chooseLabel\" icon=\"fa-plus\" pButton  [ngClass]=\"{'ui-state-focus': focus}\" [attr.disabled]=\"disabled\" > \n                    <input #advancedfileinput type=\"file\" (change)=\"onFileSelect($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" >\n                </span>\n\n                <button *ngIf=\"!auto&&showUploadButton\" type=\"button\" [label]=\"uploadLabel\" icon=\"fa-upload\" pButton (click)=\"upload()\" [disabled]=\"!hasFiles()\"></button>\n                <button *ngIf=\"!auto&&showCancelButton\" type=\"button\" [label]=\"cancelLabel\" icon=\"fa-close\" pButton (click)=\"clear()\" [disabled]=\"!hasFiles()\"></button>\n            \n                <p-templateLoader [template]=\"toolbarTemplate\"></p-templateLoader>\n            </div>\n            <div #content [ngClass]=\"{'ui-fileupload-content ui-widget-content ui-corner-bottom':true}\" \n                (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event)\">\n                <p-progressBar [value]=\"progress\" [showValue]=\"false\" *ngIf=\"hasFiles()\"></p-progressBar>\n                \n                <p-messages [value]=\"msgs\"></p-messages>\n                \n                <div class=\"ui-fileupload-files\" *ngIf=\"hasFiles()\">\n                    <div *ngIf=\"!fileTemplate\">\n                        <div class=\"ui-fileupload-row\" *ngFor=\"let file of files; let i = index;\">\n                            <div><img [src]=\"file.objectURL\" *ngIf=\"isImage(file)\" [width]=\"previewWidth\" /></div>\n                            <div>{{file.name}}</div>\n                            <div>{{formatSize(file.size)}}</div>\n                            <div><button type=\"button\" icon=\"fa-close\" pButton (click)=\"remove($event,i)\"></button></div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"fileTemplate\">\n                        <ng-template ngFor [ngForOf]=\"files\" [ngForTemplate]=\"fileTemplate\"></ng-template>\n                    </div>\n                </div>\n                <p-templateLoader [template]=\"contentTemplate\"></p-templateLoader>\n            </div>\n        </div>\n        <span class=\"ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left\" *ngIf=\"mode === 'basic'\" \n        (mouseup)=\"onSimpleUploaderClick($event)\"\n        [ngClass]=\"{'ui-fileupload-choose-selected': hasFiles(),'ui-state-focus': focus}\">\n            <span class=\"ui-button-icon-left fa\" [ngClass]=\"{'fa-plus': !hasFiles()||auto, 'fa-upload': hasFiles()&&!auto}\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>\n            <input #basicfileinput type=\"file\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\"\n                (change)=\"onFileSelect($event)\" *ngIf=\"!hasFiles()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n        </span>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_6__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_6__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__dom_domhandler__["a" /* DomHandler */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _r || Object])
], FileUpload);

var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_7__common_shared__["g" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__button_button__["a" /* ButtonModule */], __WEBPACK_IMPORTED_MODULE_5__progressbar_progressbar__["a" /* ProgressBarModule */], __WEBPACK_IMPORTED_MODULE_4__messages_messages__["a" /* MessagesModule */]],
        exports: [FileUpload, __WEBPACK_IMPORTED_MODULE_7__common_shared__["g" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__button_button__["a" /* ButtonModule */], __WEBPACK_IMPORTED_MODULE_5__progressbar_progressbar__["a" /* ProgressBarModule */], __WEBPACK_IMPORTED_MODULE_4__messages_messages__["a" /* MessagesModule */]],
        declarations: [FileUpload]
    })
], FileUploadModule);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
//# sourceMappingURL=fileupload.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/fileupload/fileuploaddemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileuploaddemo__ = __webpack_require__("../../../../../src/app/showcase/components/fileupload/fileuploaddemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileUploadDemoRoutingModule = (function () {
    function FileUploadDemoRoutingModule() {
    }
    return FileUploadDemoRoutingModule;
}());
FileUploadDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__fileuploaddemo__["a" /* FileUploadDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], FileUploadDemoRoutingModule);

//# sourceMappingURL=fileuploaddemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/fileupload/fileuploaddemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">FileUpload</span>\n        <span>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and\n            validations.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n        \n    <h3 class=\"first\">Advanced</h3>\n    <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\" \n            multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\"> \n            <ng-template pTemplate=\"content\">\n                <ul *ngIf=\"uploadedFiles.length\">\n                    <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n                </ul>\n            </ng-template>    \n    </p-fileUpload>\n    \n    <h3>Basic</h3>\n    <p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n    \n    <h3>Basic with Auto</h3>\n    <p-fileUpload #fubauto mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUploadAuto($event)\" auto=\"true\" chooseLabel=\"Browse\"></p-fileUpload>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;FileUploadModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>FileUpload requires a url property as the upload target and a name to identify the files at backend.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\"&gt;&lt;/p-fileUpload&gt;\n</code>\n</pre>\n\n            <h3>Multiple Uploads</h3>\n            <p>Only one file can be selected at a time, to allow selecting multiples enable multiple option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"&gt;&lt;/p-fileUpload&gt;\n</code>\n</pre>\n\n            <h3>DragDrop</h3>\n            <p>File selection can also be done by dragging and dropping one or more to the content section of the component.</p>\n            \n            <h3>Auto Uploads</h3>\n            <p>When auto property is enabled, upload begins as soon as file selection is completed or a file is dropped on the drop area.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"\n        accept=\"image/*\" auto=\"auto\"&gt;&lt;/p-fileUpload&gt;\n</code>\n</pre>\n\n            <h3>File Types</h3>\n            <p>Selectable file types can be restricted with accept property, example below only allows images to be uploaded.\n            Read more about other possible values <a href=\"http://www.w3schools.com/tags/att_input_accept.asp\">here</a>.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"\n        accept=\"image/*\"&gt;&lt;/p-fileUpload&gt;\n</code>\n</pre>\n\n            <h3>File Size</h3>\n            <p>Maximium file size can be restricted using maxFileSize property defined in bytes.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"\n        accept=\"image/*\" maxFileSize=\"1000000\"&gt;&lt;/p-fileUpload&gt;\n</code>\n</pre>\n\n            <p>In order to customize the default messages use invalidFileSizeMessageSummary and invalidFileSizeMessageDetail options. \n            In summary &#123;0&#125; placeholder refers to the filename and in detail, file size.</p>\n            <ul>\n                <li>invalidFileSizeMessageSummary: '&#123;0&#125;: Invalid file size, '</li>\n                <li>invalidFileSizeMessageDetail: string = 'maximum upload size is &#123;0&#125;.'</li>\n            </ul>\n            \n            <h3>Templating</h3>\n            <p>File list UI is customizable using a ng-template called \"file\" that gets the <a href=\"https://www.w3.org/TR/FileAPI/\">File</a> instance as the implicit variable.\n                Second ng-template named \"content\" can be used to place custom content inside the content section which would be useful to implement a user interface to manage the uploaded files such as removing them.  \n                Third and final ng-template option is \"toolbar\" to display custom content at toolbar.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"\n        accept=\"image/*\" maxFileSize=\"1000000\"&gt;\n        &lt;ng-template pTemplate=\"toolbar\"&gt;\n            &lt;div&gt;Upload 3 Files&lt;/div&gt;\n        &lt;/ng-template&gt;  \n        &lt;ng-template let-file pTemplate=\"file\"&gt;\n            &lt;div&gt;Custom UI to display a file&lt;/div&gt;\n        &lt;/ng-template&gt; \n        &lt;ng-template pTemplate=\"content\"&gt;\n            &lt;div&gt;Custom UI to manage uploaded files&lt;/div&gt;\n        &lt;/ng-template&gt;  \n&lt;/p-fileUpload&gt;\n</code>\n</pre>\n\n            <h3>Request Customization</h3>\n            <p>XHR request to upload the files can be customized using the onBeforeUpload callback that passes\n                the xhr instance and FormData object as event parameters.</p>\n                \n            <h3>Basic UI</h3>\n            <p>FileUpload basic mode provides a simpler UI as an alternative to advanced mode.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\" auto=\"true\"&gt;&lt;/p-fileUpload&gt;\n</code>\n</pre>\n            <h3>Custom Upload</h3>\n            <p>Uploading implementation can be overriden by enabling customMode property and defining a custom upload handler event.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fileUpload name=\"myfile[]\" customUpload=\"true\" (uploadHandler)=\"myUploader($event)\"&gt;&lt;/p-fileUpload&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nmyUploader(event) &#123;\n    //event.files == files to upload\n&#125;\n</code>\n</pre>\n            \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the request parameter to identify the files at backend.</td>\n                        </tr>\n                        <tr>\n                            <td>url</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Remote url to upload the files.</td>\n                        </tr>\n                        <tr>\n                            <td>method</td>\n                            <td>string</td>\n                            <td>POST</td>\n                            <td>HTTP method to send the files to the url.</td>\n                        </tr>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Used to select multiple files at once from file dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>accept</td>\n                            <td>string</td>\n                            <td>false</td>\n                            <td>Pattern to restrict the allowed file types such as \"image/*\".</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Disables the upload functionality.</td>\n                        </tr>\n                        <tr>\n                            <td>auto</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, upload begins automatically after selection is completed.</td>\n                        </tr>\n                        <tr>\n                            <td>maxFileSize</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum file size allowed in bytes.</td>\n                        </tr>\n                        <tr>\n                            <td>invalidFileSizeMessageSummary</td>\n                            <td>string</td>\n                            <td>\"&#123;0&#125;: Invalid file size, \"</td>\n                            <td>Summary message of the invalid fize size.</td>\n                        </tr>\n                        <tr>\n                            <td>invalidFileSizeMessageDetail</td>\n                            <td>string</td>\n                            <td>\"maximum upload size is &#123;0&#125;.\"</td>\n                            <td>Detail message of the invalid fize size.</td>\n                        </tr>\n                        <tr>\n                            <td>invalidFileTypeMessageSummary</td>\n                            <td>string</td>\n                            <td>\"&#123;0&#125;: Invalid file type, \"</td>\n                            <td>Summary message of the invalid fize type.</td>\n                        </tr>\n                        <tr>\n                            <td>invalidFileTypeMessageDetail</td>\n                            <td>string</td>\n                            <td>\"allowed file types: &#123;0&#125;.\"</td>\n                            <td>Detail message of the invalid fize type.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>previewWidth</td>\n                            <td>number</td>\n                            <td>50</td>\n                            <td>Width of the image thumbnail in pixels.</td>\n                        </tr>\n                        <tr>\n                            <td>chooseLabel</td>\n                            <td>string</td>\n                            <td>Choose</td>\n                            <td>Label of the choose button.</td>\n                        </tr>\n                        <tr>\n                            <td>uploadLabel</td>\n                            <td>string</td>\n                            <td>Upload</td>\n                            <td>Label of the upload button.</td>\n                        </tr>\n                        <tr>\n                            <td>cancelLabel</td>\n                            <td>string</td>\n                            <td>Cancel</td>\n                            <td>Label of the cancel button.</td>\n                        </tr>\n                        <tr>\n                            <td>withCredentials</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.</td>\n                        </tr>\n                        <tr>\n                            <td>mode</td>\n                            <td>string</td>\n                            <td>advanced</td>\n                            <td>Defines the UI of the component, possible values are \"advanced\" and \"basic\".</td>\n                        </tr>\n                        <tr>\n                            <td>customUpload</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to use the default upload or a manual implementation defined in uploadHandler callback.</td>\n                        </tr>\n                      <tr>\n                            <td>showUploadButton</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines the visibility of upload button for Client-side FileUpload.</td>\n                        </tr>\n                        <tr>\n                            <td>showCancelButton</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines the visibility of cancel button for Client-side FileUpload.</td>\n                        </tr>\n                        <tr>\n                            <td>files</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>List of files to be provide to the FileUpload externally.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onBeforeUpload</td>\n                            <td>event.xhr: XmlHttpRequest instance. <br/>\n                                event.formData: FormData object.</td>\n                            <td>Callback to invoke before file upload begins to customize the request\n                                such as post parameters before the files.</td>\n                        </tr>\n\t\t\t\t\t\t<tr>\n                            <td>onBeforeSend</td>\n                            <td>event.xhr: XmlHttpRequest instance. <br/>\n                                event.formData: FormData object.</td>\n                            <td>Callback to invoke before file send begins to customize the request\n                                such as adding headers.</td>\n                        </tr>\n                        <tr>\n                            <td>onUpload</td>\n                            <td>event.xhr: XmlHttpRequest instance.<br />\n                                event.files: Uploaded files.</td>\n                            <td>Callback to invoke when file upload is complete.</td>\n                        </tr>\n                        <tr>\n                            <td>onError</td>\n                            <td>event.xhr: XmlHttpRequest instance.<br />\n                                event.files: Files that are not uploaded.</td>\n                            <td>Callback to invoke if file upload fails.</td>\n                        </tr>\n                        <tr>\n                            <td>onClear</td>\n                            <td>-.</td>\n                            <td>Callback to invoke when files in queue are removed without uploading using clear all button.</td>\n                        </tr>\n                        <tr>\n                            <td>onRemove</td>\n                            <td>event.originalEvent: Original browser event. <br />\n                                event.file: Selected file.</td>\n                            <td>Callback to invoke when a file is removed without uploading using clear button of a file.</td>\n                        </tr>\n                        <tr>\n                            <td>onSelect</td>\n                            <td>event.originalEvent: Original browser event. <br />\n                                event.files: List of selected files.</td>\n                            <td>Callback to invoke when files are selected.</td>\n                        </tr>\n                        <tr>\n                            <td>onProgress</td>\n                            <td>event.originalEvent: Original browser event. <br />\n                                event.progress: Calculated progress value.</td>\n                            <td>Callback to invoke when files are selected.</td>\n                        </tr>\n                        <tr>\n                            <td>uploadHandler</td>\n                            <td>event.files: List of selected files.</td>\n                            <td>Callback to invoke in custom upload mode to upload the files manually.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>upload</td>\n                            <td>-</td>\n                            <td>Uploads the selected files.</td>\n                        </tr>\n                        <tr>\n                            <td>clear</td>\n                            <td>-</td>\n                            <td>Clears the files list.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-fileupload</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-fileupload-buttonbar</td>\n                            <td>Header containing the buttons</td>\n                        </tr>\n                        <tr>\n                            <td>ui-fileupload-content</td>\n                            <td>Content section</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/fileupload\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n    \n&lt;h3 class=\"first\"&gt;Advanced&lt;/h3&gt;\n&lt;p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\" \n        multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\"&gt;\n    &lt;ng-template pTemplate type=\"content\"&gt;\n        &lt;ul *ngIf=\"uploadedFiles.length\"&gt;\n            &lt;li *ngFor=\"let file of uploadedFiles\"&gt;&#123;&#123;file.name&#125;&#125; - &#123;&#123;file.size&#125;&#125; bytes&lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/ng-template&gt;        \n&lt;/p-fileUpload&gt;\n\n&lt;h3&gt;Basic&lt;/h3&gt;\n&lt;p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"&gt;&lt;/p-fileUpload&gt;\n\n&lt;h3&gt;Basic with Auto&lt;/h3&gt;\n&lt;p-fileUpload #fubauto mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUploadAuto($event)\" auto=\"true\" chooseLabel=\"Browse\"&gt;&lt;/p-fileUpload&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class FileUploadDemo &#123;\n\n    msgs: Message[];\n    \n    uploadedFiles: any[] = [];\n\n    onUpload(event) &#123;\n        for(let file of event.files) &#123;\n            this.uploadedFiles.push(file);\n        &#125;\n    \n        this.msgs = [];\n        this.msgs.push(&#123;severity: 'info', summary: 'File Uploaded', detail: ''&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/fileupload/fileuploaddemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadDemoModule", function() { return FileUploadDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileuploaddemo__ = __webpack_require__("../../../../../src/app/showcase/components/fileupload/fileuploaddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileuploaddemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/fileupload/fileuploaddemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fileupload_fileupload__ = __webpack_require__("../../../../../src/app/components/fileupload/fileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FileUploadDemoModule = (function () {
    function FileUploadDemoModule() {
    }
    return FileUploadDemoModule;
}());
FileUploadDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__fileuploaddemo_routing_module__["a" /* FileUploadDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_fileupload_fileupload__["a" /* FileUploadModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__fileuploaddemo__["a" /* FileUploadDemo */]
        ]
    })
], FileUploadDemoModule);

//# sourceMappingURL=fileuploaddemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/fileupload/fileuploaddemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileUploadDemo = (function () {
    function FileUploadDemo() {
        this.uploadedFiles = [];
    }
    FileUploadDemo.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
    FileUploadDemo.prototype.onBasicUpload = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    };
    FileUploadDemo.prototype.onBasicUploadAuto = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    };
    return FileUploadDemo;
}());
FileUploadDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/fileupload/fileuploaddemo.html")
    })
], FileUploadDemo);

//# sourceMappingURL=fileuploaddemo.js.map

/***/ })

});
//# sourceMappingURL=fileuploaddemo.module.chunk.js.map