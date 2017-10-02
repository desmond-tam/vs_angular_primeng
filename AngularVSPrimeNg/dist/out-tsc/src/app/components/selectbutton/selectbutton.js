var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectButton),
    multi: true
};
let SelectButton = class SelectButton {
    constructor() {
        this.onOptionClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
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
    onItemClick(event, option, checkbox, index) {
        if (this.disabled) {
            return;
        }
        checkbox.focus();
        if (this.multiple) {
            let itemIndex = this.findItemIndex(option);
            if (itemIndex != -1)
                this.value = this.value.filter((val, i) => i != itemIndex);
            else
                this.value = [...this.value || [], option.value];
        }
        else {
            this.value = option.value;
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    onFocus(event) {
        this.focusedItem = event.target;
    }
    onBlur(event) {
        this.focusedItem = null;
        this.onModelTouched();
    }
    isSelected(option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return option.value == this.value;
    }
    findItemIndex(option) {
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], SelectButton.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectButton.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectButton.prototype, "multiple", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectButton.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectButton.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectButton.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SelectButton.prototype, "onOptionClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SelectButton.prototype, "onChange", void 0);
SelectButton = __decorate([
    Component({
        selector: 'p-selectButton',
        template: `
        <div [ngClass]="'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + options.length" [ngStyle]="style" [class]="styleClass">
            <div *ngFor="let option of options; let i = index" class="ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}"
                [ngClass]="{'ui-state-active':isSelected(option), 'ui-state-disabled':disabled, 'ui-state-focus': cbox == focusedItem}" (click)="onItemClick($event,option,cbox,i)">
                <span class="ui-button-text ui-clickable">{{option.label}}</span>
                <div class="ui-helper-hidden-accessible">
                    <input #cbox type="checkbox" [checked]="isSelected(option)" (focus)="onFocus($event)" (blur)="onBlur($event)" [attr.tabindex]="tabindex" [attr.disabled]="disabled">
                </div>
            </div>
        </div>
    `,
        providers: [SELECTBUTTON_VALUE_ACCESSOR]
    })
], SelectButton);
export { SelectButton };
let SelectButtonModule = class SelectButtonModule {
};
SelectButtonModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [SelectButton],
        declarations: [SelectButton]
    })
], SelectButtonModule);
export { SelectButtonModule };
//# sourceMappingURL=selectbutton.js.map