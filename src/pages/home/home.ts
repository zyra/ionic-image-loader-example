import { Component } from '@angular/core';

import {ModalController, AlertController, NavController} from 'ionic-angular';
import {Cards} from "../cards/cards";
import {Avatars} from "../avatars/avatars";
import {Slider} from "../slider/slider";
import {ConcurrencyPage} from "../concurrency/concurrency";
import {ImageLoader} from "ionic-image-loader";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = Cards;
  avatars = Avatars;
  slider = Slider;
  concurrency = ConcurrencyPage;

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
