import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScullyLibModule} from '@scullyio/ng-lib';

import { HurtsRoutingModule } from './hurts-routing.module';
import { HurtsComponent} from './components/hurts/hurts.component';
import { RootComponent} from './components/root/root.component';


@NgModule({
  declarations: [HurtsComponent, RootComponent],
  imports: [
    CommonModule,
    HurtsRoutingModule,
    ScullyLibModule
  ]
})
export class HurtsModule { }
