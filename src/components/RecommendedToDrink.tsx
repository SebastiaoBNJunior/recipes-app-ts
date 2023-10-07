import React, { useEffect, useState, useRef } from 'react';
import '../Recommended.css';

function RecommendedtoDrink() {
  const [recommendedDrinks, setRecommendedDrinks] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchRecommendedDrinks() {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setRecommendedDrinks(data.drinks || []);
      } catch (error) {
        console.error('Erro ao buscar recomendações de bebidas:', error);
      }
    }

    fetchRecommendedDrinks();
  }, []);

  return (
    <div className="container">
      <div className="carousel" ref={ containerRef }>
        {recommendedDrinks.slice(0, 6).map((drink, index) => (
          <div
            className="card"
            key={ index }
            data-testid={ `${index}-recommendation-card` }
          >
            <p
              data-testid={ `${index}-recommendation-title` }
            >
              {drink.strDrink}

            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedtoDrink;
