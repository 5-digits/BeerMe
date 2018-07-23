import React, { Component } from 'react';

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
    return (
      <div className="question-help" onFocus={ this.toggleView }  onBlur={ this.toggleView } tabIndex="0">
        <i className="fa fa-question-circle"></i>
        <span className="tooltip" style={ this.getElementStyles() } >
          <h3 className="header">
            { this.props.header }
          </h3>
          <p className="description">
            { this.props.description }
          </p>
        </span>
      </div>
    );
  }

}


export default Tooltip;
