import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../dashboard/recipes';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipent } from '../../dashboard/recipent.model';
import { AlertController } from '@ionic/angular/lazy';

@Component({
  selector: 'app-recipents-details',
  templateUrl: './recipents-details.page.html',
  styleUrls: ['./recipents-details.page.scss'],
  standalone: false,
})
export class RecipentsDetailsPage implements OnInit {

  recipent:  Recipent | undefined;
  constructor(private recipes: Recipes, private activatedRoute: ActivatedRoute,private router: Router,private alertCont:AlertController) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      const recipentId = this.activatedRoute.snapshot.paramMap.get('id');
      if (recipentId) {
        this.recipent = this.recipes.getRecipentById(recipentId);
      }else {
        this.router.navigate(['/']);
      }
    }else {
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  onDeleteRecipe() {
    this.alertCont.create({
      animated:true,
      header:"Are you sure",
      message:"Do you really want to delete the recipe?",
      buttons:[
        {
          text:"Delete",
          handler:()=>this.deleteRecipe()
        },
        {
          text:'cancel',
          role:"cancel"
        }
      ]
      

    }).then(alert => alert.present())
    
  }
  deleteRecipe(){
  if (this.recipent) {
      this.recipes.deleteRecipent(this.recipent.id);
      this.router.navigate(['/']);
    }
  }
  onEditRecipe() {
    if (this.recipent) {
      this.router.navigate(['/edit-recipent', this.recipent.id]);
    }
  }

}
