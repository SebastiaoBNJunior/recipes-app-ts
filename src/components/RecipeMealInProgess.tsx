import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMealsByIdRecipe } from '../api';
import { ReturnFetchMealsByIdRecipe } from '../typesCleidson';

function RecipeMealInProgress() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<ReturnFetchMealsByIdRecipe>();
  const [ingredientStatus, setIngredientStatus] = useState<Record<string, boolean>>({});
  const [mealsFilter, setMealsFilter] = useState<Array<[string, string]>>([]);

  function getCheckedIngredientsFromLocalStorage(localId) {
    const inProgressRecipes = JSON.parse(localStorage
      .getItem('inProgressRecipes') || '{}');
    const inProgressMeals = inProgressRecipes.meals || {};
    const loadedIngredients = inProgressMeals[localId] || [];
    const loadedIngredientStatus = {};

    loadedIngredients.forEach((ingredient) => {
      const ingredientName = ingredient;
      // console.log(ingredientName);
      loadedIngredientStatus[ingredientName] = loadedIngredients.includes(ingredientName);
    });
    // console.log(loadedIngredientStatus);
    // console.log(inProgressRecipes);
    return loadedIngredientStatus;
  }

  async function returnMealsAPI() {
    const mealsAPI = await fetchMealsByIdRecipe(id);
    const data = await mealsAPI.json();
    setRecipeData(data);
  }

  useEffect(() => {
    const loadedIngredients = getCheckedIngredientsFromLocalStorage(id);
    setIngredientStatus(loadedIngredients);
    returnMealsAPI();
  }, [id]);

  useEffect(() => {
    if (recipeData) {
      const { meals } = recipeData;
      const [meal] = meals;
      const ingredientOfArray = Object.entries(meal);
      const filteredIngredients = ingredientOfArray
        .filter((ingredient) => ingredient[0].includes('strIngredient'))
        .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null);

      setMealsFilter(filteredIngredients);
    }
  }, [recipeData]);

  const toggleIngredStatus = (ingredientName: string) => {
    setIngredientStatus((prevStatus) => {
      const newStatus = { ...prevStatus };

      if (newStatus[ingredientName]) {
        delete newStatus[ingredientName];
      } else {
        newStatus[ingredientName] = true;
      }

      const inProgressRecipes = JSON.parse(localStorage
        .getItem('inProgressRecipes') || '{}');
      const inProgressMeals = inProgressRecipes.meals || {};
      inProgressMeals[id] = Object.keys(newStatus);
      inProgressRecipes.meals = inProgressMeals;
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));

      return newStatus;
    });
  };
  // console.log(ingredientStatus);

  if (!recipeData) {
    return <div>Carregando...</div>;
  }

  const { meals } = recipeData;
  const [meal] = meals;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
      />
      <h1 data-testid="recipe-title">{meal.strMeal}</h1>
      <p data-testid="recipe-category">{meal.strCategory}</p>
      <h2>Ingredientes:</h2>
      <div>
        {mealsFilter.map((ingredient, index) => (
          <span key={ index }>
            <label
              htmlFor={ String(ingredient) }
              data-testid={ `${index}-ingredient-step` }
              style={ {
                textDecoration: ingredientStatus[ingredient[1]]
                  ? 'line-through solid rgb(0, 0, 0)'
                  : 'none',
              } }
            >
              <input
                type="checkbox"
                name={ String(ingredient) }
                checked={ ingredientStatus[ingredient[1]] || false }
                onChange={ () => toggleIngredStatus(ingredient[1]) }
              />
              {ingredient[1]}
            </label>
          </span>
        ))}
      </div>
      <h2>Instruções:</h2>
      <p data-testid="instructions">{meal.strInstructions}</p>
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default RecipeMealInProgress;
