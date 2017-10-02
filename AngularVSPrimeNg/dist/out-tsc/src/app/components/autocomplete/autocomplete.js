var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ViewChild, ElementRef, Input, Output, EventEmitter, ContentChildren, QueryList, Renderer2, forwardRef, ChangeDetectorRef, IterableDiffers } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from '../inputtext/inputtext';
import { ButtonModule } from '../button/button';
import { SharedModule, PrimeTemplate } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoComplete),
    multi: true
};
let AutoComplete = class AutoComplete {
    constructor(el, domHandler, renderer, objectUtils, cd, differs) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.objectUtils = objectUtils;
        this.cd = cd;
        this.differs = differs;
        this.minLength = 1;
        this.delay = 300;
        this.type = 'text';
        this.completeMethod = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onDropdownClick = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.scrollHeight = '200px';
        this.immutable = true;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.panelVisible = false;
        this.focus = false;
        this.inputFieldValue = null;
        this.differ = differs.find([]).create(null);
    }
    get suggestions() {
        return this._suggestions;
    }
    set suggestions(val) {
        this._suggestions = val;
        if (this.immutable) {
            this.handleSuggestionsChange();
        }
    }
    ngDoCheck() {
        if (!this.immutable) {
            let changes = this.differ.diff(this.suggestions);
            if (changes) {
                this.handleSuggestionsChange();
            }
        }
    }
    handleSuggestionsChange() {
        if (this.panelEL && this.panelEL.nativeElement && this.loading) {
            this.highlightOption = null;
            if (this._suggestions && this._suggestions.length) {
                this.noResults = false;
                this.show();
                this.suggestionsUpdated = true;
                if (this.autoHighlight) {
                    this.highlightOption = this._suggestions[0];
                }
            }
            else {
                this.noResults = true;
                if (this.emptyMessage) {
                    this.show();
                    this.suggestionsUpdated = true;
                }
                else {
                    this.hide();
                }
            }
        }
        this.loading = false;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    this.selectedItemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewInit() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.panelEL.nativeElement);
            else
                this.domHandler.appendChild(this.panelEL.nativeElement, this.appendTo);
        }
    }
    ngAfterViewChecked() {
        //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
        if (this.suggestionsUpdated && this.panelEL.nativeElement && this.panelEL.nativeElement.offsetParent) {
            setTimeout(() => this.align(), 1);
            this.suggestionsUpdated = false;
        }
        if (this.highlightOptionChanged) {
            setTimeout(() => {
                let listItem = this.domHandler.findSingle(this.panelEL.nativeElement, 'li.ui-state-highlight');
                if (listItem) {
                    this.domHandler.scrollInView(this.panelEL.nativeElement, listItem);
                }
            }, 1);
            this.highlightOptionChanged = false;
        }
    }
    writeValue(value) {
        this.value = value;
        this.filled = this.value && this.value != '';
        this.updateInputField();
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
    onInput(event) {
        if (!this.inputKeyDown) {
            return;
        }
        let value = event.target.value;
        if (!this.multiple) {
            this.onModelChange(value);
        }
        if (value.length === 0) {
            this.hide();
            this.onClear.emit(event);
        }
        if (value.length >= this.minLength) {
            //Cancel the search request if user types within the timeout
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                this.search(event, value);
            }, this.delay);
        }
        else {
            this.suggestions = null;
            this.hide();
        }
        this.updateFilledState();
        this.inputKeyDown = false;
    }
    onInputClick(event) {
        if (this.documentClickListener) {
            this.inputClick = true;
        }
    }
    search(event, query) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }
        this.loading = true;
        this.completeMethod.emit({
            originalEvent: event,
            query: query
        });
    }
    selectItem(option) {
        if (this.multiple) {
            this.multiInputEL.nativeElement.value = '';
            this.value = this.value || [];
            if (!this.isSelected(option)) {
                this.value = [...this.value, option];
                this.onModelChange(this.value);
            }
        }
        else {
            this.inputEL.nativeElement.value = this.field ? this.objectUtils.resolveFieldData(option, this.field) || '' : option;
            this.value = option;
            this.onModelChange(this.value);
        }
        this.onSelect.emit(option);
        this.focusInput();
    }
    show() {
        if (this.multiInputEL || this.inputEL) {
            let hasFocus = this.multiple ? document.activeElement == this.multiInputEL.nativeElement : document.activeElement == this.inputEL.nativeElement;
            if (!this.panelVisible && hasFocus) {
                this.panelVisible = true;
                this.panelEL.nativeElement.style.zIndex = ++DomHandler.zindex;
                this.domHandler.fadeIn(this.panelEL.nativeElement, 200);
                this.bindDocumentClickListener();
            }
        }
    }
    align() {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.panelEL.nativeElement, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
        else
            this.domHandler.relativePosition(this.panelEL.nativeElement, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
    }
    hide() {
        this.panelVisible = false;
        this.unbindDocumentClickListener();
    }
    handleDropdownClick(event) {
        this.focusInput();
        let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
        this.onDropdownClick.emit({
            originalEvent: event,
            query: queryValue
        });
    }
    focusInput() {
        if (this.multiple)
            this.multiInputEL.nativeElement.focus();
        else
            this.inputEL.nativeElement.focus();
    }
    removeItem(item) {
        let itemIndex = this.domHandler.index(item);
        let removedValue = this.value[itemIndex];
        this.value = this.value.filter((val, i) => i != itemIndex);
        this.onUnselect.emit(removedValue);
        this.onModelChange(this.value);
    }
    onKeydown(event) {
        if (this.panelVisible) {
            let highlightItemIndex = this.findOptionIndex(this.highlightOption);
            switch (event.which) {
                //down
                case 40:
                    if (highlightItemIndex != -1) {
                        var nextItemIndex = highlightItemIndex + 1;
                        if (nextItemIndex != (this.suggestions.length)) {
                            this.highlightOption = this.suggestions[nextItemIndex];
                            this.highlightOptionChanged = true;
                        }
                    }
                    else {
                        this.highlightOption = this.suggestions[0];
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    if (highlightItemIndex > 0) {
                        let prevItemIndex = highlightItemIndex - 1;
                        this.highlightOption = this.suggestions[prevItemIndex];
                        this.highlightOptionChanged = true;
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                        this.hide();
                    }
                    event.preventDefault();
                    break;
                //escape
                case 27:
                    this.hide();
                    event.preventDefault();
                    break;
                //tab
                case 9:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                    }
                    this.hide();
                    break;
            }
        }
        else {
            if (event.which === 40 && this.suggestions) {
                this.search(event, event.target.value);
            }
        }
        if (this.multiple) {
            switch (event.which) {
                //backspace
                case 8:
                    if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                        this.value = [...this.value];
                        let removedValue = this.value.pop();
                        this.onUnselect.emit(removedValue);
                        this.onModelChange(this.value);
                    }
                    break;
            }
        }
        this.inputKeyDown = true;
    }
    onKeyup(event) {
        this.onKeyUp.emit(event);
    }
    onInputFocus(event) {
        this.focus = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
        if (this.forceSelection) {
            let valid = false;
            let inputValue = event.target.value.toLowerCase().trim();
            if (this.suggestions) {
                for (let suggestion of this.suggestions) {
                    let itemValue = this.field ? this.objectUtils.resolveFieldData(suggestion, this.field) : suggestion;
                    if (itemValue && inputValue === itemValue.toLowerCase()) {
                        valid = true;
                        break;
                    }
                }
            }
            if (!valid) {
                if (this.multiple) {
                    this.multiInputEL.nativeElement.value = '';
                }
                else {
                    this.value = null;
                    this.inputEL.nativeElement.value = '';
                }
                this.onModelChange(this.value);
            }
        }
    }
    isSelected(val) {
        let selected = false;
        if (this.value && this.value.length) {
            for (let i = 0; i < this.value.length; i++) {
                if (this.objectUtils.equals(this.value[i], val, this.dataKey)) {
                    selected = true;
                    break;
                }
            }
        }
        return selected;
    }
    findOptionIndex(option) {
        let index = -1;
        if (this.suggestions) {
            for (let i = 0; i < this.suggestions.length; i++) {
                if (this.objectUtils.equals(option, this.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    updateFilledState() {
        if (this.multiple)
            this.filled = (this.value && this.value.length) || (this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '');
        else
            this.filled = this.inputFieldValue && this.inputFieldValue != '';
    }
    updateInputField() {
        let formattedValue = this.value ? (this.field ? this.objectUtils.resolveFieldData(this.value, this.field) || '' : this.value) : '';
        this.inputFieldValue = formattedValue;
        if (this.inputEL && this.inputEL.nativeElement) {
            this.inputEL.nativeElement.value = formattedValue;
        }
        this.updateFilledState();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', (event) => {
                if (event.which === 3) {
                    return;
                }
                if (this.inputClick)
                    this.inputClick = false;
                else
                    this.hide();
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
            this.el.nativeElement.appendChild(this.panelEL.nativeElement);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "minLength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "delay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AutoComplete.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AutoComplete.prototype, "inputStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "inputStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "maxlength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "required", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AutoComplete.prototype, "appendTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "autoHighlight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "forceSelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "type", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoComplete.prototype, "completeMethod", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoComplete.prototype, "onSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoComplete.prototype, "onUnselect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoComplete.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoComplete.prototype, "onBlur", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoComplete.prototype, "onDropdownClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoComplete.prototype, "onClear", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoComplete.prototype, "onKeyUp", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "field", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "dropdown", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "multiple", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "dataKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AutoComplete.prototype, "emptyMessage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "immutable", void 0);
__decorate([
    ViewChild('in'),
    __metadata("design:type", ElementRef)
], AutoComplete.prototype, "inputEL", void 0);
__decorate([
    ViewChild('multiIn'),
    __metadata("design:type", ElementRef)
], AutoComplete.prototype, "multiInputEL", void 0);
__decorate([
    ViewChild('panel'),
    __metadata("design:type", ElementRef)
], AutoComplete.prototype, "panelEL", void 0);
__decorate([
    ViewChild('multiContainer'),
    __metadata("design:type", ElementRef)
], AutoComplete.prototype, "multiContainerEL", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], AutoComplete.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AutoComplete.prototype, "suggestions", null);
AutoComplete = __decorate([
    Component({
        selector: 'p-autoComplete',
        template: `
        <span [ngClass]="{'ui-autocomplete ui-widget':true,'ui-autocomplete-dd':dropdown,'ui-autocomplete-multiple':multiple}" [ngStyle]="style" [class]="styleClass">
            <input *ngIf="!multiple" #in [attr.type]="type" [attr.id]="inputId" [ngStyle]="inputStyle" [class]="inputStyleClass" autocomplete="off" [attr.required]="required"
            [ngClass]="'ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input'" [value]="inputFieldValue"
            (click)="onInputClick($event)" (input)="onInput($event)" (keydown)="onKeydown($event)" (keyup)="onKeyup($event)" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)"
            [attr.placeholder]="placeholder" [attr.size]="size" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [readonly]="readonly" [disabled]="disabled"
            ><ul *ngIf="multiple" #multiContainer class="ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all" [ngClass]="{'ui-state-disabled':disabled,'ui-state-focus':focus}" (click)="multiIn.focus()">
                <li #token *ngFor="let val of value" class="ui-autocomplete-token ui-state-highlight ui-corner-all">
                    <span class="ui-autocomplete-token-icon fa fa-fw fa-close" (click)="removeItem(token)" *ngIf="!disabled"></span>
                    <span *ngIf="!selectedItemTemplate" class="ui-autocomplete-token-label">{{field ? val[field] : val}}</span>
                    <ng-template *ngIf="selectedItemTemplate" [pTemplateWrapper]="selectedItemTemplate" [item]="val"></ng-template>
                </li>
                <li class="ui-autocomplete-input-token">
                    <input #multiIn [attr.type]="type" [attr.id]="inputId" [disabled]="disabled" [attr.placeholder]="(value&&value.length ? null : placeholder)" [attr.tabindex]="tabindex" (input)="onInput($event)"  (click)="onInputClick($event)"
                            (keydown)="onKeydown($event)" (keyup)="onKeyup($event)" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" autocomplete="off" [ngStyle]="inputStyle" [class]="inputStyleClass">
                </li>
            </ul
            ><i *ngIf="loading" class="ui-autocomplete-loader fa fa-circle-o-notch fa-spin fa-fw"></i><button type="button" pButton icon="fa-fw fa-caret-down" class="ui-autocomplete-dropdown" [disabled]="disabled"
                (click)="handleDropdownClick($event)" *ngIf="dropdown"></button>
            <div #panel class="ui-autocomplete-panel ui-widget-content ui-corner-all ui-shadow" [style.display]="panelVisible ? 'block' : 'none'" [style.width]="appendTo ? 'auto' : '100%'" [style.max-height]="scrollHeight">
                <ul class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset" *ngIf="panelVisible">
                    <li *ngFor="let option of suggestions; let idx = index" [ngClass]="{'ui-autocomplete-list-item ui-corner-all':true,'ui-state-highlight':(highlightOption==option)}"
                        (mouseenter)="highlightOption=option" (mouseleave)="highlightOption=null" (click)="selectItem(option)">
                        <span *ngIf="!itemTemplate">{{field ? option[field] : option}}</span>
                        <ng-template *ngIf="itemTemplate" [pTemplateWrapper]="itemTemplate" [item]="option" [index]="idx"></ng-template>
                    </li>
                    <li *ngIf="noResults && emptyMessage" class="ui-autocomplete-list-item ui-corner-all">{{emptyMessage}}</li>
                </ul>
            </div>
        </span>
    `,
        host: {
            '[class.ui-inputwrapper-filled]': 'filled',
            '[class.ui-inputwrapper-focus]': 'focus'
        },
        providers: [DomHandler, ObjectUtils, AUTOCOMPLETE_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, ObjectUtils, ChangeDetectorRef, IterableDiffers])
], AutoComplete);
export { AutoComplete };
let AutoCompleteModule = class AutoCompleteModule {
};
AutoCompleteModule = __decorate([
    NgModule({
        imports: [CommonModule, InputTextModule, ButtonModule, SharedModule],
        exports: [AutoComplete, SharedModule],
        declarations: [AutoComplete]
    })
], AutoCompleteModule);
export { AutoCompleteModule };
//# sourceMappingURL=autocomplete.js.map