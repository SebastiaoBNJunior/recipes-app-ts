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
    if (pathname.includes('meal')) {
      navigator.clipboard.writeText(`http://localhost:3000/meals/${id}`);
      setCopied(true);
    } else if (pathname.includes('drink')) {
      navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
      setCopied(true);
    }
  };

  function handleStorageFavorite() {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    const isFavorited = favorites.some((fav) => fav.id === id);
    console.log(recipe);
    if (isFavorited) {
      favorites = favorites.filter((fav) => fav.id !== id);
      setImagem(whiteHeartIcon);
    } else {
      favorites.push({
        id,
        type,
        nationality: recipe.strArea || '',
        category: recipe.strCategory || '',
        alcoholicOrNot: recipe.strAlcoholic || '',
        name: recipe.strMeal || recipe.strDrink,
        image: recipe.strMealThumb || recipe.strDrinkThumb,
      });
      setImagem(blackHeartIcon);
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
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
