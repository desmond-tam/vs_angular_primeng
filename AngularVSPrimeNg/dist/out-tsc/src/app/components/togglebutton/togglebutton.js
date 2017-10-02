var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const TOGGLEBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleButton),
    multi: true
};
let ToggleButton = class ToggleButton {
    constructor() {
        this.onLabel = 'Yes';
        this.offLabel = 'No';
        this.onChange = new EventEmitter();
        this.checked = false;
        this.focus = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngAfterViewInit() {
        this.checkbox = this.checkboxViewChild.nativeElement;
    }
    getIconClass() {
        let baseClass = 'ui-button-icon-left fa fa-fw';
        return baseClass + ' ' + (this.checked ? this.onIcon : this.offIcon);
    }
    toggle(event) {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onModelChange(this.checked);
            this.onModelTouched();
            this.onChange.emit({
                originalEvent: event,
                checked: this.checked
            });
            this.checkbox.focus();
        }
    }
    onFocus() {
        this.focus = true;
    }
    onBlur() {
        this.focus = false;
        this.onModelTouched();
    }
    writeValue(value) {
        this.checked = value;
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
    get hasOnLabel() {
        return this.onLabel && this.onLabel.length > 0;
    }
    get hasOffLabel() {
        return this.onLabel && this.onLabel.length > 0;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ToggleButton.prototype, "onLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToggleButton.prototype, "offLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToggleButton.prototype, "onIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToggleButton.prototype, "offIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ToggleButton.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ToggleButton.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToggleButton.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToggleButton.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ToggleButton.prototype, "tabindex", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ToggleButton.prototype, "onChange", void 0);
__decorate([
    ViewChild('checkbox'),
    __metadata("design:type", ElementRef)
], ToggleButton.prototype, "checkboxViewChild", void 0);
ToggleButton = __decorate([
    Component({
        selector: 'p-toggleButton',
        template: `
        <div [ngClass]="{'ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all': true, 'ui-button-text-only': (!onIcon&&!offIcon), 
                'ui-button-text-icon-left': (onIcon&&offIcon&&hasOnLabel&&hasOffLabel), 'ui-button-icon-only': (onIcon&&offIcon&&!hasOnLabel&&!hasOffLabel),
                'ui-state-active': checked,'ui-state-focus':focus,'ui-state-disabled':disabled}" [ngStyle]="style" [class]="styleClass" 
                (click)="toggle($event)">
            <div class="ui-helper-hidden-accessible">
                <input #checkbox type="checkbox" [attr.id]="inputId" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [attr.tabindex]="tabindex">
            </div>
            <span *ngIf="onIcon||offIcon" [class]="getIconClass()"></span>
            <span class="ui-button-text ui-unselectable-text">{{checked ? hasOnLabel ? onLabel : 'ui-btn' : hasOffLabel ? offLabel : 'ui-btn'}}</span>
        </div>
    `,
        providers: [TOGGLEBUTTON_VALUE_ACCESSOR]
    })
], ToggleButton);
export { ToggleButton };
let ToggleButtonModule = class ToggleButtonModule {
};
ToggleButtonModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [ToggleButton],
        declarations: [ToggleButton]
    })
], ToggleButtonModule);
export { ToggleButtonModule };
//# sourceMappingURL=togglebutton.js.map