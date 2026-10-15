import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular/lazy';
import { Recipent } from './recipent.model';
import { Recipes } from './recipes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements ViewWillEnter {

  listOfRecipents: WritableSignal<Recipent[]>= signal([]);
  private readonly recipes = inject(Recipes);

  ionViewWillEnter() {
    this.getRecipents();
  }

  getRecipents() {
    this.listOfRecipents.set(this.recipes.getRecipents());
  }

 

}
