import React, { useEffect } from 'react';
import { useRecipeContext } from '../context/search-results-context';
import MealRecipeList from '../components/MealRecipeList';
import DrinkRecipeList from '../components/DrinkRecipeList';
import Header from '../components/Header';
import { fetchMealsByName, fetchDrinksByName } from '../api';

type RecipesProps = {
  type: 'meals' | 'drinks';
};

function Recipes({ type }: RecipesProps) {
  const { mealResults, setMealResults,
    drinkResults, setDrinkResults } = useRecipeContext();

  useEffect(() => {
    if (type === 'meals') {
      fetchMealsByName('').then((response) => response.json()).then((data) => {
        setMealResults(data.meals);
      }).catch((error) => {
        console.error('Erro ao buscar refeições:', error);
      });
    } else if (type === 'drinks') {
      fetchDrinksByName('').then((response) => response.json()).then((data) => {
        setDrinkResults(data.drinks);
      }).catch((error) => {
        console.error('Erro ao buscar bebidas:', error);
      });
    }
  }, [setMealResults, setDrinkResults, type]);

  return (
    <div>
      <Header title={ type === 'meals' ? 'Meals' : 'Drinks' } search />
      {type === 'meals' && <MealRecipeList recipes={ mealResults } />}
      {type === 'drinks' && <DrinkRecipeList drinks={ drinkResults } />}
    </div>
  );
}

export default Recipes;
