var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from '../common/shared';
import { InputTextModule } from '../inputtext/inputtext';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Chips),
    multi: true
};
let Chips = class Chips {
    constructor(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onAdd = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.allowDuplicate = true;
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
    resolveFieldData(data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
    onFocus() {
        this.focus = true;
    }
    onBlur() {
        this.focus = false;
        this.onModelTouched();
    }
    removeItem(event, index) {
        if (this.disabled) {
            return;
        }
        let removedItem = this.value[index];
        this.value = this.value.filter((val, i) => i != index);
        this.onModelChange(this.value);
        this.onRemove.emit({
            originalEvent: event,
            value: removedItem
        });
    }
    addItem(event, item) {
        this.value = this.value || [];
        if (item && item.trim().length && (!this.max || this.max > item.length)) {
            if (this.allowDuplicate || !this.value.includes(item)) {
                this.value = [...this.value, item];
                this.onModelChange(this.value);
                this.onAdd.emit({
                    originalEvent: event,
                    value: item
                });
            }
        }
    }
    onKeydown(event, inputEL) {
        switch (event.which) {
            //backspace
            case 8:
                if (inputEL.value.length === 0 && this.value && this.value.length > 0) {
                    this.value = [...this.value];
                    let removedItem = this.value.pop();
                    this.onModelChange(this.value);
                    this.onRemove.emit({
                        originalEvent: event,
                        value: removedItem
                    });
                }
                break;
            //enter
            case 13:
                this.addItem(event, inputEL.value);
                inputEL.value = '';
                event.preventDefault();
                break;
            case 9:
                if (this.addOnTab && inputEL.value !== '') {
                    this.addItem(event, inputEL.value);
                    inputEL.value = '';
                    event.preventDefault();
                }
                break;
            default:
                if (this.max && this.value && this.max === this.value.length) {
                    event.preventDefault();
                }
                break;
        }
    }
    get maxedOut() {
        return this.max && this.value && this.max === this.value.length;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], Chips.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Chips.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Chips.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Chips.prototype, "onAdd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Chips.prototype, "onRemove", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Chips.prototype, "field", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Chips.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Chips.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Chips.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Chips.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Chips.prototype, "allowDuplicate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Chips.prototype, "inputStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Chips.prototype, "inputStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Chips.prototype, "addOnTab", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], Chips.prototype, "templates", void 0);
Chips = __decorate([
    Component({
        selector: 'p-chips',
        template: `
        <div [ngClass]="'ui-chips ui-widget'" [ngStyle]="style" [class]="styleClass">
            <ul [ngClass]="{'ui-inputtext ui-state-default ui-corner-all':true,'ui-state-focus':focus,'ui-state-disabled':disabled}" (click)="inputtext.focus()">
                <li #token *ngFor="let item of value; let i = index;" class="ui-chips-token ui-state-highlight ui-corner-all">
                    <span *ngIf="!disabled" class="ui-chips-token-icon fa fa-fw fa-close" (click)="removeItem($event,i)"></span>
                    <span *ngIf="!itemTemplate" class="ui-chips-token-label">{{field ? resolveFieldData(item,field) : item}}</span>
                    <ng-template *ngIf="itemTemplate" [pTemplateWrapper]="itemTemplate" [item]="item"></ng-template>
                </li>
                <li class="ui-chips-input-token">
                    <input #inputtext type="text" [attr.id]="inputId" [attr.placeholder]="placeholder" [attr.tabindex]="tabindex" (keydown)="onKeydown($event,inputtext)" 
                        (focus)="onFocus()" (blur)="onBlur()" [disabled]="maxedOut||disabled" [disabled]="disabled" [ngStyle]="inputStyle" [class]="inputStyleClass">
                </li>
            </ul>
        </div>
    `,
        providers: [DomHandler, CHIPS_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler])
], Chips);
export { Chips };
let ChipsModule = class ChipsModule {
};
ChipsModule = __decorate([
    NgModule({
        imports: [CommonModule, InputTextModule, SharedModule],
        exports: [Chips, InputTextModule, SharedModule],
        declarations: [Chips]
    })
], ChipsModule);
export { ChipsModule };
//# sourceMappingURL=chips.js.map