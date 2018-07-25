import React, { Component } from 'react';

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

  getElementStyles = () => {
    let styles = { };

    if ( this.state.showTooltip ) {
      // TODO calculate tooltip positioning
      styles = {
        display: "block",
        top: 200 + "px",
        left: 30 + "px"
      }

      return styles;
    }

  }

  render() {
    let tooltipInfo = tooltipData[ this.props.data.toLowerCase() ];

    return (
      <div className="question-help" onFocus={ this.toggleView }  onBlur={ this.toggleView } tabIndex="0">
        <i className="fa fa-question-circle"></i>
        <span className="tooltip" style={ this.getElementStyles() } >
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


export default Tooltip;
