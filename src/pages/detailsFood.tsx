import StartRecipeButton from '../components/StartRecipeButton';
import RecipeDetails from '../components/RecipeDetails';
import MainScreenFood from '../components/RecomendedFood';
import ShareFavBtn from '../components/ShereFavBtn';

function DetailsFood() {
  return (
    <>
      <ShareFavBtn />
      <RecipeDetails />
      <StartRecipeButton />
      <MainScreenFood />
    </>
  );
}

export default DetailsFood;
