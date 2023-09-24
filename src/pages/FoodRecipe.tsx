// import Footer from '../components/Footer';
import Header from '../components/Header';
import MealRecipeList from '../components/MealRecipeList';
import { useRecipeContext } from '../context/search-results-context';

function FoodRecipe() {
  const { mealResults } = useRecipeContext();

  return (
    <>
      <Header title="Meals" search />
      {mealResults.length > 0 ? (
        <MealRecipeList recipes={ mealResults } />
      ) : (
        <p>Nenhum resultado encontrado para comidas.</p>
      )}
    </>
  );
}

export default FoodRecipe;
