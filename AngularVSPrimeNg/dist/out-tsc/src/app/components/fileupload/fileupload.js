var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter, ContentChildren, QueryList, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonModule } from '../button/button';
import { MessagesModule } from '../messages/messages';
import { ProgressBarModule } from '../progressbar/progressbar';
import { DomHandler } from '../dom/domhandler';
import { PrimeTemplate, SharedModule } from '../common/shared';
let FileUpload = class FileUpload {
    constructor(domHandler, sanitizer, zone) {
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
        this.onBeforeUpload = new EventEmitter();
        this.onBeforeSend = new EventEmitter();
        this.onUpload = new EventEmitter();
        this.onError = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onProgress = new EventEmitter();
        this.uploadHandler = new EventEmitter();
        this.progress = 0;
    }
    ngOnInit() {
        this.files = [];
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'file':
                    this.fileTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'toolbar':
                    this.toolbarTemplate = item.template;
                    break;
                default:
                    this.fileTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewInit() {
        if (this.mode === 'advanced') {
            this.zone.runOutsideAngular(() => {
                this.content.nativeElement.addEventListener('dragover', this.onDragOver.bind(this));
            });
        }
    }
    onFileSelect(event) {
        this.msgs = [];
        if (!this.multiple) {
            this.files = [];
        }
        let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
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
    }
    isFileSelected(file) {
        for (let sFile of this.files) {
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size))
                return false;
        }
        return true;
    }
    validate(file) {
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
    }
    isFileTypeValid(file) {
        let acceptableTypes = this.accept.split(',');
        for (let type of acceptableTypes) {
            let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)
                : file.type == type || this.getFileExtension(file) === type;
            if (acceptable) {
                return true;
            }
        }
        return false;
    }
    getTypeClass(fileType) {
        return fileType.substring(0, fileType.indexOf('/'));
    }
    isWildcard(fileType) {
        return fileType.indexOf('*') !== -1;
    }
    getFileExtension(file) {
        return '.' + file.name.split('.').pop();
    }
    isImage(file) {
        return /^image\//.test(file.type);
    }
    onImageLoad(img) {
        window.URL.revokeObjectURL(img.src);
    }
    upload() {
        if (this.customUpload) {
            this.uploadHandler.emit({
                files: this.files
            });
        }
        else {
            this.msgs = [];
            let xhr = new XMLHttpRequest(), formData = new FormData();
            this.onBeforeUpload.emit({
                'xhr': xhr,
                'formData': formData
            });
            for (let i = 0; i < this.files.length; i++) {
                formData.append(this.name, this.files[i], this.files[i].name);
            }
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    this.progress = Math.round((e.loaded * 100) / e.total);
                }
                this.onProgress.emit({ originalEvent: e, progress: this.progress });
            }, false);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    this.progress = 0;
                    if (xhr.status >= 200 && xhr.status < 300)
                        this.onUpload.emit({ xhr: xhr, files: this.files });
                    else
                        this.onError.emit({ xhr: xhr, files: this.files });
                    this.clear();
                }
            };
            xhr.open(this.method, this.url, true);
            this.onBeforeSend.emit({
                'xhr': xhr,
                'formData': formData
            });
            xhr.withCredentials = this.withCredentials;
            xhr.send(formData);
        }
    }
    clear() {
        this.files = [];
        this.onClear.emit();
        this.clearInputElement();
    }
    remove(event, index) {
        this.clearInputElement();
        this.onRemove.emit({ originalEvent: event, file: this.files[index] });
        this.files.splice(index, 1);
    }
    clearInputElement() {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.advancedFileInput.nativeElement.value = '';
        }
    }
    hasFiles() {
        return this.files && this.files.length > 0;
    }
    onDragEnter(e) {
        if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    onDragOver(e) {
        if (!this.disabled) {
            this.domHandler.addClass(this.content.nativeElement, 'ui-fileupload-highlight');
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
        }
    }
    onDragLeave(event) {
        if (!this.disabled) {
            this.domHandler.removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
        }
    }
    onDrop(event) {
        if (!this.disabled) {
            this.domHandler.removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            let allowDrop = this.multiple || (files && files.length === 1);
            if (allowDrop) {
                this.onFileSelect(event);
            }
        }
    }
    onFocus() {
        this.focus = true;
    }
    onBlur() {
        this.focus = false;
    }
    formatSize(bytes) {
        if (bytes == 0) {
            return '0 B';
        }
        let k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    onSimpleUploaderClick(event) {
        if (this.hasFiles()) {
            this.upload();
        }
    }
    ngOnDestroy() {
        if (this.content && this.content.nativeElement) {
            this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "url", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "method", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "multiple", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "accept", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "auto", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "withCredentials", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FileUpload.prototype, "maxFileSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "invalidFileSizeMessageSummary", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "invalidFileSizeMessageDetail", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "invalidFileTypeMessageSummary", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "invalidFileTypeMessageDetail", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FileUpload.prototype, "previewWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "chooseLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "uploadLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "cancelLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "showUploadButton", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "showCancelButton", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "mode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FileUpload.prototype, "customUpload", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "onBeforeUpload", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "onBeforeSend", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "onUpload", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "onError", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "onClear", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "onRemove", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "onSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "onProgress", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FileUpload.prototype, "uploadHandler", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], FileUpload.prototype, "templates", void 0);
__decorate([
    ViewChild('advancedfileinput'),
    __metadata("design:type", ElementRef)
], FileUpload.prototype, "advancedFileInput", void 0);
__decorate([
    ViewChild('basicfileinput'),
    __metadata("design:type", ElementRef)
], FileUpload.prototype, "basicFileInput", void 0);
__decorate([
    ViewChild('content'),
    __metadata("design:type", ElementRef)
], FileUpload.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FileUpload.prototype, "files", void 0);
FileUpload = __decorate([
    Component({
        selector: 'p-fileUpload',
        template: `
        <div [ngClass]="'ui-fileupload ui-widget'" [ngStyle]="style" [class]="styleClass" *ngIf="mode === 'advanced'">
            <div class="ui-fileupload-buttonbar ui-widget-header ui-corner-top">
                <span class="ui-fileupload-choose" [label]="chooseLabel" icon="fa-plus" pButton  [ngClass]="{'ui-state-focus': focus}" [attr.disabled]="disabled" > 
                    <input #advancedfileinput type="file" (change)="onFileSelect($event)" [multiple]="multiple" [accept]="accept" [disabled]="disabled" (focus)="onFocus()" (blur)="onBlur()" >
                </span>

                <button *ngIf="!auto&&showUploadButton" type="button" [label]="uploadLabel" icon="fa-upload" pButton (click)="upload()" [disabled]="!hasFiles()"></button>
                <button *ngIf="!auto&&showCancelButton" type="button" [label]="cancelLabel" icon="fa-close" pButton (click)="clear()" [disabled]="!hasFiles()"></button>
            
                <p-templateLoader [template]="toolbarTemplate"></p-templateLoader>
            </div>
            <div #content [ngClass]="{'ui-fileupload-content ui-widget-content ui-corner-bottom':true}" 
                (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)">
                <p-progressBar [value]="progress" [showValue]="false" *ngIf="hasFiles()"></p-progressBar>
                
                <p-messages [value]="msgs"></p-messages>
                
                <div class="ui-fileupload-files" *ngIf="hasFiles()">
                    <div *ngIf="!fileTemplate">
                        <div class="ui-fileupload-row" *ngFor="let file of files; let i = index;">
                            <div><img [src]="file.objectURL" *ngIf="isImage(file)" [width]="previewWidth" /></div>
                            <div>{{file.name}}</div>
                            <div>{{formatSize(file.size)}}</div>
                            <div><button type="button" icon="fa-close" pButton (click)="remove($event,i)"></button></div>
                        </div>
                    </div>
                    <div *ngIf="fileTemplate">
                        <ng-template ngFor [ngForOf]="files" [ngForTemplate]="fileTemplate"></ng-template>
                    </div>
                </div>
                <p-templateLoader [template]="contentTemplate"></p-templateLoader>
            </div>
        </div>
        <span class="ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" *ngIf="mode === 'basic'" 
        (mouseup)="onSimpleUploaderClick($event)"
        [ngClass]="{'ui-fileupload-choose-selected': hasFiles(),'ui-state-focus': focus}">
            <span class="ui-button-icon-left fa" [ngClass]="{'fa-plus': !hasFiles()||auto, 'fa-upload': hasFiles()&&!auto}"></span>
            <span class="ui-button-text ui-clickable">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>
            <input #basicfileinput type="file" [accept]="accept" [multiple]="multiple" [disabled]="disabled"
                (change)="onFileSelect($event)" *ngIf="!hasFiles()" (focus)="onFocus()" (blur)="onBlur()">
        </span>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [DomHandler, DomSanitizer, NgZone])
], FileUpload);
export { FileUpload };
let FileUploadModule = class FileUploadModule {
};
FileUploadModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule],
        exports: [FileUpload, SharedModule, ButtonModule, ProgressBarModule, MessagesModule],
        declarations: [FileUpload]
    })
], FileUploadModule);
export { FileUploadModule };
//# sourceMappingURL=fileupload.js.map