import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class RangeSlider extends Component {
  state = {
    sliderValue : 20
  }

  componentWillMount() {
    // When componet loads, update global state to reflect position of slider
    this.updateStateValue();
  }

  sliderChange = (value) => {
    //Update local state to keep track of slider value
    this.setState( {
      sliderValue: value
    });

  }

  updateStateValue = () => {
    // Update global state of app
    this.props.updateSearchQuery({
      ...this.props.state.searchQuery,
      srmColorID : this.state.sliderValue
    });
  }

  render() {
    return (

     <Slider
       min={this.props.min}
       max={this.props.max}
       tooltip={this.props.tooltip}
       value={ this.state.sliderValue }
       orientation="horizontal"
       onChange={this.sliderChange}
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
