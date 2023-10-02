import React, { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';

function StartRecipeButton() {
  const location = useLocation();
  const { pathname } = location;

  // Estilo para o botão
  const buttonStyle: React.CSSProperties = {
    position: 'fixed', // fixa o elem. na tela
    bottom: '0', // coloca o elem. na base da tela
    left: '50%', // centraliza horizontalmente
    transform: 'translateX(-50%)', // alinha ao centro
    padding: '10px', // espaçamento ao redor do botão
    backgroundColor: '#f5f5f5', // cor de fundo
    zIndex: 1000, // garante que aparece em cima de outros elementos
  };

  return (
    // Renderiza o botão como um link para a tela de receita em progresso
    <button>
      <Link
        to={ `${pathname}/in-progress` }
        style={ buttonStyle }
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </Link>
    </button>
  );
}

export default StartRecipeButton;
