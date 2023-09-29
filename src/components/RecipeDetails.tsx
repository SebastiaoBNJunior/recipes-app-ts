import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams(); // Obtém o ID da receita dos parâmetros da URL
  const [recipe, setRecipe] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        let endpoint = '';
        if (window.location.pathname.includes('meals')) {
          endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        } else if (window.location.pathname.includes('drinks')) {
          endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        }

        const response = await fetch(endpoint);
        const data = await response.json();
        setRecipe(data.meals ? data.meals[0] : data.drinks[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar detalhes da receita:', error);
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  function arrayToRender() {
    const recipeKeys = Object.keys(recipe);
    const ingredients = recipeKeys.filter((key) => key.startsWith('strIngredient'));

    return ingredients;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!recipe) {
    return <div>Receita não encontrada.</div>;
  }

  arrayToRender();

  return (
    <div>
      <img
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
        alt="Foto da Receita"
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">{recipe.strMeal || recipe.strDrink}</h2>
      {recipe.strCategory && <p data-testid="recipe-category">{recipe.strCategory}</p>}
      {recipe.strAlcoholic && <p data-testid="recipe-category">{recipe.strAlcoholic}</p>}
      <h3>Ingredientes:</h3>
      <ul>
        {arrayToRender().map((_, index) => {
          const ingredientName = recipe[`strIngredient${index + 1}`];
          const ingredientMeasure = recipe[`strMeasure${index + 1}`];
          if (ingredientName) {
            return (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {ingredientName}
                {' '}
                -
                {' '}
                {ingredientMeasure}
              </li>
            );
          }

          return null;
        })}
      </ul>
      <h3>Instruções:</h3>
      <p data-testid="instructions">{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <div>
          <h3>Vídeo de Preparação:</h3>
          <iframe
            title="Vídeo de Preparação"
            width="560"
            height="315"
            src={ `https://www.youtube.com/embed/${recipe.strYoutube.substr(-11)}` }
            allowFullScreen
            data-testid="video"
          />
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
