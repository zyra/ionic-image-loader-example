import { NgModule } from '@angular/core';
import {Slider} from "./slider";
import {SharedModule} from "../../app/shared.module";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [Slider],
  exports: [Slider],
  imports: [IonicPageModule.forChild(Slider), SharedModule]
})
export class Module {}
