import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { RecipentEditPageRoutingModule } from './recipent-edit-routing.module';

import { RecipentEditPage } from './recipent-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipentEditPageRoutingModule
  ],
  declarations: [RecipentEditPage]
})
export class RecipentEditPageModule {}
