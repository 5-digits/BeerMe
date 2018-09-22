import React, { Component } from 'react'

import BeerDisplay from '../Components/BeerDisplay'

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
          <div className="favorites">
            <h1>Favorites</h1>
            <div className="favorites-list">
              {
                (() => {
                  return this.state.favoritesList.map((favorite) => {
                    return (
                      <BeerDisplay
                        key={ favorite.beerID }
                        beerID={ favorite.beerID }
                        beerLabel={ favorite.beerLabel }
                        beerName={ favorite.beerName }
                        beerStyle={ favorite.beerStyle }
                        abv={ favorite.abv }
                        ibu={ favorite.ibu }
                        />
                    )
                  })
                })()
              }
            </div>
          </div> :
          <div className="no-favorites">
            <div className="heart-container">
              <i className="fa fa-heart" aria-hidden="true"></i>
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
