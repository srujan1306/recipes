import { Injectable } from '@angular/core';
import { Newrecipe } from './recipe';
import { Recipe } from './app.component';
const API = 'https://669a428d9ba098ed61fef756.mockapi.io';
@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  recipes: any = [
    {
      id: '1',
      title: 'Spaghetti Carbonara',
      image:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&resize=440,400',
      ingredients: [
        'spaghetti',
        'eggs',
        'parmesan cheese',
        'pancetta',
        'black pepper',
      ],
      timeToComplete: '30 minutes',
      procedure: [
        'Cook the spaghetti in salted boiling water.',
        'Fry the pancetta until crispy.',
        'Mix eggs and parmesan cheese in a bowl.',
        'Combine the spaghetti with the pancetta, then add the egg mixture off the heat.',
        'Season with black pepper and serve.',
      ],
      category: 'non-veg',
      rating: '10',
      summary:
        "Classic Italian pasta dish with spaghetti, eggs, parmesan cheese, and crispy pancetta. Ready in 30 minutes, it's creamy and seasoned with black pepper.",
    },
    {
      id: '2',
      title: 'Margherita Pizza',
      image:
        'https://recipes.timesofindia.com/thumb/56868564.cms?width=1200&height=900',
      ingredients: [
        'pizza dough',
        'tomato sauce',
        'mozzarella cheese',
        'basil leaves',
        'olive oil',
      ],
      timeToComplete: '1 hour',
      procedure: [
        'Preheat the oven to 475°F (245°C).',
        'Roll out the pizza dough on a floured surface.',
        'Spread tomato sauce over the dough.',
        'Sprinkle mozzarella cheese on top.',
        'Bake for 10-12 minutes until the crust is golden and the cheese is bubbly.',
        'Add fresh basil leaves and drizzle with olive oil before serving.',
      ],
      category: 'veg',
      rating: '7',
      summary:
        'Simple vegetarian pizza with tomato sauce, mozzarella cheese, and fresh basil. Bakes in 10-12 minutes at 475°F, drizzled with olive oil before serving.',
    },
    {
      id: '3',
      title: 'Chicken Tikka Masala',
      image:
        'https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG',
      ingredients: [
        'chicken',
        'yogurt',
        'garlic',
        'ginger',
        'tomato puree',
        'cream',
        'spices',
      ],
      timeToComplete: '1 hour 30 minutes',
      procedure: [
        'Marinate the chicken in yogurt, garlic, ginger, and spices for at least 1 hour.',
        'Grill the marinated chicken until cooked through.',
        'Prepare the sauce with tomato puree, cream, and spices.',
        'Combine the grilled chicken with the sauce and simmer for 20 minutes.',
        'Serve with rice or naan.',
      ],
      category: 'non-veg',
      rating: '9',
      summary:
        'Marinated and grilled chicken in a creamy tomato-based sauce with spices. Takes 1 hour 30 minutes, perfect with rice or naan.',
    },
    {
      id: '4',
      title: 'Vegetable Stir Fry',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kuBaXOs142J09xLojqLWQobGbx-9iloy-A&s',
      ingredients: [
        'broccoli',
        'carrots',
        'bell peppers',
        'soy sauce',
        'ginger',
        'garlic',
        'sesame oil',
      ],
      timeToComplete: '20 minutes',
      procedure: [
        'Heat sesame oil in a wok or large pan.',
        'Add garlic and ginger, sauté for 1 minute.',
        'Add broccoli, carrots, and bell peppers, and stir-fry for 5-7 minutes.',
        'Add soy sauce and cook for another 2 minutes.',
        'Serve hot with rice or noodles.',
      ],
      category: 'veg',
      rating: '8.5',
      summary:
        'Quick 20-minute dish with broccoli, carrots, bell peppers, and soy sauce. Stir-fried with garlic and ginger, served with rice or noodles.',
    },
    {
      id: '5',
      title: 'Beef Tacos',
      image:
        'https://carlsbadcravings.com/wp-content/uploads/2022/02/Shredded-Beef-Tacos-featured.jpg',
      ingredients: [
        'ground beef',
        'taco seasoning',
        'taco shells',
        'lettuce',
        'tomato',
        'cheese',
        'sour cream',
      ],
      timeToComplete: '25 minutes',
      procedure: [
        'Cook ground beef in a pan until browned.',
        'Add taco seasoning and water, and simmer for 10 minutes.',
        'Warm taco shells in the oven or microwave.',
        'Fill taco shells with beef mixture, lettuce, tomato, cheese, and sour cream.',
        'Serve immediately.',
      ],
      category: 'non-veg',
      rating: '8',
      summary:
        'Ground beef seasoned with taco mix, served in warm taco shells with lettuce, tomato, cheese, and sour cream. Ready in 25 minutes for a flavorful meal.',
    },
    {
      id: '6',
      title: 'Caprese Salad',
      image:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg',
      ingredients: [
        'tomatoes',
        'mozzarella cheese',
        'basil leaves',
        'olive oil',
        'balsamic vinegar',
        'salt',
        'pepper',
      ],
      timeToComplete: '10 minutes',
      procedure: [
        'Slice tomatoes and mozzarella cheese.',
        'Arrange tomato and mozzarella slices alternately on a plate.',
        'Top with fresh basil leaves.',
        'Drizzle with olive oil and balsamic vinegar.',
        'Season with salt and pepper to taste.',
      ],
      category: 'veg',
      rating: '8.5',
      summary:
        'Fresh salad with sliced tomatoes, mozzarella, & basil leaves. Drizzled with olive oil & balsamic vinegar, seasoned with salt & pepper, ready in 10 minutes.',
    },
    {
      id: '7',
      title: 'Butter Chicken',
      image:
        'https://www.simplyrecipes.com/thmb/LYwosfrO2cGCT2_bGS5wIeHRnd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-1-f8a0cd09ea9442ce93651887f164db03.jpg',
      ingredients: [
        'chicken',
        'butter',
        'tomato puree',
        'cream',
        'garlic',
        'ginger',
        'spices',
      ],
      timeToComplete: '1 hour 15 minutes',
      procedure: [
        'Marinate the chicken with garlic, ginger, and spices for at least 1 hour.',
        'Cook the chicken in a pan until golden brown.',
        'Prepare the sauce with butter, tomato puree, cream, and spices.',
        'Add the chicken to the sauce and simmer for 20 minutes.',
        'Serve with rice or naan.',
      ],
      category: 'non-veg',
      rating: '9',
      summary:
        'Marinated chicken cooked in a rich butter and cream sauce with spices. Takes 1 hour 15 minutes, best enjoyed with rice or naan.',
    },
    {
      id: '8',
      title: 'Vegetable Curry',
      image:
        'https://img.taste.com.au/kUVCKnrN/taste/2016/11/indian-style-vegetable-curry-59371-1.jpeg',
      ingredients: [
        'potatoes',
        'carrots',
        'peas',
        'coconut milk',
        'curry powder',
        'onion',
        'garlic',
        'ginger',
      ],
      timeToComplete: '40 minutes',
      procedure: [
        'Heat oil in a pan and sauté onions, garlic, and ginger.',
        'Add curry powder and cook for 1 minute.',
        'Add potatoes and carrots, and cook for 5 minutes.',
        'Pour in coconut milk and simmer for 20 minutes.',
        'Add peas and cook for another 5 minutes.',
        'Serve hot with rice or bread.',
      ],
      category: 'veg',
      rating: '9',
      summary:
        'Flavorful curry with potatoes, carrots, peas, and coconut milk, spiced with curry powder. Ready in 40 minutes, served hot with rice or bread.',
    },
  ];

  getrecipes(): Promise<Recipe> {
    return fetch(`${API}/recipes`).then((res) => res.json());
  }
  delete_the_recipe(recipe_to_be_deleted: any) {
    return fetch(`${API}/recipes/${recipe_to_be_deleted.id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  getrecipebyindex(idx: any) {
    return this.recipes[idx];
  }
  getRecipeById(id: string) {
    return fetch(`${API}/recipes/${id}`).then((res) => res.json());
  }
  addrecipe(recipeadd: Newrecipe) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`https://669a428d9ba098ed61fef756.mockapi.io/recipes`, {
      method: 'POST',
      body: JSON.stringify(recipeadd),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

  editrecipe(updatedrecipe: Recipe) {
    // this.movieList.push(newMovie);

    // Put
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(
      `https://6402db84f61d96ac487212a6.mockapi.io/movies/${updatedrecipe.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(updatedrecipe),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then((res) => res.json());
  }
}
