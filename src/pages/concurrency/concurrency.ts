import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

/*
  Generated class for the Concurrency page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-concurrency',
  templateUrl: 'concurrency.html'
})
export class ConcurrencyPage {

  images: string[] = [];

  constructor(public viewCtrl: ViewController) {
    for (let i = 0; i < 30; i++) {
      const url = "http://lorempixel.com/1920/1920/abstract/?v=" + Date.now() + i;
      this.images.push(url);
    }
  }

}
