import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class Cards {
  constructor(public viewCtrl: ViewController) {}
}
