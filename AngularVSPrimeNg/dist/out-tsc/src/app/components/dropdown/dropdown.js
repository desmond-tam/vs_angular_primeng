var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, Renderer2, EventEmitter, ContentChildren, QueryList, ViewChild, forwardRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const DROPDOWN_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Dropdown),
    multi: true
};
let Dropdown = class Dropdown {
    constructor(el, domHandler, renderer, cd, objectUtils, zone) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.cd = cd;
        this.objectUtils = objectUtils;
        this.zone = zone;
        this.scrollHeight = '200px';
        this.autoWidth = true;
        this.filterBy = 'label';
        this.lazy = true;
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.panelVisible = false;
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
    ngOnInit() {
        this.optionsToDisplay = this.options;
        this.updateSelectedOption(null);
    }
    get options() {
        return this._options;
    }
    set options(opts) {
        this._options = opts;
        this.optionsToDisplay = this._options;
        this.updateSelectedOption(this.value);
        this.optionsChanged = true;
        if (this.filterValue && this.filterValue.length) {
            this.activateFilter();
        }
    }
    ngAfterViewInit() {
        this.container = this.containerViewChild.nativeElement;
        this.panel = this.panelViewChild.nativeElement;
        this.itemsWrapper = this.itemsWrapperViewChild.nativeElement;
        if (this.editable) {
            this.updateEditableLabel();
        }
        this.updateDimensions();
        this.initialized = true;
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                this.domHandler.appendChild(this.panel, this.appendTo);
        }
    }
    get label() {
        return (this.selectedOption ? this.selectedOption.label : null);
    }
    updateEditableLabel() {
        if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.selectedOption.label : this.value || '');
        }
    }
    onItemClick(event, option) {
        this.itemClick = true;
        this.selectItem(event, option);
        this.focusViewChild.nativeElement.focus();
        this.hide();
    }
    selectItem(event, option) {
        if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = option.value;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        }
    }
    ngAfterViewChecked() {
        if (this.shown) {
            this.onShow();
            this.shown = false;
        }
        if (this.optionsChanged && this.panelVisible) {
            this.optionsChanged = false;
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.updateDimensions();
                    this.alignPanel();
                }, 1);
            });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            let selectedItem = this.domHandler.findSingle(this.panel, 'li.ui-state-highlight');
            if (selectedItem) {
                this.domHandler.scrollInView(this.itemsWrapper, this.domHandler.findSingle(this.panel, 'li.ui-state-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    }
    writeValue(value) {
        if (this.filter) {
            this.resetFilter();
        }
        this.value = value;
        this.updateSelectedOption(value);
        this.updateEditableLabel();
        this.cd.markForCheck();
    }
    resetFilter() {
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
        }
        this.optionsToDisplay = this.options;
    }
    updateSelectedOption(val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (!this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
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
    updateDimensions() {
        if (this.autoWidth) {
            let select = this.domHandler.findSingle(this.el.nativeElement, 'select');
            if (!this.style || (!this.style['width'] && !this.style['min-width'])) {
                this.el.nativeElement.children[0].style.width = select.offsetWidth + 30 + 'px';
            }
        }
    }
    onMouseclick(event) {
        if (this.disabled || this.readonly) {
            return;
        }
        this.selfClick = true;
        if (!this.itemClick) {
            this.focusViewChild.nativeElement.focus();
            if (this.panelVisible)
                this.hide();
            else {
                this.show();
                if (this.filterViewChild != undefined) {
                    setTimeout(() => {
                        this.filterViewChild.nativeElement.focus();
                    }, 200);
                }
            }
        }
    }
    onEditableInputClick(event) {
        this.itemClick = true;
        this.bindDocumentClickListener();
    }
    onEditableInputFocus(event) {
        this.focus = true;
        this.hide();
    }
    onEditableInputChange(event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    onShow() {
        if (this.options && this.options.length) {
            this.alignPanel();
            this.bindDocumentClickListener();
            let selectedListItem = this.domHandler.findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');
            if (selectedListItem) {
                this.domHandler.scrollInView(this.itemsWrapper, selectedListItem);
            }
        }
    }
    show() {
        if (this.appendTo) {
            this.panel.style.minWidth = this.domHandler.getWidth(this.container) + 'px';
        }
        this.panel.style.zIndex = String(++DomHandler.zindex);
        this.panelVisible = true;
        this.shown = true;
    }
    hide() {
        this.panelVisible = false;
    }
    alignPanel() {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.panel, this.container);
        else
            this.domHandler.relativePosition(this.panel, this.container);
    }
    onInputFocus(event) {
        this.focus = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onKeydown(event) {
        if (this.readonly) {
            return;
        }
        let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
        switch (event.which) {
            //down
            case 40:
                if (!this.panelVisible && event.altKey) {
                    this.show();
                }
                else {
                    if (selectedItemIndex !== -1) {
                        let nextItemIndex = selectedItemIndex + 1;
                        if (nextItemIndex != (this.optionsToDisplay.length)) {
                            this.selectItem(event, this.optionsToDisplay[nextItemIndex]);
                            this.selectedOptionUpdated = true;
                        }
                    }
                    else if (this.optionsToDisplay) {
                        this.selectItem(event, this.optionsToDisplay[0]);
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (selectedItemIndex > 0) {
                    let prevItemIndex = selectedItemIndex - 1;
                    this.selectItem(event, this.optionsToDisplay[prevItemIndex]);
                    this.selectedOptionUpdated = true;
                }
                event.preventDefault();
                break;
            //space
            case 32:
            case 32:
                if (!this.panelVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //enter
            case 13:
                this.hide();
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide();
                break;
        }
    }
    findOptionIndex(val, opts) {
        let index = -1;
        if (opts) {
            for (let i = 0; i < opts.length; i++) {
                if ((val == null && opts[i].value == null) || this.objectUtils.equals(val, opts[i].value, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    findOption(val, opts) {
        let index = this.findOptionIndex(val, opts);
        return (index != -1) ? opts[index] : null;
    }
    onFilter(event) {
        let inputValue = event.target.value.toLowerCase();
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.optionsToDisplay = this.options;
        }
        this.optionsChanged = true;
    }
    activateFilter() {
        let searchFields = this.filterBy.split(',');
        if (this.options && this.options.length) {
            this.optionsToDisplay = this.objectUtils.filter(this.options, searchFields, this.filterValue);
            this.optionsChanged = true;
        }
    }
    applyFocus() {
        if (this.editable)
            this.domHandler.findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();
        else
            this.domHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (!this.selfClick && !this.itemClick) {
                    this.panelVisible = false;
                    this.unbindDocumentClickListener();
                }
                this.selfClick = false;
                this.itemClick = false;
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
        this.initialized = false;
        this.unbindDocumentClickListener();
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.panel);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "filter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dropdown.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dropdown.prototype, "panelStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "panelStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "autoWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "required", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "editable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Dropdown.prototype, "appendTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Dropdown.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "filterPlaceholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "dataKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "filterBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "lazy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "autofocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dropdown.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dropdown.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Dropdown.prototype, "onBlur", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "containerViewChild", void 0);
__decorate([
    ViewChild('panel'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "panelViewChild", void 0);
__decorate([
    ViewChild('itemswrapper'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "itemsWrapperViewChild", void 0);
__decorate([
    ViewChild('filter'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "filterViewChild", void 0);
__decorate([
    ViewChild('in'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "focusViewChild", void 0);
__decorate([
    ViewChild('editableInput'),
    __metadata("design:type", ElementRef)
], Dropdown.prototype, "editableInputViewChild", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], Dropdown.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Dropdown.prototype, "options", null);
Dropdown = __decorate([
    Component({
        selector: 'p-dropdown',
        template: `
         <div #container [ngClass]="{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,
            'ui-state-disabled':disabled,'ui-dropdown-open':panelVisible,'ui-state-focus':focus}"
            (click)="onMouseclick($event)" [ngStyle]="style" [class]="styleClass">
            <div class="ui-helper-hidden-accessible" *ngIf="autoWidth">
                <select [required]="required" name="options" [attr.aria-label]="selectedOption ? selectedOption.label : ' '" tabindex="-1" aria-hidden="true">
                    <option *ngFor="let option of options" [value]="option.value" [selected]="selectedOption == option">{{option.label}}</option>
                </select>
            </div>
            <div class="ui-helper-hidden-accessible">
                <input #in [attr.id]="inputId" type="text" [attr.aria-label]="selectedOption ? selectedOption.label : ' '" readonly (focus)="onInputFocus($event)" role="listbox"
                    (blur)="onInputBlur($event)" (keydown)="onKeydown($event)" [disabled]="disabled" [attr.tabindex]="tabindex" [attr.autofocus]="autofocus">
            </div>
            <label [ngClass]="{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':(label === null)}" *ngIf="!editable&&(label !== null)">{{label||'empty'}}</label>
            <label [ngClass]="{'ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder':true}" *ngIf="!editable&&(label === null)">{{placeholder}}</label>
            <input #editableInput type="text" [attr.aria-label]="selectedOption ? selectedOption.label : ' '" class="ui-dropdown-label ui-inputtext ui-corner-all" *ngIf="editable" [disabled]="disabled" [attr.placeholder]="placeholder"
                        (click)="onEditableInputClick($event)" (input)="onEditableInputChange($event)" (focus)="onEditableInputFocus($event)" (blur)="onInputBlur($event)">
            <div class="ui-dropdown-trigger ui-state-default ui-corner-right">
                <span class="fa fa-fw fa-caret-down ui-clickable"></span>
            </div>
            <div #panel [ngClass]="'ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow'" [@panelState]="panelVisible ? 'visible' : 'hidden'"
                [style.display]="panelVisible ? 'block' : 'none'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                <div *ngIf="filter" class="ui-dropdown-filter-container" (input)="onFilter($event)" (click)="$event.stopPropagation()">
                    <input #filter type="text" autocomplete="off" class="ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all" [attr.placeholder]="filterPlaceholder"
                    (keydown.enter)="$event.preventDefault()" (keydown)="onKeydown($event)">
                    <span class="fa fa-search"></span>
                </div>
                <div #itemswrapper class="ui-dropdown-items-wrapper" [style.max-height]="scrollHeight||'auto'">
                    <ul class="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset" *ngIf="lazy ? panelVisible : true">
                        <li *ngFor="let option of optionsToDisplay;let i=index" 
                            [ngClass]="{'ui-dropdown-item ui-corner-all':true, 'ui-state-highlight':(selectedOption == option), 
                            'ui-dropdown-item-empty':!option.label||option.label.length === 0}"
                            (click)="onItemClick($event, option)">
                            <span *ngIf="!itemTemplate">{{option.label||'empty'}}</span>
                            <ng-template [pTemplateWrapper]="itemTemplate" [item]="option" *ngIf="itemTemplate"></ng-template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
        animations: [
            trigger('panelState', [
                state('hidden', style({
                    opacity: 0
                })),
                state('visible', style({
                    opacity: 1
                })),
                transition('visible => hidden', animate('400ms ease-in')),
                transition('hidden => visible', animate('400ms ease-out'))
            ])
        ],
        providers: [DomHandler, ObjectUtils, DROPDOWN_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, ChangeDetectorRef,
        ObjectUtils, NgZone])
], Dropdown);
export { Dropdown };
let DropdownModule = class DropdownModule {
};
DropdownModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule],
        exports: [Dropdown, SharedModule],
        declarations: [Dropdown]
    })
], DropdownModule);
export { DropdownModule };
//# sourceMappingURL=dropdown.js.map