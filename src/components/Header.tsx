import { useState } from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
// import SearchBar from './SearchBardf';

type HeaderProps = {
  title: string,
  search?: boolean,
};

function Header({ title, search = false }:HeaderProps) {
  const [button, setButton] = useState(false);

  function handlerBtn() {
    if (!button) {
      setButton(true);
    } else {
      setButton(false);
    }
  }

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
        <button
          onClick={ handlerBtn }
        >
          <img
            src={ searchIcon }
            data-testid="search-top-btn"
            alt="Ícone de pesquisa"
          />
        </button>
      )}
      {
        button && (
          <>
            <label htmlFor="search">Busca:</label>
            <input id="search" type="text" data-testid="search-input" />
          </>)
      }
    </header>
  );
}

export default Header;
