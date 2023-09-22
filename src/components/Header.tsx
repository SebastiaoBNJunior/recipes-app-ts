import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
// import SearchBar from './SearchBar';

function Header() {
  return (
    <header>
      <h1 data-testid="page-title">Título</h1>
      <img
        src={ profileIcon }
        alt="Ícone de perfil"
        data-testid="profile-top-btn"
      />
      <img
        src={ searchIcon }
        alt="Ícone de pesquisa"
        data-testid="search-top-btn"
      />

    </header>
  );
}

export default Header;
