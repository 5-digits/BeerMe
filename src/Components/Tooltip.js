import React, { Component } from 'react';
import PropTypes from 'prop-types';

import tooltipData from '../data/tooltipData';

class Tooltip extends Component {

  state = {
    showTooltip: false
  }

  toggleView = ( event, state ) => {
    event.stopPropagation();

    let showTooltip;
    switch (state) {
      case "OPEN":
        showTooltip = true;
        break;
      case "CLOSE":
        showTooltip = false;
        break;
      default:
        showTooltip = !this.state.showTooltip
    }

    this.setState( {
      showTooltip : showTooltip
    });
  }

  render() {
    let tooltipInfo = tooltipData[ this.props.data.toLowerCase() ];

    return (
      <div className="question-help" tabIndex="0"
        onClick={ (e) => { this.toggleView(e, "OPEN"); } }
         >
        <i className="fa fa-question-circle"></i>
        <span className="tooltip" data-visible={ this.state.showTooltip } >
          <h3 className="header">
            { tooltipInfo.header }
            <i className="fa fa-times close" aria-hidden="true" onClick={ (e) => { this.toggleView(e, "CLOSE"); } }></i>
          </h3>
          <p className="description">
            { tooltipInfo.description }
          </p>
        </span>
      </div>
    );
  }

}

Tooltip.propTypes = {
  data: PropTypes.string.isRequired,
};


export default Tooltip;
