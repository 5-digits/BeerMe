import React, { Component } from 'react'

import { Link } from "react-router-dom"

class Favorites extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favoritesList: [],
    }
    // Bind functions

  }

  componentDidMount() {

    if ( typeof localStorage.FAVORITES !== 'undefined' ) {
      const favoritesList = JSON.parse( localStorage.getItem("FAVORITES") )
      if ( favoritesList.length ) {
        this.setState({
          favoritesList : favoritesList
        })
      }
    }
  }

  render() {
    return (
      <section id="favorites-section">
        {
          this.state.favoritesList.length > 0 ?
          (() => {
            return this.state.favoritesList.map((favorite) => {
              //TODO add beer display component
              return (
                <div key={ favorite.beerID}>
                  <Link to={`/beer/${favorite.beerID}`}>{ favorite.beerID }</Link>
                </div>
              )
            })
          })() :
          //TODO create no results section
          <div className="no-favorites">
            <div className="heart-container">
              <i className="fa fa-heart"></i>
            </div>
            <h1>No beers found in your favorites list!</h1>
          </div>
        }
      </section>
    );
  }
}

Favorites.propTypes = {

};

export default Favorites;
