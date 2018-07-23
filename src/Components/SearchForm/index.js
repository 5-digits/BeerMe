import React, { Component } from 'react';

import StyleSelect from "./StyleSelect";
import RangeSlider from "./RangeSlider";
import Tooltip from '../Tooltip';

class SearchForm extends Component {

  state = {
    isFormValid: false
  }

  performSearch = (e) => {
    e.preventDefault();
    console.log('Form Object');
    console.log(this);

    if ( this.validateForm() ) {
      console.log('Submiting Form');
    } else {
      console.log('Cant submit form, because is not valid');
    }

  }

  validateForm = () => {
    const currSearchQuery = this.props.state.searchQuery;
    console.log(currSearchQuery);
    // If both query elements beer styles and SRM are empty, do not validateForm
    return ( currSearchQuery.beerStyleID !== '' &&  currSearchQuery.srmColorID !== '' ? true : false );
  }

  render() {
    return (
      <form
        onSubmit= { this.performSearch } >

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
              <Tooltip
                header={ "Standard Reference Method " }
                description={ "Standard Reference Method (SRM) is used to measure a beer's color. It goes from 1 to 40+, with 1 being the lightest and 40+ being almost black in color." }
                />
            </label>
          </div>
        </div>
        <button type="submit" className="styles">search</button>
      </form>
    );
  }
}

export default SearchForm;
