import RecipeCard from './RecipeCard';
import { useRecipeContext } from '../context/search-results-context';

function DrinkRecipeList() {
  const { drinkResults, clickButton, filterDrinksCategory,
    setClickButton } = useRecipeContext();
  const { drinks } = filterDrinksCategory;

  // if (filterCategories.length === 1) {
  //   // Se a categoria retornar apenas um resultado, não renderize o RecipeCard.
  //   return null;
  // }
  console.log(filterDrinksCategory);

  const limitedRecipes = drinkResults.slice(0, 12);
  const drinksFiltered = drinks.slice(0, 12);

  return (
    <div>
      {
!clickButton ? limitedRecipes.map((recipe: any, index: number) => (
  <RecipeCard
    key={ recipe.idDrink }
    index={ index }
    id={ recipe.idDrink }
    name={ recipe.strDrink }
    image={ recipe.strDrinkThumb }
  />
)) : drinksFiltered.map((drink: any, index: number) => (
  <RecipeCard
    key={ drink.idDrink }
    index={ index }
    id={ drink.idDrink }
    name={ drink.strDrink }
    image={ drink.strDrinkThumb }
  />
))
}
    </div>
  );
}

export default DrinkRecipeList;
