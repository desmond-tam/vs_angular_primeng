var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NodeService } from '../../service/nodeservice';
import { Tree } from '../../../components/tree/tree';
import { TreeDragDropService } from '../../../components/common/api';
let TreeDemo = class TreeDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.loading = true;
        this.nodeService.getFiles().then(files => this.filesTree0 = files);
        setTimeout(() => {
            this.nodeService.getFiles().then(files => this.filesTree1 = files);
            this.loading = false;
        }, 3000);
        this.nodeService.getFiles().then(files => this.filesTree2 = files);
        this.nodeService.getFiles().then(files => this.filesTree3 = files);
        this.nodeService.getFiles().then(files => this.filesTree4 = files);
        this.nodeService.getFiles().then(files => this.filesTree5 = files);
        this.nodeService.getFiles().then(files => this.filesTree6 = files);
        this.nodeService.getFiles().then(files => this.filesTree7 = files);
        this.filesTree8 = [
            {
                label: "Backup",
                data: "Backup Folder",
                expandedIcon: "fa-folder-open",
                collapsedIcon: "fa-folder"
            }
        ];
        this.filesTree9 = [
            {
                label: "Storage",
                data: "Storage Folder",
                expandedIcon: "fa-folder-open",
                collapsedIcon: "fa-folder"
            }
        ];
        this.nodeService.getFiles().then(files => this.filesTree10 = files);
        this.nodeService.getFiles().then(files => {
            this.filesTree11 = [{
                    label: 'Root',
                    children: files
                }];
        });
        this.nodeService.getLazyFiles().then(files => this.lazyFiles = files);
        this.items = [
            { label: 'View', icon: 'fa-search', command: (event) => this.viewFile(this.selectedFile2) },
            { label: 'Unselect', icon: 'fa-close', command: (event) => this.unselectFile() }
        ];
    }
    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }
    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }
    nodeExpandMessage(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Expanded', detail: event.node.label });
    }
    nodeExpand(event) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
        }
    }
    viewFile(file) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected with Right Click', detail: file.label });
    }
    unselectFile() {
        this.selectedFile2 = null;
    }
    expandAll() {
        this.filesTree10.forEach(node => {
            this.expandRecursive(node, true);
        });
    }
    collapseAll() {
        this.filesTree10.forEach(node => {
            this.expandRecursive(node, false);
        });
    }
    expandRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
};
__decorate([
    ViewChild('expandingTree'),
    __metadata("design:type", Tree)
], TreeDemo.prototype, "expandingTree", void 0);
TreeDemo = __decorate([
    Component({
        templateUrl: './treedemo.html',
        styles: [`
        h4 {
            text-align: center;
            margin: 0 0 8px 0;
        }
    `],
        providers: [TreeDragDropService]
    }),
    __metadata("design:paramtypes", [NodeService])
], TreeDemo);
export { TreeDemo };
//# sourceMappingURL=treedemo.js.map