import React, { useEffect, useState, useRef } from 'react';
import '../Recommended.css';

function RecommendedToEat() {
  const [recommendedFoods, setRecommendedFoods] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchRecommendedFoods() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setRecommendedFoods(data.meals || []);
      } catch (error) {
        console.error('Erro ao buscar recomendações de Comidas:', error);
      }
    }

    fetchRecommendedFoods();
  }, []);

  return (
    <div className="container">
      <div className="carousel" ref={ containerRef }>
        {recommendedFoods.slice(0, 6).map((meal, index) => (
          <div
            className="card"
            key={ index }
            data-testid={ `${index}-recommendation-card` }
          >
            <p data-testid={ `${index}-recommendation-title` }>{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedToEat;
