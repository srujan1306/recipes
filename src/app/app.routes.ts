import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    children: [
      {
        //instead of import at starting, it loads whenever we go to search page
        path: '',
        loadComponent: () =>
          import('./search/search.component').then((c) => c.SearchComponent),
      }, // component: SearchComponent
      { path: ':id', component: RecipedetailsComponent },
      {
        path: 'edit/:id',
        component: EditRecipesComponent,
      },
    ],
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
