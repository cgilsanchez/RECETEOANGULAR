import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistarecetaPage } from './vistareceta.page';

const routes: Routes = [
  {
    path: '',
    component: VistarecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistarecetaPageRoutingModule {}
