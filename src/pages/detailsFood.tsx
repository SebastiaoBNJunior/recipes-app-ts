import StartRecipeButton from '../components/StartRecipeButton';
import RecipeDetails from '../components/RecipeDetails';
import MainScreenFood from '../components/RecomendedFood';
import ShareFavBtn from '../components/ShereFavBtn';
import RecommendedtoDrink from '../components/RecommendedToDrink';

function DetailsFood() {
  return (
    <>
      <ShareFavBtn />
      <RecipeDetails />
      <StartRecipeButton />
      <RecommendedtoDrink />
      <MainScreenFood />
    </>
  );
}

export default DetailsFood;
