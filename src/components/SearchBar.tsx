import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  fetchMealsByFirstLetter,
  fetchMealsByIngredient,
  fetchMealsByName,
  fetchDrinksByFirstLetter,
  fetchDrinksByIngredient,
  fetchDrinksByName,
} from '../api';
import { useRecipeContext } from '../context/search-results-context';

type SearchType = 'ingredient' | 'name' | 'first-letter';

type ComponentsProps = {
  valueInput: string;
};

function SearchBar(props:ComponentsProps) {
  const { valueInput } = props;
  const [searchType, setSearchType] = useState<SearchType>('ingredient');
  // const [searchQuery, setSearchQuery] = useState<string>('');
  const { setDrinkResults, setMealResults } = useRecipeContext();
  const location = useLocation();

  const navigate = useNavigate();
  const FIRST_LETTER = 'first-letter';
  const isDrinksPage = location.pathname.includes('/drinks');

  const fetchRecipeData = async (fetchFunction: () => Promise<Response>) => {
    try {
      const response = await fetchFunction();
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }
  };

  const isInvalidFirstLetterSearch = () => {
    return searchType === FIRST_LETTER && valueInput.length !== 1;
  };

  const shouldShowNoResultsAlert = (jsonData: any) => {
    return (
      (!jsonData.meals || !Array.isArray(jsonData.meals) || jsonData.meals.length === 0)
      && (!jsonData.drinks || !Array
        .isArray(jsonData.drinks) || jsonData.drinks.length === 0)
    );
  };

  const updateResults = (jsonData: any) => {
    if (isDrinksPage) {
      setDrinkResults(jsonData.drinks || []);
      setMealResults([]);
    } else {
      setMealResults(jsonData.meals || []);
      setDrinkResults([]);
    }
  };

  const handleSearch = async () => {
    console.log('Foi clicado no botão buscar com o Salt');
    const fetchFunction = determineFetchFunction();
    const jsonData = await fetchRecipeData(fetchFunction);

    if (isInvalidFirstLetterSearch()) {
      alert('Your search must have only 1 (one) character');
      return;
    }

    if (shouldShowNoResultsAlert(jsonData)) {
      alert("Sorry, we haven't found any recipes for these filters.");
      return;
    }

    updateResults(jsonData);

    if (jsonData.meals?.length === 1) {
      const recipeId = jsonData.meals[0].idMeal;
      navigate(`/meals/${recipeId}`);
    } else if (jsonData.drinks?.length === 1) {
      const recipeId = jsonData.drinks[0].idDrink;
      navigate(`/drinks/${recipeId}`);
    }
  };

  const determineFetchFunction = () => {
    if (isDrinksPage) {
      if (searchType === 'ingredient') {
        return () => fetchDrinksByIngredient(valueInput);
      } if (searchType === 'name') {
        return () => fetchDrinksByName(valueInput);
      } if (searchType === FIRST_LETTER) {
        return () => fetchDrinksByFirstLetter(valueInput);
      }
    } else {
      if (searchType === 'ingredient') {
        return () => fetchMealsByIngredient(valueInput);
      } if (searchType === 'name') {
        return () => fetchMealsByName(valueInput);
      } if (searchType === FIRST_LETTER) {
        return () => fetchMealsByFirstLetter(valueInput);
      }
    }
    throw new Error('Invalid search type');
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="search-type"
          value="ingredient"
          data-testid="ingredient-search-radio"
          checked={ searchType === 'ingredient' }
          onChange={ () => setSearchType('ingredient') }
        />
        Ingrediente
      </label>

      <label>
        <input
          type="radio"
          name="search-type"
          value="name"
          data-testid="name-search-radio"
          checked={ searchType === 'name' }
          onChange={ () => setSearchType('name') }
        />
        Nome
      </label>

      <label>
        <input
          type="radio"
          name="search-type"
          value="first-letter"
          data-testid="first-letter-search-radio"
          checked={ searchType === FIRST_LETTER }
          onChange={ () => setSearchType(FIRST_LETTER) }
        />
        Primeira Letra
      </label>

      <button type="button" data-testid="exec-search-btn" onClick={ handleSearch }>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
