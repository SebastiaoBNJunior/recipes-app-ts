import React from 'react';
import '../footer.css';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <Link to="/drinks" data-testid="drinks-bottom-link">
        <img
          src={ drinkIcon }
          alt="Bebida"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/meals" data-testid="meals-bottom-link">
        <img
          src={ mealIcon }
          alt="Comida"
          data-testid="meals-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
