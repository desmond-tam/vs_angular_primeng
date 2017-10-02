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
let GalleriaDemo = class GalleriaDemo {
    constructor() {
        this.images = [];
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    }
};
GalleriaDemo = __decorate([
    Component({
        templateUrl: './galleriademo.html'
    }),
    __metadata("design:paramtypes", [])
], GalleriaDemo);
export { GalleriaDemo };
//# sourceMappingURL=galleriademo.js.map