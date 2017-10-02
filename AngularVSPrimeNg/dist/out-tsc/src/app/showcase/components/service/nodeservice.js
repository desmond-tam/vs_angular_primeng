var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
let NodeService = class NodeService {
    constructor(http) {
        this.http = http;
    }
    getFiles() {
        return this.http.get('showcase/resources/data/files.json')
            .toPromise()
            .then(res => res.json().data);
    }
    getLazyFiles() {
        return this.http.get('showcase/resources/data/files-lazy.json')
            .toPromise()
            .then(res => res.json().data);
    }
    getFilesystem() {
        return this.http.get('showcase/resources/data/filesystem.json')
            .toPromise()
            .then(res => res.json().data);
    }
    getLazyFilesystem() {
        return this.http.get('showcase/resources/data/filesystem-lazy.json')
            .toPromise()
            .then(res => res.json().data);
    }
};
NodeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], NodeService);
export { NodeService };
//# sourceMappingURL=nodeservice.js.map