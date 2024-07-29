import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../app.component';

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
  @Input() everyrecipe: any = [];

  constructor(private RecipeServiceService: RecipeServiceService) {
    this.everyrecipe = this.RecipeServiceService.getrecipes();
  }
  show = true;
  showDescription() {
    this.show = !this.show;
  }
  @Output() delete_the_recipe = new EventEmitter<any>();
  deleteRecipe() {
    this.delete_the_recipe.emit(this.everyrecipe);
  }
}
