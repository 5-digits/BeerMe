import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyleSelect from "./StyleSelect";
import RangeSlider from "./RangeSlider";
import Tooltip from '../Tooltip';

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFormValid: null
    }
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

    let Warning = this.state.isFormValid === false ? <span className="warning">Please fill in all of the form fields</span> : '';

    return (
      <form onSubmit= { this.performSearch }  >

        <StyleSelect state={ this.props.state } updateSearchQuery={ this.props.updateSearchQuery} />

        <div className="sliders">
          <div className="slider">
            <div className="slider-container" id="srm">
              <span className="before">PALE</span>
              <RangeSlider
                min={1}
                max={40}
                tooltip={ true }
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

SearchForm.propTypes = {
  state : PropTypes.object.isRequired,
  updateSearchQuery : PropTypes.func.isRequired,
  searchRandomBeer : PropTypes.func.isRequired
};

export default SearchForm;
