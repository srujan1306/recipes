import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecipeServiceService } from '../recipe-service.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Newrecipe } from '../recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule, MatFormField, MatInput, MatButtonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  @Input() recipeadd!: Newrecipe;
  image = '';
  title = '';
  category = '';
  rating = '';
  summary = '';
  ingredients = '';
  timeToComplete = '';
  procedure = '';

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
    private router: Router
  ) {}
  addrecipe() {
    let recipeadd: Newrecipe = {
      image: this.image,
      title: this.title,
      category: this.category,
      rating: this.rating,
      // summary: this.summary,
      summary: this.summary,
      ingredients: this.ingredients,
      timeToComplete: this.timeToComplete,
      procedure: this.procedure,
    };

    this.RecipeServiceService.addrecipe(recipeadd).then(() => {
      this.router.navigate(['search']);
    });
  }
}
