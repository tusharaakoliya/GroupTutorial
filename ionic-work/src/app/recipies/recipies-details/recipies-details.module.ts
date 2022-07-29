import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipiesDetailsPageRoutingModule } from './recipies-details-routing.module';

import { RecipiesDetailsPage } from './recipies-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipiesDetailsPageRoutingModule
  ],
  declarations: [RecipiesDetailsPage]
})
export class RecipiesDetailsPageModule {}
