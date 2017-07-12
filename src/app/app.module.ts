import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicImageLoader } from '../ionic-image-loader/src/';
import { Avatars } from '../pages/avatars/avatars';
import { Cards } from '../pages/cards/cards';
import { Slider } from '../pages/slider/slider';
import { ConcurrencyPage } from '../pages/concurrency/concurrency';
import { VirtualScrollPage } from '../pages/virtual-scroll/virtual-scroll';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Avatars,
    Cards,
    Slider,
    ConcurrencyPage,
    VirtualScrollPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Avatars,
    Cards,
    Slider,
    ConcurrencyPage,
    VirtualScrollPage
  ],
  providers: [
    SplashScreen,
    StatusBar
  ]
})
export class AppModule {}
