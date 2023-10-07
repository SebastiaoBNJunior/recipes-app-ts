import StartRecipeButton from '../components/StartRecipeButton';
import RecipeDetails from '../components/RecipeDetails';
import MainScreenDrink from '../components/RecomendedDrinks';
import ShareFavBtn from '../components/ShereFavBtn';
import RecommendedToEat from '../components/RecommendedToEat';

function DetailsDrink() {
  return (
    <>
      <ShareFavBtn />
      <RecipeDetails />
      <StartRecipeButton />
      <RecommendedToEat />
      <MainScreenDrink />
    </>
  );
}

export default DetailsDrink;
