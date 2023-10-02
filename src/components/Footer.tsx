import React from 'react';
import '../footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import { useRecipeContext } from '../context/search-results-context';

function Footer() {
  const { setClickButton } = useRecipeContext();

  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <a
        href="/drinks"
        data-testid="drinks-bottom-link"
        onClick={ () => setClickButton(true) }
      >
        <img
          src={ drinkIcon }
          alt="Bebida"
          data-testid="drinks-bottom-btn"
        />
      </a>
      <a
        href="/meals"
        data-testid="meals-bottom-link"
        onClick={ () => setClickButton(true) }
      >
        <img
          src={ mealIcon }
          alt="Comida"
          data-testid="meals-bottom-btn"
        />
      </a>
    </footer>
  );
}

export default Footer;
