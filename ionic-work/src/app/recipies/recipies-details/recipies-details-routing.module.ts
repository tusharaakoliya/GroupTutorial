import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipiesDetailsPage } from './recipies-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecipiesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipiesDetailsPageRoutingModule {}
