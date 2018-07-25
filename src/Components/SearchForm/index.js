import React, { Component } from 'react';

import StyleSelect from "./StyleSelect";
import RangeSlider from "./RangeSlider";
import Tooltip from '../Tooltip';

class SearchForm extends Component {

  state = {
    isFormValid: null
  }

  performSearch = (e) => {
    e.preventDefault();
    // Validate form fields before requesting data
    if ( this.validateForm() ) {
      this.props.searchRandomBeer();
    }

  }

  validateForm = () => {
    const currSearchQuery = this.props.state.searchQuery;

    // If both query elements beer styles and SRM are empty, do not validateForm
    let isFormValid = currSearchQuery.beerStyleID !== '' &&  currSearchQuery.srmColorID !== '' ? true : false;

    this.setState({
      isFormValid: isFormValid
    });

    return isFormValid;
  }

  render() {

    let Warning = '';
    if ( this.state.isFormValid === false ) Warning = <span className="warning">Please fill in all of the form fields</span>;

    return (
      <form
        onSubmit= { this.performSearch } onChange={ this.validateForm }>

        <StyleSelect state={ this.props.state } updateSearchQuery={ this.props.updateSearchQuery} />

        <div className="sliders">
          <div className="slider">
            <div className="slider-container" id="srm">
              <span className="before">PALE</span>
              <RangeSlider
                min={1}
                max={40}
                tooltip={true}
                state={ this.props.state }
                updateSearchQuery={ this.props.updateSearchQuery}
                />
              <span className="after">DARK</span>
            </div>
            <label>
              <span>Color (SRM)</span>
              <Tooltip data={ "SRM" } />
            </label>
          </div>
        </div>

        { Warning }

        <button type="submit" className="styles">search</button>
      </form>
    );
  }
}

export default SearchForm;
