import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <>
      <Header title="Profile" />
      <input
        type="email"
        data-testid="profile-email"
      />
      <button
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>
      <button
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <Footer />
    </>
  );
}

export default Profile;
