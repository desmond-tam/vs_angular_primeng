var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
};
let Checkbox = class Checkbox {
    constructor(cd) {
        this.cd = cd;
        this.onChange = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.focused = false;
        this.checked = false;
    }
    onClick(event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel();
        if (focus) {
            checkbox.focus();
        }
    }
    updateModel() {
        if (!this.binary) {
            if (this.checked)
                this.addValue();
            else
                this.removeValue();
            this.onModelChange(this.model);
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit(this.checked);
    }
    handleChange(event) {
        this.checked = event.target.checked;
        this.updateModel();
    }
    isChecked() {
        if (this.binary)
            return this.model;
        else
            return this.model && this.model.indexOf(this.value) > -1;
    }
    removeValue() {
        this.model = this.model.filter(val => val !== this.value);
    }
    addValue() {
        if (this.model)
            this.model = [...this.model, this.value];
        else
            this.model = [this.value];
    }
    onFocus(event) {
        this.focused = true;
    }
    onBlur(event) {
        this.focused = false;
        this.onModelTouched();
    }
    writeValue(model) {
        this.model = model;
        this.checked = this.isChecked();
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], Checkbox.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Checkbox.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Checkbox.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Checkbox.prototype, "binary", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Checkbox.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Checkbox.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Checkbox.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Checkbox.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Checkbox.prototype, "styleClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Checkbox.prototype, "onChange", void 0);
Checkbox = __decorate([
    Component({
        selector: 'p-checkbox',
        template: `
        <div [ngStyle]="style" [ngClass]="'ui-chkbox ui-widget'" [class]="styleClass">
            <div class="ui-helper-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [name]="name" [value]="value" [checked]="checked" (focus)="onFocus($event)" (blur)="onBlur($event)"
                [ngClass]="{'ui-state-focus':focused}" (change)="handleChange($event)" [disabled]="disabled" [attr.tabindex]="tabindex">
            </div>
            <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" (click)="onClick($event,cb,true)"
                        [ngClass]="{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}">
                <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'fa fa-check':checked}"></span>
            </div>
        </div>
        <label class="ui-chkbox-label" (click)="onClick($event,cb,true)" 
                [ngClass]="{'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}"
                *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
        providers: [CHECKBOX_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], Checkbox);
export { Checkbox };
let CheckboxModule = class CheckboxModule {
};
CheckboxModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Checkbox],
        declarations: [Checkbox]
    })
], CheckboxModule);
export { CheckboxModule };
//# sourceMappingURL=checkbox.js.map