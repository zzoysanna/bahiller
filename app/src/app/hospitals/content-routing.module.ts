import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './components/hospital/content.component';
import {RootComponent} from './components/root/root.component';

const routes: Routes = [
  {
    path: ':id',
    component: ContentComponent,
  },
  {
    path: '**',
    component: RootComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}

