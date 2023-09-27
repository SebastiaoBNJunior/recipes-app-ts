import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMealsByIdRecipe, fetchDrinksByIdRecipe } from '../api';

// type IdRecipe = {
//   id: string
// };

function RecipeDetails(/* { match }:{ match: any;} */): JSX.Element {
  const [fetchMeals, setFetchMeals] = useState();
  const [fetchDrink, setFetchDrink] = useState();
  const params = useParams();
  const { id } = params;
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname);
  // console.log(fetchMeals);
  // console.log(fetchDrink);

  async function fetchAPI() {
    if (pathname.includes('drinks')) {
      const dataDrink = await fetchDrinksByIdRecipe(id);
      return dataDrink;
    }
    const dataMeal = await fetchMealsByIdRecipe(id);
    return dataMeal;
  }

  useEffect(() => {
    fetchAPI();
  }, [pathname]);

  return (
    <span>gato</span>
  );
}

export default RecipeDetails;
