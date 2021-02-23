import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ContentRoutingModule} from './content-routing.module';
import {ContentComponent} from './content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, ContentRoutingModule, ScullyLibModule],
})
export class ContentModule {}
