import React, { useEffect } from 'react';
import { useRecipeContext } from '../context/search-results-context';
import RecipeList from '../components/MealRecipeList';
import DrinkRecipeList from '../components/DrinkRecipeList';
import { fetchMealsByName, fetchDrinksByName } from '../api';

type RecipesProps = {
  type: 'meals' | 'drinks';
};

function Recipes({ type }: RecipesProps) {
  const { mealResults, setMealResults,
    drinkResults, setDrinkResults } = useRecipeContext();

  useEffect(() => {
    if (type === 'meals') {
      // Busca as 12 primeiras receitas de comida
      fetchMealsByName('').then((response) => response.json()).then((data) => {
        setMealResults(data.meals);
      }).catch((error) => {
        console.error('Erro ao buscar refeições:', error);
      });
    } else if (type === 'drinks') {
      // Busca as 12 primeiras receitas de bebida
      fetchDrinksByName('').then((response) => response.json()).then((data) => {
        setDrinkResults(data.drinks);
      }).catch((error) => {
        console.error('Erro ao buscar bebidas:', error);
      });
    }
  }, [setMealResults, setDrinkResults, type]);

  return (
    <div>
      {type === 'meals' && <RecipeList recipes={ mealResults } />}
      {type === 'drinks' && <DrinkRecipeList drinks={ drinkResults } />}
    </div>
  );
}

export default Recipes;
