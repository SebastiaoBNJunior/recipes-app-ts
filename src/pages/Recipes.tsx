import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecipeContext } from '../context/search-results-context';
import MealRecipeList from '../components/MealRecipeList';
import DrinkRecipeList from '../components/DrinkRecipeList';
import Header from '../components/Header';
import { fetchMealsByName, fetchDrinksByName } from '../api';

function Recipes() {
  const { mealResults, setMealResults,
    drinkResults, setDrinkResults } = useRecipeContext();

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname.includes('meals')) {
      console.log('meals');
      fetchMealsByName('').then((response) => response.json()).then((data) => {
        console.log(data);
        setMealResults(data.meals);
      }).catch((error) => {
        console.error('Erro ao buscar refeições:', error);
      });
    } else if (pathname.includes('drinks')) {
      console.log('drinks');
      fetchDrinksByName('').then((response) => response.json()).then((data) => {
        console.log(data);
        setDrinkResults(data.drinks);
      }).catch((error) => {
        console.error('Erro ao buscar bebidas:', error);
      });
    }
  }, []);

  return (
    <>
      <Header title={ pathname.includes('meals') ? 'Meals' : 'Drinks' } search />
      {
        pathname.includes('meals')
          ? <MealRecipeList recipes={ mealResults } />
          : <DrinkRecipeList drinks={ drinkResults } />
      }
    </>
  );
}

export default Recipes;
