import { Component, Input } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-allrecipes',
  standalone: true,
  imports: [],
  templateUrl: './allrecipes.component.html',
  styleUrl: './allrecipes.component.scss',
})
export class AllrecipesComponent {
  @Input() everyrecipe: any;
  // allrecipes: any;
  // constructor(public RecipeServiceService: RecipeServiceService) {
  //   this.recipe_list = this.RecipeServiceService.recipes;
  // }
}
