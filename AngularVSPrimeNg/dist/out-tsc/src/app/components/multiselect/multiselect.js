var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, Renderer2, EventEmitter, IterableDiffers, forwardRef, ViewChild, ChangeDetectorRef, ContentChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
import { SharedModule, PrimeTemplate } from '../common/shared';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const MULTISELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelect),
    multi: true
};
let MultiSelect = class MultiSelect {
    constructor(el, domHandler, renderer, differs, objectUtils, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.objectUtils = objectUtils;
        this.cd = cd;
        this.onChange = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.scrollHeight = '200px';
        this.defaultLabel = 'Choose';
        this.filter = true;
        this.displaySelectedLabel = true;
        this.maxSelectedLabels = 3;
        this.selectedItemsLabel = '{0} items selected';
        this.showToggleAll = true;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.valueDiffer = differs.find([]).create(null);
        this.optionsDiffer = differs.find([]).create(null);
    }
    ngOnInit() {
        this.updateLabel();
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
    ngAfterViewInit() {
        this.container = this.containerViewChild.nativeElement;
        this.panel = this.panelViewChild.nativeElement;
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                this.domHandler.appendChild(this.panel, this.appendTo);
        }
        if (this.overlayVisible) {
            this.show();
        }
    }
    ngAfterViewChecked() {
        if (this.filtered) {
            if (this.appendTo)
                this.domHandler.absolutePosition(this.panel, this.container);
            else
                this.domHandler.relativePosition(this.panel, this.container);
            this.filtered = false;
        }
    }
    ngDoCheck() {
        let valueChanges = this.valueDiffer.diff(this.value);
        let optionChanges = this.optionsDiffer.diff(this.options);
        if (valueChanges || optionChanges) {
            this.updateLabel();
        }
    }
    writeValue(value) {
        this.value = value;
        this.updateLabel();
        this.cd.markForCheck();
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
    onItemClick(event, value) {
        let selectionIndex = this.findSelectionIndex(value);
        if (selectionIndex != -1)
            this.value = this.value.filter((val, i) => i != selectionIndex);
        else
            this.value = [...this.value || [], value];
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event, value: this.value });
    }
    isSelected(value) {
        return this.findSelectionIndex(value) != -1;
    }
    findSelectionIndex(val) {
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if (this.objectUtils.equals(this.value[i], val, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    toggleAll(event, checkbox) {
        if (checkbox.checked) {
            this.value = [];
        }
        else {
            let opts = this.getVisibleOptions();
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
    isAllChecked() {
        if (this.filterValue && this.filterValue.trim().length)
            return this.value && this.visibleOptions && this.visibleOptions.length && (this.value.length == this.visibleOptions.length);
        else
            return this.value && this.options && (this.value.length == this.options.length);
    }
    show() {
        this.overlayVisible = true;
        this.panel.style.zIndex = String(++DomHandler.zindex);
        this.bindDocumentClickListener();
        if (this.appendTo)
            this.domHandler.absolutePosition(this.panel, this.container);
        else
            this.domHandler.relativePosition(this.panel, this.container);
        this.domHandler.fadeIn(this.panel, 250);
    }
    hide() {
        this.overlayVisible = false;
        this.unbindDocumentClickListener();
    }
    close(event) {
        this.hide();
        event.preventDefault();
        event.stopPropagation();
    }
    onMouseclick(event, input) {
        if (this.disabled) {
            return;
        }
        if (!this.panelClick) {
            if (this.overlayVisible) {
                this.hide();
            }
            else {
                input.focus();
                this.show();
            }
        }
        this.selfClick = true;
    }
    onFocus(event) {
        this.focus = true;
    }
    onInputBlur(event) {
        this.focus = false;
        this.onBlur.emit({ originalEvent: event });
        this.onModelTouched();
    }
    updateLabel() {
        if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
            let label = '';
            for (let i = 0; i < this.value.length; i++) {
                let itemLabel = this.findLabelByValue(this.value[i]);
                if (itemLabel) {
                    if (label.length > 0) {
                        label = label + ', ';
                    }
                    label = label + itemLabel;
                }
            }
            if (this.value.length <= this.maxSelectedLabels) {
                this.valuesAsString = label;
            }
            else {
                let pattern = /{(.*?)}/, newSelectedItemsLabel = this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.value.length + '');
                this.valuesAsString = newSelectedItemsLabel;
            }
        }
        else {
            this.valuesAsString = this.defaultLabel;
        }
    }
    findLabelByValue(val) {
        let label = null;
        for (let i = 0; i < this.options.length; i++) {
            let option = this.options[i];
            if (val == null && option.value == null || this.objectUtils.equals(val, option.value, this.dataKey)) {
                label = option.label;
                break;
            }
        }
        return label;
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
    getVisibleOptions() {
        if (this.filterValue && this.filterValue.trim().length) {
            let items = [];
            for (let i = 0; i < this.options.length; i++) {
                let option = this.options[i];
                if (option.label.toLowerCase().includes(this.filterValue.toLowerCase())) {
                    items.push(option);
                }
            }
            return items;
        }
        else {
            return this.options;
        }
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (!this.selfClick && !this.panelClick && this.overlayVisible) {
                    this.hide();
                }
                this.selfClick = false;
                this.panelClick = false;
                this.cd.markForCheck();
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    ngOnDestroy() {
        this.unbindDocumentClickListener();
        if (this.appendTo) {
            this.container.appendChild(this.panel);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], MultiSelect.prototype, "options", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MultiSelect.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MultiSelect.prototype, "onBlur", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MultiSelect.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MultiSelect.prototype, "defaultLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MultiSelect.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MultiSelect.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MultiSelect.prototype, "panelStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MultiSelect.prototype, "panelStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MultiSelect.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MultiSelect.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MultiSelect.prototype, "filter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MultiSelect.prototype, "overlayVisible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MultiSelect.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MultiSelect.prototype, "appendTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MultiSelect.prototype, "dataKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MultiSelect.prototype, "displaySelectedLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MultiSelect.prototype, "maxSelectedLabels", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MultiSelect.prototype, "selectedItemsLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MultiSelect.prototype, "showToggleAll", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], MultiSelect.prototype, "containerViewChild", void 0);
__decorate([
    ViewChild('panel'),
    __metadata("design:type", ElementRef)
], MultiSelect.prototype, "panelViewChild", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], MultiSelect.prototype, "templates", void 0);
MultiSelect = __decorate([
    Component({
        selector: 'p-multiSelect',
        template: `
        <div #container [ngClass]="{'ui-multiselect ui-widget ui-state-default ui-corner-all':true,'ui-state-focus':focus,'ui-state-disabled': disabled}" [ngStyle]="style" [class]="styleClass"
            (click)="onMouseclick($event,in)">
            <div class="ui-helper-hidden-accessible">
                <input #in type="text" readonly="readonly" [attr.id]="inputId" (focus)="onFocus($event)" (blur)="onInputBlur($event)" [disabled]="disabled" [attr.tabindex]="tabindex">
            </div>
            <div class="ui-multiselect-label-container" [title]="valuesAsString">
                <label class="ui-multiselect-label ui-corner-all">{{valuesAsString}}</label>
            </div>
            <div [ngClass]="{'ui-multiselect-trigger ui-state-default ui-corner-right':true}">
                <span class="fa fa-fw fa-caret-down ui-clickable"></span>
            </div>
            <div #panel [ngClass]="['ui-multiselect-panel ui-widget ui-widget-content ui-corner-all ui-shadow', panelStyleClass||'']" [ngStyle]="panelStyle"
                [style.display]="overlayVisible ? 'block' : 'none'" (click)="panelClick=true">
                <div class="ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix" [ngClass]="{'ui-multiselect-header-no-toggleall': !showToggleAll}">
                    <div class="ui-chkbox ui-widget" *ngIf="showToggleAll">
                        <div class="ui-helper-hidden-accessible">
                            <input #cb type="checkbox" readonly="readonly" [checked]="isAllChecked()">
                        </div>
                        <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" [ngClass]="{'ui-state-active':isAllChecked()}" (click)="toggleAll($event,cb)">
                            <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'fa fa-check':isAllChecked()}"></span>
                        </div>
                    </div>
                    <div class="ui-multiselect-filter-container" *ngIf="filter">
                        <input type="text" role="textbox" (input)="onFilter($event)"
                                    class="ui-inputtext ui-widget ui-state-default ui-corner-all">
                        <span class="fa fa-fw fa-search"></span>
                    </div>
                    <a class="ui-multiselect-close ui-corner-all" href="#" (click)="close($event)">
                        <span class="fa fa-close"></span>
                    </a>
                </div>
                <div class="ui-multiselect-items-wrapper">
                    <ul class="ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset" [style.max-height]="scrollHeight||'auto'">
                        <li *ngFor="let option of options; let index = i" class="ui-multiselect-item ui-corner-all" (click)="onItemClick($event,option.value)" 
                            [style.display]="isItemVisible(option) ? 'block' : 'none'" [ngClass]="{'ui-state-highlight':isSelected(option.value)}">
                            <div class="ui-chkbox ui-widget">
                                <div class="ui-helper-hidden-accessible">
                                    <input type="checkbox" readonly="readonly" [checked]="isSelected(option.value)">
                                </div>
                                <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" [ngClass]="{'ui-state-active':isSelected(option.value)}">
                                    <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'fa fa-check':isSelected(option.value)}"></span>
                                </div>
                            </div>
                            <label *ngIf="!itemTemplate">{{option.label}}</label>
                            <ng-template [pTemplateWrapper]="itemTemplate" [item]="option" [index]="i" *ngIf="itemTemplate"></ng-template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
        providers: [DomHandler, ObjectUtils, MULTISELECT_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, IterableDiffers, ObjectUtils, ChangeDetectorRef])
], MultiSelect);
export { MultiSelect };
let MultiSelectModule = class MultiSelectModule {
};
MultiSelectModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule],
        exports: [MultiSelect, SharedModule],
        declarations: [MultiSelect]
    })
], MultiSelectModule);
export { MultiSelectModule };
//# sourceMappingURL=multiselect.js.map