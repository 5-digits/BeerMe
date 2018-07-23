import React from 'react';

import Logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <div id="logo">
        <img src={ Logo } alt="BeerMe" />
      </div>
    </header>
  );
}

export default Header;
