import { useParams } from 'react-router-dom';
// import { fetchMealsByIdRecipe, fetchDrinksByIdRecipe } from '../api';

interface RecipeProps {
  photo: string;
  title: string;
  category: string;
  isAlcoholic: string;
  ingredients: string;
  instructions: string;
}

function RecipeInProgress() {
  const { id } = useParams();

  // async function fetchMeals() {
  //   const response = await fetchMealsByIdRecipe(id);
  //   const data = response.json();
  //   return data;
  // }

  // async function fetchDrinks() {
  //   const response = await fetchDrinksByIdRecipe(id);
  //   const data = response.json();
  //   return data;
  // }

  const recipe = /* FUNÇÃO PARA RETORNAR O OBJETO */ (id);

  if (!recipe) {
    return <div>Receita não encontrada</div>;
  }

  const {
    photo,
    title,
    category,
    isAlcoholic,
    ingredients,
    instructions,
  } = recipe;

  return (
    <div>
      <img src={ photo } alt="Foto da receita" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{ title }</h1>

      {category && (
        <p data-testid="recipe-category">
          Categoria:
          { category }
        </p>
      )}

      {isAlcoholic && (
        <p data-testid="recipe-alcoholic">Alcoólico</p>
      )}

      <h2>Ingredientes:</h2>
      <ul>
        {ingredients.map((ingredient: any, index: any) => (
          <li key={ index }>{ ingredient }</li>
        ))}
      </ul>

      <h2>Instruções:</h2>
      <p data-testid="instructions">{ instructions }</p>

      <button data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn">Favoritar</button>
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default RecipeInProgress;
