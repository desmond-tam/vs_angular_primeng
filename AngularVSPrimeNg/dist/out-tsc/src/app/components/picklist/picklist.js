var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, ContentChildren, QueryList, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button';
import { SharedModule, PrimeTemplate } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
let PickList = class PickList {
    constructor(el, domHandler, objectUtils) {
        this.el = el;
        this.domHandler = domHandler;
        this.objectUtils = objectUtils;
        this.metaKeySelection = true;
        this.showSourceControls = true;
        this.showTargetControls = true;
        this.onMoveToSource = new EventEmitter();
        this.onMoveAllToSource = new EventEmitter();
        this.onMoveAllToTarget = new EventEmitter();
        this.onMoveToTarget = new EventEmitter();
        this.onSourceReorder = new EventEmitter();
        this.onTargetReorder = new EventEmitter();
        this.selectedItemsSource = [];
        this.selectedItemsTarget = [];
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewChecked() {
        if (this.movedUp || this.movedDown) {
            let listItems = this.domHandler.find(this.reorderedListElement, 'li.ui-state-highlight');
            let listItem;
            if (this.movedUp)
                listItem = listItems[0];
            else
                listItem = listItems[listItems.length - 1];
            this.domHandler.scrollInView(this.reorderedListElement, listItem);
            this.movedUp = false;
            this.movedDown = false;
            this.reorderedListElement = null;
        }
    }
    onItemClick(event, item, selectedItems) {
        let index = this.findIndexInSelection(item, selectedItems);
        let selected = (index != -1);
        let metaSelection = this.itemTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            if (selected && metaKey) {
                selectedItems.splice(index, 1);
            }
            else {
                if (!metaKey) {
                    selectedItems.length = 0;
                }
                selectedItems.push(item);
            }
        }
        else {
            if (selected)
                selectedItems.splice(index, 1);
            else
                selectedItems.push(item);
        }
        this.itemTouched = false;
    }
    onSourceItemDblClick() {
        this.moveRight();
    }
    onTargetItemDblClick() {
        this.moveLeft();
    }
    onFilter(event, data, listType) {
        let query = event.target.value.trim().toLowerCase();
        if (listType === -1)
            this.filterValueSource = query;
        else
            this.filterValueTarget = query;
        this.activateFilter(data, listType);
    }
    activateFilter(data, listType) {
        let searchFields = this.filterBy.split(',');
        if (listType === -1)
            this.visibleOptionsSource = this.objectUtils.filter(data, searchFields, this.filterValueSource);
        else
            this.visibleOptionsTarget = this.objectUtils.filter(data, searchFields, this.filterValueTarget);
    }
    isItemVisible(item, listType) {
        if (listType == -1)
            return this.isVisibleInList(this.visibleOptionsSource, item, this.filterValueSource);
        else
            return this.isVisibleInList(this.visibleOptionsTarget, item, this.filterValueTarget);
    }
    isVisibleInList(data, item, filterValue) {
        if (filterValue && filterValue.trim().length) {
            for (let i = 0; i < data.length; i++) {
                if (item == data[i]) {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    }
    onItemTouchEnd(event) {
        this.itemTouched = true;
    }
    moveUp(listElement, list, selectedItems, callback) {
        if (selectedItems && selectedItems.length) {
            for (let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, list);
                if (selectedItemIndex != 0) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex - 1];
                    list[selectedItemIndex - 1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedUp = true;
            this.reorderedListElement = listElement;
            callback.emit({ items: selectedItems });
        }
    }
    moveTop(listElement, list, selectedItems, callback) {
        if (selectedItems && selectedItems.length) {
            for (let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, list);
                if (selectedItemIndex != 0) {
                    let movedItem = list.splice(selectedItemIndex, 1)[0];
                    list.unshift(movedItem);
                }
                else {
                    break;
                }
            }
            listElement.scrollTop = 0;
            callback.emit({ items: selectedItems });
        }
    }
    moveDown(listElement, list, selectedItems, callback) {
        if (selectedItems && selectedItems.length) {
            for (let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, list);
                if (selectedItemIndex != (list.length - 1)) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex + 1];
                    list[selectedItemIndex + 1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedDown = true;
            this.reorderedListElement = listElement;
            callback.emit({ items: selectedItems });
        }
    }
    moveBottom(listElement, list, selectedItems, callback) {
        if (selectedItems && selectedItems.length) {
            for (let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, list);
                if (selectedItemIndex != (list.length - 1)) {
                    let movedItem = list.splice(selectedItemIndex, 1)[0];
                    list.push(movedItem);
                }
                else {
                    break;
                }
            }
            listElement.scrollTop = listElement.scrollHeight;
            callback.emit({ items: selectedItems });
        }
    }
    moveRight() {
        if (this.selectedItemsSource && this.selectedItemsSource.length) {
            for (let i = 0; i < this.selectedItemsSource.length; i++) {
                let selectedItem = this.selectedItemsSource[i];
                if (this.findIndexInList(selectedItem, this.target) == -1) {
                    this.target.push(this.source.splice(this.findIndexInList(selectedItem, this.source), 1)[0]);
                }
            }
            this.onMoveToTarget.emit({
                items: this.selectedItemsSource
            });
            this.selectedItemsSource = [];
        }
    }
    moveAllRight() {
        if (this.source) {
            let movedItems = [];
            for (let i = 0; i < this.source.length; i++) {
                if (this.isItemVisible(this.source[i], -1)) {
                    let removedItem = this.source.splice(i, 1)[0];
                    this.target.push(removedItem);
                    movedItems.push(removedItem);
                    i--;
                }
            }
            this.onMoveToTarget.emit({
                items: movedItems
            });
            this.onMoveAllToTarget.emit({
                items: movedItems
            });
            this.selectedItemsSource = [];
        }
    }
    moveLeft() {
        if (this.selectedItemsTarget && this.selectedItemsTarget.length) {
            for (let i = 0; i < this.selectedItemsTarget.length; i++) {
                let selectedItem = this.selectedItemsTarget[i];
                if (this.findIndexInList(selectedItem, this.source) == -1) {
                    this.source.push(this.target.splice(this.findIndexInList(selectedItem, this.target), 1)[0]);
                }
            }
            this.onMoveToSource.emit({
                items: this.selectedItemsTarget
            });
            this.selectedItemsTarget = [];
        }
    }
    moveAllLeft() {
        if (this.target) {
            let movedItems = [];
            for (let i = 0; i < this.target.length; i++) {
                if (this.isItemVisible(this.target[i], 1)) {
                    let removedItem = this.target.splice(i, 1)[0];
                    this.source.push(removedItem);
                    movedItems.push(removedItem);
                    i--;
                }
            }
            this.onMoveToSource.emit({
                items: movedItems
            });
            this.onMoveAllToSource.emit({
                items: movedItems
            });
            this.selectedItemsTarget = [];
        }
    }
    isSelected(item, selectedItems) {
        return this.findIndexInSelection(item, selectedItems) != -1;
    }
    findIndexInSelection(item, selectedItems) {
        return this.findIndexInList(item, selectedItems);
    }
    findIndexInList(item, list) {
        let index = -1;
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] == item) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    onDragStart(event, index, listType) {
        this.dragging = true;
        this.fromListType = listType;
        if (listType === -1)
            this.draggedItemIndexSource = index;
        else
            this.draggedItemIndexTarget = index;
        if (this.dragdropScope) {
            event.dataTransfer.setData("text", this.dragdropScope);
        }
    }
    onDragOver(event, index, listType) {
        if (listType == -1) {
            if (this.draggedItemIndexSource !== index && this.draggedItemIndexSource + 1 !== index || (this.fromListType === 1)) {
                this.dragOverItemIndexSource = index;
                event.preventDefault();
            }
        }
        else {
            if (this.draggedItemIndexTarget !== index && this.draggedItemIndexTarget + 1 !== index || (this.fromListType === -1)) {
                this.dragOverItemIndexTarget = index;
                event.preventDefault();
            }
        }
        this.onListItemDroppoint = true;
    }
    onDragLeave(event, listType) {
        this.dragOverItemIndexSource = null;
        this.dragOverItemIndexTarget = null;
        this.onListItemDroppoint = false;
    }
    onDrop(event, index, listType) {
        if (this.onListItemDroppoint) {
            if (listType === -1) {
                if (this.fromListType === 1)
                    this.insert(this.draggedItemIndexTarget, this.target, index, this.source);
                else
                    this.objectUtils.reorderArray(this.source, this.draggedItemIndexSource, (this.draggedItemIndexSource > index) ? index : (index === 0) ? 0 : index - 1);
                this.dragOverItemIndexSource = null;
            }
            else {
                if (this.fromListType === -1)
                    this.insert(this.draggedItemIndexSource, this.source, index, this.target);
                else
                    this.objectUtils.reorderArray(this.target, this.draggedItemIndexTarget, (this.draggedItemIndexTarget > index) ? index : (index === 0) ? 0 : index - 1);
                this.dragOverItemIndexTarget = null;
            }
            this.listHighlightTarget = false;
            this.listHighlightSource = false;
            event.preventDefault();
        }
    }
    onDragEnd(event) {
        this.dragging = false;
    }
    onListDrop(event, listType) {
        if (!this.onListItemDroppoint) {
            if (listType === -1) {
                if (this.fromListType === 1)
                    this.insert(this.draggedItemIndexTarget, this.target, null, this.source);
            }
            else {
                if (this.fromListType === -1)
                    this.insert(this.draggedItemIndexSource, this.source, null, this.target);
            }
            this.listHighlightTarget = false;
            this.listHighlightSource = false;
            event.preventDefault();
        }
    }
    insert(fromIndex, fromList, toIndex, toList) {
        if (toIndex === null)
            toList.push(fromList.splice(fromIndex, 1)[0]);
        else
            toList.splice(toIndex, 0, fromList.splice(fromIndex, 1)[0]);
    }
    onListMouseMove(event, listType) {
        if (this.dragging) {
            let moveListType = (listType == 0 ? this.listViewSourceChild : this.listViewTargetChild);
            let offsetY = moveListType.nativeElement.getBoundingClientRect().top + document.body.scrollTop;
            let bottomDiff = (offsetY + moveListType.nativeElement.clientHeight) - event.pageY;
            let topDiff = (event.pageY - offsetY);
            if (bottomDiff < 25 && bottomDiff > 0)
                moveListType.nativeElement.scrollTop += 15;
            else if (topDiff < 25 && topDiff > 0)
                moveListType.nativeElement.scrollTop -= 15;
        }
        if (listType === -1) {
            if (this.fromListType === 1)
                this.listHighlightSource = true;
        }
        else {
            if (this.fromListType === -1)
                this.listHighlightTarget = true;
        }
        event.preventDefault();
    }
    onListDragLeave() {
        this.listHighlightTarget = false;
        this.listHighlightSource = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], PickList.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], PickList.prototype, "target", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PickList.prototype, "sourceHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PickList.prototype, "targetHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PickList.prototype, "responsive", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PickList.prototype, "filterBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PickList.prototype, "metaKeySelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PickList.prototype, "dragdrop", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PickList.prototype, "dragdropScope", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PickList.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PickList.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PickList.prototype, "sourceStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PickList.prototype, "targetStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PickList.prototype, "showSourceControls", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PickList.prototype, "showTargetControls", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PickList.prototype, "sourceFilterPlaceholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PickList.prototype, "targetFilterPlaceholder", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PickList.prototype, "onMoveToSource", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PickList.prototype, "onMoveAllToSource", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PickList.prototype, "onMoveAllToTarget", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PickList.prototype, "onMoveToTarget", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PickList.prototype, "onSourceReorder", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PickList.prototype, "onTargetReorder", void 0);
