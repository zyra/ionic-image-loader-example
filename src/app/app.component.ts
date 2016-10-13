import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import {ImageLoaderConfig, ImageLoader} from 'ionic-image-loader';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(
    platform: Platform,
    imageLoaderConfig: ImageLoaderConfig,
    imageLoader: ImageLoader
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    imageLoaderConfig.enableDebugMode();
  }
}
