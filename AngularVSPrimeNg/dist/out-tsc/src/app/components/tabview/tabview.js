var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren, QueryList, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from '../common/shared';
let TabViewNav = class TabViewNav {
    constructor() {
        this.orientation = 'top';
        this.onTabClick = new EventEmitter();
        this.onTabCloseClick = new EventEmitter();
    }
    getDefaultHeaderClass(tab) {
        let styleClass = 'ui-state-default ui-corner-' + this.orientation;
        if (tab.headerStyleClass) {
            styleClass = styleClass + " " + tab.headerStyleClass;
        }
        return styleClass;
    }
    clickTab(event, tab) {
        this.onTabClick.emit({
            originalEvent: event,
            tab: tab
        });
    }
    clickClose(event, tab) {
        this.onTabCloseClick.emit({
            originalEvent: event,
            tab: tab
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TabViewNav.prototype, "tabs", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabViewNav.prototype, "orientation", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TabViewNav.prototype, "onTabClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TabViewNav.prototype, "onTabCloseClick", void 0);
TabViewNav = __decorate([
    Component({
        selector: '[p-tabViewNav]',
        host: {
            '[class.ui-tabview-nav]': 'true',
            '[class.ui-helper-reset]': 'true',
            '[class.ui-helper-clearfix]': 'true',
            '[class.ui-widget-header]': 'true',
            '[class.ui-corner-all]': 'true'
        },
        template: `
        <ng-template ngFor let-tab [ngForOf]="tabs">
            <li [class]="getDefaultHeaderClass(tab)" [ngStyle]="tab.headerStyle" role="tab"
                [ngClass]="{'ui-tabview-selected ui-state-active': tab.selected, 'ui-state-disabled': tab.disabled}"
                (click)="clickTab($event,tab)" *ngIf="!tab.closed"
                [attr.aria-expanded]="tab.selected" [attr.aria-selected]="tab.selected">
                <a href="#">
                    <span class="ui-tabview-left-icon fa" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon"></span>
                    <span class="ui-tabview-title">{{tab.header}}</span>
                    <span class="ui-tabview-right-icon fa" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon"></span>
                </a>
                <span *ngIf="tab.closable" class="ui-tabview-close fa fa-close" (click)="clickClose($event,tab)"></span>
            </li>
        </ng-template>
    `,
    })
], TabViewNav);
export { TabViewNav };
let TabPanel = class TabPanel {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
        this.cache = true;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        this.loaded = true;
    }
    ngOnDestroy() {
        this.view = null;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], TabPanel.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "closable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabPanel.prototype, "headerStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabPanel.prototype, "headerStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabPanel.prototype, "leftIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabPanel.prototype, "rightIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "cache", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], TabPanel.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabPanel.prototype, "selected", null);
TabPanel = __decorate([
    Component({
        selector: 'p-tabPanel',
        template: `
        <div class="ui-tabview-panel ui-widget-content" [style.display]="selected ? 'block' : 'none'" 
            role="tabpanel" [attr.aria-hidden]="!selected" *ngIf="!closed">
            <ng-content></ng-content>
            <p-templateLoader [template]="contentTemplate" *ngIf="contentTemplate&&(cache ? loaded : selected)"></p-templateLoader>
        </div>
    `
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], TabPanel);
export { TabPanel };
let TabView = class TabView {
    constructor(el) {
        this.el = el;
        this.orientation = 'top';
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
    }
    get lazy() {
        return this._lazy;
    }
    set lazy(val) {
        this._lazy = val;
        console.log('Lazy property of TabView is deprecated, use an ngTemplate inside a TabPanel instead for Lazy Loading');
    }
    ngAfterContentInit() {
        this.initTabs();
        this.tabPanels.changes.subscribe(_ => {
            this.initTabs();
        });
    }
    initTabs() {
        this.tabs = this.tabPanels.toArray();
        let selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
        }
    }
    open(event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            let selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            tab.selected = true;
            this.onChange.emit({ originalEvent: event, index: this.findTabIndex(tab) });
        }
        if (event) {
            event.preventDefault();
        }
    }
    close(event, tab) {
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: () => {
                    this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    }
    closeTab(tab) {
        if (tab.selected) {
            tab.selected = false;
            for (let i = 0; i < this.tabs.length; i++) {
                let tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    }
    findSelectedTab() {
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    }
    findTabIndex(tab) {
        let index = -1;
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    get activeIndex() {
        return this._activeIndex;
    }
    set activeIndex(val) {
        this._activeIndex = val;
        if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
            this.findSelectedTab().selected = false;
            this.tabs[this._activeIndex].selected = true;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], TabView.prototype, "orientation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabView.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabView.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabView.prototype, "controlClose", void 0);
__decorate([
    ContentChildren(TabPanel),
    __metadata("design:type", QueryList)
], TabView.prototype, "tabPanels", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TabView.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TabView.prototype, "onClose", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabView.prototype, "lazy", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TabView.prototype, "activeIndex", null);
TabView = __decorate([
    Component({
        selector: 'p-tabView',
        template: `
        <div [ngClass]="'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation" [ngStyle]="style" [class]="styleClass">
            <ul p-tabViewNav role="tablist" *ngIf="orientation!='bottom'" [tabs]="tabs" [orientation]="orientation" 
                (onTabClick)="open($event.originalEvent, $event.tab)" (onTabCloseClick)="close($event.originalEvent, $event.tab)"></ul>
            <div class="ui-tabview-panels">
                <ng-content></ng-content>
            </div>
            <ul p-tabViewNav role="tablist" *ngIf="orientation=='bottom'" [tabs]="tabs" [orientation]="orientation"
                (onTabClick)="open($event.originalEvent, $event.tab)" (onTabCloseClick)="close($event.originalEvent, $event.tab)"></ul>
        </div>
    `,
    }),
    __metadata("design:paramtypes", [ElementRef])
], TabView);
export { TabView };
let TabViewModule = class TabViewModule {
};
TabViewModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule],
        exports: [TabView, TabPanel, TabViewNav, SharedModule],
        declarations: [TabView, TabPanel, TabViewNav]
    })
], TabViewModule);
export { TabViewModule };
//# sourceMappingURL=tabview.js.map