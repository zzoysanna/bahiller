import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HurtsComponent } from './components/hurts/hurts.component';
import { RootComponent} from './components/root/root.component';

const routes: Routes = [
  {
    path: ':id',
    component: HurtsComponent,
  },
  {
    path: '**',
    component: RootComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HurtsRoutingModule { }