__decorate([
    ViewChild('sourcelist'),
    __metadata("design:type", ElementRef)
], PickList.prototype, "listViewSourceChild", void 0);
__decorate([
    ViewChild('targetlist'),
    __metadata("design:type", ElementRef)
], PickList.prototype, "listViewTargetChild", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], PickList.prototype, "templates", void 0);
PickList = __decorate([
    Component({
        selector: 'p-pickList',
        template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="{'ui-picklist ui-widget ui-helper-clearfix': true,'ui-picklist-responsive': responsive}">
            <div class="ui-picklist-source-controls ui-picklist-buttons" *ngIf="showSourceControls">
                <div class="ui-picklist-buttons-cell">
                    <button type="button" pButton icon="fa-angle-up" (click)="moveUp(sourcelist,source,selectedItemsSource,onSourceReorder)"></button>
                    <button type="button" pButton icon="fa-angle-double-up" (click)="moveTop(sourcelist,source,selectedItemsSource,onSourceReorder)"></button>
                    <button type="button" pButton icon="fa-angle-down" (click)="moveDown(sourcelist,source,selectedItemsSource,onSourceReorder)"></button>
                    <button type="button" pButton icon="fa-angle-double-down" (click)="moveBottom(sourcelist,source,selectedItemsSource,onSourceReorder)"></button>
                </div>
            </div>
            <div class="ui-picklist-listwrapper ui-picklist-source-wrapper" [ngClass]="{'ui-picklist-listwrapper-nocontrols':!showSourceControls}">
                <div class="ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr" *ngIf="sourceHeader">{{sourceHeader}}</div>
                <div class="ui-picklist-filter-container ui-widget-content" *ngIf="filterBy">
                    <input type="text" role="textbox" (keyup)="onFilter($event,source,-1)" class="ui-picklist-filter ui-inputtext ui-widget ui-state-default ui-corner-all" [disabled]="disabled" [attr.placeholder]="sourceFilterPlaceholder">
                    <span class="fa fa-search"></span>
                </div>
                <ul #sourcelist class="ui-widget-content ui-picklist-list ui-picklist-source ui-corner-bottom" [ngClass]="{'ui-picklist-highlight': listHighlightSource}" [ngStyle]="sourceStyle" (dragover)="onListMouseMove($event,-1)" (dragleave)="onListDragLeave()" (drop)="onListDrop($event, -1)">
                    <ng-template ngFor let-item [ngForOf]="source" let-i="index" let-l="last">
                        <li class="ui-picklist-droppoint" *ngIf="dragdrop" (dragover)="onDragOver($event, i, -1)" (drop)="onDrop($event, i, -1)" (dragleave)="onDragLeave($event, -1)" 
                        [ngClass]="{'ui-picklist-droppoint-highlight': (i === dragOverItemIndexSource)}" [style.display]="isItemVisible(item, -1) ? 'block' : 'none'"></li>
                        <li [ngClass]="{'ui-picklist-item':true,'ui-state-highlight':isSelected(item,selectedItemsSource)}"
                            (click)="onItemClick($event,item,selectedItemsSource)" (dblclick)="onSourceItemDblClick()" (touchend)="onItemTouchEnd($event)"
                            [style.display]="isItemVisible(item, -1) ? 'block' : 'none'"
                            [draggable]="dragdrop" (dragstart)="onDragStart($event, i, -1)" (dragend)="onDragEnd($event)">
                            <ng-template [pTemplateWrapper]="itemTemplate" [item]="item"></ng-template>
                        </li>
                        <li class="ui-picklist-droppoint" *ngIf="dragdrop&&l" (dragover)="onDragOver($event, i + 1, -1)" (drop)="onDrop($event, i + 1, -1)" (dragleave)="onDragLeave($event, -1)" 
                        [ngClass]="{'ui-picklist-droppoint-highlight': (i + 1 === dragOverItemIndexSource)}"></li>
                    </ng-template>
                </ul>
            </div>
            <div class="ui-picklist-buttons">
                <div class="ui-picklist-buttons-cell">
                    <button type="button" pButton icon="fa-angle-right" (click)="moveRight()"></button>
                    <button type="button" pButton icon="fa-angle-double-right" (click)="moveAllRight()"></button>
                    <button type="button" pButton icon="fa-angle-left" (click)="moveLeft()"></button>
                    <button type="button" pButton icon="fa-angle-double-left" (click)="moveAllLeft()"></button>
                </div>
            </div>
            <div class="ui-picklist-listwrapper ui-picklist-target-wrapper" [ngClass]="{'ui-picklist-listwrapper-nocontrols':!showTargetControls}">
                <div class="ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr" *ngIf="targetHeader">{{targetHeader}}</div>
                <div class="ui-picklist-filter-container ui-widget-content" *ngIf="filterBy">
                    <input type="text" role="textbox" (keyup)="onFilter($event,target,1)" class="ui-picklist-filter ui-inputtext ui-widget ui-state-default ui-corner-all" [disabled]="disabled" [attr.placeholder]="targetFilterPlaceholder">
                    <span class="fa fa-search"></span>
                </div>
                <ul #targetlist class="ui-widget-content ui-picklist-list ui-picklist-target ui-corner-bottom" [ngClass]="{'ui-picklist-highlight': listHighlightTarget}" [ngStyle]="targetStyle" (dragover)="onListMouseMove($event,1)" (dragleave)="onListDragLeave()" (drop)="onListDrop($event,1)">
                    <ng-template ngFor let-item [ngForOf]="target" let-i="index" let-l="last">
                        <li class="ui-picklist-droppoint" *ngIf="dragdrop" (dragover)="onDragOver($event, i, 1)" (drop)="onDrop($event, i, 1)" (dragleave)="onDragLeave($event, 1)" 
                        [ngClass]="{'ui-picklist-droppoint-highlight': (i === dragOverItemIndexTarget)}" [style.display]="isItemVisible(item, 1) ? 'block' : 'none'"></li>
                        <li [ngClass]="{'ui-picklist-item':true,'ui-state-highlight':isSelected(item,selectedItemsTarget)}"
                            (click)="onItemClick($event,item,selectedItemsTarget)" (dblclick)="onTargetItemDblClick()" (touchend)="onItemTouchEnd($event)"
                            [style.display]="isItemVisible(item, 1) ? 'block' : 'none'"
                            [draggable]="dragdrop" (dragstart)="onDragStart($event, i, 1)" (dragend)="onDragEnd($event)">
                            <ng-template [pTemplateWrapper]="itemTemplate" [item]="item"></ng-template>
                        </li>
                        <li class="ui-picklist-droppoint" *ngIf="dragdrop&&l" (dragover)="onDragOver($event, i + 1, 1)" (drop)="onDrop($event, i + 1, 1)" (dragleave)="onDragLeave($event, 1)" 
                        [ngClass]="{'ui-picklist-droppoint-highlight': (i + 1 === dragOverItemIndexTarget)}"></li>
                    </ng-template>
                </ul>
            </div>
            <div class="ui-picklist-target-controls ui-picklist-buttons" *ngIf="showTargetControls">
                <div class="ui-picklist-buttons-cell">
                    <button type="button" pButton icon="fa-angle-up" (click)="moveUp(targetlist,target,selectedItemsTarget,onTargetReorder)"></button>
                    <button type="button" pButton icon="fa-angle-double-up" (click)="moveTop(targetlist,target,selectedItemsTarget,onTargetReorder)"></button>
                    <button type="button" pButton icon="fa-angle-down" (click)="moveDown(targetlist,target,selectedItemsTarget,onTargetReorder)"></button>
                    <button type="button" pButton icon="fa-angle-double-down" (click)="moveBottom(targetlist,target,selectedItemsTarget,onTargetReorder)"></button>
                </div>
            </div>
        </div>
    `,
        providers: [DomHandler, ObjectUtils]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, ObjectUtils])
], PickList);
export { PickList };
let PickListModule = class PickListModule {
};
PickListModule = __decorate([
    NgModule({
        imports: [CommonModule, ButtonModule, SharedModule],
        exports: [PickList, SharedModule],
        declarations: [PickList]
    })
], PickListModule);
export { PickListModule };
//# sourceMappingURL=picklist.js.map