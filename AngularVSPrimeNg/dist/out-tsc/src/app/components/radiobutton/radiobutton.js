var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, ElementRef, EventEmitter, forwardRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButton),
    multi: true
};
let RadioButton = class RadioButton {
    constructor(cd) {
        this.cd = cd;
        this.onClick = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    handleClick() {
        if (!this.disabled) {
            this.select();
        }
    }
    select() {
        if (!this.disabled) {
            this.onClick.emit(null);
            this.inputViewChild.nativeElement.checked = true;
            this.checked = true;
            this.onModelChange(this.value);
        }
    }
    writeValue(value) {
        this.checked = (value == this.value);
        if (this.inputViewChild.nativeElement) {
            this.inputViewChild.nativeElement.checked = this.checked;
        }
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
    onFocus(event) {
        this.focused = true;
    }
    onBlur(event) {
        this.focused = false;
        this.onModelTouched();
    }
    onChange(event) {
        this.select();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], RadioButton.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioButton.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], RadioButton.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioButton.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], RadioButton.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioButton.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RadioButton.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioButton.prototype, "styleClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RadioButton.prototype, "onClick", void 0);
__decorate([
    ViewChild('rb'),
    __metadata("design:type", ElementRef)
], RadioButton.prototype, "inputViewChild", void 0);
RadioButton = __decorate([
    Component({
        selector: 'p-radioButton',
        template: `
        <div [ngStyle]="style" [ngClass]="'ui-radiobutton ui-widget'" [class]="styleClass">
            <div class="ui-helper-hidden-accessible">
                <input #rb type="radio" [attr.id]="inputId" [attr.name]="name" [attr.value]="value" [attr.tabindex]="tabindex" 
                    [checked]="checked" (change)="onChange($event)" (focus)="onFocus($event)" (blur)="onBlur($event)">
            </div>
            <div (click)="handleClick()"
                [ngClass]="{'ui-radiobutton-box ui-widget ui-state-default':true,
                'ui-state-active':rb.checked,'ui-state-disabled':disabled,'ui-state-focus':focused}">
                <span class="ui-radiobutton-icon ui-clickable" [ngClass]="{'fa fa-circle':rb.checked}"></span>
            </div>
        </div>
        <label class="ui-radiobutton-label" (click)="select()" 
            [ngClass]="{'ui-label-active':rb.checked,'ui-label-disabled':disabled,'ui-label-focus':focused}"
            *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
        providers: [RADIO_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], RadioButton);
export { RadioButton };
let RadioButtonModule = class RadioButtonModule {
};
RadioButtonModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [RadioButton],
        declarations: [RadioButton]
    })
], RadioButtonModule);
export { RadioButtonModule };
//# sourceMappingURL=radiobutton.js.map