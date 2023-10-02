import RecipeCard from './RecipeCard';
import { useRecipeContext } from '../context/search-results-context';

function MealRecipeList() {
  const { mealResults, clickButton, filterMealsCategory,
    setClickButton } = useRecipeContext();
  const { meals } = filterMealsCategory;

  // if (filterCategories.length === 1) {
  //   // Se a categoria retornar apenas um resultado, não renderize o RecipeCard.
  //   return null;
  // }
  console.log(filterMealsCategory);

  const limitedRecipes = mealResults.slice(0, 12);
  const mealsFiltered = meals.slice(0, 12);

  return (
    <div>
      {
!clickButton ? limitedRecipes.map((recipe: any, index: number) => (
  <RecipeCard
    key={ recipe.idMeal }
    index={ index }
    id={ recipe.idMeal }
    name={ recipe.strMeal }
    image={ recipe.strMealThumb }
  />
)) : mealsFiltered.map((meal: any, index: number) => (
  <RecipeCard
    key={ meal.idMeal }
    index={ index }
    id={ meal.idMeal }
    name={ meal.strMeal }
    image={ meal.strMealThumb }
  />
))
}
    </div>
  );
}

export default MealRecipeList;
