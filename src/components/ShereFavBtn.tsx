import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { useRecipeContext } from '../context/search-results-context';

function ShareFavBtn() {
  const { recipe } = useRecipeContext();
  console.log(recipe);
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const params = useParams();
  const { id } = params;

  function mealOrDrink() {
    if (pathname.includes('meal')) {
      return 'meal';
    } return 'drink';
  }
  const type = mealOrDrink();
  console.log(type);

  const handleShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
    setCopied(true);
  };

  function handleStorageFavorite() {
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
        data-testid="favorite-btn"
        onClick={ handleStorageFavorite }
      >
        <img src={ whiteHeartIcon } alt="favorite" />
      </button>
      {copied && <div>Link copied!</div>}
    </div>
  );
}
export default ShareFavBtn;
