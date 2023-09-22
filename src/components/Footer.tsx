import React from 'react';
import '../footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <a href="/drinks">
        <img
          src={ drinkIcon }
          alt="Bebida"
          data-testid="drinks-bottom-btn"
        />
      </a>
      <a href="/meals">
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
