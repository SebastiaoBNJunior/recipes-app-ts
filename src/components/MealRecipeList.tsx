import { useLocation } from 'react-router-dom';
import RecipeCard from './RecipeCard';

// interface FilterCategoryProps {
//   strDrink: string;
//   strDrinkThumb: string;
//   idDrink: string;
// }

// interface ClickButtonProps {
//   click: boolean | undefined;
// }

interface RecipeListProps {
  recipes: Array<{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }>;
  filter: Array<{ // Conferir essa tipagem //
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }>;
  click: boolean | undefined;
}

function MealRecipeList(
  { recipes, filter, click }: RecipeListProps,
) {
  console.log(filter); // Attention //
  console.log(click); // Attention //
  console.log(recipes); // Attention //

  const limitedRecipes = recipes.slice(0, 12);

  return (
    <div>
      {
      !click ? limitedRecipes.map((recipe: any, index: number) => (
        <RecipeCard
          key={ recipe.idMeal }
          index={ index }
          id={ recipe.idMeal }
          name={ recipe.strMeal }
          image={ recipe.strMealThumb }
        />
      )) : recipes.map((recipe: any, index: number) => (
        <RecipeCard
          key={ recipe.idMeal }
          index={ index }
          id={ recipe.idMeal }
          name={ recipe.strMeal }
          image={ recipe.strMealThumb }
        />
      ))
      }
    </div>
  );
}

export default MealRecipeList;
