import React, { Component } from 'react';

import Notice from './Notice'

class Favorite extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: "floating",
      isFavorite: false,
      beerName : null,

    }

    // bind functions
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    this.setState({
      type: this.props.type
    })
  }

  handleClick() {
    this.setState( (prevState ) => {
      return ({
        isFavorite: !prevState.isFavorite
      })
    })

  }

  render() {
    return (
      <span className={ `favorite-widget ${this.state.type}` } onClick={ this.handleClick }>
        <i className={ this.state.isFavorite ? "fa fa-heart" : "fa fa-heart-o" } aria-hidden="true"></i>
      </span>
    );
  }

}

export default Favorite;
