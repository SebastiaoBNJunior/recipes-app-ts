import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FilterDrinkContext, FilterMealContext } from '../typesCleidson';

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}
const INITIAL_STATE_MEAL = {
  meals: [{
    strMeal: '',
    strMealThumb: '',
    idMeal: '',
  }],
};
const INITIAL_STATE_DRINK = {
  drinks: [{
    strDrink: '',
    strDrinkThumb: '',
    idDrink: '',
  }],
};

type RecipeContextType = {
  mealResults: Meal[];
  drinkResults: Drink[];
  setMealResults: React.Dispatch<React.SetStateAction<Meal[]>>;
  setDrinkResults: React.Dispatch<React.SetStateAction<Drink[]>>;
  clickButton: boolean;
  setClickButton: React.Dispatch<React.SetStateAction<boolean>>;
  filterMealsCategory: FilterMealContext;
  setFilterMealsCategory: React.Dispatch<React.SetStateAction<FilterMealContext>>;
  filterDrinksCategory: FilterDrinkContext;
  setFilterDrinksCategory: React.Dispatch<React.SetStateAction<FilterDrinkContext>>
};

const RecipeContext = createContext<RecipeContextType>({
  mealResults: [],
  drinkResults: [],
  setMealResults: () => {},
  setDrinkResults: () => {},
  clickButton: false,
  setClickButton: () => {},
  filterMealsCategory: INITIAL_STATE_MEAL,
  setFilterMealsCategory: () => {},
  filterDrinksCategory: INITIAL_STATE_DRINK,
  setFilterDrinksCategory: () => {},
});

export function useRecipeContext() {
  return useContext(RecipeContext);
}

type RecipeProviderProps = {
  children: ReactNode;
};

export function RecipeProvider({ children }: RecipeProviderProps) {
  const [mealResults, setMealResults] = useState<Meal[]>([]);
  const [drinkResults, setDrinkResults] = useState<Drink[]>([]);
  const [clickButton, setClickButton] = useState(false);
  const [filterMealsCategory, setFilterMealsCategory] = useState(INITIAL_STATE_MEAL);
  const [filterDrinksCategory, setFilterDrinksCategory] = useState(INITIAL_STATE_DRINK);

  return (
    <RecipeContext.Provider
      value={ {
        mealResults,
        setMealResults,
        drinkResults,
        setDrinkResults,
        clickButton,
        setClickButton,
        filterMealsCategory,
        setFilterMealsCategory,
        filterDrinksCategory,
        setFilterDrinksCategory,
      } }
    >
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeContext;
