import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDrinksByIdRecipe } from '../api';
import { ReturnFetchDrinksByIdRecipe } from '../typesCleidson';

function RecipeDrinkInProgress() {
  const { id } = useParams();
  console.log(id);
  const [recipeData, setRecipeData] = useState<ReturnFetchDrinksByIdRecipe>();

  async function returnDrinksAPI() {
    const drinksAPI = await fetchDrinksByIdRecipe(id);
    console.log(drinksAPI);
    const data = await drinksAPI.json();
    console.log(data);
    setRecipeData(data);
  }

  useEffect(() => {
    returnDrinksAPI();
  }, []);

  console.log(recipeData);

  if (!recipeData) {
    return <div>Carregando...</div>;
  }

  const { drinks } = recipeData;
  const [drink] = drinks;
  const ingredientArray = Object.entries(drink);
  console.log(ingredientArray);
  const filterDrinks = ingredientArray.filter((ingredient) => (
    ingredient[0].includes('strIngredient')
  )).filter((ingredient) => ingredient[1] !== null && ingredient[1] !== '');
  console.log(filterDrinks);

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
        {filterDrinks.map((ingredient, index) => (
          <span key={ index }>
            <label
              htmlFor={ String(ingredient) }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                name={ String(ingredient) }
              />
              {ingredient[1]}
            </label>
          </span>
        ))}
      </div>
      <h2>Instructions:</h2>
      <p data-testid="instructions">{drink.strInstructions}</p>
      <button data-testid="share-btn">Share</button>
      <button data-testid="favorite-btn">Favorite</button>
      <button data-testid="finish-recipe-btn">Finish Recipe</button>
    </div>
  );
}

export default RecipeDrinkInProgress;
