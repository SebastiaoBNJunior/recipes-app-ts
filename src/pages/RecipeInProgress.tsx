import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipeDrinkInProgress from '../components/RecipeDrinkInProgress';
import RecipeMealInProgress from '../components/RecipeMealInProgess';
import ShareFavBtn from '../components/ShereFavBtn';
import StartRecipeButton from '../components/StartRecipeButton';
import { useRecipeContext } from '../context/search-results-context';

function RecipeInProgress() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  const { setRecipe } = useRecipeContext();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        let endpoint = '';
        if (window.location.pathname.includes('meals')) {
          endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        } else if (window.location.pathname.includes('drinks')) {
          endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        }

        const response = await fetch(endpoint);
        const data = await response.json();
        setRecipe(data.meals ? data.meals[0] : data.drinks[0]);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar detalhes da receita:', error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

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
