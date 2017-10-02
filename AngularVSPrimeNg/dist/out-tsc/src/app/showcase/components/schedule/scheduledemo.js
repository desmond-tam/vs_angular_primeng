var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EventService } from '../../service/eventservice';
let ScheduleDemo = class ScheduleDemo {
    constructor(eventService) {
        this.eventService = eventService;
        this.dialogVisible = false;
        this.idGen = 100;
    }
    ngOnInit() {
        this.eventService.getEvents().then(events => { this.events = events; });
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }
    handleDayClick(event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
    }
    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }
        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }
        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }
    saveEvent() {
        //update
        if (this.event.id) {
            let index = this.findEventIndexById(this.event.id);
            if (index >= 0) {
                this.events[index] = this.event;
            }
        }
        else {
            this.event.id = this.idGen++;
            this.events.push(this.event);
            this.event = null;
        }
        this.dialogVisible = false;
    }
    deleteEvent() {
        let index = this.findEventIndexById(this.event.id);
        if (index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    findEventIndexById(id) {
        let index = -1;
        for (let i = 0; i < this.events.length; i++) {
            if (id == this.events[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
};
ScheduleDemo = __decorate([
    Component({
        templateUrl: './scheduledemo.html',
        styles: [`
        .ui-grid-row div {
          padding: 4px 10px
        }
        
        .ui-grid-row div label {
          font-weight: bold;
        }
  `]
    }),
    __metadata("design:paramtypes", [EventService])
], ScheduleDemo);
export { ScheduleDemo };
export class MyEvent {
    constructor() {
        this.allDay = true;
    }
}
//# sourceMappingURL=scheduledemo.js.map