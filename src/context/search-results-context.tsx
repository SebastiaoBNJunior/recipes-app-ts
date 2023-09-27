import React, { createContext, useContext, useState, ReactNode } from 'react';

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

type RecipeContextType = {
  mealResults: Meal[];
  drinkResults: Drink[];
  setMealResults: React.Dispatch<React.SetStateAction<Meal[]>>;
  setDrinkResults: React.Dispatch<React.SetStateAction<Drink[]>>;
};

const RecipeContext = createContext<RecipeContextType>({
  mealResults: [],
  drinkResults: [],
  setMealResults: () => {},
  setDrinkResults: () => {},
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

  return (
    <RecipeContext.Provider
      value={ {
        mealResults,
        setMealResults,
        drinkResults,
        setDrinkResults,
      } }
    >
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeContext;
