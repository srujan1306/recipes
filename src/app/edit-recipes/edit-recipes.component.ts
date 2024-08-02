import { Component } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Newrecipe } from '../recipe';
import { Recipe } from '../app.component';
import { UpperCasePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-edit-recipes',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    UpperCasePipe,
    MatSelect,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
  ],
  templateUrl: './edit-recipes.component.html',
  styleUrl: './edit-recipes.component.scss',
})
export class EditRecipesComponent {
  recipeForm: FormGroup;
  route: any;

  constructor(
    public RecipeServiceService: RecipeServiceService,
    // private route: Route,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.recipeadd = this.RecipeServiceService.getrecipes();
    this.recipeForm = this.fb.group({
      image: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^https:.*/),
        ],
      ],
      title: ['', [Validators.required, Validators.minLength(2)]],
      category: '',
      rating: [
        '',
        [Validators.required, Validators.min(2), Validators.max(10)],
      ],
      summary: ['', [Validators.required, Validators.minLength(2)]],
      ingredients: '',
      timeToComplete: '',
      procedure: '',
    });
  }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id'); // From URL
    let id = this.route.snapshot.paramMap.get('id') as string;

    this.RecipeServiceService.getRecipeById(id).then((data) => {
      console.log(data);
      // this.movieForm.setValue vs this.movieForm.patchValue
      this.recipeForm.patchValue(data);
    });
  }
  editrecipe() {
    // let id = this.route.snapshot.paramMap.get('id') as string;
    if (this.recipeForm.valid) {
      let updatedrecipe: Recipe = this.recipeForm.value;

      this.RecipeServiceService.editrecipe(updatedrecipe).then(() => {
        this.router.navigate(['search']);
      });
    }
  }
  get title() {
    return this.recipeForm.get('title');
  }
  get image() {
    return this.recipeForm.get('image');
  }
  get rating() {
    return this.recipeForm.get('rating');
  }
}
