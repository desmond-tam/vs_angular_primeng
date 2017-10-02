var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren, ContentChild, QueryList, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate, Footer } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const LISTBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Listbox),
    multi: true
};
let Listbox = class Listbox {
    constructor(el, domHandler, objectUtils) {
        this.el = el;
        this.domHandler = domHandler;
        this.objectUtils = objectUtils;
        this.checkbox = false;
        this.filter = false;
        this.metaKeySelection = true;
        this.showToggleAll = true;
        this.onChange = new EventEmitter();
        this.onDblClick = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
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
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
    }
    onOptionClick(event, option) {
        if (this.disabled) {
            return;
        }
        if (!this.checkboxClick) {
            if (this.multiple)
                this.onOptionClickMultiple(event, option);
            else
                this.onOptionClickSingle(event, option);
        }
        else {
            this.checkboxClick = false;
        }
        this.optionTouched = false;
    }
    onOptionTouchEnd(event, option) {
        if (this.disabled) {
            return;
        }
        this.optionTouched = true;
    }
    onOptionClickSingle(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let metaSelection = this.optionTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            if (selected) {
                if (metaKey) {
                    this.value = null;
                    valueChanged = true;
                }
            }
            else {
                this.value = option.value;
                valueChanged = true;
            }
        }
        else {
            this.value = selected ? null : option.value;
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        }
    }
    onOptionClickMultiple(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let metaSelection = this.optionTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            if (selected) {
                if (metaKey) {
                    this.removeOption(option);
                }
                else {
                    this.value = [option.value];
                }
                valueChanged = true;
            }
            else {
                this.value = (metaKey) ? this.value || [] : [];
                this.value = [...this.value, option.value];
                valueChanged = true;
            }
        }
        else {
            if (selected) {
                this.removeOption(option);
            }
            else {
                this.value = [...this.value || [], option.value];
            }
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        }
    }
    removeOption(option) {
        this.value = this.value.filter(val => !this.objectUtils.equals(val, option.value, this.dataKey));
    }
    isSelected(option) {
        let selected = false;
        if (this.multiple) {
            if (this.value) {
                for (let val of this.value) {
                    if (this.objectUtils.equals(val, option.value, this.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = this.objectUtils.equals(this.value, option.value, this.dataKey);
        }
        return selected;
    }
    get allChecked() {
        if (this.filterValue && this.filterValue.trim().length)
            return this.allFilteredSelected();
        else
            return this.value && this.options && (this.value.length == this.options.length);
    }
    allFilteredSelected() {
        let allSelected;
        if (this.value && this.visibleOptions && this.visibleOptions.length) {
            allSelected = true;
            for (let opt of this.visibleOptions) {
                let selected;
                for (let val of this.value) {
                    if (this.objectUtils.equals(val, opt.value, this.dataKey)) {
                        selected = true;
                    }
                }
                if (!selected) {
                    allSelected = false;
                    break;
                }
            }
        }
        return allSelected;
    }
    onFilter(event) {
        this.filterValue = event.target.value.trim().toLowerCase();
        this.visibleOptions = [];
        for (let i = 0; i < this.options.length; i++) {
            let option = this.options[i];
            if (option.label.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1) {
                this.visibleOptions.push(option);
            }
        }
        this.filtered = true;
    }
    toggleAll(event, checkbox) {
        if (this.disabled || (this.filterValue && this.filterValue.trim().length && (!this.visibleOptions || this.visibleOptions.length === 0))) {
            return;
        }
        if (checkbox.checked) {
            this.value = [];
        }
        else {
            let opts = (this.visibleOptions && this.visibleOptions.length) ? this.visibleOptions : this.options;
            if (opts) {
                this.value = [];
                for (let i = 0; i < opts.length; i++) {
                    this.value.push(opts[i].value);
                }
            }
        }
        checkbox.checked = !checkbox.checked;
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event, value: this.value });
    }
    isItemVisible(option) {
        if (this.filterValue && this.filterValue.trim().length) {
            for (let i = 0; i < this.visibleOptions.length; i++) {
                if (this.visibleOptions[i].value == option.value) {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    }
    onDoubleClick(event, option) {
        if (this.disabled) {
            return;
        }
        this.onDblClick.emit({
            originalEvent: event,
            value: this.value
        });
    }
    onCheckboxClick(event, option) {
        if (this.disabled) {
            return;
        }
        this.checkboxClick = true;
        let selected = this.isSelected(option);
        if (selected) {
            this.removeOption(option);
        }
        else {
            this.value = this.value ? this.value : [];
            this.value = [...this.value, option.value];
        }
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], Listbox.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Listbox.prototype, "multiple", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Listbox.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Listbox.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Listbox.prototype, "listStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Listbox.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Listbox.prototype, "checkbox", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Listbox.prototype, "filter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Listbox.prototype, "metaKeySelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Listbox.prototype, "dataKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Listbox.prototype, "showToggleAll", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Listbox.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Listbox.prototype, "onDblClick", void 0);
__decorate([
    ContentChild(Footer),
    __metadata("design:type", Object)
], Listbox.prototype, "footerFacet", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], Listbox.prototype, "templates", void 0);
Listbox = __decorate([
    Component({
        selector: 'p-listbox',
        template: `
        <div [ngClass]="{'ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled}" [ngStyle]="style" [class]="styleClass">
            <div class="ui-widget-header ui-corner-all ui-listbox-header ui-helper-clearfix" *ngIf="(checkbox && multiple) || filter" [ngClass]="{'ui-listbox-header-w-checkbox': checkbox}">
                <div class="ui-chkbox ui-widget" *ngIf="checkbox && multiple && showToggleAll">
                    <div class="ui-helper-hidden-accessible">
                        <input #cb type="checkbox" readonly="readonly" [checked]="allChecked">
                    </div>
                    <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" [ngClass]="{'ui-state-active':allChecked}" (click)="toggleAll($event,cb)">
                        <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'fa fa-check':allChecked}"></span>
                    </div>
                </div>
                <div class="ui-listbox-filter-container" *ngIf="filter">
                    <input type="text" role="textbox" (input)="onFilter($event)" class="ui-inputtext ui-widget ui-state-default ui-corner-all" [disabled]="disabled">
                    <span class="fa fa-search"></span>
                </div>
            </div>
            <div class="ui-listbox-list-wrapper">
                <ul class="ui-listbox-list" [ngStyle]="listStyle">
                    <li *ngFor="let option of options; let i = index;" [style.display]="isItemVisible(option) ? 'block' : 'none'"
                        [ngClass]="{'ui-listbox-item ui-corner-all':true,'ui-state-highlight':isSelected(option)}"
                        (click)="onOptionClick($event,option)" (dblclick)="onDoubleClick($event,option)" (touchend)="onOptionTouchEnd($event,option)">
                        <div class="ui-chkbox ui-widget" *ngIf="checkbox && multiple" (click)="onCheckboxClick($event,option)">
                            <div class="ui-helper-hidden-accessible">
                                <input type="checkbox" [checked]="isSelected(option)" [disabled]="disabled">
                            </div>
                            <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" [ngClass]="{'ui-state-active':isSelected(option)}">
                                <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'fa fa-check':isSelected(option)}"></span>
                            </div>
                        </div>
                        <span *ngIf="!itemTemplate">{{option.label}}</span>
                        <ng-template *ngIf="itemTemplate" [pTemplateWrapper]="itemTemplate" [item]="option" [index]="i"></ng-template>
                    </li>
                </ul>
            </div>
            <div class="ui-listbox-footer ui-widget-header ui-corner-all" *ngIf="footerFacet">
                <ng-content select="p-footer"></ng-content>
            </div>
        </div>
    `,
        providers: [DomHandler, ObjectUtils, LISTBOX_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, ObjectUtils])
], Listbox);
export { Listbox };
let ListboxModule = class ListboxModule {
};
ListboxModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule],
        exports: [Listbox, SharedModule],
        declarations: [Listbox]
    })
], ListboxModule);
export { ListboxModule };
//# sourceMappingURL=listbox.js.map