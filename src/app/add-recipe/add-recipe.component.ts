import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { RecipeServiceService } from '../recipe-service.service';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Newrecipe } from '../recipe';
import { Router } from '@angular/router';
import { Recipe } from '../app.component';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButtonModule,
    ReactiveFormsModule,
    MatError,
    MatSelect,
    MatLabel,
    MatOption,
  ],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  recipeForm: FormGroup;
  recipeadd!: Array<Recipe>;
  // image = '';
  // title = '';
  // category = '';
  // rating = '';
  // summary = '';
  // ingredients = '';
  // timeToComplete = '';
  // procedure = '';

  // constructor(public RecipeServiceService: RecipeServiceService) {
  //   this.recipeadd = this.RecipeServiceService.recipes;
  // }

  // addrecipe() {
  //   this.recipeadd.push({
  //     poster: this.image,
  //     name: this.title,
  //     category: this.category,
  //     rating: this.rating,
  //     // summary: this.summary,
  //     summary: this.summary,
  //     ingredients: this.ingredients,
  //     timeToComplete: this.timeToComplete,
  //     procedure: this.procedure,
  //   });
  // }
  constructor(
    public RecipeServiceService: RecipeServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.recipeadd = this.RecipeServiceService.getrecipes();
    this.recipeForm = this.fb.group({
      image: ['', [Validators.required, Validators.minLength(2)]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      category: '',
      rating: [
        '',
        [Validators.required, Validators.min(2), Validators.max(10)],
      ],
      summary: ['', [Validators.required, Validators.minLength(2)]],
      ingredients: '',
      timeToComplete: '',
      procedure: '',
    });
  }
  addrecipe() {
    // let recipeadd: Newrecipe = {
    //   image: this.image,
    //   title: this.title,
    //   category: this.category,
    //   rating: this.rating,
    //   // summary: this.summary,
    //   summary: this.summary,
    //   ingredients: this.ingredients,
    //   timeToComplete: this.timeToComplete,
    //   procedure: this.procedure,
    // };
    if (this.recipeForm.value) {
      let recipeadd: Newrecipe = this.recipeForm.value;

      this.RecipeServiceService.addrecipe(recipeadd).then(() => {
        this.router.navigate(['search']);
      });
    }
  }
  get title() {
    return this.recipeForm.get('title');
  }
  get image() {
    return this.recipeForm.get('image');
  }
  get rating() {
    return this.recipeForm.get('rating');
  }
}
