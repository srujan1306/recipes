import { Component } from '@angular/core';
import { Recipe } from '../app.component';
import { RecipeServiceService } from '../recipe-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AllrecipesComponent } from '../allrecipes/allrecipes.component';
import { RecipelistComponent } from '../recipelist/recipelist.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    AllrecipesComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RecipelistComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm: string = '';
  recipes: any = [];
  filteredRecipes: Recipe[] = [];

  constructor(private recipeServiceService: RecipeServiceService) {}

  ngOnInit() {
    this.recipeServiceService.getrecipes().then((data) => {
      this.recipes = data;
      this.filteredRecipes = this.recipes;
    });
  }

  onSearch() {
    this.filteredRecipes = this.recipes.filter(
      (recipe: any) =>
        recipe.title
          .toLowerCase()
          .includes(this.searchTerm.toLocaleLowerCase()) ||
        recipe.category
          .toLowerCase()
          .includes(this.searchTerm.toLocaleLowerCase())
    );
  }
}
