import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { useRecipeContext } from '../context/search-results-context';

function ShareFavBtn() {
  const { recipe } = useRecipeContext();
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const params = useParams();
  const { id } = params;
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')?.includes(id)) {
      setImagem(blackHeartIcon);
    } else {
      setImagem(whiteHeartIcon);
    }
  }, []);

  function mealOrDrink() {
    if (pathname.includes('meal')) {
      return 'meal';
    } return 'drink';
  }
  const type = mealOrDrink();

  const handleShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
    setCopied(true);
  };

  function handleStorageFavorite() {
    if (localStorage.getItem('favoriteRecipes') !== null) {
      localStorage.removeItem('favoriteRecipes');
      setImagem(whiteHeartIcon);
      // console.log('Valor removido com sucesso.');
    } else {
      setImagem(blackHeartIcon);
      // console.log('O valor não existe na chave.');
    }
    const favorite = [
      { id,
        type,
        nationality: recipe.strArea || '',
        category: recipe.strCategory || '',
        alcoholicOrNot: recipe.strAlcoholic || '',
        name: recipe.strMeal || recipe.strDrink,
        image: recipe.strMealThumb || recipe.strDrinkThumb }];
    const favoriteStringfy = JSON.stringify(favorite);
    localStorage.setItem('favoriteRecipes', favoriteStringfy);
  }

  return (
    <div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleShare }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <button
        type="button"
        onClick={ handleStorageFavorite }
      >
        <img
          src={ imagem }
          data-testid="favorite-btn"
          alt="favorite"
        />
      </button>
      {copied && <div>Link copied!</div>}
    </div>
  );
}
export default ShareFavBtn;
