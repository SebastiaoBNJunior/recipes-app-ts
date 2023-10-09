import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FavoriteRecipes() {
  const index = 0;

  const navigate = useNavigate();
  const handleBackProfile = () => {
    navigate('/profile');
  };

  return (
    <>
      <button
        data-testid="profile-back-btn"
        onClick={ handleBackProfile }
      >
        Voltar
      </button>
      <Header title="Favorite Recipes" />
      <button data-testid="filter-by-all-btn">
        All
      </button>
      <button data-testid="filter-by-meal-btn">
        Meals
      </button>
      <button data-testid="filter-by-drink-btn">
        Drinks
      </button>
      <button data-testid="0-horizontal-image">
        Image
      </button>
      <button data-testid="0-horizontal-top-text">
        Image
      </button>
      <button data-testid="0-horizontal-name">
        Image
      </button>
      <button data-testid="0-horizontal-share-btn">
        Image
      </button>
      <button data-testid="0-horizontal-favorite-btn">
        Image
      </button>
      <button data-testid="1-horizontal-image">
        Image
      </button>
      <button data-testid="1-horizontal-top-text">
        Image
      </button>
      <button data-testid="1-horizontal-name">
        Image
      </button>
      <button data-testid="1-horizontal-share-btn">
        Image
      </button>
      <button data-testid="1-horizontal-favorite-btn">
        Image
      </button>
      <Footer />
    </>
  );
}

export default FavoriteRecipes;
