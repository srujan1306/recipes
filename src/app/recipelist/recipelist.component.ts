import { Component, Input, input } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { AllrecipesComponent } from '../allrecipes/allrecipes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../app.component';

@Component({
  selector: 'app-recipelist',
  standalone: true,
  imports: [
    AllrecipesComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    AllrecipesComponent,
  ],
  templateUrl: './recipelist.component.html',
  styleUrl: './recipelist.component.scss',
})
export class RecipelistComponent {
  searchTerm: string = '';
  @Input() recipe_list: any;
  filteredRecipes: any;
  idx: any;

  constructor(public RecipeServiceService: RecipeServiceService) {
    this.recipe_list = this.RecipeServiceService.getrecipes();
  }
  ngOnInit() {
    this.loadrecipies();
  }
  loadrecipies() {
    this.RecipeServiceService.getrecipes().then((data) => {
      this.recipe_list = data;
      // this.isLoading = false;
    });
    // .catch(() => {
    //   // this.isLoading = false;
    //   this.msg = 'Something went wrong';
    // });
  }
  deleterecipe(recipe_to_be_deleted: any) {
    // console.log('parent', movie_to_be_deleted);
    this.RecipeServiceService.delete_the_recipe(recipe_to_be_deleted);
  }
}
