import React, { Component } from 'react'
import { Link } from "react-router-dom"

class BeerDisplay extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <Link to={`/beer/${this.props.beerID}`}>
        <div className="beer-display">
          <div className="label-container">
              <img src={ this.props.beerLabel } alt="beer label" />
          </div>
          <div className="description-container">
            <h2>{ this.props.beerName }</h2>
            <h3>{ this.props.beerStyle }</h3>
            <div>
              {
                this.props.abv ?
                <div className="label">
                  <span className="title">ABV:</span>
                  <span className="data"> { `${ this.props.abv }%`} </span>
                </div> :
                null
              }

              {
                this.props.ibu ?
                <div className="label">
                  <span className="title">IBU:</span>
                  <span className="data">{ this.props.ibu }</span>
                </div> :
                null
              }
            </div>
          </div>
        </div>
      </Link>
    );
  }

}

export default BeerDisplay;
