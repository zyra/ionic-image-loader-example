import { NgModule } from '@angular/core';
import {HomePage} from "./home";
import { IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [HomePage],
  exports: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)]
})
export class Module {}
