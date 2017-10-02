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
let OrderList = class OrderList {
    constructor(el, domHandler, objectUtils) {
        this.el = el;
        this.domHandler = domHandler;
        this.objectUtils = objectUtils;
        this.metaKeySelection = true;
        this.onReorder = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onFilterEvent = new EventEmitter();
    }
    ngAfterViewInit() {
        this.listContainer = this.domHandler.findSingle(this.el.nativeElement, 'ul.ui-orderlist-list');
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
            let listItems = this.domHandler.find(this.listContainer, 'li.ui-state-highlight');
            let listItem;
            if (this.movedUp)
                listItem = listItems[0];
            else
                listItem = listItems[listItems.length - 1];
            this.domHandler.scrollInView(this.listContainer, listItem);
            this.movedUp = false;
            this.movedDown = false;
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        if (this.filterValue) {
            this.filter();
        }
    }
    onItemClick(event, item) {
        let index = this.findIndexInList(item, this.selectedItems);
        let selected = (index != -1);
        let metaSelection = this.itemTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            if (selected && metaKey) {
                this.selectedItems.splice(index, 1);
            }
            else {
                this.selectedItems = (metaKey) ? this.selectedItems || [] : [];
                this.selectedItems.push(item);
            }
        }
        else {
            if (selected) {
                this.selectedItems.splice(index, 1);
            }
            else {
                this.selectedItems = this.selectedItems || [];
                this.selectedItems.push(item);
            }
        }
        this.onSelectionChange.emit({ originalEvent: event, value: this.selectedItems });
        this.itemTouched = false;
    }
    onFilterKeyup(event) {
        this.filterValue = event.target.value.trim().toLowerCase();
        this.filter();
        this.onFilterEvent.emit({
            originalEvent: event,
            value: this.visibleOptions
        });
    }
    filter() {
        let searchFields = this.filterBy.split(',');
        this.visibleOptions = this.objectUtils.filter(this.value, searchFields, this.filterValue);
    }
    isItemVisible(item) {
        if (this.filterValue && this.filterValue.trim().length) {
            for (let i = 0; i < this.visibleOptions.length; i++) {
                if (item == this.visibleOptions[i]) {
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
    isSelected(item) {
        return this.findIndexInList(item, this.selectedItems) != -1;
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
    moveUp(event, listElement) {
        if (this.selectedItems) {
            for (let i = 0; i < this.selectedItems.length; i++) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex - 1];
                    this.value[selectedItemIndex - 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedUp = true;
            this.onReorder.emit(event);
        }
    }
    moveTop(event, listElement) {
        if (this.selectedItems) {
            for (let i = 0; i < this.selectedItems.length; i++) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.unshift(movedItem);
                    listElement.scrollTop = 0;
                }
                else {
                    break;
                }
            }
            this.onReorder.emit(event);
            listElement.scrollTop = 0;
        }
    }
    moveDown(event, listElement) {
        if (this.selectedItems) {
            for (let i = this.selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex + 1];
                    this.value[selectedItemIndex + 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedDown = true;
            this.onReorder.emit(event);
        }
    }
    moveBottom(event, listElement) {
        if (this.selectedItems) {
            for (let i = this.selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.push(movedItem);
                }
                else {
                    break;
                }
            }
            this.onReorder.emit(event);
            listElement.scrollTop = listElement.scrollHeight;
        }
    }
    onDragStart(event, index) {
        this.dragging = true;
        this.draggedItemIndex = index;
        if (this.dragdropScope) {
            event.dataTransfer.setData("text", this.dragdropScope);
        }
    }
    onDragOver(event, index) {
        if (this.draggedItemIndex !== index && this.draggedItemIndex + 1 !== index) {
            this.dragOverItemIndex = index;
            event.preventDefault();
        }
    }
    onDragLeave(event, index) {
        this.dragOverItemIndex = null;
    }
    onDrop(event, index) {
        let dropIndex = (this.draggedItemIndex > index) ? index : (index === 0) ? 0 : index - 1;
        this.objectUtils.reorderArray(this.value, this.draggedItemIndex, dropIndex);
        this.dragOverItemIndex = null;
    }
    onDragEnd(event) {
        this.dragging = false;
    }
    onListMouseMove(event) {
        if (this.dragging) {
            let offsetY = this.listViewChild.nativeElement.getBoundingClientRect().top + document.body.scrollTop;
            let bottomDiff = (offsetY + this.listViewChild.nativeElement.clientHeight) - event.pageY;
            let topDiff = (event.pageY - offsetY);
            if (bottomDiff < 25 && bottomDiff > 0)
                this.listViewChild.nativeElement.scrollTop += 15;
            else if (topDiff < 25 && topDiff > 0)
                this.listViewChild.nativeElement.scrollTop -= 15;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], OrderList.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrderList.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OrderList.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrderList.prototype, "listStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], OrderList.prototype, "responsive", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OrderList.prototype, "filterBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OrderList.prototype, "filterPlaceholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], OrderList.prototype, "metaKeySelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], OrderList.prototype, "dragdrop", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OrderList.prototype, "dragdropScope", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OrderList.prototype, "onReorder", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OrderList.prototype, "onSelectionChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], OrderList.prototype, "onFilterEvent", void 0);
__decorate([
    ViewChild('listelement'),
    __metadata("design:type", ElementRef)
], OrderList.prototype, "listViewChild", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], OrderList.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], OrderList.prototype, "value", null);
OrderList = __decorate([
    Component({
        selector: 'p-orderList',
        template: `
        <div [ngClass]="{'ui-orderlist ui-widget':true,'ui-orderlist-responsive':responsive}" [ngStyle]="style" [class]="styleClass">
            <div class="ui-orderlist-controls">
                <button type="button" pButton icon="fa-angle-up" (click)="moveUp($event,listelement)"></button>
                <button type="button" pButton icon="fa-angle-double-up" (click)="moveTop($event,listelement)"></button>
                <button type="button" pButton icon="fa-angle-down" (click)="moveDown($event,listelement)"></button>
                <button type="button" pButton icon="fa-angle-double-down" (click)="moveBottom($event,listelement)"></button>
            </div>
            <div class="ui-orderlist-list-container">
                <div class="ui-orderlist-caption ui-widget-header ui-corner-top" *ngIf="header">{{header}}</div>
                <div class="ui-orderlist-filter-container ui-widget-content" *ngIf="filterBy">
                    <input type="text" role="textbox" (keyup)="onFilterKeyup($event)" class="ui-inputtext ui-widget ui-state-default ui-corner-all" [disabled]="disabled" [attr.placeholder]="filterPlaceholder">
                    <span class="fa fa-search"></span>
                </div>
                <ul #listelement class="ui-widget-content ui-orderlist-list ui-corner-bottom" [ngStyle]="listStyle" (dragover)="onListMouseMove($event)">
                    <ng-template ngFor let-item [ngForOf]="value" let-i="index" let-l="last">
                        <li class="ui-orderlist-droppoint" *ngIf="dragdrop && isItemVisible(item)" (dragover)="onDragOver($event, i)" (drop)="onDrop($event, i)" (dragleave)="onDragLeave($event)" 
                            [ngClass]="{'ui-state-highlight': (i === dragOverItemIndex)}"></li>
                        <li class="ui-orderlist-item"
                            [ngClass]="{'ui-state-highlight':isSelected(item)}" 
                            (click)="onItemClick($event,item)" (touchend)="onItemTouchEnd($event)"
                            [style.display]="isItemVisible(item) ? 'block' : 'none'"
                            [draggable]="dragdrop" (dragstart)="onDragStart($event, i)" (dragend)="onDragEnd($event)">
                            <ng-template [pTemplateWrapper]="itemTemplate" [item]="item"></ng-template>
                        </li>
                        <li class="ui-orderlist-droppoint" *ngIf="dragdrop && l" (dragover)="onDragOver($event, i + 1)" (drop)="onDrop($event, i + 1)" (dragleave)="onDragLeave($event)" 
                            [ngClass]="{'ui-state-highlight': (i + 1 === dragOverItemIndex)}"></li>
                    </ng-template>
                </ul>
            </div>
        </div>
    `,
        providers: [DomHandler, ObjectUtils]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, ObjectUtils])
], OrderList);
export { OrderList };
let OrderListModule = class OrderListModule {
};
OrderListModule = __decorate([
    NgModule({
        imports: [CommonModule, ButtonModule, SharedModule],
        exports: [OrderList, SharedModule],
        declarations: [OrderList]
    })
], OrderListModule);
export { OrderListModule };
//# sourceMappingURL=orderlist.js.map