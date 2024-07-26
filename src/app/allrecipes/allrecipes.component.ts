import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allrecipes',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './allrecipes.component.html',
  styleUrl: './allrecipes.component.scss',
})
export class AllrecipesComponent {
  @Input() everyrecipe: any;
  // allrecipes: any;
  // constructor(public RecipeServiceService: RecipeServiceService) {
  //   this.recipe_list = this.RecipeServiceService.recipes;
  // }
  constructor(public MovielistService: RecipeServiceService) {
    this.everyrecipe = this.MovielistService.recipes;
  }
  show = true;
  showDescription() {
    this.show = !this.show;
  }
  @Output() delete_the_recipe = new EventEmitter<any>();
  deleteMovie() {
    this.delete_the_recipe.emit(this.everyrecipe);
    // console.log('child', this.movies_data);
  }
}
