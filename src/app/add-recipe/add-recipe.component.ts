import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  @Input() recipeadd: any;
  image = '';
  title = '';
  category = '';
  rating = '';
  summary = '';
  ingredients = '';
  timeToComplete = '';
  procedure = '';

  constructor(public RecipeServiceService: RecipeServiceService) {
    this.recipeadd = this.RecipeServiceService.recipes;
  }

  addrecipe() {
    this.recipeadd.push({
      poster: this.image,
      name: this.title,
      category: this.category,
      rating: this.rating,
      // summary: this.summary,
      summary: this.summary,
      ingredients: this.ingredients,
      timeToComplete: this.timeToComplete,
      procedure: this.procedure,
    });
  }
}
