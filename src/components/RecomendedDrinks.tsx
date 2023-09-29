import { useEffect, useState } from 'react';

function MainScreenDrink() {
  const [recommendedFoods, setRecommendedFoods] = useState([]);

  useEffect(() => {
    async function fetchRecommendedFoods() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setRecommendedFoods(data.meals || []);
      } catch (error) {
        console.error('Erro ao buscar recomendações de comidas:', error);
      }
    }

    fetchRecommendedFoods();
  }, []);

  return (
    <div>
      {/* Conteúdo da página de bebidas */}
    </div>
  );
}

export default MainScreenDrink;
