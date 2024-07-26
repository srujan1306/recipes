import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllrecipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'recipes';
}
