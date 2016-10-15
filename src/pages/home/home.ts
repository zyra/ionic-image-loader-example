import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';
import {Cards} from "../cards/cards";
import {Avatars} from "../avatars/avatars";
import {Slider} from "../slider/slider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = Cards;
  avatars = Avatars;
  slider = Slider;

  constructor(
    private modalCtrl: ModalController
  ) {}

  openModal(component) {
    this.modalCtrl.create(component).present();
  }

}
