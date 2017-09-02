import { Component } from '@angular/core';

import {AlertController, NavController, IonicPage} from 'ionic-angular';
import {ImageLoader} from "../../ionic-image-loader/src/";


@IonicPage({
  name: 'home-page'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private imageLoader: ImageLoader,
    private alertCtrl: AlertController
  ) {}

  openPage(component) {
    this.navCtrl.push(component);
  }

  clearCache() {
    this.imageLoader.clearCache();
    this.alertCtrl.create({
      title: 'Success',
      message: 'Cache cleared',
      buttons: ['Dismiss']
    }).present();
  }

}
