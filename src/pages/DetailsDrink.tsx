import StartRecipeButton from '../components/StartRecipeButton';
import RecipeDetails from '../components/RecipeDetails';
import MainScreenDrink from '../components/RecomendedDrinks';
import ShareFavBtn from '../components/ShereFavBtn';

function DetailsDrink() {
  return (
    <>
      <ShareFavBtn />
      <RecipeDetails />
      <StartRecipeButton />
      <MainScreenDrink />
    </>
  );
}

export default DetailsDrink;
