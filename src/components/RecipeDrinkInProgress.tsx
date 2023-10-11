import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDrinksByIdRecipe } from '../api';
import { ReturnFetchDrinksByIdRecipe } from '../typesCleidson';

function RecipeDrinkInProgress() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<ReturnFetchDrinksByIdRecipe>();
  const [ingredientStatus, setIngredientStatus] = useState<Record<string, boolean>>({});
  const [drinksFilter, setDrinksFilter] = useState<Array<[string, string]>>([]);

  function getCheckedIngredientsFromLocalStorage(id) {
    const inProgressRecipes = JSON.parse(localStorage
      .getItem('inProgressRecipes') || '{}');
    const inProgressDrinks = inProgressRecipes.drinks || {};
    const loadedIngredients = inProgressDrinks[id] || [];
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

  async function returnDrinksAPI() {
    const drinksAPI = await fetchDrinksByIdRecipe(id);
    const data = await drinksAPI.json();
    setRecipeData(data);
  }

  useEffect(() => {
    const loadedIngredients = getCheckedIngredientsFromLocalStorage(id);
    setIngredientStatus(loadedIngredients);
    returnDrinksAPI();
  }, [id]);

  useEffect(() => {
    if (recipeData) {
      const { drinks } = recipeData;
      const [drink] = drinks;
      const ingredientOfArray = Object.entries(drink);
      const filteredIngredients = ingredientOfArray
        .filter(ingredient => ingredient[0].includes('strIngredient'))
        .filter(ingredient => ingredient[1] !== '' && ingredient[1] !== null);

      setDrinksFilter(filteredIngredients);
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
      const inProgressDrinks = inProgressRecipes.drinks || {};
      inProgressDrinks[id] = Object.keys(newStatus);
      inProgressRecipes.drinks = inProgressDrinks;
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));

      return newStatus;
    });
  };

  if (!recipeData) {
    return <div>Carregando...</div>;
  }

  const { drinks } = recipeData;
  const [drink] = drinks;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ drink.strDrinkThumb }
        alt={ drink.strDrink }
      />
      <h1 data-testid="recipe-title">{ drink.strDrink }</h1>
      <p data-testid="recipe-category">{ drink.strCategory }</p>
      {drink.strAlcoholic && (
        <p data-testid="recipe-alcoholic">Alcoholic</p>
      )}
      <h2>Ingredients:</h2>
      <div>
        {drinksFilter.map((ingredient, index) => (
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
                onClick={ () => toggleIngredStatus(ingredient[1]) }
              />
              {ingredient[1]}
            </label>
          </span>
        ))}
      </div>
      <h2>Instructions:</h2>
      <p data-testid="instructions">{drink.strInstructions}</p>
      <button data-testid="finish-recipe-btn">Finish Recipe</button>
    </div>
  );
}

export default RecipeDrinkInProgress;
