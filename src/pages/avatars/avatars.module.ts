import { NgModule }        from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule }    from '../../app/shared.module';
import { Avatars }         from './avatars';

@NgModule({
  declarations: [Avatars],
  exports: [Avatars],
  imports: [IonicPageModule.forChild(Avatars), SharedModule],
})
export class Module {
}
