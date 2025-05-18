import React, { useState } from 'react';

const RECIPES = [
  {
    name: 'Scrambled Eggs with Spinach',
    ingredients: ['4 eggs', '1 cup fresh spinach', '1 tbsp butter', 'salt and pepper to taste'],
    instructions: 'Whisk eggs with salt and pepper. Melt butter in a pan over medium heat, add spinach and cook until wilted. Pour in eggs and gently stir until just set. Serve immediately.'
  },
  {
    name: 'Avocado Toast',
    ingredients: ['2 slices of bread', '1 ripe avocado', '1 tsp lemon juice', 'salt, pepper, and chili flakes'],
    instructions: 'Toast the bread. Mash avocado with lemon juice, salt, and pepper. Spread on toast and sprinkle chili flakes on top.'
  },
  {
    name: 'Chicken Stir-Fry',
    ingredients: ['2 chicken breasts (sliced)', '1 bell pepper', '1 cup broccoli florets', '2 tbsp soy sauce', '1 tbsp oil', '1 clove garlic (minced)'],
    instructions: 'Heat oil in a wok over high heat, sauté garlic until fragrant. Add chicken and cook through. Add vegetables and stir-fry for 3–4 minutes. Stir in soy sauce and serve over rice or noodles.'
  },
  {
    name: 'Spaghetti Aglio e Olio',
    ingredients: ['200g spaghetti', '3 cloves garlic (sliced)', '1/4 cup olive oil', '1/2 tsp red pepper flakes', 'parsley (chopped)'],
    instructions: 'Cook spaghetti until al dente. Meanwhile, heat oil in a pan, add garlic and red pepper flakes and cook until garlic is golden. Toss spaghetti with the garlic oil and parsley; season with salt and serve.'
  },
  {
    name: 'Greek Salad',
    ingredients: ['2 tomatoes', '1 cucumber', '1/2 red onion', '1/2 cup feta cheese', '10 olives', '2 tbsp olive oil', '1 tbsp red wine vinegar', 'oregano'],
    instructions: 'Chop tomatoes, cucumber, and onion. Toss with olives and feta. Whisk oil, vinegar, oregano, salt, and pepper; drizzle over salad and toss gently.'
  },
  {
    name: 'Fluffy Pancakes',
    ingredients: ['1 cup all-purpose flour', '1 tbsp sugar', '1 tsp baking powder', '1 cup milk', '1 egg', '2 tbsp melted butter'],
    instructions: 'Mix dry ingredients in a bowl. In another bowl, whisk milk, egg, and butter. Combine until just mixed. Cook batter by 1/4 cup scoops on a hot greased griddle until bubbles form, flip and cook until golden.'
  },
  {
    name: 'Easy Guacamole',
    ingredients: ['2 ripe avocados', '1/4 cup diced onion', '1 tomato (diced)', '1 tbsp lime juice', 'salt and cilantro'],
    instructions: 'Mash avocados in a bowl. Stir in onion, tomato, lime juice, chopped cilantro, and salt. Adjust seasoning and serve with chips.'
  },
  {
    name: 'Berry Banana Smoothie',
    ingredients: ['1 banana', '1/2 cup mixed berries', '1/2 cup yogurt', '1/2 cup milk or juice', '1 tsp honey (optional)'],
    instructions: 'Combine all ingredients in a blender and blend until smooth. Pour into a glass and enjoy chilled.'
  },
  {
    name: 'Beef Tacos',
    ingredients: ['500g ground beef', '1 packet taco seasoning', '8 taco shells', 'lettuce, cheese, salsa, sour cream'],
    instructions: 'Cook beef in a skillet over medium heat until browned. Add seasoning and water as directed, simmer 5 minutes. Fill shells with beef and desired toppings.'
  },
  {
    name: 'Chocolate Chip Cookies',
    ingredients: ['1/2 cup butter', '1/2 cup sugar', '1/2 cup brown sugar', '1 egg', '1 tsp vanilla', '1 1/4 cups flour', '1/2 tsp baking soda', '1 cup chocolate chips'],
    instructions: 'Cream butter and sugars, beat in egg and vanilla. Stir in flour and baking soda, then chocolate chips. Scoop onto a baking sheet and bake at 350°F (175°C) for 8–10 minutes until golden at edges.'
  }
]

const Puzzle10 = () => {

  const [recipeIdx, setRecipeIdx] = useState(0);

  const generateNewRecipe = () => {
    setRecipeIdx(Math.floor(Math.random() * RECIPES.length))
  }

  return (
    <div>
      <h2>{RECIPES[recipeIdx].name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {
          RECIPES[recipeIdx].ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))
        }
      </ul>
      <p>{RECIPES[recipeIdx].instructions}</p>
      <button onClick={generateNewRecipe}>Generate a new recipe</button>
    </div>
  );
};

export default Puzzle10;
