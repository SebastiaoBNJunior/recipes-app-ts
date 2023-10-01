import { useLocation } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { useRecipeContext } from '../context/search-results-context';

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
    strCategory: string;
  }>;
  filter: Array<{ // Conferir essa tipagem //
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }>;
  category: string;
}

function MealRecipeList(
  { recipes, filter, category }: RecipeListProps,
) {
  const { clickButton } = useRecipeContext();
  console.log(recipes); // Attention //

  function filterCategory(categorySelected:string) {
    const filters = recipes.filter((recipe) => recipe.strCategory === categorySelected);
    if (filters.length > 12) return filters;
    return filters;
  }

  const filterCategories = filterCategory(category);
  // if (filterCategories.length === 1) {
  //   // Se a categoria retornar apenas um resultado, não renderize o RecipeCard.
  //   return null;
  // }
  console.log(filterCategories);

  const limitedRecipes = recipes.slice(0, 12);

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
)) : filterCategories.map((recipe: any, index: number) => (
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
