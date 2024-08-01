import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'search/:id',
    component: RecipedetailsComponent,
  },
  {
    path: 'recipes',
    component: RecipelistComponent,
  },
  // {
  //   path: 'recipes/:id',
  //   component: RecipedetailsComponent,
  // },

  {
    path: 'addrecipes',
    component: AddRecipeComponent,
  },

  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
