import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
// import SearchBar from './SearchBar';

type HeaderProps = {
  title: string,
  search?: boolean,
};

function Header({ title, search = false }:HeaderProps) {
  return (
    <header>
      <h1 data-testid="page-title">{(title)}</h1>
      <a href="/profile">
        <img
          src={ profileIcon }
          alt="Ícone de perfil"
          data-testid="profile-top-btn"
        />
      </a>
      {search && (
        <img
          src={ searchIcon }
          alt="Ícone de pesquisa"
          data-testid="search-top-btn"
        />
      )}
    </header>
  );
}

export default Header;
