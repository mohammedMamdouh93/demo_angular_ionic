import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'recipies-detail/:id',
    loadChildren: () => import('../Components/recipents-details/recipents-details.module').then( m => m.RecipentsDetailsPageModule)
    
  },
  {
    path: 'add-recipent',
      loadChildren: () => import('../Components/recipent-edit/recipent-edit.module').then( m => m.RecipentEditPageModule)
  },
  {
    path: 'edit-recipent/:id',
    loadChildren: () => import('../Components/recipent-edit/recipent-edit.module').then( m => m.RecipentEditPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
