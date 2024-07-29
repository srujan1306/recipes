import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { RecipeServiceService } from '../recipe-service.service';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-allrecipes',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    RouterLink,
  ],
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
  deleteRecipe() {
    this.delete_the_recipe.emit(this.everyrecipe);
  }

  // getdetails(idx: any) {
  //   this.router.navigate(['/recipes:idx', idx]);
  // }

  getrecipebyindex(idx: any) {
    return this.everyrecipe[idx];
  }
}
