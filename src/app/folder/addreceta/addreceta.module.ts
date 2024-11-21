import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddrecetaPageRoutingModule } from './addreceta-routing.module';

import { AddrecetaPage } from './addreceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddrecetaPageRoutingModule
  ],
  declarations: [AddrecetaPage]
})
export class AddrecetaPageModule {}
