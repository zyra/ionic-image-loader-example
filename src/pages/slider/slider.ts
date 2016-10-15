import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html'
})
export class Slider  {
  constructor(public viewCtrl: ViewController) {}
}
