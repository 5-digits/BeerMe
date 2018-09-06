import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyleSelect from "./StyleSelect";
import RangeSlider from "./RangeSlider";
import Tooltip from '../Tooltip';
import Notice from '../Notice';

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFormValid: null
    }

    // bind functions
    this.performSearch = this.performSearch.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }


  /*
   * -- UPSTREAM --
   * Function searchRandomBeer() passed in through props by Search container
   */
  performSearch(e) {
    e.preventDefault();
    // Validate form fields before requesting data
    if ( this.validateForm() ) this.props.searchRandomBeer()

  }

  /*
   * Form is trigger by child component -
   * Needs to have both fields states populated in order to validated
   */
  validateForm() {
    const currSearchQuery = this.props.state.searchQuery;
    // If both query elements beer styles and SRM are empty, do not validateForm
    const isFormValid = currSearchQuery.beerStyleID !== '' &&  currSearchQuery.srmColorID !== '' ? true : false;

    this.setState((prevState, currState ) => {
      //Update state when current validation has been updated from previous state
      if ( prevState.isFormValid !== isFormValid ) {
        return ({
          isFormValid: isFormValid
        })
      }
    });

    return isFormValid;
  }

  render() {
    const Warning = this.state.isFormValid === false ? <Notice type="error" text="Please fill in all of the form fields"/> : null;

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
