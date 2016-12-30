import { Component } from '@angular/core';

import {ModalController, AlertController} from 'ionic-angular';
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
    private modalCtrl: ModalController,
    private imageLoader: ImageLoader,
    private alertCtrl: AlertController
  ) {}

  openModal(component) {
    this.modalCtrl.create(component).present();
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
