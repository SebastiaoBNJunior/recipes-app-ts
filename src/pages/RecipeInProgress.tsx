import { useLocation } from 'react-router-dom';
import RecipeDrinkInProgress from '../components/RecipeDrinkInProgress';
import RecipeMealInProgress from '../components/RecipeMealInProgess';
import ShareFavBtn from '../components/ShereFavBtn';
import StartRecipeButton from '../components/StartRecipeButton';

function RecipeInProgress() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  return (
    <div>
      <ShareFavBtn />
      {
        pathname.includes('drinks') ? <RecipeDrinkInProgress /> : <RecipeMealInProgress />
      }
      <StartRecipeButton />
    </div>

  );
}

export default RecipeInProgress;
