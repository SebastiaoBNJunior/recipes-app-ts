import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMealsByIdRecipe } from '../api';
import { ReturnFetchMealsByIdRecipe } from '../typesCleidson';

function RecipeMealInProgress() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<ReturnFetchMealsByIdRecipe>();
  const [ingredientStatus, setIngredientStatus] = useState<{
    [key: number]: boolean;
  }>();

  async function returnMealsAPI() {
    const mealsAPI = await fetchMealsByIdRecipe(id);
    const data = await mealsAPI.json();
    setRecipeData(data);
  }

  useEffect(() => {
    returnMealsAPI();
    localStorage.setItem('inProgressRecipes', JSON.stringify(ingredientStatus));
    if (!ingredientStatus) {
      console.log('aleatorio');
      const initialLocalStorage = {
        drinks: {},
        meals: {
          [id]: [],
        },
      };
      setIngredientStatus(initialLocalStorage);
    }
  }, [ingredientStatus, id]);

  if (!recipeData) {
    return <div>Carregando...</div>;
  }

  const { meals } = recipeData;
  const [meal] = meals;
  const ingredientOfArray = Object.entries(meal);
  const mealsFilter = ingredientOfArray.filter((ingredient) => (
    ingredient[0].includes('strIngredient')
  )).filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null);
  const returnMealsFilter = mealsFilter.map((element) => element[1]);
  console.log(returnMealsFilter);

  const toogleIngredStatus = (ingredient: string) => {
    const returnLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const valor = someRetorno(ingredient);
    if (!valor) {
      const novoEstado = returnLocalStorage.meals[id]
        .filter((element: string) => element === ingredient);
      setIngredientStatus(novoEstado);
    }
    returnLocalStorage.meals[id].push(ingredient);
    setIngredientStatus(returnLocalStorage);
    console.log(returnLocalStorage);
  };

  const someRetorno = (ingredient: string) => {
    const returnLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    return returnLocalStorage.meals[id].some((ingred: string) => ingred === ingredient);
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
      />
      <h1 data-testid="recipe-title">{ meal.strMeal }</h1>
      <p data-testid="recipe-category">{ meal.strCategory }</p>
      <h2>Ingredientes:</h2>
      <div>
        {mealsFilter.map((ingredient, index) => (
          <span key={ index }>
            <label
              htmlFor={ String(ingredient) }
              data-testid={ `${index}-ingredient-step` }
              style={ {
                textDecoration: ingredient[ingredientStatus]
                  ? 'line-through solid rgb(0, 0, 0)'
                  : 'none',
              } }
            >
              <input
                type="checkbox"
                name={ String(ingredient) }
                onClick={ () => toogleIngredStatus(ingredient[1]) }
                checked={ someRetorno(ingredient[1]) }
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
