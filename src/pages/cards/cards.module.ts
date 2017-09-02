import { NgModule } from '@angular/core';
import { Cards } from "./cards";
import {SharedModule} from "../../app/shared.module";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [Cards],
  exports: [Cards],
  imports: [IonicPageModule.forChild(Cards), SharedModule]
})
export class Module {}
