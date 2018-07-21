import React, { Component } from 'react';

import Logo from '../images/logo.png';
import '../css/Components/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div id="logo">
          <img src={ Logo } alt="BeerMe" />
        </div>
      </header>
    );
  }
}

export default Header;
