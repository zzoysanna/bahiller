import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: 'about',
    component: PageComponent
  },
  {
    path: 'hospitals',
    loadChildren: () => import('./hospitals/content.module').then(m => m.ContentModule)
  },
  {
    path: 'hurts',
    loadChildren: () => import('./hurts/hurts.module').then(m => m.HurtsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
