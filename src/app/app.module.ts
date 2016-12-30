import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicImageLoader } from 'ionic-image-loader';
import {Avatars} from "../pages/avatars/avatars";
import {Cards} from "../pages/cards/cards";
import {Slider} from "../pages/slider/slider";
import {ConcurrencyPage} from "../pages/concurrency/concurrency";

const pages = [
  MyApp,
  HomePage,
  Avatars,
  Cards,
  Slider,
  ConcurrencyPage
];

@NgModule({
  declarations: pages,
  imports: [
    IonicModule.forRoot(MyApp),
    IonicImageLoader
  ],
  bootstrap: [IonicApp],
  entryComponents: pages
})
export class AppModule {}
