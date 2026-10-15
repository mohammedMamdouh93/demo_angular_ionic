import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipentEditPage } from './recipent-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RecipentEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipentEditPageRoutingModule {}
