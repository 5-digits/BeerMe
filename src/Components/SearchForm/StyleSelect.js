import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import beerStyles from '../../data/BeerStylesData';

class StyleSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      beerStyle : ''
    }

    // Bind functions
    this.onSelectChange = this.onSelectChange.bind(this)

  }

  /*
   * -- DOWNSTREAM & UPSTREAM --
   * Keep track of local state for the select input
   * As well as update global state upstream - Function passed in through props
   */
  onSelectChange(selection) {
      // Get the value of the selection to pass to global state
      const beerStyleID = selection ? selection.value : '';

      // Only update states when value selected are different to prevent additional rendering
      if ( selection.value !== this.state.beerStyle.value ) {
        //set local state to change display name on select dropdown
        this.setState( {
          beerStyle : selection
        })

        //Update global state for the search query
        this.props.updateSearchQuery({
          ...this.props.state.searchQuery,
          beerStyleID : beerStyleID
        });
      }

  }

  render() {
    return (
      <Select
        name="form-field-name"
        placeholder="Choose your style..."
        value={ this.state.beerStyle }
        onChange={this.onSelectChange}
        options={ beerStyles }
      />
    );
  }
}

StyleSelect.propTypes = {
  state : PropTypes.object.isRequired,
  updateSearchQuery : PropTypes.func.isRequired
}

export default StyleSelect;
