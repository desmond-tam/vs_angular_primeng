var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, forwardRef, Renderer2, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Slider),
    multi: true
};
let Slider = class Slider {
    constructor(el, domHandler, renderer, ngZone) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.min = 0;
        this.max = 100;
        this.orientation = 'horizontal';
        this.onChange = new EventEmitter();
        this.onSlideEnd = new EventEmitter();
        this.handleValues = [];
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    onMouseDown(event, index) {
        if (this.disabled) {
            return;
        }
        this.dragging = true;
        this.updateDomData();
        this.sliderHandleClick = true;
        this.handleIndex = index;
        this.bindDragListeners();
        event.preventDefault();
    }
    onTouchStart(event, index) {
        var touchobj = event.changedTouches[0];
        this.startHandleValue = (this.range) ? this.handleValues[index] : this.handleValue;
        this.dragging = true;
        this.handleIndex = index;
        if (this.orientation === 'horizontal') {
            this.startx = parseInt(touchobj.clientX, 10);
            this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        }
        else {
            this.starty = parseInt(touchobj.clientY, 10);
            this.barHeight = this.el.nativeElement.children[0].offsetHeight;
        }
        event.preventDefault();
    }
    onTouchMove(event, index) {
        var touchobj = event.changedTouches[0], handleValue = 0;
        if (this.orientation === 'horizontal') {
            handleValue = Math.floor(((parseInt(touchobj.clientX, 10) - this.startx) * 100) / (this.barWidth)) + this.startHandleValue;
        }
        else {
            handleValue = Math.floor(((this.starty - parseInt(touchobj.clientY, 10)) * 100) / (this.barHeight)) + this.startHandleValue;
        }
        this.setValueFromHandle(event, handleValue);
        event.preventDefault();
    }
    onBarClick(event) {
        if (this.disabled) {
            return;
        }
        if (!this.sliderHandleClick) {
            this.updateDomData();
            this.handleChange(event);
        }
        this.sliderHandleClick = false;
    }
    handleChange(event) {
        let handleValue = this.calculateHandleValue(event);
        this.setValueFromHandle(event, handleValue);
    }
    bindDragListeners() {
        this.ngZone.runOutsideAngular(() => {
            if (!this.dragListener) {
                this.dragListener = this.renderer.listen('document', 'mousemove', (event) => {
                    if (this.dragging) {
                        this.ngZone.run(() => {
                            this.handleChange(event);
                        });
                    }
                });
            }
            if (!this.mouseupListener) {
                this.mouseupListener = this.renderer.listen('document', 'mouseup', (event) => {
                    if (this.dragging) {
                        this.dragging = false;
                        if (this.range) {
                            this.onSlideEnd.emit({ originalEvent: event, values: this.values });
                        }
                        else {
                            this.onSlideEnd.emit({ originalEvent: event, value: this.value });
                        }
                    }
                });
            }
        });
    }
    unbindDragListeners() {
        if (this.dragListener) {
            this.dragListener();
        }
        if (this.mouseupListener) {
            this.mouseupListener();
        }
    }
    setValueFromHandle(event, handleValue) {
        let newValue = this.getValueFromHandle(handleValue);
        if (this.range) {
            if (this.step) {
                this.handleStepChange(newValue, this.values[this.handleIndex]);
            }
            else {
                this.handleValues[this.handleIndex] = handleValue;
                this.updateValue(newValue, event);
            }
        }
        else {
            if (this.step) {
                this.handleStepChange(newValue, this.value);
            }
            else {
                this.handleValue = handleValue;
                this.updateValue(newValue, event);
            }
        }
    }
    handleStepChange(newValue, oldValue) {
        let diff = (newValue - oldValue);
        if (diff < 0 && (-1 * diff) >= this.step / 2) {
            newValue = oldValue - this.step;
            this.updateValue(newValue);
            this.updateHandleValue();
        }
        else if (diff > 0 && diff >= this.step / 2) {
            newValue = oldValue + this.step;
            this.updateValue(newValue);
            this.updateHandleValue();
        }
    }
    writeValue(value) {
        if (this.range)
            this.values = value || [0, 0];
        else
            this.value = value || 0;
        this.updateHandleValue();
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
    get rangeStartLeft() {
        return this.isVertical() ? 'auto' : this.handleValues[0] + '%';
    }
    get rangeStartBottom() {
        return this.isVertical() ? this.handleValues[0] + '%' : 'auto';
    }
    get rangeEndLeft() {
        return this.isVertical() ? 'auto' : this.handleValues[1] + '%';
    }
    get rangeEndBottom() {
        return this.isVertical() ? this.handleValues[1] + '%' : 'auto';
    }
    isVertical() {
        return this.orientation === 'vertical';
    }
    updateDomData() {
        let rect = this.el.nativeElement.children[0].getBoundingClientRect();
        this.initX = rect.left + this.domHandler.getWindowScrollLeft();
        this.initY = rect.top + this.domHandler.getWindowScrollTop();
        this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        this.barHeight = this.el.nativeElement.children[0].offsetHeight;
    }
    calculateHandleValue(event) {
        if (this.orientation === 'horizontal')
            return Math.floor(((event.pageX - this.initX) * 100) / (this.barWidth));
        else
            return Math.floor((((this.initY + this.barHeight) - event.pageY) * 100) / (this.barHeight));
    }
    updateHandleValue() {
        if (this.range) {
            this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
            this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
        }
        else {
            if (this.value < this.min)
                this.handleValue = 0;
            else if (this.value > this.max)
                this.handleValue = 100;
            else
                this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
        }
    }
    updateValue(val, event) {
        if (this.range) {
            let value = val;
            if (this.handleIndex == 0) {
                if (value < this.min) {
                    value = this.min;
                    this.handleValues[0] = 0;
                }
                else if (value > this.values[1]) {
                    value = this.values[1];
                    this.handleValues[0] = this.handleValues[1];
                }
            }
            else {
                if (value > this.max) {
                    value = this.max;
                    this.handleValues[1] = 100;
                }
                else if (value < this.values[0]) {
                    value = this.values[0];
                    this.handleValues[1] = this.handleValues[0];
                }
            }
            this.values[this.handleIndex] = Math.floor(value);
            this.onModelChange(this.values);
            this.onChange.emit({ event: event, values: this.values });
        }
        else {
            if (val < this.min) {
                val = this.min;
                this.handleValue = 0;
            }
            else if (val > this.max) {
                val = this.max;
                this.handleValue = 100;
            }
            this.value = Math.floor(val);
            this.onModelChange(this.value);
            this.onChange.emit({ event: event, value: this.value });
        }
    }
    getValueFromHandle(handleValue) {
        return (this.max - this.min) * (handleValue / 100) + this.min;
    }
    ngOnDestroy() {
        this.unbindDragListeners();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Slider.prototype, "animate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Slider.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Slider.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Slider.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Slider.prototype, "orientation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Slider.prototype, "step", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Slider.prototype, "range", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Slider.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Slider.prototype, "styleClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Slider.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Slider.prototype, "onSlideEnd", void 0);
Slider = __decorate([
    Component({
        selector: 'p-slider',
        template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="{'ui-slider ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled,
            'ui-slider-horizontal':orientation == 'horizontal','ui-slider-vertical':orientation == 'vertical','ui-slider-animate':animate}"
            (click)="onBarClick($event)">
            <span *ngIf="range && orientation == 'horizontal'" class="ui-slider-range ui-widget-header ui-corner-all" [ngStyle]="{'left':handleValues[0] + '%',width: (handleValues[1] - handleValues[0] + '%')}"></span>
            <span *ngIf="range && orientation == 'vertical'" class="ui-slider-range ui-widget-header ui-corner-all" [ngStyle]="{'bottom':handleValues[0] + '%',height: (handleValues[1] - handleValues[0] + '%')}"></span>
            <span *ngIf="!range && orientation=='vertical'" class="ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all" [ngStyle]="{'height': handleValue + '%'}"></span>
            <span *ngIf="!range" class="ui-slider-handle ui-state-default ui-corner-all ui-clickable" (mousedown)="onMouseDown($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="dragging=false"
                [style.transition]="dragging ? 'none': null" [ngStyle]="{'left': orientation == 'horizontal' ? handleValue + '%' : null,'bottom': orientation == 'vertical' ? handleValue + '%' : null}"></span>
            <span *ngIf="range" (mousedown)="onMouseDown($event,0)" (touchstart)="onTouchStart($event,0)" (touchmove)="onTouchMove($event,0)" (touchend)="dragging=false" [style.transition]="dragging ? 'none': null" class="ui-slider-handle ui-state-default ui-corner-all ui-clickable" 
                [ngStyle]="{'left': rangeStartLeft, 'bottom': rangeStartBottom}" [ngClass]="{'ui-slider-handle-active':handleIndex==0}"></span>
            <span *ngIf="range" (mousedown)="onMouseDown($event,1)" (touchstart)="onTouchStart($event,1)" (touchmove)="onTouchMove($event,1)" (touchend)="dragging=false" [style.transition]="dragging ? 'none': null" class="ui-slider-handle ui-state-default ui-corner-all ui-clickable" 
                [ngStyle]="{'left': rangeEndLeft, 'bottom': rangeEndBottom}" [ngClass]="{'ui-slider-handle-active':handleIndex==1}"></span>
        </div>
    `,
        providers: [SLIDER_VALUE_ACCESSOR, DomHandler]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, Renderer2, NgZone])
], Slider);
export { Slider };
let SliderModule = class SliderModule {
};
SliderModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Slider],
        declarations: [Slider]
    })
], SliderModule);
export { SliderModule };
//# sourceMappingURL=slider.js.map