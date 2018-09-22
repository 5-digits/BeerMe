import React, { Component } from 'react'
import Notice from './Notice'

class Favorite extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
      showNotice: null
    }

    // bind functions
    this.handleClick = this.handleClick.bind(this)
    this.addToFavorites = this.addToFavorites.bind(this)
    this.removeFromFavorites = this.removeFromFavorites.bind(this)
    this.existInFavoriteList = this.existInFavoriteList.bind(this)
    this.removeNotice = this.removeNotice.bind(this)
  }

  componentDidMount() {
    // Initiate FAVORITES in local storage, if it doesn't already result
    if ( typeof localStorage.FAVORITES === 'undefined' ) localStorage.setItem("FAVORITES", JSON.stringify([]))

    // Check if current beer ID is in the favorite list and update state
    if ( this.existInFavoriteList() ) {
      this.setState({
        isFavorite: true
      })
    }
  }

  componentWillMount() {
    //remove timeout before unmounting component 
    clearTimeout( window.noticeTimer )
  }

  handleClick() {
    this.setState( (prevState ) => {

      return ({
        isFavorite: !prevState.isFavorite,
        showNotice: true
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
    const newFavoriteList = [
      ...prevFavoriteList ,
      {
        beerID : this.props.beerID,
        beerLabel: this.props.beerLabel,
        beerName: this.props.beerName,
        beerStyle: this.props.beerStyle,
        abv: this.props.abv,
        ibu: this.props.ibu,
      }
    ]
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

  /*
  * Check if beer is in favorites list
  */
  existInFavoriteList() {
    const favoriteList = JSON.parse( localStorage.getItem("FAVORITES") )
    const matchedID = favoriteList.find( favorite => favorite.beerID === this.props.beerID )
    return typeof matchedID !== 'undefined' ? true : false;
  }

  /*
  * Update state to remove notice from UI
  */
  removeNotice() {
      this.setState({
        showNotice: false
      })
  }

  render() {
    // Check if timer exist in order to clear it from window, so that we can restart the timing
    if( window.noticeTimer ) clearTimeout( window.noticeTimer )

    // Start count down to remove notice from UI
    if ( this.state.showNotice ) {
      window.noticeTimer = setTimeout( () => {
        this.removeNotice()
      }, 3000)
    }

    return (
      <div>
        <span className={ `favorite-widget ${this.props.type || "floating"}` } onClick={ this.handleClick }>
          <i className={ this.state.isFavorite ? "fa fa-heart" : "fa fa-heart-o" } aria-hidden="true"></i>
        </span>
        {
          this.state.showNotice !== null ?
          <Notice type={ this.state.showNotice ? "favorites in" : "favorites out"  } text={ this.state.isFavorite ? "Added to Favorites" : "Removed to Favorites" } /> :
          null
        }
      </div>

    );
  }

}

export default Favorite;
