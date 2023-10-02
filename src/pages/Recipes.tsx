import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecipeContext } from '../context/search-results-context';
import MealRecipeList from '../components/MealRecipeList';

import DrinkRecipeList from '../components/DrinkRecipeList';
import Header from '../components/Header';
import { fetchMealsByName, fetchDrinksByName,
  fetchMealsByCategory, fetchDrinksByCategory,
  fetchFilterMealsByCategory, fetchFilterDrinksByCategory } from '../api';

// type InputButton = React.MouseEvent<HTMLButtonElement>

function Recipes() {
  const { setMealResults, setDrinkResults, setFilterMealsCategory,
    setFilterDrinksCategory, setClickButton } = useRecipeContext();

  const [recipesCategory, setRecipesCategory] = useState({});

  // console.log(clickButton);
  // console.log(filterMealsCategory);

  const location = useLocation();
  const { pathname } = location;

  async function fetchRecipeByCategory() {
    const dataMeal = await fetchMealsByCategory();
    const dataDrinks = await fetchDrinksByCategory();
    switch (pathname) {
      case '/meals':
        setRecipesCategory(dataMeal);
        break;
      case '/drinks':
        setRecipesCategory(dataDrinks);
        break;
      default:
    }
  }

  useEffect(() => {
    fetchRecipeByCategory();
  }, []);

  useEffect(() => {
    if (pathname.includes('meals')) {
      fetchMealsByName('').then((response) => response.json()).then((data) => {
        setMealResults(data.meals);
      }).catch((error) => {
        console.error('Erro ao buscar refeições:', error);
      });
    } else if (pathname.includes('drinks')) {
      fetchDrinksByName('').then((response) => response.json()).then((data) => {
        setDrinkResults(data.drinks);
      }).catch((error) => {
        console.error('Erro ao buscar bebidas:', error);
      });
    }
  }, []);

  async function handleCategoryFilter(category:string) {
    setClickButton(true);
    switch (pathname) {
      case '/meals':
        setFilterMealsCategory(await fetchFilterMealsByCategory(category));
        break;
      case '/drinks':
        setFilterDrinksCategory(await fetchFilterDrinksByCategory(category));
        break;
      default:
    }
  }

  return (
    <>
      <Header title={ pathname.includes('meals') ? 'Meals' : 'Drinks' } search />
      {
Object.values(recipesCategory)
  .map((recipe:any) => recipe.slice(0, 5)
    .map((rc:any, index:number) => (
      <button
        key={ index }
        data-testid={ `${rc.strCategory}-category-filter` }
        value={ rc.strCategory }
        onClick={ () => handleCategoryFilter(rc.strCategory) }
      >
        {rc.strCategory}

      </button>
    )))
}
      <span>
        <button
          onClick={ () => setClickButton(false) }
          data-testid="All-category-filter"
        >
          All

        </button>
      </span>
      {
pathname.includes('meals')
  ? <MealRecipeList />
  : <DrinkRecipeList />
}
    </>
  );
}

export default Recipes;
