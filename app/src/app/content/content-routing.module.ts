import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './content.component';

const routes: Routes = [
  {
    path: ':id',
    component: ContentComponent,
  },
  {
    path: '**',
    component: ContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}

