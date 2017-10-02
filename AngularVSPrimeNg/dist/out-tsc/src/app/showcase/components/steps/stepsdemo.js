var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewEncapsulation } from '@angular/core';
let StepsDemo = class StepsDemo {
    constructor() {
        this.msgs = [];
        this.activeIndex = 1;
    }
    ngOnInit() {
        this.items = [{
                label: 'Personal',
                command: (event) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: (event) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: (event) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: (event) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    }
};
StepsDemo = __decorate([
    Component({
        templateUrl: './stepsdemo.html',
        styles: [`
        .ui-steps .ui-steps-item {
            width: 25%;
        }
        
        .ui-steps.steps-custom {
            margin-bottom: 30px;
        }
         
        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
            height: 10px;
            padding: 0 1em;
            overflow: visible;
        }
         
        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        }
    `],
        encapsulation: ViewEncapsulation.None
    })
], StepsDemo);
export { StepsDemo };
//# sourceMappingURL=stepsdemo.js.map