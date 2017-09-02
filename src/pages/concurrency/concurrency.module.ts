import { NgModule } from '@angular/core';
import {ConcurrencyPage} from "./concurrency";
import {SharedModule} from "../../app/shared.module";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [ConcurrencyPage],
  exports: [ConcurrencyPage],
  imports: [IonicPageModule.forChild(ConcurrencyPage), SharedModule]
})
export class Module {}
