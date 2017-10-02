var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomHandler } from '../dom/domhandler';
export const INPUTSWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSwitch),
    multi: true
};
let InputSwitch = class InputSwitch {
    constructor(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onLabel = 'On';
        this.offLabel = 'Off';
        this.ariaLabelTemplate = "InputSwitch {0}";
        this.onChange = new EventEmitter();
        this.checked = false;
        this.focused = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.initialized = false;
    }
    ngAfterViewInit() {
        this.container = this.el.nativeElement.children[0];
        this.handle = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-inputswitch-handle');
        this.onContainer = this.domHandler.findSingle(this.container, 'div.ui-inputswitch-on');
        this.offContainer = this.domHandler.findSingle(this.container, 'div.ui-inputswitch-off');
        this.onLabelChild = this.domHandler.findSingle(this.onContainer, 'span.ui-inputswitch-onlabel');
        this.offLabelChild = this.domHandler.findSingle(this.offContainer, 'span.ui-inputswitch-offlabel');
    }
    ngAfterViewChecked() {
        if (this.container.offsetParent && !this.initialized) {
            this.render();
        }
    }
    render() {
        let onContainerWidth = this.domHandler.width(this.onContainer), offContainerWidth = this.domHandler.width(this.offContainer), spanPadding = this.domHandler.innerWidth(this.offLabelChild) - this.domHandler.width(this.offLabelChild), handleMargins = this.domHandler.getOuterWidth(this.handle) - this.domHandler.innerWidth(this.handle);
        var containerWidth = (onContainerWidth > offContainerWidth) ? onContainerWidth : offContainerWidth, handleWidth = containerWidth;
        this.handle.style.width = handleWidth + 'px';
        handleWidth = this.domHandler.width(this.handle);
        containerWidth = containerWidth + handleWidth + 6;
        var labelWidth = containerWidth - handleWidth - spanPadding - handleMargins;
        this.container.style.width = containerWidth + 'px';
        this.onLabelChild.style.width = labelWidth + 'px';
        this.offLabelChild.style.width = labelWidth + 'px';
        //position
        this.offContainer.style.width = (this.domHandler.width(this.container) - 5) + 'px';
        this.offset = this.domHandler.width(this.container) - this.domHandler.getOuterWidth(this.handle);
        //default value
        if (this.checked) {
            this.handle.style.left = this.offset + 'px';
            this.onContainer.style.width = this.offset + 'px';
            this.offLabelChild.style.marginRight = -this.offset + 'px';
        }
        else {
            this.onContainer.style.width = 0 + 'px';
            this.onLabelChild.style.marginLeft = -this.offset + 'px';
        }
        this.initialized = true;
    }
    toggle(event, checkbox) {
        if (!this.disabled) {
            if (this.checked) {
                this.checked = false;
                this.uncheckUI();
            }
            else {
                this.checked = true;
                this.checkUI();
            }
            this.onModelChange(this.checked);
            this.onChange.emit({
                originalEvent: event,
                checked: this.checked
            });
            checkbox.focus();
        }
    }
    checkUI() {
        this.onContainer.style.width = this.offset + 'px';
        this.onLabelChild.style.marginLeft = 0 + 'px';
        this.offLabelChild.style.marginRight = -this.offset + 'px';
        this.handle.style.left = this.offset + 'px';
        this.updateAriaLabel();
    }
    uncheckUI() {
        this.onContainer.style.width = 0 + 'px';
        this.onLabelChild.style.marginLeft = -this.offset + 'px';
        this.offLabelChild.style.marginRight = 0 + 'px';
        this.handle.style.left = 0 + 'px';
        this.updateAriaLabel();
    }
    onFocus(event) {
        this.focused = true;
    }
    onBlur(event) {
        this.focused = false;
        this.onModelTouched();
    }
    writeValue(checked) {
        this.checked = checked;
        if (this.initialized) {
            if (this.checked === true)
                this.checkUI();
            else
                this.uncheckUI();
        }
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
    updateAriaLabel() {
        let pattern = /{(.*?)}/, value = this.checked ? this.onLabel : this.offLabel;
        this.ariaLabel = this.ariaLabelTemplate.replace(this.ariaLabelTemplate.match(pattern)[0], value);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], InputSwitch.prototype, "onLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InputSwitch.prototype, "offLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], InputSwitch.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputSwitch.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InputSwitch.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], InputSwitch.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InputSwitch.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InputSwitch.prototype, "ariaLabelTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], InputSwitch.prototype, "onChange", void 0);
InputSwitch = __decorate([
    Component({
        selector: 'p-inputSwitch',
        template: `
        <div [ngClass]="{'ui-inputswitch ui-widget ui-widget-content ui-corner-all': true,
            'ui-state-disabled': disabled,'ui-inputswitch-checked':checked, 'ui-state-focus':focused}" (click)="toggle($event, in)"
            [ngStyle]="style" [class]="styleClass">
            <div class="ui-inputswitch-off">
                <span class="ui-inputswitch-offlabel">{{offLabel}}</span>
            </div>
            <div class="ui-inputswitch-on">
                <span class="ui-inputswitch-onlabel">{{onLabel}}</span>
            </div>
            <div [ngClass]="{'ui-inputswitch-handle ui-state-default':true, 'ui-state-focus':focused}"></div>
            <div class="ui-helper-hidden-accessible">
                <input #in type="checkbox" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" aria-live="polite" [attr.id]="inputId" (focus)="onFocus($event)" (blur)="onBlur($event)" readonly="readonly" [attr.tabindex]="tabindex"/>
            </div>
        </div>
    `,
        providers: [INPUTSWITCH_VALUE_ACCESSOR, DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler])
], InputSwitch);
export { InputSwitch };
let InputSwitchModule = class InputSwitchModule {
};
InputSwitchModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [InputSwitch],
        declarations: [InputSwitch]
    })
], InputSwitchModule);
export { InputSwitchModule };
//# sourceMappingURL=inputswitch.js.map