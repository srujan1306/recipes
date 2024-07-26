import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { RecipeServiceService } from './recipe-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllrecipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  recipe_list: any;

  constructor(public RecipeServiceService: RecipeServiceService) {
    this.recipe_list = this.RecipeServiceService.recipes;
  }
}
