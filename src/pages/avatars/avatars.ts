import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";
@Component({
  selector: 'page-avatars',
  templateUrl: 'avatars.html'
})
export class Avatars {
  constructor(public viewCtrl: ViewController) {}
}
