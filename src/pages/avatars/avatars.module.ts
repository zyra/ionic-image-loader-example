import { NgModule } from '@angular/core';
import { Avatars } from './avatars';
import {SharedModule} from "../../app/shared.module";
import {Avatar, IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [Avatars],
  exports: [Avatars],
  imports: [IonicPageModule.forChild(Avatars), SharedModule]
})
export class Module {}
