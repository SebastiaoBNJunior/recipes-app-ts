import { useEffect, useState } from 'react';

function MainScreenFood() {
  const [recommendedDrinks, setRecommendedDrinks] = useState([]);

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
    <div>
      {/* Conteúdo da página de alimentos */}
    </div>
  );
}

export default MainScreenFood;
