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
export const RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Rating),
    multi: true
};
let Rating = class Rating {
    constructor() {
        this.stars = 5;
        this.cancel = true;
        this.onRate = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngOnInit() {
        this.starsArray = [];
        for (let i = 0; i < this.stars; i++) {
            this.starsArray[i] = i;
        }
    }
    rate(event, i) {
        if (!this.readonly && !this.disabled) {
            this.value = (i + 1);
            this.onModelChange(this.value);
            this.onModelTouched();
            this.onRate.emit({
                originalEvent: event,
                value: (i + 1)
            });
        }
        event.preventDefault();
    }
    clear(event) {
        if (!this.readonly && !this.disabled) {
            this.value = null;
            this.onModelChange(this.value);
            this.onModelTouched();
            this.onCancel.emit(event);
        }
        event.preventDefault();
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
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Rating.prototype, "stars", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "cancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Rating.prototype, "onRate", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Rating.prototype, "onCancel", void 0);
Rating = __decorate([
    Component({
        selector: 'p-rating',
        template: `
        <div class="ui-rating" [ngClass]="{'ui-state-disabled': disabled}">
            <a href="#" *ngIf="cancel" (click)="clear($event)">
                <span class="fa fa-ban"></span>
            </a>
            <a href="#" *ngFor="let star of starsArray;let i=index" (click)="rate($event,i)">
                <span class="fa" [ngClass]="{'fa-star-o': (!value || i >= value), 'fa-star':(i < value)}"></span>
            </a>
        </div>
    `,
        providers: [RATING_VALUE_ACCESSOR]
    })
], Rating);
export { Rating };
let RatingModule = class RatingModule {
};
RatingModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Rating],
        declarations: [Rating]
    })
], RatingModule);
export { RatingModule };
//# sourceMappingURL=rating.js.map