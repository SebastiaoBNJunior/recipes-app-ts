import React, { CSSProperties } from 'react';

function StartRecipeButton() {
  // Estilo para o botão
  const buttonStyle: CSSProperties = {
    position: 'fixed', // fixa o elem. na tela
    bottom: '0', // coloca o elem. na base da tela
    left: '50%', // centraliza horizontalmente
    transform: 'translateX(-50%)', // alinha ao centro
    padding: '10px', // espaçamento ao redor do botão
    backgroundColor: '#f5f5f5', // cor de fundo
    zIndex: 1000, // garante que aparece em cima de outros elementos
  };

  return (
    // Renderiza o botão com o atributo data-testid e com o estilo aplicado diretamente.
    <button style={ buttonStyle } data-testid="start-recipe-btn">
      Start Recipe
    </button>
  );
}

export default StartRecipeButton;
