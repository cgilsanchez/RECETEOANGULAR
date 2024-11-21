import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddrecetaPage } from './addreceta.page';

const routes: Routes = [
  {
    path: '',
    component: AddrecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddrecetaPageRoutingModule {}
