import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocinerosPageRoutingModule } from './cocineros-routing.module';

import { CocinerosPage } from './cocineros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocinerosPageRoutingModule
  ],
  declarations: [CocinerosPage]
})
export class CocinerosPageModule {}
