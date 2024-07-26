import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllrecipesComponent } from '../allrecipes/allrecipes.component';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule, AllrecipesComponent],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  @Input() recipeadd: any;
  image = '';
  title = '';
  category = '';
  summary = '';

  addrecipe() {
    this.recipeadd.push({
      poster: this.image,
      name: this.title,
      rating: this.category,
      // summary: this.summary,
      summary: this.summary,
    });
  }
}
