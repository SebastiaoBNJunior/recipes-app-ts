function SearchBar() {
  return (
    <body>
      <label>
        <input type="radio" name="search-type" data-testid="ingredient-search-radio" />
        {' '}
        Busca por Ingrediente
      </label>
      <label>
        <input type="radio" name="search-type" data-testid="name-search-radio" />
        {' '}
        Busca por Nome
      </label>
      <label>
        <input type="radio" name="search-type" data-testid="first-letter-search-radio" />
        {' '}
        Busca pela Primeira Letra
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </body>
  );
}

export default SearchBar;
