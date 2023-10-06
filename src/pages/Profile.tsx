import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  function EletronicMail() {
    const emailVisible = localStorage.getItem('user');
    if (emailVisible) {
      // Converter a string JSON em um objeto JavaScript
      const user = JSON.parse(emailVisible);
      const { email } = user;
      return email;
      // Agora você tem o email disponível para uso
    }
    return '';
  }

  const navigate = useNavigate();

  const handleRedirectDoneRecipes = () => {
    // Use o navigate para ir para a rota desejada
    navigate('/done-recipes');
  };

  const handleRedirectFavoriteRecipes = () => {
    // Use o navigate para ir para a rota desejada
    navigate('/favorite-recipes');
  };

  const handleClearStorage = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <>
      <Header title="Profile" />
      <h2 data-testid="profile-email">{ EletronicMail() }</h2>
      <button
        data-testid="profile-done-btn"
        onClick={ handleRedirectDoneRecipes }
      >
        Done Recipes
      </button>
      <button
        data-testid="profile-favorite-btn"
        onClick={ handleRedirectFavoriteRecipes }
      >
        Favorite Recipes
      </button>
      <button
        data-testid="profile-logout-btn"
        onClick={ handleClearStorage }
      >
        Logout
      </button>
      <Footer />
    </>
  );
}

export default Profile;
