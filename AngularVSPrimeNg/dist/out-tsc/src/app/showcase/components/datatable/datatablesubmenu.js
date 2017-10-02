var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let DataTableSubmenu = class DataTableSubmenu {
};
DataTableSubmenu = __decorate([
    Component({
        selector: 'datatable-demos',
        template: `
        <div class="content-section SubSubMenu ui-helper-clearfix">
            <ul>
                <li><a [routerLink]="['/datatable']">&#9679; Basic</a></li>
                <li><a [routerLink]="['/datatable/facets']">&#9679; Facets</a></li>
                <li><a [routerLink]="['/datatable/templating']">&#9679; Templating</a></li>
                <li><a [routerLink]="['/datatable/colgroup']">&#9679; ColGroup</a></li>
                <li><a [routerLink]="['/datatable/rowgroup']">&#9679; RowGroup</a></li>
                <li><a [routerLink]="['/datatable/paginator']">&#9679; Paginator</a></li>
                <li><a [routerLink]="['/datatable/sort']">&#9679; Sort</a></li>
                <li><a [routerLink]="['/datatable/filter']">&#9679; Filter</a></li>
                <li><a [routerLink]="['/datatable/selection']">&#9679; Selection</a></li>
                <li><a [routerLink]="['/datatable/editable']">&#9679; Editable</a></li>
                <li><a [routerLink]="['/datatable/rowexpansion']">&#9679; Expand</a></li>
                <li><a [routerLink]="['/datatable/colresize']">&#9679; Resize</a></li>
                <li><a [routerLink]="['/datatable/colreorder']">&#9679; Reorder</a></li>
                <li><a [routerLink]="['/datatable/scroll']">&#9679; Scroll</a></li>
                <li><a [routerLink]="['/datatable/lazy']">&#9679; Lazy</a></li>
                <li><a [routerLink]="['/datatable/contextmenu']">&#9679; ContextMenu</a></li>
                <li><a [routerLink]="['/datatable/coltoggler']">&#9679; ColToggler</a></li>
                <li><a [routerLink]="['/datatable/responsive']">&#9679; Responsive</a></li>
                <li><a [routerLink]="['/datatable/crud']">&#9679; Crud</a></li>
                <li><a [routerLink]="['/datatable/export']">&#9679; Export</a></li>
            </ul>
        </div>
    `
    })
], DataTableSubmenu);
export { DataTableSubmenu };
//# sourceMappingURL=datatablesubmenu.js.map