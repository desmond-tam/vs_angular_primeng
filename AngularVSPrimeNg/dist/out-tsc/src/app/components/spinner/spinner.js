var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from '../inputtext/inputtext';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const SPINNER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Spinner),
    multi: true
};
let Spinner = class Spinner {
    constructor(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.step = 1;
        this.decimalSeparator = '.';
        this.thousandSeparator = ',';
        this.formatInput = true;
        this.type = 'text';
        this.valueAsString = '';
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.keyPattern = /[0-9\+\-]/;
    }
    ngOnInit() {
        if (Math.floor(this.step) === 0) {
            this.precision = this.step.toString().split(/[,]|[.]/)[1].length;
        }
    }
    repeat(event, interval, dir) {
        let i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(() => {
            this.repeat(event, 40, dir);
        }, i);
        this.spin(event, dir);
    }
    spin(event, dir) {
        let step = this.step * dir;
        let currentValue = this.value || 0;
        let newValue = null;
        if (this.precision)
            this.value = parseFloat(this.toFixed(currentValue + step, this.precision));
        else
            this.value = currentValue + step;
        if (this.maxlength !== undefined && this.value.toString().length > this.maxlength) {
            this.value = currentValue;
        }
        if (this.min !== undefined && this.value < this.min) {
            this.value = this.min;
        }
        if (this.max !== undefined && this.value > this.max) {
            this.value = this.max;
        }
        this.formatValue();
        this.onModelChange(this.value);
        this.onChange.emit(event);
    }
    toFixed(value, precision) {
        let power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
    }
    onUpButtonMousedown(event, input) {
        if (!this.disabled) {
            input.focus();
            this.repeat(event, null, 1);
            this.updateFilledState();
        }
    }
    onUpButtonMouseup(event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    }
    onUpButtonMouseleave(event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    }
    onDownButtonMousedown(event, input) {
        if (!this.disabled) {
            input.focus();
            this.repeat(event, null, -1);
            this.updateFilledState();
        }
    }
    onDownButtonMouseup(event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    }
    onDownButtonMouseleave(event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    }
    onInputKeydown(event) {
        if (event.which == 38) {
            this.spin(event, 1);
            event.preventDefault();
        }
        else if (event.which == 40) {
            this.spin(event, -1);
            event.preventDefault();
        }
    }
    onInputKeyPress(event) {
        let inputChar = String.fromCharCode(event.charCode);
        if (!this.keyPattern.test(inputChar) && inputChar != this.decimalSeparator && event.keyCode != 9 && event.keyCode != 8 && event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46) {
            event.preventDefault();
        }
    }
    onInput(event, inputValue) {
        this.value = this.parseValue(inputValue);
        this.formatValue();
        this.onModelChange(this.value);
        this.updateFilledState();
    }
    onInputBlur(event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onInputFocus(event) {
        this.focus = true;
        this.onFocus.emit(event);
    }
    parseValue(val) {
        let value;
        if (this.formatInput) {
            val = val.split(this.thousandSeparator).join('');
        }
        if (val.trim() === '') {
            value = null;
        }
        else {
            if (this.precision) {
                value = parseFloat(val.replace(',', '.'));
            }
            else {
                value = parseInt(val);
            }
            if (!isNaN(value)) {
                if (this.max !== undefined && value > this.max) {
                    value = this.max;
                }
                if (this.min !== undefined && value < this.min) {
                    value = this.min;
                }
            }
            else {
                value = null;
            }
        }
        return value;
    }
    formatValue() {
        if (this.value !== null && this.value !== undefined) {
            let textValue = String(this.value).replace('.', this.decimalSeparator);
            if (this.formatInput) {
                textValue = textValue.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandSeparator);
            }
            this.valueAsString = textValue;
        }
        else {
            this.valueAsString = '';
        }
    }
    handleChange(event) {
        this.onChange.emit(event);
    }
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    writeValue(value) {
        this.value = value;
        this.formatValue();
        this.updateFilledState();
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
    updateFilledState() {
        this.filled = (this.value !== undefined && this.value != null);
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Spinner.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Spinner.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Spinner.prototype, "onBlur", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Spinner.prototype, "step", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Spinner.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Spinner.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Spinner.prototype, "maxlength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Spinner.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Spinner.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Spinner.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Spinner.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Spinner.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Spinner.prototype, "decimalSeparator", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Spinner.prototype, "thousandSeparator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Spinner.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Spinner.prototype, "formatInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Spinner.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Spinner.prototype, "required", void 0);
Spinner = __decorate([
    Component({
        selector: 'p-spinner',
        template: `
        <span class="ui-spinner ui-widget ui-corner-all">
            <input #in [attr.type]="type" [attr.id]="inputId" class="ui-spinner-input" [value]="valueAsString" class="ui-inputtext ui-widget ui-state-default ui-corner-all"
            [attr.size]="size" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [attr.placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly" [attr.required]="required"
            (keydown)="onInputKeydown($event)" (keyup)="onInput($event,in.value)" (keypress)="onInputKeyPress($event)" (blur)="onInputBlur($event)" (change)="handleChange($event)" (focus)="onInputFocus($event)">
            <button type="button" [ngClass]="{'ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}" [disabled]="disabled"
                (mouseleave)="onUpButtonMouseleave($event)" (mousedown)="onUpButtonMousedown($event,in)" (mouseup)="onUpButtonMouseup($event)">
                <span class="fa fa-caret-up ui-clickable"></span>
            </button>
            <button type="button" [ngClass]="{'ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}" [disabled]="disabled"
                (mouseleave)="onDownButtonMouseleave($event)" (mousedown)="onDownButtonMousedown($event,in)" (mouseup)="onDownButtonMouseup($event)">
                <span class="fa fa-caret-down ui-clickable"></span>
            </button>
        </span>
    `,
        host: {
            '[class.ui-inputwrapper-filled]': 'filled',
            '[class.ui-inputwrapper-focus]': 'focus'
        },
        providers: [DomHandler, SPINNER_VALUE_ACCESSOR],
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler])
], Spinner);
export { Spinner };
let SpinnerModule = class SpinnerModule {
};
SpinnerModule = __decorate([
    NgModule({
        imports: [CommonModule, InputTextModule],
        exports: [Spinner],
        declarations: [Spinner]
    })
], SpinnerModule);
export { SpinnerModule };
//# sourceMappingURL=spinner.js.map