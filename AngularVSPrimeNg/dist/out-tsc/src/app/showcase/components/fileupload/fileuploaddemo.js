var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let FileUploadDemo = class FileUploadDemo {
    constructor() {
        this.uploadedFiles = [];
    }
    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }
    onBasicUpload(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
    onBasicUploadAuto(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }
};
FileUploadDemo = __decorate([
    Component({
        templateUrl: './fileuploaddemo.html'
    })
], FileUploadDemo);
export { FileUploadDemo };
//# sourceMappingURL=fileuploaddemo.js.map