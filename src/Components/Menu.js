import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state= {
      isOpened: false
    }

    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openMenu() {
    this.setState({
      isOpened: true
    })
  }

  closeMenu(e) {
    e.stopPropagation();
    this.setState({
      isOpened: false
    })
  }

  render() {
    return (
      <div className="menu-container" data-opened={ this.state.isOpened }>
        <div className="menu-button button" onClick={ this.openMenu }>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="menu-items-container" onClick={ this.closeMenu }>
          <div className="menu-overlay" />
          <div className="menu-items">
            <ul>
              <li onClick={ this.closeMenu }>
                <span>Close</span>
                <div className="button">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </li>
              <li>
                <Link to="/">
                  <span>Search</span>
                  <div className="button">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/favorites">
                  <span>Favorites</span>
                  <div className="button">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
