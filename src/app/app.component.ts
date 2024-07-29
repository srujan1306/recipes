import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { RecipeServiceService } from './recipe-service.service';
export interface Recipe {
  title: string;
  image: string;
  ingredients: [];
  timeToComplete: string;
  procedure: string;
  category: string;
  rating: string;
  summary: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllrecipesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
