import { Component } from '@angular/core';
import { Recipe } from '../app.component';
import { RecipeServiceService } from '../recipe-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AllrecipesComponent } from '../allrecipes/allrecipes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    AllrecipesComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm: string = '';
  recipes: any;
  filteredRecipes: any;

  constructor(
    private recipeServiceService: RecipeServiceService,
    private router: Router
  ) {}

  //---------------------------------------

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeServiceService.getrecipes().then((data) => {
      this.recipes = data;
      this.filteredRecipes = this.recipes;
      console.log(this.filteredRecipes);
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

  deleterecipe(recipe_to_be_deleted: Recipe) {
    this.recipeServiceService
      .delete_the_recipe(recipe_to_be_deleted)
      .then(() => this.loadRecipes());
  }
}
