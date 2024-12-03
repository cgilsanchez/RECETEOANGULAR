import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CooksPageRoutingModule } from './cooks-routing.module';

import { CooksPage } from './cooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CooksPageRoutingModule
  ],
  declarations: [CooksPage]
})
export class CooksPageModule {}
