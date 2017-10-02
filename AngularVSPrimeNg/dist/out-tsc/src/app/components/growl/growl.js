var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Component, ElementRef, Input, Output, ViewChild, EventEmitter, IterableDiffers, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { MessageService } from '../common/messageservice';
let Growl = class Growl {
    constructor(el, domHandler, differs, messageService) {
        this.el = el;
        this.domHandler = domHandler;
        this.differs = differs;
        this.messageService = messageService;
        this.life = 3000;
        this.immutable = true;
        this.onClick = new EventEmitter();
        this.onHover = new EventEmitter();
        this.onClose = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.zIndex = DomHandler.zindex;
        this.differ = differs.find([]).create(null);
        if (messageService) {
            this.subscription = messageService.messageObserver.subscribe(messages => {
                if (messages) {
                    if (messages instanceof Array)
                        this.value = messages;
                    else
                        this.value = [messages];
                }
                else {
                    this.value = null;
                }
            });
        }
    }
    ngAfterViewInit() {
        this.container = this.containerViewChild.nativeElement;
        if (!this.sticky) {
            this.initTimeout();
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        if (this.container && this.immutable) {
            this.handleValueChange();
        }
    }
    ngDoCheck() {
        if (!this.immutable && this.container) {
            let changes = this.differ.diff(this.value);
            if (changes) {
                this.handleValueChange();
            }
        }
    }
    handleValueChange() {
        if (this.preventRerender) {
            this.preventRerender = false;
            return;
        }
        this.zIndex = ++DomHandler.zindex;
        this.domHandler.fadeIn(this.container, 250);
        if (!this.sticky) {
            this.initTimeout();
        }
    }
    initTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.removeAll();
        }, this.life);
    }
    remove(index, msgel) {
        this.closeIconClick = true;
        this.domHandler.fadeOut(msgel, 250);
        setTimeout(() => {
            this.preventRerender = true;
            this.onClose.emit({ message: this.value[index] });
            if (this.immutable) {
                this._value = this.value.filter((val, i) => i != index);
                this.valueChange.emit(this._value);
            }
            else {
                this._value.splice(index, 1);
            }
        }, 250);
    }
    removeAll() {
        if (this.value && this.value.length) {
            this.domHandler.fadeOut(this.container, 250);
            setTimeout(() => {
                this.value.forEach((msg, index) => this.onClose.emit({ message: this.value[index] }));
                if (this.immutable) {
                    this.value = [];
                    this.valueChange.emit(this.value);
                }
                else {
                    this.value.splice(0, this.value.length);
                }
            }, 250);
        }
    }
    onMessageClick(i) {
        if (this.closeIconClick)
            this.closeIconClick = false;
        else
            this.onClick.emit({ message: this.value[i] });
    }
    onMessageHover(i) {
        this.onHover.emit({ message: this.value[i] });
    }
    ngOnDestroy() {
        if (!this.sticky) {
            clearTimeout(this.timeout);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Growl.prototype, "sticky", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Growl.prototype, "life", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Growl.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Growl.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Growl.prototype, "immutable", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Growl.prototype, "onClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Growl.prototype, "onHover", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Growl.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Growl.prototype, "valueChange", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], Growl.prototype, "containerViewChild", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Growl.prototype, "value", null);
Growl = __decorate([
    Component({
        selector: 'p-growl',
        template: `
        <div #container [ngClass]="'ui-growl ui-widget'" [style.zIndex]="zIndex" [ngStyle]="style" [class]="styleClass">
            <div #msgel *ngFor="let msg of value;let i = index" class="ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow" aria-live="polite"
                [ngClass]="{'ui-growl-message-info':msg.severity == 'info','ui-growl-message-warn':msg.severity == 'warn',
                    'ui-growl-message-error':msg.severity == 'error','ui-growl-message-success':msg.severity == 'success'}"
                    (click)="onMessageClick(i)" (mouseenter)="onMessageHover(i)">
                <div class="ui-growl-item">
                     <div class="ui-growl-icon-close fa fa-close" (click)="remove(i,msgel)"></div>
                     <span class="ui-growl-image fa fa-2x"
                        [ngClass]="{'fa-info-circle':msg.severity == 'info','fa-exclamation-circle':msg.severity == 'warn',
                                'fa-close':msg.severity == 'error','fa-check':msg.severity == 'success'}"></span>
                     <div class="ui-growl-message">
                        <span class="ui-growl-title">{{msg.summary}}</span>
                        <p [innerHTML]="msg.detail"></p>
                     </div>
                     <div style="clear: both;"></div>
                </div>
            </div>
        </div>
    `,
        providers: [DomHandler]
    }),
    __param(3, Optional()),
    __metadata("design:paramtypes", [ElementRef, DomHandler, IterableDiffers, MessageService])
], Growl);
export { Growl };
let GrowlModule = class GrowlModule {
};
GrowlModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Growl],
        declarations: [Growl]
    })
], GrowlModule);
export { GrowlModule };
//# sourceMappingURL=growl.js.map