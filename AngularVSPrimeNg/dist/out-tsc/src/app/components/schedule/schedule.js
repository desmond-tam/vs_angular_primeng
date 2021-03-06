var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';
import { CommonModule } from '@angular/common';
let Schedule = class Schedule {
    constructor(el, differs) {
        this.el = el;
        this.aspectRatio = 1.35;
        this.defaultView = 'month';
        this.allDaySlot = true;
        this.allDayText = 'all-day';
        this.slotDuration = '00:30:00';
        this.scrollTime = '06:00:00';
        this.minTime = '00:00:00';
        this.maxTime = '24:00:00';
        this.slotEventOverlap = true;
        this.dragRevertDuration = 500;
        this.dragOpacity = .75;
        this.dragScroll = true;
        this.timezone = false;
        this.timeFormat = null;
        this.onDayClick = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onEventClick = new EventEmitter();
        this.onEventMouseover = new EventEmitter();
        this.onEventMouseout = new EventEmitter();
        this.onEventDragStart = new EventEmitter();
        this.onEventDragStop = new EventEmitter();
        this.onEventDrop = new EventEmitter();
        this.onEventResizeStart = new EventEmitter();
        this.onEventResizeStop = new EventEmitter();
        this.onEventResize = new EventEmitter();
        this.onViewRender = new EventEmitter();
        this.onViewDestroy = new EventEmitter();
        this.differ = differs.find([]).create(null);
        this.initialized = false;
    }
    ngOnInit() {
        this.config = {
            theme: true,
            header: this.header,
            isRTL: this.rtl,
            weekends: this.weekends,
            hiddenDays: this.hiddenDays,
            fixedWeekCount: this.fixedWeekCount,
            weekNumbers: this.weekNumbers,
            businessHours: this.businessHours,
            height: this.height,
            contentHeight: this.contentHeight,
            aspectRatio: this.aspectRatio,
            eventLimit: this.eventLimit,
            defaultDate: this.defaultDate,
            locale: this.locale,
            timezone: this.timezone,
            timeFormat: this.timeFormat,
            editable: this.editable,
            droppable: this.droppable,
            eventStartEditable: this.eventStartEditable,
            eventDurationEditable: this.eventDurationEditable,
            defaultView: this.defaultView,
            allDaySlot: this.allDaySlot,
            allDayText: this.allDayText,
            slotDuration: this.slotDuration,
            slotLabelInterval: this.slotLabelInterval,
            snapDuration: this.snapDuration,
            scrollTime: this.scrollTime,
            minTime: this.minTime,
            maxTime: this.maxTime,
            slotEventOverlap: this.slotEventOverlap,
            nowIndicator: this.nowIndicator,
            dragRevertDuration: this.dragRevertDuration,
            dragOpacity: this.dragOpacity,
            dragScroll: this.dragScroll,
            eventOverlap: this.eventOverlap,
            eventConstraint: this.eventConstraint,
            eventRender: this.eventRender,
            dayRender: this.dayRender,
            dayClick: (date, jsEvent, view) => {
                this.onDayClick.emit({
                    'date': date,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            drop: (date, jsEvent, ui, resourceId) => {
                this.onDrop.emit({
                    'date': date,
                    'jsEvent': jsEvent,
                    'ui': ui,
                    'resourceId': resourceId
                });
            },
            eventClick: (calEvent, jsEvent, view) => {
                this.onEventClick.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseover: (calEvent, jsEvent, view) => {
                this.onEventMouseover.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseout: (calEvent, jsEvent, view) => {
                this.onEventMouseout.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStart: (event, jsEvent, ui, view) => {
                this.onEventDragStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStop: (event, jsEvent, ui, view) => {
                this.onEventDragStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDrop: (event, delta, revertFunc, jsEvent, ui, view) => {
                this._updateEvent(event);
                this.onEventDrop.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStart: (event, jsEvent, ui, view) => {
                this.onEventResizeStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStop: (event, jsEvent, ui, view) => {
                this.onEventResizeStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResize: (event, delta, revertFunc, jsEvent, ui, view) => {
                this._updateEvent(event);
                this.onEventResize.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            viewRender: (view, element) => {
                this.onViewRender.emit({
                    'view': view,
                    'element': element
                });
            },
            viewDestroy: (view, element) => {
                this.onViewDestroy.emit({
                    'view': view,
                    'element': element
                });
            }
        };
        if (this.options) {
            for (let prop in this.options) {
                this.config[prop] = this.options[prop];
            }
        }
    }
    ngAfterViewChecked() {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    }
    ngOnChanges(changes) {
        if (this.schedule) {
            let options = {};
            for (let change in changes) {
                if (change !== 'events') {
                    options[change] = changes[change].currentValue;
                }
            }
            if (Object.keys(options).length) {
                this.schedule.fullCalendar('option', options);
            }
        }
    }
    initialize() {
        this.schedule = jQuery(this.el.nativeElement.children[0]);
        this.schedule.fullCalendar(this.config);
        if (this.events) {
            this.schedule.fullCalendar('addEventSource', this.events);
        }
        this.initialized = true;
    }
    ngDoCheck() {
        let changes = this.differ.diff(this.events);
        if (this.schedule && changes) {
            this.schedule.fullCalendar('removeEventSources');
            if (this.events) {
                this.schedule.fullCalendar('addEventSource', this.events);
            }
        }
    }
    ngOnDestroy() {
        jQuery(this.el.nativeElement.children[0]).fullCalendar('destroy');
        this.initialized = false;
        this.schedule = null;
    }
    gotoDate(date) {
        this.schedule.fullCalendar('gotoDate', date);
    }
    prev() {
        this.schedule.fullCalendar('prev');
    }
    next() {
        this.schedule.fullCalendar('next');
    }
    prevYear() {
        this.schedule.fullCalendar('prevYear');
    }
    nextYear() {
        this.schedule.fullCalendar('nextYear');
    }
    today() {
        this.schedule.fullCalendar('today');
    }
    incrementDate(duration) {
        this.schedule.fullCalendar('incrementDate', duration);
    }
    changeView(viewName) {
        this.schedule.fullCalendar('changeView', viewName);
    }
    getDate() {
        return this.schedule.fullCalendar('getDate');
    }
    updateEvent(event) {
        this.schedule.fullCalendar('updateEvent', event);
    }
    _findEvent(id) {
        let event;
        if (this.events) {
            for (let e of this.events) {
                if (e.id === id) {
                    event = e;
                    break;
                }
            }
        }
        return event;
    }
    _updateEvent(event) {
        let sourceEvent = this._findEvent(event.id);
        if (sourceEvent) {
            sourceEvent.start = event.start.format();
            if (event.end) {
                sourceEvent.end = event.end.format();
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], Schedule.prototype, "events", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Schedule.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "rtl", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "weekends", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], Schedule.prototype, "hiddenDays", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "fixedWeekCount", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "weekNumbers", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "businessHours", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "contentHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Schedule.prototype, "aspectRatio", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "eventLimit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "defaultDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "editable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "droppable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "eventStartEditable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "eventDurationEditable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Schedule.prototype, "defaultView", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "allDaySlot", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Schedule.prototype, "allDayText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "slotDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "slotLabelInterval", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "snapDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "scrollTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "minTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "maxTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "slotEventOverlap", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "nowIndicator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Schedule.prototype, "dragRevertDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Schedule.prototype, "dragOpacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "dragScroll", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "eventOverlap", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "eventConstraint", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Schedule.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "timezone", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Schedule.prototype, "timeFormat", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], Schedule.prototype, "eventRender", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], Schedule.prototype, "dayRender", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Schedule.prototype, "options", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onDayClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onDrop", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventMouseover", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventMouseout", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventDragStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventDragStop", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventDrop", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventResizeStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventResizeStop", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onEventResize", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onViewRender", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Schedule.prototype, "onViewDestroy", void 0);
Schedule = __decorate([
    Component({
        selector: 'p-schedule',
        template: '<div [ngStyle]="style" [class]="styleClass"></div>'
    }),
    __metadata("design:paramtypes", [ElementRef, IterableDiffers])
], Schedule);
export { Schedule };
let ScheduleModule = class ScheduleModule {
};
ScheduleModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Schedule],
        declarations: [Schedule]
    })
], ScheduleModule);
export { ScheduleModule };
//# sourceMappingURL=schedule.js.map