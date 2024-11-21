import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistarecetaPageRoutingModule } from './vistareceta-routing.module';

import { VistarecetaPage } from './vistareceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistarecetaPageRoutingModule
  ],
  declarations: [VistarecetaPage]
})
export class VistarecetaPageModule {}
