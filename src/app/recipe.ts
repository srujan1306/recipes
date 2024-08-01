import { Recipe } from './app.component';

export type Newrecipe = Omit<Recipe, 'id'>;
