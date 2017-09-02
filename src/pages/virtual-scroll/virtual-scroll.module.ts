import { NgModule } from '@angular/core';
import {VirtualScrollPage} from "./virtual-scroll";
import {SharedModule} from "../../app/shared.module";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [VirtualScrollPage],
  exports: [VirtualScrollPage],
  imports: [IonicPageModule.forChild(VirtualScrollPage), SharedModule]
})
export class Module {}
