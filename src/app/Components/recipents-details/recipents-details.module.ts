import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { RecipentsDetailsPageRoutingModule } from './recipents-details-routing.module';

import { RecipentsDetailsPage } from './recipents-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipentsDetailsPageRoutingModule
  ],
  declarations: [RecipentsDetailsPage]
})
export class RecipentsDetailsPageModule {}
