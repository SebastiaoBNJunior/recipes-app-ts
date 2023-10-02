import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function ShareFavBtn() {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const handleShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
    setCopied(true);
  };
  return (
    <div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleShare }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <button type="button" data-testid="favorite-btn">
        <img src={ whiteHeartIcon } alt="favorite" />
      </button>
      {copied && <div>Link copied!</div>}
    </div>
  );
}
export default ShareFavBtn;
