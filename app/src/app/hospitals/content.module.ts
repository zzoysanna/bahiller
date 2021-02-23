import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ContentRoutingModule} from './content-routing.module';
import {ContentComponent} from './components/hospital/content.component';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [ContentComponent, RootComponent],
  imports: [CommonModule, ContentRoutingModule, ScullyLibModule],
})
export class ContentModule {}
