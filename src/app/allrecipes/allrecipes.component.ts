import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../app.component';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule,
  ],
  templateUrl: './allrecipes.component.html',
  styleUrl: './allrecipes.component.scss',
})
export class AllrecipesComponent {
  @Input() everyrecipe: any;
  //  = {
  //   title: '',
  //   image: '',
  //   ingredients: [''],
  //   timeToComplete: '',
  //   procedure: [''],
  //   category: '',
  //   rating: '',
  //   summary: '',
  // };
  @Input() id: any;
  @Output() delete_the_recipe = new EventEmitter<any>();
  idx: any;

  // allrecipes: any;
  // constructor(public RecipeServiceService: RecipeServiceService) {
  //   this.recipe_list = this.RecipeServiceService.recipes;
  // }
  constructor(private router: Router, private route: ActivatedRoute) {}
  show = true;

  showDescription() {
    this.show = !this.show;
  }

  deleteRecipe() {
    this.delete_the_recipe.emit(this.everyrecipe);
  }

  // getdetails(idx: any) {
  //   this.router.navigate(['/recipes:idx', idx]);
  // }

  getrecipebyindex(idx: number) {
    this.router.navigate(['/recipes', idx]);
    // return this.everyrecipe[idx];
  }
}
