var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, TemplateRef, ViewContainerRef, Inject, forwardRef, ContentChildren, QueryList } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { SharedModule } from '../common/shared';
import { PrimeTemplate } from '../common/shared';
let OrganizationChartNodeTemplateLoader = class OrganizationChartNodeTemplateLoader {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.template, {
            '\$implicit': this.node
        });
    }
    ngOnDestroy() {
        this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrganizationChartNodeTemplateLoader.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], OrganizationChartNodeTemplateLoader.prototype, "template", void 0);
OrganizationChartNodeTemplateLoader = __decorate([
    Component({
        selector: 'p-organizationChartNodeTemplateLoader',
        template: ``
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], OrganizationChartNodeTemplateLoader);
export { OrganizationChartNodeTemplateLoader };
let OrganizationChartNode = class OrganizationChartNode {
    constructor(chart) {
        this.chart = chart;
    }
    get leaf() {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
    get colspan() {
        return (this.node.children && this.node.children.length) ? this.node.children.length * 2 : null;
    }
    onNodeClick(event, node) {
        this.chart.onNodeClick(event, node);
    }
    toggleNode(event, node) {
        node.expanded = !node.expanded;
        event.preventDefault();
    }
    isSelected() {
        return this.chart.isSelected(this.node);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrganizationChartNode.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], OrganizationChartNode.prototype, "root", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], OrganizationChartNode.prototype, "first", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], OrganizationChartNode.prototype, "last", void 0);
OrganizationChartNode = __decorate([
    Component({
        selector: '[pOrganizationChartNode]',
        template: `
        <tr *ngIf="node">
            <td [attr.colspan]="colspan">
                <div class="ui-organizationchart-node-content ui-widget-content ui-corner-all {{node.styleClass}}" 
                    [ngClass]="{'ui-organizationchart-selectable-node': chart.selectionMode && node.selectable !== false,'ui-state-highlight':isSelected()}"
                    (click)="onNodeClick($event,node)">
                    <div *ngIf="!chart.getTemplateForNode(node)">{{node.label}}</div>
                    <div *ngIf="chart.getTemplateForNode(node)">
                        <p-organizationChartNodeTemplateLoader [node]="node" [template]="chart.getTemplateForNode(node)"></p-organizationChartNodeTemplateLoader>
                    </div>
                    <a *ngIf="!leaf" href="#" class="ui-node-toggler" (click)="toggleNode($event, node)">
                        <i class="fa ui-node-toggler-icon" [ngClass]="{'fa-chevron-down': node.expanded, 'fa-chevron-up': !node.expanded}"></i>
                    </a>
                </div>
            </td>
        </tr>
        <tr [style.visibility]="!leaf&&node.expanded ? 'inherit' : 'hidden'" class="ui-organizationchart-lines" [@childState]="'in'">
            <td [attr.colspan]="colspan">
                <div class="ui-organizationchart-line-down"></div>
            </td>
        </tr>
        <tr [style.visibility]="!leaf&&node.expanded ? 'inherit' : 'hidden'" class="ui-organizationchart-lines" [@childState]="'in'">
            <ng-template ngFor let-child [ngForOf]="node.children" let-first="first" let-last="last">
                <td class="ui-organizationchart-line-left" [ngClass]="{'ui-organizationchart-line-top':!first}">&nbsp;</td>
                <td class="ui-organizationchart-line-right" [ngClass]="{'ui-organizationchart-line-top':!last}">&nbsp;</td>
            </ng-template>
        </tr>
        <tr [style.visibility]="!leaf&&node.expanded ? 'inherit' : 'hidden'" class="ui-organizationchart-nodes" [@childState]="'in'">
            <td *ngFor="let child of node.children" colspan="2">
                <table class="ui-organizationchart-table" pOrganizationChartNode [node]="child"></table>
            </td>
        </tr>
    `,
        animations: [
            trigger('childState', [
                state('in', style({ opacity: 1 })),
                transition('void => *', [
                    style({ opacity: 0 }),
                    animate(150)
                ]),
                transition('* => void', [
                    animate(150, style({ opacity: 0 }))
                ])
            ])
        ],
    }),
    __param(0, Inject(forwardRef(() => OrganizationChart))),
    __metadata("design:paramtypes", [OrganizationChart])
], OrganizationChartNode);
export { OrganizationChartNode };
let OrganizationChart = class OrganizationChart {
    constructor(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.selectionChange = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
    }
    get root() {
        return this.value && this.value.length ? this.value[0] : null;
    }
    ngAfterContentInit() {
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach((item) => {
            this.templateMap[item.getType()] = item.template;
        });
    }
    getTemplateForNode(node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    }
    onNodeClick(event, node) {
        let eventTarget = event.target;
        if (eventTarget.className && (eventTarget.className.indexOf('ui-node-toggler') !== -1 || eventTarget.className.indexOf('ui-node-toggler-icon') !== -1)) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            if (this.selectionMode === 'single') {
                if (selected) {
                    this.selection = null;
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = node;
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else if (this.selectionMode === 'multiple') {
                if (selected) {
                    this.selection = this.selection.filter((val, i) => i != index);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = [...this.selection || [], node];
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            this.selectionChange.emit(this.selection);
        }
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selectionMode && this.selection) {
            if (this.selectionMode === 'single') {
                index = (this.selection == node) ? 0 : -1;
            }
            else if (this.selectionMode === 'multiple') {
                for (let i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    }
    isSelected(node) {
        return this.findIndexInSelection(node) != -1;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], OrganizationChart.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrganizationChart.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OrganizationChart.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OrganizationChart.prototype, "selectionMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrganizationChart.prototype, "selection", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OrganizationChart.prototype, "selectionChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OrganizationChart.prototype, "onNodeSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OrganizationChart.prototype, "onNodeUnselect", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], OrganizationChart.prototype, "templates", void 0);
OrganizationChart = __decorate([
    Component({
        selector: 'p-organizationChart',
        template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="'ui-organizationchart ui-widget'">
            <table class="ui-organizationchart-table" pOrganizationChartNode [node]="root" *ngIf="root"></table>
        </div>
    `,
        providers: [DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler])
], OrganizationChart);
export { OrganizationChart };
let OrganizationChartModule = class OrganizationChartModule {
};
OrganizationChartModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [OrganizationChart, SharedModule],
        declarations: [OrganizationChart, OrganizationChartNode, OrganizationChartNodeTemplateLoader]
    })
], OrganizationChartModule);
export { OrganizationChartModule };
//# sourceMappingURL=organizationchart.js.map