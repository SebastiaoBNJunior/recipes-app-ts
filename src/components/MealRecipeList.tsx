import RecipeCard from './RecipeCard';

interface RecipeListProps {
  recipes: Array<{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }>;
}

interface FilterCategoryProps {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

interface CombineProps {
  recipes: RecipeListProps;
  filterCategory: FilterCategoryProps[];
}

function MealRecipeList({ recipes, filterCategory }: CombineProps) {
  const limitedRecipes = recipes.slice(0, 12);

  return (
    <div>
      {limitedRecipes.map((recipe: any, index: number) => (
        <RecipeCard
          key={ recipe.idMeal }
          index={ index }
          id={ recipe.idMeal }
          name={ recipe.strMeal }
          image={ recipe.strMealThumb }
        />
      ))}
    </div>
  );
}

export default MealRecipeList;
