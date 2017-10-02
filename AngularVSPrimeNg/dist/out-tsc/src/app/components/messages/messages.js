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
import { NgModule, Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../common/messageservice';
let Messages = class Messages {
    constructor(messageService) {
        this.messageService = messageService;
        this.closable = true;
        this.valueChange = new EventEmitter();
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
    hasMessages() {
        return this.value && this.value.length > 0;
    }
    getSeverityClass() {
        return this.value[0].severity;
    }
    clear(event) {
        this.value = [];
        this.valueChange.emit(this.value);
        event.preventDefault();
    }
    get icon() {
        let icon = null;
        if (this.hasMessages()) {
            let msg = this.value[0];
            switch (msg.severity) {
                case 'success':
                    icon = 'fa-check';
                    break;
                case 'info':
                    icon = 'fa-info-circle';
                    break;
                case 'error':
                    icon = 'fa-close';
                    break;
                case 'warn':
                    icon = 'fa-warning';
                    break;
                case 'success':
                    icon = 'fa-check';
                    break;
                default:
                    icon = 'fa-info-circle';
                    break;
            }
        }
        return icon;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], Messages.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Messages.prototype, "closable", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Messages.prototype, "valueChange", void 0);
Messages = __decorate([
    Component({
        selector: 'p-messages',
        template: `
        <div *ngIf="hasMessages()" class="ui-messages ui-widget ui-corner-all" style="display:block"
                    [ngClass]="{'ui-messages-info':(value[0].severity === 'info'),
                    'ui-messages-warn':(value[0].severity === 'warn'),
                    'ui-messages-error':(value[0].severity === 'error'),
                    'ui-messages-success':(value[0].severity === 'success')}">
            <a href="#" class="ui-messages-close" (click)="clear($event)" *ngIf="closable">
                <i class="fa fa-close"></i>
            </a>
            <span class="ui-messages-icon fa fa-fw fa-2x" [ngClass]="icon"></span>
            <ul>
                <li *ngFor="let msg of value">
                    <span class="ui-messages-summary" [innerHTML]="msg.summary"></span>
                    <span class="ui-messages-detail" [innerHTML]="msg.detail"></span>
                </li>
            </ul>
        </div>
    `
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [MessageService])
], Messages);
export { Messages };
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Messages],
        declarations: [Messages]
    })
], MessagesModule);
export { MessagesModule };
//# sourceMappingURL=messages.js.map