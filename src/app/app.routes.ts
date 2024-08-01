import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { SearchComponent } from './search/search.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    children: [
      { path: '', component: SearchComponent },
      { path: ':id', component: RecipedetailsComponent },
    ],
  },

  {
    path: 'search/edit/:id',
    component: EditRecipesComponent,
  },
  {
    path: 'addrecipes',
    component: AddRecipeComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
