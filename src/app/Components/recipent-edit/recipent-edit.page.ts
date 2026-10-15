import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from '../../dashboard/recipes';
import { Recipent } from '../../dashboard/recipent.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipent-edit',
  templateUrl: './recipent-edit.page.html',
  styleUrls: ['./recipent-edit.page.scss'],
  standalone: false,
})
export class RecipentEditPage implements OnInit {

  form:FormGroup|undefined;
  editMode: boolean = false;
  editRecipentId: string | null = null;
  editRecipent: Recipent | undefined;
  constructor(private router: Router,private recipes: Recipes,private activatedRoute: ActivatedRoute,private builder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.checkEditMode();
  }
  goBack() {
    this.router.navigate(['/recipies-detail/'+this.editRecipentId]);
  }
    
    checkEditMode() {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.editMode = true;
      this.editRecipentId = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.editRecipentId) {
        this.editRecipent = this.recipes.getRecipentById(this.editRecipentId);
        this.initForm(this.editRecipent);
      }
    }else {
      this.editMode = false;
    }
  }

  initForm(data?:Recipent) {
    this.form = this.builder.group({
      title: [data?.title || '', Validators.required],
      imageUrl: [data?.imageUrl || '', Validators.required],
      ingredients: [data?.ingredients.join(', ') || '', Validators.required],
    });
  }

  submit(){
    if(this.form?.valid){
      if(this.editMode){
        this.editRecipent ={...this.editRecipent,...this.form.getRawValue()}
        this.recipes.updateRecipent(this.editRecipent!)
        this.goBack()
      }else{
        this.recipes.addRecipent(this.form.getRawValue())
        this.router.navigate([''])
      }
    }else{
      //shoe error message
    }
  }


}
