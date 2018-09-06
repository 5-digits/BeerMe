import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class RangeSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderValue : 20
    }

    // Bind functions
    this.sliderChange = this.sliderChange.bind(this)
    this.updateStateValue = this.updateStateValue.bind(this)

  }

  componentWillMount() {
    // When componet loads, update global state to reflect position of slider
    this.updateStateValue();
  }

  /*
   * -- DOWNSTREAM --
   * Keep track of local state for the slider
   * Function is hooked to slider onChange method
   */
  sliderChange(value) {
    //Onlu Update local state when value has changed
    this.setState( (prevState) => {
      if ( prevState.sliderValue !== value ) {
        return ({
          sliderValue: value
        })
      }
    })
  }

  /*
   * -- UPSTREAM --
   * Receives function through props to update global state
   */
  updateStateValue() {
    // Only Update global state of app when srm value has changed locally
    if ( this.props.state.searchQuery.srmColorID !== this.state.sliderValue ) {
      this.props.updateSearchQuery({
        ...this.props.state.searchQuery,
        srmColorID : this.state.sliderValue
      });
    }

  }

  render() {
    return (
     <Slider
       min={this.props.min}
       max={this.props.max}
       tooltip={this.props.tooltip}
       value={ this.state.sliderValue }
       orientation="horizontal"
       onChange={ this.sliderChange }
       onChangeComplete={ this.updateStateValue }
     />
    );
  }
}

RangeSlider.propTypes = {
  state: PropTypes.object.isRequired,
  updateSearchQuery: PropTypes.func.isRequired
}

export default RangeSlider;
