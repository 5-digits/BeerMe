import React, { Component } from 'react';

class Favorite extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
    }

    // bind functions
    this.handleClick = this.handleClick.bind(this)
    this.addToFavorites = this.addToFavorites.bind(this)
    this.removeFromFavorites = this.removeFromFavorites.bind(this)
  }

  componentDidMount() {
    // Initiate FAVORITES in local storage, if it doesn't already result
    if ( typeof localStorage.FAVORITES === 'undefined' ) localStorage.setItem("FAVORITES", JSON.stringify([]))
  }

  handleClick() {
    this.setState( (prevState ) => {
      return ({
        isFavorite: !prevState.isFavorite
      })
    })

    // Save or remove from local storage, when local storage is available
    if ( typeof Storage !== "undefined" ) {
      if ( !this.state.isFavorite ) {
        this.addToFavorites()
      } else {
        this.removeFromFavorites()
      }
    }
  }

  /*
  * Add favorite beer to local storage
  */
  addToFavorites() {
    const prevFavoriteList = JSON.parse( localStorage.getItem("FAVORITES") )
    //TODO expand items to save on local storage
    const newFavoriteList = [ ...prevFavoriteList , { beerID : this.props.beerID } ]
    localStorage.setItem( "FAVORITES", JSON.stringify(newFavoriteList) )

  }

  /*
  * Remove favorite beer to local storage
  */
  removeFromFavorites() {
    const prevFavoriteList = JSON.parse( localStorage.getItem("FAVORITES") )
    // Remove id from list and return a clean list
    const newFavoriteList = prevFavoriteList.filter( favorite => favorite.beerID !== this.props.beerID )
    localStorage.setItem( "FAVORITES", JSON.stringify(newFavoriteList) )
  }

  render() {
    return (
      <span className={ `favorite-widget ${this.props.type || "floating"}` } onClick={ this.handleClick }>
        <i className={ this.state.isFavorite ? "fa fa-heart" : "fa fa-heart-o" } aria-hidden="true"></i>
      </span>
    );
  }

}

export default Favorite;
