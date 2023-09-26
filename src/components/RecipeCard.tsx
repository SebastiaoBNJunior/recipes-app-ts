import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface RecipeCardProps {
  id: string;
  name: string;
  image: string;
  index: number;
}

function RecipeCard({ id, name, image, index }: RecipeCardProps) {
  const location = useLocation();
  const { pathname } = location;
  const mealsOrDrinks = pathname.slice(1);

  return (
    <div data-testid={ `${index}-recipe-card` } style={ { cursor: 'pointer' } }>
      <Link to={ `/${mealsOrDrinks}/${id}` }>
        <img
          src={ image }
          alt={ name }
          data-testid={ `${index}-card-img` }
          style={ { maxWidth: '200px', height: 'auto' } }
        />

      </Link>
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

export default RecipeCard;
