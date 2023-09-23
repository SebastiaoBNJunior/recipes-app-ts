import { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

type HeaderProps = {
  title: string,
  search?: boolean,
};

function Header({ title, search = false }:HeaderProps) {
  const [button, setButton] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e:any) => {
    setInputValue(e.target.value);
  };

  function handlerBtn() {
    if (!button) {
      setButton(true);
    } else {
      setButton(false);
    }
  }

  return (
    <header>
      <h1 data-testid="page-title">{title}</h1>
      <Link to="/profile">
        <img
          src={ profileIcon }
          alt="Ícone de perfil"
          data-testid="profile-top-btn"
        />
      </Link>
      {search && (
        <button onClick={ handlerBtn }>
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
            <input
              id="search"
              value={ inputValue }
              type="text"
              data-testid="search-input"
              onChange={ handleInputChange }
            />
          </>
        )
      }
      <SearchBar valueInput={ inputValue } />
    </header>
  );
}

export default Header;
