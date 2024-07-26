import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipelistComponent } from './recipelist/recipelist.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    component: RecipelistComponent,
  },

  {
    path: '**',
    component: PagenotfoundComponent,
  },
  {
    path: 'addrecipes',
    component: AddRecipeComponent,
  },
];
