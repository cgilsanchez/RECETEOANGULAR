import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CooksPage } from './cooks.page';

const routes: Routes = [
  {
    path: '',
    component: CooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CooksPageRoutingModule {}
