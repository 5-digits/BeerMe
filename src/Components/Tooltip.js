import React, { Component } from 'react';
import PropTypes from 'prop-types';

import tooltipData from '../data/tooltipData';

class Tooltip extends Component {

  state = {
    showTooltip: false
  }

  toggleView = () => {
    this.setState( {
      showTooltip : !this.state.showTooltip
    });
  }

  render() {
    let tooltipInfo = tooltipData[ this.props.data.toLowerCase() ];

    return (
      <div className="question-help" tabIndex="0"
        onMouseEnter={ this.toggleView }
        onMouseLeave={ this.toggleView } >
        <i className="fa fa-question-circle"></i>
        <span className="tooltip" data-visible={ this.state.showTooltip } >
          <h3 className="header">
            { tooltipInfo.header }
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
