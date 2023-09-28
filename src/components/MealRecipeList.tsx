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
    strCategory: string;
  }>;
  filter: Array<{ // Conferir essa tipagem //
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }>;
  click: boolean | undefined;
  category: string;
}

function MealRecipeList(
  { recipes, filter, click, category }: RecipeListProps,
) {
// console.log(filter); // Attention //
  console.log(recipes); // Attention //
  // console.log(category);

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
!click ? limitedRecipes.map((recipe: any, index: number) => (
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
