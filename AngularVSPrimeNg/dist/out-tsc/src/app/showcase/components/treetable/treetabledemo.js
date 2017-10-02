var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NodeService } from '../../service/nodeservice';
let TreeTableDemo = class TreeTableDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFilesystem().then(files => this.files3 = files);
        this.nodeService.getFilesystem().then(files => this.files4 = files);
        this.nodeService.getFilesystem().then(files => this.files5 = files);
        this.nodeService.getFilesystem().then(files => this.files6 = files);
        this.nodeService.getLazyFilesystem().then(files => this.lazyFiles = files);
        this.items = [
            { label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2) },
            { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2) }
        ];
    }
    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }
    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }
    nodeExpand(event) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);
        }
    }
    viewNode(node) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: node.data.name });
    }
    deleteNode(node) {
        node.parent.children = node.parent.children.filter(n => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Deleted', detail: node.data.name });
    }
};
TreeTableDemo = __decorate([
    Component({
        templateUrl: './treetabledemo.html'
    }),
    __metadata("design:paramtypes", [NodeService])
], TreeTableDemo);
export { TreeTableDemo };
//# sourceMappingURL=treetabledemo.js.map