import { Component } from '@angular/core';

@Component({
  selector: 'page-virtual-scroll',
  templateUrl: 'virtual-scroll.html'
})
export class VirtualScrollPage {

  images: string[] = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      const url = "http://lorempixel.com/200/200/abstract/?v=" + Date.now() + i;
      this.images.push(url);
    }
    console.log(this.images);
  }

}
