import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';

import { ImageLoaderConfig } from 'ionic-image-loader';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(
    platform: Platform,
    imageLoaderConfig: ImageLoaderConfig,
    statusBar: StatusBar
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });


    // enable debug mode to get console logs and stuff
    imageLoaderConfig.enableDebugMode();
    // set a fallback url to use by default in case an image is not found
    imageLoaderConfig.setFallbackUrl('assets/fallback.png');

    imageLoaderConfig.maxCacheSize = 2 * 1024 * 1024; // 2 MB
    imageLoaderConfig.maxCacheAge = 60 * 1000; // 1 minute

  }
}
