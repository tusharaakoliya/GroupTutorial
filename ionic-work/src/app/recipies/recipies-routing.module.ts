
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipiesPage } from './recipies.page';

const routes: Routes = [
  {
    path: '',
    component: RecipiesPage
  },
  // get details by ID  for recipe details -> New PAGE
  {
    path: ':recipieId',
    loadChildren: () => import('./recipies-details/recipies-details.module').then( m => m.RecipiesDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipiesPageRoutingModule {}
