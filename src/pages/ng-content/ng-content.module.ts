import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgContentPage } from './ng-content';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    NgContentPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(NgContentPage),
  ],
})
export class NgContentPageModule {}
