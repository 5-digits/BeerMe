import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import beerStyles from '../../data/BeerStylesData';

class StyleSelect extends Component {

  state = {
    beerStyle : ''
  }

  onSelectChange = ( selection ) => {

      //set local state to change display name on select dropdown
      this.setState( {
        beerStyle : selection
      });

      const beerStyleID = selection ? selection.value : '';

      this.props.updateSearchQuery({
        ...this.props.state.searchQuery,
        beerStyleID : beerStyleID
      });
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

export default StyleSelect;
