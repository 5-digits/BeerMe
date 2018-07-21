import React, { Component } from 'react';

//Styles
import '../css/search.css';

class Search extends Component {
  render() {
    return (
      // TODO figure out where to move the liquid pour div
      // <div id="liquid"></div>
      <section id="search-section">
        <div id="search">
          <div className="main-header">
            <h1>Find your next favorite beer!</h1>
          </div>
          <form>
            <select id="select-tools" placeholder="Choose your style..."></select>
            <div className="sliders">
              <div className="slider">
                <div className="slider-container" id="srm">
                  <span className="before">PALE</span>
                  <input type="range"
                         min="1"
                         max="40"
                         step="1"
                         value="20"
                         data-orientation="horizontal"/>
                  <span className="after">DARK</span>
                </div>
                <label>
                  <span>Color (SRM)</span>
                  <div className="question-help">
                    <i className="fa fa-question-circle"></i>
                    <span className="tooltip">
                      <div className="header">Standard Reference Method</div>
                      <div className="description">
                        Standard Reference Method (SRM) is used to measure a beer's color. It goes from 1 to 40+, with 1 being the lightest and 40+ being almost black in color.
                      </div>
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <input type="submit" className="styles" value="search" />
          </form>
        </div>
      </section>
    );
  }
}

export default Search;
